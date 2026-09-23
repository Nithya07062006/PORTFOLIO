import React from 'react';
import { Target, Compass, Sparkles, ArrowRight, Brain, Code2, Globe, Rocket } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import careerPathwayIllustration from '../assets/images/future_career_pathway_1788925608005.jpg';

export const FutureGoal: React.FC = () => {
  const pillarIcons = [Code2, Brain, Globe, Rocket];

  return (
    <section id="future-goal" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>Vision &amp; Career Aspirations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Future <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Goal</span> &amp; Direction
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Focused on mastering software engineering, applied artificial intelligence, and impactful industry contributions.
          </p>
        </div>

        {/* Main Future Goal Feature Card with Illustration */}
        <div className="rounded-3xl bg-[#0a0f24] border border-slate-800 overflow-hidden shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Illustration Showcase */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full overflow-hidden group">
              <img
                src={careerPathwayIllustration}
                alt="Inspiring futuristic career journey illustration with digital pathway, cloud architecture, and AI visualizations"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0f24]/30 to-[#0a0f24] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24] via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-slate-950/80 backdrop-blur-md border border-blue-500/30 text-blue-300">
                  Pathway: Engineering • AI • Growth
                </span>
              </div>
            </div>

            {/* Vision Content */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Strategic Career Trajectory</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 leading-tight">
                  Driving Meaningful Innovation Through Engineering
                </h3>

                {/* Exact user future goal statement */}
                <blockquote className="p-5 rounded-2xl bg-slate-900/80 border-l-4 border-blue-500 border-y border-r border-slate-800 text-slate-200 text-base sm:text-lg leading-relaxed italic mb-8 shadow-inner">
                  "{PORTFOLIO_DATA.personal.futureGoalText}"
                </blockquote>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  With a solid foundation in Information Science &amp; Engineering, my trajectory combines rigorous software architecture, hands-on computer vision modeling, and real-world system deployments that create measurable social and technological impact.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  id="future-goal-connect-btn"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-600/30 transition-all"
                >
                  <span>Discuss Opportunities</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <span className="text-xs text-slate-400 font-mono">
                  Target: Software Development &amp; AI Engineering
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Four Strategic Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.futureGoals.pillars.map((pillar, idx) => {
            const IconComponent = pillarIcons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0a0f24]/80 border border-slate-800 hover:border-blue-500/30 transition-all shadow-md group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
