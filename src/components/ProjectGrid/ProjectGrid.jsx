import { useState } from 'react';
import { projectsData } from '../../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import Lightbox from './Lightbox.jsx';
import styles from './ProjectGrid.module.css';

/**
 * Pinterest-style masonry grid using CSS columns (most performant,
 * no JS layout calculation needed). Cards have varying `span` classes
 * that control min-height for visual rhythm.
 */
export default function ProjectGrid() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="s-label">Portfolio</div>
      <h2 className="s-title">My Create App Collection</h2>
      <p className={styles.subtitle}>
        16 production-style Android &amp; web applications — from POS systems to AI-powered tools.
      </p>

      <div className={styles.masonry}>
        {projectsData.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onOpen={setActiveProject}
          />
        ))}
      </div>

      {activeProject && (
        <Lightbox project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}

