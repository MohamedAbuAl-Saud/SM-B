import React, { useState } from 'react';
import { Language } from '../types';
import { Send, Github, ExternalLink, Copy, Check, MessageSquare } from 'lucide-react';

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const [copiedWA, setCopiedWA] = useState(false);

  const copyWhatsApp = () => {
    navigator.clipboard.writeText('@A_Y_TRMS');
    setCopiedWA(true);
    setTimeout(() => setCopiedWA(false), 2000);
  };

  const t = {
    en: {
      kicker: '09 · DIRECT CHANNELS',
      title: 'Connect & Inquire',
      subtitle: 'Reach out directly through official social profiles. No email contact forms — direct, transparent communication.',
      waNotice: 'Direct username supplied: @A_Y_TRMS (No phone number required).',
      copyIdentifier: 'Copy Username',
      copied: 'Copied!',
      openProfile: 'Open Profile',
      channels: [
        {
          name: 'Telegram',
          username: '@A_Y_TR',
          url: 'https://t.me/A_Y_TR',
          type: 'Direct Messaging & Updates',
          accent: '#229ED9'
        },
        {
          name: 'TikTok',
          username: '@a_y_tr',
          url: 'https://www.tiktok.com/@a_y_tr',
          type: 'Technical Videos & Insights',
          accent: '#FF2638'
        },
        {
          name: 'GitHub',
          username: 'mohamedabual-saud',
          url: 'https://github.com/mohamedabual-saud',
          type: 'Source Code & Repositories',
          accent: '#F3F4F6'
        }
      ]
    },
    ar: {
      kicker: '09 · القنوات المباشرة',
      title: 'التواصل والاتصال المباشر',
      subtitle: 'تواصل مباشرة عبر الحسابات الرسمية المعتمدة. لا توجد نماذج بريد إلكتروني — تواصل مباشر وواضح.',
      waNotice: 'معرّف واتساب المعتمد: @A_Y_TRMS (بدون الحاجة لرقم هاتف).',
      copyIdentifier: 'نسخ المعرّف',
      copied: 'تم النسخ!',
      openProfile: 'فتح الحساب',
      channels: [
        {
          name: 'تيليجرام (Telegram)',
          username: '@A_Y_TR',
          url: 'https://t.me/A_Y_TR',
          type: 'مراسلة مباشرة وتحديثات تقنية',
          accent: '#229ED9'
        },
        {
          name: 'تيك توك (TikTok)',
          username: '@a_y_tr',
          url: 'https://www.tiktok.com/@a_y_tr',
          type: 'مقاطع وشروحات تقنية',
          accent: '#FF2638'
        },
        {
          name: 'جيت هب (GitHub)',
          username: 'mohamedabual-saud',
          url: 'https://github.com/mohamedabual-saud',
          type: 'المستودعات والكود المصدري',
          accent: '#F3F4F6'
        }
      ]
    }
  }[language];

  return (
    <section id="contact" className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden">
      {/* AI Background image overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: "url('/contact_cyber_bg_1794434214362.jpg')" }}>
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
          <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Cards: Telegram, TikTok, GitHub, WhatsApp on Pure Black */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Telegram */}
          <div className="p-6 rounded-2xl cyber-glass-box flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#229ED9]/15 border border-[#229ED9]/50 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(34,158,217,0.3)]">
                <Send className="w-5 h-5 text-[#229ED9]" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#229ED9] transition-colors">
                {t.channels[0].name}
              </h3>
              <div className="text-xs font-mono-data text-[#9CA3AF] mt-0.5 mb-2">
                {t.channels[0].username}
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                {t.channels[0].type}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900">
              <a
                href={t.channels[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-full bg-black hover:bg-[#229ED9] hover:text-white border border-zinc-800 text-xs font-bold text-white transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>{t.openProfile}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* TikTok */}
          <div className="p-6 rounded-2xl cyber-glass-box flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#FF2638]/15 border border-[#FF2638]/50 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,38,56,0.3)]">
                <svg className="w-5 h-5 fill-current text-[#FF2638]" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.32 6.32 0 0 0-.86-.06A6.34 6.34 0 0 0 3.1 15.6a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.5a8.28 8.28 0 0 0 4.81 1.54V6.69h-1z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#FF2638] transition-colors">
                {t.channels[1].name}
              </h3>
              <div className="text-xs font-mono-data text-[#9CA3AF] mt-0.5 mb-2">
                {t.channels[1].username}
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                {t.channels[1].type}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900">
              <a
                href={t.channels[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-full bg-black hover:bg-[#FF2638] hover:text-white border border-zinc-800 text-xs font-bold text-white transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>{t.openProfile}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="p-6 rounded-2xl cyber-glass-box flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-white/15 border border-white/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <Github className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-white transition-colors">
                {t.channels[2].name}
              </h3>
              <div className="text-xs font-mono-data text-[#9CA3AF] mt-0.5 mb-2">
                {t.channels[2].username}
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                {t.channels[2].type}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900">
              <a
                href={t.channels[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-full bg-black hover:bg-white hover:text-black border border-zinc-800 text-xs font-bold text-white transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>{t.openProfile}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* WhatsApp: Exact identifier "@A_Y_TRMS", no fabricated phone number */}
          <div className="p-6 rounded-2xl cyber-glass-box flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/50 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                WhatsApp
              </h3>
              <div className="text-xs font-mono-data text-emerald-400 font-bold mt-0.5 mb-2">
                @A_Y_TRMS
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                {t.waNotice}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900">
              <button
                onClick={copyWhatsApp}
                type="button"
                className="w-full py-2.5 px-3 rounded-full bg-black hover:bg-emerald-600 hover:text-white border border-zinc-800 text-xs font-bold text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                {copiedWA ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4 text-emerald-400" />}
                <span>{copiedWA ? t.copied : t.copyIdentifier}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
