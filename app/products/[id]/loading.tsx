import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function LoadingProduct() {
  return (
    <div className="min-h-[calc(100dvh-57px)] flex flex-col mt-[57px]">
      <div className="p-3 border-b-[1px]">
        <Skeleton className="h-6 w-1/4" />
      </div>
      <div className="grid md:grid-cols-2">
        <Card>
          <CardContent className="p-4 grid gap-2">
            <Skeleton className="w-full aspect-square" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 grid items-center justify-center">
            <div>
              <Skeleton className="w-1/4 h-4" />
              <Skeleton className="w-1/4 h-4" />
            </div>
            <div>
              <Skeleton className="w-1/4 h-4" />
              <Skeleton className="w-1/4 h-16" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export default LoadingProduct;
