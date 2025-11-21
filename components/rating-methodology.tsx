export function RatingMethodology() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <header className="mb-12 pb-8 border-b-4 border-slate-200">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 font-serif">Naša Uredničка Metodologija</h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Kako ocjenjujemo i recenziramo servise za sportsko klađenje
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-10">
            Naš proces pregleda temelji se na detaljnoj analizi i transparentnosti. Svaka platforma za sportsko klađenje
            prolazi kroz rigoroznu procjenu prema objektivnim kriterijima kako bismo vam pomogli pronaći najsigurnije i
            najpovoljnije servise za sportske oklade.
          </p>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif border-b-2 border-slate-200 pb-3">
              Kriteriji Ocjenjivanja
            </h3>

            <div className="space-y-8">
              <div className="pb-6 border-b border-slate-200">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">1. Sigurnost i Licenciranje</h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  Provjeravamo posjeduje li platforma važeće licence od renomiranih regulatornih tijela. Analiziramo
                  njihove sigurnosne protokole, zaštitu podataka korisnika, SSL enkripciju i politike odgovornog
                  klađenja. Samo potpuno licencirani i sigurni operatori dobivaju našu preporuku.
                </p>
              </div>

              <div className="pb-6 border-b border-slate-200">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">2. Bonusi i Promocije</h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  Detaljno pregledavamo sve bonuse dobrodošlice, uvjete klađenja, promocijske ponude i programe
                  lojalnosti. Uspoređujemo vrijednost bonusa, realnost uvjeta i transparentnost pravila. Upozoravamo na
                  skrivene uvjete i ističemo stvarno isplative ponude.
                </p>
              </div>

              <div className="pb-6 border-b border-slate-200">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">3. Kvote i Tržišta</h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  Uspoređujemo razine kvota za popularne sportove i događaje. Ocjenjujemo širinu ponude tržišta,
                  dostupnost live klađenja, broj sportova i liga te kvalitetu nadolazećih događaja. Pratimo
                  konkurentnost kvota na tjednoj bazi.
                </p>
              </div>

              <div className="pb-6 border-b border-slate-200">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">4. Korisnička Podrška</h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  Testiramo kvalitetu i brzinu korisničke podrške putem svih dostupnih kanala - live chat, email,
                  telefon. Provjeravamo dostupnost na hrvatskom jeziku, radno vrijeme, profesionalnost i učinkovitost
                  rješavanja problema. Bilježimo prosječno vrijeme odgovora.
                </p>
              </div>

              <div className="pb-6 border-b border-slate-200">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">5. Metode Plaćanja i Brzina Isplate</h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  Analiziramo dostupne metode uplate i isplate, minimalne i maksimalne limite, naknade za transakcije te
                  stvarno vrijeme obrade isplata. Testiramo proces verifikacije računa i dokumentiramo iskustva s prvim
                  i naknadnim isplatama.
                </p>
              </div>

              <div className="pb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">6. Mobilno Iskustvo i Platforma</h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  Ocjenjujemo funkcionalnost web stranice, dostupnost mobilne aplikacije, brzinu učitavanja,
                  intuitivnost navigacije i ukupno korisničko iskustvo. Testiramo platformu na različitim uređajima i
                  preglednicima kako bismo osigurali konzistentnost.
                </p>
              </div>
            </div>
          </div>

          <div className="my-10 p-8 bg-slate-50 border-l-4 border-coral-500">
            <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif">Proces Recenzije Platforme</h3>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-slate-900">Korak 1:</span>
                <span className="text-slate-700 ml-2">Registracija računa i provjera procesa verifikacije</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Korak 2:</span>
                <span className="text-slate-700 ml-2">Testiranje platforme - uplate, klađenje, kvote, tržišta</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Korak 3:</span>
                <span className="text-slate-700 ml-2">Analiza bonusa, korisničke podrške i mobilnog iskustva</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Korak 4:</span>
                <span className="text-slate-700 ml-2">Testiranje procesa isplate i finalna ocjena platforme</span>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t-4 border-slate-200">
            <p className="text-base text-slate-600 leading-relaxed">
              Naše ocjene redovito se ažuriraju kako bi odražavale trenutno stanje servisa. Posvećeni smo
              transparentnosti i pružanju točnih informacija koje pomažu korisnicima donijeti informirane odluke. Sve
              recenzije pišu naši stručnjaci s dugogodišnjim iskustvom u industriji klađenja.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
