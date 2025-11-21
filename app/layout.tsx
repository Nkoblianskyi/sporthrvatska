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
  title: "sportsko klađenje Hrvatska | Sve o hrvatskom i svjetskom sportu",
  description:
    "Najnovije sportske vijesti iz Hrvatske i svijeta. Pratite nogomet, košarku, rukomet, tenis i ostale sportove. Ekskluzivni intervjui, analize i live rezultati.",
  category: "sportsko klađenje Hrvatska",
  classification: "Sports News Portal",
  keywords: [
  "sportsko klađenje Hrvatska",
  "kladionice Hrvatska",
  "online klađenje Hrvatska",
  "najbolje kladionice",
  "nogometno klađenje Hrvatska",
  "tenis klađenje",
  "košarka klađenje",
  "bonusi za klađenje",
  "klađenje uživo",
  "legalne kladionice Hrvatska",
  "betting sites Croatia",
  "online sportsko klađenje",
  "Formula 1 klađenje",
  "MMA klađenje",
  "hokej klađenje",
  "pikado klađenje",
  "bilijar klađenje",
  "top kladionice Hrvatska",
  "rang lista kladionica",
  "sigurno klađenje Hrvatska",
  "odgovorno klađenje",
  "najbolje kladionice Hrvatska",
  "sportsko klađenje savjeti",
  "klađenje aplikacije Hrvatska",
  "mobilno klađenje",
  "eSports klađenje",
  "virtualni sportovi klađenje",
  "klađenje na nogometne lige",
  "klađenje na teniske turnire",
  "klađenje na košarkaške utakmice",
  "ekskluzivni bonusi za nove korisnike",
  "promocije kladionica",
  "isplate dobitaka klađenje",
  "korisnička podrška kladionica",
  "zakonski okvir klađenja Hrvatska",
  "porezi na dobitke od klađenja",
  "kladionica",
  "sportska kladionica",
  "online kladionica",
  "klađenje uživo",
  "online klađenje",
  "kladionica uzivo",
  "online casino Hrvatska",
  "najbolji online casino",
  "casino bonusi",
  "casino igre Hrvatska",
  "casino Croatia",
  "online casino games",
  "casino bonuses"
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
        url: "/favicon.ico",
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
    images: ["/favicon.ico"],
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
