export function ContactMap() {
  return (
    <section className="py-12 md:py-16 bg-stone-100">
      <div className="container">
        <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-xs">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217461.65556533823!2d-64.71834372628134!3d-31.42008327667035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d6640b0e3b3e5%3A0x5f6e0d8c3f4c6b0!2sVilla%20Carlos%20Paz%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Mapa Punilla en Villa Carlos Paz"
            aria-label="Mapa mostrando la ubicación en Villa Carlos Paz, Córdoba"
          />
        </div>
      </div>
    </section>
  )
}
