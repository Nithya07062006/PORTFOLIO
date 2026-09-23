import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Sparkles,
  ArrowRight,
  Database,
  BrainCircuit,
  GraduationCap,
  MapPin,
  FileCode2,
  Copy,
  Check,
  Cpu,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import heroVisual from '../assets/images/workspace_hero_visual_1788925630850.jpg';

export const Hero: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'java' | 'python'>('java');
  const [copiedCode, setCopiedCode] = useState(false);

  const javaSnippet = `// Nithyashree H S — Information Science & Engineering
public class SoftwareProfessional {
    private final String name = "Nithyashree H S";
    private final double academicCGPA = 9.24;
    private final String[] coreStack = { "Java", "Python", "AI/ML", "Web", "SQL" };

    public void buildImpactfulSolutions() {
        System.out.println("Engineering practical, intelligent systems.");
    }
}`;

  const pythonSnippet = `# Marine Debris & AI Intelligence Pipeline
import cv2
from ultralytics import YOLO

class DebrisDetector:
    def __init__(self, weights="yolov12n.pt"):
        self.model = YOLO(weights)
        self.classes = ["plastic", "metal", "organic"]

    def evaluate_marine_pollution(self, stream_source):
        return self.model.predict(source=stream_source, conf=0.65)`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeCodeTab === 'java' ? javaSnippet : pythonSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid line pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio, Headline, Status, Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Status Pill */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs text-blue-300 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)] mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span className="font-semibold tracking-wide">Information Science &amp; Engineering</span>
              <span className="text-slate-500">•</span>
              <span className="text-purple-300 font-medium">B.Tech 2023–2027</span>
            </div>

            {/* Main Name Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
              <span className="block">Hello, I'm</span>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </h1>

            {/* Subtitle & Role */}
            <p className="text-lg sm:text-xl font-medium text-slate-300 mb-4 flex items-center flex-wrap gap-2">
              <span>{PORTFOLIO_DATA.personal.subRole}</span>
              <span className="text-blue-500">•</span>
              <span className="text-slate-400 text-base flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-400 inline" />
                {PORTFOLIO_DATA.personal.location}
              </span>
            </p>

            {/* Tagline */}
            <div className="relative pl-4 border-l-2 border-gradient mb-6">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"></div>
              <p className="text-base sm:text-lg text-slate-300 italic font-normal leading-relaxed">
                "{PORTFOLIO_DATA.personal.tagline}"
              </p>
            </div>

            {/* Short Profile Abstract */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-xl">
              {PORTFOLIO_DATA.personal.profileSummary}
            </p>

            {/* Metrics Ribbon */}
            <div
              id="hero-metrics-ribbon"
              className="grid grid-cols-3 gap-3 w-full max-w-lg mb-8"
            >
              <div className="p-3 rounded-xl bg-slate-900/70 border border-blue-500/20 backdrop-blur-md">
                <div className="text-2xl font-black text-blue-400 flex items-center gap-1">
                  9.24
                  <span className="text-xs font-normal text-slate-400">CGPA</span>
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                  Academic Merit
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-purple-500/20 backdrop-blur-md">
                <div className="text-2xl font-black text-purple-400 flex items-center gap-1">
                  AI / ML
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                  Samsung Campus
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-emerald-500/20 backdrop-blur-md">
                <div className="text-2xl font-black text-emerald-400 flex items-center gap-1">
                  100%
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                  Class X Honor
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                id="hero-cta-projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/40 shadow-sm transition-all duration-300 w-full sm:w-auto"
              >
                <span>Get in Touch</span>
              </a>

              <a
                href="#skills"
                id="hero-cta-skills"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs text-blue-400 hover:text-blue-300 hover:bg-blue-950/40 border border-transparent hover:border-blue-800/50 transition-all w-full sm:w-auto"
              >
                <Code className="w-3.5 h-3.5" />
                <span>View Tech Stack</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Futuristic Illustration Showcase & Code Box */}
          <div className="lg:col-span-6 flex flex-col gap-5 items-center relative">
            {/* The Main Generated Illustration Container */}
            <div
              id="hero-illustration-card"
              className="relative w-full rounded-2xl overflow-hidden p-[1px] bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-blue-900/20 shadow-[0_20px_50px_rgba(5,15,40,0.8)] group"
            >
              <div className="relative w-full rounded-[15px] overflow-hidden bg-[#070c1e]">
                {/* Visual Image with Fallback and Referrer Policy */}
                <img
                  src={heroVisual}
                  alt="Futuristic portfolio illustration of Nithyashree H S working in an advanced digital software and AI workspace"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Subtle gradient overlay to tie into navy canvas */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Floating Telemetry Badges over the Illustration */}
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md border border-blue-500/30 text-blue-300 shadow-md">
                    <BrainCircuit className="w-3.5 h-3.5 text-blue-400" />
                    AI &amp; Vision Systems
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md border border-purple-500/30 text-purple-300 shadow-md">
                    <Database className="w-3.5 h-3.5 text-purple-400" />
                    MySQL &amp; MongoDB
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between p-3 rounded-xl bg-[#070c1e]/90 backdrop-blur-md border border-slate-700/60 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Presidency University</div>
                      <div className="text-[11px] text-slate-400">B.Tech ISE (2023–2027)</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-black text-emerald-400">CGPA 9.24</div>
                    <div className="text-[10px] text-slate-400">High Standing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Futuristic Code Console */}
            <div
              id="hero-code-console"
              className="w-full rounded-xl bg-slate-950/90 border border-slate-800 shadow-xl overflow-hidden backdrop-blur-md"
            >
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="h-4 w-[1px] bg-slate-800 mx-1" />
                  {/* Language Tabs */}
                  <button
                    onClick={() => setActiveCodeTab('java')}
                    id="code-tab-java"
                    className={`px-2.5 py-1 rounded-md transition-colors font-mono flex items-center gap-1.5 ${
                      activeCodeTab === 'java'
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <FileCode2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>SoftwareProfessional.java</span>
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('python')}
                    id="code-tab-python"
                    className={`px-2.5 py-1 rounded-md transition-colors font-mono flex items-center gap-1.5 ${
                      activeCodeTab === 'python'
                        ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                    <span>DebrisDetector.py</span>
                  </button>
                </div>

                <button
                  onClick={handleCopyCode}
                  id="copy-hero-code-btn"
                  className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors flex items-center gap-1 text-[11px]"
                  title="Copy code snippet"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Pre Block */}
              <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-slate-300 max-h-48 scrollbar-thin">
                <pre>
                  <code>{activeCodeTab === 'java' ? javaSnippet : pythonSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
