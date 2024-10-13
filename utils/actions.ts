"use server";
import db from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { imageSchema, productSchema, validateWithZodSchema } from "./schemas";
import { uploadImage } from "./supabase";
const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect("/");
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

export const createProductAction = async (
  prevstate: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  const renderError = (error: unknown): { message: string } => {
    return {
      message: error instanceof Error ? error.message : `There was an error`,
    };
  };
  try {
    const rawData = Object.fromEntries(formData);
    const formattedData = {
      ...rawData,
      galleryImages: formData.getAll("galleryImages") as File[],
    };

    // console.log("formatted data: ", formattedData);

    const validatedFields = validateWithZodSchema(productSchema, formattedData);
    const thumbnailImagePath = await uploadImage(validatedFields.thumbnailImage)
    const modelImagePath = await uploadImage(validatedFields.modelImage)
    const galleryImagesPath = await Promise.all(validatedFields.galleryImages.map((image) => uploadImage(image)))

    console.log("validatedFields: ", validatedFields);
    console.log(thumbnailImagePath)
    await db.product.create({
      data: {
        ...validatedFields,
        thumbnailImage: thumbnailImagePath,
        modelImage: modelImagePath,
        galleryImages: galleryImagesPath,
        clerkId: user.id,
      },
    })
    return { message: `Product created successfully` };
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
};
