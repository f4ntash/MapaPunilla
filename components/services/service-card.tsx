"use client"

import { Check } from "lucide-react"
import type { Service } from "@/data/services"

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <div
      className="group relative p-5 md:p-8 rounded-2xl border border-stone-200 bg-white hover:shadow-md hover:border-emerald-200 transition-all duration-200"
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <div
        className={`w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 md:mb-5 shadow-xs`}
      >
        <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" aria-hidden="true" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-2 md:mb-3 group-hover:text-emerald-700 transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-stone-600 mb-4 md:mb-6">
        {service.description}
      </p>
      <ul className="space-y-2 md:space-y-3">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="text-sm text-stone-600 flex items-start gap-3"
          >
            <span className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-emerald-600" aria-hidden="true" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
