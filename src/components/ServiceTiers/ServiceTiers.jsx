import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { serviceTiers } from '../../data/serviceTiers.js';
import styles from './ServiceTiers.module.css';

export default function ServiceTiers() {
  return (
    <section className="section" id="services">
      <div className="s-label">Engagement Models</div>
      <h2 className="s-title">Service Tiers</h2>
      <p className={styles.subtitle}>
        Flexible engagement options depending on project scope. Rates shown are starting
        points — final quotes are scoped after an initial consultation.
      </p>

      <div className={styles.tiersGrid}>
        {serviceTiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            className={`${styles.tierCard} ${tier.featured ? styles.tierFeatured : ''}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {tier.featured && <span className={styles.popularBadge}>Most Requested</span>}

            <h3 className={styles.tierName}>{tier.name}</h3>
            <p className={styles.tierTagline}>{tier.tagline}</p>

            <div className={styles.tierPrice}>
              <span className={styles.priceAmount}>{tier.price}</span>
              <span className={styles.priceUnit}>{tier.unit}</span>
            </div>

            <ul className={styles.featureList}>
              {tier.features.map((f) => (
                <li key={f}>
                  <Check size={15} className={styles.checkIcon} />
                  {f}
                </li>
              ))}
            </ul>

            <a href="#contact" className={tier.featured ? styles.ctaPrimary : styles.ctaSecondary}>
              {tier.cta}
            </a>
          </motion.div>
        ))}
      </div>

      <p className={styles.footnote}>
        💬 Every engagement starts with a free 20-minute discovery call to align on scope before any commitment.
      </p>
    </section>
  );
}

