import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLang } from '../../context/LangContext.jsx';
import styles from './LangBanner.module.css';

/**
 * Small dedicated callout demonstrating Burmese language support as an
 * explicit, discoverable feature (per brief requirement), rather than
 * a silent toggle buried only in the navbar.
 */
export default function LangBanner() {
  const { lang, toggleLang } = useLang();

  return (
    <motion.div
      className={styles.banner}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Languages size={18} />
      <span className={styles.text}>
        {lang === 'en'
          ? 'This site supports Burmese (မြန်မာဘာသာ) — switch language anytime.'
          : 'ဒီဆိုက်တွင် မြန်မာဘာသာ ပံ့ပိုးထားသည် — အချိန်မရွေး ဘာသာစကား ပြောင်းနိုင်သည်။'}
      </span>
      <button className={styles.switchBtn} onClick={toggleLang}>
        {lang === 'en' ? 'မြန်မာ' : 'English'}
      </button>
    </motion.div>
  );
}

