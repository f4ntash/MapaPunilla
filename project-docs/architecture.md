# Architecture

## Proposito
Documentar la arquitectura minima de Mapa Punilla para orientar cambios futuros con bajo consumo de contexto.

## Estructura
- `app/`: rutas Next.js App Router, metadata, sitemap, robots y layout global.
- `components/`: componentes React agrupados por pagina o dominio visual.
- `data/`: contenido y configuracion editorial tipada en TypeScript.
- `lib/`: helpers compartidos de configuracion, SEO, clases CSS y hooks.
- `public/`: assets publicos livianos y `manifest.json`.
- `project-docs/`: documentacion tecnica corta.

## Flujos principales
- Home: `app/page.tsx` compone secciones desde `components/home/*`.
- Rutas comerciales: paginas en `app/servicios`, `app/precios`, `app/nosotros`, `app/contacto`.
- Landing SEO: rutas bajo `app/servicios/*/page.tsx` pasan copy y FAQs a `components/services/seo-landing.tsx`.
- Blog: `data/blog.ts` alimenta `/blog` y `/blog/[slug]` con generacion estatica.
- Contacto: `components/contact/contact-form.tsx` abre WhatsApp con texto precargado.
- SEO tecnico: `app/layout.tsx`, `lib/seo.ts`, `app/sitemap.ts` y `app/robots.ts`.

## Estado global
- No hay store global.
- Estado local con hooks en componentes cliente: navbar mobile/scrolled, formulario de contacto, animaciones in-view.
- Configuracion compartida en `lib/config.ts` via env vars `NEXT_PUBLIC_*` con defaults.

## Convenciones
- TypeScript en todo el codigo de app.
- App Router de Next.js con Server Components por defecto.
- Usar `"use client"` solo cuando hay estado, efectos o APIs del navegador.
- Contenido reusable vive en `data/`; helpers en `lib/`.
- SEO por pagina con `buildMetadata`.
- No agregar dependencias sin permiso.

## Tecnologias usadas
- Next.js 16, React 19, TypeScript.
- Tailwind CSS 4 con utilidades globales.
- lucide-react para iconos.
- clsx + tailwind-merge para combinar clases.
- framer-motion esta instalado, revisar uso antes de tocar animaciones.

## Archivos importantes
- `app/layout.tsx`: layout global, metadata base, JSON-LD principal y CTAs persistentes.
- `app/page.tsx`: composicion de home.
- `lib/config.ts`: datos de sitio, WhatsApp, precios y zonas.
- `lib/seo.ts`: metadata, JSON-LD, sitemap pages y ubicaciones.
- `data/services.ts`: servicios comerciales.
- `data/pricing.ts`: planes y precios.
- `data/blog.ts`: articulos y slugs.
