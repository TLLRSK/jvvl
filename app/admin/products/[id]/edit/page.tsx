import { fetchAdminProductDetails } from "@/utils/actions";
import UpdateProductForm from "@/components/form/UpdateProductForm";

const EditProductPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const { id } = await params;
  const product = await fetchAdminProductDetails(id);

  return (
    <>
      {product ? <UpdateProductForm {...product} /> : <span>NO PRODUCT</span>}
    </>
  );
};

export default EditProductPage;
