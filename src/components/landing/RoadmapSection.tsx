import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface StageMeta {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  theme: string;
  iconEmoji: string;
  bgImage: string;
  quote: string;
  tagline: string;
  highlights: string[];
}

const ROADMAP_METAS: StageMeta[] = [
  {
    id: 'launch',
    stepNumber: 1,
    title: 'LAUNCH',
    subtitle: 'THE BEGINNING',
    theme: 'Dawn / Genesis',
    iconEmoji: '🚀',
    bgImage: '/images/roadmap_launch.jpg',
    quote: 'The first spark of Velora Global — the foundation of one complete financial ecosystem is laid.',
    tagline: 'Brand Inauguration · Genesis Liquidity · Foundation Protocol',
    highlights: [
      'Global Launch Event & Brand Inauguration',
      'Velora Core Architecture & Infinity Protocol Deployment',
      'Community Onboarding & Early Pioneer Access',
      'Foundational Prime Liquidity Alliances',
      'Velora Future Education Framework Unveiling',
    ],
  },
  {
    id: 'growth',
    stepNumber: 2,
    title: 'GROWTH',
    subtitle: 'BUILDING MOMENTUM',
    theme: 'Growing Futuristic City',
    iconEmoji: '🏙️',
    bgImage: '/images/velora_global_skyline_1788452911616.jpg',
    quote: "Expanding the ecosystem's core pillars as traders and partners begin to join the movement.",
    tagline: 'AI Co-Pilot · Multi-Asset Ingestion · Copy Trading Engine',
    highlights: [
      'Velora AI Agent Suite Deployment (Real-time Signals & Sentiment)',
      'Fund Management Infrastructure & Portfolio Launch',
      'AI Automation License Bot Beta Rollout for Top Leaders',
      'Multi-Market Feeds across Forex, Crypto, Gold, and Indices',
      'Global Pioneer Community Network Activation',
    ],
  },
  {
    id: 'expansion',
    stepNumber: 3,
    title: 'EXPANSION',
    subtitle: 'BREAKING BOUNDARIES',
    theme: 'Global Network',
    iconEmoji: '🌍',
    bgImage: '/images/world_complete_ecosystem.png',
    quote: 'Reaching further across global markets — Forex, Gold, Crypto and beyond, all in one ecosystem.',
    tagline: 'Prop Firm Allocation · Arbitrage Engine · Luxury Forex Cards',
    highlights: [
      'Velora Funded Prop Firm Official Launch (Capital up to $200K+)',
      'High-Frequency Crypto Arbitrage Engine Activation',
      'Velora Global Forex Cards Trio (Sapphire, Obsidian, Diamond)',
      'Middle East & Asia-Pacific Institutional Nodes Launch',
      'International Bonanza Reveal & Destination Gala',
    ],
  },
  {
    id: 'collaboration',
    stepNumber: 4,
    title: 'COLLABORATION',
    subtitle: 'STRONGER TOGETHER',
    theme: 'Connected Nodes',
    iconEmoji: '🤝',
    bgImage: '/images/roadmap_nodes.jpg',
    quote: 'Uniting traders, leaders and partners worldwide through strong, transparent partnerships.',
    tagline: 'Hybrid Broker House · Blue Diamond Rank · Global Governance',
    highlights: [
      'Velora Hybrid Broker House Public Deployment (MM + STP/ECN)',
      'Prime Tier-1 Liquidity Aggregation & Zero-Slippage Mesh',
      'Blue Diamond Leadership Council Formation & Governance',
      'Institutional Asset Custody & Bank Segregation Protocols',
      'Global Master Affiliate & Revenue-Share Engine',
    ],
  },
  {
    id: 'legacy',
    stepNumber: 5,
    title: 'LEGACY',
    subtitle: 'BUILDING THE FUTURE',
    theme: 'Giant Glowing Diamond',
    iconEmoji: '💎',
    bgImage: '/images/roadmap_diamond.jpg',
    quote: "One rank, one team, one vision — building the world's complete finance ecosystem for the long term.",
    tagline: 'Complete Ecosystem · Sovereign Wealth · Generational Impact',
    highlights: [
      'Full Interoperability across all 8+ Velora Ecosystem Verticals',
      'Velora Sovereign Super-App (Web, iOS, Android, Desktop)',
      'Blue Diamond Global Annual Assembly & Strategic Direction',
      'Generational Wealth Custody & Decentralized Reserve Vaults',
      'Permanent Global Endowment: Infinite Opportunities, Limitless Wealth',
    ],
  },
];

