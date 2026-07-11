## 🚀 Deployment Options

### Option A — Vercel (Recommended, zero-config for Vite)
```bash
npm install -g vercel
vercel
# Follow prompts — auto-detects Vite, builds and deploys in ~60 seconds
```
Then in Vercel dashboard: **Settings → Domains** to attach your real domain (replacing the `moekyawaung.dev` placeholder used in Sections 13–14's meta tags/sitemap).

### Option B — Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
# Build command: npm run build
# Publish directory: dist
```
Netlify Forms can directly replace the Formspree wiring in `ContactForm.jsx`/`Footer.jsx` if preferred — swap the `fetch()` call for a native `<form data-netlify="true">` submission instead.

### Option C — GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build
npm run deploy
```
**Important:** GitHub Pages serves from a subpath unless using a custom domain — add `base: '/your-repo-name/'` to `vite.config.js` if deploying here without a custom domain, or React Router links will 404.

## ✅ Master Action-Item Checklist (Everything Flagged Across 15 Sections)

Before this goes live, work through this list — I've grouped by urgency:

**🔴 Blocking (site will have visible bugs/broken links without these):**
- [ ] Add real `public/resume.pdf` (Section 12) — download button currently checks for it and gracefully hides itself if missing, but you want it present
- [ ] Replace `FORM_ENDPOINT` in `ContactForm.jsx` with a real Formspree/Netlify endpoint (Section 9) — form currently validates but cannot actually send
- [ ] Replace `NEWSLETTER_ENDPOINT` in `Footer.jsx` similarly (Section 10)
- [ ] Replace placeholder domain `moekyawaung.dev` across `index.html`, `sitemap.xml`, `robots.txt`, `StructuredData.jsx` with your real domain (Sections 13–14)

**🟡 Credibility (site works, but content accuracy matters for a senior-dev portfolio):**
- [ ] Populate the 81 placeholder certificates in `certificates.js` with real names/dates/IDs (Section 6), or remove placeholder count claims from marketing copy
- [ ] Confirm or replace the 4 sample testimonials in `testimonials.js` — currently labeled honestly as "representative feedback," not attributed to real named people (Section 7)
- [ ] Verify/adjust service pricing in `serviceTiers.js` — currently reasonable-market placeholders, not your actual confirmed rates (Section 8)
- [ ] Review `projects.js` image mappings — several use generic Cloudinary stock assets (fireworks, car ads) rather than real app screenshots (Section 3)
- [ ] Tell me what project **#16 "LEGEND!"** actually is — still mapped to a placeholder guess (Section 3)
- [ ] Supply real URLs for the 8 pending social platforms (Telegram, Instagram, Play Store, TikTok, Reddit, Pinterest, Twitch, WordPress) or confirm removal (Section 7)
- [ ] Decide: keep the GitHub/Lovable archive sections collapsed-by-default (my recommendation) or force them flat/prominent (Sections 4–5)

**🟢 Optional polish:**
- [ ] Install `@mdx-js/rollup` and write full long-form content for the 4 blog posts (currently excerpt-only fallback) (Section 12)
- [ ] Expand the Burmese translation dictionary beyond the ~45 keys covered — remaining component text still renders in English only (Section 12)
- [ ] Run a live Lighthouse audit + WAVE/axe accessibility scan post-deployment to catch anything a static code review couldn't (Sections 13–14)

## 📊 Final Build Summary

| Metric | Count |
|---|---|
| Total sections delivered | 15 / 15 |
| React components built | 45+ |
| Data files | 12 |
| Custom hooks | 5 |
| Interactive features from original spec | 20 / 20 implemented |
| Real, verified external links (GitHub/social/certs) | 40+ |
| Explicitly flagged placeholder/action items | 15 |

