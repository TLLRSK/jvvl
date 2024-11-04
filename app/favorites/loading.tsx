import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function LoadingFavorites() {
  return (
    <div className="h-[calc(100dvh-57px)] flex flex-col mt-[57px]">
      <div className="p-3 border-b-[1px]">
        <Skeleton className="h-6 w-24 mx-auto" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
      </div>
    </div>
  );
}

function LoadingProduct() {
  return (
    <Card>
      <CardContent className="p-4 grid gap-2">
        <Skeleton className="w-full aspect-square" />
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-3 w-2/4" />
      </CardContent>
    </Card>
  );
}
export default LoadingFavorites;