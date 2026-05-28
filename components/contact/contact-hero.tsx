export function ContactHero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-stone-900">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950" />
      <div className="container relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
          Hablemos de tu negocio
        </h1>
        <p className="text-base md:text-lg text-stone-300 max-w-xl mx-auto px-4">
          Contanos qué necesitás y te armamos una propuesta personalizada sin cargo.
        </p>
      </div>
    </section>
  )
}
