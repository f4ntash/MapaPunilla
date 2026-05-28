import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingGrid } from "@/components/pricing/pricing-grid"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { AutomationPlans } from "@/components/pricing/automation-plans"
import Link from "next/link"

export const metadata: Metadata = buildMetadata({
  title: "Planes y rutas para aparecer en Mapa Punilla",
  description:
    "Formas de aparecer en Mapa Punilla y rutas de visibilidad local para cabañas, hoteles, restaurantes y negocios turísticos del Valle de Punilla.",
  path: "/precios",
  keywords: [
    "planes Mapa Punilla",
    "rutas digitales Punilla",
    "negocios turísticos Punilla",
    "automatizaciones para negocios turísticos",
    "marketing turístico Punilla",
    "marketing para cabañas en Punilla",
    "marketing para hoteles en Punilla",
    "páginas web para cabañas",
    "conseguir más reservas",
  ],
})

export default function PreciosPage() {
  return (
    <>
      <PricingHero />
      <PricingGrid />
      <AutomationPlans />
      <section className="bg-[#fff9ef] py-16 md:py-20">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            ["Ruta Google Maps", "/google-maps-negocios-punilla"],
            ["Ruta cabañas y reservas", "/marketing-cabanas-punilla"],
            ["Ruta WhatsApp automático", "/automatizacion-whatsapp-turismo"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-[#4a3428]/15 bg-[#f5ebdd] p-5 font-bold text-[#1e1a16] transition hover:-translate-y-1 hover:shadow-lg"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>
      <PricingFAQ />
    </>
  )
}
