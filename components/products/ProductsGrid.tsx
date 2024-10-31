import { Product } from "@/utils/types";
import React from "react";
import ProductCard from "./ProductCard";


function ProductsGrid({ products }:{ products: Product[] }) {
  return (
    <ul className="
      grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-24
      [&>li:nth-child(2n)]:border-r-0
      md:[&>li:nth-child(2n)]:border-r-[1px] md:[&>li:nth-child(3n)]:border-r-0
      xl:md:[&>li:nth-child(3n)]:border-r-[1px] xl:md:[&>li:nth-child(4n)]:border-r-0
    ">
      {products.map((product) => {
        return (
          <ProductCard product={product} key={product.id} />
        );
      })}
    </ul>
  );
}

export default ProductsGrid;