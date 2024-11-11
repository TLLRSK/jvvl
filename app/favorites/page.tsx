import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/actions";

async function FavoritesPage() {
  const favorites = await fetchUserFavorites();
  
  if (favorites.length === 0) {
    return (
      <section className="min-h-[calc(100dvh-64px)] flex items-center justify-center">
        <h2>You don&apos;t have any favorite product.</h2>
      </section>
    );
  }
 
  return (
    <section className="overflow-x-hidden min-h-[calc(100dvh-57px)]">
      <SectionTitle text="Favorites" />
      <ProductsGrid products={favorites.map((fav) => fav.product)} />
    </section>
  );
}

export default FavoritesPage;
