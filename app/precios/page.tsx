import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingGrid } from "@/components/pricing/pricing-grid"
import { PricingFAQ } from "@/components/pricing/pricing-faq"

export const metadata: Metadata = buildMetadata({
  title: "Planes de marketing para Punilla",
  description:
    "Planes de marketing digital para Punilla: Maps Inicial, Maps Profesional, Reservas Directas y Servicio Integral. Precios claros, sin permanencia.",
  path: "/precios",
  keywords: [
    "planes marketing punilla",
    "precios google maps",
    "marketing digital carlos paz precio",
    "plan maps inicial",
    "plan maps profesional",
    "reservas directas precio",
  ],
})

export default function PreciosPage() {
  return (
    <>
      <PricingHero />
      <PricingGrid />
      <PricingFAQ />
    </>
  )
}
