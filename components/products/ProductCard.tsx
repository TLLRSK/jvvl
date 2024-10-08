import { Product } from "@/utils/types";
import React from "react";
import FavIcon from "../icons/FavIcon";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }: { product: Product }) {
  const { id, name, thumbnail_image, model_image, price } = product;

  return (
    <li className="group flex flex-col border-b-[1px] border-r-[1px] border-muted">
      <button className="ml-auto p-2 hover:[&>*]:opacity-100 mb-6">
        <FavIcon className="text-foreground w-4 h-4 opacity-50" />
      </button>
      <Link
        href={`/products/${id}`}
        className="relative h-[60vw] md:h-[33vw] lg:h-[33vw] xl:h-[25vw] flex flex-col "
      >
        <div className="relative flex m-auto h-[60%] w-[75%] md:w-[100%] md:h-[100%] lg:w-[75%] lg:h-[75%] xl:w-[80%] xl:h-[80%]">
          <Image
            src={thumbnail_image}
            alt={name}
            className="-z-10"
            sizes=""
            fill
            priority
          />
        </div>

        <div className="w-full mt-auto p-3 py-2 z-10 md:hidden">
          <p className="text-md font-semibold">$ {price}</p>
          <h3 className="capitalize">{name}</h3>
        </div>

        <div
          className="
            absolute top-0 -right-[1px] -bottom-8 -left-[1px] bg-background drop-shadow-md z-20
            hidden md:group-hover:flex flex-col"
        >
          <div className="relative h-full">
            <Image
              src={model_image}
              alt={name}
              className="-z-10 object-cover"
              sizes=""
              fill
              priority
            />
          </div>
          <div className="w-full bg-background mt-auto p-3 py-2 z-10">
            <p className="text-md font-semibold">$ {price}</p>
            <h3 className="capitalize">{name}</h3>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProductCard;
