"use client"

import { useInView } from "@/lib/use-in-view"
import Link from "next/link"
import { MessageCircle, ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { config } from "@/lib/config"

export function Hero() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative min-h-[88dvh] flex items-center overflow-hidden bg-stone-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#047857_0%,transparent_32%),linear-gradient(135deg,#1c1917_0%,#0c0a09_48%,#064e3b_100%)]" />
      <div
        ref={ref}
        className={cn(
          "container relative z-10 pt-28 pb-16 md:pt-36 md:pb-20",
          isInView ? "animate-fade-in-up" : "opacity-0"
        )}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-white/10 px-4 py-2 text-xs md:text-sm font-medium text-emerald-100 mb-6">
            Marketing digital para negocios del Valle de Punilla
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
            Que tu negocio se vea mejor,
            <br />
            <span className="gradient-text">aparezca en Google y reciba mas consultas</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Ayudamos a cabanas, hoteles, restaurantes, bares y emprendimientos locales de Punilla a verse profesionales, ordenar su presencia online y conseguir reservas sin vueltas tecnicas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Button
              variant="whatsapp"
              size="lg"
              aria-label="Pedir diagnostico gratis por WhatsApp"
              onClick={() =>
                window.open(
                  config.whatsapp.link("Hola! Quiero mejorar mi presencia online"),
                  "_blank"
                )
              }
              className="w-full sm:w-auto text-sm md:text-base gap-2 h-12 md:h-13 px-6 md:px-8"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Pedir diagnostico gratis
            </Button>
            <Link href="/servicios" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                aria-label="Ver servicios disponibles"
                className="w-full sm:w-auto text-sm md:text-base gap-2 h-12 md:h-13 px-6 md:px-8 bg-white/95 text-emerald-700 border-2 border-emerald-600 hover:bg-white hover:shadow-sm"
              >
                Ver como podemos ayudarte
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
            {[
              ["Diagnostico gratis", "Vemos que mejorar sin compromiso."],
              ["Para negocios chicos", "Planes claros y acompaniamiento simple."],
              ["Foco en reservas", "Trabajamos para generar consultas reales."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="font-semibold text-white">{title}</p>
                <p className="text-sm text-stone-300 mt-1">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-stone-300">
            {[
              "Villa Carlos Paz",
              "Cosquin",
              "La Falda",
              "Capilla del Monte",
              "Tanti",
              "Bialet Masse",
              "Santa Maria de Punilla",
            ].map((zone) => (
              <span key={zone} className="inline-flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                {zone}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
