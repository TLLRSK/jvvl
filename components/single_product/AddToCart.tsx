"use client";
import React from "react";
import { SubmitButton } from "../form/Buttons";
import SizeInput from "../form/SizeInput";
import FormContainer from "../form/FormContainer";
import { addToCartAction } from "@/utils/actions";

function AddToCart({
  productId,
  sizes,
}: {
  productId: string;
  sizes: string[];
}) {
  
  return (
    <FormContainer action={addToCartAction}>
      <SizeInput sizes={sizes} />
      <input type="hidden" name="productId" />
      <SubmitButton text="add to cart" variant="default" />
    </FormContainer>
  );
}

export default AddToCart;
