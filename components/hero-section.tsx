"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CountUp } from "@/components/count-up"

const heroAthletes = [
  {
    src: "/athletic-man-african-american-flexing-muscles-blac.jpg",
    alt: "Athlete 1",
  },
  {
    src: "/muscular-man-african-american-bodybuilder-posing-b.jpg",
    alt: "Athlete 2",
  },
  {
    src: "/fit-man-african-descent-building-muscle-black-and-.jpg",
    alt: "Athlete 3",
  },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroAthletes.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Rotating Background Images */}
      {heroAthletes.map((athlete, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={athlete.src || "/placeholder.svg"}
            alt={athlete.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="max-w-5xl text-center mb-8">
          <h1
            className={`text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 leading-none transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ fontFamily: "var(--font-bebas, sans-serif)" }}
          >
            Build your body,
          </h1>
          <h2
            className={`text-6xl md:text-8xl lg:text-9xl font-black text-red-500 leading-none transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ fontFamily: "var(--font-bebas, sans-serif)", transitionDelay: isLoaded ? '300ms' : '0ms' }}
          >
            Charge your spirit
          </h2>
        </div>

        {/* Cutout Athlete */}
        {/* <div className="relative w-full max-w-sm h-80 md:h-96 mb-12 flex items-center justify-center">
          <Image
            src="/athletic-cutout.png"
            alt="Athletic Cutout"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div> */}

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 ease-out mb-16 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionDelay: isLoaded ? '600ms' : '0ms' }}
        >
          <Button
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-full"
            style={{ fontFamily: "var(--font-bebas, sans-serif)" }}
          >
            Let's Start →
          </Button>
        </div>

        {/* Stats Cards with Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {[
            { value: 1.5, label: "Hours", image: "/training-strength.jpg", isDecimal: true },
            { value: 20, label: "Poses", image: "/training-cardio.jpg", isDecimal: false },
            { value: 550, label: "Kcal", image: "/training-flexibility.jpg", isDecimal: false },
            { value: 5, label: "Sets", image: "/personal-training.jpg", isDecimal: false },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`relative aspect-square rounded-lg overflow-hidden group cursor-pointer transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isLoaded ? `${800 + index * 100}ms` : '0ms' }}
            >
              <Image
                src={stat.image || "/placeholder.svg"}
                alt={stat.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center">
                <div className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
                  {isLoaded ? <CountUp end={stat.value} isDecimal={stat.isDecimal} /> : stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-200">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
