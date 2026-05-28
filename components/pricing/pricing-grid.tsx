"use client"

import { pricingPlans } from "@/data/pricing"
import { PricingCard } from "@/components/pricing/pricing-card"

export function PricingGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-start">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
