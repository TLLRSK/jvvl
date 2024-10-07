import { fetchAllProducts } from "@/utils/actions";
import ProductsGrid from "./ProductsGrid";

async function ProductsContainer({ search }: { search: string }) {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  console.log(products);
  return (
    <>
      <ProductsGrid products={products} />
    </>
  );
}
export default ProductsContainer;
