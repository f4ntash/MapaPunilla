# Frontend

## Proposito
Describir la UI React/Next para hacer cambios chicos sin releer todo el proyecto.

## Estructura
- `app/*/page.tsx`: páginas por ruta.
- `components/home/`: secciones de la home.
- `components/services/`: grilla de servicios, cards y landing SEO reusable.
- `components/pricing/`: hero, grilla, cards y FAQ de precios.
- `components/contact/`: hero, form, info y mapa.
- `components/layout/`: navbar, footer, WhatsApp flotante y CTA mobile.
- `components/ui/`: primitives simples (`button`, `card`, `input`, `textarea`, `badge`).
- `components/shared/`: wrappers y elementos visuales compartidos.

## Flujos principales
- Navegación: `Navbar` consume `data/navigation.ts`, maneja menú mobile y bloqueo de scroll.
- CTA: botones usan teléfono/WhatsApp desde `lib/config.ts`.
- Formularios: contacto valida con campos `required` nativos y abre `wa.me`.
- Secciones: las páginas importan componentes ya separados; mantener esa composición.
- Responsive: layout con clases Tailwind `md`, `lg`, grids y `container`.

## Estado global
- No hay estado global frontend.
- Estado local:
  - `Navbar`: `isOpen`, `scrolled`.
  - `ContactForm`: `submitted`, `loading`, `form`.
  - `useInView`: deteccion una vez con `IntersectionObserver`.

## Convenciones
- Mantener componentes simples y orientados a presentación.
- Mover contenido repetible a `data/` cuando sea estable y reutilizable.
- Evitar logica pesada dentro del render.
- Reusar `Button`, `Input`, `Textarea`, `Card` cuando aplique.
- Usar `lucide-react` para iconos.
- Mantener accesibilidad básica: labels, aria-labels, focus visible, `rel` en links externos.
- No tocar estilos globales salvo que sea necesario para una necesidad transversal.

## Tecnologias usadas
- React hooks.
- Next.js App Router.
- Tailwind CSS 4.
- lucide-react.
- Base UI/shadcn estan en dependencias; verificar patrones existentes antes de sumar UI nueva.

## Archivos importantes
- `app/globals.css`: tema, container, gradientes, animaciones y focus.
- `components/layout/navbar.tsx`: navegación desktop/mobile.
- `components/layout/footer.tsx`: links, contacto y redes.
- `components/contact/contact-form.tsx`: flujo de contacto a WhatsApp.
- `components/services/seo-landing.tsx`: template para landings SEO.
- `components/ui/button.tsx`: variantes de botones.
