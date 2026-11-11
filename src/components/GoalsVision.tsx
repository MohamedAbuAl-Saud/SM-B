import React from 'react';
import { Language } from '../types';
import { ambitionsList } from '../data/portfolioData';
import { Target, CheckCircle2, Flame } from 'lucide-react';

interface GoalsVisionProps {
  language: Language;
}

export const GoalsVision: React.FC<GoalsVisionProps> = ({ language }) => {
  const t = {
    en: {
      kicker: '08 · AMBITIONS & ROADMAP',
      title: 'My Vision. My Mission. My Future.',
      subtitle: 'Eight foundational milestones guiding my continuous technical development and the SM future enterprise.',
      closingStatement: 'I am not competing with anyone else\'s timeline. I am building my own.',
      signature: 'MOHAMED ABU AL-SAUD EZZAT · SM BRAND'
    },
    ar: {
      kicker: '08 · الطموحات وخارطة المستقبل',
      title: 'رؤيتي. رسالتي. مستقبلي.',
      subtitle: 'ثمانية أهداف محورية توجه تطوري التقني المستمر وتضع الأساس لمشروع شركة SM المستقبلي.',
      closingStatement: 'أنا لا أنافس الجدول الزمني لأي شخص آخر، أنا أصنع مساري الخاص.',
      signature: 'محمد أبو السعود عزت · هوية SM'
    }
  }[language];

  return (
    <section className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FF2638]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col mb-12">
          <span className="text-xs font-mono-data tracking-widest text-[#FF2638] uppercase font-bold">
            {t.kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-2">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* Ambitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          {ambitionsList.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-[#FF2638]/50 transition-colors flex items-start gap-4 group"
            >
              <div className="w-8 h-8 rounded-lg bg-black border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-mono-data text-[#FF2638] font-bold">
                  {index < 9 ? `0${index + 1}` : index + 1}
                </span>
              </div>

              <div>
                <p className="text-sm font-semibold text-white group-hover:text-[#FF2638] transition-colors leading-relaxed">
                  {language === 'en' ? item.en : item.ar}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Closing Statement Callout with AI-generated cyber trajectory background */}
        <div className="relative p-8 sm:p-14 rounded-2xl bg-black border border-[#FF2638]/50 text-center overflow-hidden shadow-[0_0_40px_rgba(255,38,56,0.2)] group">
          {/* AI-Generated Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/quote_timeline_cyber_bg_1794429108432.jpg"
              alt="Cyber Timeline Trajectory"
              className="w-full h-full object-cover object-center opacity-45 group-hover:opacity-55 transition-opacity duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/45" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/85" />
          </div>

          <div className="relative z-10">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#FF2638]/15 border border-[#FF2638] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,38,56,0.35)]">
              <Flame className="w-6 h-6 text-[#FF2638]" />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-snug">
              "{t.closingStatement}"
            </h3>

            <div className="mt-5 text-xs font-mono-data text-[#FF2638] tracking-widest uppercase font-bold flex items-center justify-center gap-2">
              <span className="w-6 h-[1px] bg-[#FF2638]" />
              <span>{t.signature}</span>
              <span className="w-6 h-[1px] bg-[#FF2638]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
