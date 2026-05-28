"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { config } from "@/lib/config"

export function AboutCTA() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-green" />
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Sumate al cambio digital de Punilla
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8">
            Somos locales, entendemos tu negocio y sabemos cómo hacerlo crecer. Charlamos sin compromiso.
          </p>
          <Button
            variant="whatsapp"
            size="lg"
            aria-label="Contactar por WhatsApp"
            onClick={() =>
              window.open(config.whatsapp.link("Quiero sumarme al cambio digital de Punilla"), "_blank")
            }
            className="bg-white text-emerald-700 hover:bg-emerald-50 gap-2"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Hablemos
          </Button>
        </div>
      </div>
    </section>
  )
}
