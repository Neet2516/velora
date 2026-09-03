import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface HorizonScene {
  id: string;
  step: string;
  category: string;
  title: string;
  subheading: string;
  quote: string;
  status: string;
  statusColor: string;
  ctaText: string;
  image: string;
  accentGradient: string;
  glowColor: string;
  metrics: { label: string; value: string }[];
  details: string;
}

const HORIZON_SCENES: HorizonScene[] = [
  {
    id: 'forex-cards',
    step: '01',
    category: 'PHYSICAL LUXURY ASSET',
    title: 'FOREX CARDS',
    subheading: 'YOUR MONEY. YOUR WORLD.',
    quote: 'Exclusive. Global. Limitless.',
    status: 'COMING SOON',
    statusColor: 'text-[#ABD2FA] border-[#7692FF]/40 bg-[#1B2CC1]/25',
    ctaText: 'Explore Card Editions',
    image: '/images/forex_cards_luxury_trio.png',
    accentGradient: 'from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA]',
    glowColor: 'rgba(118, 146, 255, 0.35)',
    metrics: [
      { label: 'EDITIONS', value: 'Sapphire · Obsidian · Diamond' },
      { label: 'GLOBAL ACCESS', value: '190+ Countries' },
      { label: 'ATM WITHDRAWAL', value: '$15,000 / Day' },
    ],
    details: 'Seamless profit off-ramp from broker and prop firm accounts with zero international exchange surcharges.',
  },
  {
    id: 'crypto-arbitrage',
    step: '02',
    category: 'HIGH-FREQUENCY ALGORITHMS',
    title: 'CRYPTO ARBITRAGE',
    subheading: 'SOMETHING BIG IS COMING',
    quote: 'The future of arbitrage is almost here.',
    status: 'REVEALING SOON',
    statusColor: 'text-[#ABD2FA] border-[#7692FF]/40 bg-[#1B2CC1]/25',
    ctaText: 'Preview Spread Matrix',
    image: '/images/crypto_arbitrage_cube.png',
    accentGradient: 'from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA]',
    glowColor: 'rgba(27, 44, 193, 0.45)',
    metrics: [
      { label: 'EXECUTION', value: '< 1.5ms Sub-Latency' },
      { label: 'ORDER BOOKS', value: 'Tier-1 Cross-Exchanges' },
      { label: 'SLIPPAGE MITIGATION', value: 'Automated Shield' },
    ],
    details: 'Capturing micro-second price disparities across Tier-1 global liquidity pools with zero manual intervention.',
  },
  {
    id: 'blue-diamond',
    step: '03',
    category: 'GOVERNANCE & LEADERSHIP',
    title: 'BLUE DIAMOND',
    subheading: 'UPCOMING CORE TEAM',
    quote: 'One Rank. One Team. One Vision.',
    status: 'UPCOMING',
    statusColor: 'text-[#ABD2FA] border-[#7692FF]/40 bg-[#1B2CC1]/25',
    ctaText: 'View Leadership Path',
    image: '/images/core_team_blue_diamond.png',
    accentGradient: 'from-[#7692FF] via-[#ABD2FA] to-[#1B2CC1]',
    glowColor: 'rgba(171, 210, 250, 0.4)',
    metrics: [
      { label: 'ELIGIBILITY', value: 'Blue Diamond Rank' },
      { label: 'GOVERNANCE', value: 'Direct Founder Council' },
      { label: 'EXPANSION', value: 'Global Strategy Voting' },
    ],
    details: 'Formed exclusively by leaders achieving the highest echelon of excellence to guide global ecosystem expansion.',
  },
  {
    id: 'bonanza',
    step: '04',
    category: 'LUXURY GLOBAL REWARD',
    title: 'BONANZA',
    subheading: 'AN EXTRAORDINARY JOURNEY',
    quote: 'A reward. A journey. A memory for life.',
    status: 'UPCOMING',
    statusColor: 'text-[#ABD2FA] border-[#7692FF]/40 bg-[#1B2CC1]/25',
    ctaText: 'Destination To Be Disclosed',
    image: '/images/bonanza_destination_horizon.png',
    accentGradient: 'from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA]',
    glowColor: 'rgba(118, 146, 255, 0.4)',
    metrics: [
      { label: 'DESTINATION', value: 'To Be Disclosed Soon' },
      { label: 'HOSPITALITY', value: '5-Star Private Retreats' },
      { label: 'EXPERIENCE', value: 'All-Inclusive Summit' },
    ],
    details: 'An all-inclusive international experience honoring top partners and community champions in a world-class venue.',
  },
];

