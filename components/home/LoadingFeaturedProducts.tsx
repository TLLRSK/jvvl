import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

function LoadingFeaturedProducts() {
  return (
    <div>
        <Card>
            <CardContent>
            <Skeleton className='w-3 h-3' />
            <Skeleton className='w-3/4 aspect-square' />
            </CardContent>
        </Card>
    </div>
  )
}

export default LoadingFeaturedProducts