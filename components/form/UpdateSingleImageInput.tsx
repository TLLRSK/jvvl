"use client";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import AdminProductImage from "../admin/AdminProductImage";
import { Label } from "../ui/label";
import { UpdateSingleImageInputProps } from "@/utils/types";

export function UpdateSingleImageInput(props: UpdateSingleImageInputProps) {
  const { image, name, onChange} = props;
  const [currentImage, setCurrentImage] = useState<string | File | null>(image);
  const filesInputRef = useRef<HTMLInputElement | null>(null);
  
  const updateImage = useCallback((newImage: File | null) => {
    setCurrentImage(newImage);
    onChange(name, newImage);
  }, [name, onChange])

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      updateImage(e.target.files[0]);
    }
  };

  const removeImage = () => {
    updateImage(null);
    if(filesInputRef.current) {
      filesInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    filesInputRef.current?.click();
  }
  
  return (
    <div>
      <Label htmlFor={name} className="capitalize mb-12">
        {name}
      </Label>
      
      {currentImage ? (
        <AdminProductImage image={currentImage} removeAction={removeImage} />
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
          Update Image
        </Button>
      </div>
    </div>
  );
}

export default UpdateSingleImageInput;
