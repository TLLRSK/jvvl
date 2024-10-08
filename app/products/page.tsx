import BreadCrumbs from "@/components/products/BreadCrumbs";
import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

function ProductsPage({ searchParams }: { searchParams: { search?: string } }) {
  const search = searchParams.search || "";

  return (
    <main className="overflow-x-hidden">
      <BreadCrumbs />
      <ProductsContainer search={search} />
    </main>
  );
}
export default ProductsPage;
