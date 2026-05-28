import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contactanos para impulsar tu negocio turístico en el Valle de Punilla. Estamos en Villa Carlos Paz, Córdoba. Respondemos en el día.",
  path: "/contacto",
  keywords: [
    "contacto mapa punilla",
    "marketing digital carlos paz contacto",
    "whatsapp mapa punilla",
    "agencia punilla contacto",
    "presupuesto google maps",
  ],
})

export default function ContactoPage() {
  return (
    <>
      <ContactHero />
      <div className="container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ContactMap />
    </>
  )
}
