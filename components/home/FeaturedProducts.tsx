import React from 'react'
import SectionTitle from '../global/SectionTitle'
import ProductsGrid from '../products/ProductsGrid'
import { fetchFeaturedProducts } from '@/utils/actions'
import EmptyList from '../global/EmptyList';

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if(products.length === 0) return <EmptyList />
  return (
    <section>
        <SectionTitle />
        <ProductsGrid products={products}/>
    </section>
  )
}

export default FeaturedProducts