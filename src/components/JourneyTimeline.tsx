import React, { useState } from 'react';
import { Language } from '../types';
import { timelineMilestones } from '../data/portfolioData';
import { Terminal, CheckCircle } from 'lucide-react';

interface JourneyTimelineProps {
  language: Language;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ language }) => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(4); // Default to current milestone (Year 5)

  const t = {
    en: {
      kicker: '02 · 5-YEAR TRAJECTORY',
      title: 'My Journey Through Cybersecurity',
      subtitle: 'A continuous, self-driven trajectory starting five years ago and evolving into Red Team operations.',
      skillsHeader: 'Competencies & Tools Explored:',
      currentStatus: 'CURRENT FOCUS',
    },
    ar: {
      kicker: '02 · مسيرة 5 سنوات متواصلة',
      title: 'رحلتي في عالم الأمن السيبراني',
      subtitle: 'مسار تعلم ذاتي مستمر بدأ قبل خمس سنوات وتطور نحو التخصص في عمليات الفريق الأحمر.',
      skillsHeader: 'الكفاءات والأدوات المستكشفة:',
      currentStatus: 'التركيز الحالي',
    }
  }[language];

  return (
    <section id="journey" className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden">
      {/* AI Background image overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/journey_timeline_cyber_bg_1794434159318.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>
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

        {/* Milestone Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {timelineMilestones.map((m, index) => {
            const isSelected = selectedMilestone === index;
            return (
              <button
                key={index}
                onClick={() => setSelectedMilestone(index)}
                type="button"
                className={`text-left rtl:text-right p-3.5 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer relative overflow-hidden cyber-glass-box ${
                  isSelected
                    ? 'border-[#FF2638] shadow-[0_0_25px_rgba(255,38,56,0.3)] bg-zinc-900/80'
                    : 'opacity-80 hover:opacity-100'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF2638]" />
                )}
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono-data text-[#FF2638] font-bold">
                    {language === 'en' ? `0${index + 1}` : `٠${index + 1}`}
                  </span>
                  {index === 4 && (
                    <span className="text-[10px] font-mono-data px-2 py-0.5 rounded bg-[#FF2638]/20 text-[#FF2638] font-bold">
                      {t.currentStatus}
                    </span>
                  )}
                </div>

                <div className="text-xs sm:text-sm font-bold text-white truncate">
                  {language === 'en' ? m.period : m.periodAr}
                </div>

                <div className="text-[11px] sm:text-xs text-[#9CA3AF] mt-1 line-clamp-1">
                  {language === 'en' ? m.title : m.titleAr}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Milestone Card (Full-width, NO boxed numbers, pure black) */}
        {(() => {
          const active = timelineMilestones[selectedMilestone];
          return (
            <div className="p-6 sm:p-10 rounded-2xl cyber-glass-box relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#FF2638]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-[#FF2638]/20 border border-[#FF2638]/40 text-xs font-bold text-[#FF2638] font-mono-data">
                    {language === 'en' ? active.period : active.periodAr}
                  </span>
                  <span className="text-xs text-[#9CA3AF] font-mono-data">
                    {selectedMilestone === 4
                      ? (language === 'en' ? '· Present Trajectory (Year 5)' : '· المسار الحالي (السنة الخامسة)')
                      : (language === 'en' ? '· Learning Phase' : '· مرحلة التعلم والاستكشاف')}
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-white">
                  {language === 'en' ? active.title : active.titleAr}
                </h3>

                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-4xl">
                  {language === 'en' ? active.description : active.descriptionAr}
                </p>

                <div className="pt-4 border-t border-zinc-900">
                  <div className="text-xs font-mono-data text-white font-semibold mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#FF2638]" />
                    <span>{t.skillsHeader}</span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {(language === 'en' ? active.skillsAcquired : active.skillsAcquiredAr).map((skill, idx) => (
                      <div
                        key={idx}
                        className="px-3.5 py-1.5 rounded-lg bg-black border border-zinc-800 text-xs font-medium text-[#F3F4F6] flex items-center gap-2"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#FF2638]" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
