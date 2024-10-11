"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { SingleImageInputProps } from "@/utils/types";
import { ChangeEvent, useRef, useState } from "react";

function SingleImageInput({ name, label }: SingleImageInputProps) {
  const [image, setImage] = useState<File | null>(null);
  const filesInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };
  const handleRemoveImage = () => {
    setImage(null);
    if (filesInputRef.current) {
      filesInputRef.current.value = "";
    }
  };
  return (
    <div>
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      {image ? (
        <div className="relative w-1/4">
          <img
            src={URL.createObjectURL(image)}
            alt="image"
            className="aspect-square object-cover rounded-md"
          />
          <button
            onClick={() => handleRemoveImage()}
            className="absolute top-0 right-0 min-w-3 min-h-3 p-0 rounded-full text-lg font-semibold opacity-80 hover:opacity-100"
          >
            x
          </button>
        </div>
      ) : (
        <span></span>
      )}

      <div
        className="border-2 border-dashed border-primary p-4 text-center cursor-pointer opacity-80 hover:opacity-100"
        onClick={() => filesInputRef.current?.click()}
      >
        <Input
          id={name}
          name={name}
          type="file"
          ref={filesInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <p className="text-lg">Add image</p>
      </div>
    </div>
  );
}
export default SingleImageInput;
