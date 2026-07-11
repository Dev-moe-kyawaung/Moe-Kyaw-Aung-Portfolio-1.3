# Contributing to Moe Kyaw Aung Portfolio

Thanks for your interest in contributing! This is primarily a personal portfolio project, but improvements, bug fixes, and accessibility/performance suggestions are genuinely welcome.

## How to Contribute

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/moe-kyaw-aung-portfolio.git`
3. **Create a branch**: `git checkout -b fix/short-description`
4. **Make your changes**, following the existing code style (CSS Modules, functional components, hooks)
5. **Test locally**: `npm run dev` and verify no console errors
6. **Commit**: use clear, conventional commit messages (`fix:`, `feat:`, `docs:`, `style:`, `refactor:`)
7. **Push** and open a **Pull Request** against `main`, describing what changed and why

## Code Style Guidelines

- Use functional components with hooks — no class components
- CSS Modules only — no inline styles except for dynamic values (e.g., animation progress)
- Keep components under ~200 lines; extract sub-components if larger
- Add JSDoc-style comments above non-obvious logic (see existing hooks for examples)
- Run through the accessibility checklist in `docs/A11Y_AUDIT.md` for any new interactive UI

## Reporting Bugs

Open an [issue](https://github.com/Dev-moe-kyawaung/moe-kyaw-aung-portfolio/issues) with:
- Steps to reproduce
- Expected vs. actual behavior
- Browser/OS/screen size if UI-related
- Screenshots if applicable

## Code of Conduct

Be respectful and constructive. This is a professional portfolio representing real work — please keep contributions and discussion aligned with that standard.

