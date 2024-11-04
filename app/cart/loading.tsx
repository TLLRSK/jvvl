import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function LoadingCart() {
  return (
    <div className="h-[calc(100dvh-57px)] flex flex-col mt-[57px]">
      <div className="p-6 border-b-[1px]">
        <Skeleton className="h-6 w-8 mx-auto" />
      </div>

      <div className="w-full grid md:grid-cols-2">
          <div className="grid">
            <LoadingProduct />
            <LoadingProduct />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between p-4">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4" />
            </div>
            <div className="flex justify-between p-4">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4" />
            </div>
            <div className="flex justify-between p-4 mt-6">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4" />
            </div>
            <div className="flex justify-between p-4 mt-6 md:mt-12">
              <Skeleton className="h-8 w-full" />
            </div>
          </div>
        </div>
    </div>
  );
};

function LoadingProduct() {
  return (
    <Card>
      <CardContent className="p-4 grid grid-cols-2 gap-2 border-border">
        <Skeleton className="w-full p-3 aspect-square" />
        <div className="flex flex-col gap-2 p-3">
          <Skeleton className="h-3 w-1/4" />
          <Skeleton className="h-3 w-1/4" />
          <Skeleton className="h-3 w-1/4" />
        </div>
      </CardContent>
    </Card>
  );
};

export default LoadingCart;
