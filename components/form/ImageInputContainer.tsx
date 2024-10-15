"use client";
import { ImageInputContainerProps } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import SingleImageInput from "./SingleImageInput";
import { SubmitButton } from "./Buttons";
import { Input } from "../ui/input";

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text, children } = props;
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
  return (
    <div className="mb-8">
      <Image
        src={image}
        width={48}
        height={48}
        className="object-cover mb-4"
        alt={name}
        priority
      />
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-md mt-4">
          <FormContainer action={action}>
            {children}
            <Input
              id={name}
              name="image"
              type="file"
              accept="image/*"
            />
            <SubmitButton text={text} />
          </FormContainer>
        </div>
      )}
    </div>
  );
}

export default ImageInputContainer;
