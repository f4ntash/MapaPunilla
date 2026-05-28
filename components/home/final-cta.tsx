"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-green" />
      <div className="container relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6 max-w-3xl mx-auto leading-[1.1]">
          Listo para que los turistas te encuentren?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-xl mx-auto mb-8 md:mb-10">
          Contanos qué necesitás y te armamos una propuesta sin cargo. Respondemos por WhatsApp al instante.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <Button
            variant="whatsapp"
            size="lg"
            aria-label="Quiero empezar ahora por WhatsApp"
            onClick={() =>
              window.open(
                "https://wa.me/5493541655383?text=Hola%21+Quiero+empezar+a+trabajar+con+Mapa+Punilla",
                "_blank"
              )
            }
            className="w-full sm:w-auto text-sm md:text-base gap-2 h-12 md:h-13 px-6 md:px-8 bg-white text-emerald-700 hover:bg-emerald-50"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Quiero empezar ahora
          </Button>
          <Button
            variant="outline"
            size="lg"
            aria-label="Quiero información primero"
            onClick={() =>
              window.open(
                "https://wa.me/5493541655383?text=Hola%21+Quiero+informaci%C3%B3n",
                "_blank"
              )
            }
            className="w-full sm:w-auto text-sm md:text-base gap-2 h-12 md:h-13 px-6 md:px-8 bg-white/90 text-emerald-700 border-2 border-emerald-600 hover:bg-white hover:shadow-sm"
          >
            Quiero info primero
          </Button>
        </div>
      </div>
    </section>
  )
}
