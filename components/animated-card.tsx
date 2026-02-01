'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  animation?: 'slideUp' | 'fadeRight' | 'fadeLeft' | 'zoomIn'
  className?: string
}

export function AnimatedCard({
  children,
  delay = 0,
  animation = 'slideUp',
  className = '',
}: AnimatedCardProps) {
  const { ref, isVisible } = useScrollAnimation()

  const animationVariants = {
    slideUp: {
      initial: 'translate-y-16 opacity-0',
      active: 'translate-y-0 opacity-100',
    },
    fadeRight: {
      initial: '-translate-x-8 opacity-0',
      active: 'translate-x-0 opacity-100',
    },
    fadeLeft: {
      initial: 'translate-x-8 opacity-0',
      active: 'translate-x-0 opacity-100',
    },
    zoomIn: {
      initial: 'scale-95 opacity-0',
      active: 'scale-100 opacity-100',
    },
  }

  const variant = animationVariants[animation]
  const baseClasses = isVisible ? variant.active : variant.initial

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${baseClasses} ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}
