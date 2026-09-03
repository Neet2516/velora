import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { VeloraLogo } from '../brand/VeloraLogo';

interface NavbarProps {
  onExploreEcosystem: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreEcosystem }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vision', href: '#vision' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'AI Agent', href: '#ai-agent' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Upcoming', href: '#upcoming' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#091540]/90 backdrop-blur-xl border-b border-[#7692FF]/25 py-3 shadow-[0_4px_30px_rgba(5,12,38,0.7)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group cursor-pointer focus:outline-none"
          >
            <VeloraLogo size="sm" />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3.5 py-1.5 rounded-full bg-[#091540]/80 border border-[#7692FF]/25 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-[#ABD2FA] transition-colors rounded-full hover:bg-[#1B2CC1]/20"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onExploreEcosystem}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full font-semibold text-xs lg:text-sm text-white bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] hover:shadow-[0_0_25px_rgba(118,146,255,0.45)] transition-all flex items-center gap-2 border border-[#ABD2FA]/30"
            >
              <Sparkles className="w-4 h-4 text-[#ABD2FA]" />
              <span>Explore Ecosystem</span>
              <ArrowRight className="w-4 h-4 text-[#ABD2FA] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#091540] border border-[#7692FF]/30 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#091540]/95 backdrop-blur-2xl border-b border-[#7692FF]/30 px-6 py-5 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-2.5 text-sm font-medium text-slate-200 hover:text-[#ABD2FA] border-b border-[#7692FF]/15"
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExploreEcosystem();
                }}
                className="mt-3 w-full py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(118,146,255,0.4)]"
              >
                <span>Explore Ecosystem</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
