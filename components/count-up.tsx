'use client'

import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface CountUpProps {
  end: number
  duration?: number
  decimals?: number
}

export function CountUp({ end, duration = 1.5, decimals = 0 }: CountUpProps) {
  const { ref, isVisible } = useScrollAnimation()
  const [count, setCount] = useState(0)
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const currentCount = Math.floor(end * progress)

      setCount(currentCount)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate) as any
      }
    }

    animationRef.current = requestAnimationFrame(animate) as any

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current as unknown as number)
      }
    }
  }, [isVisible, end, duration])

  const displayValue = decimals > 0 ? count.toFixed(decimals) : count

  return <span ref={ref}>{displayValue}</span>
}
