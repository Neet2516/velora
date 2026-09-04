import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Target, MessageSquare, TrendingUp, Shield, BarChart3, Activity, Cpu, Sparkles, HelpCircle, Lock, Unlock } from 'lucide-react';
import { VELORA_PRODUCTS } from '../../data/productsData';
import { EcosystemProduct } from '../../types';

interface EcosystemSectionProps {
  onSelectProduct: (product: EcosystemProduct) => void;
}

const productImages: Record<string, string> = {
  'broker-house': '/images/mobile.png',
  'prop-firm': '/images/bull.png',
  'crypto-arbitrage': '/images/ecosystem_crypto_cube.png',
  'ai-agent': '/images/brain.png',
  'education-platform': '/images/ecosystem-education-academy.png',
  'forex-cards': '/images/ecosystem_forex_cards.jpg',
  'fund-management': '/images/ecosystem_fund_vault.png',
  'automation-bot': '/images/removed_ai_agent.png',
};

interface PillarDetail {
  introducingNumber: string;
  badgeStatus: string;
  mainHeadingLine1: string;
  mainHeadingLine2: string;
  tagline: string;
  description: string;
  features: { icon: React.ElementType; title: string; text: string }[];
  hudCards: { label: string; value: string; sub?: string }[];
  quote: string;
}

