import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FinalCTASectionProps {
  onExploreEcosystem: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onExploreEcosystem }) => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-5xl mx-auto text-center">
      {/* Soft Ambient Radial Cosmic Glow seamlessly on page background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] sm:h-[650px] rounded-full bg-radial-ambient opacity-50 blur-[130px] pointer-events-none" />

      {/* Content Container (Completely Seamless, No Box, No Border) */}
      <div className="relative z-10 flex flex-col items-center justify-center select-none">
        {/* "Thank You" in Times New Roman Font */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h2
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
            className="text-7xl sm:text-9xl lg:text-[145px] font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ABD2FA] to-[#7692FF] leading-[1.25] pb-4 sm:pb-6 filter drop-shadow-[0_0_35px_rgba(171,210,250,0.4)] select-none"
          >
            Thank You
          </h2>
        </motion.div>

        {/* Vision Statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-serif text-white max-w-2xl mx-auto leading-snug mb-4 tracking-tight"
        >
          Are You Ready for{' '}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] via-[#7692FF] to-[#1B2CC1]">
            the Future?
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xs sm:text-sm font-mono text-[#ABD2FA]/80 tracking-[0.25em] uppercase mb-10"
        >
          Infinite Opportunities · Limitless Wealth
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          onClick={onExploreEcosystem}
          className="px-10 sm:px-12 py-4 sm:py-5 rounded-full font-display font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] hover:shadow-[0_0_45px_rgba(118,146,255,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-3 border border-[#ABD2FA]/40 shadow-[0_0_30px_rgba(27,44,193,0.5)] group/btn"
        >
          <span>ENTER THE ECOSYSTEM</span>
          <ArrowRight className="w-5 h-5 text-[#ABD2FA] group-hover/btn:translate-x-1.5 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
};
