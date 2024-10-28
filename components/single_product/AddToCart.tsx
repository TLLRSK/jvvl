"use client";
import React, { FormEvent, useState } from "react";
import { ProductSignInButton, SubmitButton } from "../form/Buttons";
import SizeInput from "../form/SizeInput";
import { Button } from "../ui/button";
import { addToCartAction } from "@/utils/actions";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@clerk/nextjs";
import { ReloadIcon } from "@radix-ui/react-icons";

function AddToCart({
  productId,
  sizes,
}: {
  productId: string;
  sizes: string[];
}) {
  const { userId } = useAuth();
  const [size, setSize] = useState<string>("");
  const [isPending, setIsPending] = useState(false);

  const changeSize = (value: string) => {
    setSize(value);
  };
  const handleAddToCart = async (e: FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    const formDataToSend = new FormData();
    formDataToSend.append("productId", productId);
    formDataToSend.append("size", size);

    try {
      const { message } = await addToCartAction(formDataToSend);
      toast({ description: message });
    } catch (error) {
      toast({
        description:
          error instanceof Error ? error.message : `There was an error`,
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="mx-auto">
      {!userId ? (
        <ProductSignInButton />
      ) : (
        <form onSubmit={handleAddToCart} className="grid">
          <SizeInput sizes={sizes} onChange={changeSize} />

          <input type="hidden" name="productId" value={productId} />

          {!size || isPending ? (
            <Button variant="default" className="uppercase mt-8" disabled>
              {!size ? (
                "Choose a size"
              ) : (
                <>
                  <ReloadIcon className='mr-2 h-4 w-4 animate-spin'/>
                  Adding...
                </>
              )}
            </Button>
          ) : (
            <SubmitButton
              text="add to cart"
              variant="default"
              className="uppercase mt-8 w-fit"
            />
          )}
        </form>
      )}
    </div>
  );
}

export default AddToCart;
