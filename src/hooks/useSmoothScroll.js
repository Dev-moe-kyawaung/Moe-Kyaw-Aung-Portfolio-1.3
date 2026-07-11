import { useCallback } from 'react';

/**
 * Centralized smooth-scroll utility used by Navbar, Footer, StickyCTA, etc.
 * Accounts for the fixed navbar height so scrolled-to sections aren't
 * hidden underneath it — a common smooth-scroll bug this hook fixes once,
 * centrally, instead of every caller guessing an offset independently.
 */
const NAVBAR_HEIGHT_PX = 72;

export function useSmoothScroll() {
  const scrollToId = useCallback((id) => {
    const el = document.querySelector(id.startsWith('#') ? id : `#${id}`);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT_PX;
    window.scrollTo({ top, behavior: 'smooth' });

    // Move focus for keyboard/screen-reader users after scroll settles
    setTimeout(() => {
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    }, 500);
  }, []);

  return scrollToId;
}

