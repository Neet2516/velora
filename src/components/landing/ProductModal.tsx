import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { EcosystemProduct } from '../../types';

interface ProductModalProps {
  product: EcosystemProduct | null;
  onClose: () => void;
}

const productImages: Record<string, string> = {
  'broker-house': '/images/broker_house_unveil.png',
  'prop-firm': '/images/prop_firm_golden_bull.png',
  'crypto-arbitrage': '/images/crypto_arbitrage_cube.png',
  'ai-agent': '/images/ai_agent_neural_brain.png',
  'education-platform': '/images/education_platform_academy.png',
  'forex-cards': '/images/forex_cards_luxury_trio.png',
  'fund-management': '/images/fund_management_wealth.png',
  'automation-bot': '/images/ai_automation_robot.png',
};

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const imgSrc = productImages[product.id] || '/images/ecosystem_vision_hub.png';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050c26]/85 backdrop-blur-xl"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-3xl bg-[#091540] border border-[#7692FF]/40 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(27,44,193,0.35)] z-10"
        >
          {/* Image Header */}
          <div className="relative h-56 sm:h-72">
            <img src={imgSrc} alt={product.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091540] via-transparent to-transparent" />

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#050c26]/80 border border-[#7692FF]/30 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Status */}
            <div className="absolute bottom-4 left-5">
              <span className="text-[10px] px-3 py-1 rounded-full bg-[#1B2CC1]/50 backdrop-blur-md border border-[#7692FF]/40 text-[#ABD2FA] font-mono uppercase tracking-wider">
                {product.status}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">{product.title}</h3>
            <p className="text-sm font-serif italic text-[#ABD2FA]/80 mt-1">{product.tagline}</p>

            <p className="text-sm text-slate-300 leading-relaxed mt-4 font-sans">{product.description}</p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-[#050c26]/60 border border-[#7692FF]/20 text-xs text-slate-200 font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ABD2FA] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 pt-5 mt-5 border-t border-[#7692FF]/20">
              <button onClick={onClose} className="px-4 py-2 rounded-xl bg-[#050c26] text-slate-300 text-xs font-display border border-[#7692FF]/20">
                Close
              </button>
              <button
                onClick={() => { onClose(); document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] text-white text-xs font-display font-semibold flex items-center gap-1.5"
              >
                View in Ecosystem <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
