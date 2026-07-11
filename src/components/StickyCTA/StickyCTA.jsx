import { useEffect, useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import styles from './StickyCTA.module.css';

/**
 * Sticky call-to-action bar — appears after scrolling past the hero section,
 * dismissible per-session (won't reappear after user closes it, tracked via
 * sessionStorage so it resets on next visit rather than being permanently gone).
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem('mka-cta-dismissed') === 'true';
    setDismissed(wasDismissed);

    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('mka-cta-dismissed', 'true');
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (dismissed) return null;

  return (
    <div className={`${styles.stickyCta} ${visible ? styles.visible : ''}`}>
      <button className={styles.ctaMain} onClick={scrollToContact}>
        <MessageSquare size={17} />
        <span>Available for new projects — Let's talk</span>
      </button>
      <button
        className={styles.dismissBtn}
        onClick={handleDismiss}
        aria-label="Dismiss"
      >
        <X size={15} />
      </button>
    </div>
  );
}

