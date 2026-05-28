"use client"

import { MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { config } from "@/lib/config"

export function ServicesCTA() {
  return (
    <section className="py-20 md:py-24 bg-stone-100">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-3 md:mb-4">
            No sabés por dónde empezar?
          </h2>
          <p className="text-base md:text-lg text-stone-600 mb-6 md:mb-8">
            Te regalamos un diagnóstico gratuito. Te contamos qué necesita tu negocio para crecer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Button
              variant="whatsapp"
              size="lg"
              aria-label="Quiero mi diagnóstico gratis"
              onClick={() =>
                window.open(config.whatsapp.link("Quiero un diagnóstico digital gratuito"), "_blank")
              }
              className="w-full sm:w-auto gap-2"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Quiero mi diagnóstico gratis
            </Button>
            <Button
              variant="outline"
              size="lg"
              aria-label="Tengo dudas sobre los servicios"
              onClick={() =>
                window.open(config.whatsapp.link("Tengo dudas sobre sus servicios"), "_blank")
              }
              className="w-full sm:w-auto gap-2"
            >
              Tengo dudas
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
