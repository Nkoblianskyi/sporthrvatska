"use client"

import { sportsSites } from "@/types"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingList } from "@/components/rating-list"
import { RatingMethodology } from "@/components/rating-methodology"
import { Footer } from "@/components/footer"
import { TopOffersModal } from "@/components/top-offers-modal"
import { CookieBanner } from "@/components/cookie-banner"
import { SportsVariety } from "@/components/sports-variety"
import { SportHrvatskaAbout } from "@/components/sport-hrvatska-about"
import { FaqSection } from "@/components/faq-section"
import { FeaturedArticles } from "@/components/featured-articles"
import { SportsCategories } from "@/components/sports-categories"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background image layer */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/football-stadium-bg.jpg)",
          backgroundAttachment: "fixed",
        }}
      />

      {/* White overlay for readability */}
      <div className="fixed inset-0 z-0 bg-white/65" />

      {/* Content layer */}
      <div className="relative z-10">
        <Header />
        <main className="relative max-w-[1300px] mx-auto">
          <Hero />
          <FeaturedArticles />
          <SportsCategories />
          <RatingList sites={sportsSites} />
          <SportHrvatskaAbout />
          <SportsVariety />
          <RatingMethodology />
          <FaqSection />
        </main>
        <Footer />
      </div>

      <TopOffersModal sites={sportsSites} />
      <CookieBanner />
    </div>
  )
}
