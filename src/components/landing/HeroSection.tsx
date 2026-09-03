import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, MapPin } from 'lucide-react';

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
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Full-Screen Background Image with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_launch_skyline.png"
          alt="Velora Global Launch"
          className="w-full h-full object-cover animate-ken-burns"
        />
        {/* Dark Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050c26]/70 via-[#050c26]/50 to-[#050c26]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091540]/60 via-transparent to-[#091540]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#091540]/70 border border-[#7692FF]/40 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#ABD2FA] animate-ping" />
          <span className="text-xs font-mono tracking-[0.25em] text-[#ABD2FA] uppercase">
            WELCOME TO VELORA GLOBAL
          </span>
          <span className="text-[#7692FF] font-bold text-lg">∞</span>
        </motion.div>

        {/* Main Headline — Cormorant Garamond serif for luxury feel */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white leading-[1.05]"
        >
          THE FUTURE OF FINANCE
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] via-[#7692FF] to-[#1B2CC1]">
            IS AN ECOSYSTEM.
          </span>
        </motion.h1>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 text-sm sm:text-base font-mono tracking-[0.3em] text-[#ABD2FA]/80 uppercase"
        >
          INFINITE OPPORTUNITIES · LIMITLESS WEALTH
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onExploreEcosystem}
            className="w-full sm:w-auto px-9 py-4 rounded-full font-display font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] hover:shadow-[0_0_40px_rgba(118,146,255,0.55)] transition-all flex items-center justify-center gap-3 group border border-[#ABD2FA]/40"
          >
            <Sparkles className="w-4 h-4" />
            <span>ENTER THE ECOSYSTEM</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToRoadmap}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-semibold text-sm sm:text-base text-white/90 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#ABD2FA]/50 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#7692FF]" />
            <span>FOLLOW THE ROADMAP</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <button
            onClick={onExploreVision}
            className="flex flex-col items-center gap-1.5 text-white/40 hover:text-[#ABD2FA] transition-colors mx-auto"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono">SCROLL</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
