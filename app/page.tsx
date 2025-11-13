"use client"
import AutoPopup from "@/components/Autopopup"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  Shield,
  Calculator,
  Network,
  Phone,
  Camera,
  TrendingUp,
  BrickWall,
  Users,
  ShieldEllipsis,
  CheckCircle,
  ServerCrash
} from "lucide-react"
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function HomePage() {
  const [currentText, setCurrentText] = useState(0)
  const animatedTexts = [
    "Digital Systems",
    "Security Solutions",
    "Network Infrastructure",
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const [showBanner, setShowBanner] = useState(false);
  // Download Handler
  const handleDownload = async () => {
    try {
      const response = await fetch("https://backend.meridianent.net/api/auth/download-mobile-app");
      if (!response.ok) throw new Error("Failed to fetch APK URL");

      const data = await response.json();
      const fileUrl = data.file_url;

      if (!fileUrl) {
        setShowBanner(true); // 🚨 show banner
        setTimeout(() => setShowBanner(false), 3000); // auto-hide after 3s
        throw new Error("No file_url in API response");
      }

      window.open(fileUrl, "_blank");
    } catch (err) {
      console.error("Error downloading APK:", err);
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 5000);
    }
  };

  const digitalServices = [
    {
      icon: Shield,
      title: "Security & Surveillance Systems",
      description:
        "Comprehensive security solutions including CCTV systems, access control, alarm systems, and 24/7 monitoring services to protect your business assets.",
      features: ["HD Camera Systems", "Remote Monitoring", "Alarm Integration"],
    },
    {
      icon: Camera,
      title: "Advanced Camera Solutions",
      description:
        "State-of-the-art camera systems with AI-powered analytics, facial recognition, and intelligent motion detection for enhanced security coverage.",
      features: ["Facial Recognition", "Night Vision", "Cloud Storage"],
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description:
        "Design, installation, and maintenance of robust network systems including LAN/WAN setup, wireless networks, and enterprise-grade connectivity solutions.",
      features: ["LAN/WAN Setup", "Network Security", "Performance Optimization"],
    },
    {
      icon: Phone,
      title: "Telephone Exchange Systems",
      description:
        "Modern PBX systems, VoIP solutions, and unified communications platforms to streamline your business communications and reduce costs.",
      features: ["PBX Systems", "Unified Communications", "Call Analytics"],
    },
  ]

  // const financialServices = [
  //   {
  //     icon: Calculator,
  //     title: "Financial Planning & Analysis",
  //     description:
  //       "Strategic financial planning services including budgeting, forecasting, and financial modeling to help your business achieve sustainable growth.",
  //     features: ["Budget Planning", "Financial Forecasting", "Performance Analysis"],
  //   },
  //   {
  //     icon: TrendingUp,
  //     title: "Investment Advisory",
  //     description:
  //       "Expert investment guidance and portfolio management services to maximize returns while managing risk according to your business objectives.",
  //     features: ["Risk Analysis", "Market Research", "Investment Strategy"],
  //   },
  // ]

  const trustedPartners = [
    { name: "Microsoft", logo: "/microsoft-logo.png" },
    { name: "Cisco", logo: "/cisco-logo.png" },
    { name: "Dell Technologies", logo: "/dell-technologies-logo.png" },
    { name: "HP Enterprise", logo: "/hp-enterprise-logo.jpg" },
    { name: "Fortinet", logo: "/fortinet-logo.png" },
    { name: "Hikvision", logo: "/hikvision-logo.jpg" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Ppop Up for Download */}
      <AutoPopup/>
     
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-start px-4 lg:px-8 pt-16 lg:pt-10"
        style={{
          backgroundImage: "url('/corp1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",}}>

        {/* White gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A509E]/65 via-[#0A509E]/45 to-transparent"></div>

        {/*App NA Banner   */}
        {showBanner && (
        <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-center py-3 z-50 animate-slideDown">
          The App is not Available at this moment
        </div>)}

        {/* Main Content of Hero Sec */}
        <div className="relative z-10 md:max-w-8xl mx-auto w-full px-1 lg:px-10">
          <div className="w-full md:max-w-4xl mt-10">

            {/*Download button (mobile only) */}
            <div
              onClick={handleDownload}
              className="lg:hidden lg:mt-0 rounded-3xl flex justify-center lg:justify-start mt-4 mb-4 cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src="/pics/download-button.png"
                alt="Download APK"
                className="w-76 h-auto object-contain"
              />
            </div>

            {/* Text content positioned on the left */}
            <h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-left text-white mb-6 leading-normal">
              Driving Growth  <br /> with <span className="text-slate-200 font-bold text-4xl lg:text-6xl">Innovation </span> in <br /> {" "}
              <span className="text-transparent bg-clip-text bg-slate-200 font-bold text-3xl lg:text-6xl transition-all duration-1000">
                {animatedTexts[currentText]}
              </span>
            </h1>

            <p className="text-base lg:text-lg italic text-justify lg:text-left px-2 lg:px-0 text-gray-100 mb-8 leading-relaxed">
              "Comprehensive digital systems solutions consultancy to drive your business forward in
              the modern world"
            </p>

            {/* Service Icons */}
            <div className="grid grid-cols-1 gap-4 mb-8 mx-auto lg:mx-0 w-[70%] lg:w-[35%] rounded-2xl bg-slate-800/60 justify-items-center p-6">
              <div className="flex items-center gap-3 pr-2 lg:pr-6">
                <div className="w-9 lg:w-14 h-9 lg:h-14 bg-gradient-to-br from-[#0A509E] to-[#0396C7] rounded-full flex items-center justify-center">
                  <ShieldEllipsis className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                </div>
                <span className="text-md lg:text-lg font-medium text-gray-100">Security Systems</span>
              </div>
              <div className="flex items-center gap-3 pr-2 lg:pr-4">
                <div className="w-9 lg:w-14 h-9 lg:h-14 bg-gradient-to-br from-[#0A509E] to-[#0396C7] rounded-full flex items-center justify-center">
                  <ServerCrash className="w-6 lg:w-8 h-5 lg:h-8 text-white" />
                </div>
                <span className="text-md lg:text-lg font-medium text-gray-100">Network Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 lg:w-14 h-9 lg:h-14 bg-gradient-to-br from-[#0A509E] to-[#0396C7] rounded-full flex items-center justify-center">
                  <Phone className="w-6 lg:w-8 h-5 lg:h-8 text-white" />
                </div>
                <span className="text-md lg:text-lg font-medium text-gray-100">Telephone Exchange</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <div className="w-13 lg:w-14 h-9 lg:h-14 bg-gradient-to-br from-[#0A509E] to-[#0396C7] rounded-full flex items-center justify-center">
                  <Calculator className="w-6 lg:w-8 h-5 lg:h-8 text-white" />
                </div>
                <span className="text-md lg:text-lg font-medium text-gray-100">Financial Consulting</span>
              </div> */}
            </div>
          </div>
        </div>

      </section>

      {/* Digital Services */}
      <section id="services" className="h-auto py-16 bg-[url(/pics/digiglobe.jpg)] bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 py-4 bg-slate-900/70 max-w-3xl mx-4 lg:mx-auto rounded-2xl bg px-2">
            <h2 className="text-2xl lg:text-3xl  font-bold text-white mb-4">Digital Systems Solutions</h2>
            <p className="text-base lg:text-lg text-gray-100 max-w-2xl mx-auto">
              Cutting-edge technology solutions to secure, connect, and optimize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[80%] mx-auto">
            {digitalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/80 rounded-2xl p-6"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A509E]/10 to-[#0396C7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2 md:mb-4">
                      <div className="w-9 lg:w-13 h-9 lg:h-13 bg-gradient-to-r from-[#0A509E] to-[#0396C7] rounded-xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white transition-all duration-300">
                        <IconComponent className="w-5 lg:w-7 h-5 lg:h-7 text-white group-hover:text-[#0A509E] transition-colors duration-300" />
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0A509E] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-800 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-1 md:space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#0396C7]" />
                          <span className="text-md text-gray-800 font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Business Services */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[url(/pics/invest.jpg)] bg-fit bg-no-repeat">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Financial Consultancy Services</h2>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Expert financial guidance and strategic consulting to drive sustainable business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[80%] mx-auto">
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
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 lg:w-13 h-10 px-2 lg:h-13 bg-gradient-to-r from-[#0A509E] to-[#0396C7] rounded-xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white transition-all duration-300">
                        <IconComponent className="w-5 lg:w-7 h-5 lg:h-7 text-white group-hover:text-[#0A509E] transition-colors duration-300" />
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0A509E] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-800 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#0396C7]" />
                          <span className="text-md text-gray-800 font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section> */}

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A509E] to-[#0396C7]">
                Partners
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with industry-leading technology partners to deliver the best solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {trustedPartners.map((partner, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/70 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  className="max-h-12 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Ready to leverage these partnerships for your business success?</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0A509E] to-[#0396C7] hover:from-[#0A509E]/90 hover:to-[#0396C7]/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
