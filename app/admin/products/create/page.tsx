"use client";
import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import MultipleImagesInput from "@/components/form/MultipleImagesInput";
import PriceInput from "@/components/form/PriceInput";
import TextArea from "@/components/form/TextAreaInput";
import SingleImageInput from "@/components/form/SingleImageInput";
import ListInput from "@/components/form/ListInput";
import CheckboxInput from "@/components/form/CheckboxInput";
import { FormProduct } from "@/utils/types";
import { useState } from "react";
import { createProductAction } from "@/utils/actions";
import { useToast } from '@/hooks/use-toast';

function CreateProductPage() {
  const defaultDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra dignissim libero, eu tempor risus feugiat id.";

  /* CLIENT FORM */
  const formProduct: FormProduct = {
    name: "",
    description: defaultDescription,
    featured: false,
    thumbnailImage: null,
    modelImage: null,
    galleryImages: [],
    price: 0,
    attributes: [],
    sizes: [],
  };
  const [formData, setFormData] = useState(formProduct);
  const [isPending, setIsPending] = useState(false);
  const {toast} = useToast();

  const updateFormData = (
    name: string,
    value: string | string[] | File | File[] | null
  ) => {
    setFormData((prevState) => {
      const updatedState = { ...prevState, [name]: value };
      return updatedState;
    });
  };

  const handleCreateProduct = async (formDataToSend: FormData) => {
    try {
      const {message} = await createProductAction(formDataToSend);
      toast({description: `message: ${message}`})
    } catch (error) {
      toast({description: error instanceof Error ? error.message : `There was an error`})
    } finally {
      setIsPending(false);
    }
  }
  const submitFormData = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true)
    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price.toString());
    formDataToSend.append("featured", formData.featured.toString());
  
    formDataToSend.append("attributes", JSON.stringify(formData.attributes));
    formDataToSend.append("sizes", JSON.stringify(formData.sizes));
    
    if (formData.thumbnailImage) {
      formDataToSend.append("thumbnailImage", formData.thumbnailImage);
    }
    if (formData.modelImage) {
      formDataToSend.append("modelImage", formData.modelImage);
    }

    if (formData.galleryImages && formData.galleryImages.length > 0) {
      formData.galleryImages.forEach((image) => {
        formDataToSend.append(`galleryImages`, image);
      });
    }
    handleCreateProduct(formDataToSend);
  };
  const changeFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };
  const updateInput = (
    name: string,
    value: string[] | File | File[] | null
  ) => {
    updateFormData(name, value);
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
            onChange={updateInput}
          />
          <ListInput
            name="sizes"
            label="sizes"
            placeholder="Write a size"
            onChange={updateInput}
          />
        </div>
        <div className="flex flex-col gap-6 ml-12">
          <div className="flex gap-6">
            <SingleImageInput
              name="thumbnailImage"
              label="thumbnail image"
              onChange={updateInput}
            />
            <SingleImageInput
              name="modelImage"
              label="model image"
              onChange={updateInput}
            />
          </div>
          <MultipleImagesInput
            name="galleryImages"
            label="gallery images"
            onChange={updateInput}
          />
          <CheckboxInput
            name="featured"
            label="featured"
            defaultChecked={false}
            onChange={changeFormData}
          />
        </div>
        {isPending ? (
           <button disabled={isPending} className="col-span-2 w-full py-3 text-lg mt-12">Creating...</button>
        ) : (
          <SubmitButton
           text="Create Product"
           className="col-span-2 w-full py-3 text-lg mt-12"
         />
        )}
      </form>
    </section>
  );
}

export default CreateProductPage;
