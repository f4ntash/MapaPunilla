import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"

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
      <ServicesCTA />
    </>
  )
}
