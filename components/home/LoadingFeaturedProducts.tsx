import React from "react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const getArray = (length: number) => {
  const array = Array.from({ length }, (_, i) => ({name: `item #${i}`}));
  return array;
}

function LoadingFeaturedProducts() {
  const products = getArray(4);
  return (
    <ul
      className="
    grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-6 mb-24
    [&>li:nth-child(2n)]:border-r-0
    md:[&>li:nth-child(2n)]:border-r-[1px] md:[&>li:nth-child(3n)]:border-r-0
    xl:md:[&>li:nth-child(3n)]:border-r-[1px] xl:md:[&>li:nth-child(4n)]:border-r-0
  "
    >
      {products.map((el, i) => {
        return (
          <Card key={i}>
            <CardContent className="flex flex-col gap-3 p-2">
              <Skeleton className="w-4 h-4 ml-auto" />
              <Skeleton className="w-full aspect-square" />
            </CardContent>
          </Card>
        );
      })}
    </ul>
  );
}

export default LoadingFeaturedProducts;
