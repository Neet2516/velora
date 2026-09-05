import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Layers } from 'lucide-react';
import { EcosystemProduct } from '../../types';
import { useLenis } from '../../hooks/useLenis';

interface ProductModalProps {
  product: EcosystemProduct | null;
  onClose: () => void;
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

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { scrollTo, stop, start } = useLenis();
  const [activeProduct, setActiveProduct] = useState<EcosystemProduct | null>(product);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  // Retain active product data during exit animation
  useEffect(() => {
    if (product) {
      setActiveProduct(product);
      setTilt({ rotateX: 0, rotateY: 0 });
    }
  }, [product]);

  // Lock body scroll and Lenis while modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      stop();
    } else {
      document.body.style.overflow = '';
      start();
    }
    return () => {
      document.body.style.overflow = '';
      start();
    };
  }, [product, stop, start]);

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Interactive 3D tilt on mouse move over the card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Gentle 3D perspective tilt
    const rotX = ((y - centerY) / centerY) * -5;
    const rotY = ((x - centerX) / centerX) * 5;
    setTilt({ rotateX: rotX, rotateY: rotY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const displayProduct = product || activeProduct;
  if (!displayProduct) return null;

  const imgSrc = productImages[displayProduct.id] || '/images/mobile.png';

  return (
    <AnimatePresence mode="wait">
      {product && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 pt-16 sm:pt-24 pb-8 overflow-y-auto"
          style={{ perspective: '1400px' }}
        >
          {/* Ambient Backdrop with cyber glass blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-[#050c26]/85 backdrop-blur-xl"
          />

          {/* 3D Rotating Architecture Card */}
          <motion.div
            ref={cardRef}
            initial={{
              opacity: 0,
              scale: 0.68,
              rotateY: -70,
              rotateX: 18,
              rotateZ: -6,
              y: 80,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: tilt.rotateY,
              rotateX: tilt.rotateX,
              rotateZ: 0,
              y: 20,
            }}
            exit={{
              opacity: 0,
              scale: 0.72,
              rotateY: 55,
              rotateX: -15,
              rotateZ: 4,
              y: -20,
              transition: { duration: 0.35, ease: [0.32, 0, 0.67, 0] },
            }}
            transition={{
              opacity: { duration: 0.35 },
              scale: { type: 'spring', stiffness: 220, damping: 22, mass: 0.85 },
              y: { type: 'spring', stiffness: 220, damping: 22, mass: 0.85 },
              rotateY: { type: 'spring', stiffness: 220, damping: 22, mass: 0.85 },
              rotateX: { type: 'spring', stiffness: 220, damping: 22, mass: 0.85 },
              rotateZ: { type: 'spring', stiffness: 220, damping: 22, mass: 0.85 },
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full max-w-[580px] bg-gradient-to-b from-[#0c1a4e] via-[#091540] to-[#050c26] border border-[#7692FF]/45 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(27,44,193,0.45),0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] z-10 will-change-transform my-auto"
          >
            {/* Specular Top Edge Glint */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ABD2FA]/80 to-transparent pointer-events-none z-30" />

            {/* Holographic Sheen Sweep across the card on arrival */}
            <motion.div
              initial={{ x: '-120%', opacity: 0 }}
              animate={{ x: '250%', opacity: [0, 0.5, 0] }}
              transition={{ duration: 1.1, delay: 0.25, ease: 'easeOut' }}
              className="absolute inset-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30"
            />

            {/* Ambient Background Light Fields */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#7692FF]/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#1B2CC1]/20 rounded-full blur-[80px] pointer-events-none" />

            {/* Image Header with 3D Depth */}
            <div
              className={`relative h-44 sm:h-52 overflow-hidden flex items-center justify-center ${
                displayProduct.id === 'prop-firm'
                  ? 'bg-black'
                  : displayProduct.id === 'ai-agent'
                  ? 'bg-[#050c26]'
                  : ''
              }`}
            >
              {displayProduct.id === 'prop-firm' && (
                <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-[#d4af37]/25 via-[#b8860b]/15 to-transparent blur-3xl pointer-events-none" />
              )}
              {displayProduct.id === 'ai-agent' && (
                <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-[#1B2CC1]/35 via-[#7692FF]/25 to-[#ABD2FA]/20 blur-3xl pointer-events-none" />
              )}

              <motion.img
                initial={{ scale: 0.88, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                src={imgSrc}
                alt={displayProduct.title}
                loading="lazy"
                decoding="async"
                className={`w-full h-full ${
                  displayProduct.id === 'prop-firm' || displayProduct.id === 'ai-agent'
                    ? 'object-contain scale-110 mix-blend-screen'
                    : displayProduct.id === 'fund-management'
                    ? 'object-contain scale-115'
                    : 'object-cover'
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#091540] via-[#091540]/30 to-transparent pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-2 rounded-full bg-[#050c26]/80 border border-[#7692FF]/40 text-slate-300 hover:text-white hover:bg-[#1B2CC1]/40 transition-colors z-40 cursor-pointer shadow-lg"
                aria-label="Close architecture modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Status Badge */}
              <div className="absolute bottom-3 left-4 z-20">
                <span className="text-[9px] px-3 py-1 rounded-full bg-[#1B2CC1]/80 backdrop-blur-md border border-[#7692FF]/50 text-[#ABD2FA] font-mono uppercase tracking-wider font-semibold shadow-[0_0_12px_rgba(118,146,255,0.4)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ABD2FA] animate-pulse" />
                  {displayProduct.status}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-6 relative z-20">
              <div className="flex items-center gap-2 mb-1 text-[11px] font-mono tracking-[0.25em] text-[#ABD2FA] uppercase font-semibold">
                <Layers className="w-3.5 h-3.5 text-[#7692FF]" />
                <span>ECOSYSTEM ARCHITECTURE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                {displayProduct.title}
              </h3>
              <p className="text-xs sm:text-sm font-serif italic text-[#ABD2FA]/80 mt-0.5">
                {displayProduct.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3 font-sans">
                {displayProduct.description}
              </p>

              {/* Key Features / Specs Grid with staggered entrance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                {displayProduct.keyFeatures.map((feat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2 + idx * 0.05, duration: 0.35, ease: 'easeOut' }}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-[#050c26]/70 border border-[#7692FF]/25 hover:border-[#ABD2FA]/40 text-[11px] sm:text-xs text-slate-200 font-sans transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ABD2FA] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </motion.div>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-end gap-2.5 pt-4 mt-4 border-t border-[#7692FF]/20">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-[#050c26]/80 hover:bg-[#050c26] text-slate-300 hover:text-white text-xs font-display border border-[#7692FF]/30 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onClose();
                    scrollTo('#ecosystem', { offset: -72 });
                  }}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] text-white text-xs font-display font-semibold hover:shadow-[0_0_25px_rgba(118,146,255,0.5)] border border-[#ABD2FA]/30 transition-all flex items-center gap-1.5 cursor-pointer group/btn"
                >
                  <span>View in Ecosystem</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
