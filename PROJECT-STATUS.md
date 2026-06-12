# OC Website Rebuild — Status & Handover for Team Review
**Updated 12 June 2026.** Upload this to the claude.ai "OC Website" project knowledge so the team has full context. The build pack decks (design system, SEO master sheet, page decks) remain the underlying spec; this document records what was BUILT and what changed along the way.

## Where everything lives

| Thing | Location |
|---|---|
| Staging site (live preview) | https://oc-website-rebuild.netlify.app |
| Source code | github.com/samc-oc/oc-website (branch `main`) |
| Hosting | Netlify project `oc-website-rebuild` (OC team) — auto-deploys every push to `main` (~1 min) |
| Form notifications | support@onlineconsulting.com.au, subject "web enquiry" |

**How changes flow:** edit → commit → push to `main` → Netlify rebuilds automatically. Copy lives in plain `.astro` page files and a few small data files (map below) — safe for non-developers to edit via the GitHub web editor for text-only changes.

## Where to find the copy (for feedback/edits)

| Page | File |
|---|---|
| Home | `src/pages/index.astro` |
| Why One Partner | `src/pages/why-one-partner.astro` |
| Managed IT pillar | `src/pages/managed-it-services/index.astro` |
| IT child pages | `src/pages/managed-it-services/*.astro` |
| NB location page | `src/pages/it-support-northern-beaches.astro` |
| Marketing pillar + children | `src/pages/digital-marketing/*.astro` |
| Web Dev pillar + children | `src/pages/web-development/*.astro` |
| About / People / Work / Contact | `src/pages/{about,people,work,contact}.astro` |
| Team roster, roles, bios, photos | `src/lib/team.ts` |
| Nav, footer links, NAP, phone, ABN | `src/lib/site.ts` |
| Blog posts (115 migrated) | `src/content/blog/*.md` |
| Page titles & metas | top of each page file (`title` / `description`) — must match SEO master sheet §4 |
| Redirects | `public/_redirects` |

## Decisions made during the build (so nobody re-litigates them blind)

1. **Logo** — original dotted-globe device redeveloped as vector SVG, transparent (no background tile, per Sam), original sky-blue dot ramp; two-weight Manrope wordmark (ink-navy "online", grey-navy "consulting"). Single source: `src/lib/globe.ts`. Used in header, footer, favicon, hero brand panel, CTA banner motifs.
2. **NAP / addresses** — public location identity is **Allambie Heights NSW (suburb only)**, matching the Google Business Profile; this anchors the Northern Beaches local-SEO strategy. The registered office (Level 15, 1 Farrer Place, Sydney NSW 2000 — public/virtual address) appears ONLY as a secondary line on Contact and is deliberately excluded from LocalBusiness schema and footer. **Do not "fix" this by adding the CBD address elsewhere — it would break NAP consistency.** ABN 28 140 582 681 is in the footer.
3. **Team copy honesty** — all "no offshore call centres" / "Sydney office" claims replaced after Sam's correction (Sydney: Sam + Jarrad; most of the team is OC's own staff in the Philippines, plus Vietnam; Luke is a contractor and not advertised). Positioning is now: our own dedicated team (not an outsourced call centre), led from Sydney's Northern Beaches. On-site claims remain (true).
4. **Team photos** — migrated from the old site and localised in `public/images/team/`. Still flagged for replacement by the new consistent photo shoot.
5. **VA Recruitment page** — kept live at `/service/va-recruitment-services/`, out of all navigation (ranks #24 "va sydney"); revisit ~Dec 2026: retire or redirect.
6. **Blog** — all 115 posts migrated verbatim, slugs preserved at `/blog/{slug}/`, internal links rewritten to the new URL map.

## 301 redirect map — STATUS: implemented, needs final verification

`public/_redirects` already contains: every row from SEO master sheet §3, one rule per blog post (115), plus legacy URLs found in the old sitemaps that §3 didn't cover (`/work/*` project pages → /work/, `/team/*` → /people/, old landing pages → nearest new page, old commerce/utility pages → /contact/ or /). All targets verified to exist.

**Remaining 301 work for the team (pre-launch):**
- [ ] Review the "additions beyond §3" block at the bottom of `_redirects` — sanity-check each mapping
- [ ] After DNS cutover: crawl the full old-URL list (old sitemap.xml is saved knowledge) → confirm every URL 301s once (no chains) to the right page
- [ ] Watch `/digital-marketing/google-ads/` in Search Console **weekly for 4 weeks** — it carries the #1 "google ads northern beaches" ranking

## Outstanding content items (slots built, marked `TODO` in code)

1. Portfolio projects (4–6) + marketing case study with real figures — Jackie/Wilma to nominate; client permission required (`/work/`, Web Dev pillar)
2. Northern Beaches client testimonial (`/it-support-northern-beaches/`)
3. Client logo rows — home, Managed IT pillar, NB page (permission confirmed)
4. Partner logo SVGs — PartnerBar currently renders styled text wordmarks
5. New team/office photography shoot (replaces migrated old photos + hero brand panel)
6. Testimonial courtesy confirmations with each quoted author
7. Hosting package prices — confirm current rate card ($264/$99/$33 + GST carried from old site)
8. Community management inclusion (Social Media page) and Shopify accounting integrations (eCommerce page) — confirm wording

## Go-live runbook (when feedback is in and content slots filled)

1. Freeze content; final `git push`; confirm Netlify deploy green
2. Lighthouse pass on home + one pillar + one child (target ≥95) — run on the staging URL
3. Test contact form end-to-end (submission arrives at support@ with subject "web enquiry")
4. Add custom domain in Netlify (onlineconsulting.com.au + www) → update DNS at the registrar → SSL auto-provisions. Canonicals already point to onlineconsulting.com.au
5. Decommission WordPress AFTER confirming the new site serves on the domain (team photos already localised; no other dependency on wp-content)
6. Submit `https://onlineconsulting.com.au/sitemap-index.xml` in Search Console; verify robots.txt
7. Crawl old URL list → verify all 301s (step above)
8. Confirm GBP details still match site NAP exactly (Allambie Heights, +61 2 8459 7882); start the review-generation push (warm LinkedIn recommenders — SEO sheet §2)
9. Expect 2–6 weeks ranking turbulence (Google core update in progress per the May 2026 report) — **judge at week 6, not week 1**

## Suggested team workflow in the claude.ai project

- Add the GitHub repo (`samc-oc/oc-website`) as a synced source in the project so chats can read the live copy and propose exact edits
- Team reviews the staging site page-by-page against the decks; collect feedback as: page → section → current copy → proposed copy
- Text-only changes can be made directly in the GitHub web editor (Netlify deploys automatically); structural/design changes come back to a Cowork session with this folder
