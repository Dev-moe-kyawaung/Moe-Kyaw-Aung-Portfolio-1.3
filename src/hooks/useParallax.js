import { useEffect, useRef } from 'react';

/**
 * Lightweight parallax hook — moves an element vertically at a fraction
 * of scroll speed (`speed`) to create depth. speed < 1 = moves slower than
 * scroll (background layer feel); speed > 1 = moves faster (foreground pop).
 *
 * Uses rAF-throttled scroll listener to avoid layout thrashing.
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const scrollProgress = window.innerHeight - rect.top; // distance scrolled into view
      el.style.transform = `translate3d(0, ${scrollProgress * speed * -0.1}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // set initial position

    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return ref;
}
