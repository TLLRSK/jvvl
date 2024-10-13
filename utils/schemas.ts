import { z, ZodSchema } from "zod";

const fileSchema = z.instanceof(File);

const validateImageFile = () => {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, "File size must be less than 1MB")
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
};

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
  attributes: z.preprocess(
    (val) => (typeof val === "string" ? JSON.parse(val) : val),
    z.array(z.string()).refine(
      (attributes) => {
        return attributes.length > 0;
      },
      {
        message: "Must be 1 attribute at least",
      }
    )
  ),
  sizes: z.preprocess(
    (val) => (typeof val === "string" ? JSON.parse(val) : val),
    z.array(z.string()).refine(
      (sizes) => {
        return sizes.length > 0;
      },
      {
        message: "Must be 1 size at least",
      }
    )
  ),
  thumbnailImage: validateImageFile(),
  modelImage: validateImageFile(),
  galleryImages: z.array(fileSchema),
  featured: z.coerce.boolean(),
});

export type ProductSchemaType = z.infer<typeof productSchema>;

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  console.log(result)
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
}
