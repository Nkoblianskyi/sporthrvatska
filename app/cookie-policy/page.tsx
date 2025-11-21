import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pb-8 border-b-2 border-primary">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Politika kolačića</h1>
            <p className="text-sm text-muted-foreground">Posljednje ažuriranje: 21. studenog 2025.</p>
          </div>

          <div className="space-y-12 prose prose-lg max-w-none">
            <section>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Što su kolačići
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Kolačići su male tekstualne datoteke koje se pohranjuju na vaše računalo ili mobilni uređaj kada
                posjetite web stranicu. Široko se koriste za omogućavanje rada web stranica i pružanje informacija
                vlasnicima web stranica. Kolačići poboljšavaju korisničko iskustvo pamćenjem vaših postavki i
                omogućavanjem određenih funkcionalnosti.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Kako koristimo kolačiće
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                sporthrvatska.com koristi kolačiće iz nekoliko razloga, uključujući:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Kako bi naša web stranica funkcionirala kako očekujete</li>
                <li>Pamćenje vaših postavki tijekom i između posjeta</li>
                <li>Poboljšanje brzine i sigurnosti stranice</li>
                <li>Omogućavanje dijeljenja stranica na društvenim mrežama</li>
                <li>Kontinuirano poboljšanje naše web stranice za vas</li>
                <li>Pružanje relevantnog sadržaja</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Vrste kolačića koje koristimo
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Koristimo sljedeće vrste kolačića na našoj web stranici:
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2 bg-secondary rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Neophodni kolačići</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ovi kolačići su potrebni za ispravan rad web stranice. Omogućavaju osnovne funkcije poput
                    sigurnosti, upravljanja mrežom i pristupa računu.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2 bg-secondary rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Analitički kolačići</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ovi kolačići nam pomažu razumjeti kako posjetitelji interagiraju s našom web stranicom prikupljanjem
                    i izvještavanjem anonimnih informacija.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2 bg-secondary rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Funkcionalni kolačići</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ovi kolačići omogućavaju web stranici pružanje poboljšane funkcionalnosti i personalizacije.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Upravljanje kolačićima
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Većina web preglednika omogućava određenu kontrolu nad kolačićima kroz postavke preglednika. Za više
                informacija o kolačićima, posjetite www.aboutcookies.org ili www.allaboutcookies.org.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Promjene politike kolačića
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Možemo s vremena na vrijeme ažurirati našu politiku kolačića. Obavijestit ćemo vas o svim promjenama
                objavljivanjem nove politike na ovoj stranici.
              </p>
            </section>

            <section className="bg-secondary rounded-lg p-8 border-l-4 border-primary">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Kontaktirajte nas</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ako imate pitanja o našoj politici kolačića, kontaktirajte nas na:{" "}
                <a
                  href="mailto:privatnost@sporthrvatska.com"
                  className="text-primary hover:text-primary/80 font-semibold underline transition-colors"
                >
                  privatnost@sporthrvatska.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
