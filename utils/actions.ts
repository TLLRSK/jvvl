"use server";
import db from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { productSchema, validateWithZodSchema } from "./schemas";
import { deleteImage, uploadImage } from "./supabase";
import { revalidatePath } from "next/cache";
import { Product } from "@prisma/client";
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
export const addToCartAction = async (prevState: any, formData: FormData) => {
  return { message: "product added to the cart " };
};

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : `There was an error`,
  };
};

const createProductObject = async (user: any, formData: FormData) => {
  const galleryImages = formData.getAll("galleryImages") as File[];
  const rawData = Object.fromEntries(formData);
  const formattedData = {
    ...rawData,
    galleryImages,
  };
  const validatedFields = validateWithZodSchema(productSchema, formattedData);
  const thumbnailImagePath = await uploadImage(validatedFields.thumbnailImage);
  const modelImagePath = await uploadImage(validatedFields.modelImage);
  const galleryImagesPath = await Promise.all(
    validatedFields.galleryImages.map((image) => uploadImage(image))
  );

  const data = {
    ...validatedFields,
    thumbnailImage: thumbnailImagePath as string,
    modelImage: modelImagePath as string,
    galleryImages: galleryImagesPath as string[],
    attributes: validatedFields.attributes as string[],
    sizes: validatedFields.sizes as string[],
    clerkId: user.id,
  };
  console.log("creating product: ", data);
  return data;
};



export const createProductAction = async (
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const data = await createProductObject(user, formData);
    console.log("data: ", data);
    await db.product.create({
      data: data,
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
  const { productId } = prevState;
  const deleteImages = async (product: Product) => {
    await deleteImage(product.thumbnailImage);
    await deleteImage(product.modelImage);
    await Promise.all(product.galleryImages.map((image) => deleteImage(image)));
  };
  await getAdminUser();

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

export const updateProductAction = async (
  prevState: any,
  formData: FormData
) => {
  const productId = formData.get('id') as string;
  const user = await getAdminUser();
  const data = await createProductObject(user, formData);

  await db.product.update({
    where: {
      id: productId,
    },
    data: data,
  });
  revalidatePath(`/admin/products/${productId}/edit`);
  return { message: "Product updated successfully." };
};
export const updateProductImagesAction = async (
  prevState: any,
  formData: FormData
) => {
  await getAuthUser();
  try {
    const data = Object.fromEntries(formData);
    console.log("image data: ", data)
    const productId = formData.get('id') as string;
    const imageType = formData.get('imageType') as string;
    console.log("imageType: ", imageType)
    const oldImageUrl = formData.get('url') as string;
    console.log("oldImageUrl: ", oldImageUrl)
    return { message: "Product updated successfully." };
  } catch (error) {
    return renderError(error);
  }
};
