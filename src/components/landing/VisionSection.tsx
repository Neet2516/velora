import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Sparkles, Network, Globe, Building2 } from 'lucide-react';
import { GLOBAL_MARKET_STATS } from '../../data/marketData';

export const VisionSection: React.FC = () => {
  const trustPillars = [
    {
      title: 'Trust & Transparency',
      desc: 'Clear policies and complete transparency in every transaction and execution model.',
      icon: ShieldCheck,
    },
    {
      title: 'Global Community',
      desc: 'Uniting passionate traders, community leaders & ecosystem partners worldwide.',
      icon: Users,
    },
    {
      title: 'Innovative Technology',
      desc: 'Advanced algorithmic tools and AI-driven platforms engineered for smarter trading.',
      icon: Sparkles,
    },
    {
      title: 'Strong Partnerships',
      desc: 'Working in direct alignment with top-tier prime liquidity providers worldwide.',
      icon: Network,
    },
    {
      title: 'Endless Opportunities',
      desc: 'Forex, Gold, Crypto, Indices & beyond — seamlessly integrated all in one ecosystem.',
      icon: Globe,
    },
  ];

  const marketStats = [
    { label: 'FOREX MARKET', volume: GLOBAL_MARKET_STATS.forexVolume, tag: GLOBAL_MARKET_STATS.forexLabel },
    { label: 'XAUUSD (GOLD) MARKET', volume: GLOBAL_MARKET_STATS.goldVolume, tag: GLOBAL_MARKET_STATS.goldLabel },
    { label: 'CRYPTO MARKET', volume: GLOBAL_MARKET_STATS.cryptoVolume, tag: GLOBAL_MARKET_STATS.cryptoLabel },
  ];

  return (
    <section id="vision" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#1B2CC1]/15 via-[#7692FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header from reference */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#091540]/80 border border-[#7692FF]/30 text-[#ABD2FA] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 font-mono"
        >
          <span>THE VISION OF VELORA GLOBAL</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
        >
          One Ecosystem.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] via-[#7692FF] to-[#1B2CC1]">
            Endless Possibilities.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto"
        >
          "To build the complete financial ecosystem that empowers traders, investors, and dreamers —{' '}
          <span className="text-[#ABD2FA] font-semibold">step by step</span>."
        </motion.p>
      </div>

      {/* Market Statistics from reference */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {marketStats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-3xl bg-[#091540]/70 border border-[#7692FF]/25 hover:border-[#ABD2FA]/50 backdrop-blur-xl shadow-card-lux transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono tracking-widest text-[#ABD2FA] uppercase">
                {stat.label}
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#1B2CC1]/30 border border-[#7692FF]/30 text-slate-300 font-mono">
                {stat.tag}
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-white my-1">
              {stat.volume}
            </div>
            <span className="text-xs text-[#7692FF] font-mono tracking-wider uppercase font-semibold">
              DAILY VOLUME
            </span>
          </motion.div>
        ))}
      </div>

      {/* Featured Broker House Banner from reference & PDF */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0e1d52]/90 via-[#091540]/95 to-[#0e1d52]/90 border border-[#7692FF]/35 shadow-card-lux mb-16 flex flex-col lg:flex-row items-center justify-between gap-8"
      >
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#1B2CC1]/30 border border-[#7692FF]/40 flex items-center justify-center text-[#ABD2FA] shrink-0 shadow-[0_0_20px_rgba(118,146,255,0.3)]">
            <Building2 className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-[#ABD2FA]">
              CORE CORNERSTONE VERTICAL
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
              Velora's Broker House
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              World-class brokerage solutions built with trust, transparency & technology. A hybrid model combining the best of MM and STP/ECN with deep liquidity access and bank-grade segregated client funds protection.
            </p>
          </div>
        </div>

        <div className="px-5 py-2.5 rounded-2xl bg-[#050c26]/80 border border-[#7692FF]/30 text-center shrink-0">
          <span className="text-[10px] font-mono text-slate-400 block uppercase">STATUS</span>
          <span className="text-sm font-bold text-[#ABD2FA] font-mono">REVEALING SOON</span>
        </div>
      </motion.div>

      {/* 5 Trust Pillars from reference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {trustPillars.map((tp, idx) => (
          <motion.div
            key={tp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: idx * 0.08 }}
            className="p-5 rounded-2xl bg-[#091540]/60 border border-[#7692FF]/20 hover:border-[#ABD2FA]/40 backdrop-blur-xl transition-all shadow-card-lux"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0e1d52] border border-[#7692FF]/30 flex items-center justify-center text-[#ABD2FA] mb-3">
              <tp.icon className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-display font-bold text-white mb-1.5">{tp.title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{tp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
