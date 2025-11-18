import Link from "next/link"
import Image from "next/image"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="relative bg-linear-to-br from-[#0a1e2e] via-[#0d2d47] to-[#0f3a5a] text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info with Logo */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* Replace '/logo.png' with your actual logo path */}
              <Image 
                src="/meridian-logo.svg" 
                alt="Company Logo" 
                width={180} 
                height={60}
                className="brightness-0 invert hover:invert-0 hover:brightness-100 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Comprehensive digital systems solutions consultancy to drive your business forward in the modern world
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-sm group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 hover:scale-110 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <FaTwitter className="text-sm group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-sm group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-400 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'About Us', href: '/about' },
                { name: 'Privacy Policy', href: '/privacy-policy/' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/70 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 group"
                  >
                    <span className="inline-block group-hover:text-blue-400 transition-colors">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (Optional - you can customize) */}
          <div>
            <h4 className="text-xl font-semibold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-400 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                'Security Solutions',
                'Network Solutions',
                'Telecom Services',
                'System Integration',
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="text-white/70 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 group"
                  >
                    <span className="inline-block group-hover:text-blue-400 transition-colors">›</span> {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h4 className="text-xl font-semibold mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-400 rounded-full"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                  <FaPhone className="text-sm" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Phone</p>
                  <a href="tel:051-2743288" className="text-white/90 hover:text-blue-400 transition-colors">
                    051-2743288
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                  <FaEnvelope className="text-sm" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Email</p>
                  <a 
                    href="mailto:info@meridianent.net" 
                    className="text-white/90 hover:text-blue-400 transition-colors break-all"
                  >
                    info@meridianent.net
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Address</p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Flat No. 2, 3rd Floor, Khyber-3 Apts, G-15 Markaz Islamabad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; 2025 Meridian Enterprises Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="text-white/50 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy-policy/" className="text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}