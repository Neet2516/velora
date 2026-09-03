import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Box, Gem, Palmtree, Sparkles, Lock, ShieldCheck, ArrowRight } from 'lucide-react';
import { FOREX_CARD_VARIANTS } from '../../data/cardsData';

export const UpcomingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cards' | 'arbitrage' | 'team' | 'bonanza'>('cards');
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);

  const tabs = [
    { id: 'cards', label: 'Forex Cards', icon: CreditCard, badge: 'Coming Soon' },
    { id: 'arbitrage', label: 'Crypto Arbitrage', icon: Box, badge: 'Revealing Soon' },
    { id: 'team', label: 'Core Team (Blue Diamond)', icon: Gem, badge: 'Coming Soon' },
    { id: 'bonanza', label: 'International Bonanza', icon: Palmtree, badge: 'Revealing Soon' },
  ];

  return (
    <section id="upcoming" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#1B2CC1]/15 via-[#7692FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#091540]/80 border border-[#7692FF]/30 text-[#ABD2FA] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
        >
          <Sparkles className="w-4 h-4 text-[#ABD2FA]" />
          <span>UPCOMING HORIZONS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
        >
          Something Extraordinary is{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] via-[#7692FF] to-[#1B2CC1]">
            on the Horizon
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mt-4 text-base sm:text-lg text-slate-300"
        >
          Curated preview of next-generation physical assets, high-frequency algorithms,
          governance ranks, and luxury global experiences.
        </motion.p>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] text-white shadow-[0_0_20px_rgba(118,146,255,0.45)] border border-[#ABD2FA]/40'
                    : 'bg-[#091540]/60 text-slate-400 hover:text-white hover:bg-[#0e1d52] border border-[#7692FF]/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#050c26]/60 text-[#ABD2FA] font-mono">
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Display with High-Res PDF Visuals */}
      <AnimatePresence mode="wait">
        {/* 1. FOREX CARDS PREVIEW (PDF Page 11) */}
        {activeTab === 'cards' && (
          <motion.div
            key="cards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl bg-[#091540]/70 border border-[#7692FF]/30 backdrop-blur-2xl shadow-card-lux"
          >
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#7692FF]/30 group">
              <img
                src="/images/forex_cards_luxury_trio.png"
                alt="Velora Forex Cards Trio"
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B2CC1]/20 border border-[#7692FF]/30 text-[#ABD2FA] text-xs font-semibold uppercase mb-3">
                <Lock className="w-3.5 h-3.5" />
                <span>COMING SOON • EXCLUSIVE. GLOBAL. LIMITLESS.</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                Velora Global Forex Cards & Utility App
              </h3>
              <p className="text-sm text-[#7692FF] font-medium mb-4">
                Three luxury tiers: Sapphire Geometric, Obsidian Brushed, Diamond Quartz
              </p>

              <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ABD2FA] shrink-0" />
                  <span>Accepted in 190+ countries with zero international surcharges</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ABD2FA] shrink-0" />
                  <span>Instant trading profit off-ramp from Prop & Broker accounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ABD2FA] shrink-0" />
                  <span>Integrated with the Velora Utility Mobile App for iOS and Android</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#050c26]/80 border border-[#7692FF]/20 text-center">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">ATM Limit</span>
                  <span className="text-xs sm:text-sm font-bold text-white">$15,000 / day</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">POS Spend</span>
                  <span className="text-xs sm:text-sm font-bold text-white">$100,000 / day</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Currencies</span>
                  <span className="text-xs sm:text-sm font-bold text-[#ABD2FA]">40+ Interbank</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. CRYPTO ARBITRAGE (PDF Page 8) */}
        {activeTab === 'arbitrage' && (
          <motion.div
            key="arbitrage"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl bg-[#091540]/70 border border-[#7692FF]/30 backdrop-blur-2xl shadow-card-lux"
          >
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#7692FF]/30 group">
              <img
                src="/images/crypto_arbitrage_cube.png"
                alt="Crypto Arbitrage Platform"
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="lg:col-span-6">
              <span className="text-xs font-mono tracking-widest text-[#ABD2FA] uppercase font-semibold">
                SOMETHING BIG IS COMING
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-1 mb-2">
                CRYPTO ARBITRAGE PLATFORM
              </h3>
              <p className="text-base text-[#7692FF] font-semibold mb-4">
                THE FUTURE OF ARBITRAGE IS ALMOST HERE
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Capturing micro-second price disparities across Tier-1 global crypto order books with sub-millisecond execution and automated slippage mitigation.
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1B2CC1]/20 border border-[#7692FF]/40 text-xs font-semibold tracking-widest text-[#ABD2FA] uppercase font-mono">
                <span>STAY TUNED. STAY AHEAD. REVEALING SOON.</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* 3. CORE TEAM - BLUE DIAMOND (PDF Page 14) */}
        {activeTab === 'team' && (
          <motion.div
            key="team"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl bg-[#091540]/70 border border-[#7692FF]/30 backdrop-blur-2xl shadow-card-lux"
          >
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#7692FF]/30 group">
              <img
                src="/images/core_team_blue_diamond.png"
                alt="Velora Core Team Blue Diamond"
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="lg:col-span-6">
              <span className="text-xs font-mono tracking-widest text-[#ABD2FA] uppercase font-semibold">
                UPCOMING CORE TEAM
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-1 mb-2">
                FORMED BY BLUE DIAMOND LEADERS
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                The Velora Global leadership council will be formed exclusively by leaders who achieve the prestigious rank of <strong className="text-[#ABD2FA]">BLUE DIAMOND RANK</strong>. Steering strategic governance, global expansion, and direct alignment with founders.
              </p>
              <div className="flex items-center gap-4 text-xs sm:text-sm font-bold text-slate-200 tracking-wider uppercase font-mono">
                <span className="text-[#ABD2FA]">ONE RANK.</span>
                <span className="text-slate-600">•</span>
                <span className="text-[#7692FF]">ONE TEAM.</span>
                <span className="text-slate-600">•</span>
                <span className="text-[#ABD2FA]">ONE VISION.</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* 4. INTERNATIONAL BONANZA (PDF Pages 17 & 18) */}
        {activeTab === 'bonanza' && (
          <motion.div
            key="bonanza"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl bg-[#091540]/70 border border-[#7692FF]/30 backdrop-blur-2xl shadow-card-lux"
          >
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#7692FF]/30 group">
              <img
                src="/images/bonanza_destination_horizon.png"
                alt="Velora Upcoming Bonanza Destination"
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="lg:col-span-6">
              <span className="text-xs font-mono tracking-widest text-[#ABD2FA] uppercase font-semibold">
                A SURPRISE IS AWAITING FOR YOU • ARE YOU GUYS READY?
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-1 mb-2">
                UPCOMING BONANZA
              </h3>
              <p className="text-base text-[#7692FF] font-semibold mb-3">
                A REWARD. A JOURNEY. A MEMORY FOR LIFE.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                An all-inclusive luxury international experience honoring top partners and traders. 5-star private stays, leadership summit, and world-class destinations.
              </p>
              <div className="p-3.5 rounded-2xl bg-[#050c26]/80 border border-[#7692FF]/30 max-w-sm mb-4">
                <span className="text-[10px] text-slate-400 uppercase block font-mono">DESTINATION STATUS</span>
                <span className="text-sm font-bold text-[#ABD2FA]">TO BE DISCLOSED SOON</span>
              </div>
              <p className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
                GET READY. STAY TUNED. AN INTERNATIONAL EXPERIENCE AWAITS YOU.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
