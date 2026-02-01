'use client'

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function TeamPage() {
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation({ threshold: 0.2 })
  const team = [
    {
      name: "James Okonkwo",
      role: "Head Coach & Founder",
      specialty: "Strength Training",
      bio: "Master trainer with 15+ years of experience",
    },
    {
      name: "Sarah Williams",
      role: "Nutritionist",
      specialty: "Performance Nutrition",
      bio: "Certified dietitian specializing in athlete nutrition",
    },
    {
      name: "Marcus Johnson",
      role: "Wellness Coach",
      specialty: "Holistic Health",
      bio: "Expert in mindfulness and spiritual wellness",
    },
    {
      name: "Amara Adeyemi",
      role: "Personal Trainer",
      specialty: "HIIT & Cardio",
      bio: "Certified in functional fitness and conditioning",
    },
    {
      name: "David Chen",
      role: "Rehabilitation Specialist",
      specialty: "Physical Therapy",
      bio: "Licensed therapist with injury recovery expertise",
    },
    {
      name: "Lisa Brown",
      role: "Group Fitness Director",
      specialty: "Group Classes",
      bio: "Certified in yoga, pilates, and group training",
    },
  ]

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="bg-black py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
              Meet Our <span className="text-red-500">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-300">Dedicated professionals committed to your transformation</p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-black py-32" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`bg-gradient-to-b from-white/5 to-white/0 border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 hover:from-red-600/20 hover:to-red-700/10 transition-all duration-500 glow-right ${
                  teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: teamVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full mb-4 glow-red" />
                <h3 className="text-xl font-bold text-white mb-1 transition-colors duration-500 hover:text-red-300" style={{ fontFamily: "var(--font-bebas, sans-serif)" }}>
                  {member.name}
                </h3>
                <p className="text-red-500 font-semibold mb-2 transition-colors duration-500 hover:text-red-300">{member.role}</p>
                <p className="text-sm text-gray-400 mb-3 transition-colors duration-500 hover:text-gray-200">{member.specialty}</p>
                <p className="text-gray-300 text-sm transition-colors duration-500 hover:text-gray-100">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
