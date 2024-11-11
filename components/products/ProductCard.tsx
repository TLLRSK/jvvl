import { Product } from "@/utils/types";
import React, { Suspense } from "react";
import Link from "next/link";
import FavoriteToggleButton from "./FavoriteToggleButton";
import HoverContent from "./HoverContent";
import DefaultContent from "./DefaultContent";
import FavIcon from "../icons/FavIcon";

function ProductCard({ product }: { product: Product }) {
  const { id } = product;

  return (
    <li className="group flex flex-col border-b-[1px] border-r-[1px] border-muted md:hover:bg-accent">

      <Suspense fallback={<LoadingFavorite />}>
        <FavoriteToggleButton productId={id} />
      </Suspense>

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
const LoadingFavorite = () => {
  return (
    <div className="ml-auto p-2 mb-6 opacity-50 hover:opacity-100">
      <FavIcon className="w-4 h-4" />
    </div>
  );
};

export default ProductCard;
