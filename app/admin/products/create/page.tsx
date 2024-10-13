import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import MultipleImagesInput from "@/components/form/MultipleImagesInput";
import PriceInput from "@/components/form/PriceInput";
import TextArea from "@/components/form/TextAreaInput";
import { createProductAction } from "@/utils/actions";
import React from "react";
import SingleImageInput from "@/components/form/SingleImageInput";
import ListInput from "@/components/form/ListInput";
import CheckboxInput from "@/components/form/CheckboxInput";

function CreateProductPage() {
  return (
    <section className="col-span-10">
      <h2 className="text-lg font-semibold mb-6">Create product</h2>
      <FormContainer
        action={createProductAction}
        className="grid grid-cols-2"
      >
        <div className="flex flex-col gap-6">
          <FormInput
            type="text"
            name="name"
            label="product name"
            defaultValue="new product"
          />
          <PriceInput />
          <TextArea name="description" label="product description" />
          <ListInput
            name="attributes"
            label="attributes"
            placeholder="Write an attribute"
          />
          <ListInput name="sizes" label="sizes" placeholder="Write a size" />
        </div>
        <div className="flex flex-col gap-6 ml-12">
          <div className="flex gap-6">
            <SingleImageInput name="thumbnailImage" label="thumbnail image"/>
            <SingleImageInput name="modelImage" label="model image"/>
          </div>
          <MultipleImagesInput name="galleryImages" label="gallery images" />
          <CheckboxInput
            name="featured"
            label="featured"
            defaultChecked={false}
          />
        </div>
        <SubmitButton text="Create Product" className="col-span-2 w-full py-3 text-lg mt-12" />
      </FormContainer>
    </section>
  );
}

export default CreateProductPage;
