import React from 'react';
import { Trophy, Award, Zap, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (id: string) => {
    switch (id) {
      case 'cgpa':
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'hack2future':
        return <Zap className="w-6 h-6 text-blue-400" />;
      case 'wipro-workshop':
        return <Award className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#050814]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors &amp; Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-purple-400 bg-clip-text text-transparent">Achievements</span> &amp; Activities
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Academic distinction, national hackathon participation, and technical workshop training.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.achievements.map((item, index) => (
            <div
              key={item.id}
              id={`achievement-card-${item.id}`}
              className="rounded-2xl bg-[#0a0f24] border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/40 hover:shadow-[0_12px_30px_rgba(245,158,11,0.15)] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getAchievementIcon(item.id)}
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-amber-300">
                    {item.tag}
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Accomplishment</span>
                </div>
                <span className="text-xs font-mono font-bold text-white bg-slate-900 px-2 py-1 rounded border border-slate-700">
                  {item.dateOrMetric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
