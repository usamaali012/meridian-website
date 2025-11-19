"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Activity, Phone, Eye, Network, Server, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"

// Animation variants for smooth reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

export default function AboutPage() {
  // Updated Stats for Hardware/Security Context
  const stats = [
    { number: "50+", label: "Surveillance Systems Deployed" },
    { number: "99.9%", label: "Network Uptime" },
    { number: "24/7", label: "Technical Support" },
  ]

  // Updated Timeline: Evolution from PABX to Modern IP Security
  const timeline = [
    {
      year: "Inception",
      title: "The Analog Era",
      desc: "Founded as a dedicated PABX specialist, simplifying office communication for local businesses with reliable telephone exchange systems.",
    },
    {
      year: "Expansion",
      title: "Network Integration",
      desc: "Expanded operations to include robust networking infrastructure, laying the cabling backbone for the digital age.",
    },
    {
      year: "Today",
      title: "Smart Security",
      desc: "Leading the market in AI-driven Surveillance, IP Telephony, and integrated cyber-physical security ecosystems.",
    },
  ]

  // Updated Values: Specific to Telecom, CCTV, and Networking
  const values = [
    {
      icon: Phone,
      title: "Crystal Clear Connect",
      description:
        "Communication is the lifeline of business. From legacy PABX to modern VoIP, we ensure your voice is heard without interruption.",
      image: "/telecom-pabx-communication.jpg",
    },
    {
      icon: Eye,
      title: "Vigilant Surveillance",
      description:
        "Security isn't just recording; it's analyzing. Our HD CCTV and IP camera solutions provide intelligent 24/7 oversight for your assets.",
      image: "/cctv-security-camera-monitoring.jpg",
    },
    {
      icon: Network,
      title: "Robust Infrastructure",
      description:
        "We engineer the nervous system of your building. Our networking solutions are built to handle heavy data loads with zero latency.",
      image: "/server-room-networking-cables.jpg",
    },
    {
      icon: ShieldCheck,
      title: "Total Integrity",
      description:
        "We believe in zero-trust security. Our systems protect both your physical premises and your digital perimeter with uncompromising standards.",
      image: "/cyber-physical-security-shield.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#0A509E] selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Parallax-style Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105"
          style={{
            backgroundImage: "url(/about-us.jpg)",
          }}
        >
          {/* Gradient Overlay for better text readability - Darker for security vibe */}
          <div className="absolute inset-0 bg-linear-to-b from-black/95 via-black/85 to-black/30" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Connectivity Meets <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
              Uncompromising Security.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Meridian Enterprises integrates advanced Telephony, Intelligent Surveillance, and High-Speed Networking into one seamless ecosystem.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contactus/"
              className="bg-[#0A509E] hover:bg-[#084080] text-white px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-blue-900/40 transition-all duration-300 hover:scale-105"
            >
              Request Site Survey
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-6 rounded-full text-lg transition-all duration-300"
            >
              View Product Catalog
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS STRIP */}
      <div className="relative z-20 -mt-16 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-3 p-8 border-t-4 border-[#0A509E]">
          {stats.map((stat, index) => (
            <div key={index} className="text-center border-b md:border-b-0 md:border-r last:border-r-0 border-gray-100 py-4 md:py-2">
              <div className="text-3xl md:text-4xl font-bold text-[#0A509E] mb-1">{stat.number}</div>
              <div className="text-gray-500 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* OUR ORIGIN STORY (The "About" Core) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#0A509E] font-semibold uppercase tracking-widest mb-2">Our Heritage</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Providers at Heart, Guardians by Choice.</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Meridian Enterprises began with a simple mission: to ensure that when you pick up the phone, it works. In a world that never sleeps, downtime is not an option.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As technology evolved, so did we. We transitioned from analog telephone exchanges to complex IP networking and high-definition surveillance. Today, we don't just connect your computers; we protect the physical premises that house them.
              </p>
              
              {/* Timeline Mini-Component */}
              <div className="space-y-6 mt-8 border-l-2 border-[#0A509E]/20 pl-8 relative">
                {timeline.map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-[#0A509E] group-hover:scale-125 transition-transform duration-300 shadow-md" />
                    <span className="text-sm font-bold text-[#0A509E] block mb-1">{item.year}</span>
                    <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/5 group">
                <img 
                  src="/net-eng.jpg" 
                  alt="Network Engineering" 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#0A509E]/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block animate-bounce-slow border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Activity className="w-8 h-8 text-[#0A509E]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">System Active</div>
                    <div className="text-sm text-gray-500">Real-time Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The <span className="text-[#0A509E]">Infrastructure</span> We Build
            </h2>
            <p className="text-xl text-gray-600">
              We provide the hardware backbone for modern enterprises, combining durability with cutting-edge intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  // Added hover:-translate-y-2 for better interactivity
                  className="group relative bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-[#0A509E]/30 cursor-default"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Content Side */}
                    <div className="p-8 flex-1 flex flex-col justify-center z-10 relative">
                      <div className="w-14 h-14 bg-[#0A509E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0A509E] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-7 h-7 text-[#0A509E] group-hover:text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm">{value.description}</p>
                      
                      <div className="flex items-center text-[#0A509E] font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                        Explore Solutions <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                       {/* Added context tags for image replacement */}
                      <img 
                        src={value.image || "/placeholder.svg"} 
                        alt=""
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-r from-gray-50 to-transparent md:via-transparent" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#0A509E] text-white px-4 relative overflow-hidden">
         {/* Subtle pattern overlay */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
         
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Premises Today.</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Don't leave your security to chance or your communication to outdated hardware. Get a free site assessment from our engineering team.
          </p>
          <Link href="/contactus/" className="bg-white text-[#0A509E] hover:bg-gray-100 px-10 py-3 rounded-full text-lg font-semibold shadow-xl transition-transform hover:scale-105">
            Schedule Free Site Survey
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}