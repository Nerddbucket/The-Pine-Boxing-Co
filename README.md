# The Pines Boxing Co.

Single-page marketing site for **The Pines Boxing Co.** — Astro, React islands, Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Edit content

All copy, nav links, classes, schedule, and contact info live in one file:

**`src/config/site.ts`**

No need to touch section components for text updates.

## Contact form

1. Create a form at [formspree.io](https://formspree.io)
2. Copy `.env.example` to `.env`
3. Set `PUBLIC_FORMSPREE_ID=your_form_id`

Without an ID, the form shows a success message locally (demo mode).

## Build & deploy

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to **Cloudflare Pages**, **Netlify**, or **Vercel**. Set the production URL in `astro.config.mjs` (`site`) and `src/config/site.ts` (`url`).

## Replace placeholder assets

- Logo lives at `public/logo.png` (optimized 256px). Full-res source: `public/logo-full.png`
- Hero & mission grid use stock gym photos (Unsplash); your brand photos (`hero-hand-wrap.png`, `heavy-bag.png`) appear side-by-side in the **Brand Showcase** section below About
- Update phone, address, email, and hours in `site.ts`
- Replace Privacy/Terms placeholder pages before launch

## Project structure

```
src/
  config/site.ts       # All content
  components/
    layout/            # Header, Footer, Logo
    sections/          # Page sections
    ui/                # Button, SectionTitle, etc.
  islands/             # MobileNav, ContactForm (React)
  layouts/BaseLayout.astro
  pages/index.astro    # Composes sections
```

## Brand tokens

| Token | Hex |
|-------|-----|
| Black | `#0A0A0A` |
| Charcoal | `#1A1A1A` |
| Red | `#E11D2E` |
| White | `#FFFFFF` |
| Muted | `#A3A3A3` |

Fonts: **Bebas Neue** (display), **Inter** (body).
