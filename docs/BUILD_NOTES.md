# Build Notes — Moe Kyaw Aung Portfolio

A transparent development log documenting how this portfolio was built, the decisions made, and known limitations. Written for future maintainers (including future-me) who need context beyond what the code comments alone provide.

---

## Development Philosophy

This project was built section-by-section (15 total) rather than as one monolithic dump, with an explicit priority: **honest, verifiable data over impressive-looking placeholder content.** Where source data was incomplete or unverifiable, components were built to clearly flag placeholder state rather than fabricate convincing-looking fake data (fake certificate IDs, invented testimonial names, non-functional social links presented as live).

## Section-by-Section Log

### Section 1 — Scaffold, Navbar, Hero
- Chose React + Vite over CRA for faster dev server cold-starts and smaller config surface
- CSS Modules chosen over styled-components for zero runtime CSS-in-JS overhead
- Particle canvas built with vanilla Canvas 2D API (no library) — kept dependency count low for a decorative effect
- **Known limitation:** Particle count scales with viewport area; very large 4K displays may render more particles than necessary. Consider capping `PARTICLE_COUNT_DIVISOR` scaling at a max width if this becomes a performance issue.

### Section 2 — About, Timeline, Progress Rings
- Career timeline dates (2013–2025) reconstructed from the "nearly 12 years" experience claim in the brief — cross-check these years against actual resume/CV dates before publishing, as they were interpolated, not sourced from an explicit year-by-year history
- SVG ring percentages (Kotlin 96%, Compose 92%, Firebase 90%, CI/CD 85%) are illustrative self-assessment values, not derived from any objective measurement — treat as adjustable, not fixed

### Section 3 — Skills, Project Grid, Lightbox
- **Unresolved:** Project #16 "LEGEND!" has no confirmed identity — currently placeholder-mapped to the `Lens-lite` repo. Update `src/data/projects.js` once clarified.
- Several `image` URLs in `projects.js` point to generic Cloudinary stock/demo assets (car ads, fireworks stock photos) rather than actual app screenshots, since real screenshots weren't provided for most of the 16 listed projects. **This is the single highest-priority content fix before public launch** — mismatched imagery undermines credibility fastest with technical reviewers.

### Section 4 — GitHub Accounts, Organizations
- Original brief listed 43 GitHub Pages URLs with heavy duplication (case-variant repeats of the same handle). Deduplicated to 30 unique entries.
- Deliberately architected as "1 primary profile (prominent) + collapsed archive directory" rather than a flat 43-link wall — this was a professional-credibility judgment call, documented and flagged to the client at build time. **If overridden, see the flat-mode rebuild note in the Section 4 chat log.**
- Organizations section populated with certifying bodies (Programming Hub, Google Developers Launchpad) since no formal employer/organization affiliations were specified.

### Section 5 — Lovable Apps, Email Collection
- ~38 raw Lovable.app URLs deduplicated to 28 unique entries (several exact duplicates existed in the source list).
- 21 email aliases reduced to 1 primary + 19 collapsed alternates for spam-surface reduction and professional clarity. `primaryEmail` in `src/data/emails.js` was **arbitrarily selected** from the list (`@engineer.com`) — confirm this is actually the intended public contact address.

### Section 6 — Certificates
- Source material only fully specified ONE real certificate (C Programming, ID `1720080366600`). The remaining 81 entries (matching the stated category counts) are structural placeholders with `isPlaceholder: true` and no fake verify links.
- **Action required:** populate real names/dates/IDs in `src/data/certificates.js`. The `isPlaceholder` flag automatically controls visual styling — no component changes needed once real data is added.

### Section 7 — Social Bar, Testimonials
- Of ~24 requested social platforms, only 13 had real, confirmed URLs in the source brief. The remaining 8 (Telegram, Instagram, Play Store, TikTok, Reddit, Pinterest, Twitch, WordPress) are marked `pending: true` in `src/data/socials.js` and excluded from the rendered icon bar until real URLs are supplied.
- Testimonials are labeled **representative/sample feedback**, not attributed to real named individuals — no real client quotes were provided in the brief. Replace before claiming these as authentic reviews.

