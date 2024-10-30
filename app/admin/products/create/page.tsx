"use client";
import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import MultipleImagesInput from "@/components/form/MultipleImagesInput";
import PriceInput from "@/components/form/PriceInput";
import TextArea from "@/components/form/TextAreaInput";
import SingleImageInput from "@/components/form/SingleImageInput";
import ListInput from "@/components/form/ListInput";
import CheckboxInput from "@/components/form/CheckboxInput";
import useForm from "@/hooks/useForm";
import { formProductModel } from "@/utils/form";
import { FormProduct } from "@/utils/types";

function CreateProductPage() {
  const product: FormProduct = formProductModel;
  const { submitFormData, changeFormData, updateInput, isPending } = useForm(
    product,
    "create"
  );

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
            updateInput={updateInput}
          />
          <CheckboxInput
            name="featured"
            label="featured"
            defaultChecked={false}
            onChange={changeFormData}
          />
        </div>
        {isPending ? (
          <button
            disabled={isPending}
            aria-label="create product disabled"
            className="col-span-2 w-full py-3 text-lg mt-12"
          >
            Creating...
          </button>
        ) : (
          <SubmitButton
            aria-label="create product"
            text="Create Product"
            className="col-span-2 w-full py-3 text-lg mt-12"
          />
        )}
      </form>
    </section>
  );
}

export default CreateProductPage;
