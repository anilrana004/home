# 🏔 The Alpine Homestay Jakhol — Next.js Application

**Best Adventure Tourism Village 2024 · Uttarkashi, Uttarakhand**

A production-ready Next.js 14 application for The Alpine Homestay, Jakhol. Built with App Router, Tailwind CSS, Framer Motion, and TypeScript.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v11 |
| Fonts | Next.js Font Optimisation (Cormorant Garamond + DM Sans) |
| Images | Next.js `<Image>` (AVIF + WebP auto) |
| Forms | Formspree + server-side API route |
| Analytics | Google Analytics 4 via `next/script` |
| SEO | Next.js Metadata API + JSON-LD schemas |
| CI/CD | GitHub Actions |
| Hosting | Vercel |

---

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx          Root layout — fonts, GA4, JSON-LD, metadata
│   ├── page.tsx            Main page (assembles all sections)
│   ├── loading.tsx         Branded loading skeleton
│   ├── not-found.tsx       Custom 404 page
│   ├── error.tsx           Client error boundary
│   ├── sitemap.ts          Auto-generated sitemap.xml
│   └── api/
│       └── contact/
│           └── route.ts    Server-side form handler with rate limiting
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      Fixed nav, scroll state, animated mobile menu
│   │   └── Footer.tsx      Multi-column footer with smooth scroll links
│   ├── sections/           18 page sections (one component each)
│   │   ├── Hero.tsx
│   │   ├── AwardStrip.tsx
│   │   ├── About.tsx
│   │   ├── WhyBest.tsx
│   │   ├── JakholVillage.tsx
│   │   ├── RegionTabs.tsx
│   │   ├── Uttarkashi.tsx
│   │   ├── Rooms.tsx
│   │   ├── Amenities.tsx
│   │   ├── Gallery.tsx     Lightbox with keyboard navigation
│   │   ├── Activities.tsx
│   │   ├── Food.tsx
│   │   ├── Treks.tsx
│   │   ├── LocalAttractions.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Location.tsx    Google Maps embed + distance stats
│   │   ├── Host.tsx
│   │   └── Booking.tsx     Full form, validation, Formspree + API route
│   └── ui/
│       ├── MotionWrapper.tsx  Reveal / StaggerReveal / RevealItem
│       ├── BackToTop.tsx
│       └── SectionHeader.tsx
├── data/
│   └── site.ts             Single source of truth for all content
├── hooks/
│   ├── useScrollSpy.ts     Active section detection
│   └── useMediaQuery.ts    Responsive JS hook
├── lib/
│   ├── utils.ts            cn(), scrollTo(), trackEvent(), DIFF_CLASS
│   └── motion.ts           Shared Framer Motion variants
├── middleware.ts           HTTPS, trailing slash, security headers
└── styles/
    └── globals.css         @layer base / components / utilities
```

---

## Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# 1. Clone / download the project
cd alpine-homestay-nextjs

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your GA4 ID and Formspree ID

# 4. Start dev server
npm run dev
# → http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

### Other Commands

```bash
npm run type-check    # TypeScript validation
npm run lint          # ESLint
```

---

## Environment Variables

Create `.env.local` (never commit this file):

```env
NEXT_PUBLIC_SITE_URL=https://www.thealpinehomestay.in
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
```

**Where to get values:**
- `GA_ID`: [analytics.google.com](https://analytics.google.com) → Admin → Data Streams
- `FORMSPREE_ID`: [formspree.io](https://formspree.io) → New Form → Copy ID

---

## Deployment: Vercel (Recommended)

### Option A — GitHub Integration (Recommended)

1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repo → Vercel auto-detects Next.js
4. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_GA_ID` → your GA4 ID
   - `NEXT_PUBLIC_FORMSPREE_ID` → your Formspree ID
5. Add your custom domain: `thealpinehomestay.in`
6. Every push to `main` auto-deploys ✅

### Option B — CLI Deploy

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## SEO Features

- ✅ Next.js Metadata API (title, description, OG, Twitter Card)
- ✅ JSON-LD Structured Data: `LodgingBusiness`, `FAQPage`, `WebSite`, `BreadcrumbList`
- ✅ Auto-generated `sitemap.xml` via `src/app/sitemap.ts`
- ✅ `robots.txt` in `public/`
- ✅ Canonical URL
- ✅ Geo meta tags
- ✅ `next/font` — zero layout shift, no external font flash

### Validate SEO

After deploying:
```
https://search.google.com/test/rich-results        → Test JSON-LD
https://www.opengraph.xyz                          → Test OG image
https://search.google.com/search-console           → Submit sitemap
https://securityheaders.com                        → Check security headers
```

---

## Performance Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.5s | Hero `priority` + `fetchpriority="high"` + AVIF |
| CLS | 0 | All images have explicit `width`/`height` |
| FID/INP | < 100ms | No blocking JS, passive scroll listeners |
| TTFB | < 600ms | Edge CDN via Vercel |
| Lighthouse Perf | ≥ 90 | Code-split, lazy images, font preload |

---

## Adding Content

All text, images, and data live in **`src/data/site.ts`**. To update:

```ts
// Add a new room
export const ROOMS = [
  // ... existing rooms
  {
    id: 'valley',
    name: 'Valley View Room',
    floor: 'Top Floor',
    // ...
  },
]
```

No other file needs to change — the component reads from this data layer automatically.

---

## Security

Security headers configured in both `next.config.ts` and `vercel.json`:
- `Strict-Transport-Security` (HSTS)
- `Content-Security-Policy`
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`

The `/api/contact` route includes:
- IP-based rate limiting (5 req/min)
- Input sanitisation (HTML tag stripping)
- Field validation
- Email format check

---

## Scaling

This is a **static-first** Next.js app served from Vercel's global CDN edge network. It will handle 1M+ requests/year on the free tier. The only stateful part is the form API route — Formspree handles up to 1,000 submissions/month on the paid plan ($8/mo).

For extreme scale, consider:
- `output: 'export'` for 100% static generation
- ISR (Incremental Static Regeneration) if you add a CMS
- Vercel Analytics for real-user monitoring

---

*Built with ♥ for The Alpine Homestay, Jakhol — Best Adventure Tourism Village 2024, Uttarkashi, Uttarakhand.*
