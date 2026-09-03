import React from 'react';

interface VeloraLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  animated?: boolean;
  className?: string;
}

export const VeloraLogo: React.FC<VeloraLogoProps> = ({
  size = 'md',
  showText = true,
  animated = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { icon: 32, text: 'text-lg', sub: 'text-[9px]' },
    md: { icon: 44, text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 64, text: 'text-3xl', sub: 'text-xs' },
    xl: { icon: 96, text: 'text-5xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Infinity Symbol with Chart Bars */}
      <div className="relative flex items-center justify-center">
        {/* Luminous Glow Filter with #7692FF & #1B2CC1 & #ABD2FA */}
        <div
          className={`absolute inset-0 rounded-full blur-md opacity-75 transition-opacity ${
            animated ? 'animate-pulse-glow' : ''
          }`}
          style={{
            background:
              'radial-gradient(circle, rgba(171, 210, 250, 0.45) 0%, rgba(118, 146, 255, 0.35) 45%, rgba(27, 44, 193, 0.25) 75%, transparent 100%)',
          }}
        />

        <svg
          width={currentSize.icon}
          height={currentSize.icon * 0.58}
          viewBox="0 0 120 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-[0_0_15px_rgba(118,146,255,0.45)]"
        >
          <defs>
            <linearGradient id="veloraPaletteGrad" x1="0%" y1="15%" x2="100%" y2="85%">
              <stop offset="0%" stopColor="#ABD2FA" />
              <stop offset="35%" stopColor="#7692FF" />
              <stop offset="70%" stopColor="#2539d9" />
              <stop offset="100%" stopColor="#1B2CC1" />
            </linearGradient>

            <linearGradient id="barGradA" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#7692FF" />
              <stop offset="100%" stopColor="#ABD2FA" />
            </linearGradient>
            <linearGradient id="barGradB" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#2539d9" />
              <stop offset="100%" stopColor="#7692FF" />
            </linearGradient>
            <linearGradient id="barGradC" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#1B2CC1" />
              <stop offset="100%" stopColor="#5271ea" />
            </linearGradient>

            <filter id="veloraGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Infinity Loop Path */}
          <path
            d="M60 35 C48 16, 26 14, 16 24 C5 34, 5 44, 16 52 C28 60, 48 54, 60 35 C72 16, 92 14, 104 24 C115 34, 115 44, 104 52 C92 60, 72 54, 60 35 Z"
            stroke="url(#veloraPaletteGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#veloraGlowFilter)"
          />

          {/* Inner Highlight Line for 3D Tubular Sheen */}
          <path
            d="M60 35 C48 16, 26 14, 16 24 C5 34, 5 44, 16 52 C28 60, 48 54, 60 35 C72 16, 92 14, 104 24 C115 34, 115 44, 104 52 C92 60, 72 54, 60 35 Z"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeOpacity="0.65"
            strokeLinecap="round"
            fill="none"
          />

          {/* Ascending Chart Bars at Center-Bottom Junction */}
          <rect x="52" y="40" width="3.5" height="7" rx="1" fill="url(#barGradA)" />
          <rect x="58.5" y="36" width="3.5" height="11" rx="1" fill="url(#barGradB)" />
          <rect x="65" y="31" width="3.5" height="16" rx="1" fill="url(#barGradC)" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col tracking-wider">
          <div className="flex items-center">
            <span
              className={`font-display font-extrabold tracking-[0.18em] text-white ${currentSize.text} leading-tight drop-shadow-[0_2px_10px_rgba(5,12,38,0.8)]`}
            >
              VELORA
            </span>
          </div>
          <div className="flex items-center justify-between gap-1 mt-0.5">
            <span className="h-[1px] w-2 bg-gradient-to-r from-transparent to-[#7692FF]" />
            <span
              className={`font-sans font-semibold tracking-[0.38em] text-[#ABD2FA] uppercase ${currentSize.sub} leading-none`}
            >
              GLOBAL
            </span>
            <span className="h-[1px] w-2 bg-gradient-to-l from-transparent to-[#1B2CC1]" />
          </div>
        </div>
      )}
    </div>
  );
};
