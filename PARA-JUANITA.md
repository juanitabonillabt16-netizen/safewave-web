# Hola Juanita 💛

Esta es la pagina web de **SafeWave Academy**. Aqui te explico como cambiar
cualquier cosa SIN saber programar.

---

## Como funciona

1. Todo el **texto** del sitio esta en un solo archivo: `lib/content.ts`
2. Todas las **fotos** estan en: `public/images/`
3. Cuando cambias algo, **se publica solo en internet** en menos de 1 minuto

---

## Para cambiar texto

1. Abre Claude Code en tu Mac
2. Pidele: *"Abre el archivo lib/content.ts del proyecto safewave-web"*
3. Dile que cambie lo que quieras. Ejemplos:

> "Cambia el precio del programa Nadador Seguro 90 a $697"

> "El testimonio de Carolina M., agrega una linea que diga 'Es la mejor instructora de Miami'"

> "Cambia mi telefono a 786-555-0000"

> "Agrega una pregunta nueva al FAQ que diga: '¿Tienen clases en invierno?' con respuesta: 'Si, las piscinas calefactadas funcionan todo el año'"

4. Claude lo hace y tu solo apruebas

---

## Para cambiar fotos

1. Pon la foto nueva en tu carpeta `Descargas`
2. Pidele a Claude:

> "Reemplaza la foto juanita-teaching-hero.jpeg con la foto nueva que esta en mi carpeta Descargas que se llama [nombre del archivo]"

3. Claude la copia al sitio

**Importante:** la foto nueva debe tener el MISMO nombre que la vieja. Si quieres
cambiar la foto del Hero (la grande de arriba), tu foto nueva debe llamarse
`juanita-teaching-1.jpeg`.

Lista de fotos actuales:
- `juanita-teaching-1.jpeg` - Foto del Hero (arriba)
- `juanita-teaching-hero.jpeg` - Galeria 1
- `juanita-kids-pool.jpeg` - Galeria 2
- `juanita-toddler.jpeg` - Galeria 3
- `juanita-group.jpeg` - Galeria 4
- `juanita-headshot.jpg` - Tu foto profesional (seccion "Conoce a Juanita")
- `logo-optimized.png` - Logo arriba

---

## Para publicar tus cambios

Cuando termines de cambiar cosas, pidele a Claude:

> "Guarda los cambios y publica el sitio"

Claude hace `git commit` + `git push` y Vercel publica el sitio en 1-2 minutos
automaticamente. Tu sitio en `safewaveacademy.com` se actualiza solo.

---

## Si algo se rompe

No te preocupes. Todo es reversible. Pidele a Claude:

> "Revierte mi ultimo cambio"

O escribele a Christian: 786-... 💛

---

## Cosas que NO debes tocar (por ahora)

- Carpeta `components/` - eso es codigo, lo manejo yo
- Carpeta `app/` - eso es codigo, lo manejo yo
- `package.json`, `next.config.ts`, `tailwind.config` - configuracion tecnica

**Tu solo edita:**
- `lib/content.ts` (todo el texto)
- `public/images/` (fotos)

---

## Que hace cada seccion del sitio

| Seccion | Donde editar |
|---------|--------------|
| Logo + nombre arriba | `lib/content.ts` -> `brand` |
| Menu de navegacion | `lib/content.ts` -> `nav` |
| Hero (arriba, foto + titulo grande) | `lib/content.ts` -> `hero` |
| Barra de credenciales (Cruz Roja, etc) | `lib/content.ts` -> `trustBar` |
| Stats verdes (Florida #1, 88%, 90 dias) | `lib/content.ts` -> `statsBar` |
| Problemas (Mi hijo tiene miedo, etc) | `lib/content.ts` -> `problems` |
| Programa Nadador Seguro 90 | `lib/content.ts` -> `program` |
| Por que SafeWave | `lib/content.ts` -> `whySafeWave` |
| Como funciona (4 pasos) | `lib/content.ts` -> `howItWorks` |
| Galeria de fotos | `lib/content.ts` -> `gallery` |
| Testimonios | `lib/content.ts` -> `testimonials` |
| Conoce a Juanita | `lib/content.ts` -> `about` |
| Preguntas frecuentes (FAQ) | `lib/content.ts` -> `faq` |
| Formulario final + CTA | `lib/content.ts` -> `finalCta` |
| Footer (pie de pagina) | `lib/content.ts` -> `footer` |

---

## Cuando lleguen leads nuevos

Cuando alguien llene el formulario del sitio, va a aparecer automaticamente en:
- Tu GHL (sub-cuenta SafeWave Academy)
- Tag: `website-form`
- Pipeline: SafeWave Academy -> Nuevo Lead
- Te llega notificacion (cuando configuremos el workflow de notificacion)

---

Un beso 💛 — Cualquier cosa, escribele a Christian
