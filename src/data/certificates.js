/**
 * Programming Hub certificate data.
 *
 * Structure supports 9 categories matching your stated totals (82 certs total).
 * Only ONE real, verifiable certificate was provided in the source brief
 * (C Programming, id 1720080366600). All other entries are marked
 * `isPlaceholder: true` and render with a distinct "pending data" style
 * rather than fake verify links — replace with real data as you collect it.
 *
 * To add a real certificate: fill in name/date/id, set isPlaceholder: false.
 * The verify URL pattern (confirmed from your real example) is:
 *   https://www.programminghub.io/certificate?id={id}
 */

const verifyUrl = (id) => `https://www.programminghub.io/certificate?id=${id}`;

export const certCategories = [
  {
    key: 'Programming Languages',
    icon: '⌨️',
    expectedCount: 13,
    certs: [
      {
        name: 'C Programming',
        date: 'Jul 4, 2024',
        id: '1720080366600',
        isPlaceholder: false,
      },
      // 12 more certificates expected in this category — add real data here.
      ...Array.from({ length: 12 }, (_, i) => ({
        name: `Programming Languages Certificate #${i + 2}`,
        date: null,
        id: null,
        isPlaceholder: true,
      })),
    ],
  },
  {
    key: 'Web Development',
    icon: '🌐',
    expectedCount: 13,
    certs: Array.from({ length: 13 }, (_, i) => ({
      name: `Web Development Certificate #${i + 1}`,
      date: null,
      id: null,
      isPlaceholder: true,
    })),
  },
  {
    key: 'Mobile & App Dev',
    icon: '📱',
    expectedCount: 7,
    certs: Array.from({ length: 7 }, (_, i) => ({
      name: `Mobile & App Dev Certificate #${i + 1}`,
      date: null,
      id: null,
      isPlaceholder: true,
    })),
  },
  {
    key: 'Databases',
    icon: '🗄️',
    expectedCount: 6,
    certs: Array.from({ length: 6 }, (_, i) => ({
      name: `Databases Certificate #${i + 1}`,
      date: null,
      id: null,
      isPlaceholder: true,
    })),
  },
  {
    key: 'AI & Data Science',
    icon: '🤖',
    expectedCount: 11,
    certs: Array.from({ length: 11 }, (_, i) => ({
      name: `AI & Data Science Certificate #${i + 1}`,
      date: null,
      id: null,
      isPlaceholder: true,
    })),
  },
  {
    key: 'Security & DevOps',
    icon: '🔐',
    expectedCount: 10,
    certs: Array.from({ length: 10 }, (_, i) => ({
      name: `Security & DevOps Certificate #${i + 1}`,
      date: null,
      id: null,
      isPlaceholder: true,
    })),
  },
  {
    key: 'Blockchain',
    icon: '⛓️',
    expectedCount: 4,
    certs: Array.from({ length: 4 }, (_, i) => ({
      name: `Blockchain Certificate #${i + 1}`,
      date: null,
      id: null,
      isPlaceholder: true,
    })),
  },
  {
    key: 'Software Engineering',
    icon: '🛠️',
    expectedCount: 7,
    certs: Array.from({ length: 7 }, (_, i) => ({
      name: `Software Engineering Certificate #${i + 1}`,
      date: null,
      id: null,
      isPlaceholder: true,
    })),
  },
  {
    key: 'Marketing & Business',
    icon: '📈',
    expectedCount: 11,
    certs: Array.from({ length: 11 }, (_, i) => ({
      name: `Marketing & Business Certificate #${i + 1}`,
      date: null,
      id: null,
      isPlaceholder: true,
    })),
  },
];

// Flatten for search/filter operations, attaching category metadata to each cert
export const allCertificates = certCategories.flatMap((cat) =>
  cat.certs.map((cert, idx) => ({
    ...cert,
    category: cat.key,
    categoryIcon: cat.icon,
    uid: `${cat.key}-${idx}`,
    verifyLink: cert.id ? verifyUrl(cert.id) : null,
  }))
);

export const totalCertCount = allCertificates.length; // 82
export const realCertCount = allCertificates.filter((c) => !c.isPlaceholder).length;

