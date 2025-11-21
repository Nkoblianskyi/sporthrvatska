export function SportHrvatskaAbout() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <header className="mb-12 pb-8 border-b-4 border-slate-200">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 font-serif">O Našem Sportskom Portalu</h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Vaš pouzdani izvor za najnovije sportske vijesti i анализе iz Hrvatske i svijeta
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="mb-10">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Specijalizirani smo za <strong>profesionalno sportsko novinarstvo</strong> s fokusom na detaljne анализе i
              kvalitetno izvještavanje. Naša misija je pružiti čitateljima točne, pravovremene i sveobuhvatne sportske
              informacije koje im pomažu biti u toku s najvažnijim događajima.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Svaki članak koji objavljujemo prolazi kroz temeljitu uredničku provjeru koja uključuje verifikaciju
              činjenica, unakrsno provjeravanje izvora i potvrdu statističkih podataka. Surađujemo s iskusnim sportskim
              novinarima kako bismo osigurali da naša izvještavanja budu profesionalna i pouzdana.
            </p>
          </div>

          <blockquote className="my-10 pl-6 border-l-4 border-coral-500 italic text-xl text-slate-800">
            "Posvećeni smo objektivnom izvještavanju i profesionalnim standardima sportskog novinarstva."
          </blockquote>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif border-b-2 border-slate-200 pb-3">
              Naša Uredničка Načela
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Točnost i Provjera Činjenica</h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  Svi naši članci prolaze kroz rigorozan proces provjere. Koristimo samo provjerene izvore i oficijelne
                  statistike kako bismo osigurali da čitatelji dobivaju točne informacije.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Sveobuhvatno Pokrivenost</h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  Pokrivamo širok spektar sportova - od najpopularnijih poput nogometa i košarke do nišnih disciplina.
                  Pratimo domaća natjecanja, međunarodne lige i glavne sportske događaje.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Dubinske Анализе</h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  Osim vijesti, pružamo detaljne анализе utakmica, statistička izvješća i ekspertne komentare koji
                  čitateljima pomažu bolje razumjeti sportske događaje i trendove.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Korisničко Iskustvo</h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  Naša platforma je optimizirana za sve uređaje, s brzim učitavanjem, intuitivnom navigacijom i
                  pristupačnim dizajnom koji osigurava ugodno čitanje na svim ekranima.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t-4 border-slate-200">
            <p className="text-base text-slate-600 leading-relaxed">
              Naš sadržaj se redovito ažurira kako bi odražavao najnovije sportske događaje i trendove. Održavamo
              uredničку neovisnost i pridržavamo se najstrožijih standarda sportskog novinarstva.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
