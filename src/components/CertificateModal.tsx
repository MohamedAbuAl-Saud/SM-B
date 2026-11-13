import React, { useState } from 'react';
import { CertificateItem, Language } from '../types';
import { X, ExternalLink, Copy, Check, Shield, Award, Calendar, Hash } from 'lucide-react';

interface CertificateModalProps {
  cert: CertificateItem | null;
  language: Language;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, language, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!cert) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(cert.verificationId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl max-h-[92dvh] flex flex-col bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Top Header */}
        <div className="px-3.5 sm:px-6 py-3 sm:py-4 bg-black border-b border-zinc-900 flex items-center justify-between gap-2.5 sm:gap-4 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
            <div className="w-8 h-8 rounded-lg bg-[#FF2638]/20 border border-[#FF2638] flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-[#FF2638]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] sm:text-xs font-mono-data text-[#FF2638] font-bold truncate">
                CERTIFICATE #{cert.id} · {cert.verificationPlatform || 'OFFICIAL RECORD'}
              </div>
              <h3 className="text-xs sm:text-base font-bold text-white leading-snug line-clamp-2 sm:truncate">
                {language === 'en' ? cert.courseTitle : cert.courseTitleAr}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 text-white bg-zinc-900 hover:bg-[#FF2638] border border-zinc-800 hover:border-[#FF2638] rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-3.5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
          
          {/* Certificate Image Frame */}
          <div className={`relative w-full rounded-xl overflow-hidden bg-black border border-zinc-900 flex items-center justify-center ${
            cert.isPortrait ? 'h-[52vh] sm:h-[62vh] bg-zinc-950 p-2' : 'aspect-[16/10] sm:aspect-[16/9]'
          }`}>
            {!imgError ? (
              <img
                src={`/${cert.fileName}`}
                alt={`${cert.courseTitle} - ${cert.institution}`}
                onError={() => setImgError(true)}
                className="w-full h-full object-contain"
              />
            ) : (
              /* High-fidelity stylized certificate fallback when local jpg is not dropped in yet */
              <div className="w-full h-full p-6 sm:p-10 flex flex-col items-center justify-between text-center bg-black border border-zinc-800 relative">
                <div className="flex items-center justify-between w-full border-b border-zinc-800 pb-4">
                  <div className="text-xs font-mono-data text-[#9CA3AF]">OFFICIAL VERIFIED BADGE</div>
                  <div className="text-xs font-mono-data text-[#FF2638] font-bold">SM CYBERSECURITY</div>
                </div>

                <div className="my-auto py-4 space-y-3 max-w-xl">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#FF2638]/10 border border-[#FF2638] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#FF2638]" />
                  </div>
                  <div className="text-xs font-mono-data text-[#9CA3AF] uppercase">
                    {language === 'en' ? cert.institution : cert.institutionAr}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {language === 'en' ? cert.courseTitle : cert.courseTitleAr}
                  </h2>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed max-w-md mx-auto">
                    {language === 'en' ? cert.description : cert.descriptionAr}
                  </p>
                </div>

                <div className="w-full pt-3 border-t border-[#232733] flex items-center justify-between text-xs font-mono-data text-[#9CA3AF]">
                  <span>CODE: {cert.verificationId}</span>
                  <span>{cert.issueDate || 'VERIFIED RECORD'}</span>
                </div>
              </div>
            )}
          </div>

          {/* Details & Actions Panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Left: Metadata */}
            <div className="p-4 rounded-xl bg-black border border-zinc-800 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-[#9CA3AF]">
                <Award className="w-4 h-4 text-[#FF2638] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">
                    {language === 'en' ? cert.institution : cert.institutionAr}
                  </span>
                  {(cert.institutionAbout || cert.institutionAboutAr) && (
                    <span className="text-[11px] text-[#9CA3AF] block mt-0.5">
                      {language === 'en' ? cert.institutionAbout : cert.institutionAboutAr}
                    </span>
                  )}
                </div>
              </div>
              
              {cert.issueDate && (
                <div className="flex items-center gap-2 text-[#9CA3AF]">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>
                    {language === 'en' ? `Issued: ${cert.issueDate}` : `تاريخ الإصدار: ${cert.issueDateAr || cert.issueDate}`}
                  </span>
                  {cert.expirationDate && (
                    <span className="text-amber-400">
                      ({language === 'en' ? `Expires: ${cert.expirationDate}` : `ينتهي: ${cert.expirationDateAr || cert.expirationDate}`})
                    </span>
                  )}
                </div>
              )}

              <div className="pt-2 text-[#9CA3AF] leading-relaxed">
                {language === 'en' ? cert.description : cert.descriptionAr}
              </div>

              {(cert.careerValue || cert.careerValueAr) && (
                <div className="pt-2 text-emerald-300/90 leading-relaxed border-t border-zinc-900">
                  <strong className="text-emerald-400">{language === 'en' ? 'Market Value: ' : 'القيمة في سوق العمل: '}</strong>
                  {language === 'en' ? cert.careerValue : cert.careerValueAr}
                </div>
              )}
            </div>

            {/* Right: Verification Tools */}
            <div className="p-4 rounded-xl bg-black border border-zinc-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-[11px] font-mono-data text-[#9CA3AF] flex items-center gap-1.5 mb-1.5">
                  <Hash className="w-3.5 h-3.5 text-[#FF2638]" />
                  <span>{language === 'en' ? 'VERIFICATION IDENTIFIER' : 'معرّف التحقق الرسمي'}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 font-mono-data text-xs text-white break-all flex items-center justify-between gap-2">
                  <span>{cert.verificationId}</span>
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded hover:bg-zinc-800 text-[#FF2638] transition-colors shrink-0 cursor-pointer"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold text-white border border-zinc-800 flex items-center gap-2 cursor-pointer transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#FF2638]" />}
                  <span>{copied ? (language === 'en' ? 'Copied!' : 'تم النسخ!') : (language === 'en' ? 'Copy Code' : 'نسخ الكود')}</span>
                </button>

                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#FF2638] hover:bg-[#8D101F] text-xs font-bold text-white shadow-[0_0_15px_rgba(255,38,56,0.3)] flex items-center gap-1.5 transition-all"
                  >
                    <span>{language === 'en' ? 'Verify Official Certificate' : 'التحقق عبر الرابط الرسمي'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="text-[11px] text-[#9CA3AF] font-mono-data">
                    {language === 'en'
                      ? 'No direct external URL. Use the ID on the issuing platform.'
                      : 'لا يتوفر رابط خارجي مباشر، يمكنك التحقق بالكود عبر منصة الجهة المانحة.'}
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
