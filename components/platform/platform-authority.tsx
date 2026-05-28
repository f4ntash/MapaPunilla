import { BookOpen, Compass, MapPinned, Sparkles } from "lucide-react"
import { authoritySignals, instagramReadyFormats, socialProofPlaceholders } from "@/data/platform-signals"

const icons = [MapPinned, BookOpen, Compass]

export function PlatformAuthority() {
  return (
    <section className="bg-[#fff9ef] py-18 md:py-24">
      <div className="container">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#d97732]">Autoridad local</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#1e1a16] md:text-5xl">
              Un ecosistema preparado para crecer con datos reales
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#4a3428]">
            No inventamos números ni casos. Dejamos la estructura lista para que cada ficha, guía y recomendación se pueda reemplazar por contenido real del valle.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {authoritySignals.map((item, index) => {
            const Icon = icons[index]
            return (
              <article key={item.title} className="rounded-[1.5rem] border border-[#4a3428]/15 bg-[#f5ebdd] p-5">
                <Icon className="mb-5 h-7 w-7 text-[#2f5d3a]" aria-hidden="true" />
                <h3 className="font-serif text-2xl font-semibold text-[#1e1a16]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4a3428]">{item.text}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {socialProofPlaceholders.map((item) => (
            <figure key={item.label} className="rounded-[1.5rem] border border-[#4a3428]/15 bg-[#1e1a16] p-5 text-[#fff9ef]">
              <Sparkles className="mb-5 h-5 w-5 text-[#facc15]" aria-hidden="true" />
              <blockquote className="text-sm leading-7 text-[#f5ebdd]">“{item.quote}”</blockquote>
              <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[#facc15]">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function InstagramReadyFormats() {
  return (
    <section className="bg-[#f5ebdd] py-18 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#2f5d3a]">Contenido reutilizable</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#1e1a16] md:text-5xl">
            Del mapa a Instagram, sin perder identidad local
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4a3428]">
            Cada ficha puede convertirse en recomendación, historia, auditoría o guía guardable.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {instagramReadyFormats.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-[#4a3428]/15 bg-[#fff9ef] p-5">
              <h3 className="font-serif text-2xl font-semibold text-[#1e1a16]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4a3428]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
