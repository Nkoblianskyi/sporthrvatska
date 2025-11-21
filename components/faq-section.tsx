export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <header className="mb-12 pb-8 border-b-4 border-slate-300">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 font-serif">Često Postavljana Pitanja</h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Odgovori na najčešća pitanja o našem servisu za usporedbu kladionica
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="space-y-10">
            <div className="pb-8 border-b-2 border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Što je sporthrvatska.com?</h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Sporthrvatska.com je nezavisni servis za usporedbu i recenzije kladionica u Hrvatskoj. Testiramo i
                ocjenjujemo sportske kladionice prema strogim kriterijima kako bismo vam pomogli pronaći najbolje
                platforme za sportsko klađenje. Naš tim stručnjaka redovito ažurira recenzije i prati nove bonuse i
                promocije.
              </p>
            </div>

            <div className="pb-8 border-b-2 border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Kako birate i ocjenjujete kladionice?</h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Svaku kladionicu ocjenjujemo prema detaljnoj metodologiji koja uključuje provjeru licence i sigurnosti,
                kvalitetu bonusa, raspon tržišta i kvote, brzinu isplate, korisničku podršku i mobilno iskustvo.
                Testiramo svaku platformu osobno i prikupljamo iskustva korisnika. Sve kladionice moraju imati važeću
                licencu za rad u Hrvatskoj.
              </p>
            </div>

            <div className="pb-8 border-b-2 border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Je li korištenje vašeg servisa besplatno?</h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Da, naš servis je potpuno besplatan za sve korisnike. Ne naplaćujemo pristup recenzijama, usporedbama
                ili informacijama o bonusima. Financiramo se kroz affiliate partnerstva s kladionicama, ali to ne utječe
                na naše ocjene - zadržavamo potpunu neovisnost i objektivnost u našim recenzijama.
              </p>
            </div>

            <div className="pb-8 border-b-2 border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Kako mogu ostvariti bonus kod kladionice?</h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Kliknite na gumb "Posjeti" ili "Ostvari Bonus" na kartici željene kladionice. To će vas odvesti izravno
                na službenu stranicu kladionice gdje možete kreirati račun. Većina bonusa se aktivira automatski pri
                registraciji, dok neki zahtijevaju unos bonus koda koji navodimo u našim recenzijama. Uvijek pročitajte
                uvjete bonusa prije registracije.
              </p>
            </div>

            <div className="pb-8 border-b-2 border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Koliko često ažurirate informacije o kladionicama?
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Naše recenzije i usporedbe se ažuriraju redovito. Bonuse i promocije provjeravamo svakodnevno jer se
                često mijenjaju. Ocjene kladionica ažuriramo mjesečno ili kad se dogode značajne promjene u usluzi.
                Također pratimo feedback korisnika i promptno reagiramo na bilo kakve probleme ili izmjene u radu
                kladionica.
              </p>
            </div>

            <div className="pb-8 border-b-2 border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Jesu li sve kladionice sigurne i licencirane?
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Sve kladionice koje recenziramo moraju imati važeću licencu od respektabilnih regulatornih tijela.
                Provjeravamo licencu svake kladionice prije nego što je uvrstimo na našu stranicu. Ipak, preporučujemo
                da sami provjerite licencu na službenoj stranici kladionice prije registracije. Odgovorno klađenje je
                ključno - kladite se samo s novcem koji si možete priuštiti izgubiti.
              </p>
            </div>

            <div className="pb-8 border-b-2 border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Kako nas možete kontaktirati?</h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Možete nas kontaktirati putem e-maila navedenog u podnožju stranice. Dobrodošle su sve sugestije,
                pitanja o kladionicama ili prijave problema s bonusima. Naš tim odgovara na sve upite u roku od 24-48
                sati. Ako imate negativno iskustvo s nekom kladionicom, javite nam se kako bismo mogli ažurirati našu
                recenziju.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Mogu li se kladiti sigurno s mobilnog uređaja?
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Da, sve kladionice koje preporučujemo nude sigurne mobilne platforme, bilo kroz web preglednike ili
                dedicirane mobilne aplikacije. U našim recenzijama posebno testiramo i ocjenjujemo mobilno iskustvo.
                Provjerite našu ocjenu "Mobilno Iskustvo" za svaku kladionicu kako biste vidjeli koja je najbolja za
                klađenje na smartphoneu ili tabletu.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t-4 border-slate-300 text-center">
            <p className="text-base text-slate-600 leading-relaxed">
              Niste pronašli odgovor na svoje pitanje? Kontaktirajte nas putem e-maila, a naš tim će vam rado pomoći.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
