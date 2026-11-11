import React, { useState } from 'react';

interface SMLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SMLogo: React.FC<SMLogoProps> = ({ className = '', size = 'md' }) => {
  const [imageError, setImageError] = useState(false);

  const dimensionClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  }[size];

  return (
    <div className={`relative flex items-center justify-center select-none ${dimensionClasses} ${className}`}>
      {!imageError ? (
        <img
          src="/ic.png"
          alt="SM Brand Logo"
          onError={() => setImageError(true)}
          className="w-full h-full object-contain rounded-full bg-white p-0.5 border border-[#FF2638] shadow-[0_0_15px_rgba(255,38,56,0.35)]"
        />
      ) : (
        <div className="w-full h-full bg-black border border-[#FF2638] rounded-full flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(255,38,56,0.35)] group-hover:border-[#FF2638] transition-colors">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 20 L50 8 L90 20 L90 60 C90 78 50 92 50 92 C50 92 10 78 10 60 Z"
              stroke="#FF2638"
              strokeWidth="5"
              fill="#000000"
            />
            <path
              d="M26 38 C32 32 46 32 46 42 C46 54 28 50 28 64 C28 72 40 74 48 68"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M54 70 L54 36 L66 54 L78 36 L78 70"
              stroke="#FF2638"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
