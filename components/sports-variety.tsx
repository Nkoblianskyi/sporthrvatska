export function SportsVariety() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <header className="mb-12 pb-8 border-b-4 border-slate-300">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 font-serif">
            Sportske Discipline Koje Pokrivamo
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Sveobuhvatno izvještavanje o glavnim sportskim događajima u Hrvatskoj i svijetu
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-10">
            Naš portal pokriva raznolik spektar sportskih disciplina, od najpopularnijih do specijaliziranih. Dubina
            našeg izvještavanja i kvaliteta анализа ključni su faktori koji nas izdvajaju među sportskim medijima.
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Nogomet</h3>
              <p className="text-base text-slate-700 leading-relaxed mb-3">
                Najpratiteniji sport u Hrvatskoj. Sveobuhvatno pokrivenost od domaćih liga do međunarodnih natjecanja
                najvišeg ranga.
              </p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                <li>UEFA Liga Prvaka i Europska Liga</li>
                <li>Hrvatska nogometna liga (HNL)</li>
                <li>Premier League, La Liga, Serie A, Bundesliga</li>
                <li>Svjetsko i Europsko prvenstvo</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Košarka</h3>
              <p className="text-base text-slate-700 leading-relaxed mb-3">
                Detaljno praćenje NBA lige, europskih natjecanja i hrvatske košarkaške reprezentacije.
              </p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                <li>NBA i doigravanje</li>
                <li>EuroLeague i EuroCup</li>
                <li>Premijer liga (A1 Liga)</li>
                <li>Svjetska i europska prvenstva</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Tenis</h3>
              <p className="text-base text-slate-700 leading-relaxed mb-3">
                Široko pokrivenost ATP i WTA turnira s posebnim fokusom na hrvatske tenisače.
              </p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                <li>Grand Slam turniri (Australian Open, Roland Garros, Wimbledon, US Open)</li>
                <li>Masters 1000 i WTA 1000</li>
                <li>Davis Cup i Billie Jean King Cup</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Rukometni Sport</h3>
              <p className="text-base text-slate-700 leading-relaxed mb-3">
                Praćenje hrvatskog rukometa i vodenih sportova u kojima Hrvatska ima bogatu tradiciju.
              </p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                <li>Svjetska i europska prvenstva u rukometu</li>
                <li>Hrvatski rukometni kup</li>
                <li>Vaterpolska reprezentacija</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Zimski i Ekstremni Sportovi</h3>
              <p className="text-base text-slate-700 leading-relaxed mb-3">
                Skijaško trčanje, alpsko skijanje i druge zimske discipline s bogatom hrvatskom tradicijom.
              </p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                <li>Svjetski kup u alpskom skijanju</li>
                <li>Zimske olimpijske igre</li>
                <li>Ekstremni sportovi i avantura</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Ostali Sportovi</h3>
              <p className="text-base text-slate-700 leading-relaxed mb-3">
                Formula 1, MotoGP, atletika, odbojka, plivanje, biciklizam i drugi sportovi također dostupni.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t-4 border-slate-300">
            <p className="text-base text-slate-600 leading-relaxed">
              Pokrivenost sportskih disciplina prilagođavamo interesima naših čitatelja. U našim člancima detaljno
              opisujemo specifične događaje za svaki sport kako bismo vam pomogli pronaći sadržaj koji vas najviše
              zanima.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
