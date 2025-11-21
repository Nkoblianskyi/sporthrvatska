import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-white pt-4">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pb-8 border-b-2 border-primary">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Politika privatnosti</h1>
            <p className="text-sm text-muted-foreground">Posljednje ažuriranje: 21. studenog 2025.</p>
          </div>

          <div className="space-y-12 prose prose-lg max-w-none">
            <section>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Uvod
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Na sporthrvatska.com, poštujemo vašu privatnost i predani smo zaštiti vaših osobnih podataka. Ova
                politika privatnosti obavijestit će vas o tome kako se brinemo o vašim osobnim podacima kada posjetite
                našu web stranicu i informirati vas o vašim pravima privatnosti.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Podaci koje prikupljamo
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Možemo prikupljati, koristiti, pohranjivati i prenositi različite vrste osobnih podataka o vama:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>
                  <strong>Podaci o identitetu:</strong> uključuju ime, prezime, korisničko ime ili sličan identifikator.
                </li>
                <li>
                  <strong>Kontakt podaci:</strong> uključuju adresu e-pošte i telefonske brojeve.
                </li>
                <li>
                  <strong>Tehnički podaci:</strong> uključuju IP adresu, podatke o prijavi, vrstu i verziju preglednika,
                  postavku vremenske zone, operativni sustav i platformu.
                </li>
                <li>
                  <strong>Podaci o korištenju:</strong> uključuju informacije o tome kako koristite našu web stranicu.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Kako koristimo vaše osobne podatke
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vaše osobne podatke koristimo samo kada nam to zakon dopušta. Najčešće ćemo koristiti vaše osobne
                podatke u sljedećim okolnostima:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Za registraciju kao novi korisnik</li>
                <li>Za upravljanje našim odnosom s vama</li>
                <li>Za administriranje i zaštitu našeg poslovanja i ove web stranice</li>
                <li>Za isporuku relevantnog sadržaja web stranice</li>
                <li>Za korištenje analitike podataka radi poboljšanja naše web stranice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Kolačići
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Možete postaviti svoj preglednik da odbije sve ili neke kolačiće, ili da vas upozori kada web stranice
                postavljaju ili pristupaju kolačićima. Za više informacija o kolačićima koje koristimo, pogledajte našu{" "}
                <a href="/cookie-policy" className="text-primary hover:text-primary/80 underline font-semibold">
                  Politiku kolačića
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Sigurnost podataka
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementirali smo odgovarajuće sigurnosne mjere kako bismo spriječili da vaši osobni podaci budu
                slučajno izgubljeni, korišteni ili pristupljeni na neovlašten način. Svi podaci se obrađuju u skladu s
                Općom uredbom o zaštiti podataka (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Vaša zakonska prava
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pod određenim okolnostima, imate prava prema zakonima o zaštiti podataka u vezi s vašim osobnim
                podacima, uključujući pravo na:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Zahtijevanje pristupa vašim osobnim podacima</li>
                <li>Zahtijevanje ispravka vaših osobnih podataka</li>
                <li>Zahtijevanje brisanja vaših osobnih podataka</li>
                <li>Prigovor na obradu vaših osobnih podataka</li>
                <li>Zahtijevanje ograničenja obrade vaših osobnih podataka</li>
                <li>Pravo na povlačenje pristanka u bilo kojem trenutku</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Poveznice trećih strana
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ova web stranica može uključivati poveznice na web stranice trećih strana. Ne kontroliramo ove web
                stranice i nismo odgovorni za njihove izjave o privatnosti. Kada napustite našu web stranicu,
                savjetujemo da pročitate politiku privatnosti svake web stranice koju posjetite.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 pb-2 border-b-2 border-primary">
                Promjene politike privatnosti
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Možemo s vremena na vrijeme ažurirati našu politiku privatnosti. Obavijestit ćemo vas o svim promjenama
                objavljivanjem nove politike privatnosti na ovoj stranici.
              </p>
            </section>

            <section className="bg-secondary rounded-lg p-8 border-l-4 border-primary">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Kontaktirajte nas</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ako imate pitanja o ovoj politici privatnosti, kontaktirajte nas na:{" "}
                <p
                  className="text-primary hover:text-primary/80 font-semibold underline transition-colors"
                >
                  privatnost@sporthrvatska.com
                </p>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
