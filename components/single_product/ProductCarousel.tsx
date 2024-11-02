import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ProductCarousel({
  carouselImages,
  name,
}: {
  carouselImages: string[];
  name: string;
}) {
  return (
    <Carousel className="w-full lg:col-span-4 xl:col-span-1">

      <CarouselContent className="min-h-[100vw] h-[66dvh] lg:min-h-0 lg:h-[calc(100dvh-106px)]">
        {carouselImages.map((image, index) => (
          <CarouselItem
            key={index}
            className={`relative w-full my-auto ${
              index === carouselImages.length - 1
                ? "h-full"
                : "aspect-square xl:h-3/4"
            }`}
          >
            <Image
              src={image}
              alt={`${name} - Image ${index + 1}`}
              fill
              priority={index === 0}
              sizes="(max-width: 360px) 360,
                  (min-width: 360px) 100vw,
                  (min-width: 1024px) 66vw
                  "
              className={`object-contain ${
                index === carouselImages.length - 1 ? "object-cover" : ""
              }`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious variant="ghost" className="left-0 ml-2" />
      <CarouselNext variant="ghost" className="right-0 mr-2" />
      
    </Carousel>
  );
}

export default ProductCarousel;
