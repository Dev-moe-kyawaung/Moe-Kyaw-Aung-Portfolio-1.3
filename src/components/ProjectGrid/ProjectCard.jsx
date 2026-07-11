import { motion } from 'framer-motion';
import { Github, ExternalLink, ZoomIn } from 'lucide-react';
import styles from './ProjectGrid.module.css';

/**
 * Single masonry card. Clicking the image opens the lightbox (via onOpen callback);
 * clicking repo/demo icons navigates directly without triggering the lightbox.
 */
export default function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.article
      className={`${styles.card} ${styles[project.span]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
    >
      <div className={styles.imgWrap} onClick={() => onOpen(project)}>
        <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
        <div className={styles.imgOverlay}>
          <ZoomIn size={22} />
        </div>
        {project.tag && <span className={styles.tag}>{project.tag}</span>}
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>
          <span>{project.emoji}</span> {project.title}
        </h3>
        <p className={styles.cardDesc}>{project.description}</p>

        <div className={styles.techRow}>
          {project.tech.map((t) => (
            <span key={t} className={styles.techPill}>{t}</span>
          ))}
        </div>

        <div className={styles.cardLinks}>
          <a href={project.repo} target="_blank" rel="noreferrer" className={styles.cardLink}>
            <Github size={15} /> Source
          </a>
          <a href={project.repo} target="_blank" rel="noreferrer" className={styles.cardLink}>
            <ExternalLink size={15} /> Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

