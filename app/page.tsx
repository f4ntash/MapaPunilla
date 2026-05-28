import { EditorialHome } from "@/components/home/editorial-home"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Mapa Punilla | Marketing turístico, Google Maps y negocios locales",
  description:
    "Ayudamos a cabañas, hoteles, restaurantes y emprendimientos turísticos de Punilla a ser más fáciles de encontrar en Google, Maps, Instagram y WhatsApp.",
  path: "/",
  keywords: [
    "Mapa Punilla",
    "turismo en Punilla",
    "guía digital Punilla",
    "marketing turístico Punilla",
    "Google Maps negocios Punilla",
    "automatización WhatsApp turismo",
    "negocios turísticos en Punilla",
    "cabañas en Punilla",
    "hoteles en Punilla",
    "restaurantes en Punilla",
    "Villa Carlos Paz",
    "Cosquín",
    "La Falda",
    "Tanti",
    "Capilla del Monte",
  ],
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es Mapa Punilla?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mapa Punilla es una guía digital y servicio local para que negocios turísticos del Valle de Punilla sean más fáciles de encontrar, entender y contactar online.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para qué tipo de negocios está pensado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Está pensado para cabañas, hoteles chicos, restaurantes, bares, complejos turísticos, alquileres temporarios y emprendimientos locales del valle.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué localidades cubre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabaja con negocios de Villa Carlos Paz, Cosquín, La Falda, Tanti, Capilla del Monte, Valle Hermoso, Santa María de Punilla, Bialet Massé y otras localidades del Valle de Punilla.",
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EditorialHome />
    </>
  )
}
