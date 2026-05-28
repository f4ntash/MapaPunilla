"use client"

import { pricingPlans } from "@/data/pricing"
import { PricingCard } from "@/components/pricing/pricing-card"

export function PricingGrid() {
  return (
    <section className="bg-[#fff9ef] py-20 md:py-28">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#2f5d3a]">
            Rutas principales
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#1e1a16] md:text-6xl">
            De la búsqueda al WhatsApp
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 items-start">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
