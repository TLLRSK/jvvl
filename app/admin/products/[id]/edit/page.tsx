import { fetchAdminProductDetails } from "@/utils/actions";
import UpdateProductForm from "@/components/form/UpdateProductForm";

const EditProductPage = async ({ params }: { params: { id: string } }) => {

  const { id } = params;
  const product = await fetchAdminProductDetails(id);
<<<<<<< HEAD
  const {
    name,
    price,
    description,
    attributes,
    sizes,
    thumbnailImage,
    modelImage,
    galleryImages,
    featured,
  } = product;
  return (
    <section className="col-span-10">
      <h2 className="text-lg font-semibold mb-6">Edit product</h2>
      <div className="grid grid-cols-3">
        <ImageInputContainer
          action={updateProductImagesAction}
          name={name}
          image={thumbnailImage}
          text="Update Thumbnail Image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={product.thumbnailImage} />
        </ImageInputContainer>
        <ImageInputContainer
          action={updateProductImagesAction}
          name={name}
          image={modelImage}
          text="Update Model Image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={product.modelImage} />
        </ImageInputContainer>
      </div>
      <FormContainer action={updateProductAction} className="grid grid-cols-2">
        <div className="flex flex-col gap-6">
          <FormInput
            type="text"
            name="name"
            label="product name"
            defaultValue={name}
          />
          <PriceInput defaultValue={price} />
          <TextArea
            name="description"
            label="product description"
            defaultValue={description}
          />
          <ListInput
            name="attributes"
            label="attributes"
            placeholder="Write an attribute"
          />
          <ListInput name="sizes" label="sizes" placeholder="Write a size" />
        </div>
        <div className="flex flex-col gap-6 ml-12">
          <div className="flex gap-6">
            <SingleImageInput name="modelImage" label="model image" />
          </div>
          <MultipleImagesInput name="galleryImages" label="gallery images" />
          <CheckboxInput
            name="featured"
            label="featured"
            defaultChecked={featured}
          />
        </div>
        <SubmitButton
          text="Update Product"
          className="col-span-2 w-full py-3 text-lg mt-12"
        />
      </FormContainer>
    </section>
  );
=======
  
  return <>
    {product ? (
      <UpdateProductForm {...product} />
    ) : (
      <span>NO PRODUCT</span>
    )}
  </>

>>>>>>> dev
}

export default EditProductPage;
