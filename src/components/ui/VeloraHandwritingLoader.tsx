import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const VeloraHandwritingLoader: React.FC = () => {
  const [show, setShow] = useState(true);

  // Auto-dismiss smoothly after 1.8 seconds so user is never stuck
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="velora-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 w-screen h-screen z-[99999] flex items-center justify-center bg-[#050c26] text-white overflow-hidden pointer-events-none select-none"
        >
          {/* Ambient Cosmic Radial Glow */}
          <div className="absolute w-[80vw] max-w-[800px] h-[400px] bg-gradient-to-tr from-[#1B2CC1]/40 via-[#7692FF]/30 to-[#ABD2FA]/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

          {/* Glowing Cyber Grid */}
          <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

          {/* Loader Canvas - Perfectly Dead Centered */}
          <div className="relative z-10 w-full max-w-[420px] px-6 flex items-center justify-center">
            <svg
              viewBox="18 10 444 125"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto drop-shadow-[0_0_35px_rgba(118,146,255,0.8)]"
            >
              <defs>
                {/* Neon Electric Palette Gradient */}
                <linearGradient id="handwritingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="25%" stopColor="#ABD2FA" />
                  <stop offset="65%" stopColor="#7692FF" />
                  <stop offset="100%" stopColor="#1B2CC1" />
                </linearGradient>

                {/* Pen Glow Filter */}
                <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Letter V */}
              <motion.path
                d="M 35,38 C 42,28 52,35 56,52 C 64,88 74,118 84,124 C 92,126 100,105 106,78 C 112,50 118,34 126,35 C 132,36 130,50 122,65"
                stroke="url(#handwritingGrad)"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#neonGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.45, ease: 'easeInOut', delay: 0.05 }}
              />

              {/* Letter E */}
              <motion.path
                d="M 122,65 C 114,80 120,95 130,95 C 142,95 152,82 154,68 C 154,54 144,48 135,52 C 124,58 120,74 125,88 C 130,100 145,104 158,98"
                stroke="url(#handwritingGrad)"
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#neonGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.35, ease: 'easeInOut', delay: 0.4 }}
              />

              {/* Letter L */}
              <motion.path
                d="M 158,98 C 172,92 182,75 190,52 C 200,24 208,12 215,16 C 220,20 216,36 208,60 C 198,90 192,108 200,110 C 208,112 218,98 226,90"
                stroke="url(#handwritingGrad)"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#neonGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.65 }}
              />

              {/* Letter O */}
              <motion.path
                d="M 226,90 C 224,80 230,62 242,56 C 255,50 268,60 268,76 C 268,94 254,105 240,103 C 228,100 224,82 232,68 C 238,58 250,56 260,62 C 268,66 276,68 284,68"
                stroke="url(#handwritingGrad)"
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#neonGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.35, ease: 'easeInOut', delay: 0.95 }}
              />

              {/* Letter R */}
              <motion.path
                d="M 284,68 C 290,66 295,55 302,56 C 308,58 306,70 304,82 C 302,96 300,105 308,105 C 314,105 320,95 326,82 C 332,70 340,65 348,72"
                stroke="url(#handwritingGrad)"
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#neonGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut', delay: 1.2 }}
              />

              {/* Letter A */}
              <motion.path
                d="M 348,72 C 344,80 348,92 356,98 C 366,104 378,98 382,85 C 386,72 380,58 368,58 C 356,58 348,72 352,86 C 356,100 370,104 382,98 C 390,94 394,84 398,72 C 400,64 402,82 404,96 C 406,108 416,112 428,108 C 438,104 446,96 452,90"
                stroke="url(#handwritingGrad)"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#neonGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut', delay: 1.4 }}
              />

              {/* White Inner Highlight Core */}
              <motion.path
                d="M 35,38 C 42,28 52,35 56,52 C 64,88 74,118 84,124 C 92,126 100,105 106,78 C 112,50 118,34 126,35 C 132,36 130,50 122,65 M 122,65 C 114,80 120,95 130,95 C 142,95 152,82 154,68 C 154,54 144,48 135,52 C 124,58 120,74 125,88 C 130,100 145,104 158,98 M 158,98 C 172,92 182,75 190,52 C 200,24 208,12 215,16 C 220,20 216,36 208,60 C 198,90 192,108 200,110 C 208,112 218,98 226,90 M 226,90 C 224,80 230,62 242,56 C 255,50 268,60 268,76 C 268,94 254,105 240,103 C 228,100 224,82 232,68 C 238,58 250,56 260,62 C 268,66 276,68 284,68 M 284,68 C 290,66 295,55 302,56 C 308,58 306,70 304,82 C 302,96 300,105 308,105 C 314,105 320,95 326,82 C 332,70 340,65 348,72 M 348,72 C 344,80 348,92 356,98 C 366,104 378,98 382,85 C 386,72 380,58 368,58 C 356,58 348,72 352,86 C 356,100 370,104 382,98 C 390,94 394,84 398,72 C 400,64 402,82 404,96 C 406,108 416,112 428,108 C 438,104 446,96 452,90"
                stroke="#ffffff"
                strokeWidth="1.4"
                strokeOpacity="0.75"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.8, 0.6] }}
                transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.1 }}
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
