"use client";
import { ChangeEvent, useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AdminProductImage from "../admin/AdminProductImage";

function MultipleImagesInput({ name, label }: { name: string; label: string }) {
  const [images, setImages] = useState<File[]>([]);
  const filesInputRef = useRef<HTMLInputElement | null>(null);

  const handleFilesChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...newFiles]);
      console.log(filesInputRef?.current?.value)
    }
  };
  const removeImages = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    if (filesInputRef.current) {
      console.log(filesInputRef.current.value)
    }
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
              removeAction={removeImages}
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
          accept="image/*"
          className="hidden"
          onChange={handleFilesChange}
          required
        />
        <Button
          type="button"
          onClick={() => filesInputRef.current?.click()}
          variant="default"
          className="w-full"
        >
          Add images
        </Button>
      </div>
    </div>
  );
}

export default MultipleImagesInput;
