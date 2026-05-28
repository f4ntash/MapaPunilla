import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = buildMetadata({
  title: "Servicios de marketing digital para Punilla",
  description:
    "Optimización en Google Maps, SEO Local, WhatsApp Business, páginas de reservas y más para hoteles, cabañas y restaurantes del Valle de Punilla.",
  path: "/servicios",
  keywords: [
    "servicios marketing punilla",
    "google maps negocios",
    "seo local turismo",
    "whatsapp business hoteles",
    "reservas directas cabañas",
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
