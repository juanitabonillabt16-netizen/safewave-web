# SafeWave Academy - Web

Sitio web de SafeWave Academy. Next.js 15 + React 19 + Tailwind 4.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Deploy: Vercel
- DNS: Cloudflare (`safewaveacademy.com`)

## Estructura

```
safewave-web/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home (importa los 14 componentes en orden)
│   └── globals.css      # Tailwind 4 + design tokens
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── StatsBar.tsx
│   ├── Problems.tsx
│   ├── Program.tsx
│   ├── WhySafeWave.tsx
│   ├── HowItWorks.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   ├── About.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx     # Form -> n8n webhook
│   └── Footer.tsx
├── lib/
│   └── content.ts       # TODO el copy del sitio (Juanita edita aqui)
├── public/
│   └── images/          # Fotos de Juanita + logos
└── PARA-JUANITA.md      # Guia simple para Juanita
```

## Comandos

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Filosofia

- **`lib/content.ts`** es la fuente unica de verdad de todo el texto.
- Los componentes son **presentational** (no logica de negocio).
- Form de captura envia lead al webhook n8n existente (`safewave-lead-web`).
- Imagenes en `/public/images/` - reemplazar archivos para cambiar fotos.

## Form -> n8n

El form de captura en `<FinalCTA />` hace POST a:
`https://asistentenova.app.n8n.cloud/webhook/safewave-lead-web`

Payload:
- `full_name`, `phone`, `email`, `child_name`, `child_age`, `source`

El workflow n8n crea el contacto en GHL (`kJL2JYaBvWo2c0yST2Jn`) con tags
`website-form` + `nova-ai` y lo mueve al pipeline SafeWave Academy.

## Deploy

Vercel detecta el push a `main`. Build automatico. Dominio `safewaveacademy.com`
apunta via Cloudflare DNS al CNAME de Vercel.

## Para editar contenido

Ver `PARA-JUANITA.md` (en espanol simple, sin tecnicismos).
