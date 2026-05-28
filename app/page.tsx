import { Hero } from "@/components/home/hero"
import { ProblemSolution } from "@/components/home/problem-solution"
import { Services } from "@/components/home/services"
import { Pricing } from "@/components/home/pricing"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Testimonials } from "@/components/home/testimonials"
import { FAQ } from "@/components/home/faq"
import { FinalCTA } from "@/components/home/final-cta"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Marketing Digital en Punilla para Hoteles, Cabanas y Restaurantes",
  description:
    "Mapa Punilla ayuda a negocios turisticos y locales del Valle de Punilla a verse profesionales, aparecer mejor en Google y conseguir mas consultas y reservas.",
  path: "/",
  keywords: [
    "marketing digital Punilla",
    "marketing para cabanas en Punilla",
    "marketing para hoteles en Punilla",
    "SEO local Punilla",
    "paginas web para cabanas",
    "conseguir mas reservas",
    "Villa Carlos Paz",
    "Cosquin",
    "La Falda",
  ],
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cuanto tiempo toma ver mejoras?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las mejoras de presentacion se ven rapido. SEO local y Google Maps requieren trabajo sostenido, con seguimiento claro para entender avances y proximos pasos.",
      },
    },
    {
      "@type": "Question",
      name: "Necesito entender de marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Explicamos todo simple, empezamos con un diagnostico gratis y priorizamos acciones segun tu negocio, zona y presupuesto.",
      },
    },
    {
      "@type": "Question",
      name: "Que zonas de Punilla cubren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos en Villa Carlos Paz, Cosquin, La Falda, Capilla del Monte, Tanti, Bialet Masse, Santa Maria de Punilla, Huerta Grande y todo el Valle de Punilla, Cordoba.",
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
      <Hero />
      <ProblemSolution />
      <Services />
      <Pricing />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
