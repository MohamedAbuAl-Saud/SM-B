import React from 'react';
import { SMLogo } from './SMLogo';
import { Language } from '../types';
import { Send, Github, Shield, Terminal, ArrowUp } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = {
    en: {
      name: 'MOHAMED ABU AL-SAUD EZZAT',
      title: 'Cybersecurity Student | Aspiring Penetration Tester',
      tagline: 'Learning Today. Securing Tomorrow.',
      copyright: '© 2026 SM — Mohamed Abu Al-Saud Ezzat. All Rights Reserved.',
      privacyNote: 'Security-first portfolio: No tracking cookies or personal data harvesting.',
      backToTop: 'Back to Top',
    },
    ar: {
      name: 'محمد أبو السعود عزت',
      title: 'طالب أمن سيبراني | مختبر اختراق طموح',
      tagline: 'نتعلم اليوم. نحمي الغد.',
      copyright: '© 2026 SM — محمد أبو السعود عزت. جميع الحقوق محفوظة.',
      privacyNote: 'موقع يراعي الخصوصية والأمان: خالي تماماً من ملفات التتبع أو جمع البيانات الشخصية.',
      backToTop: 'العودة للأعلى',
    }
  }[language];

  return (
    <footer className="bg-black border-t border-zinc-900 py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-zinc-900">
          
          {/* Identity & Logo */}
          <div className="flex items-center gap-4">
            <SMLogo size="lg" />
            <div>
              <div className="text-lg font-bold text-white tracking-tight">
                {language === 'en' ? (
                  <>
                    MOHAMED <span className="text-[#FF2638]">ABU AL-SAUD EZZAT</span>
                  </>
                ) : (
                  <>
                    محمد <span className="text-[#FF2638]">أبو السعود عزت</span>
                  </>
                )}
              </div>
              <div className="text-xs text-[#FF2638] font-mono-data font-medium mt-0.5">
                {t.title}
              </div>
              <div className="text-xs text-[#9CA3AF] mt-1 italic">
                "{t.tagline}"
              </div>
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex flex-wrap items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/mohamedabual-saud"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#9CA3AF] hover:text-white hover:border-[#FF2638] hover:shadow-[0_0_15px_rgba(255,38,56,0.3)] transition-all flex items-center justify-center"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/A_Y_TR"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#9CA3AF] hover:text-[#229ED9] hover:border-[#229ED9] hover:shadow-[0_0_15px_rgba(34,158,217,0.3)] transition-all flex items-center justify-center"
              title="Telegram"
              aria-label="Telegram Channel"
            >
              <Send className="w-4 h-4" />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@a_y_tr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#9CA3AF] hover:text-[#FF2638] hover:border-[#FF2638] hover:shadow-[0_0_15px_rgba(255,38,56,0.3)] transition-all flex items-center justify-center"
              title="TikTok"
              aria-label="TikTok Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.32 6.32 0 0 0-.86-.06A6.34 6.34 0 0 0 3.1 15.6a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.5a8.28 8.28 0 0 0 4.81 1.54V6.69h-1z" />
              </svg>
            </a>

            {/* Scroll Top Button */}
            <button
              onClick={scrollToTop}
              type="button"
              className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#9CA3AF] hover:text-[#FF2638] hover:border-[#FF2638] hover:shadow-[0_0_15px_rgba(255,38,56,0.3)] transition-all flex items-center justify-center cursor-pointer ml-2 rtl:ml-0 rtl:mr-2"
              title={t.backToTop}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9CA3AF] font-mono-data gap-4">
          <div>
            {t.copyright}
          </div>
          <div>
            {t.privacyNote}
          </div>
        </div>

      </div>
    </footer>
  );
};
