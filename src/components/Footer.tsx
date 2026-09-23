import React from 'react';
import { ArrowUp, Code2, Heart, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Future Goal', href: '#future-goal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-[#04060f] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-[1px] shadow-lg shadow-blue-500/20">
              <div className="w-full h-full bg-[#070c1e] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </div>
              <p className="text-xs text-slate-400">
                Information Science &amp; Engineering • Presidency University
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            {navLinks.slice(0, 7).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-blue-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all shadow-md group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <span>{PORTFOLIO_DATA.personal.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
