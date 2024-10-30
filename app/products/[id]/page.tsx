import AddToCart from "@/components/single_product/AddToCart";
import BreadCrumbs from "@/components/single_product/BreadCrumbs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchAllProducts, fetchSingleProduct } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import React from "react";

export const generateStaticParams = async () => {
  const allProducts = await fetchAllProducts({search: ""});
  return allProducts.map((id) => id);
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  return {
    title: product.name,
  };
}

async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const {
    id,
    name,
    galleryImages,
    modelImage,
    price,
    description,
    attributes,
    sizes,
  } = product;
  const carouselImages = [...galleryImages, modelImage];
  return (
    <section className="mt-[61px]">
      <BreadCrumbs name={name} />

      <div className="lg:grid lg:grid-cols-6 xl:grid-cols-2">

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
                  priority
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

        <div className="flex flex-col gap-6 md:px-4 md:border-l-[1px] border-border xl:p-8 md:col-span-2 xl:col-span-1">
          <div className="w-fit mx-auto text-center mt-4 lg:my-auto">
            <h2 className="uppercase font-medium md:text-xl">{name}</h2>
            <p className="font-medium md:text-xl">{formatCurrency(price)}</p>
          </div>

          <AddToCart productId={id} sizes={sizes} />

          <div className="p-3">
            <h3 className="uppercase font-semibold mb-3">product details</h3>
            <p className="mb-3 font-light">{description}</p>
            <ul>
              {attributes.map((attribute, i) => {
                return (
                  <li key={i}>
                    <p>- {attribute}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
