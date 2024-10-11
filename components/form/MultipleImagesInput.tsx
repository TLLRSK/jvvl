"use client";
import { ChangeEvent, useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function MultipleImagesInput({ name, label }: { name: string; label: string }) {
  const [images, setImages] = useState<File[]>([]);
  const filesInputRef = useRef<HTMLInputElement | null>(null);

  const handleFilesChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...newFiles]);
    }
  };
  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    if (filesInputRef.current) {
      filesInputRef.current.value = "";
    }
  };

  return (
    <div>
      <Label htmlFor={name} className="capitalize">
        {label}
      </Label>
      <ul className="grid grid-cols-3 gap-4">
        {images.map((image, index) => {
          return (
            <li className="relative" key={index}>
              <img
                src={URL.createObjectURL(image)}
                alt="image"
                className="w-full aspect-square object-cover rounded-md"
              />
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute top-0 right-0 min-w-3 min-h-3 p-0 rounded-full text-lg font-semibold opacity-80 hover:opacity-100"
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
      <div
        className="border-2 border-dashed border-primary p-4 text-center cursor-pointer opacity-80 hover:opacity-100"
        onClick={() => filesInputRef.current?.click()}
      >
        <Input
          id={name}
          name={name}
          type="file"
          ref={filesInputRef}
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleFilesChange}
        />
        <p className="text-lg">Add images</p>
      </div>
    </div>
  );
}

export default MultipleImagesInput;
