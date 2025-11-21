"use client"
import Image from "next/image"
import { Star, ExternalLink } from "./icons"
import type { SportsSite } from "@/types"

interface RatingListProps {
  sites: SportsSite[]
}

export function RatingList({ sites }: RatingListProps) {
  const renderStars = (rating: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = rating / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-amber-500 text-amber-500" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-gray-300" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-4 w-4 md:h-5 md:w-5">
            <Star className="absolute h-4 w-4 md:h-5 md:w-5 text-gray-300" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-4 w-4 md:h-5 md:w-5 fill-amber-500 text-amber-500" />
            </div>
          </div>,
        )
      }
    }

    return starElements
  }

  const DisclaimerBadge = () => (
    <div className="bg-slate-50 border border-slate-200 px-4 py-2 flex items-center gap-2 text-xs">
      <span className="font-bold text-slate-700">Sportske vijesti</span>
      <span className="text-slate-400">•</span>
      <span className="text-slate-600 flex items-center gap-1">
        Više informacija <ExternalLink className="w-3 h-3" />
      </span>
    </div>
  )

  return (
    <section className="py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        <div className="grid gap-4 md:gap-6">
          {sites.map((site, index) => {
            const isFirstPlace = index === 0
            const showBadge = index < 3 && site.badges.length > 0
            const rankNumber = index + 1

            return (
              <a
                key={site.id}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative overflow-visible group transition-all duration-300 ${
                  isFirstPlace
                    ? "bg-amber-50 border-2 border-amber-400 shadow-md hover:shadow-lg hover:border-amber-500"
                    : "bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300"
                }`}
              >
                <div
                  className={`absolute top-0 left-0 z-20 ${
                    isFirstPlace ? "bg-amber-400" : "bg-slate-600"
                  } text-white font-bold text-base md:text-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-sm`}
                >
                  {rankNumber}
                </div>

                {showBadge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div
                      className={`${
                        isFirstPlace ? "bg-amber-400" : "bg-slate-600"
                      } text-white text-xs md:text-sm font-bold px-4 md:px-6 py-2 uppercase tracking-wide shadow-sm border border-white/20`}
                    >
                      {site.badges[0]}
                    </div>
                  </div>
                )}

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-[280px_1fr_240px_220px] items-center gap-6 p-8">
                    <div className="relative pl-8">
                      <div
                        className={`flex items-center justify-center bg-black p-6 h-[140px] border transition-all ${
                          isFirstPlace ? "border-amber-400" : "border-slate-200 group-hover:border-slate-300"
                        }`}
                      >
                        <div className="relative h-20 w-full">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-6 border-l border-r border-slate-100">
                      <p
                        className={`text-xs font-bold mb-2 uppercase tracking-wide ${
                          isFirstPlace ? "text-amber-600" : "text-slate-600"
                        }`}
                      >
                        SPORTSKA PONUDA
                      </p>
                      <h3 className="text-slate-900 text-2xl md:text-3xl font-bold leading-tight">{site.bonus}</h3>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-6 border-r border-slate-100">
                      <p
                        className={`text-xs font-bold mb-2 uppercase tracking-wide ${
                          isFirstPlace ? "text-amber-600" : "text-slate-600"
                        }`}
                      >
                        OCJENA
                      </p>
                      <div className="relative mb-3">
                        <div
                          className={`text-5xl md:text-6xl font-bold ${
                            isFirstPlace ? "text-amber-600" : "text-slate-700"
                          }`}
                        >
                          {site.rating.toFixed(1)}
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-1 mb-2">{renderStars(site.rating)}</div>
                      <p className="text-slate-500 text-xs font-medium">({site.reviews.toLocaleString()} recenzija)</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 px-6">
                      <div className="w-full transition-all duration-300 text-white font-bold py-5 px-6 text-center text-sm uppercase tracking-wide transform group-hover:scale-105 shadow-sm bg-amber-400 hover:bg-amber-500">
                        Saznaj više
                      </div>
                      <p
                        className={`font-semibold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors ${
                          isFirstPlace
                            ? "text-amber-600 group-hover:text-amber-700"
                            : "text-slate-600 group-hover:text-slate-700"
                        }`}
                      >
                        Pogledaj detalje <ExternalLink className="w-4 h-4" />
                      </p>
                    </div>
                  </div>
                  <div className="px-8 pb-6 flex justify-center">
                    <DisclaimerBadge />
                  </div>
                </div>

                {/* Tablet Layout */}
                <div className="hidden md:block lg:hidden">
                  <div className="p-6">
                    <div className="grid grid-cols-[180px_1fr_180px] gap-4 items-center mb-4">
                      {/* Logo */}
                      <div className="relative pl-6">
                        <div
                          className={`flex items-center justify-center bg-black p-4 h-[100px] border transition-all ${
                            isFirstPlace ? "border-amber-400" : "border-slate-200 group-hover:border-slate-300"
                          }`}
                        >
                          <div className="relative h-16 w-full">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Bonus */}
                      <div className="flex flex-col items-center justify-center text-center px-4 border-l border-r border-slate-100">
                        <p
                          className={`text-xs font-bold mb-2 uppercase tracking-wide ${
                            isFirstPlace ? "text-amber-600" : "text-slate-600"
                          }`}
                        >
                          SPORTSKA PONUDA
                        </p>
                        <h3 className="text-slate-900 text-lg font-bold leading-tight">{site.bonus}</h3>
                      </div>

                      {/* Rating */}
                      <div className="flex flex-col items-center justify-center text-center px-4">
                        <p
                          className={`text-xs font-bold mb-1 uppercase tracking-wide ${
                            isFirstPlace ? "text-amber-600" : "text-slate-600"
                          }`}
                        >
                          OCJENA
                        </p>
                        <div
                          className={`text-4xl font-bold mb-2 ${isFirstPlace ? "text-amber-600" : "text-slate-700"}`}
                        >
                          {site.rating.toFixed(1)}
                        </div>
                        <div className="flex items-center justify-center gap-1 mb-1">{renderStars(site.rating)}</div>
                        <p className="text-slate-500 font-medium text-[10px]">
                          ({site.reviews.toLocaleString()} recenzija)
                        </p>
                      </div>
                    </div>

                    {/* Button Row */}
                    <div className="flex flex-col items-center justify-center gap-2 pt-4 border-t border-slate-100">
                      <div className="w-full max-w-xs transition-all duration-300 text-white font-bold py-4 px-6 text-center text-sm uppercase tracking-wide transform group-hover:scale-105 shadow-sm bg-amber-400 hover:bg-amber-500">
                        Saznaj više
                      </div>
                      <p
                        className={`font-semibold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors ${
                          isFirstPlace
                            ? "text-amber-600 group-hover:text-amber-700"
                            : "text-slate-600 group-hover:text-slate-700"
                        }`}
                      >
                        Pogledaj detalje <ExternalLink className="w-4 h-4" />
                      </p>
                    </div>

                    {/* Disclaimer */}
                    <div className="pt-4 mt-4 border-t border-slate-100 flex justify-center">
                      <DisclaimerBadge />
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="p-4 pt-12">
                    {/* Logo and Bonus Row */}
                    <div className="grid grid-cols-2 gap-3 items-stretch mb-4">
                      {/* Logo */}
                      <div className="flex justify-center items-center">
                        <div
                          className={`bg-black p-3 w-full h-24 flex items-center justify-center border ${
                            isFirstPlace ? "border-amber-400" : "border-slate-200"
                          }`}
                        >
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            width={120}
                            height={60}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Bonus */}
                      <div className="text-center flex flex-col justify-center items-center px-2 py-3 bg-slate-50 border border-slate-100">
                        <div
                          className={`uppercase font-bold mb-1.5 text-xs ${isFirstPlace ? "text-amber-600" : "text-slate-600"}`}
                        >
                          PONUDA
                        </div>
                        <div className="font-bold text-slate-900 text-sm leading-tight">{site.bonus}</div>
                      </div>
                    </div>

                    {/* Rating Row - 3 columns: Rating | Stars+Reviews | Button */}
                    <div className="grid grid-cols-3 items-center gap-2  border-t border-slate-100">
                      {/* Column 1: Rating */}
                      <div className="text-center mb-1">
                        <div className={`text-3xl font-bold ${isFirstPlace ? "text-amber-600" : "text-slate-700"}`}>
                          {site.rating.toFixed(1)}
                        </div>
                      </div>

                      {/* Column 2: Stars and Reviews */}
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex justify-center gap-0.5 mb-1">{renderStars(site.rating)}</div>
                        <div className="text-slate-500 font-medium text-[10px] text-center">
                          ({site.reviews.toLocaleString()})
                        </div>
                      </div>

                      {/* Column 3: Button */}
                      <div className="flex justify-center">
                        <div className="bg-amber-400 text-white text-xs px-3 py-2 font-bold uppercase whitespace-nowrap shadow-sm">
                          DETALJI
                        </div>
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="pt-3 mt-3 border-t border-slate-100 flex justify-center">
                      <DisclaimerBadge />
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
