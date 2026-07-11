import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ChevronDown } from 'lucide-react';
import { primaryEmail, emailAliases } from '../../data/emails.js';
import styles from './EmailCollection.module.css';

/**
 * Copy-to-clipboard helper. Falls back silently if Clipboard API
 * is unavailable (e.g., non-HTTPS context).
 */
function useCopy() {
  const [copied, setCopied] = useState('');
  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(''), 2000);
    } catch {
      // Clipboard API unavailable — fail silently, link still works via mailto
    }
  };
  return { copied, copy };
}

export default function EmailCollection() {
  const [expanded, setExpanded] = useState(false);
  const { copied, copy } = useCopy();

  return (
    <section className="section" id="email-collection">
      <div className="s-label">Get In Touch</div>
      <h2 className="s-title">Email</h2>

      {/* Primary contact — the one address to actually use */}
      <motion.div
        className={styles.primaryEmailCard}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.primaryIcon}>
          <Mail size={26} />
        </div>
        <div className={styles.primaryDetails}>
          <span className={styles.primaryLabel}>Primary Contact Email</span>
          <span className={styles.primaryAddress}>{primaryEmail}</span>
        </div>
        <div className={styles.primaryActions}>
          <button
            className={styles.copyBtn}
            onClick={() => copy(primaryEmail)}
            aria-label="Copy email address"
          >
            {copied === primaryEmail ? <Check size={16} /> : <Copy size={16} />}
            {copied === primaryEmail ? 'Copied' : 'Copy'}
          </button>
          <a href={`mailto:${primaryEmail}`} className={styles.mailtoBtn}>
            Send Email
          </a>
        </div>
      </motion.div>

      {/* Collapsed alias directory */}
      <div className={styles.aliasSection}>
        <button
          className={styles.aliasToggle}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <span>
            Additional Contact Aliases <span className={styles.countBadge}>{emailAliases.length}</span>
          </span>
          <ChevronDown
            size={18}
            style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}
          />
        </button>

        {expanded && (
          <div className={styles.aliasGrid}>
            {emailAliases.map((email) => (
              <div key={email} className={styles.aliasItem}>
                <span className={styles.aliasAddress}>{email}</span>
                <button
                  className={styles.aliasCopyBtn}
                  onClick={() => copy(email)}
                  aria-label={`Copy ${email}`}
                >
                  {copied === email ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

