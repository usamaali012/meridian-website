import { Navbar2 } from "@/components/navbar2"
import { Footer } from "@/components/footer"

export default function Services() {
  const services = [
    {
      title: "Security Surveillance Systems",
      description:
        "Meridian Enterprises provides comprehensive security surveillance systems designed to protect your business assets and ensure employee safety.",
      features: [
        "CCTV Installation and Maintenance",
        "Real-time Monitoring Solutions",
        "Cloud-based Recording Systems",
        "24/7 Security Monitoring",
        "Mobile Access & Alerts",
      ],
    },
    {
      title: "Digital Systems",
      description:
        "Transform your business with our cutting-edge digital systems solutions that streamline operations and improve efficiency.",
      features: [
        "Enterprise Software Solutions",
        "Business Process Automation",
        "Data Management Systems",
        "Security & Compliance",
        "System Integration & Support",
      ],
    },
    {
      title: "Network Systems",
      description:
        "Build a strong foundation for your business with our robust and scalable network infrastructure solutions.",
      features: [
        "Network Design & Implementation",
        "LAN & WAN Solutions",
        "WiFi Infrastructure",
        "Network Security",
        "Disaster Recovery & Backup",
      ],
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      <Navbar2 />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e5a96] to-[#0d2d47] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive solutions for security, digital systems, and network infrastructure
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-4xl font-bold text-[#1e5a96] mb-4">{service.title}</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl">{service.description}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="p-4 bg-[#f5f5f5] rounded-lg border-l-4 border-[#00bcd4]">
                    <p className="text-gray-800 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#1e5a96] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 text-white/90">
            Get in touch with our team to discuss your security and digital needs.
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-[#00bcd4] text-[#1e5a96] font-semibold rounded-lg hover:bg-white transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
