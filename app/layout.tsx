import type React from "react"
import type { Metadata } from "next"
import { Kanit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const kanit = Kanit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Meridian Enterprises (Pvt) Ltd",
  description: "Surveillance and Digital Solution Systems",
  icons:{
    icon:"/favicon.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
