import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  ShieldCheck,
  Layers,
  BrainCircuit,
  GraduationCap,
  CreditCard,
  Vault,
  Bot,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { VELORA_PRODUCTS } from '../../data/productsData';
import { EcosystemProduct } from '../../types';

interface EcosystemSectionProps {
  onSelectProduct: (product: EcosystemProduct) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Building2,
  ShieldCheck,
  Layers,
  BrainCircuit,
  GraduationCap,
  CreditCard,
  Vault,
  Bot,
};

const quotesMap: Record<string, string> = {
  'broker-house': '“We are building a Hybrid Broker — the best of both worlds. Technology + Trust + Flexibility + Security + Innovation + Execution.”',
  'prop-firm': '“We fund. You trade. Together, we build the future.”',
  'crypto-arbitrage': '“Stay tuned. Stay ahead. The future of arbitrage is almost here.”',
  'ai-agent': '“Real-time insights. AI-powered precision. Endless possibilities.”',
  'education-platform': '“Learn. Trade. Grow. Together with Velora Global.”',
  'forex-cards': '“YOUR MONEY. YOUR WORLD. Exclusive. Global. Limitless.”',
  'fund-management': '“Your growth. Our expertise. Limitless possibilities.”',
  'automation-bot': '“Automate. Copy. Grow. The future of trading is here.”',
};

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Eight Pillars' },
    { id: 'trading', label: 'Trading & Markets' },
    { id: 'capital', label: 'Capital & Prop' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'wealth', label: 'Fund Management' },
    { id: 'lifestyle', label: 'Cards & Lifestyle' },
  ];

  // We show the primary 8 pillars from the reference site
  const primaryEight = VELORA_PRODUCTS.slice(0, 8);

  const filteredProducts =
    activeCategory === 'all'
      ? primaryEight
      : primaryEight.filter((p) => p.category === activeCategory);

  return (
    <section id="ecosystem" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#1B2CC1]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7692FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header from reference: "THE PRODUCT UNIVERSE" & "Eight pillars. One infinite ecosystem." */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#091540]/80 border border-[#7692FF]/30 text-[#ABD2FA] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 font-mono"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#ABD2FA]" />
          <span>THE PRODUCT UNIVERSE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
        >
          Eight Pillars.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] via-[#7692FF] to-[#1B2CC1]">
            One Infinite Ecosystem.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mt-4 text-base sm:text-lg text-slate-300"
        >
          Converging broker house, prop funding, high-frequency arbitrage, AI intelligence, and multi-currency lifestyle into one universe.
        </motion.p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] text-white shadow-[0_0_15px_rgba(118,146,255,0.4)] border border-[#ABD2FA]/40'
                  : 'bg-[#091540]/60 text-slate-400 hover:text-white hover:bg-[#0e1d52] border border-[#7692FF]/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 8 Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, idx) => {
          const Icon = iconMap[product.iconName] || Sparkles;
          const quote = quotesMap[product.id] || '';
          const pillarNum = (idx + 1).toString().padStart(2, '0');

          return (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              onClick={() => onSelectProduct(product)}
              className="group relative p-6 rounded-3xl bg-[#091540]/65 hover:bg-[#0e1d52]/85 border border-[#7692FF]/20 hover:border-[#ABD2FA]/50 backdrop-blur-xl shadow-card-lux transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0e1d52] border border-[#7692FF]/30 flex items-center justify-center text-[#ABD2FA] group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(118,146,255,0.25)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#ABD2FA]">
                    {pillarNum}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full font-semibold border border-[#7692FF]/40 bg-[#1B2CC1]/20 text-[#ABD2FA] font-mono uppercase">
                    {product.status}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#ABD2FA] transition-colors mt-2">
                  {product.title}
                </h3>
                <p className="text-xs font-semibold text-[#7692FF] mt-0.5 mb-2.5">
                  {product.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed font-normal">
                  {product.description}
                </p>

                {/* Reference quote if present */}
                {quote && (
                  <p className="mt-3 text-[11px] italic text-[#ABD2FA]/80 border-l-2 border-[#7692FF] pl-2.5 font-mono">
                    {quote}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#7692FF]/20 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-[#ABD2FA] transition-colors">
                <span>View Architecture</span>
                <div className="w-7 h-7 rounded-full bg-[#050c26] group-hover:bg-[#7692FF] group-hover:text-white flex items-center justify-center transition-all">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
