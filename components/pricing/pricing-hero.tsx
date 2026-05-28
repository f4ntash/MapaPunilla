export function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-[#f5ebdd] pt-28 pb-16 text-[#1e1a16] md:pt-36 md:pb-24">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#3f2f24_1px,transparent_1px),linear-gradient(#3f2f24_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="container relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#d97732]">
            Rutas y paradas
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[0.98] md:text-7xl">
            Elegi una ruta para que tu negocio sea mas facil de encontrar
          </h1>
        </div>
        <p className="text-lg leading-8 text-[#4a3428]">
          Planes con lenguaje simple, pensados para negocios reales del valle. Tu negocio merece ser encontrado, sin vueltas tecnicas.
        </p>
      </div>
    </section>
  )
}
