"use client"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 left-0 right-0 z-50 border-b border-border shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/80" />

        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-2xl md:text-3xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
              Sport<span className="text-primary">hrvatska</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Početna
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              O nama
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Kolačići
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Privatnost
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Početna
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                O nama
              </Link>
              <Link
                href="/cookie-policy"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kolačići
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Privatnost
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
