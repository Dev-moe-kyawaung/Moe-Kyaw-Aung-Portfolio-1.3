import { useEffect, useCallback } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import styles from './Lightbox.module.css';

/**
 * Accessible modal lightbox for full-size project image preview.
 * Closes on: backdrop click, Escape key, or close button.
 * Traps scroll on the body while open.
 */
export default function Lightbox({ project, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!project) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} preview`}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close preview">
          <X size={20} />
        </button>

        <img src={project.image} alt={`${project.title} full preview`} className={styles.modalImg} />

        <div className={styles.modalInfo}>
          <h3>{project.emoji} {project.title}</h3>
          <p>{project.description}</p>
          <div className={styles.techRow}>
            {project.tech.map((t) => (
              <span key={t} className={styles.techPill}>{t}</span>
            ))}
          </div>
          <div className={styles.modalLinks}>
            <a href={project.repo} target="_blank" rel="noreferrer" className={styles.modalBtn}>
              <Github size={16} /> View Source
            </a>
            <a href={project.repo} target="_blank" rel="noreferrer" className={styles.modalBtnGhost}>
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

