import BreadCrumbs from "@/components/products/BreadCrumbs";
import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

async function ProductsPage(props: { searchParams: Promise<{ search?: string }> }) {
  const searchParams = await props.searchParams;
  const search = searchParams.search || "";

  return (
    <main className="overflow-x-hidden mt-[61px]">
      <BreadCrumbs />
      <ProductsContainer search={search} />
    </main>
  );
}
export default ProductsPage;
