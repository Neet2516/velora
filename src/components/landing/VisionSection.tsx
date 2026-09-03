import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Landmark,
  CreditCard,
  Bitcoin,
  ShieldCheck,
  Infinity as InfinityIcon,
  TrendingUp,
  Brain,
  Bot,
} from 'lucide-react';
import { GLOBAL_MARKET_STATS } from '../../data/marketData';

interface EcosystemNode {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  description: string;
  quote: string;
  angle: number; // degrees from top (0 to 360)
}

const NODES: EcosystemNode[] = [
  {
    id: 'broker-house',
    name: 'Broker House',
    category: 'HYBRID BROKER (MM + STP/ECN)',
    icon: Landmark,
    description: 'Deep institutional liquidity, bank-grade segregated client vaults, and ultra-fast MT5 execution.',
    quote: 'Technology + Trust + Flexibility + Security',
    angle: 315, // Top-left (~11 o'clock)
  },
  {
    id: 'forex-cards',
    name: 'Forex Cards',
    category: 'PHYSICAL LUXURY ASSET',
    icon: CreditCard,
    description: 'Three luxury tiers (Sapphire, Obsidian, Diamond Quartz) accepted in 190+ countries with seamless off-ramp.',
    quote: 'YOUR MONEY. YOUR WORLD. Exclusive. Global. Limitless.',
    angle: 0, // Top (~12 o'clock)
  },
  {
    id: 'crypto-arbitrage',
    name: 'Crypto Arbitrage',
    category: 'HIGH-FREQUENCY SPREAD ENGINE',
    icon: Bitcoin,
    description: 'Sub-millisecond price disparity capture across global Tier-1 crypto order books.',
    quote: 'The future of arbitrage is almost here.',
    angle: 45, // Top-right (~2 o'clock)
  },
  {
    id: 'fund-management',
    name: 'Fund Management',
    category: 'INSTITUTIONAL CAPITAL',
    icon: ShieldCheck,
    description: 'Professional portfolio management, multi-asset risk hedging, and transparent live reporting.',
    quote: 'Expertise you trust. Growth you deserve.',
    angle: 90, // Right (~3 o'clock)
  },
  {
    id: 'velora-infinity',
    name: 'Velora Global',
    category: 'LIMITLESS WEALTH PROTOCOL',
    icon: InfinityIcon,
    description: 'The world’s complete financial ecosystem unifying markets, capital, intelligence, and freedom.',
    quote: 'Infinite Opportunities. Limitless Wealth.',
    angle: 135, // Bottom-right (~5 o'clock)
  },
  {
    id: 'prop-firm',
    name: 'Prop Funded Firm',
    category: 'PROPRIETARY CAPITAL ALLOCATION',
    icon: TrendingUp,
    description: 'Funded trading accounts up to $200,000+ with 85–90% profit splits and zero personal risk.',
    quote: 'We fund. You trade. Together, we build the future.',
    angle: 180, // Bottom (~6 o'clock)
  },
  {
    id: 'ai-agent',
    name: 'AI Agent',
    category: 'NEURAL TRADING CO-PILOT',
    icon: Brain,
    description: 'Real-time multi-market signals, institutional sentiment scoring, and automated risk mitigation.',
    quote: 'Think. Analyze. Decide. Evolve.',
    angle: 225, // Bottom-left (~8 o'clock)
  },
  {
    id: 'automation-bot',
    name: 'Automation Bot',
    category: 'ALGORITHMIC EXECUTION',
    icon: Bot,
    description: 'License-based copy trading bots with automated risk guards and intelligent order routing.',
    quote: 'Intelligence that trades. Automation that delivers.',
    angle: 270, // Left (~9 o'clock)
  },
];

