"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="relative mt-10 h-96 bg-cover bg-center bg-no-repeat flex items-center" style={{ backgroundImage: "url('/bm-phone.webp')" }}>
        {/* Blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A509E] via-[#0A509E]/75 to-[#0396C7]/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center my-auto border-3 border-l-[#0396c7] border-transparent">
          <div className="w-full flex-wrap items-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
            <p className="text-4xl lg:text-5xl  text-white font-extrabold leading-relaxed">Get in touch and let us know how we can help</p>
          </div>
        </div>

      </div>

      <div className="px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[600px]">

            {/* Left Side - Contact Information */}
            <div className="space-y-8 flex flex-col justify-center">

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">Reach Out Today</h1>

              {/* Contact Details */}
              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Email:</p>
                  <p className="text-xl font-semibold text-gray-900">info@meridianent.net</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-1">Phone:</p>
                  <p className="text-xl font-semibold text-gray-900">051-2743288</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-1">Office:</p>
                  <p className="text-xl font-semibold text-gray-900">
                    Flat No. 2, 3rd Floor Khyber 3 Apartments
                    <br />
                    G-15 Markaz Islamabad
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-4">Follow Us</p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                    >
                      <Facebook className="w-5 h-5 text-gray-600" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                    >
                      <Twitter className="w-5 h-5 text-gray-600" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                    >
                      <Instagram className="w-5 h-5 text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Write something..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-base font-medium rounded-lg transition-colors duration-200"
                >
                  Submit
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-4">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600 text-2xl font-bold">Visit our office in Islamabad</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-8xl rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.1129060771365!2d72.92300626963757!3d33.63338091493452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97f19f75dae7%3A0x20f17ef93e1a33a5!2sKhyber%20Plaza-03!5e1!3m2!1sen!2s!4v1757402280166!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
