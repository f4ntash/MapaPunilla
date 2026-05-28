"use client"

import { useInView } from "@/lib/use-in-view"
import Link from "next/link"
import { MessageCircle, ArrowRight, MapPin, Route, Mountain, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { config } from "@/lib/config"

const zones = [
  "Villa Carlos Paz",
  "Cosquín",
  "La Falda",
  "Capilla del Monte",
  "Tanti",
  "Bialet Massé",
  "Santa María de Punilla",
  "Huerta Grande",
]

const businessTypes = ["Cabañas", "Hoteles chicos", "Restaurantes", "Bares", "Alquileres temporarios"]

export function Hero() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative min-h-[92dvh] flex items-center overflow-hidden bg-[#2b2118]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(43,33,24,0.98)_0%,rgba(83,62,39,0.94)_42%,rgba(22,101,52,0.92)_100%)]" />
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_18%_20%,#f59e0b_0%,transparent_24%),radial-gradient(circle_at_80%_10%,#84cc16_0%,transparent_20%),radial-gradient(circle_at_50%_90%,#0f766e_0%,transparent_30%)]" />
      <div className="absolute left-1/2 top-20 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-amber-200/20" aria-hidden="true" />
      <div className="absolute left-[8%] top-28 hidden h-28 w-28 rounded-full border border-amber-200/20 md:block" aria-hidden="true" />
      <div className="absolute right-[10%] bottom-24 hidden h-36 w-36 rounded-full border border-emerald-200/20 md:block" aria-hidden="true" />

      <div
        ref={ref}
        className={cn(
          "container relative z-10 pt-28 pb-16 md:pt-36 md:pb-20",
          isInView ? "animate-fade-in-up" : "opacity-0"
        )}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-50/10 px-4 py-2 text-xs md:text-sm font-semibold text-amber-100 mb-6">
            <Mountain className="w-4 h-4" aria-hidden="true" />
            Marketing local para negocios turísticos de Punilla
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
            Más consultas, reservas y clientes para tu negocio en Punilla
          </h1>

          <p className="text-lg md:text-xl text-amber-50 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Te ayudamos a que tu cabaña, hotel, restaurante, bar o emprendimiento local se vea profesional, aparezca mejor cuando los turistas buscan y convierta más visitas en mensajes por WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Button
              variant="whatsapp"
              size="lg"
              aria-label="Pedir diagnóstico gratis por WhatsApp"
              onClick={() =>
                window.open(
                  config.whatsapp.link("Hola! Quiero un diagnóstico gratis para mi negocio en Punilla"),
                  "_blank"
                )
              }
              className="w-full sm:w-auto text-sm md:text-base gap-2 h-12 md:h-13 px-6 md:px-8"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Pedir diagnóstico gratis
            </Button>
            <Link href="/servicios" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                aria-label="Ver servicios para negocios turísticos"
                className="w-full sm:w-auto text-sm md:text-base gap-2 h-12 md:h-13 px-6 md:px-8 bg-amber-50 text-stone-900 border-2 border-amber-200 hover:bg-white hover:shadow-sm"
              >
                Ver que hacemos por tu negocio
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto text-left">
            {[
              ["No necesitás entender de marketing", "Te explicamos todo simple y sin vueltas técnicas."],
              ["Pensado para negocios chicos y medianos", "Primero vemos qué necesita tu negocio y tu zona."],
              ["Foco en consultas reales", "Google, web y WhatsApp orientados a reservas y clientes."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-amber-100/20 bg-white/10 p-4 backdrop-blur">
                <p className="font-semibold text-white">{title}</p>
                <p className="text-sm text-amber-50/85 mt-1">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-amber-100/20 bg-[#fff8e7]/95 p-4 md:p-6 text-left shadow-2xl">
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-green-900 mb-3">
                  <Route className="w-4 h-4" aria-hidden="true" />
                  Hecho para el recorrido turístico del valle
                </div>
                <div className="flex flex-wrap gap-2">
                  {zones.map((zone) => (
                    <span key={zone} className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-2 text-xs md:text-sm font-semibold text-stone-800 border border-amber-200">
                      <MapPin className="w-3.5 h-3.5 text-green-800" aria-hidden="true" />
                      {zone}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {businessTypes.map((type) => (
                  <div key={type} className="flex items-center gap-2 rounded-xl bg-stone-900 px-3 py-2 text-sm font-semibold text-amber-50">
                    <Store className="w-4 h-4 text-amber-300" aria-hidden="true" />
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
