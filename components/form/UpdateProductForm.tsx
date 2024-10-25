"use client";
import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextArea from "@/components/form/TextAreaInput";
import ListInput from "@/components/form/ListInput";
import CheckboxInput from "@/components/form/CheckboxInput";
import UpdateSingleImageInput from "./UpdateSingleImageInput";
import UpdateMultipleImagesInput from "./UpdateMultipleImagesInput";
import useForm from "@/hooks/useForm";
import { Product } from "@/utils/types";

export const UpdateProductForm = (product: Product) => {

  const { isPending, submitFormData, changeFormData, updateInput } = useForm( product, "update" );

  return (
    <section className="col-span-10">
      <h2 className="text-lg font-semibold mb-6">Edit product</h2>
      <form onSubmit={submitFormData} className="grid grid-cols-2">
        <div className="flex flex-col gap-6">
          <FormInput
            type="text"
            name="name"
            label="product name"
            defaultValue={product.name}
            onChange={changeFormData}
          />
          <PriceInput onChange={changeFormData} defaultValue={product.price} />
          <TextArea
            name="description"
            label="product description"
            onChange={changeFormData}
            defaultValue={product.description}
          />
          <ListInput
            name="attributes"
            label="attributes"
            placeholder="Write an attribute"
            defaultValue={product.attributes}
            onChange={updateInput}
          />
          <ListInput
            name="sizes"
            label="sizes"
            placeholder="Write a size"
            defaultValue={product.sizes}
            onChange={updateInput}
          />
        </div>
        <div className="flex flex-col gap-6 ml-12">

          <div className="flex gap-6">
            <UpdateSingleImageInput
              name="thumbnailImage"
              image={product.thumbnailImage}
              onChange={updateInput}
            >
            </UpdateSingleImageInput>

            <UpdateSingleImageInput
              name="productImage"
              image={product.modelImage}
              onChange={updateInput}
            >
            </UpdateSingleImageInput>
          </div>

          <UpdateMultipleImagesInput name="galleryImages" label="gallery images" images={product.galleryImages || []} updateInput={updateInput} />

          <CheckboxInput
            name="featured"
            label="featured"
            defaultChecked={product.featured}
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
            text="Update Product"
            className="col-span-2 w-full py-3 text-lg mt-12"
          />
        )}
      </form>
    </section>
  );
};

export default UpdateProductForm;
