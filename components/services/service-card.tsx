"use client"

import { Check, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import type { Service } from "@/data/services"

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.42, delay: index * 0.04 }}
      className="group relative min-h-[27rem] overflow-hidden rounded-[1.75rem] border border-[#4a3428]/15 bg-[#fff9ef] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4a3428]/10"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-[#f5ebdd]" />
      <div className="absolute right-5 top-5 text-xs font-bold uppercase tracking-[0.16em] text-[#8a7a66]">
        Parada {String(index + 1).padStart(2, "0")}
      </div>
      <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2f5d3a] text-[#fff9ef] shadow-md">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <div className="relative">
        <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-[#f5ebdd] px-3 py-1 text-xs font-bold text-[#4a3428]">
          <MapPin className="h-3.5 w-3.5 text-[#d97732]" aria-hidden="true" />
          Valle de Punilla
        </div>
        <h3 className="font-serif text-3xl font-semibold leading-tight text-[#1e1a16]">
          {service.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-[#4a3428]">
          {service.description}
        </p>
        <p className="mt-5 text-sm font-bold text-[#2f5d3a]">{service.result}</p>
        <ul className="mt-6 space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex gap-2 text-sm text-[#4a3428]">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2f5d3a]" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