const PILLAR_DETAILS: Record<string, PillarDetail> = {
  'broker-house': {
    introducingNumber: '01',
    badgeStatus: 'LIVE & OPERATIONAL',
    mainHeadingLine1: 'VELORA',
    mainHeadingLine2: 'BROKER HOUSE',
    tagline: 'Your Gateway to Global Institutional Liquidity.',
    description:
      'Deep institutional liquidity and zero-slippage execution unifying hybrid MM matching with direct STP/ECN prime feeds.',
    features: [
      { icon: Zap, title: 'Hybrid Routing', text: 'Optimal split between MM liquidity and direct Tier-1 bank matching.' },
      { icon: Target, title: 'Raw Interbank Spreads', text: 'Spreads starting from 0.0 pips on major FX pairs, Gold and Crypto.' },
      { icon: Shield, title: 'Segregated Vaults', text: 'Bank-grade client asset custody with multi-jurisdiction compliance.' },
      { icon: TrendingUp, title: 'MetaTrader 5 Ultra', text: 'Sub-millisecond trade execution with advanced algorithmic tools.' },
    ],
    hudCards: [
      { label: 'SPREAD SENSITIVITY', value: '0.0 Pips', sub: 'EUR/USD RAW' },
      { label: 'EXECUTION SPEED', value: '1.2ms', sub: 'FIBER LATENCY' },
      { label: 'DAILY LIQUIDITY', value: '$6.6T', sub: 'GLOBAL POOL' },
    ],
    quote: 'Technology + Trust + Flexibility + Security + Execution.',
  },
  'prop-firm': {
    introducingNumber: '02',
    badgeStatus: 'ACTIVE EVALUATION',
    mainHeadingLine1: 'VELORA',
    mainHeadingLine2: 'PROP FIRM',
    tagline: 'We Fund. You Trade. Together, We Build The Future.',
    description:
      'Trade institutional capital up to $200,000+ with 90% profit splits and zero personal risk.',
    features: [
      { icon: Target, title: 'Funded Allocations', text: 'Simulated funding accounts scaling up to $200,000+.' },
      { icon: Zap, title: 'High Profit Retention', text: 'Keep up to 90% of your trading gains with bi-weekly payouts.' },
      { icon: Shield, title: 'Zero Personal Risk', text: 'Never risk your personal life savings. Trade institutional capital.' },
      { icon: BarChart3, title: 'Transparent Rules', text: 'Clear profit targets, realistic daily drawdown limits, and zero hidden traps.' },
    ],
    hudCards: [
      { label: 'MAX ALLOCATION', value: '$200K+', sub: 'SCALING READY' },
      { label: 'PROFIT SHARE', value: '90%', sub: 'TRADER SPLIT' },
      { label: 'ACTIVE TRADERS', value: '4,200+', sub: 'GLOBAL COMMUNITY' },
    ],
    quote: 'We fund. You trade. Together, we build the future.',
  },
  'crypto-arbitrage': {
    introducingNumber: '03',
    badgeStatus: 'REVEALING SOON',
    mainHeadingLine1: 'CRYPTO',
    mainHeadingLine2: 'ARBITRAGE',
    tagline: 'Capturing Disparities Across Global Order Books.',
    description:
      'Capturing sub-millisecond triangular price disparities across Tier-1 crypto order books with zero directional risk.',
    features: [
      { icon: Cpu, title: 'Cross-Exchange Mesh', text: 'Simultaneous low-latency connection across top centralized & decentralized venues.' },
      { icon: Zap, title: 'Sub-Millisecond Engine', text: 'High-frequency algorithmic trade execution before market equilibration.' },
      { icon: Shield, title: 'Slippage Shield', text: 'Pre-flight transaction simulations preventing unprofitable slippage.' },
      { icon: Activity, title: '24/7 Non-Stop Harvest', text: 'Continuous automated order execution requiring zero manual monitoring.' },
    ],
    hudCards: [
      { label: 'SPREAD CAPTURE', value: '+0.42%', sub: 'AVG PER TRIANGLE' },
      { label: 'EXCHANGES LINKED', value: '14 Venues', sub: 'TIER-1 CEX/DEX' },
      { label: 'CYCLE LATENCY', value: '< 1.5ms', sub: 'HIGH-FREQUENCY' },
    ],
    quote: 'The future of arbitrage is almost here.',
  },
  'ai-agent': {
    introducingNumber: '04',
    badgeStatus: 'IN DEVELOPMENT',
    mainHeadingLine1: 'VELORA',
    mainHeadingLine2: 'AI AGENT',
    tagline: 'Your Intelligent Partner in Trading & Markets.',
    description:
      'Real-time market intelligence, institutional sentiment scoring, and automated neural trading execution.',
    features: [
      { icon: Zap, title: 'Smarter Analysis', text: 'AI-powered insights for deeper market understanding.' },
      { icon: Target, title: 'Better Decisions', text: 'Real-time data. Smarter calls. Stronger outcomes.' },
      { icon: MessageSquare, title: 'Strategy Discussions', text: 'Collaborate with AI to refine ideas and build winning strategies.' },
      { icon: TrendingUp, title: 'Future Planning', text: 'Predict trends. Anticipate moves. Stay ahead of the game.' },
      { icon: Shield, title: 'Risk Management', text: 'Intelligent alerts. Protect capital. Trade with confidence.' },
    ],
    hudCards: [
      { label: 'NEWS SENTIMENT', value: '87%', sub: 'EUR/USD BULLISH' },
      { label: 'VOLATILITY INDEX', value: '34/100', sub: 'MODERATE FLUX' },
      { label: 'RISK SCORE', value: '23/100', sub: 'PROTECTION ACTIVE' },
    ],
    quote: 'Real-time insights. AI-powered precision. Endless possibilities.',
  },
  'education-platform': {
    introducingNumber: '05',
    badgeStatus: 'ACTIVE PORTAL',
    mainHeadingLine1: 'EDUCATION',
    mainHeadingLine2: 'PLATFORM',
    tagline: 'Learn. Trade. Grow. Together with Velora Global.',
    description:
      'Comprehensive masterclasses, live mentor trading desks, and direct pathways to institutional prop funding.',
    features: [
      { icon: Target, title: 'Complete Curriculum', text: 'Step-by-step masterclasses spanning Forex, Gold, Crypto and Macro.' },
      { icon: MessageSquare, title: 'Live Trading Rooms', text: 'Daily live market breakdown sessions with veteran institutional traders.' },
      { icon: Cpu, title: 'Trading Simulators', text: 'Risk-free paper trading environments connected to live exchange tick data.' },
      { icon: Shield, title: 'Fast-Track Funding', text: 'Graduates receive prioritized evaluation access to Velora Prop Firm capital.' },
    ],
    hudCards: [
      { label: 'COURSE HOURS', value: '140+ Hrs', sub: 'MASTERCLASS CONTENT' },
      { label: 'LIVE SESSIONS', value: '5 Daily', sub: 'GLOBAL TIMEZONES' },
      { label: 'ACTIVE STUDENTS', value: '28,000+', sub: '120+ COUNTRIES' },
    ],
    quote: 'Learn. Trade. Grow. Together with Velora Global.',
  },
  'forex-cards': {
    introducingNumber: '06',
    badgeStatus: 'COMING SOON',
    mainHeadingLine1: 'VELORA',
    mainHeadingLine2: 'FOREX CARDS',
    tagline: 'Your Money. Your World. Exclusive. Global. Limitless.',
    description:
      'Three luxury physical cards accepted in 190+ countries with instant off-ramp and zero FX surcharges.',
    features: [
      { icon: Shield, title: 'Three Luxury Tiers', text: 'Handcrafted titanium and obsidian cards with biometric security.' },
      { icon: Zap, title: 'Instant Off-Ramp', text: 'Direct balance transfer from broker and prop firm accounts in seconds.' },
      { icon: Target, title: 'Worldwide Acceptance', text: 'Accepted at over 40 million merchants and ATMs across 190+ nations.' },
      { icon: Activity, title: 'Zero FX Surcharges', text: 'Transparent wholesale institutional currency exchange rates.' },
    ],
    hudCards: [
      { label: 'ATM LIMIT', value: '$15,000/Day', sub: 'DIAMOND TIER' },
      { label: 'GLOBAL ACCESS', value: '190+ Nations', sub: 'WORLDWIDE REACH' },
      { label: 'OFF-RAMP SPEED', value: 'Instant', sub: 'ACCOUNT TO CARD' },
    ],
    quote: 'YOUR MONEY. YOUR WORLD. Exclusive. Global. Limitless.',
  },
  'fund-management': {
    introducingNumber: '07',
    badgeStatus: 'INSTITUTIONAL',
    mainHeadingLine1: 'FUND',
    mainHeadingLine2: 'MANAGEMENT',
    tagline: 'Expertise You Trust. Growth You Deserve.',
    description:
      'Institutional asset allocation, dynamic risk hedging, and transparent real-time performance auditing.',
    features: [
      { icon: Shield, title: 'Capital Preservation', text: 'Multi-layered hedging models designed to withstand extreme market drawdowns.' },
      { icon: TrendingUp, title: 'Targeted Alpha', text: 'Consistent, risk-adjusted returns generated through algorithmic asset allocation.' },
      { icon: Target, title: 'Segregated Accounts', text: 'Direct investor ownership in regulated European and UAE custodian banks.' },
      { icon: BarChart3, title: 'Real-Time Audits', text: 'Live on-chain and broker ledger transparency with zero lock-in opacity.' },
    ],
    hudCards: [
      { label: 'TARGET ALPHA', value: '+28.4%', sub: 'ANNUAL NET GOAL' },
      { label: 'MAX DRAWDOWN', value: '< 4.2%', sub: 'HISTORICAL CAP' },
      { label: 'CUSTODY RATING', value: 'AAA', sub: 'TIER-1 BANK VAULTS' },
    ],
    quote: 'Expertise you trust. Growth you deserve.',
  },
  'automation-bot': {
    introducingNumber: '08',
    badgeStatus: 'ALGORITHMIC',
    mainHeadingLine1: 'AUTOMATION',
    mainHeadingLine2: 'BOT SUITE',
    tagline: 'Intelligence That Trades. Automation That Delivers.',
    description:
      'Algorithmic execution strategies, automated risk guards, and 1-click verified copy trading.',
    features: [
      { icon: Cpu, title: 'Automated Algorithms', text: 'Quantitative mathematical models executing non-stop with precision logic.' },
      { icon: Zap, title: 'One-Click Copy Trading', text: 'Automatically replicate trades of top-tier verified master traders.' },
      { icon: Shield, title: 'Custom Risk Guards', text: 'Set hard drawdown caps, max daily loss rules, and automated kill-switches.' },
      { icon: Activity, title: 'Cloud-Hosted Low Latency', text: 'Runs 24/7 on dedicated institutional VPS servers with 99.99% uptime.' },
    ],
    hudCards: [
      { label: 'WIN RATE', value: '74.8%', sub: 'BACKTESTED POOL' },
      { label: 'AVG DAILY TRADES', value: '32 Cycles', sub: 'MICRO-ARBITRAGE' },
      { label: 'CLOUD UPTIME', value: '99.99%', sub: 'SUB-MS HOSTING' },
    ],
    quote: 'Intelligence that trades. Automation that delivers.',
  },
};

