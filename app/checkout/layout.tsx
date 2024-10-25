import Container from '@/components/global/Container'
import React from 'react'

function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='mt-[61px] min-h-[calc(100dvh-142px)]'>
      <Container className='p-4'>
        {children}
      </Container>
    </section>
  )
}

export default CheckoutLayout