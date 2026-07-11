import { useState, useEffect } from 'react';
import Preloader from './components/Preloader/Preloader.jsx';
import CustomCursor from './components/CustomCursor/CustomCursor.jsx';
import BackToTop from './components/BackToTop/BackToTop.jsx';
import StickyCTA from './components/StickyCTA/StickyCTA.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useScrollFade } from './hooks/useScrollFade.js';

// Section imports (Sections 2–9 components) assembled on the Home page
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import ProjectGrid from './components/ProjectGrid/ProjectGrid.jsx';
import GitHubCollection from './components/GitHubCollection/GitHubCollection.jsx';
import Organizations from './components/Organizations/Organizations.jsx';
import LovableCollection from './components/LovableCollection/LovableCollection.jsx';
import EmailCollection from './components/EmailCollection/EmailCollection.jsx';
import Certificates from './components/Certificates/Certificates.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import ServiceTiers from './components/ServiceTiers/ServiceTiers.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
import ContactSection from './pages/ContactSection.jsx';

export default function App() {
  const [booted, setBooted] = useState(false);
  useScrollFade();

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (!isTouch) {
      document.body.classList.add('custom-cursor-active');
    }
  }, []);

  return (
    <>
      <Preloader onComplete={() => setBooted(true)} />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <div className="section-sep" />
        <About />
        <div className="section-sep" />
        <Skills />
        <div className="section-sep" />
        <ProjectGrid />
        <div className="section-sep" />
        <GitHubCollection />
        <div className="section-sep" />
        <Organizations />
        <div className="section-sep" />
        <LovableCollection />
        <div className="section-sep" />
        <EmailCollection />
        <div className="section-sep" />
        <Certificates />
        <div className="section-sep" />
        <Testimonials />
        <div className="section-sep" />
        <ServiceTiers />
        <div className="section-sep" />
        <FAQ />
        <div className="section-sep" />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
      <StickyCTA />
    </>
  );
}
