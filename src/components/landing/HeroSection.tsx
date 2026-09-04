import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import animatedVideo from '../../../assets/animated_video.mp4';
import { VeloraSignature } from '../brand/VeloraSignature';

import { useLenis } from '../../hooks/useLenis';

interface HeroSectionProps {
  onExploreEcosystem: () => void;
  onExploreVision: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreEcosystem,
  onExploreVision,
}) => {
  const { scrollTo } = useLenis();

  const scrollToRoadmap = () => {
    scrollTo('#roadmap', { offset: -72 });
  };

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center" style={{ contain: 'paint' }}>
      {/* Background Frame Layer: Deep Blue Cinematic Vignette & Ambient Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ transform: 'translateZ(0)' }}>
        {/* Full-Screen Animated Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-75 will-change-transform"
        >
          <source src={animatedVideo} type="video/mp4" />
          <source src="/assets/animated_video.mp4" type="video/mp4" />
        </video>

        {/* Ambient Cosmic Radial Glow - Exactly like the loader: Center light/luminous */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1300px] h-[580px] bg-gradient-to-tr from-[#1B2CC1]/40 via-[#7692FF]/30 to-[#ABD2FA]/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />

        {/* Glowing Cyber Grid matching the loader */}
        <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

        {/* Deep Blue Frame: Dark on the sides, fading inward */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050c26] via-[#050c26]/20 to-[#050c26] pointer-events-none" />

        {/* Top and Bottom Dark Transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050c26]/85 via-transparent to-[#050c26] pointer-events-none" />

        {/* Deep Blue Cinematic Elliptical Vignette Frame */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 85% 70% at 50% 50%, rgba(9, 21, 64, 0.2) 0%, rgba(5, 12, 38, 0.65) 65%, #050c26 100%)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 text-center pt-24 pb-12 sm:pt-28 sm:pb-14 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0, filter: 'blur(12px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 1.1,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full max-w-[min(92vw,_1200px)] mx-auto mb-4"
        >
          {/* Ambient Behind-Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2CC1]/30 via-[#7692FF]/35 to-[#ABD2FA]/25 blur-3xl rounded-full pointer-events-none" />

          <VeloraSignature animated={true} delay={0.2} />
        </motion.div>

        {/* Distinctive Editorial Typographic Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-1.5 sm:gap-2 select-none"
        >
          {/* THE FUTURE */}
          <span className="font-sans font-light tracking-[0.38em] text-xs sm:text-sm md:text-base text-slate-300/90 uppercase">
            THE FUTURE
          </span>

          {/* OF FINANCE */}
          <span className="font-serif italic font-normal tracking-[0.18em] text-xl sm:text-3xl md:text-4xl text-white drop-shadow-[0_0_25px_rgba(171,210,250,0.6)] uppercase">
            OF FINANCE
          </span>

          {/* IS AN */}
          <div className="flex items-center gap-3 my-0.5 sm:my-1">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#7692FF]/60" />
            <span className="font-mono text-[11px] sm:text-xs tracking-[0.45em] text-[#7692FF] uppercase font-semibold">
              IS AN
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#7692FF]/60" />
          </div>

          {/* ECOSYSTEM */}
          <span className="font-display font-black tracking-[0.24em] text-2xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ABD2FA] to-[#7692FF] uppercase drop-shadow-[0_0_35px_rgba(118,146,255,0.9)]">
            ECOSYSTEM
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none sm:flex-row"
        >
          <button
            onClick={onExploreEcosystem}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-bold text-sm sm:text-base text-white bg-[#1B2CC1] hover:bg-[#15239e] hover:shadow-[0_0_35px_rgba(27,44,193,0.7)] transition-all flex items-center justify-center gap-3 group border border-[#7692FF]/40 shadow-[0_0_20px_rgba(27,44,193,0.4)]"
          >
            <span>ENTER THE ECOSYSTEM</span>
            <ArrowRight className="w-4 h-4 text-[#ABD2FA] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToRoadmap}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-semibold text-sm sm:text-base text-white/90 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#ABD2FA]/50 backdrop-blur-md transition-all flex items-center justify-center gap-2 group"
          >
            <span>FOLLOW THE ROADMAP</span>
            <ArrowRight className="w-4 h-4 text-[#ABD2FA] group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
