import React from 'react';
import { motion } from 'framer-motion';

export const SectionDivider: React.FC = () => {
  return (
    <div className="relative py-4 sm:py-5 flex items-center justify-center overflow-hidden max-w-[1700px] mx-auto px-4 sm:px-8">
      {/* Background line */}
      <div className="absolute inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-[#7692FF]/20 to-transparent" />

      {/* Animated glow pulse */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-x-24 h-[1px] bg-gradient-to-r from-transparent via-[#ABD2FA]/60 to-transparent shadow-[0_0_10px_rgba(171,210,250,0.5)]"
      />

      {/* Elegant central glowing infinity node */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 w-8 h-8 rounded-full bg-[#091540] border border-[#7692FF]/40 shadow-[0_0_15px_rgba(118,146,255,0.35)] flex items-center justify-center"
      >
        <span className="text-[#ABD2FA] text-xs font-serif leading-none select-none">∞</span>
      </motion.div>
    </div>
  );
};
