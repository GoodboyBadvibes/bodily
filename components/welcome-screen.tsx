"use client"

import { useEffect, useState } from "react"

export default function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    // Check if user has seen welcome
    const hasSeenWelcome = sessionStorage.getItem("bodily-welcome-seen")

    if (hasSeenWelcome) {
      onComplete()
      return
    }

    // Mark as seen
    sessionStorage.setItem("bodily-welcome-seen", "true")

    // Animation sequence
    const sequence = [
      { delay: 0, duration: 400 }, // Icon appears
      { delay: 500, duration: 250 }, // B
      { delay: 800, duration: 250 }, // O
      { delay: 1100, duration: 250 }, // D
      { delay: 1400, duration: 250 }, // I
      { delay: 1700, duration: 250 }, // L
      { delay: 2000, duration: 250 }, // Y
    ]

    sequence.forEach((_, index) => {
      const timing = sequence[index].delay
      const timer = setTimeout(() => {
        setStep(index + 1)
      }, timing)

      return () => clearTimeout(timer)
    })

    // Final fade out at 2300ms to reveal home page animations at right time
    const finalTimer = setTimeout(() => {
      setShow(false)
      setTimeout(() => onComplete(), 600)
    }, 2300)

    return () => clearTimeout(finalTimer)
  }, [])

  if (!show) return null

  const letters = ["B", "O", "D", "I", "L", "Y"]

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${!show ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="flex items-center gap-3">
        {/* Logo Icon */}
        <div className={`transition-all duration-500 ${step > 0 ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
          <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
            <div className="w-16 h-16 border-4 border-red-500 rounded-full" />
          </div>
        </div>

        {/* Text */}
        <div className="flex overflow-hidden h-20">
          {letters.map((letter, index) => (
            <div
              key={letter}
              className={`text-6xl font-black text-white transition-all duration-300 ${
                step > index + 1 ? "animate-slide-in opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
