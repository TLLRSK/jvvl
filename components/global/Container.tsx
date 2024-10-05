import { cn } from '@/lib/utils';
import React from 'react'

function Container({
    children, className
}:{
    children: React.ReactNode;
    className?: string;
}) {
  return (
    <div className={cn('mx-auto max-w-screen-2xl px-8', className)}>
        {children}
    </div>
  )
}

export default Container