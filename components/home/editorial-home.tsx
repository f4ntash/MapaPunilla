"use client"

import Link from "next/link"
import {
  ArrowRight,
  BedDouble,
  Building2,
  Coffee,
  Hotel,
  MessageCircle,
  Mountain,
  Navigation,
  Route,
  Search,
} from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { config } from "@/lib/config"
import { automationPlans, pricingPlans } from "@/data/pricing"

const places = [
  { name: "Villa Carlos Paz", x: "18%", y: "70%" },
  { name: "Cosquin", x: "38%", y: "49%" },
  { name: "La Falda", x: "52%", y: "34%" },
  { name: "Tanti", x: "20%", y: "47%" },
  { name: "Capilla del Monte", x: "72%", y: "18%" },
]

const audiences = [
  {
    icon: Hotel,
    title: "Hoteles chicos",
    place: "Villa Carlos Paz",
    text: "Para alojamientos que necesitan verse confiables antes de que el turista escriba.",
  },
  {
    icon: BedDouble,
    title: "Cabanas",
    place: "Tanti y La Falda",
    text: "Fotos, Google Maps, web y WhatsApp ordenados para recibir consultas claras.",
  },
  {
    icon: Coffee,
    title: "Restaurantes",
    place: "Cosquin",
    text: "Una presencia local que ayude a elegir donde comer, reservar o llegar.",
  },
  {
    icon: Building2,
    title: "Complejos turisticos",
    place: "Todo el valle",
    text: "Una guia digital simple para explicar servicios, ubicacion y formas de contacto.",
  },
]

const mapSteps = [
  ["01", "Miramos tu punto en el mapa", "Google, fotos, resenas, web, redes y WhatsApp."],
  ["02", "Ordenamos la historia", "Que haces, donde estas, para quien sos y como te contactan."],
  ["03", "Abrimos caminos de consulta", "Mas claridad para turistas, vecinos y familias que buscan."],
]

const tools = [
  "Manejo de redes",
  "Fotografia para negocios turisticos",
  "Diseno de contenido",
  "Google Maps",
  "Webs simples",
  "Optimizacion de perfiles",
  "Branding local",
  "Carteleria y redes visuales",
]

function Texture() {
  return (
    <>
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#3f2f24_1px,transparent_1px),linear-gradient(#3f2f24_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_20%_25%,#d97732_0,transparent_26%),radial-gradient(circle_at_82%_18%,#2f5d3a_0,transparent_22%),radial-gradient(circle_at_55%_85%,#8a7a66_0,transparent_28%)]" />
    </>
  )
}

