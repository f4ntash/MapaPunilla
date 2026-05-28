"use client"

import { services } from "@/data/services"
import { ServiceCard } from "@/components/services/service-card"

export function ServicesGrid() {
  return (
    <section className="bg-[#f5ebdd] py-20 md:py-28">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#d97732]">
            Herramientas para descubrir
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#1e1a16] md:text-6xl">
            No son servicios de agencia. Son piezas para que tu lugar se entienda mejor.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
