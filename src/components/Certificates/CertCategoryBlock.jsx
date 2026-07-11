import { motion } from 'framer-motion';
import CertCard from './CertCard.jsx';
import styles from './Certificates.module.css';

export default function CertCategoryBlock({ category, certs }) {
  if (certs.length === 0) return null;

  return (
    <motion.div
      className={styles.certCategory}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.certCatHeader}>
        <span className={styles.certCatIcon}>{category.icon}</span>
        <span className={styles.certCatName}>{category.key}</span>
        <span className={styles.certCatCount}>{certs.length}</span>
        <div className={styles.certCatRule} />
      </div>
      <div className={styles.certGrid}>
        {certs.map((cert) => (
          <CertCard key={cert.uid} cert={cert} />
        ))}
      </div>
    </motion.div>
  );
}

