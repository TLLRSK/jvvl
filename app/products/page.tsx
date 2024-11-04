
import BreadCrumbs from "@/components/products/BreadCrumbs";
import LoadingProducts from "@/components/products/LoadingContainer";
import dynamic from "next/dynamic";
import React from "react";

const DynamicProductsContainer = dynamic(
  () => import("@/components/products/ProductsContainer"),
  {
    loading: () => <LoadingProducts />,
  }
);

async function ProductsPage({ searchParams }: { searchParams: Promise<{ search?: string }> }) {
  const { search:params } = await searchParams;
  const search = params || "";

  return (
    <main className="overflow-x-hidden mt-[61px]">
      <BreadCrumbs />
      <DynamicProductsContainer search={search} />
    </main>
  );
}
export default ProductsPage;
