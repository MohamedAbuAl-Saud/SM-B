import React from 'react';
import { Language } from '../types';
import { Quote, Terminal, Users, Cpu, Lock, ShieldAlert, Crown, Globe } from 'lucide-react';

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const t = {
    en: {
      kicker: '01 · ABOUT THE RESEARCHER & LEADERSHIP',
      title: 'Curiosity, Discipline, and Purpose',
      quote: 'Knowledge is not power until it is applied, shared, and tested in real scenarios.',
      p1: 'My name is Mohamed Abu Al-Saud Ezzat. I am a 16-year-old cybersecurity researcher and student from Egypt, operating under official handle @A_Y_TR. My journey into cybersecurity began five years ago, driven by curiosity, determination, and a relentless focus on mastering digital systems.',
      p2: 'I have continuously explored cybersecurity, programming, networking, Linux environments, web technologies, and penetration-testing methodologies.',
      p3: 'My primary direction is Red Team cybersecurity and authorized penetration testing, while I also study Blue Team concepts to understand defensive security and how organizations detect and respond to threats.',
      p4: 'Beyond solo research, I assembled and led international cybersecurity teams, bringing together members from across the globe (East and West), including specialists with higher technical experience. Together, we conducted security research, tested penetration concepts, and exchanged advanced knowledge.',
      p5: 'My team leadership trajectory evolved through three main phases: founding early group "EH", leading team "DF", and establishing team "SM" — my current official group, brand, and leadership identity.',
      pillars: [
        { title: '5-Year Continuous Trajectory', desc: 'Unbroken self-driven study across operating systems, protocols, and security tooling.' },
        { title: 'Dual Perspective', desc: 'Sharpening offensive Red Team methodologies while comprehending defensive SOC postures.' },
        { title: 'Knowledge Dissemination', desc: 'Translating complex cyber mechanics into clear, educational explanations for young learners.' },
      ],
      leadershipSectionTitle: 'Digital Identity, Team Leadership & Advanced R&D',
      leadershipSectionDesc: 'Proven experience in assembling global security teams, dark web encrypted systems development, and offensive AI threat research.',
      monikerTitle: 'Official Digital Handle',
      monikerSub: '@A_Y_TR · SM Identity',
      monikerDesc: 'Official handle @A_Y_TR. Leading team SM as current official group and brand identity.',
      teamTitle: 'Global Team Assembly & Evolution',
      teamSub: 'EH → DF → SM (Current Official Group)',
      teamDesc: 'Brought together talent from East to West—including experts with higher experience—for joint penetration testing, exploit research, and team learning.',
      onionTitle: 'Dark Web Onion Encrypted Chat',
      onionSub: 'TOR (.onion) Private Communication',
      onionDesc: 'Engineered an end-to-end encrypted messaging system operating on the Dark Web (.onion network) for secure team coordination.',
      aiMalwareTitle: 'AI-Augmented Malware R&D',
      aiMalwareSub: 'Offensive Research & Defensive Analysis',
      aiMalwareDesc: 'Developed experimental PoC malware integrated with AI models to test attack vectors, analyze AI threat mechanics, and engineer effective defensive countermeasures.'
    },
    ar: {
      kicker: '01 · عن الباحث الأمني والمسيرة القيادية',
      title: 'الشغف، الانضباط، والغاية القيادية',
      quote: 'المعرفة ليست قوة إلا عندما تُطبّق وتُشارك وتُختبر في بيئات حقيقية.',
      p1: 'اسمي محمد أبو السعود عزت، عمري 16 عاماً، باحث وطالب في مجالات الأمن السيبراني من مصر، وتحت المعرّف الرسمي A_Y_TR@. بدأت رحلتي في الأمن السيبراني منذ خمس سنوات، مدفوعاً بالفضول والإصرار وفهم كيفية عمل الأنظمة وحمايتها.',
      p2: 'واصلت استكشاف الأمن السيبراني، والبرمجة، والشبكات، وبيئات لينكس، وتقنيات الويب، ومنهجيات اختبار الاختراق العملي بشكل مستمر.',
      p3: 'مساري الأساسي هو الفريق الأحمر (Red Team) واختبار الاختراق المصرح به، وفي الوقت نفسه أدرس مفاهيم الفريق الأزرق (Blue Team) لفهم الجوانب الدفاعية وكيف تكتشف المؤسسات التهديدات وتتصدى لها.',
      p4: 'إلى جانب الأبحاث الفردية، قمت بجمع وبناء تيم أمني يضم أعضاء من مختلف أنحاء العالم من الشرق والغرب، حتى ممن امتلكوا خبرة تقنية أعلى مني؛ حيث كنا نساعد بعضنا ونستفيد ونختبر المهارات والأدوات سوياً تحت قيادتي.',
      p5: 'مرت مسيرتي القيادية بثلاث محطات رئيسية: تأسيس فريق EH المكتسب منه الدروس، ثم فريق DF، وصولاً إلى تأسيس وقيادة فريق وشعار SM الحالي ككيان رسمي ومجموعتي الحالية.',
      pillars: [
        { title: 'مسيرة 5 سنوات متواصلة', desc: 'دراسة ذاتية مستمرة في أنظمة التشغيل والبروتولات وأدوات فحص الأمان.' },
        { title: 'منظور متكامل هجومي ودفاعي', desc: 'صقل مهارات الفريق الأحمر مع فهم عميق لمراكز العمليات الدفاعية SOC.' },
        { title: 'نشر المعرفة ومساعدة الآخرين', desc: 'تبسيط آليات الأمن السيبراني وتقديم شروحات واضحة للمتعلمين الشباب.' },
      ],
      leadershipSectionTitle: 'الهوية الرقمية، القيادة الجماعية، والأبحاث المتقدمة',
      leadershipSectionDesc: 'خبرة حقيقية في قيادة فرق أمنية عالمية، وبناء شبكات تشفير ع الشبكة المظلمة، وأبحاث البرمجيات الخبيثة المدمجة بالذكاء الاصطناعي.',
      monikerTitle: 'المعرّف الرقمي الرسمي',
      monikerSub: 'المعرّف الرسمي: A_Y_TR@',
      monikerDesc: 'المعرّف الرسمي A_Y_TR@. قيادة تيم SM كرمز رسمي ومجموعة عمل حالية.',
      teamTitle: 'تجميع التيمات العالمية والمسار التراكمي',
      teamSub: 'EH ← DF ← SM (التيم والمجموعة الحالية)',
      teamDesc: 'جمع أعضاء وخبراء من الشرق والغرب للاختبار والتعاون، وقيادتهم عبر مراحل EH ثم DF وصولاً لتأسيس تيم SM الرسمي.',
      onionTitle: 'نظام محادثة مشفر ع الشبكة المظلمة (Onion)',
      onionSub: 'بنية شبكية خاصة عبر Tor (.onion)',
      onionDesc: 'بناء وتطوير نظام محادثات آمن ومفرّد ع الشبكة المظلمة (.onion) لضمان سرية التواصل والتجارب الأمنية.',
      aiMalwareTitle: 'تطوير برمجيات خبيثة مدمجة بـ AI وتصدي لها',
      aiMalwareSub: 'أبحاث هجومية وتحليل دفاعي متقدم',
      aiMalwareDesc: 'تطوير برمجيات خبيثة تجريبية (PoC) مدمجة بالذكاء الاصطناعي لفهم الهجمات الحديثة وتحليلها والتعلم لكيفية التصدي لها وبناء آليات الدفاع.'
    }
  }[language];

  return (
    <section id="about" className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF2638]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <span className="text-xs font-mono-data tracking-widest text-[#FF2638] uppercase font-bold flex items-center gap-2">
            <Crown className="w-4 h-4 text-[#FF2638]" />
            <span>{t.kicker}</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-2">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Visual: Research Illustration */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden cyber-glass-box group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/about_cyber_learner_1794421080619.jpg"
                  alt="Cybersecurity Research Environment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-4 bg-black/60 backdrop-blur-md border-t border-zinc-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#FF2638]" />
                  <span className="text-xs font-mono-data text-white">
                    LABORATORY · RESEARCH_ENVIRONMENT
                  </span>
                </div>
                <span className="text-[11px] text-[#FF2638] font-mono-data font-bold">
                  @A_Y_TR
                </span>
              </div>
            </div>

            {/* Core Values */}
            <div className="mt-6 space-y-3">
              {t.pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl cyber-glass-box flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FF2638]/15 border border-[#FF2638]/50 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(255,38,56,0.3)]">
                    <span className="text-xs font-mono-data text-[#FF2638] font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">{pillar.title}</h3>
                    <p className="text-[11px] text-[#9CA3AF] mt-0.5 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content & Quotation */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col space-y-6">
            
            {/* Elegant Callout Quote on frosted glass */}
            <div className="relative p-6 rounded-2xl cyber-glass-box border-l-4 rtl:border-l-0 rtl:border-r-4 border-[#FF2638]">
              <Quote className="w-8 h-8 text-[#FF2638]/40 mb-2" />
              <p className="text-lg sm:text-xl font-medium text-white italic leading-snug">
                "{t.quote}"
              </p>
              <div className="mt-3 text-xs font-mono-data text-[#FF2638] font-semibold flex items-center justify-between">
                <span>— MOHAMED ABU AL-SAUD EZZAT</span>
                <span className="text-[#9CA3AF]">@A_Y_TR</span>
              </div>
            </div>

            {/* Structured Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
              <p className="text-white/95 font-normal">
                {t.p1}
              </p>
              <p>
                {t.p2}
              </p>
              <p>
                {t.p3}
              </p>
              <p className="text-white/90">
                {t.p4}
              </p>
              <p className="text-white font-medium">
                {t.p5}
              </p>
            </div>

          </div>

        </div>

        {/* Dynamic Highlight Grid: Leadership, Moniker, Dark Web Onion Chat & AI Malware Research */}
        <div className="pt-8 border-t border-zinc-900">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.leadershipSectionTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1">
              {t.leadershipSectionDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Box 1: Moniker & Official Handle */}
            <div className="p-6 rounded-2xl cyber-glass-box relative overflow-hidden group">
              <div className="w-12 h-12 rounded-full bg-[#FF2638]/15 border border-[#FF2638]/50 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,38,56,0.3)]">
                <Crown className="w-6 h-6 text-[#FF2638]" />
              </div>
              <div className="text-xs font-mono-data text-[#FF2638] font-bold mb-1">
                {t.monikerSub}
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-[#FF2638] transition-colors mb-2">
                {t.monikerTitle}
              </h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                {t.monikerDesc}
              </p>
            </div>

            {/* Box 2: Global Team Leadership (East to West, EH -> DF -> SM) */}
            <div className="p-6 rounded-2xl cyber-glass-box relative overflow-hidden group">
              <div className="w-12 h-12 rounded-full bg-blue-500/15 border border-blue-500/50 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xs font-mono-data text-blue-400 font-bold mb-1">
                {t.teamSub}
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                {t.teamTitle}
              </h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                {t.teamDesc}
              </p>
            </div>

            {/* Box 3: Dark Web Onion Encrypted Messaging Infrastructure */}
            <div className="p-6 rounded-2xl cyber-glass-box relative overflow-hidden group">
              <div className="w-12 h-12 rounded-full bg-purple-500/15 border border-purple-500/50 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <Lock className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-xs font-mono-data text-purple-400 font-bold mb-1">
                {t.onionSub}
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                {t.onionTitle}
              </h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                {t.onionDesc}
              </p>
            </div>

            {/* Box 4: AI-Augmented Malware Research & Mitigation */}
            <div className="p-6 rounded-2xl cyber-glass-box relative overflow-hidden group">
              <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/50 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <ShieldAlert className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-xs font-mono-data text-emerald-400 font-bold mb-1">
                {t.aiMalwareSub}
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                {t.aiMalwareTitle}
              </h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                {t.aiMalwareDesc}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

