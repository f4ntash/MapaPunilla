# Backend

## Proposito
Registrar el estado backend actual para evitar buscar APIs inexistentes.

## Estructura
- No hay backend Express/Mongo en este repo.
- No hay carpeta `server`, `api` propia, modelos, controladores ni conexion a base de datos.
- La app corre como Next.js frontend con rutas de pagina y rutas metadata (`sitemap`, `robots`).

## Flujos principales
- Contacto no persiste datos: `ContactForm` abre WhatsApp con mensaje precargado.
- Precios, servicios y blog son datos locales en archivos TypeScript.
- SEO y sitemap se generan desde codigo Next.js, sin consultas externas.

## Estado global
- No hay estado backend.
- No hay sesiones, auth, cache server custom, jobs ni colas.
- Variables publicas `NEXT_PUBLIC_*` configuran sitio, contacto y precios desde `lib/config.ts`.

## Convenciones
- Si se agrega backend en el futuro, pedir permiso antes de sumar dependencias.
- Validar inputs, devolver status codes correctos y no exponer datos sensibles.
- Preferir rutas Next.js API solo si la necesidad es chica; evaluar Express separado solo si hay motivo real.
- Mantener cualquier controlador limpio y testeable.

## Tecnologias usadas
- Backend dedicado: ninguno.
- Runtime server de Next.js para render/server components y metadata.
- TypeScript disponible.

## Archivos importantes
- `lib/config.ts`: defaults y variables publicas usadas por UI/SEO.
- `app/sitemap.ts`: generacion de sitemap.
- `app/robots.ts`: reglas para crawlers.
- `components/contact/contact-form.tsx`: punto actual de captura/contacto, sin API.
