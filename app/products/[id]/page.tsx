import AddToCart from "@/components/single_product/AddToCart";
import BreadCrumbs from "@/components/single_product/BreadCrumbs";
import ProductCarousel from "@/components/single_product/ProductCarousel";
import { fetchAllProducts, fetchSingleProduct } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";

export const generateStaticParams = async () => {
  const allProducts = await fetchAllProducts({search: ""});
  return allProducts.map((id) => id);
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id: paramsId } = await params;
  const product = await fetchSingleProduct(paramsId);
  return {
    title: product.name,
  };
}

async function SingleProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: paramsId } = await params;
  const product = await fetchSingleProduct(paramsId);
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

        <ProductCarousel carouselImages={carouselImages} name={name}/>

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