export function EditorialHome() {
  return (
    <>
      <section className="relative min-h-[92dvh] overflow-hidden bg-[#f5ebdd] text-[#1e1a16]">
        <Texture />
        <div className="absolute left-1/2 top-24 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full border border-[#8a7a66]/25" />
        <div className="container relative z-10 grid min-h-[92dvh] items-center gap-10 pt-28 pb-16 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4a3428]/20 bg-[#fff9ef]/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#4a3428]">
              <Mountain className="h-4 w-4" aria-hidden="true" />
              Valle de Punilla · Cordoba
            </div>
            <h1 className="font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-[#1e1a16] sm:text-6xl lg:text-7xl xl:text-8xl">
              El mapa digital del turismo en Punilla
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4a3428] md:text-xl">
              Hacemos que cabanas, hoteles, restaurantes y complejos del valle sean mas faciles de descubrir, entender y contactar cuando alguien busca donde dormir, comer o visitar.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                aria-label="Sumar mi negocio al mapa por WhatsApp"
                onClick={() => window.open(config.whatsapp.link("Hola! Quiero sumar mi negocio al mapa"), "_blank")}
                className="h-13 gap-2 rounded-full bg-[#d97732] px-7 text-[#1e1a16] hover:bg-[#c8641f]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Sumar mi negocio al mapa
              </Button>
              <Link href="/servicios">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 w-full gap-2 rounded-full border-[#4a3428] bg-[#fff9ef]/70 px-7 text-[#1e1a16] hover:bg-white sm:w-auto"
                >
                  Explorar como funciona
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="rotate-[-2deg] rounded-[2rem] border border-[#4a3428]/20 bg-[#fff9ef] p-4 shadow-2xl shadow-[#4a3428]/15">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#2f5d3a]">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(30,26,22,0.12),rgba(47,93,58,0.2)),radial-gradient(circle_at_52%_35%,#d8c3a5_0,transparent_32%),radial-gradient(circle_at_28%_78%,#d97732_0,transparent_25%)]" />
                <div className="absolute inset-6 rounded-[1.25rem] border border-[#fff9ef]/30" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 520" aria-hidden="true">
                  <path d="M82 438 C126 360 120 304 166 260 C220 208 190 146 274 92" fill="none" stroke="#fff9ef" strokeWidth="7" strokeLinecap="round" strokeDasharray="3 18" />
                  <path d="M48 300 C126 278 158 318 236 286 C318 253 338 174 382 152" fill="none" stroke="#facc15" strokeWidth="2" opacity=".75" />
                  <path d="M46 110 C104 136 132 94 194 116 C256 138 280 92 348 104" fill="none" stroke="#fff9ef" strokeWidth="1.5" opacity=".45" />
                  <path d="M50 390 C130 376 156 426 244 392 C306 368 326 404 382 376" fill="none" stroke="#fff9ef" strokeWidth="1.5" opacity=".35" />
                </svg>
                <div className="absolute left-6 top-6 rounded-full bg-[#fff9ef] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2b2118]">
                  Guia viva
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[#fff9ef]/92 p-5 text-[#1e1a16] backdrop-blur">
                  <p className="font-serif text-3xl font-semibold">Punilla tambien se explora online.</p>
                  <p className="mt-2 text-sm leading-6 text-[#4a3428]">
                    Del cartel en la ruta al resultado en Google. Del paisaje al WhatsApp.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#4a3428]/15 bg-[#fff9ef] px-4 py-3 text-sm font-semibold text-[#4a3428] shadow-lg">
              Villa Carlos Paz · Cosquin · La Falda
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff9ef] py-20 md:py-28">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#d97732]">Busqueda local</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#1e1a16] md:text-6xl">
              El valle tambien se busca online
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#4a3428]">
            <p>
              Antes de llegar, muchos turistas ya eligieron donde dormir, comer o pasear mirando Google Maps, reseñas, fotos, Instagram y WhatsApp.
            </p>
            <p>
              Mapa Punilla ordena esa primera impresion digital para que tu lugar se entienda rapido, se vea confiable y tenga caminos claros de contacto.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5ebdd] py-20 md:py-28">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#2f5d3a]">Comunidad local</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#1e1a16] md:text-6xl">
              Para quienes hacen vivir Punilla
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {audiences.map((item, index) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="group min-h-[22rem] rounded-[1.75rem] border border-[#4a3428]/15 bg-[#fff9ef] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4a3428]/10"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2f5d3a] text-[#fff9ef]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-[#f5ebdd] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#4a3428]">
                      {item.place}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-[#1e1a16]">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#4a3428]">{item.text}</p>
                  <div className="mt-8 h-px bg-[#4a3428]/15" />
                  <p className="mt-4 text-sm font-semibold text-[#2f5d3a]">Mas visibilidad · mas confianza · mas consultas</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1e1a16] py-20 text-[#fff9ef] md:py-28">
        <Texture />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#facc15]">Mapa visual</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
              Una ruta digital por el valle
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#f5ebdd]">
              Cada localidad tiene su ritmo, su temporada y su forma de recibir visitantes. La presencia online tambien deberia sentirse local.
            </p>
          </div>
          <div className="relative min-h-[28rem] rounded-[2rem] border border-[#fff9ef]/15 bg-[#f5ebdd] p-6 text-[#1e1a16] shadow-2xl">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 720 460" aria-hidden="true">
              <path d="M118 370 C178 310 190 256 276 226 C366 194 354 116 488 88" fill="none" stroke="#2f5d3a" strokeWidth="8" strokeLinecap="round" strokeDasharray="5 18" />
              <path d="M86 134 C180 168 260 112 344 150 C444 196 504 148 638 174" fill="none" stroke="#d97732" strokeWidth="2" opacity=".65" />
              <path d="M70 282 C174 252 224 318 328 284 C436 248 520 286 652 240" fill="none" stroke="#8a7a66" strokeWidth="2" opacity=".5" />
            </svg>
            {places.map((place) => (
              <div
                key={place.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: place.x, top: place.y }}
              >
                <div className="flex items-center gap-2 rounded-full border border-[#4a3428]/15 bg-[#fff9ef] px-3 py-2 text-xs font-bold shadow-md">
                  <span className="h-3 w-3 rounded-full bg-[#d97732]" />
                  {place.name}
                </div>
              </div>
            ))}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[#1e1a16] p-5 text-[#fff9ef]">
              <div className="flex items-center gap-2 text-sm font-bold text-[#facc15]">
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Ruta de visibilidad local
              </div>
              <p className="mt-2 text-sm leading-6 text-[#f5ebdd]">
                Google Maps, fotos, reseñas, web y WhatsApp conectados para que el turista tenga menos dudas y mas caminos para escribir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff9ef] py-20 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#d97732]">Primera parada</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight text-[#1e1a16] md:text-6xl">
                Sumar mi negocio al mapa
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#4a3428]">
                No empezamos vendiendo un paquete. Primero miramos tu lugar, tu zona, como aparece online y que puede mejorar para recibir mas consultas.
              </p>
              <Button
                size="lg"
                className="mt-8 h-13 gap-2 rounded-full bg-[#d97732] px-7 text-[#1e1a16] hover:bg-[#c8641f]"
                onClick={() => window.open(config.whatsapp.link("Hola! Quiero sumar mi negocio al mapa"), "_blank")}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Pedir diagnostico gratis
              </Button>
            </div>
            <div className="grid gap-4">
              {mapSteps.map(([number, title, text]) => (
                <article key={number} className="grid gap-4 rounded-[1.5rem] border border-[#4a3428]/15 bg-[#f5ebdd] p-5 sm:grid-cols-[4rem_1fr]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1e1a16] font-serif text-2xl text-[#facc15]">
                    {number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e1a16]">{title}</h3>
                    <p className="mt-2 leading-7 text-[#4a3428]">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5ebdd] py-20 md:py-28">
        <div className="container">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#2f5d3a]">Rutas de trabajo</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight text-[#1e1a16] md:text-6xl">
                Algunas paradas para empezar
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#4a3428]">
              No son paquetes frios. Son recorridos simples para ordenar tu presencia digital con tonada local: mas claro para Google, mas facil para tus clientes.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {pricingPlans.slice(0, 3).map((plan, index) => (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[1.75rem] border border-[#4a3428]/15 bg-[#fff9ef] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4a3428]/10"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-[#1e1a16] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#facc15]">
                    {plan.badge}
                  </span>
                  <Route className="h-5 w-5 text-[#d97732]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-3xl font-semibold text-[#1e1a16]">{plan.name}</h3>
                <p className="mt-2 text-sm font-semibold text-[#2f5d3a]">{plan.subtitle}</p>
                <p className="mt-4 text-base leading-7 text-[#4a3428]">{plan.description}</p>
                <p className="mt-6 font-serif text-4xl font-semibold text-[#1e1a16]">{plan.price}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/precios">
              <Button variant="outline" className="rounded-full border-[#4a3428] bg-[#fff9ef]">
                Ver todas las rutas y automatizaciones
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fff9ef] py-20 md:py-28">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#d97732]">Herramientas del mapa</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#1e1a16] md:text-6xl">
              Todo lo que ayuda a que tu negocio sea mas facil de descubrir
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4a3428]">
              Redes, fotos, perfiles, diseno y automatizaciones como piezas de una misma guia. Sin vueltas tecnicas.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.035 }}
                className="rounded-2xl border border-[#4a3428]/15 bg-[#f5ebdd] p-4 text-base font-semibold text-[#1e1a16]"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1e1a16] py-20 text-[#fff9ef] md:py-28">
        <Texture />
        <div className="container relative z-10">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#facc15]">Automatizaciones simples</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
              Cuando llegan mensajes, que nadie quede sin respuesta
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {automationPlans.map((plan) => (
              <article key={plan.id} className="rounded-[1.5rem] border border-[#fff9ef]/15 bg-[#fff9ef]/10 p-5 backdrop-blur">
                <h3 className="font-serif text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#f5ebdd]">{plan.idealFor}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#2f5d3a] py-24 text-center text-[#fff9ef] md:py-32">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,#fff9ef_1px,transparent_1px),linear-gradient(#fff9ef_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="container relative z-10 max-w-4xl">
          <Route className="mx-auto mb-6 h-10 w-10 text-[#facc15]" aria-hidden="true" />
          <h2 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
            Tu lugar tambien puede ser parte de la guia digital del valle
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#f5ebdd]">
            Si tu negocio vive del turismo, la ubicacion y la confianza, hagamos que sea mas facil encontrarte, entenderte y escribirte.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-13 gap-2 rounded-full bg-[#facc15] px-7 text-[#1e1a16] hover:bg-[#f5b51b]"
              onClick={() => window.open(config.whatsapp.link("Hola! Quiero que mi negocio sea parte de Mapa Punilla"), "_blank")}
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Hablar por WhatsApp
            </Button>
            <Link href="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="h-13 w-full gap-2 rounded-full border-[#fff9ef] bg-transparent px-7 text-[#fff9ef] hover:bg-[#fff9ef] hover:text-[#1e1a16] sm:w-auto"
              >
                Recibir una propuesta simple
                <Search className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
