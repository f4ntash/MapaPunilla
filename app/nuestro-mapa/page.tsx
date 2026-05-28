import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CommercialSeoLanding } from "@/components/seo/seo-landing-page"
import { getSeoLanding } from "@/data/seo-landings"
import { buildMetadata } from "@/lib/seo"

const page = getSeoLanding("nuestro-mapa")

export const metadata: Metadata = page
  ? buildMetadata({
      title: page.metaTitle,
      description: page.description,
      path: `/${page.slug}`,
      keywords: [
        "Mapa Punilla",
        "guía local Punilla",
        "mapa digital turismo Punilla",
        "negocios turísticos Punilla",
        "directorio turístico Punilla",
      ],
    })
  : {}

export default function Page() {
  if (!page) notFound()
  return <CommercialSeoLanding page={page} />
}
