import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { VELORA_PRODUCTS } from '../../data/productsData';
import { EcosystemProduct } from '../../types';

interface EcosystemSectionProps {
  onSelectProduct: (product: EcosystemProduct) => void;
}

const productImages: Record<string, string> = {
  'broker-house': '/images/broker_house_phone.png',
  'prop-firm': '/images/prop_firm_golden_bull.png',
  'crypto-arbitrage': '/images/crypto_arbitrage_cube.png',
  'ai-agent': '/images/ai_agent_neural_brain.png',
  'education-platform': '/images/education_platform_academy.png',
  'forex-cards': '/images/forex_cards_luxury_trio.png',
  'fund-management': '/images/fund_management_wealth.png',
  'automation-bot': '/images/ai_automation_robot.png',
};

const productQuotes: Record<string, string> = {
  'broker-house': 'Technology + Trust + Flexibility + Security + Innovation + Execution.',
  'prop-firm': 'We fund. You trade. Together, we build the future.',
  'crypto-arbitrage': 'The future of arbitrage is almost here.',
  'ai-agent': 'Think. Analyze. Decide. Evolve.',
  'education-platform': 'Learn. Trade. Grow.',
  'forex-cards': 'YOUR MONEY. YOUR WORLD. Exclusive. Global. Limitless.',
  'fund-management': 'Expertise you trust. Growth you deserve.',
  'automation-bot': 'Intelligence that trades. Automation that delivers.',
};

const productSubtitles: Record<string, string> = {
  'broker-house': 'Hybrid Broker — the best of MM + STP/ECN with deep liquidity and bank-grade segregation.',
  'prop-firm': 'Funded accounts up to $200,000+. Zero personal risk. 85–90% profit split.',
  'crypto-arbitrage': 'Sub-millisecond price disparity capture across Tier-1 crypto order books.',
  'ai-agent': 'Neural AI powering real-time sentiment, risk scoring, and strategy co-piloting.',
  'education-platform': 'Foundational basics to institutional masterclasses. Live mentors & webinars.',
  'forex-cards': 'Three luxury tiers — Sapphire, Obsidian, Diamond. 190+ countries accepted.',
  'fund-management': 'Professional portfolio management. Institutional strategies. Transparent reporting.',
  'automation-bot': 'License-based trading bots with copy-trade and intelligent execution.',
};

/* ─── Single Sticky Card ─── */
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

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  /* scroll‑driven animations */
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.55, 0.82], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.55, 0.82], [0.93, 1, 1, 0.95]);
  const imgScale = useTransform(scrollYProgress, [0, 0.25, 0.65], [1.12, 1, 1.04]);
  const y = useTransform(scrollYProgress, [0, 0.15], [50, 0]);
  const textX = useTransform(scrollYProgress, [0.05, 0.22], [-30, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.08, 0.25], [0, 1]);

  const pillarNum = (index + 1).toString().padStart(2, '0');
  const imgSrc = productImages[product.id] || '/images/ecosystem_vision_hub.png';
  const quote = productQuotes[product.id] || '';
  const subtitle = productSubtitles[product.id] || product.description;

  return (
    <div
      ref={cardRef}
      className="h-[110vh] flex items-center justify-center"
    >
      <motion.div
        style={{ opacity, scale, y }}
        className="sticky top-[7vh] w-full max-w-7xl mx-auto h-[86vh] rounded-3xl overflow-hidden border border-[#7692FF]/25 shadow-card-lux cursor-pointer group"
        onClick={() => onSelect(product)}
      >
        {/* Full Image Background with parallax zoom */}
        <motion.img
          src={imgSrc}
          alt={product.title}
          loading="lazy"
          style={{ scale: imgScale }}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
        />

        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050c26] via-[#050c26]/50 to-[#050c26]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050c26]/65 via-transparent to-transparent" />

        {/* Giant Pillar Number watermark */}
        <div className="absolute top-6 sm:top-8 left-6 sm:left-10 pointer-events-none">
          <span className="text-[80px] sm:text-[120px] lg:text-[160px] font-serif font-bold text-white/[0.05] leading-none select-none">
            {pillarNum}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-6 sm:top-8 right-6 sm:right-10 flex flex-col items-end gap-2">
          <span className="text-[9px] px-3 py-1.5 rounded-full bg-[#091540]/80 backdrop-blur-md border border-[#7692FF]/40 text-[#ABD2FA] font-mono uppercase tracking-[0.2em]">
            {product.status}
          </span>
          <span className="text-[10px] font-mono text-white/25 tracking-wider">
            {pillarNum} / {total.toString().padStart(2, '0')}
          </span>
        </div>

        {/* Content: Bottom-Left with scroll-driven slide-in */}
        <motion.div
          style={{ x: textX, opacity: textOpacity }}
          className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14"
        >
          {/* Pillar Label */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-mono tracking-[0.35em] text-[#ABD2FA] uppercase">
              PILLAR {pillarNum}
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-r from-[#7692FF] to-transparent" />
          </div>

          {/* Title */}
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.08] mb-3 max-w-3xl">
            {product.title}
          </h3>

          {/* Quote */}
          <p className="text-base sm:text-xl font-serif italic text-[#ABD2FA]/85 mb-3 max-w-2xl">
            "{quote}"
          </p>

          {/* Short Subtitle */}
          <p className="text-xs sm:text-sm font-sans text-slate-300/70 max-w-xl leading-relaxed mb-5">
            {subtitle}
          </p>

          {/* CTA */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 hover:border-[#ABD2FA]/50 backdrop-blur-md text-[11px] font-display font-semibold text-white/60 hover:text-white transition-all group/btn">
            <span>EXPLORE ARCHITECTURE</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </div>
        </motion.div>

        {/* Scroll hint */}
        {index < total - 1 && (
          <div className="absolute bottom-6 right-6 sm:right-10 flex flex-col items-center gap-1 text-white/20 pointer-events-none">
            <span className="text-[8px] font-mono tracking-[0.3em] uppercase">NEXT</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#7692FF]/40 to-transparent" />
          </div>
        )}
      </motion.div>
    </div>
  );
}

/* ─── Main Section ─── */
export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onSelectProduct }) => {
  const primaryEight = VELORA_PRODUCTS.slice(0, 8);

  return (
    <section id="ecosystem" className="relative">
      {/* Intro Screen */}
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-mono tracking-[0.4em] text-[#ABD2FA] uppercase mb-4"
        >
          THE PRODUCT UNIVERSE
        </motion.span>

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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-1.5 text-white/25"
        >
          <span className="text-[9px] font-mono tracking-[0.35em] uppercase">BEGIN THE JOURNEY</span>
          <div className="w-[1px] h-14 bg-gradient-to-b from-[#7692FF]/50 to-transparent animate-pulse" />
        </motion.div>
      </div>

      {/* Stacked Cards */}
      <div className="relative px-4 sm:px-6 lg:px-8">
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
