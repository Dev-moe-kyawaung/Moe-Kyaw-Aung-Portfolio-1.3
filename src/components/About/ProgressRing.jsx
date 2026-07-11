import { useEffect, useRef, useState } from 'react';
import styles from './ProgressRing.module.css';

/**
 * Animated SVG circular progress ring.
 * Fills from 0 → `percent` when scrolled into view, using stroke-dashoffset animation.
 *
 * Props:
 *  - percent: number (0-100)
 *  - label: string (e.g. "Kotlin")
 *  - color: CSS color/gradient id
 *  - icon: emoji or short label shown in the center
 */
export default function ProgressRing({ percent, label, color, icon, size = 140, stroke = 10 }) {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedPercent / 100) * circumference;

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Animate the percent value via rAF for a smooth count-up + fill
          const duration = 1400;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setAnimatedPercent(Math.floor(eased * percent));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [percent]);

  const gradientId = `ring-gradient-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={styles.ringWrap} ref={ref}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--border-soft)"
          strokeWidth={stroke}
        />

        {/* Animated progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className={styles.progressArc}
        />
      </svg>

      <div className={styles.ringCenter}>
        <span className={styles.ringIcon}>{icon}</span>
        <span className={styles.ringPercent}>{animatedPercent}%</span>
      </div>

      <div className={styles.ringLabel}>{label}</div>
    </div>
  );
}

