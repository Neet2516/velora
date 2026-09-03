import React from 'react';
import { motion } from 'framer-motion';
import { GLOBAL_MARKET_STATS } from '../../data/marketData';

export const VisionSection: React.FC = () => {
  const marketStats = [
    { label: 'FOREX', volume: GLOBAL_MARKET_STATS.forexVolume, tag: 'DAILY' },
    { label: 'GOLD', volume: GLOBAL_MARKET_STATS.goldVolume, tag: 'DAILY' },
    { label: 'CRYPTO', volume: GLOBAL_MARKET_STATS.cryptoVolume, tag: 'DAILY' },
  ];

  return (
    <section id="vision" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-mono tracking-[0.3em] text-[#ABD2FA] uppercase mb-3"
        >
          THE VELORA VISION
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-serif font-bold text-white leading-[1.1]"
        >
          One Ecosystem.{' '}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] to-[#7692FF]">
            Endless Possibilities.
          </span>
        </motion.h2>
      </div>

      {/* Full-Width Vision Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl overflow-hidden border border-[#7692FF]/30 shadow-card-lux mb-12 group"
      >
        <img
          src="/images/ecosystem_vision_hub.png"
          alt="Velora Global Ecosystem Vision"
          loading="lazy"
          className="w-full h-72 sm:h-96 lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050c26] via-[#050c26]/40 to-transparent" />
        <div className="absolute bottom-6 left-6 sm:left-10 right-6 sm:right-10">
          <p className="text-lg sm:text-2xl font-serif italic text-white/90 leading-relaxed max-w-2xl">
            "To build the complete financial ecosystem that empowers traders, investors, and dreamers — step by step."
          </p>
        </div>
      </motion.div>

      {/* Market Stats Strip */}
      <div className="grid grid-cols-3 gap-4 mb-14">
        {marketStats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="text-center p-5 rounded-2xl bg-[#091540]/60 border border-[#7692FF]/25 backdrop-blur-xl"
          >
            <span className="text-[10px] font-mono tracking-widest text-[#ABD2FA] uppercase block mb-1">
              {stat.label} · {stat.tag}
            </span>
            <div className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              {stat.volume}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Two Image Cards Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-[#7692FF]/25 shadow-card-lux group relative"
        >
          <img
            src="/images/vision_futurism_markets.png"
            alt="Global Market Volumes"
            loading="lazy"
            className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050c26] via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <span className="text-xs font-mono text-[#ABD2FA] uppercase tracking-widest">WE FUND. YOU TRADE.</span>
            <h3 className="text-xl font-serif font-bold text-white mt-1">Together, We Build the Future.</h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-[#7692FF]/25 shadow-card-lux group relative"
        >
          <img
            src="/images/world_complete_ecosystem.png"
            alt="World Complete Ecosystem"
            loading="lazy"
            className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050c26] via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <span className="text-xs font-mono text-[#ABD2FA] uppercase tracking-widest">ONE ECOSYSTEM</span>
            <h3 className="text-xl font-serif font-bold text-white mt-1">One Vision. Limitless Future.</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
