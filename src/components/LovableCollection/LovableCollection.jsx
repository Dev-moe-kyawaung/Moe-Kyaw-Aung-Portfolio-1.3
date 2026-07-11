import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Search } from 'lucide-react';
import { lovableApps } from '../../data/lovableApps.js';
import styles from './LovableCollection.module.css';

export default function LovableCollection() {
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const featured = useMemo(() => lovableApps.filter((a) => a.featured), []);

  const filtered = useMemo(() => {
    const source = showAll ? lovableApps : featured;
    if (!query.trim()) return source;
    return source.filter(
      (app) =>
        app.name.toLowerCase().includes(query.toLowerCase()) ||
        app.desc.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, showAll, featured]);

  return (
    <section className="section" id="lovable-apps">
      <div className="s-label">Rapid Prototypes</div>
      <h2 className="s-title">Lovable.app Deployments</h2>
      <p className={styles.subtitle}>
        Experimental builds and rapid prototypes — CV generators, bio pages, and UI concepts
        deployed via the Lovable platform.
      </p>

      <div className={styles.controls}>
        <div className={styles.searchWrap}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search prototypes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
            aria-label="Search Lovable app prototypes"
          />
        </div>
        <button
          className={styles.toggleBtn}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? `Show Featured Only` : `Show All (${lovableApps.length})`}
        </button>
      </div>

      <div className={styles.grid}>
        {filtered.map((app, i) => (
          <motion.a
            key={app.url}
            href={app.url}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
            whileHover={{ y: -3 }}
          >
            {app.featured && (
              <span className={styles.featuredBadge}>
                <Sparkles size={12} /> Featured
              </span>
            )}
            <h3 className={styles.cardName}>{app.name}</h3>
            <p className={styles.cardDesc}>{app.desc}</p>
            <span className={styles.cardLink}>
              <ExternalLink size={13} /> {app.url.replace('https://', '')}
            </span>
          </motion.a>
        ))}

        {filtered.length === 0 && (
          <p className={styles.noResults}>No prototypes match “{query}”.</p>
        )}
      </div>
    </section>
  );
}

