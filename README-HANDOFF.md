# Online Consulting Website — Build Handoff

Astro static site for onlineconsulting.com.au, built from the Build Pack (June 2026).
**Status: build-complete, verified, not yet deployed.**

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
```

A production build of the current state is already in `dist/` for preview (open `dist/index.html` won't work for root-relative links — use `npm run preview` or any static server).

**Deploy (Netlify):** build command `npm run build`, publish directory `dist`. The `_redirects` file ships in `public/` and lands in `dist/` automatically. After connecting the form (see below), submit `dist/sitemap-index.xml` in Search Console.

> Sandbox note: this was built/verified in a Linux sandbox where esbuild's native binary can't run; the sandbox used an `esbuild-wasm` override. The shipped `package.json` has **no** override — a normal `npm install` on macOS/CI works natively.

## What's here

- **21 routed pages** — all 19 Build Pack pages + `/contact/thanks/` (form success) + `/service/va-recruitment-services/` (kept live, out of nav per SEO sheet) + `/privacy-policy/` (content migrated verbatim) + 404.
- **115 blog posts** migrated from WordPress to `src/content/blog/*.md` (slugs preserved, served at `/blog/{slug}/`, internal links rewritten to the new URL map).
- **`public/_redirects`** — all §3 redirects + one line per blog post + extra legacy URLs found in the old sitemaps (`/work/*` projects, `/team/*` profiles, old landing/commerce pages) so nothing 404s.
- **Schema** — Organization + LocalBusiness sitewide; Service/FAQPage/BreadcrumbList per the page decks; BlogPosting on posts; FAQPage deliberately absent on Why One Partner (per its deck).
- **Verified:** clean build (141 pages), titles/metas match SEO sheet §4 exactly, one H1 per page, all internal links resolve, all JSON-LD parses, FAQ content present in served HTML with keyboard-accessible accordions, NAP identical in footer/contact/schema, all redirect targets exist, confirmed stats/prices/quotes render verbatim.

## Open items (slots built, content needed) — search the code for `TODO`

1. **Logo** — text wordmark placeholder in Header/Footer/favicon. Drop the real logo SVG into `public/images/` and swap (see TODOs in `Header.astro`, `Footer.astro`, `favicon.svg`).
2. **Partner logos** — PartnerBar renders text wordmarks; replace with licensed partner logo SVGs (32px, greyscale CSS already in place).
3. **Team photography** [ACTION] — `PhotoPlaceholder` slots on home hero, About, Our People. Name files descriptively (e.g. `sam-crawford-online-consulting.jpg`).
4. **Team roster** — Our People currently lists Sam, Wilma, Jeff. Old site also had Jarrad Peters, Jackie Tuazon, Thanh Le, Richard Hensley, Hannah Sheila Iway, Vince Besavilla — confirm current roster + full bio lines.
5. **Portfolio projects + marketing case study** [ACTION: Jackie/Wilma] — slots on `/work/` and Web Development pillar; do not reuse old /work/ projects; client permission required.
6. **Northern Beaches testimonial** [ACTION] — slot on `/it-support-northern-beaches/`.
7. **Client logo rows** [ACTION] — slots on home, Managed IT pillar, NB page (permission-confirmed logos).
8. **Street address on Contact** [PLACEHOLDER] — suburb-only shown until decided; update `src/lib/site.ts` + map embed.
9. **ABN** [PLACEHOLDER] — slot in footer (`Footer.astro`).
10. **One-business-day reply commitment** [PLACEHOLDER] — wording on `/contact/thanks/`.
11. **Community management inclusion** [PLACEHOLDER] — Social Media page feature list.
12. **Shopify accounting integrations (Xero/MYOB?)** [PLACEHOLDER] — eCommerce page.
13. **Hosting prices** — carried from the current site; confirm rate card before launch.
14. **Testimonial courtesy confirmations** — all quote authors, per the decks.

## Technical notes for launch

- **Netlify Forms:** after first deploy, set the notification email to the helpdesk in Netlify → Forms → notifications. Honeypot (`bot-field`) is enabled; success page moves focus to the confirmation heading.
- **Blog images:** inline/featured images in migrated posts still point at `onlineconsulting.com.au/wp-content/...`. They work while WordPress is up, but **migrate media before decommissioning WP** (download `wp-content/uploads` → `public/images/blog/` and rewrite URLs).
- **Lighthouse:** could not be run in the build sandbox (no Chrome). Static Astro output + system-font-fallback + zero framework JS should land ≥95, but run it on the Netlify preview to confirm (home, one pillar, one child). Consider self-hosting the two primary font weights (TODO in `Base.astro`) if performance needs a nudge.
- **Google Ads page (#1 ranking):** 301 from `/service/google-adwords/` is in `_redirects`; monitor Search Console weekly for 4 weeks post-launch.
- **Ranking turbulence:** Google core update in progress (May 2026 report) — judge rankings at week 6, not week 1.
- **VA Recruitment page:** live at old URL, out of nav. Revisit in 6 months: retire or redirect to `/contact/`.
