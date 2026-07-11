import { ShieldCheck, ShieldQuestion } from 'lucide-react';
import styles from './Certificates.module.css';

/**
 * Single certificate card.
 * Real, verified certs show a working "Verify Certificate" link.
 * Placeholder certs (no real ID/date yet) show a distinct "Data Pending"
 * state instead of a fake/broken verify link.
 */
export default function CertCard({ cert }) {
  return (
    <div className={`${styles.certCard} ${cert.isPlaceholder ? styles.certCardPlaceholder : ''}`}>
      <div className={styles.certCardHeader}>
        <span className={styles.certName}>{cert.name}</span>
        {cert.isPlaceholder ? (
          <ShieldQuestion size={16} className={styles.pendingIcon} />
        ) : (
          <ShieldCheck size={16} className={styles.verifiedIcon} />
        )}
      </div>

      {cert.isPlaceholder ? (
        <span className={styles.pendingLabel}>📋 Data pending — add ID &amp; date</span>
      ) : (
        <>
          <div className={styles.certDate}>📅 {cert.date}</div>
          <div className={styles.certId}>{cert.id}</div>
          <a
            href={cert.verifyLink}
            target="_blank"
            rel="noreferrer"
            className={styles.certVerify}
          >
            ✓ Verify Certificate ↗
          </a>
        </>
      )}
    </div>
  );
}

