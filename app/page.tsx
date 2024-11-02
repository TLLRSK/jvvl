import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import LoadingFeaturedProducts from '@/components/home/LoadingFeaturedProducts'
import React, { Suspense } from 'react'

function HomePage() {
  return (
    <main className='overflow-x-hidden relative'>
      <Hero />

      <Suspense fallback={<LoadingFeaturedProducts />}>
        <FeaturedProducts />
      </Suspense>
      
    </main>
  )
}

export default HomePage