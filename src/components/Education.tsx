import React from 'react';
import { GraduationCap, Award, Star, Calendar, CheckCircle2, Trophy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-blue-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-purple-400" />;
      case 'Star':
        return <Star className="w-6 h-6 text-emerald-400" />;
      default:
        return <Trophy className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">&amp; Qualifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Consistently high academic track record spanning collegiate engineering and secondary education.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PORTFOLIO_DATA.education.map((item, index) => (
            <div
              key={index}
              id={`education-card-${index}`}
              className="rounded-2xl bg-[#0a0f24] border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-[0_12px_30px_rgba(59,130,246,0.15)] transition-all duration-300 relative group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    {item.period}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-2">
                    {item.scoreLabel}: {item.score}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.institution}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                    {item.degree}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Merit Standing</span>
                <span className="text-emerald-400 font-bold">{item.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
