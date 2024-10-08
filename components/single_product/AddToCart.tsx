"use client";
import { addToCartAction } from "@/utils/actions";
import React from "react";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import SizeInput from "../form/SizeInput";

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
      <input type="hidden" name="productId" value={productId} />
      <SubmitButton text="add to cart" variant="default" />
    </FormContainer>
  );
}

export default AddToCart;
