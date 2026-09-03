import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  label?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ label = 'VELORA GLOBAL' }) => {
  return (
    <div className="relative py-10 flex items-center justify-center overflow-hidden max-w-7xl mx-auto px-4">
      {/* Background line */}
      <div className="absolute inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-[#7692FF]/25 to-transparent" />

      {/* Animated glow pulse */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-x-24 h-[1px] bg-gradient-to-r from-transparent via-[#ABD2FA]/60 to-transparent shadow-[0_0_10px_rgba(171,210,250,0.5)]"
      />

      {/* Label Node */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 px-4 py-1 rounded-full bg-[#091540] border border-[#7692FF]/35 flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#7692FF] animate-pulse" />
        <span className="text-[9px] font-mono tracking-[0.3em] text-[#ABD2FA] uppercase">{label}</span>
        <span className="text-[#7692FF] font-serif text-sm">∞</span>
      </motion.div>
    </div>
  );
};
