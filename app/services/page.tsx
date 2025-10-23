"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer" // Added Footer import
import {
  Shield,
  Camera,
  Network,
  Phone,
  Calculator,
  TrendingUp,
  FileText,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function ServicesPage() {
  const digitalServices = [
    {
      icon: Shield,
      title: "Security & Surveillance Systems",
      description:
        "Comprehensive security solutions including CCTV systems, access control, alarm systems, and 24/7 monitoring services to protect your business assets.",
      features: ["HD Camera Systems", "Remote Monitoring", "Access Control", "Alarm Integration"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Camera,
      title: "Advanced Camera Solutions",
      description:
        "State-of-the-art camera systems with AI-powered analytics, facial recognition, and intelligent motion detection for enhanced security coverage.",
      features: ["AI Analytics", "Facial Recognition", "Night Vision", "Cloud Storage"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description:
        "Design, installation, and maintenance of robust network systems including LAN/WAN setup, wireless networks, and enterprise-grade connectivity solutions.",
      features: ["LAN/WAN Setup", "Wireless Networks", "Network Security", "Performance Optimization"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Phone,
      title: "Telephone Exchange Systems",
      description:
        "Modern PBX systems, VoIP solutions, and unified communications platforms to streamline your business communications and reduce costs.",
      features: ["VoIP Solutions", "PBX Systems", "Unified Communications", "Call Analytics"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A509E] to-[#0396C7]">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital systems solutions services designed to transform and
            grow your business
          </p>
        </div>
      </section>

      {/* Digital Systems Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Digital Systems Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technology solutions to secure, connect, and optimize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {digitalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/80 rounded-2xl p-8"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A509E]/10 to-[#0396C7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0A509E] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#0396C7]" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-gradient-to-r from-[#0A509E] to-[#0396C7] hover:from-[#0A509E]/90 hover:to-[#0396C7]/90 text-white rounded-lg font-medium transition-all duration-300 group-hover:scale-105">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Financial Consultancy Services */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Financial Consultancy Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert financial guidance and strategic consulting to drive sustainable business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {financialServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/80 rounded-2xl p-8"
                >
                  {/* Hover Glow Effect */}
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0A509E]/10 to-[#0396C7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0A509E] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#0396C7]" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-gradient-to-r from-[#0A509E] to-[#0396C7] hover:from-[#0A509E]/90 hover:to-[#0396C7]/90 text-white rounded-lg font-medium transition-all duration-300 group-hover:scale-105">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section> */} 

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let our experts help you choose the right combination of digital systems and services for your
            unique needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0A509E] to-[#0396C7] hover:from-[#0A509E]/90 hover:to-[#0396C7]/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#0A509E] text-[#0A509E] hover:bg-[#0A509E] hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
