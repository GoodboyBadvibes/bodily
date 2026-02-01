'use client'

import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function GetStartedPage() {
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: plansRef, isVisible: plansVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="bg-black py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
              Start Your <span className="text-red-500">Journey</span>
            </h1>
            <p className="text-xl text-gray-300">Three simple steps to join Bodily and transform your life</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-black py-32" ref={stepsRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 mb-16">
            {[
              {
                step: "01",
                title: "Schedule Your Consultation",
                description: "Meet with our team to understand your goals and create a personalized plan.",
              },
              {
                step: "02",
                title: "Get Your Assessment",
                description: "Complete a fitness assessment to establish your baseline and identify areas of focus.",
              },
              {
                step: "03",
                title: "Begin Your Transformation",
                description: "Start training with our expert coaches and begin your holistic wellness journey.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className={`flex gap-6 transition-all duration-700 ease-out ${
                  stepsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: stepsVisible ? `${index * 150}ms` : '0ms' }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-600 text-white font-black text-2xl glow-red transition-all duration-500 hover:glow-right" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-500 hover:text-red-300" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-400 transition-colors duration-500 hover:text-gray-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Membership Plans */}
          <div className="mb-16" ref={plansRef}>
            <div
              className={`transition-all duration-700 ease-out mb-8 ${
                plansVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl font-black text-white mb-8" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
                Membership Plans
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Basic", price: "$49", features: ["Gym Access", "Open Hours", "Basic Facilities"] },
                {
                  name: "Premium",
                  price: "$99",
                  features: ["Gym Access", "24/7 Hours", "All Facilities", "Personal Training (4x)"],
                },
                {
                  name: "Elite",
                  price: "$199",
                  features: [
                    "Gym Access",
                    "24/7 Hours",
                    "All Facilities",
                    "Personal Training (Unlimited)",
                    "Nutrition Coaching",
                  ],
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`border-2 rounded-lg p-8 ${
                    plan.name === "Premium" ? "border-red-600 bg-red-600/10" : "border-gray-700 bg-white/5"
                  }`}
                >
                  <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-black text-red-500 mb-6" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
                    {plan.price}
                    <span className="text-sm text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="text-gray-300 flex gap-2">
                        <span className="text-red-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Choose Plan</Button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
              Ready to Transform?
            </h3>
            <p className="text-white/90 mb-6">Contact us today to schedule your free consultation</p>
            <Button className="bg-black hover:bg-gray-900 text-white px-8 py-2">Contact Us Now</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
