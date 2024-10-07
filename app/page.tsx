import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import React from 'react'

function HomePage() {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <FeaturedProducts />
    </main>
  )
}

export default HomePage