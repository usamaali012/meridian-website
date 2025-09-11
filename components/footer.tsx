import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: "Security Systems", href: "/" },
      { label: "Camera Solutions", href: "/" },
      { label: "Network Infrastructure", href: "/" },
      { label: "Telephone Systems", href: "/" },
      { label: "Financial Planning", href: "/" },
      { label: "Business Consulting", href: "/" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "News", href: "/news" },
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "Support Center", href: "/support" },
      { label: "Documentation", href: "/docs" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms of Service", href: "/terms" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 pr-6">
            <div className="flex items-center space-x-2 mb-4">
              <div>
                <img src="/pics/meridian-logo.png" alt="logo" className="w-[90%] h-auto" />
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge digital systems and expert financial consultancy services for
              sustainable growth and success.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">Subscribe to our newsletter for the latest updates and insights.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0A509E] transition-all duration-300 flex-1 lg:w-64"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-[#0A509E] to-[#0396C7] hover:from-[#0A509E]/90 hover:to-[#0396C7]/90 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Meridian Enterprise. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 bg-gray-800 hover:bg-gradient-to-r hover:from-[#0A509E] hover:to-[#0396C7] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
