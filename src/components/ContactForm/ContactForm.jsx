import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { useFormValidation } from './useFormValidation.js';
import styles from './ContactForm.module.css';

/**
 * ★ BACKEND WIRING ★
 * Replace FORM_ENDPOINT with your own service:
 *
 * Option A — Formspree (recommended, zero backend):
 *   1. Sign up at https://formspree.io
 *   2. Create a form, copy the endpoint (looks like https://formspree.io/f/xxxxxxx)
 *   3. Paste it below
 *
 * Option B — EmailJS: swap the fetch() call for emailjs.send(...)
 * Option C — Your own API: point FORM_ENDPOINT at e.g. https://api.yoursite.com/contact
 */
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'; // ★ replace this

const STATUS = {
  IDLE: 'idle',
  SUBMITTING: 'submitting',
  SUCCESS: 'success',
  ERROR: 'error',
};

export default function ContactForm() {
  const { values, errors, touched, handleChange, handleBlur, validateAll, reset } = useFormValidation();
  const [status, setStatus] = useState(STATUS.IDLE);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAll()) return;

    setStatus(STATUS.SUBMITTING);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus(STATUS.SUCCESS);
        reset();
        setTimeout(() => setStatus(STATUS.IDLE), 5000);
      } else {
        setStatus(STATUS.ERROR);
      }
    } catch {
      setStatus(STATUS.ERROR);
    }
  };

  const isSubmitting = status === STATUS.SUBMITTING;

  return (
    <div className={styles.formWrap}>
      <form onSubmit={handleSubmit} noValidate className={styles.form}>
        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.input} ${touched.name && errors.name ? styles.inputError : ''}`}
              placeholder="Your full name"
              aria-invalid={!!(touched.name && errors.name)}
              aria-describedby="name-error"
            />
            {touched.name && errors.name && (
              <span id="name-error" className={styles.errorMsg} role="alert">{errors.name}</span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.input} ${touched.email && errors.email ? styles.inputError : ''}`}
              placeholder="you@company.com"
              aria-invalid={!!(touched.email && errors.email)}
              aria-describedby="email-error"
            />
            {touched.email && errors.email && (
              <span id="email-error" className={styles.errorMsg} role="alert">{errors.email}</span>
            )}
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="subject" className={styles.label}>Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${touched.subject && errors.subject ? styles.inputError : ''}`}
            placeholder="Project inquiry, job opportunity, etc."
            aria-invalid={!!(touched.subject && errors.subject)}
            aria-describedby="subject-error"
          />
          {touched.subject && errors.subject && (
            <span id="subject-error" className={styles.errorMsg} role="alert">{errors.subject}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.textarea} ${touched.message && errors.message ? styles.inputError : ''}`}
            placeholder="Tell me about your project, timeline, and requirements..."
            aria-invalid={!!(touched.message && errors.message)}
            aria-describedby="message-error"
          />
          <div className={styles.charCount}>{values.message.length} characters (min. 20)</div>
          {touched.message && errors.message && (
            <span id="message-error" className={styles.errorMsg} role="alert">{errors.message}</span>
          )}
        </div>

        <motion.button
          type="submit"
          className={styles.submitBtn}
          disabled={isSubmitting}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className={styles.spinner} /> Sending...
            </>
          ) : (
            <>
              <Send size={18} /> Send Message
            </>
          )}
        </motion.button>

        {status === STATUS.SUCCESS && (
          <div className={styles.statusSuccess} role="status">
            <CheckCircle2 size={18} /> Message sent successfully. I'll respond within 24-48 hours.
          </div>
        )}
        {status === STATUS.ERROR && (
          <div className={styles.statusError} role="alert">
            <XCircle size={18} /> Something went wrong. Please try again or email directly.
          </div>
        )}
      </form>
    </div>
  );
}

