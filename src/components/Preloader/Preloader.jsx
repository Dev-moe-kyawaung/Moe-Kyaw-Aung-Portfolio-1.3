import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';

/**
 * Terminal-themed boot sequence preloader.
 * Simulates a system boot log with sequential lines, then a progress bar,
 * then fades out to reveal the site. Total duration ~2.2s — long enough
 * to feel intentional/on-brand, short enough not to annoy repeat visitors.
 *
 * Skips automatically on subsequent visits within the same session
 * (sessionStorage flag) so it doesn't replay on every internal navigation.
 */
const BOOT_LINES = [
  '> initializing environment...',
  '> loading kotlin runtime... OK',
  '> mounting jetpack compose modules... OK',
  '> connecting firebase services... OK',
  '> compiling portfolio.apk...',
  '> build successful ✓',
];

export default function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const alreadyBooted = sessionStorage.getItem('mka-booted') === 'true';
    if (alreadyBooted) {
      setVisible(false);
      onComplete?.();
      return;
    }

    // Reveal boot lines sequentially
    const lineTimer = setInterval(() => {
      setLineIndex((i) => {
        if (i >= BOOT_LINES.length - 1) {
          clearInterval(lineTimer);
          return i;
        }
        return i + 1;
      });
    }, 260);

    // Animate progress bar 0 → 100
    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return p + 4;
      });
    }, 60);

    // Finish and unmount
    const finishTimer = setTimeout(() => {
      sessionStorage.setItem('mka-booted', 'true');
      setVisible(false);
      onComplete?.();
    }, 2200);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.preloader}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className={styles.terminalBox}>
            <div className={styles.terminalHeader}>
              <span className={styles.dot} style={{ background: 'var(--accent-red)' }} />
              <span className={styles.dot} style={{ background: 'var(--accent-amber)' }} />
              <span className={styles.dot} style={{ background: 'var(--accent-green)' }} />
              <span className={styles.terminalTitle}>boot.sh — moe-kyaw-aung</span>
            </div>

            <div className={styles.terminalBody}>
              {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => (
                <div key={i} className={styles.bootLine}>
                  {line}
                </div>
              ))}
            </div>

            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            </div>
            <div className={styles.progressLabel}>{progress}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

