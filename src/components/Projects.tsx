import React, { useState } from 'react';
import {
  FolderGit2,
  Sparkles,
  ArrowUpRight,
  Eye,
  Cpu,
  Layers,
  CheckCircle2,
  Activity,
  Bot,
  Globe2,
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'AI & Computer Vision':
        return <Bot className="w-5 h-5 text-blue-400" />;
      case 'Automation & Web Scraping':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Globe2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Engineering Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Real-world systems built with computer vision, automated web scraping, and sustainability analytics.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative rounded-2xl bg-[#0a0f24]/90 border border-slate-800 backdrop-blur-xl p-6 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-[0_15px_35px_rgba(59,130,246,0.2)] transition-all duration-300"
            >
              <div>
                {/* Header with category and icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getProjectIcon(project.category)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Points */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span className="line-clamp-2">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/80">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  id={`view-project-details-${project.id}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 shadow-md group-hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect Architecture &amp; Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
