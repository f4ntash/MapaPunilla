export const config = {
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mapapunilla.com.ar",
    name: process.env.NEXT_PUBLIC_SITE_NAME || "Mapa Punilla",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
      "Marketing digital, SEO local y paginas web para negocios turisticos del Valle de Punilla.",
  },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "543541638826",
    message:
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
      "Hola%21+Quiero+mejorar+la+presencia+online+de+mi+negocio",
    get url() {
      return `https://wa.me/${this.number}?text=${this.message}`
    },
    link(text: string) {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(text)}`
    },
  },
  phone:
    process.env.NEXT_PUBLIC_PHONE || "+543541638826",
  phoneDisplay:
    process.env.NEXT_PUBLIC_PHONE_DISPLAY || "3541 638826",
  email: process.env.NEXT_PUBLIC_EMAIL || "matiasgerstner@gmail.com",
  location:
    process.env.NEXT_PUBLIC_LOCATION || "Villa Carlos Paz, Cordoba, Argentina",
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
    "Cosquin",
    "La Falda",
    "Capilla del Monte",
    "Tanti",
    "Bialet Masse",
    "Santa Maria de Punilla",
    "Huerta Grande",
    "Valle de Punilla",
    "Cordoba",
  ],
} as const
