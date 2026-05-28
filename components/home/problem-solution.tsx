"use client"

import { useInView } from "@/lib/use-in-view"
import { SearchX, Percent, Clock, CheckCircle } from "lucide-react"
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper"
import { cn } from "@/lib/utils"

const problems = [
  {
    icon: SearchX,
    title: "Los turistas no encuentran tu negocio",
    description:
      "Buscan en Google Maps y aparecen 5 competidores antes que vos. Ellos se llevan los clientes.",
  },
  {
    icon: Percent,
    title: "Perdés plata en comisiones",
    description:
      "Booking, Mercado Libre y otros intermediarios se quedan hasta el 25% de cada reserva.",
  },
  {
    icon: Clock,
    title: "No alcanzás a responder consultas",
    description:
      "Los clientes preguntan por WhatsApp y si no respondés rápido, llaman al competidor de al lado.",
  },
]

const solutions = [
  {
    icon: CheckCircle,
    title: "Aparecé primero en Google Maps",
    description:
      "Optimizamos tu perfil para que los turistas te encuentren antes que a la competencia.",
  },
  {
    icon: CheckCircle,
    title: "Recibí reservas directas sin comisiones",
    description:
      "Cobrá el 100% de cada reserva. Sin intermediarios, sin perder plata.",
  },
  {
    icon: CheckCircle,
    title: "Un chatbot atiende por vos las 24 horas",
    description:
      "Respondé consultas automáticamente. Nunca más perdás un cliente por no contestar.",
  },
]

export function ProblemSolution() {
  const { ref, isInView } = useInView()

  return (
    <SectionWrapper className="bg-stone-100">
      <SectionHeader
        badge="Problema común"
        title="¿Tu negocio aparece cuando los turistas buscan?"
        subtitle="El 87% busca en Google Maps antes de reservar. Si no aparecés, perdés clientes todos los días."
      />

      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start transition-all duration-500 ease-out",
          isInView ? "animate-fade-in-up" : "opacity-0"
        )}
      >
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-red-700 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-red-600" aria-hidden="true" />
            Esto te pasa hoy
          </h3>
          {problems.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={cn(
                  "flex gap-4 p-4 md:p-5 rounded-2xl bg-white border border-red-200 shadow-xs transition-all duration-500 ease-out",
                  isInView ? "animate-fade-in-up" : "opacity-0"
                )}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-red-600" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800">{item.title}</h4>
                  <p className="text-sm text-stone-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-emerald-700 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-emerald-600" aria-hidden="true" />
            Nosotros lo solucionamos
          </h3>
          {solutions.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={cn(
                  "flex gap-4 p-4 md:p-5 rounded-2xl bg-white border border-emerald-200 shadow-xs transition-all duration-500 ease-out",
                  isInView ? "animate-fade-in-up" : "opacity-0"
                )}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800">{item.title}</h4>
                  <p className="text-sm text-stone-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
