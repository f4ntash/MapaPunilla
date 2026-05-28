import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CommercialSeoLanding } from "@/components/seo/seo-landing-page"
import { getSeoLanding } from "@/data/seo-landings"
import { buildMetadata } from "@/lib/seo"

const page = getSeoLanding("marketing-restaurantes-punilla")

export const metadata: Metadata = page
  ? buildMetadata({
      title: page.metaTitle,
      description: page.description,
      path: `/${page.slug}`,
      keywords: [
        "marketing restaurantes Punilla",
        "restaurantes Punilla Google Maps",
        "marketing para bares en Punilla",
        "reservas restaurantes Punilla",
        "gastronomía Valle de Punilla",
      ],
    })
  : {}

export default function Page() {
  if (!page) notFound()
  return <CommercialSeoLanding page={page} />
}
