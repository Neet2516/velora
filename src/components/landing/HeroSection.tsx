import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, MapPin } from 'lucide-react';
import { CanvasWrapper } from '../3d/CanvasWrapper';
import { HeroInfinityScene } from '../3d/HeroInfinityScene';

interface HeroSectionProps {
  onExploreEcosystem: () => void;
  onExploreVision: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreEcosystem,
  onExploreVision,
}) => {
  const scrollToRoadmap = () => {
    const elem = document.getElementById('roadmap');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-center items-center pt-24 pb-14 overflow-hidden bg-radial-ambient">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-25" />

      {/* 3D Canvas Centerpiece - Elegant & non-intrusive */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-80">
        <CanvasWrapper
          camera={{ position: [0, 0, 6.2], fov: 42 }}
          className="w-full h-full"
        >
          <HeroInfinityScene />
        </CanvasWrapper>
      </div>

      {/* Hero UI Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-auto">
        {/* Badge matching reference */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#091540]/85 border border-[#7692FF]/35 backdrop-blur-md shadow-[0_0_20px_rgba(118,146,255,0.2)] mb-7"
        >
          <span className="w-2 h-2 rounded-full bg-[#ABD2FA] animate-ping" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#ABD2FA] uppercase font-mono">
            WELCOME TO VELORA GLOBAL
          </span>
          <span className="text-[#7692FF] font-bold text-base">∞</span>
        </motion.div>

        {/* Main Headline from reference: "THE FUTURE OF FINANCE IS AN ECOSYSTEM." */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_24px_rgba(5,12,38,0.95)]"
        >
          THE FUTURE OF FINANCE{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] via-[#7692FF] to-[#1B2CC1] drop-shadow-[0_0_35px_rgba(118,146,255,0.45)] block sm:inline">
            IS AN ECOSYSTEM.
          </span>
        </motion.h1>

        {/* Slogan from reference */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 text-sm sm:text-base lg:text-lg font-mono tracking-[0.2em] text-[#ABD2FA] font-medium uppercase drop-shadow-[0_2px_8px_rgba(5,12,38,0.8)]"
        >
          INFINITE OPPORTUNITIES. <span className="text-[#7692FF]">∞</span> LIMITLESS WEALTH.
        </motion.p>

        {/* Short Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed"
        >
          Building the world's complete finance ecosystem uniting broker house, prop firm, AI intelligence, and global cards.
        </motion.p>

        {/* CTA Buttons matching reference: "ENTER THE ECOSYSTEM" & "FOLLOW THE ROADMAP" */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onExploreEcosystem}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] hover:shadow-[0_0_35px_rgba(118,146,255,0.5)] transition-all flex items-center justify-center gap-2.5 group border border-[#ABD2FA]/40"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>ENTER THE ECOSYSTEM</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToRoadmap}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-slate-200 bg-[#091540]/80 hover:bg-[#0e1d52] border border-[#7692FF]/35 hover:border-[#ABD2FA]/50 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#7692FF]" />
            <span>FOLLOW THE ROADMAP</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={onExploreVision}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-[#ABD2FA] transition-colors focus:outline-none group"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-400 group-hover:text-[#ABD2FA] font-mono">
              SCROLL
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#7692FF]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
