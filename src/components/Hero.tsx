import React, { useState } from 'react';
import { Language } from '../types';
import { Terminal, Shield, ArrowDown, Send, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const [bgError, setBgError] = useState(false);
  const heroBgSrc = bgError ? '/src/assets/images/hero_cyber_command_1794421079904.jpg' : '/SM.jpg';

  const t = {
    en: {
      kicker: 'CYBERSECURITY RESEARCHER · RED TEAM',
      title: 'Cybersecurity Student | Aspiring Penetration Tester',
      bio: 'Cybersecurity learner with five years of continuous self-driven learning, practical exploration, and technical development. Focused primarily on Red Team operations, ethical hacking, and penetration testing, while developing knowledge of Blue Team security and defensive practices.',
      educationNote: 'Learning through educational resources and training materials associated with Google, Egypt\'s Ministry of Communications and Information Technology, IBM, and Cisco Networking Academy.',
      metaInfo: ['16 Years Old', 'Egypt', 'General Secondary / Baccalaureate', '5 Years Continuous Learning', 'Red Team & PenTesting Focus'],
      ctaCerts: 'View Official Certifications',
      ctaJourney: 'Explore Learning Journey',
      scrollPrompt: 'Scroll down to explore',
    },
    ar: {
      kicker: 'باحث أمني · ممارس لعمليات الفريق الأحمر',
      title: 'طالب أمن سيبراني | مختبر اختراق طموح',
      bio: 'متعلم في مجال الأمن السيبراني مع خمس سنوات من التعلم الذاتي المستمر، والاستكشاف العملي، والتطوير التقني. يركز بشكل أساسي على عمليات الفريق الأحمر (Red Team)، والقرصنة الأخلاقية، واختبار الاختراق، مع بناء معرفة متينة بممارسات الفريق الأزرق والأمن الدفاعي.',
      educationNote: 'يتعلم من خلال موارد ومواد تعليمية وتدريبية مرتبطة بشركة جوجل، ووزارة الاتصالات وتكنولوجيا المعلومات المصرية، وآي بي إم، وأكاديمية سيسكو للشبكات.',
      metaInfo: ['١٦ عاماً', 'مصر', 'الثانوية العامة / البكالوريا المصرية', '٥ سنوات من التعلم المستمر', 'تركيز على الفريق الأحمر'],
      ctaCerts: 'عرض الشهادات الرسمية',
      ctaJourney: 'استكشف مسيرة التعلم',
      scrollPrompt: 'مرر للأسفل للاستكشاف',
    }
  }[language];

  return (
    <section id="home" className="relative py-24 sm:py-32 flex items-center pt-24 pb-20 overflow-hidden bg-black">
      {/* Full-width, full-height Homepage Background Image: SM.jpg */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgSrc}
          alt="Mohamed Abu Al-Saud Ezzat - SM Cybersecurity"
          onError={() => {
            if (!bgError) setBgError(true);
          }}
          className="w-full h-full object-cover object-[78%_center] xl:object-[82%_center] filter brightness-85 contrast-105 scale-105 transform hover:scale-100 transition-transform duration-1000"
          fetchPriority="high"
        />
        
        {/* Sleek pure-black atmospheric gradients for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 via-45% to-transparent max-w-4xl rtl:bg-gradient-to-l" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF2638]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Clear typographic hierarchy */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            
            {/* Minimalist Kicker */}
            <div className="inline-flex items-center gap-2 self-start text-xs font-mono-data tracking-wider text-[#FF2638] uppercase font-bold">
              <span className="w-2 h-2 rounded-full bg-[#FF2638] shadow-[0_0_8px_#FF2638]" />
              <span>{t.kicker}</span>
            </div>

            {/* Main Name with the rest after Mohamed in Cyber Red #FF2638 */}
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                {language === 'en' ? (
                  <>
                    MOHAMED <span className="text-[#FF2638]">ABU AL-SAUD EZZAT</span>
                  </>
                ) : (
                  <>
                    محمد <span className="text-[#FF2638]">أبو السعود عزت</span>
                  </>
                )}
              </h1>
              <div className="mt-2.5 flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-[#FF2638]/15 border border-[#FF2638]/40 text-xs font-mono-data font-bold text-[#FF2638] shadow-[0_0_12px_rgba(255,38,56,0.25)]">
                  @A_Y_TR
                </span>
                <span className="px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono-data font-bold text-blue-400">
                  {language === 'en' ? 'SM Team Leader' : 'قائد تيم SM'}
                </span>
              </div>
              <p className="mt-3 text-lg sm:text-2xl font-medium text-[#FF2638] flex items-center gap-2">
                <Terminal className="w-5 h-5 shrink-0" />
                <span>{t.title}</span>
              </p>
            </div>

            {/* Complete Uncropped Artwork Showcase on Mobile / Tablets */}
            <div className="lg:hidden w-full my-2 rounded-2xl overflow-hidden border border-[#FF2638]/40 shadow-[0_0_25px_rgba(255,38,56,0.25)] bg-black relative">
              <div className="relative aspect-[16/9] w-full bg-black">
                <img
                  src={heroBgSrc}
                  alt="Mohamed Abu Al-Saud Ezzat (SM) - Official Identity"
                  className="w-full h-full object-contain sm:object-cover bg-black"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="px-3.5 py-2 bg-zinc-950 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono-data text-[#9CA3AF]">
                <span className="text-[#FF2638] font-bold">SM · CYBERSECURITY</span>
                <span className="text-white text-[10px]">
                  {language === 'en' ? 'Official Visual Identity' : 'الهوية البصرية الرسمية'}
                </span>
              </div>
            </div>

            {/* Clean unboxed metadata strip without square boxes */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#9CA3AF] font-mono-data">
              {t.metaInfo.map((info, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-white/90">{info}</span>
                  {idx < t.metaInfo.length - 1 && <span className="text-[#FF2638]">·</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Biography */}
            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-2xl font-normal">
              {t.bio}
            </p>

            {/* Educational Background Note */}
            <div className="text-xs text-[#9CA3AF] leading-relaxed max-w-2xl">
              <span className="text-white font-semibold">
                {language === 'en' ? 'Education & Training: ' : 'التعليم والتدريب: '}
              </span>
              {t.educationNote}
            </div>

            {/* Action Buttons: Certifications & Journey */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#certifications"
                className="px-7 py-3.5 rounded-lg text-sm font-bold text-white bg-[#FF2638] hover:bg-[#8D101F] shadow-[0_0_20px_rgba(255,38,56,0.35)] hover:shadow-[0_0_30px_rgba(255,38,56,0.6)] transition-all duration-200 flex items-center gap-2"
              >
                <Shield className="w-4 h-4" />
                <span>{t.ctaCerts}</span>
              </a>

              <a
                href="#journey"
                className="px-7 py-3.5 rounded-lg text-sm font-bold text-white bg-black/80 hover:bg-zinc-900 border border-zinc-800 hover:border-[#FF2638]/50 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
              >
                <span>{t.ctaJourney}</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF2638]" />
              </a>
            </div>

            {/* Direct Official Channels: Telegram, TikTok, GitHub, WhatsApp */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <span className="text-xs font-mono-data text-[#9CA3AF]">
                {language === 'en' ? 'CHANNELS:' : 'القنوات المباشرة:'}
              </span>

              {/* GitHub */}
              <a
                href="https://github.com/mohamedabual-saud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/80 border border-zinc-800 text-[#9CA3AF] hover:text-white hover:border-[#FF2638] hover:shadow-[0_0_15px_rgba(255,38,56,0.35)] transition-all flex items-center justify-center"
                title="GitHub: mohamedabual-saud"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/A_Y_TR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/80 border border-zinc-800 text-[#9CA3AF] hover:text-[#229ED9] hover:border-[#229ED9] hover:shadow-[0_0_15px_rgba(34,158,217,0.35)] transition-all flex items-center justify-center"
                title="Telegram: @A_Y_TR"
                aria-label="Telegram Channel"
              >
                <Send className="w-4 h-4" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@a_y_tr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/80 border border-zinc-800 text-[#9CA3AF] hover:text-[#FF2638] hover:border-[#FF2638] hover:shadow-[0_0_15px_rgba(255,38,56,0.35)] transition-all flex items-center justify-center"
                title="TikTok: @a_y_tr"
                aria-label="TikTok Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.32 6.32 0 0 0-.86-.06A6.34 6.34 0 0 0 3.1 15.6a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.5a8.28 8.28 0 0 0 4.81 1.54V6.69h-1z" />
                </svg>
              </a>

              {/* WhatsApp exact identifier */}
              <div
                className="h-10 px-4 rounded-full bg-black/80 border border-zinc-800 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] text-xs font-mono-data text-[#9CA3AF] flex items-center gap-2 transition-all"
                title="WhatsApp: @A_Y_TRMS"
              >
                <span className="text-emerald-400 font-semibold">WA:</span>
                <span className="text-white">@A_Y_TRMS</span>
              </div>
            </div>

          </div>

          {/* Right Column: Kept completely open so the background artwork (Mohamed's real face, hoodie, and glowing SM emblem) shines unhindered! */}
          <div className="lg:col-span-4 hidden lg:block" />

        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono-data text-[#9CA3AF] hover:text-[#FF2638] transition-colors group"
          >
            <span>{t.scrollPrompt}</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#FF2638]" />
          </a>
        </div>

      </div>

      {/* Cyber Ticker Bar at the bottom of the Hero section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/85 backdrop-blur-md border-t border-[#FF2638]/30 py-2 overflow-hidden select-none">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex items-center gap-8 text-xs font-mono-data text-[#9CA3AF]">
            {[1, 2, 3, 4].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-white font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF2638] shadow-[0_0_8px_#FF2638]" />
                  {language === 'en' ? 'MOHAMED ABU AL-SAUD EZZAT' : 'محمد أبو السعود عزت'}
                </span>
                <span className="text-[#FF2638]">·</span>
                <span className="text-[#FF2638] font-bold">{language === 'en' ? 'OFFICIAL HANDLE: @A_Y_TR' : 'المعرف الرسمي: A_Y_TR@'}</span>
                <span className="text-[#FF2638]">·</span>
                <span>{language === 'en' ? 'GLOBAL SM TEAM LEADER (EH → DF → SM)' : 'قائد تيم SM العالمي (EH ← DF ← SM)'}</span>
                <span className="text-[#FF2638]">·</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
