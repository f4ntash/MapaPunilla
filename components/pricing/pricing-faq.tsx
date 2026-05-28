"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqItems = [
  {
    question: "¿Puedo cambiar de plan cuando quiera?",
    answer:
      "Sí, podés cambiarte de plan cuando necesites. Solo ajustamos la diferencia del mes. No hay cargos extras.",
  },
  {
    question: "¿Hay contrato de permanencia?",
    answer:
      "No. Trabajamos mes a mes, sin contratos largos. Si no estás conforme, cancelás cuando quieras.",
  },
  {
    question: "¿Los precios tienen IVA incluido?",
    answer:
      "Sí, todos los precios incluyen IVA y están en pesos argentinos. Facturamos electrónicamente.",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer:
      "Aceptamos transferencia bancaria, Mercado Pago, tarjetas de crédito y débito.",
  },
]

export function PricingFAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-24 bg-stone-100">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 text-center mb-2">
            Preguntas sobre planes
          </h2>
          <p className="text-stone-600 text-center mb-10 md:mb-12">
            Lo que necesitás saber antes de elegir.
          </p>

          <div className="space-y-3">
            {faqItems.map((item, i) => {
              const panelId = `pricing-faq-panel-${i}`
              const buttonId = `pricing-faq-button-${i}`
              return (
                <div
                  key={i}
                  className={cn(
                    "border rounded-xl transition-all duration-200 overflow-hidden",
                    openId === i
                      ? "border-emerald-300 bg-emerald-50"
                      : "border-stone-200 bg-white hover:border-stone-300"
                  )}
                >
                  <h3>
                    <button
                      onClick={() => setOpenId(openId === i ? null : i)}
                      id={buttonId}
                      aria-expanded={openId === i}
                      aria-controls={panelId}
                      className="w-full flex items-center justify-between p-4 md:p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 rounded-xl"
                    >
                      <span className="text-sm md:text-base font-semibold text-stone-800 pr-4">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 flex-shrink-0 transition-transform duration-200",
                          openId === i ? "rotate-180 text-emerald-600" : "text-stone-500"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "overflow-hidden transition-all duration-200",
                      openId === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="px-4 md:px-5 pb-4 md:pb-5">
                      <p className="text-sm md:text-base text-stone-600">
                        {item.answer}
                      </p>
                    </div>
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
