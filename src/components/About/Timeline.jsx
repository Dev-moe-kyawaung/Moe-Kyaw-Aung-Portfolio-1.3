import { motion } from 'framer-motion';
import { timelineData } from '../../data/timeline.js';
import styles from './Timeline.module.css';

/**
 * Vertical animated career timeline. Each node fades/slides in on scroll
 * using Framer Motion's `whileInView`, alternating left/right on desktop.
 */
export default function Timeline() {
  return (
    <div className={styles.timelineWrap}>
      <div className={styles.spine} aria-hidden="true" />
      {timelineData.map((item, i) => (
        <motion.div
          key={item.year}
          className={`${styles.node} ${i % 2 === 0 ? styles.left : styles.right}`}
          initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.dot}>
            <span>{item.icon}</span>
          </div>
          <div className={styles.card}>
            <span className={styles.year}>{item.year}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <span className={styles.org}>{item.org}</span>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

