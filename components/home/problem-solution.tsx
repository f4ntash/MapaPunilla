"use client"

import { useInView } from "@/lib/use-in-view"
import { SearchX, Percent, Clock, CheckCircle, HelpCircle } from "lucide-react"
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper"
import { cn } from "@/lib/utils"

const problems = [
  {
    icon: SearchX,
    title: "Te buscan, pero encuentran a otro",
    description:
      "En Google Maps aparecen competidores con mejores fotos, más reseñas o una ficha más completa.",
  },
  {
    icon: Percent,
    title: "Pagas comisiones por cada reserva",
    description:
      "Las plataformas ayudan, pero también se quedan con una parte grande de lo que ganaste.",
  },
  {
    icon: Clock,
    title: "Perdés consultas por responder tarde",
    description:
      "Si una persona pregunta por WhatsApp y no recibe respuesta clara, sigue buscando.",
  },
]

const solutions = [
  {
    icon: CheckCircle,
    title: "Ordenamos tu presencia online",
    description:
      "Mejoramos Google, web, WhatsApp, fotos y mensajes para que tu negocio se entienda rápido.",
  },
  {
    icon: CheckCircle,
    title: "Trabajamos para consultas reales",
    description:
      "No vendemos humo: priorizamos llamadas, mensajes, reservas y clientes para temporada.",
  },
  {
    icon: CheckCircle,
    title: "Te acompañamos paso a paso",
    description:
      "Explicamos simple que hacemos, por que lo hacemos y como medir si esta funcionando.",
  },
]

const objections = [
  "No sé si esto me sirve.",
  "Ya publiqué en redes y no funcionó.",
  "No entiendo de marketing.",
  "No quiero gastar sin saber si vuelve.",
  "Mi negocio es chico.",
]

export function ProblemSolution() {
  const { ref, isInView } = useInView()

  return (
    <SectionWrapper className="bg-stone-100">
      <SectionHeader
        badge="Problema comun"
        title="Tu negocio puede ser muy bueno y aun asi no recibir consultas"
        subtitle="Hoy la primera impresión suele pasar en Google, Maps, WhatsApp o una web. Si ahí no se ve claro y confiable, el cliente elige otra opción."
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
            Lo que suele pasar
          </h3>
          {problems.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex gap-4 p-4 md:p-5 rounded-2xl bg-white border border-red-200 shadow-xs"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-red-600" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800">{item.title}</h4>
                  <p className="text-sm text-stone-600 mt-1">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-emerald-700 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-emerald-600" aria-hidden="true" />
            Cómo lo resolvemos
          </h3>
          {solutions.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex gap-4 p-4 md:p-5 rounded-2xl bg-white border border-emerald-200 shadow-xs"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800">{item.title}</h4>
                  <p className="text-sm text-stone-600 mt-1">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-10 md:mt-12 rounded-2xl bg-white border border-stone-200 p-5 md:p-7">
        <div className="flex items-start gap-3 mb-5">
          <HelpCircle className="w-6 h-6 text-emerald-600 mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-lg md:text-xl font-bold text-stone-800">
              Si tenés dudas, empezamos por un diagnóstico gratis
            </h3>
            <p className="text-sm md:text-base text-stone-600 mt-1">
              Miramos tu negocio, te decimos que mejoraria primero y te explicamos cada paso sin tecnicismos.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {objections.map((item) => (
            <div key={item} className="rounded-xl bg-stone-50 border border-stone-200 p-3 text-sm font-medium text-stone-700">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          ["1. Miramos tu negocio", "Revisamos Google, web, redes, WhatsApp, fotos y competencia local."],
          ["2. Priorizamos lo importante", "Te decimos que conviene hacer primero según tu rubro y temporada."],
          ["3. Ejecutamos y medimos", "Aplicamos mejoras y seguimos consultas, reservas y caminos de contacto."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl bg-[#fffaf0] border border-amber-200 p-5">
            <h3 className="font-bold text-stone-900">{title}</h3>
            <p className="text-sm text-stone-700 mt-2">{text}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
