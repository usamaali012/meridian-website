"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Users, Target, Award, Globe } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower businesses with innovative digital systems and strategic financial guidance that drives sustainable growth and success.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "A diverse group of experts in technology and finance, committed to delivering exceptional solutions tailored to your business needs.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Our Excellence",
      description:
        "Recognized industry leaders with a proven track record of successful implementations and satisfied clients across various sectors.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Globe,
      title: "Our Reach",
      description:
        "Serving businesses globally with localized expertise and 24/7 support to ensure your operations run smoothly worldwide.",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A509E] to-[#0396C7]">Meridian</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded on the principle of excellence, Meridian Enterprise has been at the forefront of digital
            transformation and financial innovation for over a decade.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/80 rounded-2xl p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A509E]/10 to-[#0396C7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0A509E] transition-colors duration-300">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
