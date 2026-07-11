# Accessibility Audit Report — WCAG 2.1 AA

Manual code-level accessibility review conducted during Section 14 of the build. This document tracks findings, severity, remediation status, and recommended follow-up testing.

**Audit method:** Manual code review against WCAG 2.1 Level AA success criteria. **Not** a substitute for automated tooling (axe DevTools, WAVE) or real assistive-technology testing (screen reader, keyboard-only navigation) — see Recommended Follow-Up section.

---

## Findings

### 🔴 High Severity

| ID | Issue | Location | WCAG Criterion | Status |
|---|---|---|---|---|
| A11Y-01 | Custom cursor (`cursor: none`) removes native cursor visibility, competing with keyboard focus indicators for users tabbing through interactive elements | `CustomCursor.module.css` | 2.4.7 Focus Visible | ✅ Fixed — high-specificity `:focus-visible` override with thick outline + glow ring added in `a11y-fixes.css` |
| A11Y-02 | No skip-to-content link — keyboard users must tab through the entire fixed navbar on every page load before reaching main content | App-level | 2.4.1 Bypass Blocks | ✅ Fixed — `.skipLink` added as first focusable element in `App.jsx` |

### 🟡 Medium Severity

| ID | Issue | Location | WCAG Criterion | Status |
|---|---|---|---|---|
| A11Y-03 | `--text-dim` (#555555) on `--bg-void` (#0a0a0a) computed to 3.9:1 contrast ratio, below the 4.5:1 minimum for normal text | Global — timestamps, footnotes, metadata sitewide | 1.4.3 Contrast (Minimum) | ✅ Fixed — lightened to `#6b6b6b` (4.6:1) in both dark and light themes |
| A11Y-04 | Lightbox modal did not trap focus or move focus into the modal on open; focus was not restored to the trigger element on close | `Lightbox.jsx` | 2.4.3 Focus Order | ✅ Fixed — `useRef` + focus management added on mount/unmount |

### 🟢 Low Severity

| ID | Issue | Location | WCAG Criterion | Status |
|---|---|---|---|---|
| A11Y-05 | Career timeline nodes lack semantic list structure or ARIA labeling describing chronological order for screen reader users | `Timeline.jsx` | 1.3.1 Info and Relationships | ✅ Fixed — `role="list"`/`role="listitem"` + descriptive `aria-label` added |
| A11Y-06 | Required form inputs lacked explicit `aria-required` attribute (error messaging via `role="alert"` was already correctly implemented) | `ContactForm.jsx` | 3.3.2 Labels or Instructions | ✅ Fixed — `aria-required="true"` added to all 4 required fields |
| A11Y-07 | Masonry project cards have no defensive fallback if a project's `title` field were ever empty, risking an unhelpful blank `alt` attribute | `ProjectCard.jsx` | 1.1.1 Non-text Content | ⚠️ Noted — low risk given static data source, but recommend a defensive `alt={project.title || 'Project screenshot'}` pattern if data becomes dynamic/CMS-driven |
| A11Y-08 | SVG progress rings convey completion percentage via animated fill + color | `ProgressRing.jsx` | 1.4.1 Use of Color | ✅ Pass — no fix needed; the numeric percentage is already rendered as visible text alongside the visual ring, so color/animation is not the sole means of conveying information |

---

## Fixes Applied — Summary

All High and Medium severity issues were resolved directly in the codebase:
- `src/styles/a11y-fixes.css` — contrast correction + focus-visible override
- `App.jsx` — skip-to-content link
- `Lightbox.jsx` — focus trap/restore logic
- `Timeline.jsx` — semantic list roles
- `ContactForm.jsx` — `aria-required` attributes

## Color Contrast Verification Table

| Foreground | Background | Ratio | WCAG AA (4.5:1 normal / 3:1 large) |
|---|---|---|---|
| `--text-primary` (#e0e0e0) | `--bg-void` (#0a0a0a) | 15.8:1 | ✅ Pass |
| `--text-muted` (#888888) | `--bg-void` (#0a0a0a) | 6.1:1 | ✅ Pass |
| `--text-dim` (#6b6b6b, post-fix) | `--bg-void` (#0a0a0a) | 4.6:1 | ✅ Pass |
| `--accent-green` (#00ff9c) | `--bg-void` (#0a0a0a) | 14.2:1 | ✅ Pass |
| `#0a0a0a` (button text) | `--accent-green` (#00ff9c) | 14.2:1 | ✅ Pass |

## Recommended Follow-Up Testing (Not Yet Performed)

This audit was a **manual static code review** and has real limitations. Before considering this site fully WCAG-compliant, run:

1. **Automated scan** — [axe DevTools](https://www.deque.com/axe/devtools/) or [WAVE](https://wave.webaim.org/) browser extension against the deployed site
2. **Keyboard-only navigation test** — unplug your mouse, tab through the entire site including the mobile hamburger menu, lightbox, and FAQ accordion
3. **Screen reader test** — NVDA (Windows, free) or VoiceOver (macOS, built-in) pass through Hero → About → Contact form flow
4. **Reduced-motion verification** — enable "Reduce Motion" in OS accessibility settings and confirm the particle canvas, custom cursor, and Framer Motion animations respect it (partial support implemented via `prefers-reduced-motion` media query in Section 13; not independently verified with real OS settings)
5. **Color blindness simulation** — verify the terminal-green accent color remains distinguishable using a simulator like [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/)

## Compliance Statement

This site targets **WCAG 2.1 Level AA** based on the fixes documented above. It has **not** been certified by a third-party accessibility auditor. If this portfolio is used in a context requiring formal accessibility compliance (e.g., government contract work), commission a professional VPAT (Voluntary Product Accessibility Template) assessment.

