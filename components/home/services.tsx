import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper"
import { services } from "@/data/services"
import { Button } from "@/components/ui/button"

export function Services() {
  return (
    <SectionWrapper>
      <SectionHeader
        badge="Servicios"
        title="Mejoramos lo que la gente ve antes de contactarte"
        subtitle="Google, pagina web, WhatsApp, fotos, resenas y publicidad local trabajando con un mismo objetivo: mas consultas para tu negocio."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.slice(0, 8).map((service, i) => {
          const Icon = service.icon
          return (
            <div
              key={service.id}
              className="group relative p-5 md:p-6 rounded-2xl border border-stone-200 bg-white hover:shadow-md hover:border-emerald-200 transition-all duration-200"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div
                className={`w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-stone-800 mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-stone-600 mb-4">{service.problem}</p>
              <p className="text-sm font-medium text-emerald-700 mb-3">
                {service.result}
              </p>
              <Link
                href="/servicios"
                className="text-sm font-medium text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 group/link focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 rounded-md"
                aria-label={`Ver mas sobre ${service.shortTitle}`}
              >
                Ver mas
                <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          )
        })}
      </div>

      <div className="text-center mt-10 md:mt-12">
        <Link href="/servicios">
          <Button variant="outline" size="lg" aria-label="Ver todos los servicios" className="gap-2">
            Quiero mejorar mi presencia online
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  )
}
