import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FinalCTASectionProps {
  onExploreEcosystem: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onExploreEcosystem }) => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Full-Width Thank You Podium Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl overflow-hidden border border-[#7692FF]/30 shadow-card-lux group"
      >
        <img
          src="/images/thank_you_podium.png"
          alt="Velora Global Podium"
          loading="lazy"
          className="w-full h-72 sm:h-96 lg:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050c26] via-[#050c26]/50 to-transparent" />

        {/* CTA Content Overlaid on Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-16 px-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-[0.3em] text-[#ABD2FA] uppercase mb-3"
          >
            A SURPRISE IS AWAITING FOR YOU
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white text-center leading-[1.1] mb-6 max-w-3xl"
          >
            Are You Ready for{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] to-[#7692FF]">
              the Future?
            </span>
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={onExploreEcosystem}
            className="px-10 py-4 rounded-full font-display font-bold text-base text-white bg-gradient-to-r from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] hover:shadow-[0_0_40px_rgba(118,146,255,0.55)] transition-all flex items-center gap-3 border border-[#ABD2FA]/40 group/btn"
          >
            <span>ENTER THE ECOSYSTEM</span>
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
          </motion.button>

          <div className="mt-6 text-xs font-mono tracking-[0.25em] text-white/40 uppercase">
            INFINITE OPPORTUNITIES · LIMITLESS WEALTH
          </div>
        </div>
      </motion.div>
    </section>
  );
};
