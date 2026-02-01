import type React from "react"
import type { Metadata } from "next"
import { Inter, Bebas_Neue, Playfair_Display } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" })
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Bodily",
    default: "Bodily – Holistic Wellness & Fitness",
  },
  description:
    "Transform your body, elevate your spirit. Bodily is a premium fitness center dedicated to holistic wellness.",
  keywords: "gym, fitness, wellness, training, bodybuilding",
  authors: [{ name: "Bodily Team" }],
  creator: "Bodily",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://bodily.com",
    siteName: "Bodily",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ "--font-bebas": bebasNeue.style.fontFamily, "--font-playfair": playfair.style.fontFamily } as React.CSSProperties}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
