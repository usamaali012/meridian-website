"use client";

import React, { useState } from "react";
import { Navbar2 } from "@/components/navbar2";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { faPhone, faEnvelope,  faMapMarkerAlt,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar2 />

      {/* Hero Banner */}
      <div className="relative mt-20 h-[500px] bg-center bg-cover bg-no-repeat flex items-center" style={{ backgroundImage: "url('/contact-banner.png')" }}>
        <div className="absolute inset-0 bg-linear-to-b from-[#0A509E]/90 via-[#0A509E]/20 to-[#0A509E]/5"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-1">
            Contact Us
          </h1>
          <p className="text-xl lg:text-2xl text-white/90">
            Get in touch and let us know how we can help
          </p>
        </div>
      </div>

      {/* Info Columns */}
      <div className="w-[90%] mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Phone */}
        <div>
          <FontAwesomeIcon
            icon={faPhone}
            className="text-[#454545] text-3xl mb-4"
          />
          <h3 className="text-3xl font-light mb-2">Phone</h3>
          <p className="text-gray-500 mb-2">
            Feel free to call us for any queries or support.
          </p>
          <a href="tel:0512743288" className="text-[#454545] font-semibold">
            051-2743288
          </a>
        </div>

        {/* Email */}
        <div>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-[#454545] text-3xl mb-4"
          />
          <h3 className="text-3xl font-light mb-2">Email</h3>
          <p className="text-gray-500 mb-2">Write to us anytime.</p>
          <a
            href="mailto:info@meridianent.net"
            className="text-[#454545] font-semibold"
          >
            info@meridianent.net
          </a>
        </div>

        {/* Location */}
        <div>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-[#454545] text-3xl mb-4"
          />
          <h3 className="text-3xl font-light mb-2">Location</h3>
          <p className="text-gray-500 mb-2 leading-relaxed">
            Flat No. 2, 3rd Floor, Khyber-3 Apts,
            <br />
            G-15 Markaz Islamabad
          </p>
          <a
            target="_blank"
            className="text-[#454545] font-semibold"
            href="https://maps.app.goo.gl"
          >
            View on Google Map
          </a>
        </div>
      </div>

      {/*Contact Form*/}
      <div className="bg-[url('/map-contactus.svg')] bg-cover bg-center bg-no-repeat py-12 relative">
      
        <div className="absolute inset-0 bg-gray-100/70 opacity-50 z-0"></div>

        {/* Heading */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-8 relative z-10">
          <h2 className="text-5xl font-light text-gray-900 leading-relaxed">Leave us your info</h2>
          <p className="text-gray-600 mt-2">
            We will get in touch with you soon 
          </p>
        </div>

        {/* Form */}
        <div className="max-w-6xl mx-auto p-6 md:p-10 relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Full Name*"
                required
                className="border border-gray-300 py-10 bg-white rounded-none"
              />

              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email*"
                type="email"
                required
                className="border border-gray-300 py-10 bg-white rounded-none"
              />
            </div>

            <Input
              name="subject"
              placeholder="Subject*"
              className="border border-gray-300 py-10 bg-white rounded-none"
            />

            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              placeholder="Message*"
              required
              className="border border-gray-300 py-10 bg-white rounded-none"
            />

            <div className="pt-2 text-right">
              <Button className="bg-blue-700 px-10 py-5 rounded text-white hover:bg-blue-900 transition">
                Submit Now
              </Button>
            </div>

          </form>
        </div>
      </div>


      {/* Map */}
      <div className="py-10 bg-">
        <div className="max-w-[95%] mx-auto px-4">
          <h2 className="text-5xl text-center text-gray-900 mb-2">
            Find Us
          </h2>
          <p className="text-gray-600 text-center mb-6 text-lg font-medium">
            Visit our office in Islamabad
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d207.61983874555693!2d72.92364002142025!3d33.63338313237505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97f19f75dae7%3A0x20f17ef93e1a33a5!2sKhyber%20Plaza-03!5e0!3m2!1sen!2s!4v1763458571540!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            className="shadow-lg invert"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}
