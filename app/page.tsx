"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
} from "lucide-react"

export default function Home() {
const services = [
    { iconsrc: "/icons/security1.svg", title: "Security Systems" },
    { iconsrc: "/icons/network1.svg", title: "Network Solutions" },
    { iconsrc: "/icons/telecom1.svg", title: "Telecom Services" },
    { iconsrc: "/icons/camera-solution.svg", title: "Camera Solutions" },
  ];

const servicesData = [
  {
    id: "Security System",
    title: "Security System",
    iconsrc: "/services/surveillance-system.webp",
    description:
      "Protect your premises with advanced surveillance and access control systems designed to ensure round-the-clock safety and reliability.",
  },
  {
    id: "Network Solution",
    title: "Network Solution",
    iconsrc: "/services/network.png",
    description:
      "Delivering robust and scalable network infrastructures that keep your business connected, secure, and performing at peak efficiency.",
  },
  {
    id: "Telecom Exchange",
    title: "Telecom Exchange",
    iconsrc: "/services/telecom-exchange.jpg",
    description:
      "Providing high-performance telecom exchange setups with seamless connectivity, optimized routing, and reliable communication management.",
  },
  {
    id: "Camera Solutions",
    title: "Camera Solutions",
    iconsrc: "/services/camera-solutions.jpg",
    description:
      "Offering smart camera systems with HD monitoring, remote access, and analytics to help you safeguard and manage your environment effectively.",
  },
];
const trustedPartners = [
    { name: "Microsoft", logo: "/microsoft-logo.png" },
    { name: "Cisco", logo: "/cisco-logo.svg" },
    { name: "Dell Technologies", logo: "/dell-technologies-logo.png" },
    { name: "HP Enterprise", logo: "/hp-enterprise-logo.jpg" },
    { name: "Fortinet", logo: "/fortinet-logo.png" },
    { name: "Hikvision", logo: "/hikvision-logo.jpg" },
  ]

  const [selectedServiceId, setSelectedServiceId] = useState("Security System");
  const selectedService =
    servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative w-full h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[url(/herosec/hero1.jpg)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0A509E]/80 to-[#243972]/40" />

        {/* Content */}
        <div className="relative z-20 mx-auto lg:pl-30 h-full flex flex-col justify-center">
          <div className="max-w-2xl px-8">
            <h1 className="text-5xl md:text-6xl text-white mb-4 leading-tight">
              Driving <span className="text-[#00bcd4]">Growth</span>
              <br />
              with Innovation in
              <br />
              Security Solutions
            </h1>
            <p className="text-md text-white mb-8 max-w-xl">
              “Comprehensive digital systems solutions consultancy to drive your
              business forward in the modern world.”
            </p>
          </div>
        </div>

        {/* Hero Services */}
        <div className="z-20 absolute bottom-0 left-0 right-0">
          <div className="w-auto lg:max-w-[80%] mx-8 lg:mx-auto px-0">
            <div className="grid grid-cols-1 md:grid-cols-4 h-[24vh]">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`relative p-10 text-center transition transform hover:scale-103 hover:shadow-2xl hover:shadow-[#00bcd4]/40 ${
                    index === 0
                      ? "bg-[#19348B]/80"
                      : "bg-[#19348B]/70 backdrop-blur-sm"
                  }`}
                >
                  <img
                    src={service.iconsrc}
                    alt={service.title}
                    className="absolute top-6 left-10 w-12"
                  />
                  <div className="absolute bottom-12 w-full text-center text-2xl text-white font-normal">
                    {service.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  Services */}
      <section className="py-18 bg-white relative overflow-hidden max-w-[90%] mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-24">
            
            <h2 className="text-3xl md:text-4xl font-semibold text-black mt-2">
              Real Time Dealing in all Professional IT Solutions & Services
            </h2>
          </div>

          {/* Service Cards */}
          <div className="flex justify-center items-start flex-wrap gap-8 mb-16">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={cn(
                  "relative group block w-64 md:w-72 bg-white overflow-hidden transform transition-all duration-300 text-left shadow-md hover:shadow-2xl hover:-translate-y-3",
                  selectedServiceId === service.id
                    ? "ring-2 ring-[#00bcd4]/40 scale-105 shadow-lg"
                    : "hover:ring-1 hover:ring-[#00bcd4]/20"
                )}
              >
                {/* top image (full width, fixed height) */}
                <div className="w-full h-40 md:h-60 bg-gray-100">
                  <img
                    src={service.iconsrc}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* card body */}
                <div className="p-6">
                  <div className="h-0.5 w-14 bg-[#1E3A8A] mb-4 transition-all duration-300 group-hover:w-20"></div>

                  <h3
                    className={cn(
                      "text-lg font-semibold mb-2 transition-colors duration-300",
                      selectedServiceId === service.id
                        ? "text-[#00bcd4]"
                        : "text-[#0A509E] group-hover:text-[#0A509E]"
                    )}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* arrow indicator (same as before) */}
                {selectedServiceId === service.id && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-t-12 border-t-[#00bcd4]"></div>
                )}
              </button>
            ))}
          </div>

          {/* Selected Service Description */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-semibold text-slate-800 mb-4">
              {selectedService.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              {selectedService.description}
            </p>
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-[#0A509E] text-white font-semibold rounded-lg hover:bg-[#009fb8] transition"
            >
              Learn More
            </Link>
          </div>
      </section>

      {/* Testimonials */}
      <section className="relative w-full flex justify-center items-center py-10 mt-10">
        {/* Soft background blur behind box */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[80%] h-[300px] bg-gray-200/40 blur-3xl rounded-3xl"></div>
        </div>

        <div
          className="
            relative z-20 w-[80%]  
            bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            grid grid-cols-1 md:grid-cols-2 overflow-hidden
          "
        >
          {/* Left Image */}
          <div className="w-full h-full">
            <img src="/digitalsystems.jpg"  alt="Profile" className="w-full h-full object-cover"/>
          </div>

          {/* Right Content */}
          <div className="p-10 flex flex-col justify-center">
            <div className="text-6xl text-gray-300 mb-1">“</div>

            <p className="text-2xl font-semibold text-gray-800 leading-relaxed mb-6">
              Our goal is to deliver exceptional, scalable and secure IT solutions
              that help businesses grow with full confidence.
            </p>

            <div>
              <h4 className="text-xl font-semibold text-[#0A509E]">M. Kamran Khan</h4>
              <p className="text-gray-500 text-sm">CEO — Meridian Enterprises</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trusted Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Our Story - Image */}
          <div className="relative group overflow-hidden">
            <img
              src="/partnership.jpg"
              alt="City Buildings"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* Overlay that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A509E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* RIGHT TOP – Heading + Text */}
          <div className="flex flex-col justify-center p-6 bg-white hover:bg-gray-50 transition-colors duration-300">
            <span className="uppercase text-sm font-semibold tracking-wider text-[#0A509E] hover:text-[#083d7a] transition-colors duration-300">
              Further Information
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-2 hover:text-[#0A509E] transition-colors duration-300">
               Trusted by more than 80 clients
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Over the years, we've built strong, long-term relationships with our clients by 
              delivering consistent value and dependable support. Today, we proudly serve 
              more than 80 clients across multiple industries, helping them scale, optimize, 
              and grow through solutions built on trust, transparency, and results.
            </p>

            <button className="mt-8 px-6 py-3 border-2 border-[#0A509E] text-[#0A509E] font-semibold rounded-full hover:bg-[#0A509E] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95">
              Read Our Story
            </button>
          </div>

          {/* LEFT BOTTOM – Dark Block + Text */}
          <div className="bg-[#1A237E] text-white p-12 hover:bg-[#0d1a5c] transition-colors duration-500 group">
            <h2 className="text-3xl font-semibold mb-4 group-hover:translate-x-2 transition-transform duration-300">
              Longstanding Expertise
            </h2>

            <p className="text-blue-100 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
              With years of experience in telecommunication and technology services, we 
              provide reliable, scalable, and future-ready solutions that empower businesses 
              to stay connected and competitive.
            </p>

            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center gap-3 hover:translate-x-2 hover:text-white transition-all duration-300 cursor-default">
                <span className="text-green-400">✓</span>
                High-performance telecom infrastructure solutions
              </li>
              <li className="flex items-center gap-3 hover:translate-x-2 hover:text-white transition-all duration-300 cursor-default">
                <span className="text-green-400">✓</span>
                24/7 technical support with rapid issue resolution
              </li>
              <li className="flex items-center gap-3 hover:translate-x-2 hover:text-white transition-all duration-300 cursor-default">
                <span className="text-green-400">✓</span>
                Seamless integration across devices, networks, and platforms
              </li>
              <li className="flex items-center gap-3 hover:translate-x-2 hover:text-white transition-all duration-300 cursor-default">
                <span className="text-green-400">✓</span>
                Advanced monitoring, automation, and optimization tools
              </li>
            </ul>


            <button className="mt-8 px-6 py-3 bg-white text-[#1A237E] font-semibold rounded-full hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95">
              Read Our Story
            </button>
          </div>

          {/* Experts-Image */}
          <div className="relative group overflow-hidden">
            <img
              src="/digitalsols.png" 
              alt="Workspace" 
              className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
            />
            {/* Overlay that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A237E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0A509E] to-[#0396C7]">
                Partners
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with industry-leading technology partners to deliver the best solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {trustedPartners.map((partner, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-6 backdrop-blur-sm hover:bg-white/70 hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  className="h-auto w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Ready to leverage these partnerships for your business success?</p>
            <Button
              size="lg"
              className="bg-linear-to-r from-[#0A509E] to-[#0396C7] hover:from-[#0A509E]/90 hover:to-[#0396C7]/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-50 py-18 flex flex-row gap-20 z-0 relative h-[300px] w-full bg-[url('/buildings.jpeg')] object-fill bg-center overflow-hidden bg-no-repeat">
      <div className="z-10 absolute inset-0 bg-[#0A509E] opacity-70 "></div>
      <div className="flex flex-col gap-2 justify-center">
        <span className="z-30 text-white text-6xl font-bold text-start">
          Get In Touch with us
        </span>
        <span className="z-30 text-xl font-light text-orange-200 text-start">
          Please feel free to contact us. We're are excited to get in touch with you, feel free to ask anything. We are at your service
        </span>
      </div>
      <div className="flex items-center justify-center mx-auto">
        <button className="flex z-30 px-12 py-4 bg-white text-black border-2 border-white rounded-full hover:text-[#1e5a96] items-center transition text-xl">
            Contact Us
        </button>
      </div>
      </section>

      <Footer />
    </main>
  );
}
