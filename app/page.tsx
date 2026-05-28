import { EditorialHome } from "@/components/home/editorial-home"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Mapa Punilla | El mapa digital del turismo en Punilla",
  description:
    "Una guia digital para que cabanas, hoteles, restaurantes y negocios turisticos del Valle de Punilla sean mas faciles de descubrir, entender y contactar.",
  path: "/",
  keywords: [
    "Mapa Punilla",
    "turismo en Punilla",
    "guia digital Punilla",
    "negocios turisticos en Punilla",
    "cabanas en Punilla",
    "hoteles en Punilla",
    "restaurantes en Punilla",
    "Villa Carlos Paz",
    "Cosquin",
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
      name: "Que es Mapa Punilla?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mapa Punilla es una guia digital y servicio local para que negocios turisticos del Valle de Punilla sean mas faciles de encontrar, entender y contactar online.",
      },
    },
    {
      "@type": "Question",
      name: "Para que tipo de negocios esta pensado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Esta pensado para cabanas, hoteles chicos, restaurantes, bares, complejos turisticos, alquileres temporarios y emprendimientos locales del valle.",
      },
    },
    {
      "@type": "Question",
      name: "Que localidades cubre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabaja con negocios de Villa Carlos Paz, Cosquin, La Falda, Tanti, Capilla del Monte, Valle Hermoso, Santa Maria de Punilla, Bialet Masse y otras localidades del Valle de Punilla.",
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
