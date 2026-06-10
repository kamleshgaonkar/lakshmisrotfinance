## Lakshmi Srot Finance Solutions — Marketing Website

A polished multi-page site built on TanStack Start, using the uploaded logo, a logo-matched gold + crimson palette on warm cream, Poppins typography, and stacked full-width sections.

### Pages (separate routes, each with own SEO metadata)

1. **/** — Home: Hero, intro about, services preview (top 4), why-choose, 4-step process, testimonials, CTA, contact strip
2. **/about** — Full About Us content + values + why-choose-us
3. **/services** — All 9 services as detailed cards
4. **/process** — 4-step process expanded + FAQ-style trust content
5. **/contact** — Address, phones, emails, contact form, map embed placeholder

Shared `Header` (logo + nav + "Talk to Expert" CTA) and `Footer` (tagline, quick links, contact, social) rendered from `__root.tsx`.

### Design System

- **Palette (tokens in `src/styles.css`):**
  - Background cream `#faf8f3`, ink `#1a1a1a`
  - Primary gold `#c9a84c` (logo gold)
  - Accent crimson `#c4214b` (logo lotus/banner)
  - Muted warm gray + subtle gold tint for cards
  - Gradients: `--gradient-gold` (gold → soft champagne), `--gradient-hero` (cream → faint gold wash)
  - Shadows: soft elegant shadow tinted with gold
- **Typography:** Poppins (loaded via `<link>` in `__root.tsx` head), mapped to `--font-display` and `--font-body` in `@theme`. Bold weights for headings, light/regular for body.
- **Composition:** Stacked full-width sections with generous vertical rhythm, centered max-w-6xl content, gold hairline dividers, lotus/diamond accent motif echoing the logo.

### Logo Handling

Upload `logo (1).png` via `lovable-assets create` → `src/assets/logo.png.asset.json`. Import and use in Header (h-12) and Footer.

### Sections / Components

- `Hero` — Large headline, subhead, 4 trust checkmarks (gold check icons), dual CTA (Call + WhatsApp/contact), phone numbers prominent, subtle gold radial gradient background
- `AboutSection` — Two-column: copy + stat/feature card
- `ServicesGrid` — 9 service cards with Lucide icons (Building2, User, Home, Landmark, GraduationCap, RefreshCw, Car, ShieldCheck, Gavel) in gold circles
- `WhyChooseUs` — 7 benefits in a 2-col checklist with gold check icons
- `ProcessSteps` — 4 numbered cards with connecting line, gold step badges
- `Testimonials` — 3 quote cards with crimson quote marks
- `ContactSection` — Address block, two phone numbers, two emails, website, simple form (name/phone/service/message); form is presentational only (no backend) — submit shows toast
- `Footer` — Logo, tagline, quick nav, contact, copyright

### Technical

- Routes: `index.tsx`, `about.tsx`, `services.tsx`, `process.tsx`, `contact.tsx` under `src/routes/`
- Layout components: `src/components/layout/Header.tsx`, `Footer.tsx`
- Section components under `src/components/sections/`
- Each route sets distinct `head()` meta (title, description, og:title, og:description); home includes og:image from logo asset URL
- Tailwind v4 tokens in `src/styles.css` `@theme inline` block; Poppins via `<link>` in root head
- Lucide icons; shadcn Button/Card/Input/Textarea where applicable
- No backend, no Lovable Cloud (purely marketing). Contact form is client-side with toast feedback; phone/email use `tel:` / `mailto:` links

### Out of scope (can add later)

- Functional contact form submission (would require Lovable Cloud + email)
- Blog/news section
- Multi-language support
- Live chat / WhatsApp widget integration
