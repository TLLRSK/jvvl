import React from 'react'
import Image from 'next/image'
import Container from '../global/Container'
import CtaButton from './CtaButton'

function Hero() {
  return (
    <section className='relative border-b-[1px] border-primary'>
      <Container className='flex flex-col'>
        <div className='absolute inset-0 -z-10'>
          <Image
            src="/images/hero-image.webp"
            alt="Hero background"
            fill
            quality={100}
            priority
            className='opacity-60 object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/50 to-transparent' />
        </div>
        <div className='h-[calc(75dvh)] md:h-[calc(70dvh)] flex flex-col'>
          <div className='text-primary-foreground text-center my-auto'>
            <p className='text-2xl drop-shadow-lg uppercase'>our collection</p>
            <h2 className='text-6xl font-semibold drop-shadow-lg uppercase'>Golden Silence</h2>
          </div>
          <CtaButton text='Discover more'/>
        </div>
      </Container>
    </section>
  )
}

export default Hero