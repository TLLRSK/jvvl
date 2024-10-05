import { Product } from "@/utils/types";
import React from "react";
import FavIcon from "../icons/FavIcon";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }: { product: Product }) {
  const { id, name, image, price } = product;

  return (
    <li className="group grid border-b-[1px] border-r-[1px] border-primary">
      <button className="ml-auto p-2 hover:[&>*]:opacity-100">
        <FavIcon className="text-foreground w-4 h-4 opacity-50" />
      </button>
      <Link
        href={`/products/${id}`}
        className="relative h-[60vw] md:h-[33vw] lg:h-[25vw] flex flex-col "
      >
        <figure className="relative flex-1">
          <Image
            src={image}
            alt={name}
            className="-z-10 opacity-20"
            sizes=""
            fill
            objectPosition="cover"
            priority
          />
        </figure>

        <figcaption
          className="mt-auto p-3 py-2 z-10 -right-[1px] -left-[1px]
          md:hidden md:absolute md:bg-background md:-bottom-10 md:border-[1px] md:border-primary md:group-hover:block"
        >
          <p className="text-md font-semibold">$ {price}</p>
          <h3 className="capitalize">{name}</h3>
        </figcaption>
      </Link>
    </li>
  );
}

export default ProductCard;
