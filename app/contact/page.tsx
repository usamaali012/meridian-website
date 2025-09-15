"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] pt-4">

            {/* Left Side - Contact Information */}
            <div className="bg-[#0A509E] p-4 lg:p-12 relative overflow-hidden rounded-lg">
                {/* Decorative circles */}
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-32 right-20 w-20 h-20 bg-white/5 rounded-full"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-3">Contact Information</h2>
                    <p className="text-white/80">Say something to start a live chat!</p>
                  </div>

                  <div className="space-y-8 flex-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-white text-lg font-semibold">051-2743288</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-white text-lg font-semibold">info@meridianent.net</span>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 flex items-center justify-center mt-1">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white text-lg font-semibold">
                        <div>Flat No. 2, 3rd Floor, Khyber-3 Apts,</div>
                        <div>G-15 Markaz Islamabad</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <a
                      href="#"
                      className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-8 lg:p-12 bg-gray-50 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col justify-center">
                  <div>
                    <label htmlFor="firstName" className="block text-lg font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 border-0 border-b border-gray-300 rounded-none bg-transparent focus:ring-0 focus:border-gray-500 transition-colors duration-200"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 border-0 border-b border-gray-300 rounded-none bg-transparent focus:ring-0 focus:border-gray-500 transition-colors duration-200"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-0 py-4 border-0 border-b border-gray-300 rounded-none bg-transparent focus:ring-0 focus:border-gray-500 transition-colors duration-200 resize-none"
                      placeholder="Write your message..."
                    />
                  </div>

                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="bg-blue-600 text-white border border-transparent 
                                px-10 py-5 rounded-lg font-medium transition-colors duration-500 
                                ml-auto flex justify-center
                                hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:scale-105"
                    >
                      <span className="text-center">Send Message</span>
                    </Button>
                  </div>
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
