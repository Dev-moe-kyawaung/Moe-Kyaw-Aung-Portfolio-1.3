import { useParallax } from '../../hooks/useParallax.js';
import styles from './ParallaxLayer.module.css';

/**
 * Wraps any content in a parallax-driven container.
 * Used for decorative background glows/shapes behind section content
 * to create the "parallax layers with depth-based scrolling" effect
 * requested in the design brief, without affecting readable content flow.
 *
 * Usage:
 *   <ParallaxLayer speed={0.4} className={styles.glowBlob} />
 */
export default function ParallaxLayer({ speed = 0.3, className = '', children }) {
  const ref = useParallax(speed);

  return (
    <div ref={ref} className={`${styles.layer} ${className}`} aria-hidden="true">
      {children}
    </div>
  );
}

