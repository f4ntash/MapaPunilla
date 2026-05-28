# Systems

## Proposito
Documentar sistemas transversales actuales: contenido, SEO, contacto, pricing y estilos.

## Estructura
- Contenido: `data/services.ts`, `data/pricing.ts`, `data/blog.ts`, `data/faq.ts`, `data/testimonials.ts`, `data/whyChooseUs.ts`.
- SEO: `lib/seo.ts`, `app/layout.tsx`, páginas con `buildMetadata`.
- Contacto: `lib/config.ts` + CTAs WhatsApp/teléfono.
- Estilos: `app/globals.css`, Tailwind y componentes UI.

## Flujos principales
- Servicios: `data/services.ts` define cards y copy principal; páginas importan componentes visuales.
- Pricing: `data/pricing.ts` toma precios desde `config.prices` y formatea con `config.formatPrice`.
- Blog: `data/blog.ts` es fuente única; `generateStaticParams` crea rutas por slug.
- Landings SEO: cada página pasa copy, FAQs y breadcrumbs a `SeoLandingPage`.
- JSON-LD: layout, home, blog y landings inyectan schema con helpers de `lib/seo.ts`.
- Contacto: todos los CTAs deben apuntar a teléfono/WhatsApp configurado.

## Estado global
- Configuracion central en `lib/config.ts`.
- Contenido estatico versionado en `data/`.
- Sin CMS, base de datos ni panel admin.
- Sin gameplay; no aplica Godot ni sistemas de juego.

## Convenciones
- Actualizar `data/*` antes de duplicar copy en componentes.
- Si se agrega una ruta indexable, revisar metadata y sitemap.
- Si se agrega una landing SEO, reutilizar `components/services/seo-landing.tsx`.
- Mantener copy en espanol argentino y foco en turismo del Valle de Punilla.
- Usar defaults de config solo como fallback; preferir env vars para datos variables.

## Tecnologias usadas
- Next.js Metadata API.
- JSON-LD Schema.org.
- Tailwind CSS.
- TypeScript data modules.
- WhatsApp deep links.

## Archivos importantes
- `lib/seo.ts`: builders de metadata, FAQ, breadcrumbs, article y service schema.
- `app/layout.tsx`: schema global Organization/LocalBusiness/Service.
- `app/page.tsx`: FAQ schema de home.
- `components/services/seo-landing.tsx`: schema y layout de landings.
- `data/blog.ts`: articulos, slugs y lookup por slug.
- `data/pricing.ts`: planes comerciales.
- `data/services.ts`: catalogo de servicios.
