import { useState } from 'react';
import { Send, CheckCircle2, MapPin } from 'lucide-react';
import SocialBar from '../SocialBar/SocialBar.jsx';
import { useLang } from '../../context/LangContext.jsx';
import styles from './Footer.module.css';

const SITEMAP_COLUMNS = [
  {
    heading: 'Navigation',
    links: [
      { label: 'Home', href: '#hero' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Certificates', href: '#certificates' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'GitHub Presence', href: '#github' },
      { label: 'Lovable Prototypes', href: '#lovable-apps' },
      { label: 'Service Tiers', href: '#services' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Resume (PDF)', href: '/resume.pdf' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Contact Form', href: '#contact' },
      { label: 'Email', href: '#email-collection' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/moe-kyaw-aung-2653093a1' },
      { label: 'GitHub', href: 'https://github.com/Dev-moe-kyawaung/' },
      { label: 'Gravatar', href: 'https://gravatar.com/moekyawaung13721' },
    ],
  },
];

/**
 * Newsletter signup form.
 * ★ BACKEND WIRING ★ — same pattern as ContactForm.jsx.
 * Replace NEWSLETTER_ENDPOINT with a real Formspree/Mailchimp/ConvertKit
 * endpoint before production. Currently simulates success after validation
 * so the UI/UX is fully demonstrable without a live backend.
 */
const NEWSLETTER_ENDPOINT = 'https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID'; // ★ replace this

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit} noValidate>
      <label htmlFor="newsletter-email" className={styles.newsletterLabel}>
        Subscribe for dev insights &amp; new project updates
      </label>
      <div className={styles.newsletterInputRow}>
        <input
          id="newsletter-email"
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.newsletterInput}
          aria-label="Email address for newsletter"
        />
        <button
          type="submit"
          className={styles.newsletterBtn}
          disabled={status === 'submitting'}
          aria-label="Subscribe"
        >
          {status === 'success' ? <CheckCircle2 size={18} /> : <Send size={18} />}
        </button>
      </div>
      {error && <span className={styles.newsletterError}>{error}</span>}
      {status === 'success' && (
        <span className={styles.newsletterSuccess}>✓ Subscribed! Check your inbox to confirm.</span>
      )}
      {status === 'error' && (
        <span className={styles.newsletterError}>Something went wrong. Try again later.</span>
      )}
    </form>
  );
}

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Brand + newsletter column */}
        <div className={styles.brandCol}>
          <a href="#hero" className={styles.brandLogo}>
            <span className={styles.bracket}>&lt;</span>MKA<span className={styles.bracket}>/&gt;</span>
          </a>
          <p className={styles.brandTagline}>
            ⭐ MOE KYAW AUNG ⭐<br />Android Senior Developer
          </p>
          <p className={styles.brandDesc}>
            Building secure, scalable, and user-friendly mobile applications with
            nearly 12 years of hands-on Android engineering experience.
          </p>
          <NewsletterForm />
        </div>

        {/* Sitemap columns */}
        {SITEMAP_COLUMNS.map((col) => (
          <div className={styles.linkCol} key={col.heading}>
            <h4 className={styles.colHeading}>{col.heading}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Mini location + socials column */}
        <div className={styles.locationCol}>
          <h4 className={styles.colHeading}>Location</h4>
          <p className={styles.locationLine}>
            <MapPin size={14} /> Tachileik, Myanmar 🇲🇲
          </p>
          <p className={styles.locationLine}>
            <MapPin size={14} /> Bangkok, Thailand 🇹🇭
          </p>
          <div className={styles.footerSocials}>
            <SocialBar compact />
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {year} Moe Kyaw Aung. All rights reserved.</p>
        <p className={styles.madeWith}>Built with React · Terminal aesthetic · v1.3</p>
      </div>
    </footer>
  );
}

