import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Sparkles, Building2, Brain, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#050814]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work &amp; Professional Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span> &amp; Training
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Hands-on internship background and specialized industry-sponsored AI engineering programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Internship Card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0a0f24] border border-slate-800 p-8 flex flex-col justify-between hover:border-blue-500/30 transition-all shadow-xl">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {PORTFOLIO_DATA.experience[0].type}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  {PORTFOLIO_DATA.experience[0].period}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-[1px]">
                  <div className="w-full h-full bg-[#070c1e] rounded-[11px] flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {PORTFOLIO_DATA.experience[0].role}
                  </h3>
                  <div className="text-sm font-semibold text-blue-400">
                    {PORTFOLIO_DATA.experience[0].organization}
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {PORTFOLIO_DATA.experience[0].description}
              </p>

              <div className="space-y-3">
                {PORTFOLIO_DATA.experience[0].bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-2">
              <span className="text-xs text-slate-400 self-center mr-2">Technologies Applied:</span>
              {['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Debugging'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-700/60 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Current Specialized Learning Card */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#0c0e29] via-[#0a0f24] to-[#120f2e] border border-purple-500/30 p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  Specialized AI Track
                </span>
                <span className="inline-flex items-center text-xs font-semibold text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1.5" />
                  {PORTFOLIO_DATA.currentLearning.status}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {PORTFOLIO_DATA.currentLearning.program}
                  </h3>
                  <div className="text-xs text-purple-400">Industry AI Training</div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {PORTFOLIO_DATA.currentLearning.description}
              </p>

              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Core Program Modules
                </h4>
                {PORTFOLIO_DATA.currentLearning.keyPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-950/60 border border-purple-900/30 text-xs text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-purple-900/40 flex items-center justify-between text-xs text-slate-400">
              <span>Practical ML Application</span>
              <span className="text-purple-300 font-semibold font-mono">Continuous Upskilling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
