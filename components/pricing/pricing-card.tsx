"use client"

import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { PricingPlan } from "@/data/pricing"
import { config } from "@/lib/config"

interface PricingCardProps {
  plan: PricingPlan
  index: number
}

export function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <div
      className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-200 ${
        plan.highlighted
          ? "bg-emerald-700 text-white border-emerald-700 shadow-md"
          : "bg-white border-stone-200 hover:shadow-md hover:border-emerald-200"
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {plan.badge && (
        <Badge
          variant="default"
          className={`absolute -top-3 left-5 ${
            plan.highlighted ? "bg-white text-emerald-700" : ""
          }`}
        >
          {plan.badge}
        </Badge>
      )}

      <div className="mb-5">
        <h3
          className={`text-lg md:text-xl font-semibold ${
            plan.highlighted ? "text-white" : "text-stone-800"
          }`}
        >
          {plan.name}
        </h3>
        <p
          className={`text-sm mt-2 ${
            plan.highlighted ? "text-emerald-200" : "text-stone-600"
          }`}
        >
          {plan.description}
        </p>
      </div>

      <div className="mb-6 md:mb-8">
        <div className="flex items-baseline gap-2">
          <span
            className={`text-3xl md:text-4xl font-bold ${
              plan.highlighted ? "text-white" : "text-stone-800"
            }`}
          >
            {plan.price}
          </span>
        </div>
        <span
          className={`text-xs ${
            plan.highlighted ? "text-emerald-200" : "text-stone-500"
          }`}
        >
          {plan.id === "servicio-integral" ? "A medida" : "Por mes"}
        </span>
      </div>

      <ul className="space-y-2.5 mb-8 md:mb-10">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className={`text-sm flex items-start gap-3 ${
              plan.highlighted ? "text-emerald-100" : "text-stone-600"
            }`}
          >
            <Check
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                plan.highlighted ? "text-emerald-300" : "text-emerald-600"
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
          plan.highlighted ? "bg-white text-emerald-700 hover:bg-emerald-50" : ""
        }`}
        onClick={() => {
          if (plan.whatsapp) {
            window.open(config.whatsapp.link(plan.whatsapp), "_blank")
          } else {
            window.open(
              config.whatsapp.link("Quiero información sobre sus planes"),
              "_blank"
            )
          }
        }}
      >
        {plan.cta}
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Button>
    </div>
  )
}
