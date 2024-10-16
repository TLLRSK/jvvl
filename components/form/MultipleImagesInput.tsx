"use client";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import AdminProductImage from "../admin/AdminProductImage";
import { Button } from "../ui/button";

function MultipleImagesInput({
  name,
  label,
  onChange,
}: {
  name: string;
  label: string;
  onChange: (name: string, value: string[] | File[]) => void;
}) {
  const [images, setImages] = useState<File[]>([]);
  const filesInputRef = useRef<HTMLInputElement | null>(null);

  const updateImages = useCallback(
    (newImages: File[]) => {
      setImages(newImages);
      onChange(name, newImages);
    },
    [name, onChange]
  );

  const handleFilesChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      const updatedImages = [...images, ...newFiles];
      updateImages(updatedImages);
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    updateImages(updatedImages);
  };

  const triggerFileInput = () => {
    filesInputRef.current?.click();
  };

  return (
    <div>
      <Label htmlFor={name} className="capitalize">
        {label}
      </Label>
      <ul className="flex flex-wrap gap-6">
        {images.map((image, index) => {
          return (
            <AdminProductImage
              key={index}
              index={index}
              image={image}
              removeAction={removeImage}
            />
          );
        })}
        <span className="block w-40 h-40 border-[1px] border-primary border-dashed" />
      </ul>
      <div className="mt-3">
        <Input
          id={name}
          name={name}
          type="file"
          ref={filesInputRef}
          multiple
          className="hidden"
          accept="image/*"
          onChange={handleFilesChange}
        />
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={triggerFileInput}
        >
          Add Images
        </Button>
      </div>
    </div>
  );
}

export default MultipleImagesInput;