### Section 8 — Service Tiers, FAQ
- Pricing figures ($45/hr, $1,200/project, $2,800/month) are **market-reasonable placeholders**, not confirmed real rates. Verify against actual intended pricing in `src/data/serviceTiers.js`.

### Section 9 — Contact Form, Map
- Form requires a real Formspree (or equivalent) endpoint — `FORM_ENDPOINT` in `ContactForm.jsx` currently points to a placeholder ID and will fail submission until replaced.
- Map embeds use the no-API-key `/maps/embed?pb=` iframe format — approximate coordinates for Tachileik and Bangkok, not pixel-precise pinned addresses.

### Section 10 — Footer, Back-to-Top, Sticky CTA
- Newsletter form shares the same Formspree-dependency pattern as Section 9 — needs its own endpoint ID in `Footer.jsx`.

### Section 11 — Preloader, Custom Cursor, Parallax
- Custom cursor auto-disables on touch devices via `matchMedia('(pointer: coarse)')` — verified logic, but should be re-tested on actual touch hardware post-deploy, not just browser dev-tools device emulation.

### Section 12 — i18n, Blog, Resume
- Burmese translation dictionary covers ~45 high-visibility strings (nav, hero, about headers, form labels). **Not** a full sitewide translation — most section body copy (FAQ answers, blog excerpts, testimonials) remains English-only regardless of language toggle state. This is disclosed in-app via the `LangBanner` component's honest framing.
- MDX blog rendering requires `@mdx-js/rollup` to be installed and configured in `vite.config.js` — until then, `BlogPost.jsx` gracefully falls back to excerpt-only display rather than crashing on a missing import.
- `public/resume.pdf` **does not exist** in the initial build — it's a content file only you can supply.

### Section 13 — Performance
- Vite manual chunking splits React, Framer Motion, and Lucide into separate cacheable vendor bundles.
- `LazyImage` component standardizes lazy-loading + reserves aspect-ratio space to prevent Cumulative Layout Shift — but was only retroactively demonstrated on `ProjectCard.jsx`; the same swap should be manually applied to `Hero.jsx`, `BlogCard.jsx`, and `Lightbox.jsx` (pattern shown, not redundantly re-pasted across all four files).
- **No live Lighthouse audit was run** — these are correct, industry-standard techniques applied preemptively, not measured results. Run a real audit post-deploy.

### Section 14 — SEO, Accessibility
- Structured data (JSON-LD) uses `moekyawaung.dev` as a placeholder domain throughout — **must** be replaced with the real production domain in `index.html`, `sitemap.xml`, `robots.txt`, and `StructuredData.jsx` before launch, or search engines will index the wrong canonical URLs.
- Self-audit identified 8 accessibility issues (2 High severity: keyboard focus visibility conflict with custom cursor, missing skip-link). Fixes applied and documented in `docs/A11Y_AUDIT.md`.
- **No automated accessibility tool (axe, WAVE) was run** — this was a manual code-level review. Recommended as a post-deploy follow-up.

### Section 15 — Deployment, README
- Deployment instructions provided for Vercel, Netlify, and GitHub Pages — none were actually executed/tested in this conversation, since no live hosting account access exists here. Commands are standard/correct for each platform as of early 2025 tooling versions.

---

## Known Technical Debt

1. Hook-inside-`.map()` pattern in `StatsCounter.jsx` (Section 2) works safely given the static array but technically violates the React "rules of hooks" ESLint rule — flagged as a refactor candidate if strict lint compliance is required.
2. No test suite exists (Vitest/React Testing Library) — see Roadmap in main README.
3. Anchor-based (`#section`) navigation means individual sections aren't independently crawlable/indexable pages — acceptable for a single-page portfolio, but limits per-section SEO value compared to true routed pages.

## Version History

| Version | Date | Notes |
|---|---|---|
| 1.0 | 2025 | Initial 15-section build, all core features implemented |

