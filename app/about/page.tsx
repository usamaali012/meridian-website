import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e5a96] to-[#0d2d47] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Meridian Enterprises</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your trusted partner in security solutions and digital transformation
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#1e5a96] mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-4">
              Meridian Enterprises is a leading provider of comprehensive security surveillance systems, digital systems
              solutions, and network infrastructure services. With years of industry experience, we have established
              ourselves as a trusted partner for businesses seeking to enhance their security posture and embrace
              digital transformation.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is to deliver innovative, reliable, and cost-effective solutions that help businesses operate
              more securely and efficiently in the modern world.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#1e5a96] mb-6">Our Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-[#f5f5f5] rounded-lg">
                <h3 className="text-xl font-bold text-[#1e5a96] mb-3">Security Solutions</h3>
                <p className="text-gray-700">
                  Advanced surveillance and security monitoring systems to protect your assets and people.
                </p>
              </div>
              <div className="p-6 bg-[#f5f5f5] rounded-lg">
                <h3 className="text-xl font-bold text-[#1e5a96] mb-3">Digital Systems</h3>
                <p className="text-gray-700">
                  Comprehensive digital transformation services to modernize your business operations.
                </p>
              </div>
              <div className="p-6 bg-[#f5f5f5] rounded-lg">
                <h3 className="text-xl font-bold text-[#1e5a96] mb-3">Network Infrastructure</h3>
                <p className="text-gray-700">
                  Robust and scalable network solutions for seamless connectivity and communication.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#1e5a96] mb-6">Why Choose Us?</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#00bcd4] font-bold mr-3">✓</span>
                <span>
                  <strong>Professional Team:</strong> Experienced professionals dedicated to your success
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00bcd4] font-bold mr-3">✓</span>
                <span>
                  <strong>Quality Solutions:</strong> State-of-the-art technology and best practices
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00bcd4] font-bold mr-3">✓</span>
                <span>
                  <strong>24/7 Support:</strong> Round-the-clock technical support and maintenance
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00bcd4] font-bold mr-3">✓</span>
                <span>
                  <strong>Custom Solutions:</strong> Tailored services to meet your specific needs
                </span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-[#1e5a96] text-white rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-6">
              Have questions? We're here to help you achieve your security and digital transformation goals.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-[#00bcd4] text-[#1e5a96] font-semibold rounded-lg hover:bg-white transition"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
