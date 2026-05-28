"use client"

import { useInView } from "@/lib/use-in-view"
import Link from "next/link"
import { MessageCircle, ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative min-h-[85dvh] flex items-center overflow-hidden bg-stone-900">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950" />
      <div
        ref={ref}
        className={cn(
          "container relative z-10 pt-28 pb-16 md:pt-36 md:pb-20",
          isInView ? "animate-fade-in-up" : "opacity-0"
        )}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Hacé que los turistas
            <br />
            <span className="gradient-text">te encuentren primero</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-300 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
            En Punilla, el que aparece primero en Google Maps se lleva el cliente. Te ayudamos a ser ese negocio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Button
              variant="whatsapp"
              size="lg"
              aria-label="Quiero impulsar mi negocio por WhatsApp"
              onClick={() =>
                window.open(
                  "https://wa.me/5493541655383?text=Hola%21+Quiero+impulsar+mi+negocio+digitalmente",
                  "_blank"
                )
              }
              className="w-full sm:w-auto text-sm md:text-base gap-2 h-12 md:h-13 px-6 md:px-8"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Quiero impulsar mi negocio
            </Button>
            <Link
              href="/servicios"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                aria-label="Ver servicios disponibles"
                className="w-full sm:w-auto text-sm md:text-base gap-2 h-12 md:h-13 px-6 md:px-8 bg-white/90 text-emerald-700 border-2 border-emerald-600 hover:bg-white hover:shadow-sm"
              >
                Ver servicios
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-stone-400">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Carlos Paz
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Cosquín
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              La Falda
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Capilla del Monte
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
