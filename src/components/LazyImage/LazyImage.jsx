import { useState } from 'react';
import styles from './LazyImage.module.css';

/**
 * Standardizes image loading across the entire site:
 * - Explicit `aspectRatio` reserves layout space before load → prevents CLS
 * - Native `loading="lazy"` for below-fold images (skip via `eager` prop for Hero)
 * - Skeleton shimmer while loading, fades in smoothly on load
 * - `decoding="async"` avoids blocking the main thread on image decode
 *
 * Usage: <LazyImage src={url} alt="..." aspectRatio="16/9" />
 */
export default function LazyImage({ src, alt, aspectRatio = '4/3', eager = false, className = '' }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`${styles.wrap} ${className}`}
      style={{ aspectRatio }}
    >
      {!loaded && <div className={styles.skeleton} aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`${styles.img} ${loaded ? styles.loaded : ''}`}
      />
    </div>
  );
}

