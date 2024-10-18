"use client";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { Label } from "../ui/label";
import AdminProductImage from "../admin/AdminProductImage";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function UpdateMultipleImagesInput({
  name,
  label,
  images,
  updateInput,
}: {
  name: string;
  label: string;
  images: string[];
  updateInput: (name: string, value: Array<string | File>) => void;
}) {
  const [galleryImages, setGalleryImages] = useState<Array<string | File>>(images);
  const filesInputRef = useRef<HTMLInputElement | null>(null);

  const updateImageGallery = useCallback((updatedImages: Array<string | File>) => {
    setGalleryImages(updatedImages);
    updateInput(name, updatedImages)
  }, [name, updateInput])

  const removeImage = (index: number) => {
    const updatedImages = galleryImages.filter((_, i) => i !== index);
    updateImageGallery(updatedImages);
    if (filesInputRef.current) {
      filesInputRef.current.value = "";
    };
  };

  const handleFilesChange = (e: ChangeEvent<HTMLInputElement>) => {
    
    if (e.target.files && e.target.files.length > 0) {
        const newFiles = Array.from(e.target.files);
        const updatedImages = [...galleryImages, ...newFiles];
        updateImageGallery(updatedImages);
      }
  };
  const triggerFileInput = () => {
    filesInputRef.current?.click();
  };

  return (
    <div>
      <Label htmlFor={name} className="capitalize mb-12">
        {label || name}
      </Label>
      <ul className="flex flex-wrap gap-6">
        {galleryImages.map((image, index) => {
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

export default UpdateMultipleImagesInput;
