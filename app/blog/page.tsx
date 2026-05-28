import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, Tag } from "lucide-react"
import { blogArticles } from "@/data/blog"
import { buildMetadata } from "@/lib/seo"

const meta = {
  title: "Últimas guías de marketing turístico en Punilla",
  description:
    "Consejos prácticos de marketing digital para hoteles, cabañas y restaurantes del Valle de Punilla. Google Maps, SEO local, WhatsApp Business y más.",
  path: "/blog",
  keywords: [
    "blog marketing punilla",
    "consejos google maps",
    "marketing turismo cordoba",
    "blog mapa punilla",
    "seo local punilla",
  ],
}

export const metadata: Metadata = buildMetadata(meta)

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50 to-white py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Últimas guías para negocios turísticos de Punilla
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Consejos prácticos y actuales para que tu hotel, cabaña o restaurante
              del valle sea más fácil de encontrar, entender y contactar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-xl border shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs font-medium bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(article.publishedTime).toLocaleDateString(
                        "es-AR",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
