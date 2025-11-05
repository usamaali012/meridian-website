"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
const services = [
    { iconsrc: "/icons/security1.svg", title: "Security Systems" },
    { iconsrc: "/icons/network1.svg", title: "Network Solutions" },
    { iconsrc: "/icons/telecom1.svg", title: "Telecom Exchange" },
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

  const [selectedServiceId, setSelectedServiceId] = useState("Security System");
  const selectedService =
    servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative w-full h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[url(/herosec/hero1.jpg)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0A509E]/90 to-[#243972]/60" />

        {/* Content */}
        <div className="relative z-20 mx-auto lg:pl-30 h-full flex flex-col justify-center">
          <div className="max-w-2xl px-8">
            <h1 className="text-5xl md:text-6xl text-slate-600 mb-4 leading-tight">
              Driving <span className="text-[#00bcd4]">Growth</span>
              <br />
              with Innovation in
              <br />
              Security Solutions
            </h1>
            <p className="text-md text-slate-600/90 mb-8 max-w-xl">
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
                  <div className="absolute bottom-12 w-full text-center text-2xl text-slate-600 font-normal">
                    {service.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  Services Section  */}
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
            <p className="text-gray-900 leading-relaxed mb-8">
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

      <Footer />
    </main>
  );
}
