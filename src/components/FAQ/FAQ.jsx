import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/faqs.js';
import styles from './FAQ.module.css';

/**
 * Accessible accordion — single-open-at-a-time pattern.
 * Uses proper aria-expanded / aria-controls wiring for screen readers.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="section" id="faq">
      <div className="s-label">Questions</div>
      <h2 className="s-title">Frequently Asked Questions</h2>

      <div className={styles.accordion}>
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div className={styles.faqItem} key={item.q}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-header-${i}`}
              >
                <span>{item.q}</span>
                <ChevronDown
                  size={18}
                  className={styles.chevron}
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-header-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.faqAnswerWrap}
                  >
                    <p className={styles.faqAnswer}>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

