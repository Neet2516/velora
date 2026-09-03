import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VeloraHandwritingLoaderProps {
  onLoaded?: () => void;
}

const CRITICAL_IMAGES = [
  '/images/hero_launch_skyline.png',
  '/images/ecosystem_vision_hub.png',
  '/images/roadmap_launch.jpg',
  '/images/velora_global_skyline_1788452911616.jpg',
  '/images/forex_cards_luxury_trio.png',
  '/images/crypto_arbitrage_cube.png',
  '/images/core_team_blue_diamond.png',
  '/images/bonanza_destination_horizon.png',
];

export const VeloraHandwritingLoader: React.FC<VeloraHandwritingLoaderProps> = ({ onLoaded }) => {
  const [imagesReady, setImagesReady] = useState(false);
  const [animationReady, setAnimationReady] = useState(false);
  const [show, setShow] = useState(true);

  // 1. Preload all website images
  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;
    const total = CRITICAL_IMAGES.length;

    const checkDone = () => {
      loadedCount++;
      if (loadedCount >= total && isMounted) {
        setImagesReady(true);
      }
    };

    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = checkDone;
      img.onerror = checkDone; // Don't block forever if an image fails
    });

    // Fallback max timeout in case of slow network
    const timeout = setTimeout(() => {
      if (isMounted) setImagesReady(true);
    }, 4000);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, []);

  // 2. Minimum time for handwriting animation to display gracefully (2.2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationReady(true);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  // 3. Trigger fade-out once BOTH images and handwriting are complete
  useEffect(() => {
    if (imagesReady && animationReady) {
      const dismissTimer = setTimeout(() => {
        setShow(false);
        if (onLoaded) onLoaded();
      }, 400);

      return () => clearTimeout(dismissTimer);
    }
  }, [imagesReady, animationReady, onLoaded]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="velora-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050c26] text-white overflow-hidden pointer-events-auto"
        >
          {/* Ambient Cosmic Radial Glow */}
          <div className="absolute w-[90vw] max-w-[1200px] h-[500px] bg-gradient-to-tr from-[#1B2CC1]/35 via-[#7692FF]/25 to-[#ABD2FA]/20 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />

          {/* Glowing Cyber Grid */}
          <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

          {/* Loader Canvas - 85-90% Screen Width */}
          <div className="relative z-10 flex items-center justify-center w-[88vw] max-w-[1600px] mx-auto px-2">
            {/* SVG Calligraphic Handwriting Animation */}
            <div className="relative w-full flex items-center justify-center">
              <svg
                viewBox="18 4 444 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-h-[85vh] drop-shadow-[0_0_35px_rgba(118,146,255,0.7)]"
              >
                <defs>
                  {/* Neon Electric Palette Gradient */}
                  <linearGradient id="handwritingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ABD2FA" />
                    <stop offset="50%" stopColor="#7692FF" />
                    <stop offset="100%" stopColor="#1B2CC1" />
                  </linearGradient>

                  {/* Shimmer Light Filter */}
                  <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* 
                  Continuous Elegant Cursive Signature Stroke for "VELORA"
                  Each curve connects naturally like a bespoke calligraphy pen
                */}
                
                {/* LETTER 'V' */}
                <motion.path
                  d="M 35,38 C 42,28 52,35 56,52 C 64,88 74,118 84,124 C 92,126 100,105 106,78 C 112,50 118,34 126,35 C 132,36 130,50 122,65"
                  stroke="url(#handwritingGrad)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#neonGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.55, ease: 'easeInOut', delay: 0.1 }}
                />

                {/* LETTER 'E' */}
                <motion.path
                  d="M 122,65 C 114,80 120,95 130,95 C 142,95 152,82 154,68 C 154,54 144,48 135,52 C 124,58 120,74 125,88 C 130,100 145,104 158,98"
                  stroke="url(#handwritingGrad)"
                  strokeWidth="4.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#neonGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.45, ease: 'easeInOut', delay: 0.5 }}
                />

                {/* LETTER 'L' (High looping flourish) */}
                <motion.path
                  d="M 158,98 C 172,92 182,75 190,52 C 200,24 208,12 215,16 C 220,20 216,36 208,60 C 198,90 192,108 200,110 C 208,112 218,98 226,90"
                  stroke="url(#handwritingGrad)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#neonGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.85 }}
                />

                {/* LETTER 'O' */}
                <motion.path
                  d="M 226,90 C 224,80 230,62 242,56 C 255,50 268,60 268,76 C 268,94 254,105 240,103 C 228,100 224,82 232,68 C 238,58 250,56 260,62 C 268,66 276,68 284,68"
                  stroke="url(#handwritingGrad)"
                  strokeWidth="4.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#neonGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.45, ease: 'easeInOut', delay: 1.25 }}
                />

                {/* LETTER 'R' */}
                <motion.path
                  d="M 284,68 C 290,66 295,55 302,56 C 308,58 306,70 304,82 C 302,96 300,105 308,105 C 314,105 320,95 326,82 C 332,70 340,65 348,72"
                  stroke="url(#handwritingGrad)"
                  strokeWidth="4.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#neonGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: 'easeInOut', delay: 1.6 }}
                />

                {/* LETTER 'A' with grand flourishing ending */}
                <motion.path
                  d="M 348,72 C 344,80 348,92 356,98 C 366,104 378,98 382,85 C 386,72 380,58 368,58 C 356,58 348,72 352,86 C 356,100 370,104 382,98 C 390,94 394,84 398,72 C 400,64 402,82 404,96 C 406,108 416,112 428,108 C 438,104 446,96 452,90"
                  stroke="url(#handwritingGrad)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#neonGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.55, ease: 'easeInOut', delay: 1.9 }}
                />

                {/* Subtle Inner White Highlighting Ink Layer */}
                <motion.path
                  d="M 35,38 C 42,28 52,35 56,52 C 64,88 74,118 84,124 C 92,126 100,105 106,78 C 112,50 118,34 126,35 C 132,36 130,50 122,65 M 122,65 C 114,80 120,95 130,95 C 142,95 152,82 154,68 C 154,54 144,48 135,52 C 124,58 120,74 125,88 C 130,100 145,104 158,98 M 158,98 C 172,92 182,75 190,52 C 200,24 208,12 215,16 C 220,20 216,36 208,60 C 198,90 192,108 200,110 C 208,112 218,98 226,90 M 226,90 C 224,80 230,62 242,56 C 255,50 268,60 268,76 C 268,94 254,105 240,103 C 228,100 224,82 232,68 C 238,58 250,56 260,62 C 268,66 276,68 284,68 M 284,68 C 290,66 295,55 302,56 C 308,58 306,70 304,82 C 302,96 300,105 308,105 C 314,105 320,95 326,82 C 332,70 340,65 348,72 M 348,72 C 344,80 348,92 356,98 C 366,104 378,98 382,85 C 386,72 380,58 368,58 C 356,58 348,72 352,86 C 356,100 370,104 382,98 C 390,94 394,84 398,72 C 400,64 402,82 404,96 C 406,108 416,112 428,108 C 438,104 446,96 452,90"
                  stroke="#ffffff"
                  strokeWidth="1.4"
                  strokeOpacity="0.75"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.1 }}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
