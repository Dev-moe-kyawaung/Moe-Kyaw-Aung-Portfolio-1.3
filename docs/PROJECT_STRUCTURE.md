# Full Project Structure — Moe Kyaw Aung Portfolio

Complete, annotated file manifest. Each entry notes which build phase introduced it and its purpose.



```
moe-kyaw-aung-portfolio/
│
├── public/                                  # Static assets served as-is
│   ├── resume.pdf                           # ⚠️ Must be supplied — resume download target
│   ├── sitemap.xml                          # Search engine crawl map
│   ├── robots.txt                           # Crawler directives
│   └── site.webmanifest                     # PWA install manifest
│
├── docs/                                     # Project documentation
│   ├── BUILD_NOTES.md                       # Development log & decisions
│   ├── PROJECT_STRUCTURE.md                 # This file
│   └── A11Y_AUDIT.md                        # Accessibility audit findings
│
├── src/
│   │
│   ├── main.jsx                             # Entry point — router + lazy route splitting
│   ├── App.jsx                              # Root component — assembles all 15 sections
│   ├── index.css                            # Global design tokens & base styles
│   │
│   ├── content/
│   │   └── blog/                            # MDX blog post content files
│   │       └── *.mdx                        # (one file per slug in blogPosts.js)
│   │
│   ├── styles/
│   │   └── a11y-fixes.css                   # Consolidated accessibility corrections
│   │
│   ├── data/                                 # Pure data layer — no logic, only content
│   │   ├── timeline.js                      # Career timeline entries
│   │   ├── skills.js                        # Tech stack chip data
│   │   ├── projects.js                      # 16-project app collection
│   │   ├── githubAccounts.js                # Primary + archive GitHub profiles
│   │   ├── lovableApps.js                   # Lovable.app prototype links
│   │   ├── emails.js                        # Primary + alias email addresses
│   │   ├── certificates.js                  # 82-certificate structure (9 categories)
│   │   ├── socials.js                       # Social platform directory
│   │   ├── testimonials.js                  # Sample client feedback
│   │   ├── serviceTiers.js                  # Pricing/engagement tiers
│   │   ├── faqs.js                          # FAQ question/answer pairs
│   │   └── blogPosts.js                     # Blog post metadata
│   │
│   ├── context/                               # React Context providers
│   │   ├── ThemeContext.jsx                 # Dark/light mode state
│   │   └── LangContext.jsx                  # English/Burmese i18n state
│   │
│   ├── hooks/                                  # Reusable custom hooks
│   │   ├── useScrollFade.js                 # IntersectionObserver fade-in trigger
│   │   ├── useCounter.js                    # Animated number count-up
│   │   ├── useParallax.js                   # Scroll-based parallax transform
│   │   └── useSmoothScroll.js               # Navbar-offset-aware smooth scroll
│   │
│   ├── components/
│   │   │
│   │   ├── Navbar/                          # Fixed nav, hamburger, theme/lang toggle
│   │   ├── Hero/                            # Particle canvas, typing text, profile
│   │   │   ├── Hero.jsx
│   │   │   ├── ParticleCanvas.jsx
│   │   │   └── TypingText.jsx
│   │   ├── About/                           # Timeline, progress rings, stat counters
│   │   │   ├── About.jsx
│   │   │   ├── ProgressRing.jsx
│   │   │   ├── Timeline.jsx
│   │   │   └── StatsCounter.jsx
│   │   ├── Skills/                          # Tech stack chip cloud
│   │   ├── ProjectGrid/                     # Masonry grid + lightbox
│   │   │   ├── ProjectGrid.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── Lightbox.jsx
│   │   ├── GitHubCollection/                # Primary profile + archive directory
│   │   │   ├── GitHubCollection.jsx
│   │   │   ├── PrimaryProfileCard.jsx
│   │   │   └── AccountsDirectory.jsx
│   │   ├── Organizations/                   # Affiliations/certifying bodies
│   │   ├── LovableCollection/                # Prototype showcase grid
│   │   ├── EmailCollection/                  # Primary email + alias accordion
│   │   ├── Certificates/                     # Search + filter credential system
│   │   │   ├── Certificates.jsx
│   │   │   ├── CertCard.jsx
│   │   │   └── CertCategoryBlock.jsx
│   │   ├── SocialBar/                        # Reusable social icon row
│   │   ├── Testimonials/                     # Auto-advancing carousel
│   │   ├── ServiceTiers/                     # Pricing cards
│   │   ├── FAQ/                              # Accordion component
│   │   ├── ContactForm/                      # Validated form + Formspree wiring
│   │   │   ├── ContactForm.jsx
│   │   │   └── useFormValidation.js
│   │   ├── MapEmbed/                         # Google Maps iframe wrapper
│   │   ├── Footer/                           # Fat footer + newsletter signup
│   │   ├── BackToTop/                        # Scroll-triggered back-to-top button
│   │   ├── StickyCTA/                        # Session-dismissible CTA bar
│   │   ├── Preloader/                        # Terminal boot-sequence loader
│   │   ├── CustomCursor/                     # Trailing dot/ring cursor effect
│   │   ├── ParallaxLayer/                    # Decorative depth-scroll wrapper
│   │   ├── LangSupport/                      # Burmese support callout banner
│   │   │   └── LangBanner.jsx
│   │   ├── Blog/                             # Blog grid + individual post page
│   │   │   ├── Blog.jsx
│   │   │   ├── BlogCard.jsx
│   │   │   └── BlogPost.jsx
│   │   ├── LazyImage/                        # Unified lazy-load + CLS-safe image
│   │   └── SEO/                              # Structured data + per-route meta
│   │       ├── SEOHead.jsx
│   │       └── StructuredData.jsx
│   │
│   └── pages/
│       └── ContactSection.jsx                # Assembles ContactForm + Map + SocialBar
│
├── index.html                                 # SEO meta, font loading, manifest link
├── vite.config.js                             # Build optimization, chunking, MDX plugin
├── package.json                               # Dependencies & scripts
├── .gitignore
├── LICENSE
├── CONTRIBUTING.md
└── README.md
```

## File Count Summary

| Category | Count |
|---|---|
| Components (folders) | 22 |
| Data files | 12 |
| Custom hooks | 4 |
| Context providers | 2 |
| Page assemblies | 1 |
| Configuration files | 3 |
| Documentation files | 5 |
```
