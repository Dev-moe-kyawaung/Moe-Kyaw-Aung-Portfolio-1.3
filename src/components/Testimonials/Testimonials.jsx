import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials.js';
import styles from './Testimonials.module.css';

/**
 * Auto-advancing testimonial carousel with manual navigation,
 * pause-on-hover, and keyboard arrow support.
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next]);

  const current = testimonials[index];

  return (
    <section
      className="section"
      id="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="s-label">Feedback</div>
      <h2 className="s-title">What Collaborators Say</h2>
      <p className={styles.disclaimer}>
        Representative feedback from client engagements. Full case-study references available on request.
      </p>

      <div className={styles.carouselWrap}>
        <button className={styles.navBtn} onClick={prev} aria-label="Previous testimonial">
          <ChevronLeft size={20} />
        </button>

        <div className={styles.slideArea}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className={styles.slide}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Quote size={28} className={styles.quoteIcon} />
              <p className={styles.quoteText}>{current.quote}</p>

              <div className={styles.stars} aria-label={`${current.rating} out of 5 stars`}>
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <div className={styles.author}>
                <span className={styles.authorName}>{current.author}</span>
                <span className={styles.authorRole}>{current.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className={styles.navBtn} onClick={next} aria-label="Next testimonial">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

