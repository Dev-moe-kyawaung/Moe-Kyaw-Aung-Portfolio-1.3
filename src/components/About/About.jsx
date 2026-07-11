import { motion } from 'framer-motion';
import ProgressRing from './ProgressRing.jsx';
import Timeline from './Timeline.jsx';
import StatsCounter from './StatsCounter.jsx';
import styles from './About.module.css';

const RINGS = [
  { percent: 96, label: 'Kotlin', color: '#7F52FF', icon: '☕' },
  { percent: 92, label: 'Jetpack Compose', color: '#4285F4', icon: '🧩' },
  { percent: 90, label: 'Firebase', color: '#FFCA28', icon: '🔥' },
  { percent: 85, label: 'CI/CD', color: '#00ff9c', icon: '⚙️' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="s-label">About Me</div>
        <h2 className="s-title">
          12 Years Building<br />Android Experiences That Scale
        </h2>
      </motion.div>

      <div className={styles.aboutGrid}>
        <motion.p
          className={styles.aboutText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Android Developer with nearly <strong>12 years</strong> of hands-on experience
          building secure, scalable, and user-friendly mobile applications. Strong in
          <strong> Kotlin</strong> and modern Jetpack development (Compose, ViewModel, Room),
          <strong> Firebase</strong> integration, and REST API consumption. I focus on clean
          architecture, maintainable code, and practical security — comfortable delivering
          features end-to-end, from UI to networking, local caching, testing, and
          release-ready builds.
        </motion.p>

        <motion.div
          className={styles.ringsGrid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {RINGS.map((ring) => (
            <ProgressRing key={ring.label} {...ring} />
          ))}
        </motion.div>
      </div>

      {/* Animated stat counters — 12+ yrs / 3K+ apps / 22 repos / 100% */}
      <StatsCounter />

      {/* Career timeline */}
      <div className={styles.timelineSection}>
        <div className="s-label">Career Timeline</div>
        <h3 className={styles.timelineTitle}>The Journey So Far</h3>
        <Timeline />
      </div>
    </section>
  );
}

