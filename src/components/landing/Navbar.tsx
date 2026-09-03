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
      <header
        className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-500 ${
          isScrolled
            ? 'bg-[#091540]/90 backdrop-blur-2xl border-b border-[#7692FF]/25 shadow-[0_12px_40px_rgba(5,12,38,0.7)] py-3'
            : 'bg-[#050c26]/80 backdrop-blur-xl border-b border-white/[0.08] py-4'
        }`}
      >
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative flex items-center justify-between gap-2">
            {/* LEFT: Brand Logo (Left Aligned, constrained on mobile) */}
            <div className="flex items-center justify-start flex-shrink-0 z-10 max-w-[60vw] sm:max-w-none">
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
            </div>

            {/* CENTER: Navigation Links (Strictly Center-Aligned in Viewport) */}
            <nav className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-10 gap-8 lg:gap-11">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    style={{ fontFamily: "'Betania Patmos', cursive" }}
                    className={`relative py-1 text-2xl lg:text-[28px] font-normal tracking-wide transition-colors duration-300 flex items-center gap-2 focus:outline-none ${
                      isActive
                        ? 'text-white drop-shadow-[0_0_14px_rgba(171,210,250,0.7)]'
                        : 'text-slate-300/80 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>

                    {/* Tiny pulsing gradient dot for "Upcoming" */}
                    {item.isSpecial && (
                      <span className="relative flex h-2.5 w-2.5 ml-0.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7692FF] opacity-80" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-tr from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] shadow-[0_0_10px_rgba(171,210,250,0.95)]" />
                      </span>
                    )}

                    {/* Thin animated active-section indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSectionIndicator"
                        className="absolute -bottom-2 left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#7692FF]/20 via-[#ABD2FA] to-[#7692FF]/20 shadow-[0_0_12px_rgba(171,210,250,0.95)]"
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

            {/* RIGHT: Premium Floating Glass CTA (Right Aligned) */}
            <div className="hidden md:flex items-center justify-end flex-shrink-0 z-10">
              <button
                onClick={onExploreEcosystem}
                className="relative group overflow-hidden px-6 py-2.5 lg:py-3 rounded-full font-sans font-semibold text-[13px] lg:text-[14px] tracking-[0.1em] uppercase text-white bg-gradient-to-r from-[#1B2CC1]/35 via-[#7692FF]/25 to-[#ABD2FA]/20 hover:from-[#1B2CC1]/55 hover:via-[#7692FF]/40 hover:to-[#ABD2FA]/30 border border-[#ABD2FA]/35 hover:border-[#ABD2FA]/75 shadow-[0_0_20px_rgba(118,146,255,0.2),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:shadow-[0_0_32px_rgba(118,146,255,0.55),inset_0_1px_2px_rgba(255,255,255,0.4)] backdrop-blur-xl transition-all duration-300 flex items-center gap-2.5"
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
                  <span className="block w-1/3 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent blur-[1px]" />
                </motion.span>

                {/* Additional Hover Shine Sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none skew-x-12" />

                <span className="relative z-10 drop-shadow-sm">ENTER ECOSYSTEM</span>
                <ArrowRight className="relative z-10 w-4 h-4 text-[#ABD2FA] group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
              </button>
            </div>

            {/* MOBILE: Hamburger Trigger — bold solid blue, always visible */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex-shrink-0 flex flex-col justify-center items-center w-11 h-11 gap-[5px] rounded-xl focus:outline-none active:scale-95 transition-transform"
              style={{ background: '#1B2CC1', border: '1.5px solid rgba(171,210,250,0.6)' }}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'block', width: '20px', height: '2px', background: 'white', borderRadius: '99px', transformOrigin: 'center' }}
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
                style={{ display: 'block', width: '20px', height: '2px', background: 'white', borderRadius: '99px' }}
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'block', width: '20px', height: '2px', background: 'white', borderRadius: '99px', transformOrigin: 'center' }}
              />
            </button>
          </div>
        </div>

        {/* Progress Line */}
        <motion.div
          style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
          className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] pointer-events-none"
        />
      </header>

      {/* MOBILE: Full-Screen Luxury Editorial Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9997] md:hidden bg-[#050c26] flex flex-col justify-between pt-28 pb-10 px-8 overflow-y-auto"
          >
            {/* Ambient Background Light Blobs */}
            <div className="absolute top-24 right-0 w-80 h-80 bg-gradient-to-br from-[#1B2CC1]/30 to-[#7692FF]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-16 left-0 w-80 h-80 bg-[#ABD2FA]/15 rounded-full blur-[120px] pointer-events-none" />

            {/* Staggered Navigation Items in Bold, Large Times New Roman */}
            <motion.div
              variants={{
                closed: { opacity: 0 },
                open: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.1,
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col gap-5 relative z-10 my-auto"
            >
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    variants={{
                      closed: { opacity: 0, x: -30, filter: 'blur(8px)' },
                      open: { opacity: 1, x: 0, filter: 'blur(0px)' },
                    }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-baseline justify-between py-2 text-left transition-all border-b border-white/[0.08] hover:border-[#ABD2FA]/50"
                  >
                    <div className="flex items-baseline gap-4">
                      {/* Monospace Micro Number */}
                      <span className="text-xs sm:text-sm font-mono tracking-widest text-[#7692FF] font-semibold">
                        0{index + 1}
                      </span>

                      {/* Title in Betania Patmos Font */}
                      <span
                        style={{ fontFamily: "'Betania Patmos', cursive" }}
                        className={`text-4xl sm:text-5xl font-normal tracking-wide transition-colors ${
                          isActive
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ABD2FA] to-[#7692FF]'
                            : 'text-white/85 group-hover:text-white'
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>

                    <ArrowRight className="w-5 h-5 text-[#ABD2FA] opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-300" />
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Mobile Footer CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="relative z-10 pt-6 border-t border-[#7692FF]/20 mt-8"
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExploreEcosystem();
                }}
                className="relative group overflow-hidden w-full py-4 px-6 rounded-2xl font-display font-bold text-sm tracking-[0.15em] uppercase text-white bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] border border-[#ABD2FA]/40 shadow-[0_0_30px_rgba(118,146,255,0.4)] flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
              >
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
