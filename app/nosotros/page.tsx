import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutValues } from "@/components/about/about-values"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata: Metadata = buildMetadata({
  title: "Nosotros — Agencia digital en Punilla",
  description:
    "Somos una agencia digital del Valle de Punilla. Ayudamos a hoteles, cabañas y restaurantes de Carlos Paz, Cosquín, La Falda y la región a crecer digitalmente.",
  path: "/nosotros",
  keywords: [
    "agencia digital punilla",
    "agencia marketing carlos paz",
    "mapa punilla equipo",
    "marketing digital valle de punilla",
    "agencia seo cordoba",
  ],
})

export default function NosotrosPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCTA />
    </>
  )
}
