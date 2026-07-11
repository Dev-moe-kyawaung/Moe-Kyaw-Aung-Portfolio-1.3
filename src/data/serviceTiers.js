/**
 * Service engagement tiers — positioned as project-based/contract offerings
 * rather than SaaS subscriptions, matching a senior freelance developer's
 * actual service model. Prices marked as "Starting at" — always negotiate
 * final scope directly; these are anchor points, not fixed invoices.
 */
export const serviceTiers = [
  {
    name: 'Consultation',
    price: '$45',
    unit: '/ hour',
    tagline: 'Architecture review & technical guidance',
    featured: false,
    features: [
      'Code review & architecture audit',
      'Technical feasibility assessment',
      'Firebase / REST API integration advice',
      'Security & performance recommendations',
      '1:1 video call session',
    ],
    cta: 'Book a Session',
  },
  {
    name: 'MVP Build',
    price: '$1,200',
    unit: '/ project',
    tagline: 'End-to-end app from concept to release-ready build',
    featured: true,
    features: [
      'Full Kotlin + Jetpack Compose app',
      'MVVM / Clean Architecture setup',
      'Firebase backend integration',
      'REST API consumption & local caching (Room)',
      'Unit + UI testing included',
      'Play Store release preparation',
      '30-day post-launch support',
    ],
    cta: 'Start a Project',
  },
  {
    name: 'Ongoing Partnership',
    price: '$2,800',
    unit: '/ month',
    tagline: 'Dedicated senior developer for continuous product work',
    featured: false,
    features: [
      'Dedicated development hours (part-time)',
      'CI/CD pipeline setup & maintenance',
      'Feature development & bug resolution',
      'Code quality & mentorship for junior devs',
      'Priority response time (24h)',
      'Monthly architecture & security review',
    ],
    cta: 'Discuss Retainer',
  },
];
