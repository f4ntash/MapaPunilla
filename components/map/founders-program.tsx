import { CheckCircle2, MessageCircle, Sparkles } from "lucide-react"
import { config } from "@/lib/config"

const benefits = [
  "Aparecer destacado durante el lanzamiento",
  "Acceso prioritario a mejoras de ficha y contenido",
  "Participar en las primeras guías locales del mapa",
]

export function FoundersProgram() {
  return (
    <section className="bg-[#1e1a16] py-18 text-[#fff9ef] md:py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#fff9ef]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#facc15]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Primeros negocios fundadores
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
            Los primeros lugares ayudan a construir el mapa
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#f5ebdd]">
            Mapa Punilla está abriendo sus primeras fichas. Los negocios fundadores aparecen destacados y tienen prioridad para formar parte de las guías iniciales del valle.
          </p>
        </div>
        <div className="rounded-[2rem] border border-[#fff9ef]/15 bg-[#fff9ef]/10 p-6 backdrop-blur">
          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-3 rounded-2xl bg-[#fff9ef]/10 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#facc15]" aria-hidden="true" />
                <p className="font-semibold leading-7">{benefit}</p>
              </div>
            ))}
          </div>
          <a
            href={config.whatsapp.link("Hola! Quiero ser negocio fundador en Mapa Punilla")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#facc15] px-6 font-bold text-[#1e1a16] transition hover:bg-[#f5b51b]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Sumar mi negocio
          </a>
        </div>
      </div>
    </section>
  )
}
