import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import MapEmbed from '../components/MapEmbed/MapEmbed.jsx';
import SocialBar from '../components/SocialBar/SocialBar.jsx';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [activeLocation, setActiveLocation] = useState('bangkok');

  return (
    <section className="section" id="contact">
      <div className="s-label">Let's Talk</div>
      <h2 className="s-title">Get In Touch</h2>
      <p className={styles.subtitle}>
        Have a project in mind, a role to discuss, or a technical question?
        Fill out the form below or reach out directly through any channel.
      </p>

      <div className={styles.contactGrid}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          className={styles.sideCol}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.locationToggle}>
            <button
              className={activeLocation === 'tachileik' ? styles.locBtnActive : styles.locBtn}
              onClick={() => setActiveLocation('tachileik')}
            >
              🇲🇲 Tachileik
            </button>
            <button
              className={activeLocation === 'bangkok' ? styles.locBtnActive : styles.locBtn}
              onClick={() => setActiveLocation('bangkok')}
            >
              🇹🇭 Bangkok
            </button>
          </div>

          <MapEmbed location={activeLocation} />

          <div className={styles.socialWrap}>
            <span className={styles.socialLabel}>Or reach out directly:</span>
            <SocialBar />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
