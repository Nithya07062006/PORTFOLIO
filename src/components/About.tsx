import React from 'react';
import {
  User,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Layers,
  Cpu,
  Workflow,
  Compass,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Information Science and Engineering undergraduate dedicated to building impactful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story & Profile */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-2xl bg-[#0a0f24]/80 border border-slate-800/80 backdrop-blur-xl shadow-xl hover:border-blue-500/30 transition-all">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-[1px]">
                  <div className="w-full h-full bg-[#070c1e] rounded-[11px] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{PORTFOLIO_DATA.personal.name}</h3>
                  <p className="text-sm text-blue-400">{PORTFOLIO_DATA.personal.role}</p>
                </div>
              </div>

              {/* Tagline block */}
              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 text-blue-200 text-sm italic mb-6">
                "{PORTFOLIO_DATA.personal.tagline}"
              </div>

              {/* Exact user profile summary text */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  {PORTFOLIO_DATA.personal.profileSummary}
                </p>
                <p className="text-slate-400">
                  Currently pursuing my Bachelor of Technology in Information Science and Engineering at{' '}
                  <span className="text-white font-medium">Presidency University, Bengaluru</span> (2023–2027),
                  maintaining a strong cumulative academic standing of{' '}
                  <span className="text-emerald-400 font-bold">9.24 CGPA</span>.
                </p>
                <p className="text-slate-400">
                  My technical exploration spans core Object-Oriented Programming in Java, automated data extraction with Python and Selenium,
                  computer vision models such as YOLO for environmental protection, and scalable database systems with MySQL and MongoDB.
                </p>
              </div>
            </div>

            {/* Core Values / Competencies Bar */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
                  <Workflow className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Practical Focus</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Real-world AI &amp; automation systems</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Data &amp; AI Stack</h4>
                  <p className="text-xs text-slate-400 mt-0.5">YOLOv12n, OpenCV, SQL, NoSQL</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Continuous Growth</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Samsung Innovation Campus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Details & Academic Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {/* Quick Contact & Info Card */}
            <div className="p-6 rounded-2xl bg-[#0a0f24]/80 border border-slate-800/80 backdrop-blur-xl shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Information Snapshot</span>
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    Location
                  </span>
                  <span className="text-white font-medium">{PORTFOLIO_DATA.personal.location}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    Degree
                  </span>
                  <span className="text-white font-medium text-right text-xs sm:text-sm">
                    B.Tech ISE (2023–2027)
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-indigo-400" />
                    Email
                  </span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-blue-400 hover:underline font-mono text-xs truncate max-w-[180px] sm:max-w-[220px]"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    Phone
                  </span>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                    className="text-slate-200 font-mono text-xs hover:text-emerald-400 transition-colors"
                  >
                    {PORTFOLIO_DATA.personal.formattedPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Current Learning Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/40 via-slate-900/80 to-blue-950/40 border border-purple-500/30 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  {PORTFOLIO_DATA.currentLearning.badge}
                </span>
                <span className="inline-flex items-center text-xs font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1.5" />
                  {PORTFOLIO_DATA.currentLearning.status}
                </span>
              </div>

              <h4 className="text-base font-bold text-white mb-2">
                {PORTFOLIO_DATA.currentLearning.program}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {PORTFOLIO_DATA.currentLearning.description}
              </p>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                {PORTFOLIO_DATA.currentLearning.keyPillars.slice(0, 4).map((pillar, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-950/50 border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="truncate">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
