"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { SingleImageInputProps } from "@/utils/types";
import { ChangeEvent, useRef, useState } from "react";
import { Button } from "../ui/button";
import DashboardProductImage from "../images/DashboardProductImage";

function SingleImageInput({ name, label }: SingleImageInputProps) {
  const [image, setImage] = useState<File | null>(null);
  const filesInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };
  const removeImage = () => {
    setImage(null);
    if (filesInputRef.current) {
      filesInputRef.current.value = "";
    }
  };
  return (
    <div>
      <Label htmlFor={name} className="capitalize mb-12">
        {label || name}
      </Label>
      {image ? (
        <DashboardProductImage image={image} removeAction={removeImage}/>
      ) : (
        <span className="block w-40 h-40 border-[1px] border-input" />
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
          required
        />
        <Button type="button" onClick={() => filesInputRef.current?.click()} variant="default" className="w-full">
          Add image
        </Button>
      </div>
    </div>
  );
}
export default SingleImageInput;