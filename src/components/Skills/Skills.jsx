import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills.js';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="s-label">Tech Stack</div>
      <h2 className="s-title">Skills &amp; Technologies</h2>

      <div className={styles.cloud}>
        {skillsData.map((skill, i) => (
          <motion.span
            key={skill.name}
            className={styles.chip}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.35, delay: i * 0.02 }}
            whileHover={{ y: -3, scale: 1.05 }}
          >
            <span className={styles.chipIcon}>{skill.icon}</span>
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

