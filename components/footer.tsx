import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t-4 border-primary">
      <div className="container mx-auto px-4 max-w-6xl py-12 md:py-16">
        {/* Column 1: Brand */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Sport<span className="text-primary">hrvatska</span>
            </h3>
            <p className="text-sm text-background/70 leading-relaxed">
              Vaš pouzdani izvor za najnovije sportske vijesti, analize i ekskluzivni sadržaj iz Hrvatske i svijeta.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-background">Poveznice</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-background/70 hover:text-primary transition-colors">
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  Politika privatnosti
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Politika kolačića
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-background">Kategorije</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-background/70">Nogomet</span>
              </li>
              <li>
                <span className="text-sm text-background/70">Košarka</span>
              </li>
              <li>
                <span className="text-sm text-background/70">Rukomet</span>
              </li>
              <li>
                <span className="text-sm text-background/70">Tenis</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 pb-8 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary text-foreground font-bold text-lg px-4 py-2 border-2 border-primary">18+</div>
            <h4 className="text-base font-bold text-background">Organizacije za pomoć kod ovisnosti o kockanju</h4>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">


            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 bg-background/30 hover:bg-background/20">
                <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 bg-background/30 hover:bg-background/20">
                <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-4 bg-background/30 hover:bg-background/20">
                <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-4 bg-background/30 hover:bg-background/20">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 bg-background/30 hover:bg-background/20">
                <Image src="/hupis.png" alt="Hupis" fill className="object-contain" />
              </div>
            </Link>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/70">
            © {new Date().getFullYear()} <span className="font-semibold text-background">sporthrvatska.com</span>. Sva
            prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  )
}
