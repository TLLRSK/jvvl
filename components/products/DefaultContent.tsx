import { Product } from "@/utils/types";
import Image from "next/image";
import React from "react";

function DefaultContent({ product }: { product: Product }) {
  const { thumbnailImage, name, price } = product;
  return (
    <>
      <div className="relative flex m-auto h-[60%] w-[75%] md:w-[100%] md:h-[100%] lg:w-[75%] lg:h-[75%] xl:w-[80%] xl:h-[80%]">
        <Image
          src={thumbnailImage}
          alt={name}
          className="-z-10 aspect-square"
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 33vw, (max-width: 1024px) 25vw"
          fill
        />
      </div>

      <div className="w-full mt-auto p-3 py-2 z-10 md:hidden">
        <p className="text-md font-semibold">$ {price}</p>
        <h3 className="capitalize">{name}</h3>
      </div>
    </>
  );
}

export default DefaultContent;
