"use client";
import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextArea from "@/components/form/TextAreaInput";
import { useEffect, useState } from "react";
import SingleImageInput from "@/components/form/SingleImageInput";
import ListInput from "@/components/form/ListInput";
import CheckboxInput from "@/components/form/CheckboxInput";
import { useToast } from "@/hooks/use-toast";
import UpdateSingleImageInput from "./UpdateSingleImageInput";
import { updateProductAction } from "@/utils/actions";
import UpdateMultipleImagesInput from "./UpdateMultipleImagesInput";

export const UpdateProductForm = (data) => {
  const [formData, setFormData] = useState({ ...data.product });
  const {
    id,
    name,
    price,
    description,
    attributes,
    sizes,
    thumbnailImage,
    modelImage,
    galleryImages,
    featured,
  } = formData;

  const [isPending, setIsPending] = useState(false);
  const { toast } = useToast();

  const updateFormData = (
    name: string,
    value: string | string[] | File | File[] | null
  ) => {
    setFormData((prevState) => {
      const updatedState = { ...prevState, [name]: value };
      return updatedState;
    });
  };

  const handleEditProduct = async (formDataToSend: FormData) => {
    try {
      const {message} = await updateProductAction(formDataToSend);
      toast({ description: `message: ${message}` });
    } catch (error) {
      toast({
        description:
          error instanceof Error ? error.message : `There was an error`,
      });
    } finally {
      setIsPending(false);
    }
  };

  const submitFormData = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    const formDataToSend = buildFormData(formData);
    console.log("sending data: ", formDataToSend)
    handleEditProduct(formDataToSend);
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
    console.log(name, value)
    updateFormData(name, value);
  };

  const buildFormData = (formData) => {
    const formDataToSend = new FormData();
    console.log("received formData: ", formData)
    
    formDataToSend.append("id", formData.id);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price.toString());
    formDataToSend.append("featured", formData.featured.toString());
    formDataToSend.append("attributes", JSON.stringify(formData.attributes));
    formDataToSend.append("sizes", JSON.stringify(formData.sizes));
   
    if (formData.thumbnailImage instanceof File) {
      formDataToSend.append("thumbnailImage", formData.thumbnailImage);
    }

    if (formData.modelImage instanceof File) {
      formDataToSend.append("modelImage", formData.modelImage);
    }

    if (formData.galleryImages && formData.galleryImages.length > 0) {
      formData.galleryImages.forEach((image) => {
        formDataToSend.append("galleryImages", image)
      });
    }
    for (const [key, value] of formDataToSend.entries()) {
      console.log(`${key}: ${value}`);
    }

    return formDataToSend;
  };
  return (
    <section className="col-span-10">
      <h2 className="text-lg font-semibold mb-6">Edit product</h2>
      <form onSubmit={submitFormData} className="grid grid-cols-2">
        <div className="flex flex-col gap-6">
          <FormInput
            type="text"
            name="name"
            label="product name"
            defaultValue={name}
            onChange={changeFormData}
          />
          <PriceInput onChange={changeFormData} defaultValue={price} />
          <TextArea
            name="description"
            label="product description"
            onChange={changeFormData}
            defaultValue={description}
          />
          <ListInput
            name="attributes"
            label="attributes"
            placeholder="Write an attribute"
            defaultValue={attributes}
            onChange={updateInput}
          />
          <ListInput
            name="sizes"
            label="sizes"
            placeholder="Write a size"
            defaultValue={sizes}
            onChange={updateInput}
          />
        </div>
        <div className="flex flex-col gap-6 ml-12">
          <div className="flex gap-6">
            <UpdateSingleImageInput
              name="thumbnailImage"
              image={thumbnailImage}
              onChange={updateInput}
            >
              {/* <input type="hidden" name="id" value={id} />
              <input type="hidden" name="imageType" value="thumbnailImage" /> */}
              {/* <input type="hidden" name="url" value={product.thumbnailImage} /> */}
            </UpdateSingleImageInput>
            <UpdateSingleImageInput
              name="modelImage"
              image={modelImage}
              onChange={updateInput}
            >
              {/* <input type="hidden" name="id" value={id} />
              <input type="hidden" name="imageType" value="modelImage" />
              <input type="hidden" name="url" value={product.modelImage} /> */}
            </UpdateSingleImageInput>
          </div>
          <UpdateMultipleImagesInput name="galleryImages" label="gallery images" images={galleryImages} updateInput={updateInput} />
          <CheckboxInput
            name="featured"
            label="featured"
            defaultChecked={featured}
            onChange={changeFormData}
          />
        </div>
        {isPending ? (
          <button
            disabled={isPending}
            className="col-span-2 w-full py-3 text-lg mt-12"
          >
            updating...
          </button>
        ) : (
          <SubmitButton
            text="Create Product"
            className="col-span-2 w-full py-3 text-lg mt-12"
          />
        )}
      </form>
    </section>
  );
};

export default UpdateProductForm;
