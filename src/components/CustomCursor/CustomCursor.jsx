import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

/**
 * Custom cursor effect — a small dot that follows the mouse precisely,
 * plus a trailing ring with slight lag for a "smart cursor" feel.
 * Automatically enlarges over interactive elements (links, buttons).
 *
 * Disabled entirely on touch devices (detected via matchMedia) since
 * custom cursors have no meaning on touchscreens and would only add
 * unused DOM/JS overhead.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouch, setIsTouch] = useState(true);
  const [hoveringLink, setHoveringLink] = useState(false);

  useEffect(() => {
    const touchCheck = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(touchCheck);
    if (touchCheck) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const moveDot = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    // Ring lags behind slightly via rAF lerp for smooth trailing motion
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      requestAnimationFrame(animateRing);
    };

    const handleOver = (e) => {
      if (e.target.closest('a, button, input, textarea, [role="button"]')) {
        setHoveringLink(true);
      }
    };
    const handleOut = (e) => {
      if (e.target.closest('a, button, input, textarea, [role="button"]')) {
        setHoveringLink(false);
      }
    };

    window.addEventListener('mousemove', moveDot);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    const rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', moveDot);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef} className={styles.cursorDot} aria-hidden="true" />
      <div
        ref={ringRef}
        className={`${styles.cursorRing} ${hoveringLink ? styles.ringHover : ''}`}
        aria-hidden="true"
      />
    </>
  );
}

