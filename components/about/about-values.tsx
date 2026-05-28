import { Target, Lightbulb, Heart, Zap, Shield, Globe } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Resultados",
    description:
      "No trabajamos con métricas vanidosas. Medimos reservas, clientes y llamadas reales.",
  },
  {
    icon: Lightbulb,
    title: "Innovación local",
    description:
      "Traemos tecnología moderna adaptada a la realidad de los negocios del Valle de Punilla.",
  },
  {
    icon: Heart,
    title: "Compromiso",
    description:
      "Nos tomamos cada negocio como propio. Si a vos te va bien, a nosotros también.",
  },
  {
    icon: Zap,
    title: "Velocidad",
    description:
      "En el turismo cada temporada cuenta. Implementamos rápido para que veas resultados ya.",
  },
  {
    icon: Shield,
    title: "Transparencia",
    description:
      "Sin letra chica, sin sorpresas. Te mostramos todo lo que hacemos y cómo.",
  },
  {
    icon: Globe,
    title: "Visión regional",
    description:
      "Queremos que cada negocio de Punilla compita digitalmente al más alto nivel.",
  },
]

export function AboutValues() {
  return (
    <section className="py-20 md:py-24 bg-stone-100">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block mb-3 md:mb-4 text-xs font-bold tracking-widest uppercase text-emerald-700">
            Valores
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800">
            Cómo trabajamos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="p-5 md:p-6 rounded-2xl bg-white border border-stone-200 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-stone-800 mb-1.5 md:mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-stone-600">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
