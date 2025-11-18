"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A509E] shadow-lg" : "bg-[#0A509E]/10"
      } backdrop-blur-sm`}
    >
      <div className="lg:mx-52 pt-3">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 text-white font-bold text-2xl">
            <Image
              src="/logo/meridian-logo-white.svg"
              height={150}
              width={180}
              alt="Meridian Enterprises Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center text-lg space-x-16 font-light">
            <Link href="/" className="text-white px-3 py-2 rounded-md text-lg hover:bg-white/10 transition">
              Home
            </Link>
            <Link
              href="/services"
              className="text-white px-3 py-2 rounded-md text-lg hover:bg-white/10 transition"
            >
              Service
            </Link>
            <Link
              href="/about"
              className="text-white px-3 py-2 rounded-md text-lg hover:bg-white/10 transition"
            >
              About
            </Link>
            <Link
              href="/contactus/"
              className="text-white px-3 py-2 rounded-md text-lg hover:bg-white/10 transition"
            >
              Contact us
            </Link>
            <Link
              href="/privacy"
              className="text-white px-3 py-2 rounded-md text-lg hover:bg-white/10 transition"
            >
              Privacy Policy
            </Link>
          </div>

          {/* User Log-in Button */}
          <button className="hidden md:block px-10 py-2 backdrop-blur-xl text-white border-2 border-white rounded-full hover:bg-white hover:text-[#1e5a96] transition text-lg">
            User Log-in
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition"
              onClick={() => setIsOpen(false)}
            >
              Service
            </Link>
            <Link
              href="/about"
              className="block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
            <Link
              href="/privacy"
              className="block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition"
              onClick={() => setIsOpen(false)}
            >
              Privacy Policy
            </Link>
            <button className="w-full mt-2 px-6 py-2 text-white border-2 border-white rounded-full hover:bg-white hover:text-[#1e5a96] transition font-medium text-sm">
              User Log-in
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
