"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper"
import { faqItems } from "@/data/faq"
import { cn } from "@/lib/utils"

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { id: string; question: string; answer: string }
  isOpen: boolean
  onToggle: () => void
}) {
  const panelId = `faq-panel-${item.id}`
  const buttonId = `faq-button-${item.id}`

  return (
    <div
      className={cn(
        "border rounded-xl transition-all duration-200 overflow-hidden",
        isOpen
          ? "border-emerald-300 bg-emerald-50"
          : "border-stone-200 bg-white hover:border-stone-300"
      )}
    >
      <h3>
        <button
          onClick={onToggle}
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex items-center justify-between p-4 md:p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 rounded-xl"
        >
          <span className="text-sm md:text-base font-semibold text-stone-800 pr-4">
            {item.question}
          </span>
          <ChevronDown
            className={cn(
              "w-5 h-5 flex-shrink-0 transition-transform duration-200",
              isOpen ? "rotate-180 text-emerald-600" : "text-stone-500"
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
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <SectionWrapper>
      <SectionHeader
        badge="FAQ"
        title="Preguntas frecuentes"
        subtitle="Todo lo que necesitás saber antes de empezar."
      />

      <div className="max-w-2xl mx-auto space-y-3">
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => setOpenId(openId === item.id ? null : item.id)}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
