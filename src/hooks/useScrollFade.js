import { useEffect } from 'react';

/**
 * Observes all elements with `.fade-up` class in the DOM and toggles
 * `.visible` when they enter the viewport. Call once at App level.
 */
export function useScrollFade() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    const targets = document.querySelectorAll('.fade-up');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