/* ─── DEDICATED INTERACTIVE VISUAL FRAME FOR EACH PILLAR ─── */
function PillarVisualShowcase({
  productId,
  scrollYProgress,
}: {
  productId: string;
  scrollYProgress: any;
}) {
  // 1. Broker House 3D Scroll Rotation
  const phoneRotateY = useTransform(scrollYProgress, [0, 0.45, 0.9], [-24, 4, 22]);
  const phoneRotateX = useTransform(scrollYProgress, [0, 0.45, 0.9], [14, 0, -8]);
  const phoneRotateZ = useTransform(scrollYProgress, [0, 0.45, 0.9], [-8, 0, 6]);

  // 2. Prop Firm Bull Forward Charge
  const bullScale = useTransform(scrollYProgress, [0, 0.5, 0.9], [0.94, 1.06, 1]);
  const bullRotateY = useTransform(scrollYProgress, [0, 0.5, 0.9], [-12, 0, 10]);

  // 3. Crypto Arbitrage Unveil & Click State
  const [isUnveiled, setIsUnveiled] = useState(false);
  const cubeRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // 4. Forex Cards 3D Fan-out Active Index
  const [activeCardIndex, setActiveCardIndex] = useState(1); // 0: Sapphire, 1: Obsidian, 2: Diamond

  const imgSrc = productImages[productId] || '/images/mobile.png';

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* ─── BASE AMBIENT GLOW (Diffused leftward for seamless whole-card blend) ─── */}
      <div className="absolute w-[500px] sm:w-[680px] h-[500px] sm:h-[680px] rounded-full bg-gradient-to-l from-[#1B2CC1]/25 via-[#7692FF]/18 to-transparent blur-[140px] pointer-events-none -left-20 sm:-left-36" />

      {/* ─── HOLOGRAPHIC EMITTER PEDESTAL AT BASE ─── */}
      <div className="absolute bottom-6 sm:bottom-10 w-80 h-24 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          className="absolute w-72 h-16 rounded-[100%] border border-[#7692FF]/40 shadow-[0_0_25px_rgba(118,146,255,0.35)]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute w-56 h-12 rounded-[100%] border border-[#ABD2FA]/50"
        />
        <div className="absolute w-44 h-8 rounded-[100%] bg-gradient-to-t from-[#ABD2FA]/40 via-[#7692FF]/20 to-transparent blur-sm" />
        <div className="absolute -top-36 w-52 h-44 bg-gradient-to-t from-[#7692FF]/25 via-[#ABD2FA]/10 to-transparent blur-xl" />
      </div>

      {/* ─── CASE 1: BROKER HOUSE (SCROLL-DRIVEN 3D PHONE ROTATION + FLOATING CHIPS) ─── */}
      {productId === 'broker-house' && (
        <div className="relative w-[340px] sm:w-[420px] lg:w-[450px] xl:w-[480px] aspect-square flex items-center justify-center [perspective:1200px]">
          {/* 3D Rotating Phone Container */}
          <motion.div
            style={{
              rotateY: phoneRotateY,
              rotateX: phoneRotateX,
              rotateZ: phoneRotateZ,
              transformStyle: 'preserve-3d',
              WebkitMaskImage: 'radial-gradient(circle at 46% 48%, black 45%, transparent 76%)',
              maskImage: 'radial-gradient(circle at 46% 48%, black 45%, transparent 76%)',
            }}
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src={imgSrc}
              alt="Broker House 3D Phone"
              decoding="async"
              className="w-full h-full object-cover object-[58%_center] scale-[1.14]"
              style={{
                mixBlendMode: 'screen',
                filter: 'contrast(1.05) brightness(1.08)',
              }}
            />
          </motion.div>

          {/* Floating Contextual Chips Around Phone */}
          <motion.div
            animate={{ y: [-4, 6, -4], x: [-2, 3, -2] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-2 left-2 sm:left-4 z-30 px-3.5 py-1.5 rounded-full bg-[#091540]/70 border border-white/[0.18] backdrop-blur-xl shadow-[0_4px_20px_rgba(5,12,38,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ABD2FA] animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-white tracking-wider">
              Hybrid Model
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [6, -5, 6], x: [2, -3, 2] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute top-2 right-0 sm:right-2 z-30 px-3.5 py-1.5 rounded-full bg-[#091540]/70 border border-white/[0.18] backdrop-blur-xl shadow-[0_4px_20px_rgba(5,12,38,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7692FF] animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-white tracking-wider">
              Advanced Technology
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [-5, 5, -5], x: [-3, 2, -3] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute bottom-5 left-4 sm:left-6 z-30 px-3.5 py-1.5 rounded-full bg-[#091540]/70 border border-white/[0.18] backdrop-blur-xl shadow-[0_4px_20px_rgba(5,12,38,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-white tracking-wider">
              Full Transparency
            </span>
          </motion.div>
        </div>
      )}

      {/* ─── CASE 2: CRYPTO ARBITRAGE (INTERACTIVE MYSTERY CRATE / CUBE WITH CLICK UNVEIL) ─── */}
      {productId === 'crypto-arbitrage' && (
        <div
          onClick={() => setIsUnveiled(!isUnveiled)}
          className="relative w-[340px] sm:w-[420px] lg:w-[450px] xl:w-[480px] aspect-square flex items-center justify-center cursor-pointer group"
        >
          {/* Main 3D Cube Container */}
          <motion.div
            animate={{
              y: [-7, 7, -7],
              scale: isUnveiled ? 1.14 : 1.06,
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full flex items-center justify-center transition-transform duration-500 select-none"
          >
            <img
              src={imgSrc}
              alt="Crypto Arbitrage Cube"
              className="w-full h-full object-contain scale-[1.18] drop-shadow-[0_0_45px_rgba(0,240,255,0.45)] drop-shadow-[0_20px_45px_rgba(27,44,193,0.6)]"
              loading="eager"
            />
          </motion.div>

          {/* Central Mystery Box Overlay with Glowing "?" (WhatsApp Screenshot) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
            <motion.div
              animate={{
                scale: isUnveiled ? [1, 1.25, 0] : [1, 1.1, 1],
                opacity: isUnveiled ? [1, 1, 0] : 1,
              }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1B2CC1]/80 via-[#7692FF]/60 to-[#ABD2FA]/40 border-2 border-[#ABD2FA] backdrop-blur-xl shadow-[0_0_35px_rgba(118,146,255,0.9)] flex items-center justify-center text-white"
            >
              <span className="text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#ABD2FA] to-white filter drop-shadow-[0_0_8px_#ffffff]">
                ?
              </span>
            </motion.div>

            {/* Status Tooltip Button */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 px-4 py-1.5 rounded-full bg-[#050c26]/90 border border-[#ABD2FA]/50 backdrop-blur-md shadow-card-lux"
            >
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#ABD2FA] uppercase font-bold flex items-center gap-1.5">
                {isUnveiled ? (
                  <>
                    <Unlock className="w-3 h-3 text-emerald-400" />
                    <span>ENGINE UNLOCKED</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3 h-3 text-[#ABD2FA]" />
                    <span>CLICK TO UNVEIL</span>
                  </>
                )}
              </span>
            </motion.div>
          </div>

          {/* Bursting Crypto Tokens on Unveil */}
          <AnimatePresence>
            {isUnveiled && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: -60, y: -60 }}
                  animate={{ opacity: 1, scale: 1, x: -90, y: -90 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute z-40 w-12 h-12 rounded-full bg-[#091540] border-2 border-[#ABD2FA] shadow-[0_0_25px_#ABD2FA] flex items-center justify-center text-[#ABD2FA] font-display font-bold text-lg"
                >
                  ₿
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: 60, y: -50 }}
                  animate={{ opacity: 1, scale: 1, x: 95, y: -75 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                  className="absolute z-40 w-11 h-11 rounded-full bg-[#091540] border-2 border-[#7692FF] shadow-[0_0_25px_#7692FF] flex items-center justify-center text-white font-display font-bold text-base"
                >
                  Ξ
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: 0, y: 70 }}
                  animate={{ opacity: 1, scale: 1, x: 10, y: 105 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
                  className="absolute z-40 w-10 h-10 rounded-full bg-[#091540] border-2 border-[#1B2CC1] shadow-[0_0_25px_#1B2CC1] flex items-center justify-center text-[#ABD2FA] font-display font-bold text-sm"
                >
                  ◎
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* ─── CASE 3: FOREX CARDS (3D MULTI-CARD FAN-OUT & CAROUSEL PAGINATION) ─── */}
      {productId === 'forex-cards' && (
        <div className="relative w-[340px] sm:w-[440px] aspect-square flex flex-col items-center justify-center">
          {/* Main 3D Zero-Gravity Cards Fan-Out */}
          <div className="relative w-full h-[300px] flex items-center justify-center [perspective:1000px]">
            {/* Card 0: Sapphire Blue Edition */}
            <motion.div
              onClick={() => setActiveCardIndex(0)}
              animate={{
                x: activeCardIndex === 0 ? 0 : -85,
                y: activeCardIndex === 0 ? -12 : 10,
                rotateZ: activeCardIndex === 0 ? 0 : -14,
                scale: activeCardIndex === 0 ? 1.08 : 0.88,
                zIndex: activeCardIndex === 0 ? 30 : 10,
              }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="absolute w-44 sm:w-52 h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-[#1B2CC1] via-[#091540] to-[#050c26] border-2 border-[#7692FF] p-4 shadow-[0_15px_40px_rgba(27,44,193,0.5)] cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono tracking-widest text-[#ABD2FA] uppercase font-bold">
                  SAPPHIRE TIER
                </span>
                <span className="w-5 h-4 rounded bg-[#ABD2FA]/30 border border-[#ABD2FA]/60" />
              </div>
              <div className="space-y-1">
                <span className="text-lg font-display font-extrabold tracking-widest text-white block">
                  VELORA
                </span>
                <span className="text-[8px] font-mono tracking-[0.3em] text-[#ABD2FA] uppercase block">
                  GLOBAL ELITE
                </span>
              </div>
            </motion.div>

            {/* Card 1: Obsidian Black Edition (Center) */}
            <motion.div
              onClick={() => setActiveCardIndex(1)}
              animate={{
                x: activeCardIndex === 1 ? 0 : activeCardIndex === 0 ? 85 : -85,
                y: activeCardIndex === 1 ? -12 : 10,
                rotateZ: activeCardIndex === 1 ? 0 : activeCardIndex === 0 ? 14 : -14,
                scale: activeCardIndex === 1 ? 1.08 : 0.88,
                zIndex: activeCardIndex === 1 ? 30 : 20,
              }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="absolute w-44 sm:w-52 h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-[#121216] via-[#090b14] to-black border-2 border-[#ABD2FA] p-4 shadow-[0_15px_40px_rgba(118,146,255,0.4)] cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono tracking-widest text-white uppercase font-bold">
                  OBSIDIAN TIER
                </span>
                <span className="w-5 h-4 rounded bg-amber-400/40 border border-amber-400" />
              </div>
              <div className="space-y-1">
                <span className="text-lg font-display font-extrabold tracking-widest text-white block">
                  VELORA
                </span>
                <span className="text-[8px] font-mono tracking-[0.3em] text-[#7692FF] uppercase block">
                  BLACK EDITION
                </span>
              </div>
            </motion.div>

            {/* Card 2: Diamond Quartz Edition */}
            <motion.div
              onClick={() => setActiveCardIndex(2)}
              animate={{
                x: activeCardIndex === 2 ? 0 : 85,
                y: activeCardIndex === 2 ? -12 : 10,
                rotateZ: activeCardIndex === 2 ? 0 : 14,
                scale: activeCardIndex === 2 ? 1.08 : 0.88,
                zIndex: activeCardIndex === 2 ? 30 : 10,
              }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="absolute w-44 sm:w-52 h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-[#f0f4ff] via-[#d0e0ff] to-[#99bcf7] text-[#091540] border-2 border-white p-4 shadow-[0_15px_40px_rgba(171,210,250,0.5)] cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono tracking-widest text-[#1B2CC1] uppercase font-bold">
                  DIAMOND QUARTZ
                </span>
                <span className="w-5 h-4 rounded bg-[#1B2CC1]/20 border border-[#1B2CC1]" />
              </div>
              <div className="space-y-1">
                <span className="text-lg font-display font-extrabold tracking-widest text-[#091540] block">
                  VELORA
                </span>
                <span className="text-[8px] font-mono tracking-[0.3em] text-[#1B2CC1] uppercase block">
                  PRIVATE VAULT
                </span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Pagination Dots (Matching WhatsApp Screenshot) */}
          <div className="flex items-center gap-3 mt-4 z-30">
            <button
              onClick={() => setActiveCardIndex(0)}
              className={`transition-all rounded-full ${
                activeCardIndex === 0
                  ? 'w-6 h-2.5 bg-[#7692FF] shadow-[0_0_10px_#7692FF]'
                  : 'w-2.5 h-2.5 bg-[#7692FF]/40 hover:bg-[#7692FF]'
              }`}
              aria-label="Sapphire Card"
            />
            <button
              onClick={() => setActiveCardIndex(1)}
              className={`transition-all rounded-full ${
                activeCardIndex === 1
                  ? 'w-6 h-2.5 bg-[#1B2CC1] shadow-[0_0_10px_#1B2CC1]'
                  : 'w-2.5 h-2.5 bg-slate-500 hover:bg-slate-300'
              }`}
              aria-label="Obsidian Card"
            />
            <button
              onClick={() => setActiveCardIndex(2)}
              className={`transition-all rounded-full ${
                activeCardIndex === 2
                  ? 'w-6 h-2.5 bg-white shadow-[0_0_10px_#ffffff]'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white'
              }`}
              aria-label="Diamond Quartz Card"
            />
          </div>
        </div>
      )}

      {/* ─── CASE 4: PROP FIRM (GOLDEN BULL CHARGE) ─── */}
      {productId === 'prop-firm' && (
        <div className="relative w-[340px] sm:w-[440px] aspect-square flex items-center justify-center [perspective:1200px]">
          {/* Ambient Warm Golden Aura behind the Bull */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-[#d4af37]/22 via-[#b8860b]/14 to-transparent blur-[90px] pointer-events-none animate-pulse-glow" />

          {/* 3D Bull Container with seamless blend into black void */}
          <motion.div
            style={{
              scale: bullScale,
              rotateY: bullRotateY,
              WebkitMaskImage: 'radial-gradient(circle at center, black 65%, transparent 88%)',
              maskImage: 'radial-gradient(circle at center, black 65%, transparent 88%)',
            }}
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-full h-full flex items-center justify-center select-none"
          >
            <img
              src={imgSrc}
              alt="Prop Firm Golden Bull"
              className="w-full h-full object-contain scale-110 mix-blend-screen select-none pointer-events-none drop-shadow-[0_0_35px_rgba(212,175,55,0.45)]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      )}

      {/* ─── CASE 5: AI AGENT (NEURAL SYNAPTIC BRAIN WITH FLOATING RADAR CHIPS) ─── */}
      {productId === 'ai-agent' && (
        <div className="relative w-[340px] sm:w-[420px] lg:w-[450px] xl:w-[480px] aspect-square flex items-center justify-center [perspective:1200px]">
          {/* Ambient Cosmic Radial Glow behind the Neural Brain */}
          <div className="absolute w-[390px] sm:w-[440px] h-[390px] sm:h-[440px] rounded-full bg-gradient-to-tr from-[#1B2CC1]/35 via-[#7692FF]/30 to-[#ABD2FA]/25 blur-[100px] pointer-events-none animate-pulse-glow" />

          {/* 3D Brain Container with seamless blend */}
          <motion.div
            style={{
              WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 84%)',
              maskImage: 'radial-gradient(circle at center, black 60%, transparent 84%)',
            }}
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-full h-full flex items-center justify-center select-none"
          >
            <img
              src={imgSrc}
              alt="Velora AI Neural Brain"
              className="w-full h-full object-contain scale-[1.18] mix-blend-screen select-none pointer-events-none drop-shadow-[0_0_45px_rgba(118,146,255,0.6)]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Floating Contextual Chips (Matching Broker House & Prop style) */}
          <motion.div
            animate={{ y: [-4, 6, -4], x: [-2, 3, -2] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-2 left-2 sm:left-4 z-30 px-3.5 py-1.5 rounded-full bg-[#091540]/70 border border-[#ABD2FA]/40 backdrop-blur-xl shadow-[0_4px_20px_rgba(5,12,38,0.5)] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ABD2FA] animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-white tracking-wider">
              87% Bullish Confidence
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [6, -5, 6], x: [2, -3, 2] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute top-1/3 -right-2 sm:right-0 z-30 px-3.5 py-1.5 rounded-full bg-[#091540]/70 border border-[#7692FF]/40 backdrop-blur-xl shadow-[0_4px_20px_rgba(5,12,38,0.5)] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7692FF] animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-white tracking-wider">
              Neural Sentiment Radar
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [-5, 5, -5], x: [-3, 2, -3] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute bottom-5 left-4 sm:left-6 z-30 px-3.5 py-1.5 rounded-full bg-[#091540]/70 border border-emerald-400/40 backdrop-blur-xl shadow-[0_4px_20px_rgba(5,12,38,0.5)] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-white tracking-wider">
              Sub-Millisecond Speed
            </span>
          </motion.div>
        </div>
      )}

      {/* ─── CASE 6: EDUCATION PLATFORM (TRANSPARENT 3D HOLOGRAPHIC SPHERE & ORBITING CODEX) ─── */}
      {productId === 'education-platform' && (
        <div className="relative w-[340px] sm:w-[440px] aspect-square flex items-center justify-center select-none [perspective:1000px]">
          <motion.div
            animate={{ y: [-8, 8, -8], rotateY: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-full h-full flex items-center justify-center select-none"
          >
            <img
              src={imgSrc}
              alt="Education Academy Holographic Sphere"
              className="w-full h-full object-contain scale-[1.28] drop-shadow-[0_0_45px_rgba(0,240,255,0.4)] drop-shadow-[0_20px_50px_rgba(27,44,193,0.7)]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Floating Contextual Chips Around Academy Sphere */}
          <motion.div
            animate={{ y: [-4, 6, -4], x: [-2, 3, -2] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-2 left-2 z-30 px-3.5 py-1.5 rounded-full bg-[#091540]/70 border border-[#ABD2FA]/30 backdrop-blur-xl shadow-[0_4px_20px_rgba(5,12,38,0.5)] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ABD2FA] animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-white tracking-wider">
              140+ Course Hrs
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [6, -5, 6], x: [2, -3, 2] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute top-2 right-2 z-30 px-3.5 py-1.5 rounded-full bg-[#091540]/70 border border-[#7692FF]/30 backdrop-blur-xl shadow-[0_4px_20px_rgba(5,12,38,0.5)] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7692FF] animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-white tracking-wider">
              Live Trading Rooms
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [-5, 5, -5], x: [-3, 2, -3] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute bottom-6 left-6 z-30 px-3.5 py-1.5 rounded-full bg-[#091540]/70 border border-white/[0.18] backdrop-blur-xl shadow-[0_4px_20px_rgba(5,12,38,0.5)] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-white tracking-wider">
              Fast-Track Funding
            </span>
          </motion.div>
        </div>
      )}

      {/* ─── CASE 7: FUND MANAGEMENT (ORGANIC RADIAL BLEND) ─── */}
      {productId !== 'broker-house' &&
        productId !== 'crypto-arbitrage' &&
        productId !== 'forex-cards' &&
        productId !== 'prop-firm' &&
        productId !== 'ai-agent' &&
        productId !== 'automation-bot' &&
        productId !== 'education-platform' && (
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-[360px] sm:w-[450px] lg:w-[490px] xl:w-[530px] aspect-square flex items-center justify-center select-none"
            style={{
              WebkitMaskImage: 'radial-gradient(circle at center, black 62%, rgba(0,0,0,0.7) 80%, transparent 94%)',
              maskImage: 'radial-gradient(circle at center, black 62%, rgba(0,0,0,0.7) 80%, transparent 94%)',
            }}
          >
            <img
              src={imgSrc}
              alt="Ecosystem 3D Visual"
              className="w-full h-full object-contain scale-120 drop-shadow-[0_15px_40px_rgba(5,12,38,0.7)]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        )}

      {/* ─── CASE 8: AUTOMATION BOT (SEAMLESS TRANSPARENT 3D ROBOT BUST) ─── */}
      {productId === 'automation-bot' && (
        <div className="relative w-[360px] sm:w-[440px] lg:w-[480px] xl:w-[520px] aspect-square flex items-center justify-center select-none [perspective:1000px]">
          <motion.div
            animate={{ y: [-8, 8, -8], rotateY: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-full h-full flex items-center justify-center select-none"
          >
            <img
              src={imgSrc}
              alt="Automation Bot Suite Robot"
              className="w-full h-full object-contain scale-[1.58] drop-shadow-[0_0_45px_rgba(0,240,255,0.4)] drop-shadow-[0_20px_50px_rgba(5,12,38,0.9)]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Floating Contextual Chips Around Robot */}
          <motion.div
            animate={{ y: [-4, 6, -4], x: [-2, 3, -2] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-3 left-1 sm:left-2 z-30 px-3.5 py-1.5 rounded-full bg-[#091540]/70 border border-[#ABD2FA]/30 backdrop-blur-xl shadow-[0_4px_20px_rgba(5,12,38,0.5)] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ABD2FA] animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-white tracking-wider">
              Sub-ms VPS
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [6, -5, 6], x: [2, -3, 2] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute top-1 -right-1 sm:right-1 z-30 px-3.5 py-1.5 rounded-full bg-[#091540]/70 border border-[#7692FF]/30 backdrop-blur-xl shadow-[0_4px_20px_rgba(5,12,38,0.5)] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7692FF] animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-white tracking-wider">
              74.8% Win Rate
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [-5, 5, -5], x: [-3, 2, -3] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute bottom-4 left-3 sm:left-4 z-30 px-3.5 py-1.5 rounded-full bg-[#091540]/70 border border-white/[0.18] backdrop-blur-xl shadow-[0_4px_20px_rgba(5,12,38,0.5)] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-white tracking-wider">
              1-Click Copy Trading
            </span>
          </motion.div>
        </div>
      )}

      {/* ─── VERTICAL COUNTER INDICATOR (0X / 08 PRODUCTS) ─── */}
      <div className="absolute right-4 bottom-8 z-20 flex items-center gap-2 text-right pointer-events-none select-none">
        <div>
          <span className="text-xs font-mono font-bold text-white block leading-none">
            {PILLAR_DETAILS[productId]?.introducingNumber || '01'} / 08
          </span>
          <span className="text-[8px] font-mono tracking-[0.25em] text-[#7692FF] uppercase block mt-1">
            PRODUCTS
          </span>
        </div>
        <div className="w-[2px] h-8 bg-gradient-to-b from-[#ABD2FA] to-[#1B2CC1] rounded-full" />
      </div>
    </div>
  );
}

/* ─── Single Sticky Card with Seamless Environment Blending ─── */
function StickyProductCard({
  product,
  index,
  total,
  onSelect,
}: {
  product: EcosystemProduct;
  index: number;
  total: number;
  onSelect: (p: EcosystemProduct) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth >= 1024;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const isEven = index % 2 === 0;
  const isPropFirm = product.id === 'prop-firm';

  // Opacity: smoothly becomes clear as it slides in
  const opacity = useTransform(scrollYProgress, [0, 0.22, 0.75, 0.92], [0.15, 1, 1, 0]);
  // Scale: expands to full scale by half-page
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.75, 0.92], [0.92, 1, 1, 0.96]);
  const y = useTransform(scrollYProgress, [0, 0.35], [30, 0]);

  // Alternating 50% entry: Even cards glide from LEFT (-50%), Odd cards from RIGHT (+50%), completing at half-page (0.35)
  const x = useTransform(
    scrollYProgress,
    [0, 0.35, 0.75, 0.92],
    [isEven ? '-50%' : '50%', '0%', '0%', isEven ? '-15%' : '15%']
  );

  // Organic rotational tilt leveling out precisely at half-page
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.35, 0.75, 0.92],
    [isEven ? -3.5 : 3.5, 0, 0, isEven ? -1 : 1]
  );

  const detail = PILLAR_DETAILS[product.id] || PILLAR_DETAILS['broker-house'];

  return (
    <div
      ref={cardRef}
      className="min-h-0 lg:min-h-[115vh] flex items-center justify-center py-4 sm:py-6 lg:py-10"
    >
      <motion.div
        style={isDesktop ? { opacity, scale, y, x, rotate } : undefined}
        className="relative lg:sticky lg:top-[8vh] w-full max-w-[1680px] mx-auto min-h-[auto] lg:min-h-[84vh] rounded-[1.5rem] sm:rounded-[2.5rem] bg-gradient-to-br from-[#091540]/75 via-[#050c26]/85 to-[#091540]/75 border border-white/[0.14] hover:border-[#ABD2FA]/40 shadow-[0_24px_80px_rgba(3,8,26,0.85),inset_0_1px_2px_rgba(255,255,255,0.22),inset_0_0_40px_rgba(118,146,255,0.06)] backdrop-blur-2xl backdrop-saturate-150 flex flex-col lg:flex-row items-stretch overflow-hidden group transition-all duration-500"
      >
        {/* Specular Top-Edge Glass Reflection */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-20" />

        {/* Ambient Lights & Cyber Grid */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[80%] bg-gradient-to-r from-[#1B2CC1]/15 via-[#7692FF]/10 to-[#ABD2FA]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-80 sm:w-96 h-80 sm:h-96 bg-[#7692FF]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 sm:w-96 h-80 sm:h-96 bg-[#1B2CC1]/20 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />

        {/* ─── LEFT COLUMN: REFINED HIGH-END EDITORIAL (54% WIDTH) ─── */}
        <div className="w-full lg:w-[54%] p-6 sm:p-10 lg:p-14 xl:p-16 lg:pr-6 xl:pr-8 flex flex-col justify-between relative z-10">
          <div>
            {/* Header: Number & Introducing Tagline */}
            <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
              <span className="text-sm sm:text-base font-mono tracking-[0.25em] text-slate-300 font-semibold">
                {detail.introducingNumber}
              </span>
              <span className="h-[1.5px] w-10 bg-[#7692FF]/50" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.35em] text-[#ABD2FA] uppercase font-semibold">
                INTRODUCING
              </span>
            </div>

            {/* Main Headline */}
            <h3 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5.2rem] 2xl:text-[5.8rem] font-serif font-bold text-white tracking-tight leading-[1.02] mb-5 sm:mb-6">
              {detail.mainHeadingLine1}
              <br />
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isPropFirm
                    ? 'from-[#fced96] via-[#f5d77f] to-[#d4af37]'
                    : 'from-white via-[#ABD2FA] to-[#7692FF]'
                }`}
              >
                {detail.mainHeadingLine2}
              </span>
            </h3>

            {/* Tagline */}
            <p className="text-base sm:text-xl lg:text-2xl font-sans text-[#ABD2FA] font-medium tracking-wide mb-5 sm:mb-7">
              {detail.tagline}
            </p>

            {/* Description Narrative */}
            <p className="text-lg sm:text-xl lg:text-2xl font-sans text-slate-200/90 leading-relaxed mb-8 sm:mb-10 max-w-2xl font-normal">
              {detail.description}
            </p>

            {/* Features: Clean Typography List (No Nested Boxes, No Emojis/Icons) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 lg:gap-y-6 pt-7 sm:pt-8 border-t border-white/15 mb-8 sm:mb-10">
              {detail.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ABD2FA] shadow-[0_0_10px_#ABD2FA] shrink-0" />
                  <span className="text-base sm:text-lg lg:text-xl font-sans font-medium text-slate-100 tracking-wide">
                    {feat.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Quote & Action CTA */}
          <div className="pt-6 border-t border-[#7692FF]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mt-auto">
            <p className="text-sm sm:text-base font-serif italic text-slate-300/90 max-w-md leading-relaxed">
              "{detail.quote}"
            </p>

            <button
              onClick={() => onSelect(product)}
              className="px-7 py-3.5 rounded-full font-display font-semibold text-xs sm:text-sm bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] text-white hover:shadow-[0_0_30px_rgba(118,146,255,0.5)] border border-[#ABD2FA]/30 transition-all flex items-center gap-2.5 group/btn shrink-0"
            >
              <span>EXPLORE ARCHITECTURE</span>
              <ArrowRight className="w-4 h-4 text-[#ABD2FA] group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: VISUAL FRAME — seamlessly blended into card, zero partition ─── */}
        <div className="hidden lg:flex lg:w-[46%] relative items-center justify-center p-4 sm:p-6 lg:p-10 lg:pl-2 xl:pl-4 bg-transparent">
          <PillarVisualShowcase
            productId={product.id}
            scrollYProgress={scrollYProgress}
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Main Section ─── */
export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onSelectProduct }) => {
  const primaryEight = VELORA_PRODUCTS.slice(0, 8);

  return (
    <section id="ecosystem" className="relative overflow-hidden" style={{ contain: 'paint' }}>
      {/* Ambient background light fields for realistic glass refraction */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1300px] h-[650px] bg-gradient-to-tr from-[#1B2CC1]/20 via-[#7692FF]/15 to-[#ABD2FA]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/4 w-[700px] h-[700px] bg-[#1B2CC1]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#7692FF]/15 rounded-full blur-[150px] pointer-events-none" />
      {/* Intro Screen */}
      <div className="min-h-[20vh] sm:min-h-[30vh] lg:min-h-[45vh] flex flex-col items-center justify-center text-center px-4 relative z-10 py-8 sm:py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] max-w-4xl"
        >
          Eight Pillars.{' '}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] to-[#7692FF]">
            One Infinite Ecosystem.
          </span>
        </motion.h2>
      </div>

      {/* Stacked Cards Container */}
      <div className="relative px-3 sm:px-6 lg:px-8 space-y-6 lg:space-y-0 pb-8 lg:pb-0">
        {primaryEight.map((product, idx) => (
          <StickyProductCard
            key={product.id}
            product={product}
            index={idx}
            total={primaryEight.length}
            onSelect={onSelectProduct}
          />
        ))}
      </div>
    </section>
  );
};
