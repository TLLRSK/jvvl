import { fetchAllProducts } from "@/utils/actions";
import ProductsGrid from "./ProductsGrid";

export async function generateStaticParams({ search }: { search: string }) {
  const products = await fetchAllProducts({ search });
  return products.map((product) => ({ id: product.id }));
}

async function ProductsContainer({ search }: { search: string }) {
  const products = await fetchAllProducts({ search });

  return <ProductsGrid products={products} />;
}

export default ProductsContainer;
