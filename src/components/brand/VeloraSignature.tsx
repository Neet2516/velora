import React from 'react';
import { motion } from 'framer-motion';

interface VeloraSignatureProps {
  className?: string;
  animated?: boolean;
  strokeColor?: string;
  innerStrokeColor?: string;
  delay?: number;
  glow?: boolean;
}

export const VeloraSignature: React.FC<VeloraSignatureProps> = ({
  className = 'w-full h-auto',
  animated = false,
  strokeColor = '#ffffff',
  innerStrokeColor = '#ABD2FA',
  delay = 0,
  glow = true,
}) => {
  const letters = [
    // V
    {
      d: 'M 35,38 C 42,28 52,35 56,52 C 64,88 74,118 84,124 C 92,126 100,105 106,78 C 112,50 118,34 126,35 C 132,36 130,50 122,65',
      width: 4.5,
      delay: delay + 0.1,
      duration: 0.5,
    },
    // E
    {
      d: 'M 122,65 C 114,80 120,95 130,95 C 142,95 152,82 154,68 C 154,54 144,48 135,52 C 124,58 120,74 125,88 C 130,100 145,104 158,98',
      width: 4.2,
      delay: delay + 0.4,
      duration: 0.45,
    },
    // L
    {
      d: 'M 158,98 C 172,92 182,75 190,52 C 200,24 208,12 215,16 C 220,20 216,36 208,60 C 198,90 192,108 200,110 C 208,112 218,98 226,90',
      width: 4.5,
      delay: delay + 0.7,
      duration: 0.5,
    },
    // O
    {
      d: 'M 226,90 C 224,80 230,62 242,56 C 255,50 268,60 268,76 C 268,94 254,105 240,103 C 228,100 224,82 232,68 C 238,58 250,56 260,62 C 268,66 276,68 284,68',
      width: 4.2,
      delay: delay + 1.0,
      duration: 0.45,
    },
    // R
    {
      d: 'M 284,68 C 290,66 295,55 302,56 C 308,58 306,70 304,82 C 302,96 300,105 308,105 C 314,105 320,95 326,82 C 332,70 340,65 348,72',
      width: 4.2,
      delay: delay + 1.3,
      duration: 0.4,
    },
    // A
    {
      d: 'M 348,72 C 344,80 348,92 356,98 C 366,104 378,98 382,85 C 386,72 380,58 368,58 C 356,58 348,72 352,86 C 356,100 370,104 382,98 C 390,94 394,84 398,72 C 400,64 402,82 404,96 C 406,108 416,112 428,108 C 438,104 446,96 452,90',
      width: 4.5,
      delay: delay + 1.55,
      duration: 0.55,
    },
  ];

  const innerPath =
    'M 35,38 C 42,28 52,35 56,52 C 64,88 74,118 84,124 C 92,126 100,105 106,78 C 112,50 118,34 126,35 C 132,36 130,50 122,65 M 122,65 C 114,80 120,95 130,95 C 142,95 152,82 154,68 C 154,54 144,48 135,52 C 124,58 120,74 125,88 C 130,100 145,104 158,98 M 158,98 C 172,92 182,75 190,52 C 200,24 208,12 215,16 C 220,20 216,36 208,60 C 198,90 192,108 200,110 C 208,112 218,98 226,90 M 226,90 C 224,80 230,62 242,56 C 255,50 268,60 268,76 C 268,94 254,105 240,103 C 228,100 224,82 232,68 C 238,58 250,56 260,62 C 268,66 276,68 284,68 M 284,68 C 290,66 295,55 302,56 C 308,58 306,70 304,82 C 302,96 300,105 308,105 C 314,105 320,95 326,82 C 332,70 340,65 348,72 M 348,72 C 344,80 348,92 356,98 C 366,104 378,98 382,85 C 386,72 380,58 368,58 C 356,58 348,72 352,86 C 356,100 370,104 382,98 C 390,94 394,84 398,72 C 400,64 402,82 404,96 C 406,108 416,112 428,108 C 438,104 446,96 452,90';

  const filterId = React.useId().replace(/:/g, '_');

  return (
    <svg
      viewBox="18 4 444 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glow ? 'drop-shadow-[0_0_25px_rgba(118,146,255,0.65)]' : ''}`}
    >
      <defs>
        <filter id={`sigGlow_${filterId}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {letters.map((ltr, idx) =>
        animated ? (
          <motion.path
            key={idx}
            d={ltr.d}
            stroke={strokeColor}
            strokeWidth={ltr.width}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#sigGlow_${filterId})`}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: ltr.duration, ease: 'easeInOut', delay: ltr.delay }}
          />
        ) : (
          <path
            key={idx}
            d={ltr.d}
            stroke={strokeColor}
            strokeWidth={ltr.width}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#sigGlow_${filterId})`}
          />
        )
      )}

      {/* Inner Accent Line */}
      {animated ? (
        <motion.path
          d={innerPath}
          stroke={innerStrokeColor}
          strokeWidth="1.4"
          strokeOpacity="0.8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.0, ease: 'easeInOut', delay: delay + 0.1 }}
        />
      ) : (
        <path
          d={innerPath}
          stroke={innerStrokeColor}
          strokeWidth="1.4"
          strokeOpacity="0.8"
          strokeLinecap="round"
          fill="none"
        />
      )}
    </svg>
  );
};
