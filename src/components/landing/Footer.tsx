import React from 'react';
import { VeloraLogo } from '../brand/VeloraLogo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#7692FF]/20 bg-[#050c26] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#7692FF]/15">
          <div>
            <VeloraLogo size="md" />
            <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-md leading-relaxed">
              Building the world's complete finance ecosystem uniting markets, technology, capital, and education.
            </p>
            <p className="text-xs font-semibold text-[#ABD2FA] mt-1 uppercase tracking-wider font-mono">
              Infinite Opportunities. Limitless Wealth.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300">
            <a href="#vision" className="hover:text-[#ABD2FA] transition-colors">Vision</a>
            <a href="#ecosystem" className="hover:text-[#ABD2FA] transition-colors">Ecosystem</a>
            <a href="#ai-agent" className="hover:text-[#ABD2FA] transition-colors">AI Agent</a>
            <a href="#roadmap" className="hover:text-[#ABD2FA] transition-colors">Roadmap</a>
            <a href="#upcoming" className="hover:text-[#ABD2FA] transition-colors">Upcoming</a>
            <a href="#global-finance" className="hover:text-[#ABD2FA] transition-colors">Global Network</a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#091540] border border-[#7692FF]/30 hover:border-[#ABD2FA] text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p className="max-w-3xl leading-relaxed">
            <strong className="text-slate-300">Disclaimer:</strong> This web application is an interactive digital realization designed strictly from the official <em>Roadmap Velora</em> document. All trading statistics, market figures, and forecasts represent simulated presentation data. Products marked "Coming Soon" or "Revealing Soon" are upcoming and not currently active for real transactions.
          </p>
          <p className="shrink-0 text-slate-400 font-mono">
            © {new Date().getFullYear()} Velora Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
