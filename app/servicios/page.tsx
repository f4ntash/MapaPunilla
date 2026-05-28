import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"
import Link from "next/link"

export const metadata: Metadata = buildMetadata({
  title: "Herramientas digitales para negocios turísticos de Punilla",
  description:
    "Herramientas para que cabañas, hoteles, restaurantes y negocios locales del Valle de Punilla sean más fáciles de descubrir: Google Maps, redes, fotos, webs y WhatsApp.",
  path: "/servicios",
  keywords: [
    "herramientas digitales Punilla",
    "marketing turístico Punilla",
    "seo local Punilla",
    "whatsapp business hoteles",
    "páginas web para cabañas",
    "publicidad google punilla",
  ],
})

export default function ServiciosPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <section className="bg-[#f5ebdd] py-16 md:py-20">
        <div className="container">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#d97732]">Guías comerciales</p>
            <h2 className="font-serif text-4xl font-semibold text-[#1e1a16]">
              Profundizá según lo que necesita tu negocio
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Google Maps para negocios", "/google-maps-negocios-punilla"],
              ["Marketing turístico", "/marketing-turistico-punilla"],
              ["Marketing para cabañas", "/marketing-cabanas-punilla"],
              ["WhatsApp para turismo", "/automatizacion-whatsapp-turismo"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-[#4a3428]/15 bg-[#fff9ef] p-5 font-bold text-[#1e1a16] transition hover:-translate-y-1 hover:shadow-lg"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ServicesCTA />
    </>
  )
}
