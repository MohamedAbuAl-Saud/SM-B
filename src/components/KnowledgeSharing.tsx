import React from 'react';
import { Language } from '../types';
import { knowledgeTopics } from '../data/portfolioData';
import { Share2, BookOpen, Terminal, Shield, ArrowUpRight } from 'lucide-react';

interface KnowledgeSharingProps {
  language: Language;
}

export const KnowledgeSharing: React.FC<KnowledgeSharingProps> = ({ language }) => {
  const t = {
    en: {
      kicker: '07 · COMMUNITY & EDUCATION',
      title: 'Learn. Build. Share. Inspire.',
      desc: 'I believe learning should not stop with personal achievement. I enjoy sharing the knowledge I gain, explaining technical topics, and helping others understand cybersecurity and programming. My goal is to contribute to a learning community where people can discover new skills, exchange ideas, and grow together.',
      futureReadyNote: 'Knowledge modules & forthcoming educational posts. Transparent learning without fabricated metrics or audience claims.',
      readOverview: 'Educational Focus Area',
    },
    ar: {
      kicker: '07 · المجتمع ومشاركة المعرفة',
      title: 'تعلّم. ابنِ. شارك. ألهِم.',
      desc: 'أؤمن بأن التعلم لا ينبغي أن يتوقف عند الإنجاز الفردي. أستمتع بنقل المعرفة التي أكتسبها، وتبسيط المفاهيم التقنية، ومساعدة الآخرين على فهم مجالات الأمن السيبراني والبرمجة. هدفي المساهمة في مجتمع تعليمي يكتشف فيه الجميع مهارات جديدة، ويتبادلون الأفكار، وينمون معاً.',
      futureReadyNote: 'محاور تعليمية ومنشورات تثقيفية قادمة. مشاركة قائمة على التعلم الصادق بدون تضخيم أو أرقام وهمية.',
      readOverview: 'مجال التركيز التعليمي',
    }
  }[language];

  return (
    <section id="knowledge" className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden">
      {/* AI Background image overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: "url('/knowledge_sharing_bg_1794434203204.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
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
          <p className="mt-3 text-sm sm:text-base text-[#9CA3AF] max-w-3xl leading-relaxed">
            {t.desc}
          </p>
          <div className="mt-3 text-xs font-mono-data text-[#FF2638]">
            {t.futureReadyNote}
          </div>
        </div>

        {/* 6 Knowledge Topic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knowledgeTopics.map((topic, index) => (
            <div
              key={topic.id}
              className="p-6 rounded-2xl cyber-glass-box transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono-data uppercase tracking-wider text-[#FF2638] font-bold">
                    {language === 'en' ? topic.category : topic.categoryAr}
                  </span>
                  <span className="text-xs font-mono-data text-[#9CA3AF]">
                    #{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#FF2638] transition-colors mb-2 leading-snug">
                  {language === 'en' ? topic.title : topic.titleAr}
                </h3>

                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  {language === 'en' ? topic.summary : topic.summaryAr}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-xs text-[#9CA3AF] font-mono-data">
                <span>{t.readOverview}</span>
                <BookOpen className="w-4 h-4 text-[#FF2638]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
