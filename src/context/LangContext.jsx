import { createContext, useContext, useState } from 'react';

const strings = {
  en: {
    heroTag: 'ANDROID SENIOR DEVELOPER',
    heroDesc:
      'Android Developer with nearly 12 years of hands-on experience building secure, scalable, and user-friendly mobile applications.',
    viewWork: 'View My Work',
    contactMe: 'Contact Me',
    navHome: 'Home',
    navAbout: 'About',
    navProjects: 'Projects',
    navCerts: 'Certificates',
    navContact: 'Contact',
  },
  mm: {
    heroTag: 'အန်ဒရွိုက် ဆီနီယာ ဆော့ဖ်ဝဲရေးသားသူ',
    heroDesc:
      'လုံခြုံပြီး တိုးချဲ့နိုင်သော၊ အသုံးပြုရလွယ်ကူသော မိုဘိုင်းအက်ပ်များကို နှစ် ၁၂ နီးပါး တီထွင်ဖန်တီးခဲ့သူ အန်ဒရွိုက် ဆော့ဖ်ဝဲအင်ဂျင်နီယာ။',
    viewWork: 'လုပ်ငန်းများကြည့်ရန်',
    contactMe: 'ဆက်သွယ်ရန်',
    navHome: 'ပင်မ',
    navAbout: 'ကျွန်ုပ်အကြောင်း',
    navProjects: 'ပရောဂျက်များ',
    navCerts: 'လက်မှတ်များ',
    navContact: 'ဆက်သွယ်ရန်',
  },
};

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

