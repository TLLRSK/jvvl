"use server";
import db from "@/utils/db";
import { currentUser, User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { imageSchema, productSchema, validateWithZodSchema } from "./schemas";
import { deleteImage, uploadImage } from "./supabase";
import { revalidatePath } from "next/cache";
import { Product } from "@prisma/client";
import { FormProduct } from "./types";

const getAuthUser = async () => {
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
  const validatedThumbnailFile = validateWithZodSchema(imageSchema, { image: thumbnailFile });
  const validatedModelFile = validateWithZodSchema(imageSchema, { image: modelFile });
  const validatedGalleryFiles = galleryFiles.map((img) => {
    const validated = validateWithZodSchema(imageSchema, { image: img });
    return validated.image;
  });
  
  return {
    ...validatedFields,
    thumbnailImage: validatedThumbnailFile.image,
    modelImage: validatedModelFile.image,
    galleryImages: validatedGalleryFiles
  };
};

const createProductObject = async (user: User, formData: FormData) => {
  
  const validatedProductData = validatedData(formData);
  const { thumbnailImage, modelImage, galleryImages } = validatedProductData;
  
  const thumbnailImagePath = thumbnailImage instanceof File ? await uploadImage(thumbnailImage) : thumbnailImage;
  const modelImagePath = modelImage instanceof File ? await uploadImage(modelImage) : modelImage;
  const galleryImagesPath = await Promise.all(
    galleryImages.map((file) => file instanceof File ? uploadImage(file) : file)
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

export const deleteProductAction = async (
  prevState: { productId: string },
) => {
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

const deleteReplacedImages = async (prevState: Product, updatedProduct: FormProduct) => {
  if (prevState.thumbnailImage !== updatedProduct.thumbnailImage) await deleteImage(prevState.thumbnailImage);
  if (prevState.modelImage !== updatedProduct.modelImage) await deleteImage(prevState.modelImage);
  await Promise.all(prevState.galleryImages.map(async (img) => {
    if (!updatedProduct.galleryImages?.includes(img)) {
      await deleteImage(img);
    }
  }));
}

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

export const addToCartAction = async (prevState: any, formData: FormData) => {
  const user = await getAuthUser();
  try {
    const productId = formData.get('productId') as string;
    return { message: "Product added to cart"}
  } catch (error) {
    return renderError(error);
  }
  redirect('/cart');
};