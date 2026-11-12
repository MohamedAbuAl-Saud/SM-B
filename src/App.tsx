import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { JourneyTimeline } from './components/JourneyTimeline';
import { SkillsDashboard } from './components/SkillsDashboard';
import { Certifications } from './components/Certifications';
import { ContinuousLearning } from './components/ContinuousLearning';
import { KnowledgeSharing } from './components/KnowledgeSharing';
import { GoalsVision } from './components/GoalsVision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'ar' || urlLang === 'en') return urlLang;
    const saved = localStorage.getItem('sm_portfolio_lang');
    return (saved === 'ar' || saved === 'en') ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('sm_portfolio_lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

    if (language === 'ar') {
      document.title = 'محمد أبو السعود عزت | معرض الأمن السيبراني واختبار الاختراق (SM)';
    } else {
      document.title = 'Mohamed Abu Al-Saud Ezzat | Cybersecurity & Penetration Testing Portfolio (SM)';
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <div className="min-h-screen bg-black text-[#F3F4F6] relative selection:bg-[#FF2638] selection:text-white">
      {/* Top Navigation */}
      <Navbar language={language} onToggleLanguage={toggleLanguage} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero / Main Identity */}
        <Hero language={language} />

        {/* 2. About Me / Personal Biography */}
        <About language={language} />

        {/* 3. My Journey / 4-Year Progression Timeline */}
        <JourneyTimeline language={language} />

        {/* 4. Skills Dashboard / Technical Matrix */}
        <SkillsDashboard language={language} />

        {/* 5. Certifications / 7 Official Original Certificates */}
        <Certifications language={language} />

        {/* 6. Continuous Learning / Curricula (Linux, CCNA, CEH, eJPT) */}
        <ContinuousLearning language={language} />

        {/* 7. Knowledge Sharing / Community & Education */}
        <KnowledgeSharing language={language} />

        {/* 8. Ambitions & Vision / 8 Core Goals */}
        <GoalsVision language={language} />

        {/* 9. Contact & Social Channels */}
        <Contact language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}
