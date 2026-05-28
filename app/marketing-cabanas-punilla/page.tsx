import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CommercialSeoLanding } from "@/components/seo/seo-landing-page"
import { getSeoLanding } from "@/data/seo-landings"
import { buildMetadata } from "@/lib/seo"

const page = getSeoLanding("marketing-cabanas-punilla")

export const metadata: Metadata = page
  ? buildMetadata({
      title: page.metaTitle,
      description: page.description,
      path: `/${page.slug}`,
      keywords: [
        "marketing cabañas Punilla",
        "marketing cabañas Carlos Paz",
        "cabañas La Falda marketing",
        "cabañas Tanti Google Maps",
        "reservas directas cabañas Punilla",
      ],
    })
  : {}

export default function Page() {
  if (!page) notFound()
  return <CommercialSeoLanding page={page} />
}
