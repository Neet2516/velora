import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  label?: string;
  icon?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ label = 'VELORA GLOBAL' }) => {
  return (
    <div className="relative py-12 flex items-center justify-center overflow-hidden max-w-7xl mx-auto px-4">
      {/* Background glow streak */}
      <div className="absolute inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-[#7692FF]/30 to-transparent" />

      {/* Animated glowing pulse line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-x-24 h-[2px] bg-gradient-to-r from-transparent via-[#ABD2FA] to-transparent shadow-[0_0_15px_rgba(171,210,250,0.6)]"
      />

      {/* Central Node Badge */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 px-4 py-1 rounded-full bg-[#091540] border border-[#7692FF]/40 text-[#ABD2FA] text-[10px] font-mono tracking-[0.25em] uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(27,44,193,0.4)]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#7692FF] animate-pulse" />
        <span>{label}</span>
        <span className="text-[#7692FF] font-bold">∞</span>
      </motion.div>
    </div>
  );
};
