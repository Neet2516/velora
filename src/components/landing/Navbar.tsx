import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { VeloraLogo } from '../brand/VeloraLogo';

interface NavbarProps {
  onExploreEcosystem: () => void;
}

interface NavItem {
  id: string;
  name: string;
  href: string;
  isSpecial?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreEcosystem }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const navItems: NavItem[] = [
    { id: 'vision', name: 'Vision', href: '#vision' },
    { id: 'ecosystem', name: 'Ecosystem', href: '#ecosystem' },
    { id: 'ai-agent', name: 'AI Agent', href: '#ai-agent' },
    { id: 'roadmap', name: 'Roadmap', href: '#roadmap' },
    { id: 'upcoming', name: 'Upcoming', href: '#upcoming', isSpecial: true },
  ];

  // Detect scroll position for transparent -> glass transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Robust IntersectionObserver & scroll-spy for active section detection
  useEffect(() => {
    const sectionIds = ['vision', 'ecosystem', 'ai-agent', 'roadmap', 'upcoming'];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    // IntersectionObserver with viewport bounds for mid-screen tracking
    const observer = new IntersectionObserver(
      (entries) => {
        // If user is at top hero, clear active section
        if (window.scrollY < 220) {
          setActiveSection('');
          return;
        }

        // Find the visible entry with the most visibility or topmost
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0, 0.2, 0.5],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    // Scroll fallback to handle edge cases like fast scrolling or bottom of page
    const handleScrollSpyFallback = () => {
      const scrollY = window.scrollY;

      // Top of hero
      if (scrollY < 220) {
        setActiveSection('');
        return;
      }

      // Check if near bottom of page
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('upcoming');
        return;
      }

      // Find section by coordinate fallback
      const scrollPos = scrollY + 160;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (scrollPos >= el.offsetTop) {
          setActiveSection(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpyFallback, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollSpyFallback);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -72; // accounts for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setActiveSection('');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050c26]/60 backdrop-blur-xl md:backdrop-blur-2xl border-b border-[#7692FF]/15 shadow-[0_8px_32px_rgba(5,12,38,0.5)] py-3 sm:py-3.5'
            : 'bg-[#050c26]/10 backdrop-blur-[2px] border-b border-white/[0.04] py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: Brand Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="group flex items-center gap-1 focus:outline-none cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Velora Global Home"
            >
              <VeloraLogo size="sm" animated={true} />
            </a>

            {/* CENTER: Clean Typography Navigation (No Pill Container) */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-10">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative py-1 text-[13px] lg:text-[14px] font-sans font-medium tracking-[0.05em] transition-colors duration-300 flex items-center gap-1.5 focus:outline-none ${
                      isActive
                        ? 'text-white font-semibold drop-shadow-[0_0_12px_rgba(171,210,250,0.65)]'
                        : 'text-slate-300/80 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>

                    {/* Tiny pulsing gradient dot for "Upcoming" */}
                    {item.isSpecial && (
                      <span className="relative flex h-2 w-2 ml-0.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7692FF] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-tr from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] shadow-[0_0_8px_rgba(171,210,250,0.9)]" />
                      </span>
                    )}

                    {/* Thin animated active-section indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSectionIndicator"
                        className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#7692FF]/10 via-[#ABD2FA] to-[#7692FF]/10 shadow-[0_0_10px_rgba(171,210,250,0.85)]"
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* RIGHT: Premium Floating Glass CTA */}
            <div className="hidden md:flex items-center">
              <button
                onClick={onExploreEcosystem}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full font-sans font-medium text-xs lg:text-[13px] tracking-[0.1em] uppercase text-white bg-gradient-to-r from-[#1B2CC1]/30 via-[#7692FF]/20 to-[#ABD2FA]/15 hover:from-[#1B2CC1]/50 hover:via-[#7692FF]/35 hover:to-[#ABD2FA]/25 border border-[#ABD2FA]/30 hover:border-[#ABD2FA]/70 shadow-[0_0_15px_rgba(118,146,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_28px_rgba(118,146,255,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)] backdrop-blur-md transition-all duration-300 flex items-center gap-2"
              >
                {/* Continuous Subtle Sheen Gliding Across */}
                <motion.span
                  className="absolute inset-0 -skew-x-12 pointer-events-none"
                  initial={{ x: '-150%' }}
                  animate={{ x: '250%' }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    repeatDelay: 2.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className="block w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[1px]" />
                </motion.span>

                {/* Additional Hover Shine Sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none skew-x-12" />

                <span className="relative z-10 font-semibold drop-shadow-sm">ENTER ECOSYSTEM</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 text-[#ABD2FA] group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
              </button>
            </div>

            {/* MOBILE: Hamburger Trigger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#ABD2FA]/40 text-slate-200 transition-all duration-200 focus:outline-none flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {/* Bespoke animated 3-bar hamburger morphing to X */}
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="w-5 h-[1.5px] bg-[#ABD2FA] rounded-full origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="w-5 h-[1.5px] bg-slate-200 rounded-full"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="w-5 h-[1.5px] bg-[#ABD2FA] rounded-full origin-center"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Subtle Integrated Page Progress Line */}
        <motion.div
          style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
          className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] shadow-[0_0_8px_rgba(118,146,255,0.8)] pointer-events-none"
        />
      </motion.header>

      {/* MOBILE: Full-Width Cinematic Glassmorphic Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-[#050c26]/90 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 sm:px-8 overflow-y-auto"
          >
            {/* Ambient Background Light Blobs */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-[#7692FF]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#1B2CC1]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Staggered Navigation Items */}
            <motion.div
              variants={{
                closed: { opacity: 0 },
                open: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.1,
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col gap-2 relative z-10 mt-4"
            >
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    variants={{
                      closed: { opacity: 0, y: 16, filter: 'blur(4px)' },
                      open: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-sans font-medium transition-all ${
                      isActive
                        ? 'bg-[#1B2CC1]/25 text-white border border-[#7692FF]/30 shadow-[0_0_20px_rgba(118,146,255,0.25)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#7692FF]/70 tracking-wider">
                        0{index + 1}
                      </span>
                      <span className="tracking-wide">{item.name}</span>
                    </div>

                    {item.isSpecial ? (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7692FF] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-tr from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] shadow-[0_0_8px_rgba(171,210,250,0.9)]" />
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-white/30" />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Mobile Footer CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="relative z-10 pt-6 border-t border-[#7692FF]/15 mt-8"
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExploreEcosystem();
                }}
                className="relative group overflow-hidden w-full py-4 px-6 rounded-xl font-sans font-semibold text-sm tracking-[0.1em] uppercase text-white bg-gradient-to-r from-[#1B2CC1]/40 via-[#7692FF]/30 to-[#ABD2FA]/25 border border-[#ABD2FA]/40 shadow-[0_0_25px_rgba(118,146,255,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3 active:scale-[0.99] transition-all"
              >
                {/* Mobile Shine Effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none skew-x-12" />

                <span>ENTER ECOSYSTEM</span>
                <ArrowRight className="w-4 h-4 text-[#ABD2FA] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
