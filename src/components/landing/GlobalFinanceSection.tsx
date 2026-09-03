import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Activity } from 'lucide-react';
import { CanvasWrapper } from '../3d/CanvasWrapper';
import { GlobalGlobe3D } from '../3d/GlobalGlobe3D';

export const GlobalFinanceSection: React.FC = () => {
  const regions = [
    { name: 'New York', hub: 'NYSE / NASDAQ', latency: '1.2ms', volume: '$3.2T' },
    { name: 'London', hub: 'LSE / SIX', latency: '0.8ms', volume: '$2.8T' },
    { name: 'Dubai', hub: 'DIFC Hub', latency: '1.5ms', volume: '$1.4T' },
    { name: 'Singapore', hub: 'SGX / TSE', latency: '1.1ms', volume: '$2.2T' },
  ];

  return (
    <section id="global-finance" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-mono tracking-[0.3em] text-[#ABD2FA] uppercase mb-3"
        >
          GLOBAL NETWORK
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-serif font-bold text-white leading-[1.1]"
        >
          One Ecosystem.{' '}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] to-[#7692FF]">
            Limitless Future.
          </span>
        </motion.h2>
      </div>

      {/* Full-Width Skyline Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl overflow-hidden border border-[#7692FF]/30 shadow-card-lux mb-10 group"
      >
        <img
          src="/images/velora_global_skyline_1788452911616.jpg"
          alt="Velora Global Skyline"
          loading="lazy"
          className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050c26] via-[#050c26]/30 to-transparent" />
        <div className="absolute bottom-5 left-5 sm:left-8">
          <p className="text-lg font-serif italic text-white/80">
            7 Interconnected Liquidity Nodes · 140+ Countries
          </p>
        </div>
      </motion.div>

      {/* Globe + Regional Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-7 h-[380px] sm:h-[450px] rounded-3xl bg-[#091540]/60 border border-[#7692FF]/30 overflow-hidden shadow-card-lux"
        >
          <CanvasWrapper camera={{ position: [0, 0, 4.8], fov: 45 }}>
            <GlobalGlobe3D />
          </CanvasWrapper>
        </motion.div>

        <div className="lg:col-span-5 space-y-3">
          {regions.map((reg, idx) => (
            <motion.div
              key={reg.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-4 rounded-2xl bg-[#091540]/60 border border-[#7692FF]/20 hover:border-[#ABD2FA]/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-display font-bold text-white">{reg.name}</span>
                <span className="text-[10px] font-mono text-[#ABD2FA] flex items-center gap-1">
                  <Activity className="w-3 h-3" /> {reg.latency}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-sans">{reg.hub}</span>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#7692FF]/15 text-xs">
                <span className="text-slate-400 font-mono">Daily Volume</span>
                <span className="font-mono font-bold text-[#ABD2FA]">{reg.volume}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
