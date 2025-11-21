import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pb-8 border-b-2 border-primary">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">O nama</h1>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-4">sporthrvatska.com</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Neovisni vodič za najbolje kladionice i sportsko klađenje u Hrvatskoj
            </p>
          </div>

          <div className="space-y-10">
            <section className="bg-card p-8 border-l-4 border-primary shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Naša misija</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Na sporthrvatska.com, naša misija je pomoći vam pronaći najbolje platforme za sportsko klađenje u
                Hrvatskoj. Pružamo detaljne recenzije, usporedbe i objektivne ocjene svih vodećih kladionica kako biste
                mogli donijeti informirane odluke.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mi smo tim stručnjaka za sportsko klađenje s dugogodišnjim iskustvom. Naša predanost transparentnosti i
                neovisnom testiranju pomaže tisućama korisnika da pronađu najsigurnije i najpovoljnije opcije za
                klađenje.
              </p>
            </section>

            <section className="bg-secondary p-8 border-l-4 border-primary shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Neovisne recenzije</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sve naše recenzije pišu se potpuno neovisno nakon detaljnog testiranja svake platforme. Ocjenjujemo
                kladionice prema strogim kriterijima: sigurnost, bonusi, koeficijenti, izbor sportova, korisničku
                podršku i brzinu isplata.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Naš tim osobno testira svaku kladionicu, registrira račune, provjerava bonuse i komunicira s korisničkom
                podrškom kako bi vam pružio najpreciznije i najkorisnije informacije.
              </p>
            </section>

            <section className="bg-card p-8 border-l-4 border-primary shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Što ocjenjujemo</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Naše recenzije pokrivaju sve važne aspekte kladionica kako biste dobili potpunu sliku:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 border border-border">
                  <h4 className="font-serif text-lg font-semibold mb-3 text-primary">Sigurnost i licence</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Provjeravamo licenciranje, sigurnost podataka, metode plaćanja i zaštitu korisnika. Preporučujemo
                    samo regulirane i pouzdane platforme.
                  </p>
                </div>

                <div className="bg-white p-6 border border-border">
                  <h4 className="font-serif text-lg font-semibold mb-3 text-primary">Bonusi i promocije</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Analiziramo bonuse dobrodošlice, uvjete klađenja, free bet ponude i program lojalnosti. Izdvajamo
                    najbolje trenutne promocije.
                  </p>
                </div>

                <div className="bg-white p-6 border border-border">
                  <h4 className="font-serif text-lg font-semibold mb-3 text-primary">Koeficijenti i ponuda</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Uspoređujemo koeficijente za popularne sportove, širinu ponude i dostupnost live klađenja. Fokus na
                    nogomet, košarku i ostale popularne sportove.
                  </p>
                </div>

                <div className="bg-white p-6 border border-border">
                  <h4 className="font-serif text-lg font-semibold mb-3 text-primary">Korisnička podrška</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Testiramo brzinu odgovora, dostupnost podrške na hrvatskom jeziku i kvalitetu rješavanja problema.
                  </p>
                </div>

                <div className="bg-white p-6 border border-border">
                  <h4 className="font-serif text-lg font-semibold mb-3 text-primary">Brzina isplata</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Provjeravamo metode isplate, vrijeme procesiranja i eventualne naknade. Transparentnost je ključna
                    kod povlačenja dobitaka.
                  </p>
                </div>

                <div className="bg-white p-6 border border-border">
                  <h4 className="font-serif text-lg font-semibold mb-3 text-primary">Mobilna aplikacija</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ocjenjujemo mobilnu verziju i aplikaciju - funkcionalnost, dizajn i iskustvo korištenja na pametnim
                    telefonima.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-primary/5 p-8 border-2 border-primary">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Naš tim</h3>
              <p className="text-muted-foreground leading-relaxed">
                Naš tim čine stručnjaci za sportsko klađenje, analitičari i istraživači s dugogodišnjim iskustvom u
                industriji. Svaki član tima donosi jedinstveno znanje i perspektivu kako bi osigurali da su naše
                recenzije točne, detaljne i objektivne. Kontinuirano pratimo tržište i ažuriramo naše ocjene.
              </p>
            </section>

            <section className="bg-card p-8 border-l-4 border-primary shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Kontaktirajte nas</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Imate pitanja, prijedloge ili želite surađivati? Javite nam se na:{" "}
                <p
                  className="text-primary hover:text-primary/80 font-semibold underline"
                >
                  info@sporthrvatska.com
                </p>
              </p>
              <p className="text-foreground font-semibold">Odgovor u roku od 24 sata</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
