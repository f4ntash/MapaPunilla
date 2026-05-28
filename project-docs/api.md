# API

## Proposito
Documentar integraciones y superficie API actual.

## Estructura
- No existen endpoints internos bajo `app/api`.
- Integracion externa principal: WhatsApp via links `https://wa.me/...`.
- Metadata publica: `/sitemap.xml` desde `app/sitemap.ts` y `/robots.txt` desde `app/robots.ts`.
- Manifest público: `public/manifest.json`.

## Flujos principales
- WhatsApp global: `config.whatsapp.url` arma link con numero y mensaje default.
- WhatsApp custom: `config.whatsapp.link(text)` encodea texto dinamico.
- Formulario contacto: construye mensaje con nombre, negocio y consulta; abre nueva pestana.
- Sitemap: combina páginas estáticas, landings SEO y slugs de `data/blog.ts`.
- Robots: permite `/` y bloquea `/api/`.

## Estado global
- No hay cache API ni estado remoto.
- Config API-like centralizada en `lib/config.ts`.
- Datos consumidos por rutas desde `data/*.ts`.

## Convenciones
- No hardcodear nuevos teléfonos si ya existen en `lib/config.ts`.
- Codificar textos para WhatsApp con `encodeURIComponent`.
- Si se crea `app/api`, actualizar `robots.ts` si cambia la politica de indexacion.
- Mantener URLs absolutas con `config.site.url` para SEO.

## Tecnologias usadas
- Next.js MetadataRoute para sitemap y robots.
- Links externos `wa.me`.
- TypeScript.

## Archivos importantes
- `lib/config.ts`: teléfono, email, URL del sitio, mensajes WhatsApp y precios.
- `app/sitemap.ts`: URLs publicas indexables.
- `app/robots.ts`: reglas crawler.
- `components/contact/contact-form.tsx`: consumo manual de WhatsApp.
- `components/layout/floating-whatsapp.tsx`: CTA flotante.
- `components/layout/mobile-cta.tsx`: CTA mobile.
