import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import React from 'react'

function HomePage() {
  return (
    <main className='mt-[45px]'>
      <Hero />
      <FeaturedProducts />
    </main>
  )
}

export default HomePage