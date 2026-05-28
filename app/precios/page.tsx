import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingGrid } from "@/components/pricing/pricing-grid"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { AutomationPlans } from "@/components/pricing/automation-plans"

export const metadata: Metadata = buildMetadata({
  title: "Rutas digitales y automatizaciones para negocios de Punilla",
  description:
    "Rutas de visibilidad, reservas y automatizaciones simples para cabanas, hoteles, restaurantes y negocios turisticos del Valle de Punilla.",
  path: "/precios",
  keywords: [
    "rutas digitales Punilla",
    "automatizaciones para negocios turisticos",
    "marketing turistico Punilla",
    "marketing para cabanas en Punilla",
    "marketing para hoteles en Punilla",
    "paginas web para cabanas",
    "conseguir mas reservas",
  ],
})

export default function PreciosPage() {
  return (
    <>
      <PricingHero />
      <PricingGrid />
      <AutomationPlans />
      <PricingFAQ />
    </>
  )
}
