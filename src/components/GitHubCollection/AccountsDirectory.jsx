import { useState, useMemo } from 'react';
import { ChevronDown, Search, Github } from 'lucide-react';
import { archiveAccounts } from '../../data/githubAccounts.js';
import styles from './GitHubCollection.module.css';

/**
 * Collapsible, searchable directory of secondary/archive GitHub Pages accounts.
 * Collapsed by default — user must intentionally expand it, keeping it from
 * dominating the visual hierarchy or first impression of the section.
 */
export default function AccountsDirectory() {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return archiveAccounts;
    return archiveAccounts.filter((acc) =>
      acc.handle.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className={styles.directory}>
      <button
        className={styles.directoryToggle}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>
          Archive &amp; Mirror Accounts <span className={styles.countBadge}>{archiveAccounts.length}</span>
        </span>
        <ChevronDown
          size={18}
          style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}
        />
      </button>

      {expanded && (
        <div className={styles.directoryBody}>
          <p className={styles.directoryNote}>
            Legacy GitHub Pages instances used for testing deployments, static demos, and
            learning experiments. The <strong>primary profile above</strong> reflects current,
            actively maintained work.
          </p>

          <div className={styles.searchWrap}>
            <Search size={16} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search archive accounts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search archive GitHub accounts"
            />
          </div>

          <div className={styles.archiveGrid}>
            {filtered.map((acc) => (
              <a
                key={acc.url}
                href={acc.url}
                target="_blank"
                rel="noreferrer"
                className={styles.archiveChip}
              >
                <Github size={13} />
                {acc.handle}
              </a>
            ))}
            {filtered.length === 0 && (
              <p className={styles.noResults}>No accounts match “{query}”.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

