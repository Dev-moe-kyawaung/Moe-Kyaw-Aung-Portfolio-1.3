import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { certCategories, allCertificates, totalCertCount, realCertCount } from '../../data/certificates.js';
import CertCategoryBlock from './CertCategoryBlock.jsx';
import styles from './Certificates.module.css';

export default function Certificates() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter tabs — counts derived directly from data, never hardcoded/stale
  const filterTabs = useMemo(
    () => [
      { key: 'all', label: `All (${totalCertCount})` },
      ...certCategories.map((cat) => ({
        key: cat.key,
        label: `${cat.icon} ${cat.key} (${cat.certs.length})`,
      })),
    ],
    []
  );

  const filteredCerts = useMemo(() => {
    let result = allCertificates;

    if (activeFilter !== 'all') {
      result = result.filter((c) => c.category === activeFilter);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter((c) => c.name.toLowerCase().includes(q));
    }

    return result;
  }, [query, activeFilter]);

  // Re-group filtered results back into their categories for display
  const groupedResults = useMemo(() => {
    return certCategories
      .map((cat) => ({
        category: cat,
        certs: filteredCerts.filter((c) => c.category === cat.key),
      }))
      .filter((group) => group.certs.length > 0);
  }, [filteredCerts]);

  return (
    <section className="section" id="certificates">
      <div className="s-label">Credentials</div>
      <h2 className="s-title">Programming Hub Certificates</h2>

      <div className={styles.summaryBar}>
        <span>
          <strong>{realCertCount}</strong> verified · <strong>{totalCertCount - realCertCount}</strong> pending data entry · <strong>{totalCertCount}</strong> total
        </span>
      </div>

      {/* Search */}
      <div className={styles.searchWrap}>
        <Search size={16} className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search certificates..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search certificates"
        />
      </div>

      {/* Category filter tabs */}
      <div className={styles.filterTabs}>
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.filterBtn} ${activeFilter === tab.key ? styles.filterActive : ''}`}
            onClick={() => setActiveFilter(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className={styles.certContainer}>
        {groupedResults.length === 0 ? (
          <p className={styles.noResults}>No certificates match “{query}”.</p>
        ) : (
          groupedResults.map((group) => (
            <CertCategoryBlock
              key={group.category.key}
              category={group.category}
              certs={group.certs}
            />
          ))
        )}
      </div>
    </section>
  );
}

