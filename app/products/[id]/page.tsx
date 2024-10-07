import BreadCrumbs from "@/components/single_product/BreadCrumbs";
import SizeForm from "@/components/single_product/SizeForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchSingleProduct } from "@/utils/actions";
import Image from "next/image";
import React from "react";

async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const { id, name, images_gallery, model_image, price, description, attributes } = product;
  const carouselImages = [...images_gallery, model_image];
  const sizes = ['11', '12', '13', '15'];
  return (
    <section className="w-full max-w-screen-xl mx-auto">
      <BreadCrumbs name={name} />
      <Carousel className="w-full bg-muted-background">
          <CarouselContent className="min-h-[100vw] h-[66dvh]">
            {carouselImages.map((image, index) => (
              <CarouselItem 
                key={index} 
                className={`relative w-full my-auto ${
                  index === carouselImages.length - 1 
                    ? 'h-full' 
                    : 'h-[100vw] max-h-[66dvh]'
                }`}
              >
                <Image
                  src={image}
                  alt={`${name} - Image ${index + 1}`}
                  fill
                  className={`object-contain ${
                    index === carouselImages.length - 1 
                      ? 'object-cover' 
                      : ''
                  }`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="ghost" className="left-0 ml-2" />
          <CarouselNext variant="ghost" className="right-0 mr-2" />
        </Carousel>
        <div className="flex flex-col gap-8">
          <div className="w-fit mx-auto text-center">
            <p className="font-medium">${price}</p>
            <h3 className="uppercase font-medium">{name}</h3>
          </div>
          {sizes && <SizeForm sizes={sizes} />}
        </div>
    </section>
  );
}

export default SingleProductPage;