import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Shield, Sparkles, ExternalLink } from 'lucide-react';
import { EcosystemProduct } from '../../types';

interface ProductModalProps {
  product: EcosystemProduct | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050c26]/80 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-gradient-to-b from-[#0e1d52] to-[#091540] border border-[#7692FF]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(27,44,193,0.35)] overflow-hidden z-10"
        >
          {/* Ambient Light Blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#7692FF]/15 via-[#1B2CC1]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#050c26]/80 border border-[#7692FF]/30 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#1B2CC1]/30 via-[#7692FF]/20 to-[#ABD2FA]/20 border border-[#7692FF]/40 flex items-center justify-center text-[#ABD2FA] shrink-0 shadow-[0_0_20px_rgba(118,146,255,0.3)]">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xs px-3 py-0.5 rounded-full font-semibold border border-[#7692FF]/40 bg-[#1B2CC1]/20 text-[#ABD2FA] font-mono">
                  {product.status}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  PDF Architecture • Page {product.pdfPage}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                {product.title}
              </h3>
              <p className="text-sm text-[#ABD2FA] font-medium mt-0.5">
                {product.tagline}
              </p>
            </div>
          </div>

          {/* Body Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 border-t border-[#7692FF]/20 pt-4">
            {product.description}
          </p>

          {/* Key Features List */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-3 flex items-center gap-1.5 font-mono">
              <Shield className="w-4 h-4 text-[#7692FF]" />
              Core Architecture & Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#050c26]/60 border border-[#7692FF]/20 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#ABD2FA] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#7692FF]/20">
            <span className="text-xs text-slate-400 italic font-mono">
              "Infinite Opportunities. Limitless Wealth."
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-[#050c26] hover:bg-[#091540] text-slate-300 text-xs sm:text-sm font-medium transition-colors border border-[#7692FF]/20"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  const elem = document.getElementById('ecosystem');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] text-white text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(118,146,255,0.4)] transition-all flex items-center gap-1.5"
              >
                <span>View in Ecosystem</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
