import React from 'react'
import Container from '../global/Container'
import CtaButton from '../global/CtaButton'

function Hero() {
  return (
    <section className='relative border-b-[1px] border-primary'>
        <Container className='flex flex-col'>
            <div 
                className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 -z-10' 
                style={{
                    backgroundImage:'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(images/hero-image.webp)',
                }}
            >
            </div>
            <div className='h-[calc(75dvh)] md:h-[calc(70dvh)] flex flex-col'>
                <div className='text-primary-foreground text-center my-auto'>
                    <p className='text-2xl drop-shadow-lg uppercase'>our products</p>
                    <h2 className='text-6xl font-semibold drop-shadow-lg uppercase'>Golden Silence</h2>
                </div>
                <CtaButton text='Discover more'/>
            </div>

        </Container>
    </section>
  )
}

export default Hero