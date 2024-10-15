"use client";
import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import MultipleImagesInput from "@/components/form/MultipleImagesInput";
import PriceInput from "@/components/form/PriceInput";
import TextArea from "@/components/form/TextAreaInput";
import { useState } from "react";
import SingleImageInput from "@/components/form/SingleImageInput";
import ListInput from "@/components/form/ListInput";
import CheckboxInput from "@/components/form/CheckboxInput";
import { Product } from "@/utils/types";

function CreateProductPage() {
  const defaultDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra dignissim libero, eu tempor risus feugiat id. Phasellus ornare pretium urna. Nam ullamcorper ac nulla non dictum. Suspendisse sed lorem consectetur, tincidunt nunc non, maximus felis. Maecenas auctor arcu ac purus gravida volutpat.";

  /* CLIENT FORM */
  const productModel: Product = {
    id: "",
    name: "",
    description: "",
    featured: false,
    thumbnailImage: "",
    modelImage: "",
    galleryImages: [],
    price: 0,
    attributes: [],
    sizes: [],
  };
  const [formData, setFormData] = useState(productModel);

  const submitFormData = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData: ", formData);

    return null;
  };
  const changeFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const updateListInput = (name: string, value: string[]) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="col-span-10">
      <h2 className="text-lg font-semibold mb-6">Create product</h2>
      <form onSubmit={submitFormData} className="grid grid-cols-2">
        <div className="flex flex-col gap-6">
          <FormInput
            type="text"
            name="name"
            label="product name"
            defaultValue="new product"
            onChange={changeFormData}
          />
          <PriceInput onChange={changeFormData} />
          <TextArea
            name="description"
            label="product description"
            defaultValue={defaultDescription}
            onChange={changeFormData}
          />
          <ListInput
            name="attributes"
            label="attributes"
            placeholder="Write an attribute"
            onChange={updateListInput}
          />
          <ListInput
            name="sizes"
            label="sizes"
            placeholder="Write a size"
            onChange={updateListInput}
          />
        </div>
        <div className="flex flex-col gap-6 ml-12">
          <div className="flex gap-6">
            <SingleImageInput name="thumbnailImage" label="thumbnail image" />
            <SingleImageInput name="modelImage" label="model image" />
          </div>
          <MultipleImagesInput name="galleryImages" label="gallery images" />
          <CheckboxInput
            name="featured"
            label="featured"
            defaultChecked={false}
            onChange={changeFormData}
          />
        </div>
        <SubmitButton
          text="Create Product"
          className="col-span-2 w-full py-3 text-lg mt-12"
        />
      </form>
    </section>
  );
}

export default CreateProductPage;
