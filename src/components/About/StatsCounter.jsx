import { useCounter } from '../../hooks/useCounter.js';
import styles from './StatsCounter.module.css';

const STATS = [
  { target: 12, suffix: '+', label: 'Years Experience' },
  { target: 3000, suffix: 'K+', label: 'App Installs', display: (n) => `${Math.floor(n / 1000)}` },
  { target: 22, suffix: '+', label: 'Public Repos' },
  { target: 100, suffix: '%', label: 'Client Satisfaction' },
];

/**
 * Renders the four headline metrics with count-up-on-scroll animation.
 * Note: "3K+" is handled by counting to 3000 internally and dividing for
 * display, so the animation feels proportionally smooth against other stats.
 */
export default function StatsCounter() {
  return (
    <div className={styles.statsGrid}>
      {STATS.map((stat, i) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [count, ref] = useCounter(stat.target, 1800 + i * 150);
        const displayValue = stat.display ? stat.display(count) : count;
        return (
          <div className={styles.statCard} ref={ref} key={stat.label}>
            <div className={styles.statNumber}>
              {displayValue}
              <span className={styles.statSuffix}>{stat.suffix}</span>
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}

