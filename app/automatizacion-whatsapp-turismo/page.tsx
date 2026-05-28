import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CommercialSeoLanding } from "@/components/seo/seo-landing-page"
import { getSeoLanding } from "@/data/seo-landings"
import { buildMetadata } from "@/lib/seo"

const page = getSeoLanding("automatizacion-whatsapp-turismo")

export const metadata: Metadata = page
  ? buildMetadata({
      title: page.metaTitle,
      description: page.description,
      path: `/${page.slug}`,
      keywords: [
        "automatización WhatsApp turismo",
        "WhatsApp reservas cabañas",
        "respuestas automáticas hoteles",
        "automatización Instagram turismo",
        "WhatsApp Business Punilla",
      ],
    })
  : {}

export default function Page() {
  if (!page) notFound()
  return <CommercialSeoLanding page={page} />
}