export const VisionSection: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('broker-house');
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);
  const wheelContainerRef = useRef<HTMLDivElement>(null);

  const activeNode = NODES.find((n) => n.id === activeNodeId) || NODES[0];
  const activeIndex = NODES.findIndex((n) => n.id === activeNode.id);

  // Cursor movement tracking: automatically snap to the nearest node in the cursor's direction
  const updateNearestNodeFromPointer = (clientX: number, clientY: number) => {
    if (!wheelContainerRef.current) return;
    const rect = wheelContainerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // If cursor is outside the dead-center radius (e.g. > 35px)
    if (dist > 35) {
      // 0 deg is TOP (12 o'clock), 90 deg is RIGHT, 180 deg is BOTTOM, 270 deg is LEFT
      const rad = Math.atan2(dx, -dy);
      const deg = (rad * (180 / Math.PI) + 360) % 360;

      // Find nearest node by minimum angular distance
      let closestNode = NODES[0];
      let minDiff = 360;

      for (const node of NODES) {
        let diff = Math.abs(node.angle - deg);
        if (diff > 180) diff = 360 - diff;
        if (diff < minDiff) {
          minDiff = diff;
          closestNode = node;
        }
      }

      if (closestNode && closestNode.id !== activeNodeId) {
        setActiveNodeId(closestNode.id);
      }
      setIsAutoCycling(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateNearestNodeFromPointer(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updateNearestNodeFromPointer(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  // Smooth auto-cycle every 4.8s unless user is actively interacting
  useEffect(() => {
    if (!isAutoCycling) {
      const resumeTimer = setTimeout(() => {
        setIsAutoCycling(true);
      }, 5500);
      return () => clearTimeout(resumeTimer);
    }

    const interval = setInterval(() => {
      setActiveNodeId((prev) => {
        const currentIndex = NODES.findIndex((n) => n.id === prev);
        const nextIndex = (currentIndex + 1) % NODES.length;
        return NODES[nextIndex].id;
      });
    }, 4800);

    return () => clearInterval(interval);
  }, [isAutoCycling]);

  const marketStats = [
    { label: 'FOREX', volume: GLOBAL_MARKET_STATS.forexVolume, tag: 'DAILY' },
    { label: 'GOLD', volume: GLOBAL_MARKET_STATS.goldVolume, tag: 'DAILY' },
    { label: 'CRYPTO', volume: GLOBAL_MARKET_STATS.cryptoVolume, tag: 'DAILY' },
  ];

  return (
    <section
      id="vision"
      className="relative py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto overflow-hidden"
    >
      {/* ─── SECTION HEADLINE ─── */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.08] tracking-tight"
        >
          One Ecosystem.
          <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] via-[#7692FF] to-[#1B2CC1]">
            Endless Possibilities.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          To build the complete financial ecosystem that empowers traders, investors, and dreamers — step by step.
        </motion.p>
      </div>

      {/* ─── INTERACTIVE ORBITAL WHEEL: LEFT DESCRIPTION + RIGHT WHEEL ─── */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-6">
        {/* Soft Ambient Radial Background Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] rounded-full bg-radial-ambient opacity-45 blur-[120px] pointer-events-none" />

        {/* LEFT: Seamless Editorial Typography directly on page background */}
        <div className="order-2 lg:order-1 lg:col-span-5 w-full flex flex-col justify-center z-10 py-4 sm:py-6 pl-2 sm:pl-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-left select-none"
            >
              {/* Category & Index tag */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#ABD2FA] uppercase">
                  0{activeIndex + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7692FF]" />
                <span className="text-xs font-mono tracking-[0.2em] text-[#7692FF] uppercase font-semibold">
                  {activeNode.category}
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 tracking-tight leading-[1.08]">
                {activeNode.name}
              </h3>

              {/* Elegant Quote */}
              <p className="text-base sm:text-lg font-serif italic text-[#ABD2FA]/90 mb-4 leading-snug">
                "{activeNode.quote}"
              </p>

              {/* Description directly blending into background */}
              <p className="text-base sm:text-lg text-slate-300/90 font-sans leading-relaxed max-w-lg">
                {activeNode.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: Orbital Wheel with Directional Cursor Tracking */}
        <div
          ref={wheelContainerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseEnter={() => setIsAutoCycling(false)}
          onMouseLeave={() => setIsAutoCycling(true)}
          className="order-1 lg:order-2 lg:col-span-7 flex items-center justify-center relative p-2 sm:p-4 select-none cursor-pointer"
        >
          {/* Orbit Wheel Container - Responsive from 320px mobile to 4K desktop */}
          <div className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[500px] sm:h-[500px] lg:w-[560px] lg:h-[560px] xl:w-[620px] xl:h-[620px] max-w-[92vw] max-h-[92vw] flex items-center justify-center">
            {/* Outer Orbit with Moving Circles (Slow Smooth Continuous Rotation) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-5 sm:-inset-12 rounded-full border border-dashed border-[#7692FF]/20 pointer-events-none"
            >
              {/* Moving Circle Satellite 1 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ABD2FA] shadow-[0_0_14px_#ABD2FA,0_0_25px_#7692FF]" />
              {/* Moving Circle Satellite 2 */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#7692FF] shadow-[0_0_10px_#7692FF]" />
            </motion.div>

            {/* Secondary Counter-Rotating Orbit with Moving Circles */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 sm:-inset-5 rounded-full border border-dotted border-[#ABD2FA]/25 pointer-events-none"
            >
              {/* Moving Circle Satellite 3 */}
              <div className="absolute top-1/4 left-0 -translate-x-1/2 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white shadow-[0_0_12px_#ffffff]" />
              {/* Moving Circle Satellite 4 */}
              <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-tr from-[#1B2CC1] to-[#7692FF] shadow-[0_0_10px_#7692FF]" />
            </motion.div>

            {/* Primary Orbital Ring - Scaled Up */}
            <div className="absolute w-[220px] h-[220px] xs:w-[250px] xs:h-[250px] sm:w-[395px] sm:h-[395px] lg:w-[440px] lg:h-[440px] xl:w-[490px] xl:h-[490px] rounded-full border border-[#7692FF]/30 shadow-[0_0_40px_rgba(118,146,255,0.25)] pointer-events-none">
              {/* Traveling Light Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="w-full h-full rounded-full relative"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 rounded-full bg-white shadow-[0_0_18px_#ffffff,0_0_35px_#7692FF]" />
              </motion.div>
            </div>

            {/* Center Hub: Velora Global Core with Floating & Breathing Motion */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-20 w-28 h-28 xs:w-32 xs:h-32 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full bg-gradient-to-b from-white via-[#f0f4ff] to-[#e1ecff] text-[#050c26] shadow-[0_0_60px_rgba(171,210,250,0.65),0_10px_35px_rgba(9,21,64,0.4)] flex flex-col items-center justify-center p-2.5 sm:p-4 border-2 border-white select-none group cursor-pointer hover:shadow-[0_0_95px_rgba(171,210,250,0.85)] transition-shadow"
              onClick={() => setActiveNodeId('velora-infinity')}
            >
              {/* Spinning inner micro-ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-1 rounded-full border border-dashed border-[#7692FF]/30 pointer-events-none"
              />

              {/* Transparent Infinity Symbol from /assets/infinity.svg */}
              <div className="w-10 h-6 xs:w-12 xs:h-7 sm:w-20 sm:h-12 lg:w-24 lg:h-14 flex items-center justify-center mb-0.5 sm:mb-1">
                <img
                  src="/assets/infinity.svg"
                  alt="Velora Infinity"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(27,44,193,0.45)]"
                />
              </div>

              {/* Velora Global Typography */}
              <span className="text-[9px] xs:text-[10px] sm:text-xs lg:text-sm font-display font-extrabold tracking-[0.25em] text-[#091540] uppercase">
                VELORA
              </span>
              <span className="text-[7px] xs:text-[8px] sm:text-[9.5px] lg:text-[11px] font-mono tracking-[0.35em] text-[#1B2CC1] uppercase font-semibold">
                GLOBAL
              </span>
            </motion.div>

            {/* 8 Satellite Outer Nodes with Responsive Sizing */}
            {NODES.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const rPercent = 40; // Percentage from center
              const left = 50 + rPercent * Math.sin(rad);
              const top = 50 - rPercent * Math.cos(rad);
              const isActive = activeNodeId === node.id;
              const Icon = node.icon;

              return (
                <motion.button
                  key={node.id}
                  onClick={() => {
                    setActiveNodeId(node.id);
                    setIsAutoCycling(false);
                  }}
                  onMouseEnter={() => {
                    setIsAutoCycling(false);
                    setActiveNodeId(node.id);
                  }}
                  animate={{
                    y: isActive ? [0, -3, 0] : [0, 2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 xs:w-10 xs:h-10 sm:w-15 sm:h-15 lg:w-18 lg:h-18 rounded-full flex items-center justify-center transition-all duration-500 z-30 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-tr from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] text-white shadow-[0_0_40px_rgba(118,146,255,0.85)] border-2 border-white scale-115'
                      : 'bg-[#091540]/90 text-slate-300 hover:text-white hover:bg-[#0e1d52] border border-white/20 hover:border-[#ABD2FA]/60 backdrop-blur-md hover:scale-105 shadow-card-lux'
                  }`}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                  }}
                  aria-label={node.name}
                >
                  <Icon className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />

                  {/* Pulsing Aura Rings around Active Node */}
                  {isActive && (
                    <>
                      <span className="absolute inset-0 rounded-full border-2 border-[#ABD2FA] animate-ping opacity-75 pointer-events-none" />
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border-2 border-[#ABD2FA] pointer-events-none"
                      />
                    </>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── FULL-BLEED INFINITE MARKET STATS MARQUEE (LEFT-TO-RIGHT) ─── */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 mt-16 sm:mt-24 mb-10 sm:mb-14 overflow-hidden py-4 select-none">
        {/* Left & Right Cinematic Edge Fade Masks */}
        <div className="absolute left-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-r from-[#050c26] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-l from-[#050c26] to-transparent z-10 pointer-events-none" />

        {/* Continuous Infinite Left-to-Right Moving Track */}
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
          }}
          className="flex items-center gap-6 w-max"
        >
          {/* Duplicated items to guarantee a continuous, glitch-free loop */}
          {[...marketStats, ...marketStats, ...marketStats, ...marketStats, ...marketStats, ...marketStats].map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 px-8 py-5 rounded-2xl bg-[#091540]/75 border border-[#7692FF]/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(27,44,193,0.2)] shrink-0 hover:border-[#ABD2FA]/60 hover:shadow-[0_0_40px_rgba(118,146,255,0.4)] transition-all cursor-default"
            >
              <div className="flex flex-col">
                <span className="text-[11px] font-mono tracking-widest text-[#ABD2FA] uppercase">
                  {stat.label} · {stat.tag}
                </span>
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-0.5 tracking-wide drop-shadow-[0_0_20px_rgba(118,146,255,0.4)]">
                  {stat.volume}
                </span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#7692FF]/60 ml-2" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
