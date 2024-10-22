import { z, ZodSchema } from "zod";

const validateImageFile = () => {
  const maxUploadSize = 1024 * 1024; // 1MB
  const acceptedFileTypes = ["image/"];

  return z.union([
    z.string().url({ message: "Image must be a valid URL" }),
    z.instanceof(File, { message: "Please select a valid image file" })
  ])
  .refine((fileOrUrl) => {
    if (typeof fileOrUrl === "string") return true;
    return fileOrUrl.size <= maxUploadSize;
  }, "File size must be less than 1MB")
  .refine((fileOrUrl) => {
    if (typeof fileOrUrl === "string") return true;
    return acceptedFileTypes.some((type) => fileOrUrl.type.startsWith(type));
  }, "File must be an image");
};

const validateStringArraySchema = () => {
  return z.preprocess((val) => {
    if (typeof val === "string") {
      try {
        return JSON.parse(val);
      } catch {
        return [];
      }
    }
  }, z.array(z.string()).min(1, "At least one item is required"));
};

export const imageSchema = z.object({
  image: validateImageFile(),
});

export const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name value must be at least 2 characters",
    })
    .max(100, {
      message: "Name value must be less than 100 characters",
    }),
  price: z.coerce.number().int().min(0, {
    message: "Price must be a positive number.",
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount > 10 && wordCount <= 1000;
    },
    {
      message: "Description length must be between 10 and 1000 words",
    }
  ),
  attributes: validateStringArraySchema(),
  sizes: validateStringArraySchema(),
  featured: z.coerce.boolean(),
});

export type ProductSchemaType = z.infer<typeof productSchema>;

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
}
