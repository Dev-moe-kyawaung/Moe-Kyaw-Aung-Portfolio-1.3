/**
 * FAQ content addressing real, practical questions a prospective client
 * or recruiter would ask before engaging or hiring.
 */
export const faqs = [
  {
    q: 'What Android development stack do you specialize in?',
    a: 'Kotlin as the primary language, Jetpack Compose for modern declarative UI, MVVM and Clean Architecture for structure, Room for local persistence, and Firebase (Auth, Firestore, Cloud Messaging, Crashlytics) for backend services. I also integrate REST APIs via Retrofit/OkHttp and write unit/UI tests alongside feature work rather than as an afterthought.',
  },
  {
    q: 'Do you work with existing legacy Java codebases?',
    a: "Yes. I've migrated multiple production Java codebases to Kotlin incrementally without disrupting release schedules — including introducing MVVM patterns and modularization into existing monolithic structures.",
  },
  {
    q: 'Can you handle the full app lifecycle, including Play Store release?',
    a: 'Yes — from initial architecture decisions through UI implementation, backend integration, testing, signing, and Play Store submission including store listing assets, privacy policy compliance, and release track management (internal/closed/open/production).',
  },
  {
    q: 'How do you approach app security?',
    a: 'Practical, layered security: secure local storage (EncryptedSharedPreferences/Room with SQLCipher where warranted), certificate pinning for sensitive APIs, proper Firebase security rules, obfuscation via R8/ProGuard, and avoiding common OWASP Mobile Top 10 pitfalls. My background includes ethical hacking fundamentals, which informs how I think about attack surfaces during development, not just after.',
  },
  {
    q: 'Do you offer fixed-price projects or hourly billing?',
    a: 'Both, depending on project clarity. Well-scoped MVPs work well as fixed-price engagements (see Service Tiers above). Ongoing feature work, maintenance, or exploratory projects are better suited to hourly or monthly retainer arrangements.',
  },
  {
    q: 'What is your typical communication and reporting cadence?',
    a: 'Async-first via your preferred channel (Slack, Telegram, or email), with scheduled video check-ins at key milestones. For retainer engagements, I provide a brief weekly summary of completed work, blockers, and next priorities.',
  },
  {
    q: 'Can you work across time zones with international clients?',
    a: "Yes — based between Tachileik, Myanmar and Bangkok, Thailand, and comfortable structuring overlap hours with clients across Asia-Pacific, Europe, and US time zones for standups and reviews.",
  },
  {
    q: 'Do you provide source code ownership and documentation?',
    a: 'Yes — full source code, commit history, and architecture documentation are handed over as part of every engagement. No vendor lock-in; you own what you pay for.',
  },
];
