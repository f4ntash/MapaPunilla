import type { Metadata } from "next"
import Link from "next/link"
import { MapPinned, MessageCircle, Route, Sparkles } from "lucide-react"
import { MapExplorer } from "@/components/map/map-explorer"
import { InstagramReadyFormats, PlatformAuthority } from "@/components/platform/platform-authority"
import { appearanceOptions, mapBusinesses, mapStats } from "@/data/map-businesses"
import { buildMetadata } from "@/lib/seo"
import { config } from "@/lib/config"

export const metadata: Metadata = buildMetadata({
  title: "Nuestro mapa digital de negocios turísticos de Punilla",
  description:
    "Explorá el mapa digital de negocios turísticos de Punilla: cabañas, hoteles, restaurantes, bares, complejos, alquileres temporarios y experiencias locales.",
  path: "/nuestro-mapa",
  keywords: [
    "Mapa Punilla",
    "turismo Punilla",
    "negocios turísticos Punilla",
    "cabañas Punilla",
    "restaurantes Punilla",
    "guía local Punilla",
    "Valle de Punilla",
  ],
})

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Negocios turísticos del Valle de Punilla",
  description: "Mapa digital de negocios turísticos de Punilla en etapa de lanzamiento.",
  numberOfItems: mapBusinesses.length,
  itemListElement: mapBusinesses.slice(0, 20).map((business, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "LocalBusiness",
      name: business.name,
      description: business.description,
      areaServed: business.location,
      category: business.category,
      url: `${config.site.url}/nuestro-mapa`,
    },
  })),
}

export default function NuestroMapaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <section className="relative overflow-hidden bg-[#f5ebdd] py-20 text-[#1e1a16] md:py-28">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#3f2f24_1px,transparent_1px),linear-gradient(#3f2f24_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4a3428]/20 bg-[#fff9ef]/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#4a3428]">
              <MapPinned className="h-4 w-4" aria-hidden="true" />
              Plataforma local en construcción
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight md:text-7xl">
              Nuestro mapa digital del turismo en Punilla
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4a3428] md:text-xl">
              Negocios turísticos del valle que vale la pena descubrir. Estamos armando una guía viva para que turistas, vecinos y emprendedores encuentren mejor lo que hace único a Punilla.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={config.whatsapp.link("Hola! Quiero sumar mi negocio al mapa")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#d97732] px-7 font-bold text-[#1e1a16] transition hover:bg-[#c8641f]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Sumar mi negocio al mapa
              </a>
              <Link
                href="/servicios"
                className="inline-flex h-13 items-center justify-center rounded-full border border-[#4a3428] bg-[#fff9ef]/80 px-7 font-bold text-[#1e1a16] transition hover:bg-white"
              >
                Ver cómo aparecer mejor
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#4a3428]/15 bg-[#fff9ef] p-6 shadow-xl shadow-[#4a3428]/10">
            <Sparkles className="mb-5 h-8 w-8 text-[#d97732]" aria-hidden="true" />
            <h2 className="font-serif text-3xl font-semibold">Negocios fundadores</h2>
            <p className="mt-4 leading-7 text-[#4a3428]">
              Estamos armando el primer mapa digital de negocios turísticos de Punilla. Los primeros negocios fundadores entran destacados durante el lanzamiento.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["Localidades", mapStats.locations],
                ["Categorías", mapStats.categories],
                ["Fundadores", mapStats.founders],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-[#f5ebdd] p-4 text-center">
                  <p className="font-serif text-3xl font-semibold">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#4a3428]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MapExplorer />

      <PlatformAuthority />

      <section className="bg-[#fff9ef] py-18 md:py-24">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#d97732]">Prueba de vida</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#1e1a16] md:text-5xl">
              Últimos lugares sumados y próximos recorridos
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4a3428]">
              El mapa se está abriendo por etapas: primero fichas fundadoras, después historias, guías locales y recomendados por zona.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Últimos lugares sumados", "Refugio Los Molles, Mesa de la Sierra y Sabores del Lago ya aparecen como ejemplos fundadores del lanzamiento."],
              ["Próximamente en el mapa", "Circuitos por localidad, recomendados del valle, historias de lugares y guías para temporada."],
              ["Guías locales", "Notas simples para elegir mejor: fotos, reseñas, reservas, Google Maps y WhatsApp turístico."],
              ["Historias del mapa", "Pequeños relatos de negocios que hacen que Punilla tenga identidad propia."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-[1.5rem] border border-[#4a3428]/15 bg-[#f5ebdd] p-5">
                <h3 className="font-serif text-2xl font-semibold text-[#1e1a16]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4a3428]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InstagramReadyFormats />

      <section className="bg-[#f5ebdd] py-18 md:py-24">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#2f5d3a]">Formas de aparecer</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#1e1a16] md:text-5xl">
              Tu lugar puede tener más presencia dentro del mapa
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {appearanceOptions.map((option) => (
              <article key={option.title} className="rounded-[1.5rem] border border-[#4a3428]/15 bg-[#fff9ef] p-5">
                <span className="rounded-full bg-[#1e1a16] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#facc15]">
                  {option.badge}
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-[#1e1a16]">{option.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4a3428]">{option.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1e1a16] py-18 text-[#fff9ef] md:py-24">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Route className="mb-6 h-10 w-10 text-[#facc15]" aria-hidden="true" />
            <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">
              No queremos ser otra agencia. Queremos construir el mapa digital del valle.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#f5ebdd]">
            <p>
              Mapa Punilla nace para ordenar la visibilidad turística local: lugares, historias, búsquedas, reseñas, fotos y consultas reales.
            </p>
            <p>
              Tu negocio merece ser encontrado. Punilla también se descubre online.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
