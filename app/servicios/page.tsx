import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = buildMetadata({
  title: "Herramientas digitales para negocios turisticos de Punilla",
  description:
    "Herramientas para que cabanas, hoteles, restaurantes y negocios locales del Valle de Punilla sean mas faciles de descubrir: Google Maps, redes, fotos, webs y WhatsApp.",
  path: "/servicios",
  keywords: [
    "herramientas digitales Punilla",
    "marketing turistico Punilla",
    "seo local Punilla",
    "whatsapp business hoteles",
    "paginas web para cabanas",
    "publicidad google punilla",
  ],
})

export default function ServiciosPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </>
  )
}
