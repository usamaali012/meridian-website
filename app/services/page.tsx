import { Navbar2 } from "@/components/navbar2"
import { Footer } from "@/components/footer"

export default function Services() {
 const services = [
  {
    title: "Security Surveillance Systems",
    image: "/services/security-surveillance.jpg",
    description:
      "Meridian Enterprises provides comprehensive security surveillance systems designed to protect your business assets and ensure employee safety.",
    features: [
      "CCTV Installation and Maintenance",
      "Real-time Monitoring Solutions",
      "Cloud-based Recording Systems",
      "24/7 Security Monitoring",
    ],
  },
  {
    title: "Network Systems",
    image: "/services/network-system.jpg",
    description:
      "Build a strong foundation for your business with our robust and scalable network infrastructure solutions.",
    features: [
      "Network Design & Implementation",
      "LAN & WAN Solutions",
      "WiFi Infrastructure",
      "Network Security",
    ],
  },
  {
  title: "Telecom Systems",
  image: "/services/telecom-system.webp",
  description:
    "Empowering businesses with advanced telecom infrastructure designed for seamless connectivity, reliability, and high-performance communication.",
  features: [
    "PBX & IP Telephony Solutions",
    "Fiber Optic Installation",
    "VoIP Setup & Management",
    "Structured Cabling (Cat6/Cat6A)",
    "Telecom Equipment Integration",
  ],
  },
  {
  title: "Camera Solutions",
  image: "/services/camera-systems.png",
  description:
    "Professional-grade surveillance camera systems designed to enhance security, ensure visibility, and provide real-time monitoring across any environment.",
  features: [
    "HD & IP Camera Installation",
    "360° PTZ Surveillance Systems",
    "NVR/DVR Setup & Configuration",
    "Remote & Mobile Monitoring",
    "Maintenance & On-Site Support",
  ],
  },

]

  return (
    <main className="min-h-screen pt-20">
      <Navbar2 />

      {/* Hero Section */}
      <section className="relative text-white py-20 px-4 bg-[url('/services-bg.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden group">
        <div className="absolute inset-0 bg-[#0A509E]/70 z-0 group-hover:bg-[#0A509E]/60 transition-colors duration-700"></div>

        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-5"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-md transform group-hover:scale-105 transition-transform duration-500">
            Our Services
          </h1>

          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md group-hover:text-white transition-colors duration-300">
            Comprehensive solutions for security, digital systems, and network infrastructure
          </p>

          {/* Animated underline */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-white/50 rounded-full group-hover:w-48 group-hover:bg-white transition-all duration-500"></div>
          </div>
        </div>
      </section>


      {/* Services Details */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-[85%] mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center group ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[350px] object-cover object-center transform group-hover:scale-110 transition-all duration-700 ease-out"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0A509E]/80 via-[#0A509E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-4xl font-sans text-[#1e5a96] mb-4 group-hover:text-[#0A509E] transition-colors duration-300 group-hover:translate-x-2 transform">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 group-hover:text-gray-900 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white shadow-md hover:shadow-xl p-4 rounded-xl border border-gray-200 hover:border-[#0A509E]/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-default group/feature"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <span className="text-[#00bcd4] text-xl font-bold group-hover/feature:scale-125 group-hover/feature:rotate-12 transition-transform duration-300">
                        ✔
                      </span>
                      <p className="text-gray-800 font-medium group-hover/feature:text-[#0A509E] transition-colors duration-300">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Call to Action Button */}
                <button className="mt-8 px-8 py-3 bg-[#0A509E] text-white font-semibold rounded-full hover:bg-[#083d7a] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group/btn">
                  Learn More
                  <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}