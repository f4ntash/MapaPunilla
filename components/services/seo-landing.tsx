import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { config } from "@/lib/config"
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/seo"

interface SeoLandingSection {
  title: string
  items: string[]
}

interface SeoLandingFAQ {
  question: string
  answer: string
}

interface SeoLandingProps {
  title: string
  subtitle: string
  heroDescription: string
  problem: string
  solution: string
  sections: SeoLandingSection[]
  faqs: SeoLandingFAQ[]
  breadcrumbItems: { name: string; path: string }[]
  zoneName: string
}

export function SeoLandingPage({
  title,
  subtitle,
  heroDescription,
  problem,
  solution,
  sections,
  faqs,
  breadcrumbItems,
  zoneName,
}: SeoLandingProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd(breadcrumbItems),
      faqJsonLd(faqs),
      {
        "@type": "Service",
        provider: { "@type": "LocalBusiness", name: config.site.name },
        name: title,
        description: heroDescription,
        areaServed: [zoneName, ...config.zones],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-gradient-to-b from-emerald-50 to-white py-12 md:py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link
              href="/servicios"
              className="hover:text-emerald-600 transition-colors"
            >
              Servicios
            </Link>
            <span>/</span>
            <span className="text-foreground">{title}</span>
          </nav>

          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-xl text-emerald-700 font-semibold mb-4">
              {subtitle}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={config.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 md:h-13 px-6 md:px-8 text-base font-medium rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 shadow-sm transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consultanos gratis
              </a>
              <Link
                href="/precios"
                className="inline-flex items-center justify-center h-12 md:h-13 px-6 md:px-8 text-base font-medium rounded-xl border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 active:bg-emerald-100 bg-white transition-all duration-200"
              >
                Ver planes
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
            <div className="bg-red-50 rounded-xl p-8 border border-red-100">
              <h2 className="text-2xl font-bold text-red-800 mb-4">
                El problema
              </h2>
              <p className="text-red-700 leading-relaxed text-lg">{problem}</p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">
                La solución
              </h2>
              <p className="text-emerald-700 leading-relaxed text-lg">
                {solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {sections.map((section, i) => (
        <section
          key={i}
          className={`py-16 md:py-20 ${i % 2 === 1 ? "bg-gray-50" : ""}`}
        >
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {section.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {section.items.map((item, j) => (
                <div
                  key={j}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-lg shadow-sm border [&>summary]:open:border-b [&>summary]:open:pb-4"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold list-none">
                  {faq.question}
                  <svg
                    className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="px-6 py-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Consultanos sin compromiso. Te contamos cómo podemos ayudar a tu
            negocio a crecer en {zoneName} y todo el Valle de Punilla.
          </p>
          <a
            href={config.whatsapp.link("Hola! Quiero información sobre " + title)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 md:h-14 px-8 text-base font-medium rounded-xl bg-green-600 text-white hover:bg-green-700 active:bg-green-800 shadow-sm transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Escribinos ahora
          </a>
        </div>
      </section>
    </>
  )
}
