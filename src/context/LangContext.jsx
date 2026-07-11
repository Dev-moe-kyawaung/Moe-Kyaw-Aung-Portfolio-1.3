import { createContext, useContext, useState } from 'react';

/**
 * Expanded i18n dictionary — Burmese (mm) / English (en).
 * Extension pattern: add a new key to BOTH language objects, then call
 * t('yourKey') anywhere in the component tree. Missing keys fall back
 * to the key name itself (visible-but-safe failure, never a crash).
 */
const strings = {
  en: {
    // Navigation
    navHome: 'Home',
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navCerts: 'Certificates',
    navBlog: 'Blog',
    navContact: 'Contact',

    // Hero
    heroTag: 'ANDROID SENIOR DEVELOPER',
    heroDesc: 'Android Developer with nearly 12 years of hands-on experience building secure, scalable, and user-friendly mobile applications.',
    viewWork: 'View My Work',
    contactMe: 'Contact Me',
    openToWork: 'Open to Work',

    // About
    aboutLabel: 'About Me',
    aboutTitle: '12 Years Building Android Experiences That Scale',
    aboutBody: 'Android Developer with nearly 12 years of hands-on experience building secure, scalable, and user-friendly mobile applications. Strong in Kotlin and modern Jetpack development, Firebase integration, and REST API consumption.',
    statsYears: 'Years Experience',
    statsApps: 'App Installs',
    statsRepos: 'Public Repos',
    statsSatisfaction: 'Client Satisfaction',
    timelineTitle: 'The Journey So Far',

    // Skills / Projects
    skillsLabel: 'Tech Stack',
    skillsTitle: 'Skills & Technologies',
    projectsLabel: 'Portfolio',
    projectsTitle: 'My Create App Collection',

    // Sections
    certsTitle: 'Programming Hub Certificates',
    blogTitle: 'Dev Notes & Articles',
    servicesTitle: 'Service Tiers',
    faqTitle: 'Frequently Asked Questions',
    contactTitle: 'Get In Touch',

    // Footer
    footerRights: 'All rights reserved.',
    footerTagline: 'Building secure, scalable, and user-friendly mobile applications.',

    // Form
    formName: 'Name',
    formEmail: 'Email',
    formSubject: 'Subject',
    formMessage: 'Message',
    formSend: 'Send Message',
    formSending: 'Sending...',
    resumeDownload: 'Download Resume',
  },
  mm: {
    // Navigation
    navHome: 'ပင်မ',
    navAbout: 'ကျွန်ုပ်အကြောင်း',
    navSkills: 'ကျွမ်းကျင်မှုများ',
    navProjects: 'ပရောဂျက်များ',
    navCerts: 'လက်မှတ်များ',
    navBlog: 'ဘလော့ဂ်',
    navContact: 'ဆက်သွယ်ရန်',

    // Hero
    heroTag: 'အန်ဒရွိုက် ဆီနီယာ ဆော့ဖ်ဝဲရေးသားသူ',
    heroDesc: 'လုံခြုံပြီး တိုးချဲ့နိုင်သော၊ အသုံးပြုရလွယ်ကူသော မိုဘိုင်းအက်ပ်များကို နှစ် ၁၂ နီးပါး တီထွင်ဖန်တီးခဲ့သူ အန်ဒရွိုက် ဆော့ဖ်ဝဲအင်ဂျင်နီယာ။',
    viewWork: 'လုပ်ငန်းများကြည့်ရန်',
    contactMe: 'ဆက်သွယ်ရန်',
    openToWork: 'အလုပ်ရှာနေသည်',

    // About
    aboutLabel: 'ကျွန်ုပ်အကြောင်း',
    aboutTitle: 'နှစ် ၁၂ ကြာ အန်ဒရွိုက်အက်ပ်များ တီထွင်ခဲ့သည်',
    aboutBody: 'လုံခြုံပြီး တိုးချဲ့နိုင်သော မိုဘိုင်းအက်ပ်များကို နှစ် ၁၂ နီးပါး တီထွင်ဖန်တီးခဲ့သူ။ Kotlin နှင့် Jetpack Compose၊ Firebase ပေါင်းစည်းမှု၊ REST API အသုံးပြုမှုတို့တွင် ကျွမ်းကျင်သည်။',
    statsYears: 'နှစ်ရှည်အတွေ့အကြုံ',
    statsApps: 'အက်ပ်ထည့်သွင်းမှုများ',
    statsRepos: 'အများသုံး Repo များ',
    statsSatisfaction: 'ဖောက်သည်စိတ်ကျေနပ်မှု',
    timelineTitle: 'ယနေ့အထိ ခရီးစဉ်',

    // Skills / Projects
    skillsLabel: 'နည်းပညာများ',
    skillsTitle: 'ကျွမ်းကျင်မှုနှင့် နည်းပညာများ',
    projectsLabel: 'လုပ်ငန်းများ',
    projectsTitle: 'ကျွန်ုပ်ဖန်တီးထားသော အက်ပ်များ',

    // Sections
    certsTitle: 'Programming Hub လက်မှတ်များ',
    blogTitle: 'ဆော့ဖ်ဝဲရေးသားခြင်း မှတ်စုများ',
    servicesTitle: 'ဝန်ဆောင်မှု အဆင့်များ',
    faqTitle: 'မေးလေ့ရှိသောမေးခွန်းများ',
    contactTitle: 'ဆက်သွယ်ရန်',

    // Footer
    footerRights: 'မူပိုင်ခွင့်အားလုံး ရယူထားသည်။',
    footerTagline: 'လုံခြုံပြီး အသုံးပြုရလွယ်ကူသော မိုဘိုင်းအက်ပ်များ တီထွင်ခြင်း။',

    // Form
    formName: 'အမည်',
    formEmail: 'အီးမေးလ်',
    formSubject: 'ခေါင်းစဉ်',
    formMessage: 'စာသား',
    formSend: 'စာပို့ရန်',
    formSending: 'ပို့နေသည်...',
    resumeDownload: 'ဒေါင်းလုဒ်လုပ်ရန်',
  },
};

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('mka-lang') || 'en');

  const toggleLang = () => {
    const next = lang === 'en' ? 'mm' : 'en';
    setLang(next);
    localStorage.setItem('mka-lang', next);
    document.documentElement.setAttribute('lang', next === 'mm' ? 'my' : 'en');
  };

  /**
   * Translation function with safe fallback:
   * - Returns the translated string if found
   * - Falls back to the English string if the mm key is missing
   * - Falls back to the raw key itself if neither exists (visible bug, not a crash)
   */
  const t = (key) => strings[lang]?.[key] ?? strings.en[key] ?? key;

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('mka-lang') || 'en');

  const toggleLang = () => {
    const next = lang === 'en' ? 'mm' : 'en';
    setLang(next);
    localStorage.setItem('mka-lang', next);
  };

  const t = (key) => strings[lang][key] || key;

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

