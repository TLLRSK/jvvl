import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import SingleImageInput from "@/components/form/SingleImageInput";
import MultipleImagesInput from "@/components/form/MultipleImagesInput";
import PriceInput from "@/components/form/PriceInput";
import TextArea from "@/components/form/TextAreaInput";
import { createProductAction } from "@/utils/actions";
import React from "react";

function CreateProductPage() {
  return (
    <section className="col-span-10">
      <h3>Create product</h3>
      <div>
        <FormContainer action={createProductAction}>
          <FormInput
            type="text"
            name="name"
            label="product name"
            defaultValue="new product"
          />
          <PriceInput />
          <TextArea
            name="description"
            label="product description"
            defaultValue="Product description..."
          />

          <div>
            <SingleImageInput name="thumbnail image" />
            <SingleImageInput name="model image" />
            <MultipleImagesInput name="gallery-images" label="gallery images" />
          </div>
        </FormContainer>

        <SubmitButton text="Create Product" />
      </div>
    </section>
  );
}

export default CreateProductPage;
