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
      name: "¿Cuánto tiempo toma ver resultados en Google Maps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los primeros resultados se ven en 1 o 2 semanas. La optimización completa toma entre 30 y 60 días.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito tener página web para usar Google Maps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No es obligatorio. Solo con el perfil de Google Business Profile optimizado ya podés aparecer en Maps. Una web suma puntos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué zonas de Punilla cubren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos en Villa Carlos Paz, Cosquín, La Falda, Tanti, Capilla del Monte y todo el Valle de Punilla, Córdoba.",
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
