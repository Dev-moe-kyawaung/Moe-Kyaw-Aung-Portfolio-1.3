import { useEffect } from 'react';

/**
 * Injects JSON-LD structured data for rich search results:
 * - Person schema → your professional identity, skills, social profiles
 * - WebSite schema → sitelinks search box eligibility
 * - BreadcrumbList → helps Google understand site hierarchy
 *
 * Injected via useEffect + manual <script> tag since React doesn't have
 * a native head-management API without an extra dependency (react-helmet).
 * This keeps the bundle lean — no added library for a handful of tags.
 */
export default function StructuredData() {
  useEffect(() => {
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Moe Kyaw Aung',
      alternateName: 'MKA',
      jobTitle: 'Senior Android Developer',
      description:
        'Android Developer with nearly 12 years of hands-on experience building secure, scalable, and user-friendly mobile applications using Kotlin, Jetpack Compose, and Firebase.',
      url: 'https://moekyawaung.dev',
      image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png',
      sameAs: [
        'https://github.com/Dev-moe-kyawaung/',
        'https://www.linkedin.com/in/moe-kyaw-aung-2653093a1',
        'https://gravatar.com/moekyawaung13721',
        'https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG',
        'https://vimeo.com/user252414232',
        'https://bsky.app/profile/moekyawaung96.bsky.social',
        'https://www.tumblr.com/moekyawaung',
        'https://www.flickr.com/people/204037451@N06',
      ],
      knowsAbout: [
        'Kotlin', 'Jetpack Compose', 'Android Development', 'Firebase',
        'Clean Architecture', 'MVVM', 'REST APIs', 'Mobile Security',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Independent / Freelance',
      },
      address: [
        {
          '@type': 'PostalAddress',
          addressLocality: 'Tachileik',
          addressCountry: 'MM',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Bangkok',
          addressCountry: 'TH',
        },
      ],
    };

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Moe Kyaw Aung Portfolio',
      url: 'https://moekyawaung.dev',
      description: 'Portfolio and technical blog of Moe Kyaw Aung, Senior Android Developer.',
      inLanguage: ['en', 'my'],
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://moekyawaung.dev/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://moekyawaung.dev/#projects' },
        { '@type': 'ListItem', position: 3, name: 'Certificates', item: 'https://moekyawaung.dev/#certificates' },
        { '@type': 'ListItem', position: 4, name: 'Blog', item: 'https://moekyawaung.dev/#blog' },
        { '@type': 'ListItem', position: 5, name: 'Contact', item: 'https://moekyawaung.dev/#contact' },
      ],
    };

    const schemas = [personSchema, websiteSchema, breadcrumbSchema];
    const scriptTags = schemas.map((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    // Cleanup on unmount (route change away, though this stays mounted at App root)
    return () => scriptTags.forEach((tag) => document.head.removeChild(tag));
  }, []);

  return null; // renders nothing — side-effect-only component
}

