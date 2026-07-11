import { MapPin } from 'lucide-react';
import styles from './MapEmbed.module.css';

/**
 * Google Maps embed — no API key required using the basic `/maps/embed?pb=`
 * iframe format (free, no billing). Two-location toggle reflects your
 * stated dual-base presence: Tachileik, Myanmar and Bangkok, Thailand.
 */
const LOCATIONS = {
  tachileik: {
    label: 'Tachileik, Myanmar 🇲🇲',
    embedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15127.267!2d99.8734!3d20.4491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTachileik%2C+Myanmar!5e0!3m2!1sen!2sus',
  },
  bangkok: {
    label: 'Bangkok, Thailand 🇹🇭',
    embedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15621.267!2d100.5018!3d13.7563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBangkok%2C+Thailand!5e0!3m2!1sen!2sus',
  },
};

export default function MapEmbed({ location = 'bangkok' }) {
  const active = LOCATIONS[location];

  return (
    <div className={styles.mapWrap}>
      <div className={styles.mapHeader}>
        <MapPin size={16} />
        <span>{active.label}</span>
      </div>
      <iframe
        title={`Map location — ${active.label}`}
        src={active.embedSrc}
        width="100%"
        height="320"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.iframe}
      />
    </div>
  );
}

