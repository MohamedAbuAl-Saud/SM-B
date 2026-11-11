import React, { useState } from 'react';
import { Language } from '../types';
import { skillsData } from '../data/portfolioData';
import { Code, ShieldAlert, ShieldCheck, Server, Search, Terminal } from 'lucide-react';

interface SkillsDashboardProps {
  language: Language;
}

export const SkillsDashboard: React.FC<SkillsDashboardProps> = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'redteam' | 'blueteam' | 'programming' | 'infrastructure'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Generated Cyber Logos and Emblems
  const cyberLogos = [
    {
      name: 'Python',
      nameAr: 'بايثون (Python)',
      tagline: 'Cyber Scripting & Automation',
      taglineAr: 'برمجة نصية وأتمتة أمنية',
      image: '/logo_python_cyber_1794427606692.jpg',
    },
    {
      name: 'Linux',
      nameAr: 'لينكس (Linux)',
      tagline: 'Kernel, CLI & Security Environments',
      taglineAr: 'إدارة النواة وبيئات الفحص',
      image: '/logo_linux_cyber_1794427607786.jpg',
    },
    {
      name: 'Bash',
      nameAr: 'باش (Bash)',
      tagline: 'Terminal Pipelines & Tooling',
      taglineAr: 'أدوات الطرفية وخطوط الأوامر',
      image: '/logo_bash_terminal_cyber_1794427609416.jpg',
    },
    {
      name: 'SQL & PHP',
      nameAr: 'قواعد بيانات SQL و PHP',
      tagline: 'Backend Systems & Injection Auditing',
      taglineAr: 'الأنظمة الخلفية وتدقيق الثغرات',
      image: '/logo_sql_php_cyber_1794427609139.jpg',
    },
    {
      name: 'C & C++',
      nameAr: 'لغات C و ++C',
      tagline: 'Low-Level Systems & Memory Architecture',
      taglineAr: 'برمجة النظم وهيكلية الذاكرة',
      image: '/logo_cpp_systems_cyber_1794427609761.jpg',
    },
  ];

  const t = {
    en: {
      kicker: '03 · TECHNICAL MATRIX & CYBER EMBLEMS',
      title: 'Programming Languages & Systems Matrix',
      subtitle: 'Custom cyber emblems and technical skills across offensive Red Team operations, defensive security, systems, and code.',
      emblemsTitle: 'Cyber Tech Stack & Programming Emblems',
      disclaimer: 'Transparent self-assessment: Practical exploration and hands-on application.',
      categories: [
        { id: 'all', label: 'All Disciplines' },
        { id: 'redteam', label: 'Red Team (Offensive)' },
        { id: 'blueteam', label: 'Blue Team (Defensive)' },
        { id: 'programming', label: 'Programming' },
        { id: 'infrastructure', label: 'Infrastructure & Linux' },
      ],
      searchPlaceholder: 'Search skills (e.g. Python, Linux, Recon)...',
      emptySearch: 'No skills found matching your filter criteria.',
    },
    ar: {
      kicker: '03 · مصفوفة المهارات والشعارات التقنية',
      title: 'لغات البرمجة والأنظمة والمهارات',
      subtitle: 'شعارات سيبرانية مصممة ومصفوفة مهارات مُتقنة في الفريق الأحمر الهجومي والدفاعي وإدارة الأنظمة والبرمجة.',
      emblemsTitle: 'شعارات لغات البرمجة والأنظمة السيبرانية',
      disclaimer: 'مهارات متعلمة ومُمارسة عملياً في بيئات الاختبار.',
      categories: [
        { id: 'all', label: 'جميع المجالات' },
        { id: 'redteam', label: 'الفريق الأحمر (الهجومي)' },
        { id: 'blueteam', label: 'الفريق الأزرق (الدفاعي)' },
        { id: 'programming', label: 'لغات البرمجة' },
        { id: 'infrastructure', label: 'البنية التحتية ولينكس' },
      ],
      searchPlaceholder: 'ابحث في المهارات (مثل: بايثون، لينكس، استطلاع)...',
      emptySearch: 'لم يتم العثور على مهارات مطابقة لبحثك.',
    }
  }[language];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const nameMatch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.notes && skill.notes.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (skill.notesAr && skill.notesAr.includes(searchQuery));
    return matchesCategory && nameMatch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'redteam':
        return <ShieldAlert className="w-4 h-4 text-[#FF2638]" />;
      case 'blueteam':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'programming':
        return <Code className="w-4 h-4 text-sky-400" />;
      default:
        return <Server className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
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

        {/* 1. Cyber Emblems Gallery (Requested: Generated Logos for Programming Languages & Linux) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-4 h-4 text-[#FF2638]" />
            <h3 className="text-lg font-bold text-white tracking-tight">
              {t.emblemsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {cyberLogos.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl cyber-glass-box overflow-hidden flex flex-col items-center text-center p-3"
              >
                {/* Emblem Image Artwork */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-black mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>

                <div className="w-full">
                  <div className="text-sm font-bold text-white group-hover:text-[#FF2638] transition-colors truncate">
                    {language === 'en' ? item.name : item.nameAr}
                  </div>
                  <div className="text-[11px] text-[#9CA3AF] font-mono-data mt-0.5 line-clamp-1">
                    {language === 'en' ? item.tagline : item.taglineAr}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-950 rounded-xl border border-zinc-900 overflow-x-auto">
            {t.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                type="button"
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#FF2638] text-white shadow-[0_0_12px_rgba(255,38,56,0.3)]'
                    : 'text-[#9CA3AF] hover:text-white hover:bg-zinc-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2 text-xs bg-zinc-950 border border-zinc-900 rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#FF2638] transition-colors font-mono-data"
            />
          </div>
        </div>

        {/* 3. Skills Cards Grid (Pure Black, Minimalist, No Heavy Gray Boxes) */}
        {filteredSkills.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-zinc-950 border border-zinc-900">
            <p className="text-sm text-[#9CA3AF]">{t.emptySearch}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="p-5 rounded-xl cyber-glass-box group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-black border border-zinc-800 flex items-center justify-center">
                        {getCategoryIcon(skill.category)}
                      </div>
                      <h3 className="text-sm font-bold text-white group-hover:text-[#FF2638] transition-colors">
                        {skill.name}
                      </h3>
                    </div>

                    <span className="text-[11px] font-mono-data px-2 py-0.5 rounded bg-black border border-zinc-800 text-[#F3F4F6]">
                      {language === 'en' ? skill.level : skill.levelAr}
                    </span>
                  </div>

                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {language === 'en' ? skill.notes : skill.notesAr}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] text-[#9CA3AF] font-mono-data">
                  <span className="uppercase text-[10px] tracking-wider text-[#FF2638]">
                    {skill.category}
                  </span>
                  <span>{language === 'en' ? 'PRACTICED & APPLIED' : 'مُتقنة ومُمارسة'}</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
