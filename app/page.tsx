"use client"

import { useState } from "react"
import Image from "next/image"
import WelcomeScreen from "@/components/welcome-screen"
import HeroSection from "@/components/hero-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/animated-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { CardWithGlow } from "@/components/card-with-glow"

export default function HomePage() {
  const [welcomeComplete, setWelcomeComplete] = useState(false)
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: trainingRef, isVisible: trainingVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <>
      {!welcomeComplete && <WelcomeScreen onComplete={() => setWelcomeComplete(true)} />}

      <HeroSection />

      {/* Features Section */}
      <section className="bg-black py-32" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-700 mb-16 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
              Inspired to
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-center" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
              <span className="text-gray-400">Inspire Your Best</span> <span className="text-red-500">Self</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Trainers",
                description: "Certified professionals dedicated to your transformation",
                image: "/personal-training.jpg",
              },
              {
                title: "State-of-the-Art Equipment",
                description: "Latest technology for optimal performance",
                image: "/training-strength.jpg",
              },
              {
                title: "Holistic Approach",
                description: "Mind, body, and spirit wellness integrated",
                image: "/training-flexibility.jpg",
              },
            ].map((feature, index) => (
              <AnimatedCard key={feature.title} delay={index * 150} animation="slideUp">
                <CardWithGlow>
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center p-6">
                      <h4 className="text-xl font-bold text-white mb-2 transition-colors duration-500 group-hover:text-white">{feature.title}</h4>
                      <p className="text-gray-200 text-sm text-center transition-colors duration-500 group-hover:text-white">{feature.description}</p>
                    </div>
                  </div>
                </CardWithGlow>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="bg-black py-32" ref={trainingRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-700 mb-16 ${trainingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
              Train Smarter
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-center text-red-500" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
              Unleash Your Potential
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strength Training",
                desc: "Build muscle and power",
                image: "/training-strength.jpg",
              },
              {
                title: "Cardio Fitness",
                desc: "Enhance endurance",
                image: "/training-cardio.jpg",
              },
              {
                title: "Flexibility",
                desc: "Improve mobility",
                image: "/training-flexibility.jpg",
              },
            ].map((training, index) => (
              <AnimatedCard key={training.title} delay={index * 150} animation="fadeRight">
                <CardWithGlow>
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={training.image || "/placeholder.svg"} alt={training.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center p-6">
                      <h4 className="text-2xl font-bold text-white mb-2 transition-colors duration-500 group-hover:text-white" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
                        {training.title}
                      </h4>
                      <p className="text-gray-200 transition-colors duration-500 group-hover:text-white">{training.desc}</p>
                    </div>
                  </div>
                </CardWithGlow>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-black py-32" ref={experienceRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-700 mb-16 ${experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
              Experience
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-center text-gray-400" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
              Fitness Like <span className="text-red-500">Never Before</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Personal Training", image: "/personal-training.jpg" },
              { title: "Group Classes", image: "/group-classes.jpg" },
              { title: "Nutrition Plans", image: "/nutrition-plans.jpg" },
            ].map((exp, index) => (
              <AnimatedCard key={exp.title} delay={index * 150} animation="zoomIn">
                <CardWithGlow>
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={exp.image || "/placeholder.svg"} alt={exp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors flex items-center justify-center p-6">
                      <h4 className="text-xl font-bold text-white text-center transition-colors duration-500 group-hover:text-white" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
                        {exp.title}
                      </h4>
                    </div>
                  </div>
                </CardWithGlow>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-32" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
              Your Fitness Goals. Their Experience.
            </h2>
            <p className="text-xl text-white/90 mb-8">Join thousands transforming their bodies and elevating their spirits</p>
            <Link href="/get-started">
              <Button className="bg-black hover:bg-gray-900 text-white px-8 py-3 text-lg">Get Started Today</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
