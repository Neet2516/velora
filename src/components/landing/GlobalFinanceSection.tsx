import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Activity } from 'lucide-react';
import { CanvasWrapper } from '../3d/CanvasWrapper';
import { GlobalGlobe3D } from '../3d/GlobalGlobe3D';

export const GlobalFinanceSection: React.FC = () => {
  const regions = [
    { name: 'North America', hub: 'New York (NYSE/NASDAQ)', latency: '1.2ms', volume: '$3.2T / day', color: 'text-[#ABD2FA]' },
    { name: 'Europe', hub: 'London & Zurich (LSE/SIX)', latency: '0.8ms', volume: '$2.8T / day', color: 'text-[#7692FF]' },
    { name: 'Middle East', hub: 'Dubai Financial Hub (DIFC)', latency: '1.5ms', volume: '$1.4T / day', color: 'text-white' },
    { name: 'Asia Pacific', hub: 'Tokyo & Singapore (SGX/TSE)', latency: '1.1ms', volume: '$2.2T / day', color: 'text-[#ABD2FA]' },
  ];

  return (
    <section id="global-finance" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#1B2CC1]/15 via-[#7692FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#091540]/80 border border-[#7692FF]/30 text-[#ABD2FA] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
        >
          <Globe className="w-4 h-4 text-[#ABD2FA]" />
          <span>GLOBAL NETWORK INFRASTRUCTURE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
        >
          ONE ECOSYSTEM.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] via-[#7692FF] to-[#1B2CC1]">
            ONE VISION.
          </span>{' '}
          LIMITLESS FUTURE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mt-4 text-base sm:text-lg text-slate-300"
        >
          Uniting international Tier-1 liquidity providers, high-frequency execution clusters, and traders across 140+ countries into a synchronized financial mesh.
        </motion.p>
      </div>

      {/* 3D Interactive Globe & Regional Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 h-[420px] sm:h-[500px] rounded-3xl bg-[#091540]/60 border border-[#7692FF]/30 overflow-hidden shadow-card-lux relative"
        >
          <CanvasWrapper camera={{ position: [0, 0, 4.8], fov: 45 }}>
            <GlobalGlobe3D />
          </CanvasWrapper>

          <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#050c26]/90 border border-[#7692FF]/30 backdrop-blur-md text-xs">
            <div className="flex items-center gap-2 text-[#ABD2FA] font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#ABD2FA] animate-ping" />
              GLOBAL MESH ACTIVE
            </div>
            <p className="text-slate-400 mt-0.5 text-[11px]">7 Global Liquidity Hubs</p>
          </div>

          <div className="absolute bottom-4 right-4 p-3 rounded-xl bg-[#050c26]/90 border border-[#7692FF]/30 backdrop-blur-md text-xs text-right">
            <span className="text-[10px] text-slate-400 font-mono block">AGGREGATE LATENCY</span>
            <span className="text-sm font-bold text-[#ABD2FA] font-mono">12.4ms Worldwide</span>
          </div>
        </motion.div>

        <div className="lg:col-span-5 space-y-3.5">
          {regions.map((reg, idx) => (
            <motion.div
              key={reg.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-[#091540]/60 border border-[#7692FF]/20 hover:border-[#ABD2FA]/50 backdrop-blur-xl transition-all shadow-card-lux group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                  {reg.name}
                </span>
                <span className="text-xs font-mono text-[#ABD2FA] flex items-center gap-1">
                  <Activity className="w-3 h-3" />
                  {reg.latency}
                </span>
              </div>
              <h4 className="text-base font-display font-bold text-white group-hover:text-[#ABD2FA] transition-colors">
                {reg.hub}
              </h4>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#7692FF]/20 text-xs">
                <span className="text-slate-400">Regional Volume</span>
                <span className={`font-mono font-bold ${reg.color}`}>{reg.volume}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
