"use client"

import { Bot, Check, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { automationPlans } from "@/data/pricing"
import { Button } from "@/components/ui/button"
import { config } from "@/lib/config"

export function AutomationPlans() {
  return (
    <section className="relative overflow-hidden bg-[#1e1a16] py-20 text-[#fff9ef] md:py-28">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#fff9ef_1px,transparent_1px),linear-gradient(#fff9ef_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="container relative z-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#facc15]">
            Automatizaciones
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
            Respuestas utiles cuando el valle esta en movimiento
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#f5ebdd]">
            Sin robots raros ni promesas futuristas. Solo ayudas simples para responder mejor, ordenar consultas y no perder mensajes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {automationPlans.map((plan, index) => (
            <motion.article
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[1.75rem] border border-[#fff9ef]/15 bg-[#fff9ef] p-5 text-[#1e1a16] shadow-xl shadow-black/10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2f5d3a] text-[#fff9ef]">
                <Bot className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-3xl font-semibold">{plan.name}</h3>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-[#d97732]">
                Ideal para
              </p>
              <p className="mt-2 text-sm leading-6 text-[#4a3428]">{plan.idealFor}</p>
              <p className="mt-5 text-base leading-7 text-[#4a3428]">{plan.description}</p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm text-[#4a3428]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2f5d3a]" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="mt-7 w-full gap-2 rounded-full border-[#4a3428] bg-[#fff9ef]"
                onClick={() => window.open(config.whatsapp.link(plan.whatsapp), "_blank")}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {plan.cta}
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
