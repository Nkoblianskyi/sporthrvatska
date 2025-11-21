import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sport Hrvatska | Sve o hrvatskom i svjetskom sportu",
  description:
    "Najnovije sportske vijesti iz Hrvatske i svijeta. Pratite nogomet, košarku, rukomet, tenis i ostale sportove. Ekskluzivni intervjui, analize i live rezultati.",
  verification: {
    google: "verification-code-here",
  },
  category: "Sports News & Journalism",
  classification: "Sports News Portal",
  keywords: [
    "sport hrvatska",
    "sportske vijesti hrvatska",
    "hrvatski sport",
    "nogomet hrvatska",
    "hnl vijesti",
    "dinamo zagreb",
    "hajduk split",
    "hrvatska reprezentacija",
    "košarka hrvatska",
    "rukomet hrvatska",
    "tenis hrvatska",
    "vaterpolo hrvatska",
    "formula 1 hrvatska",
    "sportski portal",
    "sportske novosti",
    "sport news croatia",
    "croatian sports",
    "sports journalism croatia",
    "live rezultati",
    "sport uživo",
    "sportske analize",
    "intervjui sportaši",
    "luka modrić",
    "hrvatski sportaši",
    "aba liga",
    "euroliga",
    "liga prvaka",
    "europsko prvenstvo",
    "svjetsko prvenstvo",
  ],
  authors: [{ name: "Sport Hrvatska" }],
  publisher: "sporthrvatska.com",
  openGraph: {
    title: "Sport Hrvatska | Hrvatski sportski portal",
    description:
      "Najnovije sportske vijesti, analize i ekskluzivni sadržaj iz svijeta hrvatskog i međunarodnog sporta.",
    url: "https://sporthrvatska.com",
    siteName: "Sport Hrvatska",
    locale: "hr_HR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sport Hrvatska",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sport Hrvatska | Hrvatski sportski portal",
    description: "Najnovije sportske vijesti, analize i ekskluzivni sadržaj",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sporthrvatska.com",
  },
  other: {
    rating: "general",
    distribution: "global",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}
