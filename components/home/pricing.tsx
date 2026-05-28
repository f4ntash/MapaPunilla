"use client"

import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper"
import { pricingPlans } from "@/data/pricing"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { config } from "@/lib/config"

export function Pricing() {
  return (
    <SectionWrapper className="bg-stone-100">
      <SectionHeader
        badge="Planes"
        title="Planes claros para empezar sin miedo"
        subtitle="Primero entendemos tu negocio. Despues priorizamos lo que mas puede ayudarte a recibir consultas, reservas o visitas."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-start">
        {pricingPlans.map((plan, i) => (
          <div
            key={plan.id}
            className={`relative p-6 rounded-2xl border transition-all duration-200 ${
              plan.highlighted
                ? "bg-stone-900 text-white border-stone-900 shadow-lg"
                : "bg-[#fffaf0] border-amber-200 hover:shadow-md hover:border-green-800/30"
            }`}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {plan.badge && (
              <Badge
                variant="default"
                className={`absolute -top-3 left-5 ${
                  plan.highlighted ? "bg-amber-200 text-stone-950" : "bg-green-800 text-white"
                }`}
              >
                {plan.badge}
              </Badge>
            )}

            <div className="mb-5">
              <h3
                className={`text-lg font-semibold ${
                  plan.highlighted ? "text-white" : "text-stone-800"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mt-1 ${
                  plan.highlighted ? "text-amber-100" : "text-stone-600"
                }`}
              >
                {plan.subtitle}
              </p>
              <p
                className={`text-xs mt-2 ${
                  plan.highlighted ? "text-amber-50" : "text-stone-700"
                }`}
              >
                {plan.description}
              </p>
            </div>

            <div className="mb-5">
              <span
                className={`text-2xl md:text-3xl font-bold ${
                  plan.highlighted ? "text-white" : "text-stone-800"
                }`}
              >
                {plan.price}
              </span>
              {plan.id !== "servicio-integral" && (
                <span
                  className={`text-xs block mt-1 ${
                  plan.highlighted ? "text-amber-100" : "text-stone-600"
                  }`}
                >
                  Por mes, sin permanencia
                </span>
              )}
            </div>

            <ul className="space-y-2.5 mb-8">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className={`text-sm flex items-start gap-3 ${
                    plan.highlighted ? "text-amber-50" : "text-stone-700"
                  }`}
                >
                  <Check
                    className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      plan.highlighted ? "text-amber-300" : "text-green-800"
                    }`}
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant={plan.highlighted ? "primary" : "outline"}
              aria-label={`Contratar ${plan.name}`}
              className={`w-full gap-2 ${
                plan.highlighted
                  ? "bg-amber-200 text-stone-950 hover:bg-amber-100"
                  : ""
              }`}
              onClick={() => {
                if (plan.whatsapp) {
                  window.open(config.whatsapp.link(plan.whatsapp), "_blank")
                } else {
                  window.open(
                    config.whatsapp.link("Quiero informacion sobre sus planes"),
                    "_blank"
                  )
                }
              }}
            >
              {plan.cta}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
        ))}
      </div>

      <div className="text-center mt-10 md:mt-12">
        <Link href="/precios">
          <Button variant="ghost" size="lg" aria-label="Comparar planes en detalle" className="gap-2">
            Ver planes en detalle
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  )
}
