import React from 'react';
import { Language } from '../types';
import { BookOpen, Terminal, Network, Shield, AlertCircle } from 'lucide-react';

interface ContinuousLearningProps {
  language: Language;
}

export const ContinuousLearning: React.FC<ContinuousLearningProps> = ({ language }) => {
  const t = {
    en: {
      kicker: '05 · BEYOND FORMAL CREDENTIALS',
      title: 'Continuous Learning & Technical Development',
      statement: 'Beyond completed courses, I continuously study advanced cybersecurity curricula and certification-related materials. My learning has included Linux, CCNA, CEH, and eJPT topics. Although examination fees have limited my ability to pursue some formal credentials, I remain committed to learning, practical development, and future certification goals.',
      disclosureTitle: 'Integrity Disclosure Regarding CEH & eJPT Curricula',
      disclosureBody: 'I have independently studied and practiced the technical curriculum associated with CEH and eJPT (penetration testing workflows, network pivoting, privilege escalation, and reconnaissance methodologies). However, due to official examination fee constraints, I do not claim possession of the official certification certificates. True mastery begins with relentless curiosity and hands-on practice.',
      curricula: [
        {
          title: 'Linux Systems & Kernel Administration',
          category: 'Operating Systems & Security',
          description: 'Deep dive into Linux internals, file permissions, shell environment security, process isolation, and administration fundamentals.',
          icon: Terminal,
        },
        {
          title: 'Cisco CCNA Networking Curriculum',
          category: 'Network Engineering',
          description: 'Comprehensive study of IPv4/IPv6 subnetting, routing protocols (OSPF), VLANs, packet analysis, switching, and network security topologies.',
          icon: Network,
        },
        {
          title: 'CEH-Related Educational Material',
          category: 'Ethical Hacking Methodologies',
          description: 'Exploration of systematic ethical hacking phases: footprinting, scanning, enumeration, vulnerability analysis, and system attacks.',
          icon: Shield,
        },
        {
          title: 'eJPT-Related Educational Material',
          category: 'Practical Penetration Testing',
          description: 'Hands-on focus on network security testing, host reconnaissance, vulnerability assessment, and proof-of-concept testing.',
          icon: BookOpen,
        },
      ]
    },
    ar: {
      kicker: '05 · ما وراء الشهادات المكتملة',
      title: 'التعلم المستمر والتطوير التقني',
      statement: 'إلى جانب الدورات المكتملة، أواصل باستمرار دراسة المناهج المتقدمة للأمن السيبراني والمواد التعليمية المرتبطة بأقوى الشهادات العالمية. شملت دراستي مواضيع لينكس، وشبكات CCNA، ومناهج CEH، وeJPT. ورغم أن رسوم الامتحانات الرسمية حدّت من قدرتي المالية على خوض الاختبارات والحصول على تلك الشهادات الرسمية حالياً، فإنني أظل ملتزماً تماماً بالتعلم المستمر، والتطوير العملي، والوصول إلى أهدافي المستقبلية.',
      disclosureTitle: 'إفصاح النزاهة والشفافية بخصوص مناهج CEH وeJPT',
      disclosureBody: 'قمت بدراسة المناهج التقنية وممارستها ذاتياً لمسارات CEH وeJPT (منهجيات اختبار الاختراق، والتنقل الشبكي، وتصعيد الصلاحيات، والاستطلاع). ولكن نظراً للتكاليف المادية لرسوم الامتحانات الدولية، لا أدعي حمل هذه الشهادات الرسمية، مع إيماني التام بأن التمكن الحقيقي ينبع من الشغف والممارسة العملية.',
      curricula: [
        {
          title: 'أنظمة لينكس وإدارة سطر الأوامر',
          category: 'أنظمة التشغيل والأمان',
          description: 'دراسة متعمقة في تفاصيل نواة لينكس، وأذونات الملفات، وحماية بيئة الشيل، وإدارة العمليات والخدمات.',
          icon: Terminal,
        },
        {
          title: 'منهج شبكات سيسكو (CCNA)',
          category: 'هندسة الشبكات',
          description: 'دراسة شاملة لتقسيم الشبكات الفرعية، وبروتوكولات التوجيه (OSPF)، والشبكات الافتراضية VLANs، وتحليل الحزم.',
          icon: Network,
        },
        {
          title: 'المواد التعليمية لمنهج CEH',
          category: 'منهجيات القرصنة الأخلاقية',
          description: 'استكشاف مراحل الفحص المنهجي: جمع المعلومات، مسح المنافذ، التعداد، وتقييم الثغرات الأمنية.',
          icon: Shield,
        },
        {
          title: 'المواد التعليمية لمنهج eJPT',
          category: 'اختبار الاختراق العملي',
          description: 'تركيز عملي وتطبيقي على فحص أمن الشبكات، واستطلاع الأجهزة المستهدفة، وتطبيق إثبات المفاهيم (PoC).',
          icon: BookOpen,
        },
      ]
    }
  }[language];

  return (
    <section className="py-20 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col mb-10">
          <span className="text-xs font-mono-data tracking-widest text-[#FF2638] uppercase font-bold">
            {t.kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-2">
            {t.title}
          </h2>
        </div>

        {/* Core Statement Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-900 mb-8 shadow-xl">
          <p className="text-base sm:text-lg text-[#F3F4F6] leading-relaxed font-normal">
            "{t.statement}"
          </p>

          <div className="mt-6 pt-6 border-t border-zinc-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white mb-1">
                {t.disclosureTitle}
              </div>
              <div className="text-xs text-[#9CA3AF] leading-relaxed">
                {t.disclosureBody}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Curricula Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.curricula.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-[#FF2638]/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-black border border-zinc-800 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-[#FF2638]" />
                  </div>
                  <div className="text-[10px] font-mono-data text-[#FF2638] uppercase tracking-wider mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-900 text-[10px] font-mono-data text-[#9CA3AF]">
                  {language === 'en' ? 'SELF-STUDY CURRICULUM' : 'دراسة وتطبيق ذاتي'}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
