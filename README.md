<div align="center">

# ⭐ Moe Kyaw Aung Portfolio ⭐

### Senior Android Developer — Personal Portfolio & Developer Showcase

**Terminal-inspired, dark-mode developer portfolio built with React**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-00ff9c?style=for-the-badge)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](./CONTRIBUTING.md)

[Live Demo](#-live-demo) · [Report Bug](https://github.com/Dev-moe-kyawaung/moe-kyaw-aung-portfolio/issues) · [Request Feature](https://github.com/Dev-moe-kyawaung/moe-kyaw-aung-portfolio/issues)

</div>

---

## 📖 About

**Moe Kyaw Aung Portfolio** is a full-scale, production-grade personal portfolio for **Moe Kyaw Aung**, a Senior Android Developer with nearly 12 years of hands-on experience building secure, scalable, and user-friendly mobile applications using **Kotlin**, **Jetpack Compose**, and **Firebase**.

Built entirely in **React** with a **terminal/hacker aesthetic** — monospace typography, a midnight dark-mode palette, and code-inspired UI patterns — this project showcases senior-level frontend architecture across 15 fully modular sections, from an animated particle-canvas hero through structured SEO data and full WCAG accessibility compliance.

> Every section was built with verified, real data. No fabricated testimonials, no fake certificate IDs, no dead social links — placeholder content is explicitly labeled as such throughout the codebase until real data is supplied.

---

## 🖼️ Live Demo

🔗 **[View Live Site](#)** *(add your deployed URL here once live)*

---

## ✨ Features

### Core Sections
- 🎯 **Animated Hero** — Interactive particle-canvas background, typewriter effect, profile spotlight
- 📊 **Advanced About** — Animated career timeline (2013–2025), SVG progress rings (Kotlin / Compose / Firebase / CI-CD), scroll-triggered stat counters
- 🛠️ **Skills Cloud** — 28+ technology chips with staggered scroll animations
- 📱 **App Collection** — Masonry-grid showcase of 16 production-style Android & web projects
- 🐙 **GitHub Presence** — Primary profile spotlight + searchable archive directory
- 🚀 **Lovable Prototypes** — Curated rapid-prototype deployment showcase
- 🏆 **Certificates** — Searchable, filterable credential system across 9 categories
- 💬 **Testimonials** — Auto-advancing, keyboard-accessible carousel
- 💰 **Service Tiers** — Three-tier freelance engagement pricing model
- ❓ **FAQ Accordion** — Accessible single-open accordion pattern
- 📬 **Contact Form** — Real-time validated form with Formspree integration
- 🗺️ **Map Embed** — Dual-location (Tachileik 🇲🇲 / Bangkok 🇹🇭) Google Maps integration
- 📰 **Blog** — MDX-ready technical writing section
- 🌏 **Bilingual Support** — Full English / Burmese (မြန်မာ) language toggle

### Interactive & UX Features

| Feature | Status | Feature | Status |
|---|---|---|---|
| Dark / Light mode toggle | ✅ | Newsletter subscription | ✅ |
| Custom animated cursor | ✅ | Preloader / boot animation | ✅ |
| Typing animation (hero) | ✅ | Sticky call-to-action bar | ✅ |
| Particle canvas background | ✅ | Back-to-top button | ✅ |
| Smooth scroll navigation | ✅ | Responsive hamburger menu | ✅ |
| Scroll-triggered fade-ins | ✅ | Resume PDF download | ✅ |
| Parallax scrolling layers | ✅ | Image lightbox gallery | ✅ |
| Animated statistic counters | ✅ | Contact form validation | ✅ |

### Technical Excellence
- ⚡ **Performance** — Code-split routes, manual vendor chunking, lazy-loaded images with CLS prevention, `rAF`-throttled scroll handlers
- ♿ **Accessibility** — WCAG 2.1 AA color contrast, focus-trapped modals, skip-to-content link, full ARIA labeling
- 🔍 **SEO** — JSON-LD structured data (Person / WebSite / Breadcrumb schemas), `sitemap.xml`, `robots.txt`, Open Graph & Twitter Card meta tags
- 📱 **PWA-ready** — Web manifest for installable mobile experience

---

## 🖥️ Tech Stack

**Frontend**
- [React 18](https://react.dev) — Component architecture
- [Vite](https://vitejs.dev) — Build tooling & dev server
- [React Router](https://reactrouter.com) — Client-side routing
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [Lucide React](https://lucide.dev) — Icon system
- CSS Modules — Scoped component styling

**Integrations**
- [Formspree](https://formspree.io) — Contact & newsletter form handling
- Google Maps Embed API — Location display

**Deployment**
- Vercel / Netlify / GitHub Pages compatible

---

## 📂 Project Structure

```
moe-kyaw-aung-portfolio-1.3/
├── public/
│   ├── resume.pdf
│   ├── sitemap.xml
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── components/        # 20+ modular feature components
│   │   ├── Navbar/  Hero/  About/  Skills/  ProjectGrid/
│   │   ├── GitHubCollection/  Organizations/  LovableCollection/
│   │   ├── EmailCollection/  Certificates/  SocialBar/
│   │   ├── Testimonials/  ServiceTiers/  FAQ/  ContactForm/
│   │   ├── MapEmbed/  Footer/  BackToTop/  StickyCTA/
│   │   ├── Preloader/  CustomCursor/  ParallaxLayer/
│   │   ├── LangSupport/  Blog/  LazyImage/  SEO/
│   ├── data/               # Content data layer
│   ├── context/             # Theme & language providers
│   ├── hooks/                # Custom hooks
│   ├── pages/                 # Route-level assemblies
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
├── LICENSE
├── CONTRIBUTING.md
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+`
- npm `v9+`

### Installation

```bash
# Clone the repository
git clone https://github.com/Dev-moe-kyawaung/Moe-Kyaw-Aung-Portfolio-1.3.git
cd moe-kyaw-aung-portfolio-1.3

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:5173` to view it locally.

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FORMSPREE_CONTACT_ID=your_contact_form_id
VITE_FORMSPREE_NEWSLETTER_ID=your_newsletter_form_id
```

### Build for Production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

---

## 📦 Deployment

<details>
<summary><strong>▶ Deploy to Vercel (Recommended)</strong></summary>

```bash
npm install -g vercel
vercel
```
Auto-detects Vite configuration and deploys in under a minute.
</details>

<details>
<summary><strong>▶ Deploy to Netlify</strong></summary>

```bash
npm install -g netlify-cli
netlify deploy --prod
```
- Build command: `npm run build`
- Publish directory: `dist`
</details>

<details>
<summary><strong>▶ Deploy to GitHub Pages</strong></summary>

```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```
Add `base: '/moe-kyaw-aung-portfolio-1.3/'` to `vite.config.js` if not using a custom domain.
</details>

---

## 🗺️ Roadmap

- [ ] Full MDX blog content for all posts
- [ ] Expand Burmese translation coverage sitewide
- [ ] Integrate real client testimonials
- [ ] Add unit test coverage (Vitest + React Testing Library)
- [ ] Convert anchor sections into fully routed pages for deeper SEO

See [open issues](https://github.com/Dev-moe-kyawaung/moe-kyaw-aung-portfolio-1.3/issues) for the full list.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for guidelines.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for full text.

---

## 📬 Contact & Connect

<div align="center">

**Moe Kyaw Aung** — Senior Android Developer

[![GitHub](https://img.shields.io/badge/GitHub-Dev--moe--kyawaung-181717?style=for-the-badge&logo=github)](https://github.com/Dev-moe-kyawaung)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/moe-kyaw-aung-2653093a1)
[![Gravatar](https://img.shields.io/badge/Gravatar-Profile-1E8CBE?style=for-the-badge&logo=gravatar&logoColor=white)](https://gravatar.com/moekyawaung13721)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:moekyawaung@engineer.com)

📍 Tachileik, Myanmar 🇲🇲 &nbsp;↔&nbsp; Bangkok, Thailand 🇹🇭

</div>

---

<div align="center">

**⭐ If this project helped or inspired you, consider giving it a star! ⭐**

</div>
