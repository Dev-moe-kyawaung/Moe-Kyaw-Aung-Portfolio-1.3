import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Languages, Download } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext.jsx';
import { useLang } from '../../context/LangContext.jsx';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#hero', key: 'navHome' },
  { href: '#about', key: 'navAbout' },
  { href: '#projects', key: 'navProjects' },
  { href: '#certificates', key: 'navCerts' },
  { href: '#contact', key: 'navContact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo / Brand */}
        <a href="#hero" className={styles.brand} onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}>
          <span className={styles.bracket}>&lt;</span>
          MKA
          <span className={styles.bracket}>/&gt;</span>
        </a>

        {/* Desktop nav links */}
        <nav className={styles.navLinks} aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className={styles.controls}>
          <button
            className={styles.iconBtn}
            onClick={toggleLang}
            aria-label="Toggle language"
            title={lang === 'en' ? 'Switch to Burmese' : 'Switch to English'}
          >
            <Languages size={18} />
            <span className={styles.langLabel}>{lang.toUpperCase()}</span>
          </button>

          <button
            className={styles.iconBtn}
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/resume.pdf"
            download
            className={styles.resumeBtn}
            aria-label="Download resume PDF"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>

          <button
            className={styles.hamburger}
            onClick={() => setOpen(!open)}
            aria-label="Toggle mobile menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {t(link.key)}
          </a>
        ))}
      </nav>
    </header>
  );
}

