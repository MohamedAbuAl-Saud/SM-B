import React, { useState } from 'react';
import { Language, CertificateItem } from '../types';
import { certificatesData } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { Shield, ExternalLink, Copy, Check, Eye, Award, Calendar, CheckCircle2 } from 'lucide-react';

interface CertificationsProps {
  language: Language;
}

export const Certifications: React.FC<CertificationsProps> = ({ language }) => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleImageError = (certId: number) => {
    setFailedImages(prev => ({ ...prev, [certId]: true }));
  };

  const t = {
    en: {
      kicker: '04 · ACADEMIC & TECHNICAL ACCREDITATION',
      title: 'Official Certifications & Verified Credentials',
      subtitle: 'Original certifications completed through globally renowned institutions including Cisco, Harvard, Fortinet, ITI, and IBM.',
      viewOriginal: 'View Original Certificate',
      copyCode: 'Copy Verification Code',
      copied: 'Code Copied!',
      verifyOfficial: 'Official Verification Link',
      noDirectUrl: 'Official ID for platform verification',
      noticeTitle: 'Integrity & Verification Guarantee',
      noticeText: 'All verification IDs and credentials correspond to completed official coursework. External verification links redirect directly to issuing platforms (Credly, Harvard, Fortinet).',
    },
    ar: {
      kicker: '04 · الاعتمادات الأكاديمية والتقنية',
      title: 'الشهادات الرسمية والاعتمادات الموثقة',
      subtitle: 'شهادات أصلية تم إتمامها بنجاح عبر جهات ومؤسسات تعليمية مرموقة عالمياً ومحلياً تشمل سيسكو، وهارفارد، وفورتينت، وITI، وآي بي إم.',
      viewOriginal: 'عرض الشهادة الأصلية',
      copyCode: 'نسخ كود التحقق',
      copied: 'تم النسخ!',
      verifyOfficial: 'رابط التحقق الرسمي',
      noDirectUrl: 'كود رسمي للتحقق عبر المنصة',
      noticeTitle: 'ضمان النزاهة والتحقق الأمني',
      noticeText: 'جميع معرّفات التحقق والشهادات مطابقة لمسارات تعليمية حقيقية تم إتمامها. روابط التحقق الخارجية توجهك مباشرة إلى المنصات المانحة الرسمية (Credly، Harvard، Fortinet).',
    }
  }[language];

  return (
    <section id="certifications" className="py-24 bg-black relative border-t border-zinc-900">
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

          {/* Verification Notice */}
          <div className="mt-4 p-4 rounded-xl cyber-glass-box flex items-start gap-3 max-w-3xl">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs text-[#9CA3AF] leading-relaxed">
              <span className="text-white font-bold">{t.noticeTitle}: </span>
              {t.noticeText}
            </div>
          </div>
        </div>

        {/* 7 Certificates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert) => {
            const isCopied = copiedId === cert.verificationId;
            const hasImgError = failedImages[cert.id];

            return (
              <div
                key={cert.id}
                className="rounded-2xl cyber-glass-box flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Certificate Image Frame */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[16/10] bg-black border-b border-zinc-900 overflow-hidden cursor-pointer group-hover:brightness-105 transition-all"
                  >
                    {!hasImgError ? (
                      <img
                        src={`/${cert.fileName}`}
                        alt={cert.courseTitle}
                        onError={() => handleImageError(cert.id)}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      /* Stylized certificate thumbnail preview */
                      <div className="w-full h-full p-4 flex flex-col justify-between bg-black border border-zinc-800 relative">
                        <div className="flex items-center justify-between text-[10px] font-mono-data text-[#9CA3AF]">
                          <span className="text-[#FF2638] font-bold">CERTIFICATE #{cert.id}</span>
                          <span>{cert.verificationPlatform || 'AUTHENTIC'}</span>
                        </div>
                        <div className="text-center my-auto py-2">
                          <Award className="w-8 h-8 text-[#FF2638] mx-auto mb-1.5 opacity-90" />
                          <div className="text-xs font-bold text-white line-clamp-1">
                            {language === 'en' ? cert.courseTitle : cert.courseTitleAr}
                          </div>
                          <div className="text-[10px] text-[#9CA3AF] font-mono-data mt-0.5">
                            {language === 'en' ? cert.institution : cert.institutionAr}
                          </div>
                        </div>
                        <div className="text-[9px] font-mono-data text-[#9CA3AF] truncate">
                          ID: {cert.verificationId}
                        </div>
                      </div>
                    )}

                    {/* Hover view overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                      <Eye className="w-4 h-4 text-[#FF2638]" />
                      <span>{t.viewOriginal}</span>
                    </div>

                    {/* Top right index badge */}
                    <div className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 px-2 py-0.5 rounded bg-black/90 backdrop-blur-xs border border-zinc-800 text-[10px] font-mono-data text-white font-bold">
                      #{cert.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Institution */}
                    <div className="text-xs font-mono-data text-[#FF2638] font-semibold flex items-center gap-1.5 mb-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? cert.institution : cert.institutionAr}</span>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-base font-bold text-white mb-2 leading-snug">
                      {language === 'en' ? cert.courseTitle : cert.courseTitleAr}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">
                      {language === 'en' ? cert.description : cert.descriptionAr}
                    </p>

                    {/* Dates */}
                    {cert.issueDate && (
                      <div className="flex items-center gap-1.5 text-[11px] text-[#9CA3AF] font-mono-data mb-3">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>
                          {language === 'en' ? `Issued: ${cert.issueDate}` : `الإصدار: ${cert.issueDateAr || cert.issueDate}`}
                        </span>
                        {cert.expirationDate && (
                          <span className="text-amber-400">
                            ({language === 'en' ? `Exp: ${cert.expirationDate}` : `صلاحية: ${cert.expirationDateAr || cert.expirationDate}`})
                          </span>
                        )}
                      </div>
                    )}

                    {/* Verification Code Display */}
                    <div className="p-2.5 rounded-lg bg-black border border-zinc-900 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <div className="text-[9px] uppercase tracking-wider text-[#9CA3AF] font-mono-data">
                          {language === 'en' ? 'VERIFICATION CODE' : 'رمز التحقق'}
                        </div>
                        <div className="text-xs font-mono-data text-white truncate max-w-[170px] sm:max-w-[190px]">
                          {cert.verificationId}
                        </div>
                      </div>

                      <button
                        onClick={() => handleCopy(cert.verificationId)}
                        type="button"
                        className="p-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-[#FF2638] border border-zinc-800 transition-colors shrink-0 cursor-pointer"
                        title={t.copyCode}
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-0 border-t border-zinc-900 flex flex-col gap-2 mt-2">
                  <div className="flex items-center gap-2 pt-3">
                    {/* View Certificate Button */}
                    <button
                      onClick={() => setSelectedCert(cert)}
                      type="button"
                      className="flex-1 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-semibold text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#FF2638]" />
                      <span>{t.viewOriginal}</span>
                    </button>

                    {/* External Verify Link (if valid URL provided) */}
                    {cert.verificationUrl ? (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-lg bg-[#FF2638] hover:bg-[#8D101F] text-xs font-bold text-white transition-all shadow-[0_0_12px_rgba(255,38,56,0.25)] flex items-center justify-center gap-1.5 text-center"
                      >
                        <span className="truncate">{t.verifyOfficial}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    ) : (
                      <div className="flex-1 py-2 px-2 text-[10px] text-center font-mono-data text-[#9CA3AF] bg-black rounded-lg border border-zinc-800 truncate">
                        {t.noDirectUrl}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Future Deepening & Advanced Training Box with AI Generated Background */}
        <div className="mt-12 p-6 sm:p-10 rounded-2xl bg-black border border-[#FF2638]/50 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(255,38,56,0.2)] group">
          {/* AI-Generated Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/roadmap_deepening_cyber_bg_1794430824138.jpg"
              alt="Cyber Roadmap & Continuous Deepening"
              className="w-full h-full object-cover object-center opacity-40 group-hover:opacity-50 transition-opacity duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/85" />
          </div>

          <div className="relative z-10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FF2638]/20 border border-[#FF2638] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,38,56,0.4)]">
              <Shield className="w-6 h-6 text-[#FF2638]" />
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-extrabold text-white mb-1 tracking-tight">
                {language === 'en' ? 'Continuous Deepening & Advanced Roadmap' : 'جاري التعمق في كورسات أكثر ومنح أقوى'}
              </h3>
              <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed max-w-2xl">
                {language === 'en'
                  ? 'Actively advancing towards specialized offensive security certifications, advanced red team bootcamps, rigorous penetration testing labs, and practical enterprise projects. Continuous learning with zero limits.'
                  : 'جارٍ التعمق في كورسات أكتر ومنح أكثر، والحصول على شهادات وتدريب أقوى، والعمل على مشاريع أمنية متقدمة لتوسيع نطاق الخبرات العملية.'}
              </p>
            </div>
          </div>
          <div className="relative z-10 shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-[#FF2638]/60 text-xs font-mono-data text-[#FF2638] font-bold shadow-[0_0_15px_rgba(255,38,56,0.3)]">
              <span className="w-2 h-2 rounded-full bg-[#FF2638] animate-ping" />
              {language === 'en' ? 'IN PROGRESS · 2026 ROADMAP' : 'قيد التقدم والمتابعة المستمرة'}
            </span>
          </div>
        </div>

      </div>

      {/* Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          language={language}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
};
