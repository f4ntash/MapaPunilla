import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { getAllSlugs, getArticleBySlug } from "@/data/blog"
import { buildMetadata, articleJsonLd } from "@/lib/seo"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${slug}`,
    keywords: article.tags,
    publishedTime: article.publishedTime,
    author: article.author,
  })
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const jsonLd = articleJsonLd({
    title: article.title,
    description: article.description,
    path: `/blog/${slug}`,
    publishedTime: article.publishedTime,
    authorName: article.author,
  })

  const formattedDate = new Date(article.publishedTime).toLocaleDateString(
    "es-AR",
    { year: "numeric", month: "long", day: "numeric" }
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-12 md:py-20">
        <div className="container max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>

          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs font-medium bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {article.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-4">
              {article.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
              <span>{article.author}</span>
            </div>
          </header>

          <div className="prose prose-gray max-w-none">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
