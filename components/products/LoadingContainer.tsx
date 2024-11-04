import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function LoadingProducts() {
  return (
    <div className="h-[calc(100dvh-61px)] grid grid-cols-2 md:grid-cols-4 mt-[61px]">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
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
export default LoadingProducts;
