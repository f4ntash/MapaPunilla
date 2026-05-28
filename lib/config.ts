export const config = {
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mapapunilla.com",
    name: process.env.NEXT_PUBLIC_SITE_NAME || "Mapa Punilla",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
      "Agencia digital para negocios turísticos en Carlos Paz y el Valle de Punilla.",
  },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5493541655383",
    message:
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
      "Hola%21+Quiero+impulsar+mi+negocio+digitalmente",
    get url() {
      return `https://wa.me/${this.number}?text=${this.message}`
    },
    link(text: string) {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(text)}`
    },
  },
  phone:
    process.env.NEXT_PUBLIC_PHONE || "+5493541655383",
  phoneDisplay:
    process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+54 9 3541 65-5383",
  email: process.env.NEXT_PUBLIC_EMAIL || "hola@mapapunilla.com",
  location:
    process.env.NEXT_PUBLIC_LOCATION || "Villa Carlos Paz, Córdoba, Argentina",
  prices: {
    basic: Number(process.env.NEXT_PUBLIC_PRICE_BASIC) || 35000,
    pro: Number(process.env.NEXT_PUBLIC_PRICE_PRO) || 65000,
    reservas: Number(process.env.NEXT_PUBLIC_PRICE_RESERVAS) || 85000,
  },
  formatPrice(price: number): string {
    return `$${price.toLocaleString("es-AR")}`
  },
  zones: [
    "Villa Carlos Paz",
    "Cosquín",
    "La Falda",
    "Valle de Punilla",
    "Córdoba",
    "Tanti",
    "Capilla del Monte",
  ],
} as const
