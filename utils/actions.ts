"use server";
import db from "@/utils/db";
import { auth, currentUser, User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { imageSchema, productSchema, validateWithZodSchema } from "./schemas";
import { deleteImage, uploadImage } from "./supabase";
import { revalidatePath } from "next/cache";
import { Product } from "@prisma/client";
import { FormProduct } from "./types";
import { Cart } from "@prisma/client";

export const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect("/");
  return user;
};

const getAdminUser = async () => {
  const user = await getAuthUser();
  if (user.id !== process.env.ADMIN_USER_ID) redirect("/");
  return user;
};

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = ({ search = "" }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [{ name: { contains: search, mode: "insensitive" } }],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect("/products");
  }
  return product;
};

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : `There was an error`,
  };
};

const validatedData = (formData: FormData) => {
  const rawData = Object.fromEntries(formData);
  const thumbnailFile = formData.get("thumbnailImage") as File;
  const modelFile = formData.get("modelImage") as File;
  const galleryFiles = formData.getAll("galleryImages") as File[];

  const validatedFields = validateWithZodSchema(productSchema, rawData);
  const validatedThumbnailFile = validateWithZodSchema(imageSchema, {
    image: thumbnailFile,
  });
  const validatedModelFile = validateWithZodSchema(imageSchema, {
    image: modelFile,
  });
  const validatedGalleryFiles = galleryFiles.map((img) => {
    const validated = validateWithZodSchema(imageSchema, { image: img });
    return validated.image;
  });

  return {
    ...validatedFields,
    thumbnailImage: validatedThumbnailFile.image,
    modelImage: validatedModelFile.image,
    galleryImages: validatedGalleryFiles,
  };
};

const createProductObject = async (user: User, formData: FormData) => {
  const validatedProductData = validatedData(formData);

  const { thumbnailImage, modelImage, galleryImages } = validatedProductData;

  const thumbnailImagePath =
    thumbnailImage instanceof File
      ? await uploadImage(thumbnailImage)
      : thumbnailImage;

  const modelImagePath =
    modelImage instanceof File ? await uploadImage(modelImage) : modelImage;

  const galleryImagesPath = await Promise.all(
    galleryImages.map((file) =>
      file instanceof File ? uploadImage(file) : file
    )
  );

  const productData = {
    ...validatedProductData,
    thumbnailImage: thumbnailImagePath,
    modelImage: modelImagePath,
    galleryImages: galleryImagesPath,
    attributes: validatedProductData.attributes as string[],
    sizes: validatedProductData.sizes as string[],
    clerkId: user.id,
  };

  return productData;
};

export const createProductAction = async (
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const productData = await createProductObject(user, formData);

    await db.product.create({
      data: productData,
    });
    return { message: "Product created successfully" };
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
};

export const fetchAdminProducts = async () => {
  await getAdminUser();
  const products = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};

