import { Product } from "@/utils/types";
import Image from "next/image";
import React from "react";

function HoverContent({ product }: { product: Product }) {
    const { name, modelImage, price } = product;

  return (
    <div
      className="
            absolute top-0 -right-[1px] -bottom-8 -left-[1px] drop-shadow-md z-20
            hidden flex-col md:group-hover:flex md:group-hover:bg-accent"
    >
      <div className="relative h-full">
        <Image
          src={modelImage}
          alt={name}
          className="-z-10 object-cover aspect-square"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </div>

      <div className="w-full mt-auto p-3 py-2 z-10">
        <p className="text-md font-semibold">$ {price}</p>
        <h3 className="capitalize">{name}</h3>
      </div>
    </div>
  );
}

export default HoverContent;
