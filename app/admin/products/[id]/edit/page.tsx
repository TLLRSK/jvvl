import { fetchAdminProductDetails } from "@/utils/actions";
import UpdateProductForm from "@/components/form/UpdateProductForm";

const EditProductPage = async ({ params }: { params: { id: string } }) => {

  const { id } = params;
  const product = await fetchAdminProductDetails(id);
  return <>
    {product ? (
      <UpdateProductForm product={product} />
    ) : (
      <span>NO PRODUCT</span>
    )}
  </>

}

export default EditProductPage;
