import { CalendarDays, Compass, MapPinned } from "lucide-react"
import { latestAdditions, localGuideTracks, upcomingPlaces, weeklyHighlights } from "@/data/map-activity"

export function MapActivity() {
  return (
    <section className="bg-[#fff9ef] py-18 md:py-24">
      <div className="container">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#d97732]">Actividad del mapa</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#1e1a16] md:text-5xl">
              Acá empiezan a pasar cosas
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#4a3428]">
            Fichas nuevas, recorridos por localidad, recomendados y contenidos preparados para que el mapa crezca semana a semana.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[#4a3428]/15 bg-[#f5ebdd] p-5">
            <div className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#2f5d3a]">
              <MapPinned className="h-4 w-4" aria-hidden="true" />
              Últimos negocios agregados
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {latestAdditions.map((item) => (
                <article key={item.title} className="rounded-[1.25rem] bg-[#fff9ef] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#d97732]">{item.meta}</p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-[#1e1a16]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#4a3428]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[#4a3428]/15 bg-[#1e1a16] p-5 text-[#fff9ef]">
            <div className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#facc15]">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Próximamente
            </div>
            <div className="space-y-3">
              {upcomingPlaces.map((item) => (
                <p key={item} className="rounded-2xl bg-[#fff9ef]/10 px-4 py-3 text-sm font-semibold">
                  {item}
                </p>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {weeklyHighlights.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-[#4a3428]/15 bg-[#f5ebdd] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2f5d3a]">{item.label}</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-[#1e1a16]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4a3428]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LocalGuides() {
  return (
    <section className="bg-[#f5ebdd] py-18 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#2f5d3a]">Guías locales</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#1e1a16] md:text-5xl">
            La parte editorial del mapa
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4a3428]">
            No alcanza con listar negocios. La plataforma necesita recomendaciones, novedades, historias y descubrimientos que la gente quiera guardar.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {localGuideTracks.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-[#4a3428]/15 bg-[#fff9ef] p-5">
              <Compass className="mb-5 h-6 w-6 text-[#d97732]" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-semibold text-[#1e1a16]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4a3428]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
