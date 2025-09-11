import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import {Manrope,  Kanit} from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  weight:"400",
})


export const metadata: Metadata = {
  title: "Meridian Enterprises",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Professional digital systems solutions including surveillance, security cameras, networking, telephone exchange systems, and expert financial consultancy services.",
  keywords:
    "digital systems, security cameras, surveillance, networking, telephone exchange, financial consultancy, business solutions",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${kanit.variable}`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
