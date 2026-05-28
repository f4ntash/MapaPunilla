import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = buildMetadata({
  title: "Servicios de marketing turistico y SEO local en Punilla",
  description:
    "Marketing turistico para cabanas, hoteles, restaurantes y negocios locales del Valle de Punilla: Google Maps, SEO local, paginas web, WhatsApp y publicidad.",
  path: "/servicios",
  keywords: [
    "servicios marketing punilla",
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
