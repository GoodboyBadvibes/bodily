'use client'

import { Button } from "@/components/ui/button"
import GoogleMap from "@/components/google-map"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ContactPage() {
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="bg-black py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
              Get in <span className="text-red-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">We're here to answer your questions and help you begin your journey</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-black py-32" ref={contactRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={`transition-all duration-700 ease-out ${
                contactVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-2xl font-black text-white mb-8" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
                Contact Information
              </h2>
              <div className="space-y-6">
                {[
                  { label: "Address", value: "10, Gabby Adeosun str, off Admiralty way, Lekki, Lagos" },
                  { label: "Phone", value: "+234 813 057 3621" },
                  { label: "Email", value: "info@bodily.com" },
                  { label: "Hours", value: "Mon-Fri: 6AM-10PM | Sat-Sun: 8AM-8PM" },
                ].map((info, index) => (
                  <div
                    key={info.label}
                    className={`transition-all duration-700 ease-out ${
                      contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: contactVisible ? `${index * 100}ms` : '0ms' }}
                  >
                    <h3 className="text-sm font-semibold text-red-500 mb-2 transition-colors duration-500 hover:text-red-300">{info.label}</h3>
                    <p className="text-gray-300 transition-colors duration-500 hover:text-white">{info.value}</p>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-red-500 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {["Instagram", "Facebook", "Twitter"].map((social) => (
                    <a key={social} href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-700 ease-out ${
                contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <h2 className="text-2xl font-black text-white mb-8" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
                Send us a Message
              </h2>
              <form className="space-y-6">
                {[
                  { label: "Name", type: "text", placeholder: "Your name" },
                  { label: "Email", type: "email", placeholder: "Your email" },
                  { label: "Phone", type: "tel", placeholder: "Your phone" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-sm font-semibold text-white mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-white/10 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Message</label>
                  <textarea
                    placeholder="Your message"
                    rows={5}
                    className="w-full bg-white/10 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                  />
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-black py-32" ref={mapRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`aspect-video bg-black rounded-lg border border-red-500/20 overflow-hidden transition-all duration-700 ease-out glow-right ${
              mapVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <GoogleMap address="10, Gabby Adeosun str, off Admiralty way, Lekki, Lagos" lat={6.4497} lng={3.4756} zoom={15} />
          </div>
        </div>
      </section>
    </main>
  )
}
