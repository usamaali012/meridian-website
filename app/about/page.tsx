"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Award, Globe, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { number: "30+", label: "Projects Completed" },
    { number: "20+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ]

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower businesses with innovative digital systems and strategic financial guidance that drives sustainable growth and success.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "A diverse group of experts in technology and finance, committed to delivering exceptional solutions tailored to your business needs.",
    },
    {
      icon: Award,
      title: "Our Excellence",
      description:
        "Recognized industry leaders with a proven track record of successful implementations and satisfied clients across various sectors.",
    },
    {
      icon: Globe,
      title: "Our Reach",
      description:
        "Serving businesses globally with localized expertise and 24/7 support to ensure your operations run smoothly worldwide.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/professional-business-team-meeting-office-story.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-5 lg:mt-10">
          <div className="mb-8">

            <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our Story
              <br />
              <span className="text-white">Our Journey</span>
            </h1>

            <p className="text-md md:text-xl text-white mb-8 leading-relaxed max-w-2xl mx-auto">
              From humble beginnings to industry leaders, discover how we've been transforming businesses with
              innovative digital solutions and expert guidance.
            </p>

            <Button
              size="lg"
              className="bg-white text-[#0A509E] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Learn Our Story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-slate-400/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 border border-white/30"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative z-20">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A509E] to-[#0396C7]">
                Meridian Enterprises
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto relative z-20">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              const cardImages = [
                "/business-mission-target-goals-strategy.jpg",
                "/diverse-professional-team-collaboration-office.jpg",
                "/award-excellence-trophy-achievement-success.jpg",
                "/global-network-world-map-connections.jpg",
              ]

              return (
                <div key={index} className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cardImages[index] || "/placeholder.svg"}
                      alt={value.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0A509E] transition-colors duration-300">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">{value.description}</p>

                    {/* Action indicator */}
                    <div className="flex items-center text-[#0A509E] font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A509E]/5 to-[#0396C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
