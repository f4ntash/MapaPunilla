"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { config } from "@/lib/config"

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-green" />
      <div className="container relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6 max-w-3xl mx-auto leading-[1.1]">
          Queres mas consultas para tu negocio en Punilla?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-8 md:mb-10">
          Pedinos un diagnostico gratis. Revisamos tu presencia online y te decimos que conviene mejorar primero para ganar visibilidad, confianza y reservas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <Button
            variant="whatsapp"
            size="lg"
            aria-label="Pedir diagnostico gratis por WhatsApp"
            onClick={() =>
              window.open(
                config.whatsapp.link("Hola! Quiero pedir un diagnostico gratis"),
                "_blank"
              )
            }
            className="w-full sm:w-auto text-sm md:text-base gap-2 h-12 md:h-13 px-6 md:px-8 bg-white text-emerald-700 hover:bg-emerald-50"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Pedir diagnostico gratis
          </Button>
          <Button
            variant="outline"
            size="lg"
            aria-label="Hablar por WhatsApp"
            onClick={() =>
              window.open(
                config.whatsapp.link("Hola! Quiero mas consultas para mi negocio"),
                "_blank"
              )
            }
            className="w-full sm:w-auto text-sm md:text-base gap-2 h-12 md:h-13 px-6 md:px-8 bg-white/90 text-emerald-700 border-2 border-emerald-600 hover:bg-white hover:shadow-sm"
          >
            Hablar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
