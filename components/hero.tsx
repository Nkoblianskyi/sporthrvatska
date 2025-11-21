"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"
import { Trophy, Shield, Star, TrendingUp } from "./icons"
import Image from "next/image"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative bg-gradient-to-b from-secondary to-white min-h-[125px] md:min-h-auto md:pb-5 md:pt-5 pt-4 pb-4">
      <div className="absolute top-8 md:top-20 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-porto-gold to-transparent" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-bold mb-2 md:mb-6 leading-tight text-balance">
            Najbolji <span className="text-primary">servisi za klađenje</span> u Hrvatskoj
          </h1>

          <p className="hidden md:block text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Detaljni pregledi, usporedbe i recenzije sportskih kladionica. Pomažemo vam pronaći najbolje bonuse i
            najpouzdanije servise za klađenje
          </p>

          <div className="hidden md:flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Nezavisne recenzije</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Ekskluzivni bonusi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Detaljne usporedbe</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5 md:gap-2 mb-2 md:mb-4 mt-3 md:mt-8">
          <div className="p-1.5 md:p-3 flex flex-col items-center text-center hover:border-primary hover:shadow-lg transition-all group">
            <Image src="/flag.png" alt="advertiser" width={32} height={32} className="w-3 h-3 md:w-8 md:h-8 mb-0.5 md:mb-1" />
            <p className="text-[8px] md:text-xs font-bold text-slate-900">Licencirane</p>
          </div>

          <div className="p-1.5 md:p-3 flex flex-col items-center text-center hover:border-[#D4AF37] hover:shadow-lg transition-all group">
            <Star className="w-3 h-3 md:w-6 md:h-6 mb-0.5 md:mb-1 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            <p className="text-[8px] md:text-xs font-bold text-slate-900">Ekskluzivno</p>
          </div>

          <div className="p-1.5 md:p-3 flex flex-col items-center text-center hover:border-primary hover:shadow-lg transition-all group">
            <TrendingUp className="w-3 h-3 md:w-6 md:h-6 mb-0.5 md:mb-1 text-primary group-hover:scale-110 transition-transform" />
            <p className="text-[8px] md:text-xs font-bold text-slate-900">Ažurno</p>
          </div>

          <div className="p-1.5 md:p-3 flex flex-col items-center text-center hover:border-[#D4AF37] hover:shadow-lg transition-all group">
            <Trophy className="w-3 h-3 md:w-6 md:h-6 mb-0.5 md:mb-1 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            <p className="text-[8px] md:text-xs font-bold text-slate-900">Pouzdano</p>
          </div>
        </div>

        <div className="text-center pt-2 md:pt-3 border-t border-slate-200">
          <div className="flex items-center justify-center gap-1.5 md:gap-2 flex-wrap">
            <div className="bg-red-50 border-l-2 border-red-500 rounded-r px-1.5 md:px-2 py-0.5 md:py-1">
              <p className="text-[9px] md:text-xs text-red-700 font-bold">+18 | Odgovorno Čitanje</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[9px] md:text-xs text-primary hover:text-primary/80 font-bold underline decoration-1 decoration-[#D4AF37] hover:decoration-primary transition-colors"
            >
              Važne Informacije
            </button>
          </div>
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
