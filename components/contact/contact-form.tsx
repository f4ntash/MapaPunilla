"use client"

import { useState, type FormEvent } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const text = `Hola%21+Soy+${encodeURIComponent(form.name)}+de+${encodeURIComponent(form.business)}+-+${encodeURIComponent(form.message)}`
    window.open(`https://wa.me/5493541655383?text=${text}`, "_blank")
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-6">
        Enviános un mensaje
      </h2>

      {submitted ? (
        <div className="p-8 md:p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
            <Send className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" aria-hidden="true" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-stone-800 mb-2">
            Gracias por escribirnos
          </h3>
          <p className="text-sm md:text-base text-stone-600">
            Te respondemos al instante por WhatsApp. Revisá tu teléfono.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5" noValidate>
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-stone-700 mb-1.5">
              Nombre <span className="text-red-500">*</span>
            </label>
            <Input
              id="contact-name"
              placeholder="Tu nombre"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-stone-700 mb-1.5">
              WhatsApp <span className="text-red-500">*</span>
            </label>
            <Input
              id="contact-phone"
              type="tel"
              placeholder="+54 9 3541 ..."
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="contact-business" className="block text-sm font-medium text-stone-700 mb-1.5">
              Nombre del negocio <span className="text-red-500">*</span>
            </label>
            <Input
              id="contact-business"
              placeholder="Ej: Cabañas del Lago"
              required
              value={form.business}
              onChange={(e) => setForm({ ...form, business: e.target.value })}
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-stone-700 mb-1.5">
              Contanos qué necesitas <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="contact-message"
              placeholder="Hola! Quiero mejorar mi presencia en Google Maps..."
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              aria-required="true"
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            className="w-full h-12 gap-2"
            disabled={loading}
            aria-label="Enviar mensaje de contacto"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            ) : (
              <Send className="w-4 h-4" aria-hidden="true" />
            )}
            {loading ? "Enviando..." : "Enviar mensaje"}
          </Button>
          <p className="text-xs text-stone-500 text-center">
            Al enviar, te redirigimos a WhatsApp para continuar la conversación.
          </p>
        </form>
      )}
    </div>
  )
}
