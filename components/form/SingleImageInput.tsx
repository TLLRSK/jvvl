"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { SingleImageInputProps } from "@/utils/types";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import AdminProductImage from "../admin/AdminProductImage";
import { Button } from "../ui/button";

function SingleImageInput({ name, label, onChange }: SingleImageInputProps) {
  const [image, setImage] = useState<File | null>(null);
  const filesInputRef = useRef<HTMLInputElement | null>(null);

  
  const updateImage = useCallback((newImage: File | null) => {
    setImage(newImage);
    onChange(name, newImage);
  }, [name, onChange])

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      updateImage(e.target.files[0]);
    }
  };
  const removeImage = () => {
    updateImage(null);
  };
  const triggerFileInput = () => {
    filesInputRef.current?.click();
  }
  return (
    <div>
      <Label htmlFor={name} className="capitalize mb-12">
        {label || name}
      </Label>
      {image ? (
        <AdminProductImage image={image} removeAction={removeImage} />
      ) : (
        <span className="block w-40 h-40 border-[1px] border-primary border-dashed" />
      )}

      <div className="mt-3">
        <Input
          id={name}
          name={name}
          type="file"
          ref={filesInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={triggerFileInput}
        >
          Add Image
        </Button>
      </div>
    </div>
  );
}
export default SingleImageInput;
