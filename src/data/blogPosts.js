/**
 * Blog post metadata. Content bodies live in matching .mdx files under
 * src/content/blog/ (see BlogPost.jsx for the dynamic import pattern).
 * Topics chosen to reflect genuine Android/Kotlin senior-dev expertise
 * areas mentioned across your brief.
 */
export const blogPosts = [
  {
    slug: 'clean-architecture-android-2025',
    title: 'Clean Architecture in Android: A Practical Guide for 2025',
    excerpt: 'Why layered architecture still matters with Compose, and how to avoid over-engineering a simple app into an unmaintainable one.',
    date: '2025-01-15',
    readTime: '8 min read',
    tags: ['Architecture', 'Kotlin', 'Compose'],
    coverImage: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795847/copilot_image_1778795115579_acfm5j.png',
  },
  {
    slug: 'firebase-security-rules-mistakes',
    title: '5 Firebase Security Rules Mistakes That Cost Me a Production Incident',
    excerpt: 'Real lessons from a Firestore security rules misconfiguration — what went wrong, how it was caught, and the audit checklist I use now.',
    date: '2024-11-02',
    readTime: '6 min read',
    tags: ['Firebase', 'Security'],
    coverImage: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778794626112_ega7kk.png',
  },
  {
    slug: 'migrating-java-to-kotlin-incrementally',
    title: 'Migrating a Legacy Java Codebase to Kotlin — Incrementally, Without Breaking Releases',
    excerpt: 'A module-by-module migration strategy that kept a production app shipping on schedule while modernizing the codebase underneath it.',
    date: '2024-08-20',
    readTime: '10 min read',
    tags: ['Kotlin', 'Java', 'Migration'],
    coverImage: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795859/copilot_image_1778794430377_n7xlmz.png',
  },
  {
    slug: 'on-device-ml-tflite-android',
    title: 'Bringing On-Device ML to Android with TensorFlow Lite',
    excerpt: 'Notes from building a lightweight on-device inference pipeline — model size tradeoffs, quantization, and battery impact testing.',
    date: '2024-06-11',
    readTime: '7 min read',
    tags: ['AI/ML', 'TFLite', 'Performance'],
    coverImage: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778795000722_eo96gj.png',
  },
];

