'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function AboutPage() {
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation({ threshold: 0.3 })
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-black py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
              About <span className="text-red-500">Bodily</span>
            </h1>
            <p className="text-xl text-gray-300">
              Transforming lives through integrated fitness, wellness, and holistic health.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-black py-32" ref={missionRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div
              className={`transition-all duration-700 ease-out ${
                missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed">
                To empower individuals to achieve their fitness goals while nurturing their mental and spiritual
                well-being. We believe in the transformation of the whole person—body, mind, and spirit.
              </p>
            </div>
            <div
              className={`transition-all duration-700 ease-out delay-200 ${
                missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
                Our Vision
              </h2>
              <p className="text-gray-300 leading-relaxed">
                To be the leading fitness center that combines cutting-edge training with holistic wellness practices,
                creating a community where everyone can achieve their full potential.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/20 to-red-700/10 border border-red-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-black text-white mb-4" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
              Core Values
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-red-500">✓</span>
                <span>
                  <strong>Excellence:</strong> We pursue the highest standards in every aspect
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">✓</span>
                <span>
                  <strong>Community:</strong> We build lasting relationships with our members
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">✓</span>
                <span>
                  <strong>Holism:</strong> We address body, mind, and spirit equally
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">✓</span>
                <span>
                  <strong>Innovation:</strong> We embrace the latest in fitness technology
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="bg-black py-32" ref={teamRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-700 ease-out mb-8 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
              Meet Our Team
            </h2>
          </div>
          <p className="text-gray-300 mb-8">
            Our experienced trainers and wellness experts are dedicated to helping you succeed.
          </p>
          <Link href="/team">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2">View Full Team</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
