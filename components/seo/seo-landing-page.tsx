import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPinned, MessageCircle, Route } from "lucide-react"
import { config } from "@/lib/config"
import type { SeoLanding } from "@/data/seo-landings"
import { breadcrumbJsonLd, faqJsonLd, localServiceJsonLd } from "@/lib/seo"

export function CommercialSeoLanding({ page }: { page: SeoLanding }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "Inicio", path: "/" },
        { name: page.title, path: `/${page.slug}` },
      ]),
      faqJsonLd(page.faqs),
      localServiceJsonLd({
        name: page.title,
        description: page.description,
        areaServed: ["Valle de Punilla, Córdoba, Argentina", ...config.zones],
      }),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="bg-[#fff9ef] text-[#1e1a16]">
        <section className="relative overflow-hidden bg-[#f5ebdd] py-20 md:py-28">
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#3f2f24_1px,transparent_1px),linear-gradient(#3f2f24_1px,transparent_1px)] bg-[size:34px_34px]" />
          <div className="container relative z-10 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <nav className="mb-8 flex items-center gap-2 text-sm text-[#4a3428]">
                <Link href="/" className="font-semibold hover:text-[#2f5d3a]">
                  Inicio
                </Link>
                <span>/</span>
                <span>{page.eyebrow}</span>
              </nav>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4a3428]/20 bg-[#fff9ef]/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#4a3428]">
                <MapPinned className="h-4 w-4" aria-hidden="true" />
                {page.eyebrow}
              </p>
              <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight md:text-7xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4a3428] md:text-xl">
                {page.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={config.whatsapp.link(`Hola! Quiero consultar por ${page.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#d97732] px-7 text-base font-bold text-[#1e1a16] transition hover:bg-[#c8641f]"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Pedir diagnóstico gratis
                </a>
                <Link
                  href="/precios"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-[#4a3428] bg-[#fff9ef]/80 px-7 text-base font-bold text-[#1e1a16] transition hover:bg-white"
                >
                  Ver rutas de trabajo
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <aside className="rounded-[2rem] border border-[#4a3428]/15 bg-[#fff9ef] p-6 shadow-xl shadow-[#4a3428]/10">
              <Route className="mb-5 h-8 w-8 text-[#d97732]" aria-hidden="true" />
              <h2 className="font-serif text-3xl font-semibold">Qué ordenamos</h2>
              <p className="mt-4 leading-7 text-[#4a3428]">{page.intent}</p>
              <div className="mt-6 space-y-3">
                {page.proof.map((item) => (
                  <p key={item} className="rounded-2xl bg-[#f5ebdd] px-4 py-3 text-sm font-semibold text-[#2f5d3a]">
                    {item}
                  </p>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="py-18 md:py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#d97732]">Contexto local</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">
                Una ruta pensada para negocios reales del valle
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#4a3428]">{page.intro}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {page.audience.map((item) => (
                <div key={item} className="rounded-2xl border border-[#4a3428]/15 bg-[#f5ebdd] p-5">
                  <CheckCircle2 className="mb-4 h-5 w-5 text-[#2f5d3a]" aria-hidden="true" />
                  <p className="font-semibold leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1e1a16] py-18 text-[#fff9ef] md:py-24">
          <div className="container">
            <div className="mb-10 max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#facc15]">Trabajo concreto</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">
                Lo que hacemos para que te encuentren y te escriban
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {page.work.map((item) => (
                <div key={item} className="rounded-2xl border border-[#fff9ef]/15 bg-[#fff9ef]/10 p-5 backdrop-blur">
                  <p className="leading-7 text-[#f5ebdd]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-18 md:py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#2f5d3a]">Preguntas frecuentes</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">
                Sin vueltas técnicas
              </h2>
            </div>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-[#4a3428]/15 bg-[#f5ebdd] p-5">
                  <summary className="cursor-pointer list-none font-bold">{faq.question}</summary>
                  <p className="mt-4 leading-7 text-[#4a3428]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2f5d3a] py-18 text-[#fff9ef] md:py-24">
          <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl font-semibold">Tu negocio merece ser encontrado.</h2>
              <p className="mt-4 text-lg leading-8 text-[#f5ebdd]">
                De la búsqueda al WhatsApp, con una presencia digital clara y local.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              {page.related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#fff9ef]/70 px-5 font-bold transition hover:bg-[#fff9ef] hover:text-[#1e1a16]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