export const RoadmapSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const bgOpacity0 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const bgOpacity1 = useTransform(scrollYProgress, [0.15, 0.25, 0.4, 0.5], [0, 1, 1, 0]);
  const bgOpacity2 = useTransform(scrollYProgress, [0.4, 0.5, 0.65, 0.75], [0, 1, 1, 0]);
  const bgOpacity3 = useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.92], [0, 1, 1, 0]);
  const bgOpacity4 = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]);

  const bgOpacities = [bgOpacity0, bgOpacity1, bgOpacity2, bgOpacity3, bgOpacity4];

  const pathLength = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);
  const rocketY = useTransform(scrollYProgress, [0.05, 0.95], ['4%', '96%']);

  const scrollToStage = (index: number) => {
    setActiveStageIndex(index);
    const targetElement = document.getElementById(`roadmap-stage-${index}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="roadmap" ref={containerRef} className="relative w-full">
      {/* Sticky Cinematic Background System */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
        {ROADMAP_METAS.map((stage, idx) => (
          <motion.div
            key={stage.id}
            style={{ opacity: bgOpacities[idx] }}
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            <img
              src={stage.bgImage}
              alt={stage.title}
              className="w-full h-full object-cover animate-ken-burns scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050c26]/80 via-[#050c26]/55 to-[#050c26]/90" />
            <div className="absolute inset-0 bg-radial-ambient opacity-60" />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050c26] via-transparent to-[#050c26]/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 -mt-[100vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {/* Section Intro Header */}
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center pt-28 pb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05]"
          >
            Road Through{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] via-[#7692FF] to-[#1B2CC1]">
              the Future
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-sans"
          >
            Scroll to travel through the 5 transformational milestones of the world's complete finance ecosystem.
          </motion.p>

          {/* Quick Nav Waypoints Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[#091540]/85 border border-[#7692FF]/30 backdrop-blur-xl shadow-card-lux"
          >
            {ROADMAP_METAS.map((stage, i) => (
              <button
                key={stage.id}
                onClick={() => scrollToStage(i)}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-[#1B2CC1]/40 transition-all flex items-center gap-1.5"
              >
                <span>{stage.iconEmoji}</span>
                <span className="hidden sm:inline">0{stage.stepNumber}.</span>
                <span>{stage.title}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* The Glowing Road Trail & Milestone Stations */}
        <div className="relative">
          {/* Central Glowing Trail Track */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 hidden md:block pointer-events-none">
            <div className="w-full h-full bg-gradient-to-b from-[#7692FF]/15 via-[#ABD2FA]/25 to-[#1B2CC1]/20 rounded-full" />
            <motion.div
              style={{ scaleY: pathLength, transformOrigin: 'top' }}
              className="absolute inset-0 w-full bg-gradient-to-b from-[#ABD2FA] via-[#7692FF] to-[#1B2CC1] rounded-full shadow-[0_0_20px_rgba(171,210,250,0.8)]"
            />
            <motion.div
              style={{ top: rocketY }}
              className="absolute -left-4 -translate-y-1/2 w-9 h-9 rounded-full bg-[#050c26] border-2 border-[#ABD2FA] shadow-[0_0_25px_rgba(171,210,250,0.9)] flex items-center justify-center text-sm z-30"
            >
              🚀
            </motion.div>
          </div>

          {/* 5 Milestone Sections */}
          <div className="space-y-40 sm:space-y-52 pt-12 pb-24">
            {ROADMAP_METAS.map((stage, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  id={`roadmap-stage-${index}`}
                  key={stage.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 lg:gap-16`}
                >
                  {/* Central Node Indicator */}
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-20 flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-[#0e1d52] via-[#091540] to-[#050c26] border-2 border-[#ABD2FA]/60 shadow-[0_0_35px_rgba(118,146,255,0.45)] flex flex-col items-center justify-center text-2xl group hover:scale-110 transition-transform cursor-pointer"
                      onClick={() => scrollToStage(index)}
                    >
                      <span className="text-2xl sm:text-3xl">{stage.iconEmoji}</span>
                      <span className="text-[9px] font-mono text-[#ABD2FA] font-bold">
                        0{stage.stepNumber}
                      </span>
                    </motion.div>
                  </div>

                  {/* Stage Detail Glass Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className={`w-full md:w-[calc(50%-4rem)] p-7 sm:p-9 rounded-3xl bg-[#091540]/80 hover:bg-[#0e1d52]/90 border border-[#7692FF]/30 hover:border-[#ABD2FA]/50 backdrop-blur-2xl shadow-card-lux transition-all ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                      {stage.title}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#7692FF] mt-1 mb-4 font-semibold">
                      {stage.subtitle}
                    </p>

                    <p className="text-base sm:text-lg font-serif italic text-[#ABD2FA]/90 leading-relaxed mb-4">
                      "{stage.quote}"
                    </p>

                    <p className="text-xs font-mono text-slate-400 mb-6">
                      {stage.tagline}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#7692FF]/20">
                      {stage.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className={`flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-sans ${
                            isEven ? 'md:flex-row-reverse md:text-right' : 'md:flex-row md:text-left'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#ABD2FA] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <div className="hidden md:block md:w-[calc(50%-4rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Horizon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-16 border-t border-[#7692FF]/25"
        >
          <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            "ONE RANK. ONE TEAM. ONE VISION."
          </h4>
          <p className="text-xs font-mono text-[#7692FF] uppercase tracking-widest mt-1">
            Infinite Opportunities · Limitless Wealth
          </p>
        </motion.div>
      </div>
    </section>
  );
};
