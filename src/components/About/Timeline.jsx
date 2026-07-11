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
    // src/components/ProjectGrid/Lightbox.jsx — additions to the existing useEffect

import { useEffect, useCallback, useRef } from 'react';

export default function Lightbox({ project, onClose }) {
  const modalRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    // Store what had focus before opening, so we can restore it on close
    previouslyFocused.current = document.activeElement;

    // Move focus into the modal immediately (WCAG 2.4.3 Focus Order)
    modalRef.current?.focus();

    return () => {
      // Restore focus to the trigger element on close (WCAG 2.4.3)
      previouslyFocused.current?.focus();
    };
  }, []);

  // ...existing handleKeyDown/Escape logic stays as-is...

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
      >
        {/* ...existing modal content... */}
      </div>
    </div>
  );
}
  
  );
}

