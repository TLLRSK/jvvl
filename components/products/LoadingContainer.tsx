import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function LoadingProducts() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
}

function LoadingProduct() {
  return (
    <Card className="h-fit">
      <CardContent className="p-4 grid gap-2">
        <Skeleton className="w-full aspect-square" />
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-3 w-2/4" />
      </CardContent>
    </Card>
  );
}
export default LoadingProducts;
