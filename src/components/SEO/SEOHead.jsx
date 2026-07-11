import { useEffect } from 'react';

/**
 * Dynamically updates document title + meta description per route —
 * critical for blog posts, since index.html's static tags (Section 13)
 * only cover the homepage. Without this, every blog post shares the
 * same <title>, hurting both SEO and browser tab/bookmark clarity.
 */
export default function SEOHead({ title, description }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} | Moe Kyaw Aung` : 'Moe Kyaw Aung — Senior Android Developer';

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content');

    if (metaDesc && description) {
      metaDesc.setAttribute('content', description);
    }

    // Restore homepage defaults when navigating away
    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.setAttribute('content', prevDesc);
    };
  }, [title, description]);

  return null;
}

