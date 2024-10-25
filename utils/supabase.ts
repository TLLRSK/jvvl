import { createClient } from "@supabase/supabase-js";

const bucket = "xopxop-bucket";

export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const sanitizedFileName = image.name.replace(/\s+/g, '-');
  const newName = `${timestamp}-${sanitizedFileName}`;
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: "3600" });

  if (error) {
    console.error("Supabase upload error:", error.message);
    throw new Error(`Image upload failed: ${error.message}`);
  }

  if (!data) throw new Error("No data returned from image upload");
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};

export const deleteImage = async (url: string) => {
  const imageName = url.split("/").pop();
  if (!imageName) throw new Error("Invalid URL");
  return supabase.storage.from(bucket).remove([imageName]);
};
