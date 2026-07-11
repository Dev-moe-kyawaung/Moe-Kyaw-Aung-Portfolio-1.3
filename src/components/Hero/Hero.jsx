import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LangContext.jsx';
import ParticleCanvas from './ParticleCanvas.jsx';
import TypingText from './TypingText.jsx';
import styles from './Hero.module.css';

const PROFILE_IMG =
  'https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png';

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className={styles.hero}>
      <ParticleCanvas />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={styles.textCol}
        >
          <div className={styles.terminalTag}>
            <span className={styles.dot} style={{ background: 'var(--accent-red)' }} />
            <span className={styles.dot} style={{ background: 'var(--accent-amber)' }} />
            <span className={styles.dot} style={{ background: 'var(--accent-green)' }} />
            <span className={styles.terminalPath}>~/moe-kyaw-aung/portfolio.kt</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.starIcon}>⭐</span> MOE KYAW AUNG{' '}
            <span className={styles.starIcon}>⭐</span>
          </h1>

          <h2 className={styles.typingLine}>
            <TypingText
              strings={[
                'ANDROID SENIOR DEVELOPER',
                'Kotlin · Jetpack Compose · MVVM',
                'Firebase · REST APIs · Clean Architecture',
              ]}
            />
          </h2>

          <p className={styles.desc}>{t('heroDesc')}</p>

          <div className={styles.location}>
            <span>📍 Tachileik, Myanmar 🇲🇲</span>
            <span className={styles.arrow}>↔</span>
            <span>Bangkok, Thailand 🇹🇭</span>
          </div>

          <div className={styles.ctaRow}>
            <a href="#projects" className={styles.btnPrimary}>{t('viewWork')} →</a>
            <a href="#contact" className={styles.btnSecondary}>{t('contactMe')}</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={styles.imgCol}
        >
          <div className={styles.imgRing}>
            <img src={PROFILE_IMG} alt="Moe Kyaw Aung — Senior Android Developer" loading="eager" />
          </div>
          <div className={styles.badge}>
            <span className={styles.pulseDot} />
            Open to Work
          </div>
        </motion.div>
      </div>

      <div className={styles.scrollHint}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}

