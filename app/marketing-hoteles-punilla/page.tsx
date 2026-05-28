import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CommercialSeoLanding } from "@/components/seo/seo-landing-page"
import { getSeoLanding } from "@/data/seo-landings"
import { buildMetadata } from "@/lib/seo"

const page = getSeoLanding("marketing-hoteles-punilla")

export const metadata: Metadata = page
  ? buildMetadata({
      title: page.metaTitle,
      description: page.description,
      path: `/${page.slug}`,
      keywords: [
        "marketing hoteles Punilla",
        "marketing para hoteles en Punilla",
        "Google Maps hoteles Punilla",
        "reservas directas hoteles Punilla",
        "hoteles Villa Carlos Paz marketing",
      ],
    })
  : {}

export default function Page() {
  if (!page) notFound()
  return <CommercialSeoLanding page={page} />
}