export const UpcomingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);
  const bgShift = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const progressPercent = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.28) {
      setActiveIndex(0);
    } else if (latest < 0.58) {
      setActiveIndex(1);
    } else if (latest < 0.86) {
      setActiveIndex(2);
    } else {
      setActiveIndex(3);
    }
  });

  const activeScene = HORIZON_SCENES[activeIndex];

  const jumpToScene = (idx: number) => {
    if (!sectionRef.current) return;
    const totalHeight = sectionRef.current.offsetHeight - window.innerHeight;
    const targetY = sectionRef.current.offsetTop + (totalHeight * idx) / 3;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <section
      id="upcoming"
      ref={sectionRef}
      className="relative bg-[#050c26] text-white select-none"
    >
      {/* Desktop Horizontal Scroll */}
      <div className="hidden md:block h-[450vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between bg-[#050c26]">
          <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[140px] pointer-events-none transition-all duration-700"
            style={{ background: activeScene.glowColor }}
          />

          {/* Top Bar */}
          <div className="relative z-30 pt-8 px-8 lg:px-16 flex items-center justify-between border-b border-[#7692FF]/15 pb-4 backdrop-blur-md bg-[#050c26]/60">
            <h2 className="text-xl lg:text-2xl font-serif font-bold text-white tracking-wide">
              Something Extraordinary{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] to-[#7692FF]">
                is on the Horizon
              </span>
            </h2>

            {/* Quick Navigation Dots */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                {HORIZON_SCENES.map((scene, i) => (
                  <button
                    key={scene.id}
                    onClick={() => jumpToScene(i)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      activeIndex === i
                        ? 'bg-[#1B2CC1]/40 border border-[#ABD2FA] text-white shadow-[0_0_15px_rgba(118,146,255,0.5)]'
                        : 'text-slate-400 hover:text-white border border-transparent'
                    }`}
                  >
                    <span>0{i + 1}</span>
                    <span className="hidden lg:inline text-[10px] uppercase font-sans">
                      {scene.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Track */}
          <div className="relative z-10 flex-1 overflow-hidden flex items-center">
            <motion.div
              style={{ x }}
              className="flex items-center h-full w-[400vw] will-change-transform"
            >
              {HORIZON_SCENES.map((scene, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={scene.id}
                    className="w-screen h-[78vh] px-8 lg:px-16 flex items-center justify-center shrink-0"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.94,
                        opacity: isActive ? 1 : 0.35,
                        filter: isActive ? 'blur(0px)' : 'blur(4px)',
                      }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="relative w-full max-w-7xl h-full rounded-[2.5rem] overflow-hidden border border-[#7692FF]/30 shadow-card-lux bg-gradient-to-br from-[#091540]/80 via-[#0e1d52]/70 to-[#050c26]/90 backdrop-blur-2xl flex flex-col lg:flex-row items-stretch group"
                    >
                      {/* Left Visual Area */}
                      <div className="lg:w-[58%] relative overflow-hidden flex items-center justify-center p-6 lg:p-10">
                        <motion.img
                          src={scene.image}
                          alt={scene.title}
                          loading="lazy"
                          style={{ x: bgShift }}
                          className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050c26] via-[#050c26]/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#091540]/90 hidden lg:block" />

                        {/* Watermark Step Number */}
                        <div className="absolute top-6 left-8 pointer-events-none select-none">
                          <span className="text-[120px] lg:text-[160px] font-serif font-bold text-white/[0.07] leading-none">
                            {scene.step}
                          </span>
                        </div>

                        {/* Status Pill */}
                        <div className="absolute top-8 left-8 z-10">
                          <span
                            className={`text-[10px] font-mono px-3.5 py-1.5 rounded-full border backdrop-blur-md uppercase tracking-[0.25em] font-semibold ${scene.statusColor}`}
                          >
                            {scene.status}
                          </span>
                        </div>

                        {/* Quote Over Image */}
                        <div className="absolute bottom-8 left-8 right-8 z-10">
                          <p className="text-xl lg:text-2xl font-serif italic text-white/90 drop-shadow-md">
                            "{scene.quote}"
                          </p>
                        </div>
                      </div>

                      {/* Right Info Area */}
                      <div className="lg:w-[42%] p-8 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#7692FF]/20 relative z-10 bg-[#091540]/50 backdrop-blur-xl">
                        <div>
                          <h3 className="text-4xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.05] mb-2">
                            {scene.title}
                          </h3>
                          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#7692FF] font-semibold mb-6">
                            {scene.subheading}
                          </p>
                          <p className="text-sm lg:text-base text-slate-300 font-sans leading-relaxed mb-8">
                            {scene.details}
                          </p>

                          <div className="space-y-3 pt-4 border-t border-[#7692FF]/20">
                            {scene.metrics.map((m, mIdx) => (
                              <div
                                key={mIdx}
                                className="flex items-center justify-between p-3 rounded-2xl bg-[#050c26]/60 border border-[#7692FF]/15"
                              >
                                <span className="text-[10px] font-mono uppercase text-slate-400">
                                  {m.label}
                                </span>
                                <span className="text-xs font-mono font-bold text-[#ABD2FA]">
                                  {m.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-6 mt-6 border-t border-[#7692FF]/20 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                            <ShieldCheck className="w-4 h-4 text-[#ABD2FA]" />
                            <span>Velora Ecosystem Tier</span>
                          </div>

                          <button
                            onClick={() => {
                              const elem = document.getElementById('ecosystem');
                              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-5 py-2.5 rounded-full font-display font-semibold text-xs text-white bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] hover:shadow-[0_0_25px_rgba(118,146,255,0.45)] transition-all flex items-center gap-2 border border-[#ABD2FA]/30 group/btn"
                          >
                            <span>{scene.ctaText}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#ABD2FA] group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom HUD Controller */}
          <div className="relative z-30 pb-7 px-8 lg:px-16 flex items-center justify-between backdrop-blur-md bg-[#050c26]/70 border-t border-[#7692FF]/15">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-serif font-bold text-white">
                0{activeIndex + 1}
              </span>
              <span className="text-sm font-mono text-slate-500">/ 04</span>
              <span className="h-4 w-[1px] bg-slate-700 mx-1" />
              <span className="text-xs font-mono font-bold text-[#ABD2FA] uppercase tracking-widest">
                {activeScene.title}
              </span>
            </div>

            <div className="w-64 lg:w-96 h-1.5 bg-[#0e1d52] rounded-full overflow-hidden relative border border-[#7692FF]/30">
              <motion.div
                style={{ width: progressPercent }}
                className="h-full bg-gradient-to-r from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] shadow-[0_0_15px_rgba(171,210,250,0.8)]"
              />
            </div>

            <div className="flex items-center gap-2">
              {HORIZON_SCENES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => jumpToScene(i)}
                  className={`transition-all rounded-full ${
                    activeIndex === i
                      ? 'w-7 h-2 bg-[#ABD2FA] shadow-[0_0_10px_rgba(171,210,250,0.8)]'
                      : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Jump to scene ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Cinematic Vertical Adaptation */}
      <div className="md:hidden px-4 py-20 space-y-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-white leading-tight">
            Something Extraordinary{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] to-[#7692FF]">
              is on the Horizon
            </span>
          </h2>
        </div>

        {HORIZON_SCENES.map((scene, idx) => (
          <motion.div
            key={scene.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-[#7692FF]/30 bg-[#091540]/80 shadow-card-lux"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={scene.image}
                alt={scene.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091540] via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className={`text-[9px] font-mono px-3 py-1 rounded-full border ${scene.statusColor}`}>
                  {scene.status}
                </span>
              </div>
              <div className="absolute bottom-3 left-4 right-4">
                <p className="text-base font-serif italic text-white/90">
                  "{scene.quote}"
                </p>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                {scene.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {scene.details}
              </p>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {scene.metrics.slice(0, 2).map((m, mIdx) => (
                  <div key={mIdx} className="p-2.5 rounded-xl bg-[#050c26]/60 border border-[#7692FF]/20">
                    <span className="text-[9px] font-mono text-slate-400 block">{m.label}</span>
                    <span className="text-[11px] font-mono font-bold text-[#ABD2FA]">{m.value}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const elem = document.getElementById('ecosystem');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl font-display font-semibold text-xs text-white bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] flex items-center justify-center gap-2"
              >
                <span>{scene.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
