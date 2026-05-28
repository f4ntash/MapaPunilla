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
          ? "bg-stone-900 text-white border-stone-900 shadow-lg"
          : "bg-[#fffaf0] border-amber-200 hover:shadow-md hover:border-green-800/30"
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
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
          className={`text-lg md:text-xl font-semibold ${
            plan.highlighted ? "text-white" : "text-stone-800"
          }`}
        >
          {plan.name}
        </h3>
        <p
          className={`text-sm mt-2 ${
            plan.highlighted ? "text-amber-100" : "text-stone-700"
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
            plan.highlighted ? "text-amber-100" : "text-stone-600"
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
          plan.highlighted ? "bg-amber-200 text-stone-950 hover:bg-amber-100" : ""
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
  )
}
