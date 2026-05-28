import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingGrid } from "@/components/pricing/pricing-grid"
import { PricingFAQ } from "@/components/pricing/pricing-faq"

export const metadata: Metadata = buildMetadata({
  title: "Planes de marketing digital para negocios turisticos en Punilla",
  description:
    "Planes claros para mejorar Google Maps, SEO local, paginas web y WhatsApp de cabanas, hoteles, restaurantes y negocios turisticos de Punilla.",
  path: "/precios",
  keywords: [
    "planes marketing punilla",
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
      <PricingFAQ />
    </>
  )
}
