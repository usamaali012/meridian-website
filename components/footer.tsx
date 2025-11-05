import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0d2d47] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">MERIDIAN</h3>
          <p className="text-white/80">
            Comprehensive digital systems solutions consultancy to drive your business forward in the modern world
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-white/80 hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white/80 hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/80 hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white/80 hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div id="contact">
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <div className="space-y-3 text-white/80">
            <p>
              <span className="block font-semibold text-white">Phone:</span>
              051-2743288
            </p>
            <p>
              <span className="block font-semibold text-white">Email:</span>
              <a href="mailto:info@meridianent.net" className="hover:text-white transition">
                info@meridianent.net
              </a>
            </p>
            <p>
              <span className="block font-semibold text-white">Address:</span>
              Flat No. 2, 3rd Floor, Khyber-3 Apts, G-15 Markaz Islamabad
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
        <p>&copy; 2025 Meridian Enterprises. All rights reserved.</p>
      </div>
    </footer>
  )
}
