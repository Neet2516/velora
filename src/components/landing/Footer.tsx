import React from 'react';
import { VeloraLogo } from '../brand/VeloraLogo';
import { ArrowUp } from 'lucide-react';
import { useLenis } from '../../hooks/useLenis';

export const Footer: React.FC = () => {
  const { scrollTo } = useLenis();
  const scrollToTop = () => scrollTo(0);

  return (
    <footer className="relative border-t border-[#7692FF]/20 bg-[#050c26] py-10 px-4 sm:px-8 lg:px-12">
      <div className="w-full max-w-[1700px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <VeloraLogo size="md" />
            <p className="text-xs font-mono text-[#ABD2FA] mt-2 uppercase tracking-[0.2em]">
              Infinite Opportunities · Limitless Wealth
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span>© 2026 Velora Global. All Rights Reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#091540] border border-[#7692FF]/30 hover:border-[#ABD2FA] text-slate-300 hover:text-white transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
