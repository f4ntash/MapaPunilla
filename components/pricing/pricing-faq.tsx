"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqItems = [
  {
    question: "No sé qué ruta necesita mi negocio.",
    answer:
      "Empezamos con un diagnóstico gratis. Miramos cómo apareces hoy y te decimos qué parada conviene tomar primero.",
  },
  {
    question: "¿Mi negocio es chico. Sirve igual?",
    answer:
      "Sí. Las rutas están pensadas para cabañas, restaurantes, hoteles chicos y emprendimientos que necesitan orden y consultas reales.",
  },
  {
    question: "¿Las automatizaciones reemplazan la atención humana?",
    answer:
      "No. Solo ayudan con respuestas básicas y derivan a una persona cuando hace falta. La idea es responder mejor, no sonar frío.",
  },
  {
    question: "¿Hay contrato largo?",
    answer:
      "No. Trabajamos con etapas claras para que entiendas que se hace, para que sirve y que conviene ajustar.",
  },
]

export function PricingFAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="bg-[#f5ebdd] py-20 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-4xl font-semibold text-[#1e1a16] md:text-5xl">
            Preguntas sin vueltas
          </h2>
          <p className="mt-3 text-center text-[#4a3428]">
            Hecho para negocios reales del valle.
          </p>

          <div className="mt-10 space-y-3">
            {faqItems.map((item, i) => {
              const panelId = `pricing-faq-panel-${i}`
              const buttonId = `pricing-faq-button-${i}`
              return (
                <div
                  key={item.question}
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-all duration-200",
                    openId === i
                      ? "border-[#2f5d3a] bg-[#fff9ef]"
                      : "border-[#4a3428]/15 bg-[#fff9ef]/70"
                  )}
                >
                  <h3>
                    <button
                      onClick={() => setOpenId(openId === i ? null : i)}
                      id={buttonId}
                      aria-expanded={openId === i}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between p-5 text-left"
                    >
                      <span className="pr-4 font-bold text-[#1e1a16]">{item.question}</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 shrink-0 transition-transform duration-200",
                          openId === i ? "rotate-180 text-[#2f5d3a]" : "text-[#4a3428]"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn("overflow-hidden transition-all duration-200", openId === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}
                  >
                    <p className="px-5 pb-5 leading-7 text-[#4a3428]">{item.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
