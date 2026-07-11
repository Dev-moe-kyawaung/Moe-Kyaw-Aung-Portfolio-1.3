import { motion } from 'framer-motion';
import { Github, Star, GitFork, MapPin } from 'lucide-react';
import { primaryProfile } from '../../data/githubAccounts.js';
import styles from './GitHubCollection.module.css';

/**
 * Prominent card for the primary, actively maintained GitHub profile.
 * This is what recruiters/reviewers see first and is the credible focal point.
 */
export default function PrimaryProfileCard() {
  return (
    <motion.a
      href={primaryProfile.url}
      target="_blank"
      rel="noreferrer"
      className={styles.primaryCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <div className={styles.primaryHeader}>
        <div className={styles.primaryIcon}>
          <Github size={32} />
        </div>
        <div>
          <h3 className={styles.primaryUsername}>@{primaryProfile.username}</h3>
          <p className={styles.primaryBio}>{primaryProfile.bio}</p>
        </div>
      </div>

      <div className={styles.primaryStats}>
        <div className={styles.statItem}>
          <GitFork size={15} />
          <span>{primaryProfile.repoCount}+ Repositories</span>
        </div>
        <div className={styles.statItem}>
          <Star size={15} />
          <span>Featured Projects</span>
        </div>
        <div className={styles.statItem}>
          <MapPin size={15} />
          <span>Tachileik / Bangkok</span>
        </div>
      </div>

      <div className={styles.pinnedRow}>
        {primaryProfile.pinnedRepos.map((repo) => (
          <span key={repo} className={styles.pinnedChip}>📌 {repo}</span>
        ))}
      </div>

      <span className={styles.visitLink}>Visit Primary Profile →</span>
    </motion.a>
  );
}