export const deleteProductAction = async (prevState: { productId: string }) => {
  await getAdminUser();
  const { productId } = prevState;
  const deleteImages = async (product: Product) => {
    await deleteImage(product.thumbnailImage);
    await deleteImage(product.modelImage);
    await Promise.all(product.galleryImages.map((image) => deleteImage(image)));
  };
  try {
    const product = await db.product.delete({
      where: {
        id: productId,
      },
    });
    await deleteImages(product);
    revalidatePath("/admin/products");
    return { message: "product removed" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchAdminProductDetails = async (productId: string) => {
  await getAdminUser();
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect("/admin/products");
  return product;
};

const deleteReplacedImages = async (
  prevState: Product,
  updatedProduct: FormProduct
) => {
  if (prevState.thumbnailImage !== updatedProduct.thumbnailImage)
    await deleteImage(prevState.thumbnailImage);
  if (prevState.modelImage !== updatedProduct.modelImage)
    await deleteImage(prevState.modelImage);
  await Promise.all(
    prevState.galleryImages.map(async (img) => {
      if (!updatedProduct.galleryImages?.includes(img)) {
        await deleteImage(img);
      }
    })
  );
};

export const updateProductAction = async (
  prevState: Product,
  formData: FormData
) => {
  const user = await getAuthUser();
  const productId = prevState.id;
  const productData = await createProductObject(user, formData);

  try {
    await db.product.update({
      where: {
        id: productId,
      },
      data: productData,
    });
    deleteReplacedImages(prevState, productData);
    revalidatePath(`/admin/products/${productId}/edit`);
    return { message: "Product updated successfully." };
  } catch (error) {
    console.error("Error updating product:", error);
    return { error: "Failed to update product." };
  }
};

const includeProductClause = {
  cartItems: {
    include: {
      product: true,
    },
  },
};

export const fetchFavoriteId = async ({ productId }: { productId: string }) => {
  const user = await getAuthUser();
  const favorite = await db.favorite.findFirst({
    where: {
      productId,
      clerkId: user.id,
    },
    select: {
      id: true,
    },
  });
  return favorite?.id || null;
};

export const toggleFavoriteAction = async (prevState: {
  productId: string;
  favoriteId: string | null;
  pathname: string;
}) => {
  const user = await getAuthUser();
  const { productId, favoriteId, pathname } = prevState;

  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    } else {
      await db.favorite.create({
        data: {
          productId,
          clerkId: user.id,
        },
      });
    }
    revalidatePath(pathname);
    return { message: favoriteId ? "Removed from Favs" : "Added to Favs" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchUserFavorites = async () => {
  const user = await getAuthUser();
  const favorites = await db.favorite.findMany({
    where: {
      clerkId: user.id,
    },
    include: {
      product: true,
    },
  });
  return favorites;
};

export const fetchOrCreateCart = async ({
  userId,
  errorOnFailure = false,
}: {
  userId: string;
  errorOnFailure?: boolean;
}) => {
  let cart = await db.cart.findFirst({
    where: {
      clerkId: userId,
    },
    include: includeProductClause,
  });
  if (!cart && errorOnFailure) throw new Error("Cart not found");
  if (!cart) {
    cart = await db.cart.create({
      data: {
        clerkId: userId,
      },
      include: includeProductClause,
    });
  }
  return cart;
};

export const fetchCartItems = async () => {
  const { userId } = auth();
  const cart = await db.cart.findFirst({
    where: {
      clerkId: userId ?? "",
    },
    select: {
      numItemsInCart: true,
    },
  });
  return cart?.numItemsInCart || 0;
};

const createCartItem = async ({
  productId,
  cartId,
  size,
}: {
  productId: string;
  cartId: string;
  size: string;
}) => {
  let cartItem = await db.cartItem.findFirst({
    where: {
      productId,
      cartId,
    },
  });
  if (!cartItem) {
    cartItem = await db.cartItem.create({
      data: { productId, cartId, size },
    });
  } else {
    throw new Error("Product is already in your cart.");
  }
};

export const updateCart = async (cart: Cart) => {
  const cartItems = await db.cartItem.findMany({
    where: {
      cartId: cart.id,
    },
    include: {
      product: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  let numItemsInCart = 0;
  let cartTotal = 0;

  for (const item of cartItems) {
    numItemsInCart++;
    cartTotal += item.product.price;
  }
  const tax = cart.taxRate * cartTotal;
  const shipping = cartTotal ? cart.shipping : 0;
  const orderTotal = cartTotal + tax + shipping;

  const currentCart = await db.cart.update({
    where: {
      id: cart.id,
    },
    data: {
      numItemsInCart,
      cartTotal,
      tax,
      orderTotal,
    },
    include: includeProductClause,
  });
  return { cartItems, currentCart };
};

export const addToCartAction = async (formData: FormData) => {
  const user = await getAuthUser();
  try {
    const productId = formData.get("productId") as string;
    const size = formData.get("size") as string;
    const product = await fetchSingleProduct(productId);
    const cart = await fetchOrCreateCart({ userId: user.id });
    await createCartItem({ productId, cartId: cart.id, size });
    await updateCart(cart);
    revalidatePath(`/products/${product.id}`);
    return { message: "Product added to cart" };
  } catch (error) {
    return renderError(error);
  }
};

export const removeCartItemAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await getAuthUser();
  const cartItemId = (await formData.get("id")) as string;
  const pathname = (await formData.get("pathname")) as string;

  try {
    const cart = await fetchOrCreateCart({
      userId: user.id,
      errorOnFailure: true,
    });
    await db.cartItem.delete({
      where: {
        id: cartItemId,
        cartId: cart.id,
      },
    });
    revalidatePath(pathname);
    await updateCart(cart);
    return { message: "Cart item removed succesfully" };
  } catch (error) {
    return renderError(error);
  }
};

export const createOrderAction = async (prevState: any, formData: FormData) => {
  const user = await getAuthUser();
  let orderId: null | string = null;
  let cartId: null | string = null;

  try {
    const cart = await fetchOrCreateCart({
      userId: user.id,
      errorOnFailure: true,
    });

    cartId = cart.id;
    await db.order.deleteMany({
      where: {
        clerkId: user.id,
        isPaid: false,
      },
    });

    const order = await db.order.create({
      data: {
        clerkId: user.id,
        products: cart.numItemsInCart,
        shipping: cart.shipping,
        orderTotal: cart.orderTotal,
        email: user.emailAddresses[0].emailAddress,
      }
    });
    orderId = order.id;
  } catch (error) {
    renderError(error);
  }
  redirect(`/checkout?orderId=${orderId}&cartId=${cartId}`);
};

export const fetchUserOrders = async () => {
  const user = await getAuthUser();

  const orders = await db.order.findMany({
    where: {
      clerkId: user.id,
      isPaid: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return orders;
};

export const fetchAdminOrders = async () => {
  await getAdminUser();
  const orders = await db.order.findMany({
    where: {
      isPaid: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return orders;
};
