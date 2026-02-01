'use client'

import { ReactNode, useState } from 'react'

interface CardWithGlowProps {
  children: ReactNode
  className?: string
}

export function CardWithGlow({ children, className = '' }: CardWithGlowProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative group transition-all duration-500 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Red glow background effect */}
      <div
        className={`absolute inset-0 rounded-lg glow-right transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-40'
        }`}
      />

      {/* Main card content */}
      <div
        className={`relative rounded-lg overflow-hidden transition-all duration-500 ${
          isHovered
            ? 'bg-gradient-to-br from-red-600 to-red-700'
            : 'bg-black/40 backdrop-blur-sm'
        }`}
      >
        <div
          className={`relative transition-all duration-500 ${
            isHovered ? 'text-white' : 'text-gray-200'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
