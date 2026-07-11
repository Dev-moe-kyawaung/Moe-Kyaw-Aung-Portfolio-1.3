import { motion } from 'framer-motion';
import styles from './Organizations.module.css';

/**
 * Organizations / Affiliations section.
 * Populated with entities referenced in your provided material
 * (Programming Hub certifications, Google Developers Launchpad).
 * Replace/extend with real employer or org affiliations as applicable.
 */
const organizations = [
  {
    name: 'Google Developers Launchpad',
    role: 'Certified Participant',
    period: '2023 — Present',
    icon: '🎯',
    desc: '40+ certifications completed across Android development, cloud fundamentals, and ML basics.',
  },
  {
    name: 'Programming Hub',
    role: 'Certified Learner',
    period: '2022 — Present',
    icon: '📚',
    desc: '82+ certificates across 9 domains — programming languages, web dev, mobile, databases, AI, and security.',
  },
  {
    name: 'Open Source Contributor',
    role: 'Independent',
    period: '2019 — Present',
    icon: '🌐',
    desc: '22+ public repositories spanning Android apps, web tools, and utility libraries.',
  },
];

export default function Organizations() {
  return (
    <section className="section" id="organizations">
      <div className="s-label">Affiliations</div>
      <h2 className="s-title">Organizations &amp; Communities</h2>

      <div className={styles.orgGrid}>
        {organizations.map((org, i) => (
          <motion.div
            key={org.name}
            className={styles.orgCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className={styles.orgIcon}>{org.icon}</div>
            <h3 className={styles.orgName}>{org.name}</h3>
            <span className={styles.orgRole}>{org.role} · {org.period}</span>
            <p className={styles.orgDesc}>{org.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

