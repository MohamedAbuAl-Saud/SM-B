import React, { useState, useEffect } from 'react';
import { SMLogo } from './SMLogo';
import { Language } from '../types';
import { Globe, Menu, X, Shield, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, onToggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy to update active section automatically
      const sections = ['home', 'about', 'journey', 'skills', 'certifications', 'knowledge', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed 'Projects' page completely as requested
  const navLinks = language === 'en' ? [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills & Logos', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Knowledge', href: '#knowledge' },
    { name: 'Contact', href: '#contact' },
  ] : [
    { name: 'الرئيسية', href: '#home' },
    { name: 'عن الباحث', href: '#about' },
    { name: 'المسيرة', href: '#journey' },
    { name: 'المهارات والشعارات', href: '#skills' },
    { name: 'الشهادات', href: '#certifications' },
    { name: 'مشاركة المعرفة', href: '#knowledge' },
    { name: 'تواصل', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-zinc-900 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.9)]'
          : 'bg-black/70 backdrop-blur-sm border-b border-white/[0.04] py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-1.5 sm:gap-4 lg:gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={() => setActiveTab('#home')}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2638] rounded-lg shrink-0"
          >
            <div className="scale-90 sm:scale-100 origin-left rtl:origin-right">
              <SMLogo size="md" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-base lg:text-lg font-bold tracking-tight text-white transition-colors whitespace-nowrap">
                {language === 'en' ? (
                  <>
                    MOHAMED <span className="text-[#FF2638]">ABU AL-SAUD</span>
                  </>
                ) : (
                  <>
                    محمد <span className="text-[#FF2638]">أبو السعود</span>
                  </>
                )}
              </span>
              <span className="text-[9px] sm:text-[11px] tracking-widest text-[#9CA3AF] uppercase font-mono-data">
                SM · CYBERSECURITY
              </span>
            </div>
          </a>

          {/* Zone 2: Desktop Navigation Links (clean page tabs at the top with active red underline) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeTab === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveTab(link.href)}
                  className={`transition-colors relative py-1 group whitespace-nowrap shrink-0 ${
                    isActive ? 'text-white font-bold' : 'text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2.5px] bg-[#FF2638] rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-full shadow-[0_0_12px_#FF2638]'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Language & Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLanguage}
              type="button"
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold rounded-lg bg-black border border-zinc-800 text-[#F3F4F6] hover:border-[#FF2638]/60 hover:text-[#FF2638] transition-colors whitespace-nowrap cursor-pointer shadow-sm shrink-0"
              aria-label="Toggle language"
              title={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
            >
              <Globe className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF2638] shrink-0" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#FF2638] hover:bg-[#8D101F] rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(255,38,56,0.3)] hover:shadow-[0_0_25px_rgba(255,38,56,0.5)] whitespace-nowrap shrink-0"
            >
              <span>{language === 'en' ? 'Connect' : 'تواصل'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-1.5 sm:p-2 text-[#9CA3AF] hover:text-white bg-black border border-zinc-800 rounded-lg cursor-pointer shrink-0"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 sm:w-5 h-4 sm:h-5 text-[#FF2638]" /> : <Menu className="w-4 sm:w-5 h-4 sm:h-5 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-xl border-b border-zinc-900 px-4 pt-4 pb-6 mt-3 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeTab === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors border-l-2 rtl:border-l-0 rtl:border-r-2 ${
                    isActive
                      ? 'bg-zinc-900 text-[#FF2638] border-[#FF2638] font-bold'
                      : 'text-[#F3F4F6] border-transparent hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-zinc-900 flex items-center justify-between">
              <span className="text-xs text-[#9CA3AF] font-mono-data">MOHAMED ABU AL-SAUD</span>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-1.5 text-xs font-bold text-white bg-[#FF2638] rounded-md"
              >
                {language === 'en' ? 'Contact Directly' : 'تواصل مباشرة'}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
