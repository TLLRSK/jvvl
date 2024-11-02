import { fetchAdminProductDetails } from "@/utils/actions";
import UpdateProductForm from "@/components/form/UpdateProductForm";

const EditProductPage = async ({ params }: { params: Promise<{id: string}> }) => {
  console.log(params)
  const { id } = await params;
  const product = await fetchAdminProductDetails(id);

  return (
    <>
      {product ? <UpdateProductForm {...product} /> : <span>NO PRODUCT</span>}
    </>
  );
};

export default EditProductPage;
