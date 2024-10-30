import { fetchAllProducts } from "@/utils/actions";
import ProductsGrid from "./ProductsGrid";

async function ProductsContainer({ search }: { search: string }) {
  const products = await fetchAllProducts({ search });
  
  return <ProductsGrid products={products} />
}
export default ProductsContainer;
