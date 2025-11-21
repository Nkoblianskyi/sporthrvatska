"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star } from "@/components/icons"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { SportsSite } from "@/types"

interface TopOffersModalProps {
  sites: SportsSite[]
}

export function TopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = (open: boolean) => {
    setIsOpen(open)
  }

  const renderStars = (stars: number) => {
    const starElements = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      if (i < stars) {
        starElements.push(<Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)
      } else {
        starElements.push(<Star key={i} className="h-4 w-4 text-gray-400" />)
      }
    }

    return starElements
  }

  const topSite = sites[0]

  if (!topSite) return null

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[90vw] max-w-[400px] sm:max-w-[450px] p-0 bg-white border-2 border-slate-300 overflow-hidden">
        <DialogHeader className="p-4 pb-3 bg-coral-500 border-b-4 border-slate-200">
          <DialogTitle className="text-center text-lg md:text-xl font-bold text-white">Izdvojena Preporuka</DialogTitle>
        </DialogHeader>

        <div className="p-4">
          <div className="relative overflow-hidden bg-white border-2 border-slate-200 shadow-lg">
            <div className="absolute top-0 right-0 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 z-10 shadow-md">
              #1 PREPORUKA
            </div>

            <div className="bg-black p-4 text-center border-b-2 border-slate-200">
              <div className="relative bg-black h-20 w-full max-w-[200px] mx-auto mb-3 mt-2 p-4">
                <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex items-center justify-center gap-0.5">{renderStars(topSite.stars)}</div>
                <span className="font-bold text-lg text-amber-400">{topSite.rating.toFixed(1)}</span>
                <span className="text-slate-300 text-sm">({topSite.reviews} recenzija)</span>
              </div>
            </div>

            <div className="p-4 text-center bg-slate-50 border-b-2 border-slate-200">
              <div className="text-sm text-coral-600 uppercase font-bold mb-2 tracking-wide">EKSKLUZIVNA PONUDA</div>
              <p className="font-bold text-slate-900 text-xl md:text-2xl leading-tight mb-3">{topSite.bonus}</p>
            </div>

            <div className="p-4 text-center">
              <a
                href={topSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-amber-400 hover:bg-amber-500 text-slate-900 text-base font-bold text-center transition-all duration-200 mb-3 transform hover:scale-105"
                onClick={() => handleClose(false)}
              >
                POSJETI STRANICU
              </a>

              <div className="text-center">
                <p className="text-xs text-slate-600 font-medium">+18 | Uvjeti primjene | Igrajte odgovorno</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
