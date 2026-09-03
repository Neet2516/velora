import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { CanvasWrapper } from '../3d/CanvasWrapper';
import { PedestalInfinity3D } from '../3d/PedestalInfinity3D';

interface FinalCTASectionProps {
  onExploreEcosystem: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onExploreEcosystem }) => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-center">
      {/* Background radial glow in #1B2CC1 & #7692FF */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#1B2CC1]/20 via-[#7692FF]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 3D Pedestal Infinity Centerpiece */}
      <div className="w-full max-w-lg h-64 sm:h-72 mx-auto relative mb-6">
        <CanvasWrapper camera={{ position: [0, 1.2, 5.2], fov: 45 }}>
          <PedestalInfinity3D />
        </CanvasWrapper>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#091540]/80 border border-[#7692FF]/40 text-[#ABD2FA] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
        >
          <Sparkles className="w-4 h-4 text-[#ABD2FA]" />
          <span>A SURPRISE IS AWAITING FOR YOU</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight"
        >
          ARE YOU READY FOR{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] via-[#7692FF] to-[#1B2CC1]">
            THE FUTURE OF FINANCE?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Join thousands of traders, investors, and community leaders united in the world's complete financial ecosystem.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onExploreEcosystem}
            className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] hover:shadow-[0_0_40px_rgba(118,146,255,0.6)] transition-all flex items-center justify-center gap-3 border border-[#ABD2FA]/40 group"
          >
            <span>Enter Velora Ecosystem</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
          </button>
        </motion.div>

        {/* Brand Tagline */}
        <div className="mt-12 flex items-center justify-center gap-4 text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono">
          <span className="text-[#ABD2FA]">INFINITE OPPORTUNITIES.</span>
          <span className="text-[#7692FF] font-bold text-base">∞</span>
          <span className="text-[#ABD2FA]">LIMITLESS WEALTH.</span>
        </div>
      </div>
    </section>
  );
};
