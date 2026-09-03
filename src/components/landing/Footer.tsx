import React from 'react';
import { VeloraLogo } from '../brand/VeloraLogo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-[#7692FF]/20 bg-[#050c26] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#7692FF]/15">
          <div>
            <VeloraLogo size="md" />
            <p className="text-xs font-mono text-[#ABD2FA] mt-2 uppercase tracking-[0.2em]">
              Infinite Opportunities · Limitless Wealth
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-sans text-slate-300">
            {['Vision', 'Ecosystem', 'AI Agent', 'Roadmap', 'Upcoming'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="hover:text-[#ABD2FA] transition-colors"
              >
                {item}
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#091540] border border-[#7692FF]/30 hover:border-[#ABD2FA] text-slate-300 hover:text-white transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] text-slate-400 font-sans">
          <p className="max-w-3xl leading-relaxed">
            <strong className="text-slate-300">Disclaimer:</strong> This web application is designed from the official Roadmap Velora document. All data is simulated. Products marked "Coming Soon" are not yet active.
          </p>
          <p className="shrink-0 font-mono">© {new Date().getFullYear()} Velora Global</p>
        </div>
      </div>
    </footer>
  );
};
