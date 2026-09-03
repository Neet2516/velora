import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, MapPin } from 'lucide-react';
import animatedVideo from '../../../assets/animated_video.mp4';
import { VeloraSignature } from '../brand/VeloraSignature';

interface HeroSectionProps {
  onExploreEcosystem: () => void;
  onExploreVision: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreEcosystem,
  onExploreVision,
}) => {
  const scrollToRoadmap = () => {
    const elem = document.getElementById('roadmap');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Full-Screen Animated Video Background - Plays Only Once */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={animatedVideo} type="video/mp4" />
          <source src="/assets/animated_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050c26]/75 via-[#050c26]/45 to-[#050c26]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091540]/60 via-transparent to-[#091540]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-16">
        {/* Animated Brand Signature: VELORA (Zoom-In Calligraphic Reveal) */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, filter: 'blur(16px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 1.3,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative inline-block w-[320px] sm:w-[520px] md:w-[660px] lg:w-[800px] max-w-[90vw] mx-auto mb-3"
        >
          {/* Ambient Behind-Glow */}
          <div className="absolute inset-0 -inset-x-8 bg-gradient-to-r from-[#1B2CC1]/25 via-[#7692FF]/30 to-[#ABD2FA]/20 blur-3xl rounded-full pointer-events-none" />

          <VeloraSignature animated={true} delay={0.25} />
        </motion.div>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-6 text-sm sm:text-base font-mono tracking-[0.3em] text-[#ABD2FA]/85 uppercase"
        >
          INFINITE OPPORTUNITIES · LIMITLESS WEALTH
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onExploreEcosystem}
            className="w-full sm:w-auto px-9 py-4 rounded-full font-display font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] hover:shadow-[0_0_40px_rgba(118,146,255,0.55)] transition-all flex items-center justify-center gap-3 group border border-[#ABD2FA]/40"
          >
            <Sparkles className="w-4 h-4" />
            <span>ENTER THE ECOSYSTEM</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToRoadmap}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-semibold text-sm sm:text-base text-white/90 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#ABD2FA]/50 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#7692FF]" />
            <span>FOLLOW THE ROADMAP</span>
          </button>
        </motion.div>

        {/* Clean Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <button
            onClick={onExploreVision}
            className="text-white/40 hover:text-[#ABD2FA] transition-colors mx-auto block"
            aria-label="Scroll to explore"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
