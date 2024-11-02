import { Card } from '@/components/ui/card';
import React from 'react'
const title = ["j", "v", "v", "l"];

function LoadingHome() {
  return (
      <div className="h-[calc(100dvh-61px)] pt-[61px] flex-1 grid grid-cols-2 md:grid-cols-4 text-primary font-serif font-semibold uppercase">
        {title.map((letter, i) => {
          return (
            <Card
              className="w-full transition-translate leading-[75%] text-[75vw] 
              border-b-[1px] border-r-[1px] text-center content-end overflow-hidden
              [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r-[1px] md:[&:nth-last-child(1)]:border-r-0
              md:text-[25vw]"
              key={`${letter}${i}`}
            />
          );
        })}
      </div>
  )
}

export default LoadingHome