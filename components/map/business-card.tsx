import { AtSign, ExternalLink, MapPin, MessageCircle, Sparkles } from "lucide-react"
import type { MapBusiness } from "@/data/map-businesses"

export function BusinessCard({ business }: { business: MapBusiness }) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-[#4a3428]/15 bg-[#fff9ef] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4a3428]/10">
      <div className="relative min-h-40 bg-[#2f5d3a]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,26,22,.25),rgba(47,93,58,.15)),radial-gradient(circle_at_25%_20%,#facc15_0,transparent_24%),radial-gradient(circle_at_80%_65%,#d97732_0,transparent_28%)]" />
        <div className="absolute inset-4 rounded-[1rem] border border-[#fff9ef]/25" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {business.featured && (
            <span className="rounded-full bg-[#facc15] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#1e1a16]">
              Destacado
            </span>
          )}
          {business.founder && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#fff9ef] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#2f5d3a]">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Fundador
            </span>
          )}
        </div>
        <div className="absolute bottom-4 left-4 rounded-full bg-[#1e1a16]/85 px-3 py-1 text-xs font-bold text-[#fff9ef]">
          {business.image}
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#4a3428]">
          <span>{business.category}</span>
          <span className="text-[#d97732]">/</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {business.location}
          </span>
        </div>
        <h3 className="font-serif text-2xl font-semibold text-[#1e1a16]">{business.name}</h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-[#4a3428]">{business.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {business.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#f5ebdd] px-3 py-1 text-xs font-semibold text-[#4a3428]">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Hablar por WhatsApp con ${business.name}`}
            className="flex h-11 items-center justify-center rounded-full bg-[#2f5d3a] text-[#fff9ef] transition hover:bg-[#24482d]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver Instagram de ${business.name}`}
            className="flex h-11 items-center justify-center rounded-full border border-[#4a3428]/20 text-[#4a3428] transition hover:bg-[#f5ebdd]"
          >
            <AtSign className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={business.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver ubicación de ${business.name} en Google Maps`}
            className="flex h-11 items-center justify-center rounded-full border border-[#4a3428]/20 text-[#4a3428] transition hover:bg-[#f5ebdd]"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}
