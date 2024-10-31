import { Product } from "@/utils/types";
import React from "react";
import Link from "next/link";
import FavoriteToggleButton from "./FavoriteToggleButton";
import HoverContent from "./HoverContent";
import DefaultContent from "./DefaultContent";

function ProductCard({ product }: { product: Product }) {
  const { id } = product;

  return (
    <li className="group flex flex-col border-b-[1px] border-r-[1px] border-muted md:hover:bg-accent">
      <FavoriteToggleButton productId={id} />

      <Link
        href={`/products/${id}`}
        className="relative h-[60vw] md:h-[33vw] lg:h-[33vw] xl:h-[25vw] flex flex-col "
      >
        <DefaultContent product={product} />

        <HoverContent product={product} />
      </Link>
    </li>
  );
}

export default ProductCard;
