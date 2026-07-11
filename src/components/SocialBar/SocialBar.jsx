import { motion } from 'framer-motion';
import { activeSocialLinks } from '../../data/socials.js';
import styles from './SocialBar.module.css';

/**
 * Horizontal icon bar for all confirmed social/contact platforms.
 * Reusable — dropped into Hero, Footer, and Contact sections alike.
 * `compact` prop shrinks icon size for tighter contexts (e.g., footer).
 */
export default function SocialBar({ compact = false }) {
  return (
    <div className={`${styles.bar} ${compact ? styles.compact : ''}`} role="list" aria-label="Social media and contact links">
      {activeSocialLinks.map((social, i) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.key}
            href={social.url}
            target={social.url.startsWith('http') ? '_blank' : undefined}
            rel={social.url.startsWith('http') ? 'noreferrer' : undefined}
            className={styles.iconLink}
            role="listitem"
            aria-label={social.label}
            title={social.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            whileHover={{ y: -3, scale: 1.08 }}
          >
            <Icon size={compact ? 16 : 18} />
            <span className={styles.tooltip}>{social.label}</span>
          </motion.a>
        );
      })}
    </div>
  );
}

