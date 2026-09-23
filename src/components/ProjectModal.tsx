import React, { useState } from 'react';
import {
  X,
  Sparkles,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Leaf,
  Wind,
  Search,
  RefreshCw,
  Sliders,
  Check,
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Simulator State for Marine Debris Detection
  const [debrisSample, setDebrisSample] = useState<'shore' | 'reef' | 'harbor'>('shore');
  const [isInferencing, setIsInferencing] = useState(false);

  // Simulator State for Amazon Scraper
  const [monitoredItem, setMonitoredItem] = useState<string>('B08N5WRWNW');
  const [priceAlertThreshold, setPriceAlertThreshold] = useState<number>(3999);
  const [simulatedAlertTriggered, setSimulatedAlertTriggered] = useState(false);

  // Simulator State for EcoSmart Dashboard
  const [dailyCommuteKm, setDailyCommuteKm] = useState<number>(18);
  const [energyUsageKwh, setEnergyUsageKwh] = useState<number>(120);
  const [dietProfile, setDietProfile] = useState<'low' | 'average' | 'heavy'>('average');

  const runDebrisInference = () => {
    setIsInferencing(true);
    setTimeout(() => {
      setIsInferencing(false);
    }, 600);
  };

  // Compute EcoSmart Footprint
  const calculateEcoFootprint = () => {
    const transportEmission = dailyCommuteKm * 0.192 * 30; // kg CO2 / month
    const energyEmission = energyUsageKwh * 0.82; // kg CO2 / month (standard grid factor)
    const dietEmission = dietProfile === 'low' ? 70 : dietProfile === 'average' ? 120 : 180;
    const totalMonthlyKg = Math.round(transportEmission + energyEmission + dietEmission);
    return {
      total: totalMonthlyKg,
      transport: Math.round(transportEmission),
      energy: Math.round(energyEmission),
      diet: dietEmission,
      aqiIndex: 68, // Moderate / Good for Chikkaballapur
    };
  };

  const ecoStats = calculateEcoFootprint();

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#0a0f24] border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden my-8"
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            id="close-project-modal-btn"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto scrollbar-thin">
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-950/60 border border-blue-500/30 text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Detailed Description */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-sm leading-relaxed">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
              System Architecture &amp; Methodology
            </h4>
            <p>{project.description}</p>
          </div>

          {/* Key Deliverables & Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
              Key Engineering Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Live Simulator Demonstration */}
          <div className="rounded-xl border border-blue-500/20 bg-slate-950/90 overflow-hidden">
            <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-blue-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Interactive System Simulator &amp; Telemetry
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                Prototype Verification Sandbox
              </span>
            </div>

            {/* SIMULATOR 1: Marine Debris Detection */}
            {project.demoType === 'yolo_detection' && (
              <div className="p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-mono">Sample Feed:</span>
                    {(['shore', 'reef', 'harbor'] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => setDebrisSample(s)}
                        className={`px-2.5 py-1 rounded text-xs font-mono capitalize transition-all ${
                          debrisSample === s
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        {s} Waters
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={runDebrisInference}
                    disabled={isInferencing}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isInferencing ? 'animate-spin' : ''}`} />
                    <span>Run YOLOv12n Inference</span>
                  </button>
                </div>

                {/* Simulated Detection Canvas */}
                <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 aspect-video max-h-56 flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/40 via-blue-950/20 to-slate-950 pointer-events-none" />

                  {/* Simulated Bounding Boxes */}
                  {debrisSample === 'shore' && (
                    <div className="relative w-full h-full">
                      <div className="absolute top-6 left-12 border-2 border-emerald-400 bg-emerald-500/10 px-2 py-1 rounded text-[10px] font-mono text-emerald-300">
                        Plastic Bottle (94.2%)
                      </div>
                      <div className="absolute bottom-10 right-20 border-2 border-amber-400 bg-amber-500/10 px-2 py-1 rounded text-[10px] font-mono text-amber-300">
                        Aluminum Can (91.0%)
                      </div>
                    </div>
                  )}

                  {debrisSample === 'reef' && (
                    <div className="relative w-full h-full">
                      <div className="absolute top-12 right-16 border-2 border-rose-400 bg-rose-500/10 px-2 py-1 rounded text-[10px] font-mono text-rose-300">
                        Ghost Fishing Net (88.5%)
                      </div>
                      <div className="absolute bottom-8 left-20 border-2 border-emerald-400 bg-emerald-500/10 px-2 py-1 rounded text-[10px] font-mono text-emerald-300">
                        Plastic Wrap (82.1%)
                      </div>
                    </div>
                  )}

                  {debrisSample === 'harbor' && (
                    <div className="relative w-full h-full">
                      <div className="absolute top-8 left-1/3 border-2 border-amber-400 bg-amber-500/10 px-2 py-1 rounded text-[10px] font-mono text-amber-300">
                        Metal Container (95.8%)
                      </div>
                      <div className="absolute bottom-12 right-1/4 border-2 border-emerald-400 bg-emerald-500/10 px-2 py-1 rounded text-[10px] font-mono text-emerald-300">
                        Micro-plastic cluster (86.4%)
                      </div>
                    </div>
                  )}
                </div>

                {/* Telemetry Output */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <div className="text-xs text-slate-400">Inference Speed</div>
                    <div className="text-base font-bold font-mono text-emerald-400">18.4 ms</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <div className="text-xs text-slate-400">Pollution Density</div>
                    <div className="text-base font-bold font-mono text-blue-400">
                      {debrisSample === 'harbor' ? 'High (8.4/m²)' : 'Moderate (3.8/m²)'}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <div className="text-xs text-slate-400">Model Architecture</div>
                    <div className="text-base font-bold font-mono text-purple-400">YOLOv12n</div>
                  </div>
                </div>
              </div>
            )}

            {/* SIMULATOR 2: Amazon Price Intelligence */}
            {project.demoType === 'price_scraper' && (
              <div className="p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-mono">Select Monitored ASIN:</span>
                    <select
                      value={monitoredItem}
                      onChange={(e) => setMonitoredItem(e.target.value)}
                      className="bg-slate-900 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1 text-xs font-mono"
                    >
                      <option value="B08N5WRWNW">ASIN: B08N5WRWNW (Portable SSD 1TB)</option>
                      <option value="B09G9FPHY6">ASIN: B09G9FPHY6 (Noise Canceling Headset)</option>
                      <option value="B07WHS7BPL">ASIN: B07WHS7BPL (Mechanical Keyboard)</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-mono">Alert Below ₹:</span>
                    <input
                      type="number"
                      value={priceAlertThreshold}
                      onChange={(e) => setPriceAlertThreshold(Number(e.target.value))}
                      className="w-24 bg-slate-900 text-slate-200 border border-slate-700 rounded-lg px-2 py-1 text-xs font-mono"
                    />
                  </div>
                </div>

                {/* Scraper Live Status Table */}
                <div className="rounded-lg bg-slate-900 border border-slate-800 overflow-hidden text-xs">
                  <div className="p-3 bg-slate-950 font-mono text-slate-400 flex items-center justify-between border-b border-slate-800">
                    <span>Selenium Headless Pipeline Monitor</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Active Worker
                    </span>
                  </div>

                  <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div>
                      <div className="text-slate-400 text-[11px]">Current Price</div>
                      <div className="text-lg font-bold text-emerald-400 font-mono">
                        {monitoredItem === 'B08N5WRWNW' ? '₹6,499' : monitoredItem === 'B09G9FPHY6' ? '₹2,999' : '₹4,199'}
                      </div>
                      <span className="text-[10px] text-slate-500">MSRP: ₹8,999</span>
                    </div>

                    <div>
                      <div className="text-slate-400 text-[11px]">30-Day Volatility</div>
                      <div className="text-base font-bold text-blue-400 font-mono flex items-center gap-1">
                        <TrendingDown className="w-4 h-4 text-emerald-400" />
                        -14.8%
                      </div>
                      <span className="text-[10px] text-slate-500">Historical Low: ₹5,999</span>
                    </div>

                    <div>
                      <div className="text-slate-400 text-[11px]">Customer Rating</div>
                      <div className="text-base font-bold text-amber-400 font-mono">
                        4.6 / 5.0
                      </div>
                      <span className="text-[10px] text-slate-500">18,420 Verified Reviews</span>
                    </div>

                    <div>
                      <div className="text-slate-400 text-[11px]">Stock Status</div>
                      <div className="text-base font-bold text-white font-mono">
                        In Stock
                      </div>
                      <span className="text-[10px] text-emerald-400">Fulfilled by Amazon</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-500/20 text-xs text-blue-300 flex items-center justify-between">
                  <span>
                    Price Alert Rule: Trigger webhook notification when listed price drops below ₹{priceAlertThreshold}.
                  </span>
                  <button
                    onClick={() => {
                      setSimulatedAlertTriggered(true);
                      setTimeout(() => setSimulatedAlertTriggered(false), 2500);
                    }}
                    className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
                  >
                    {simulatedAlertTriggered ? 'Triggered!' : 'Test Alert Trigger'}
                  </button>
                </div>
              </div>
            )}

            {/* SIMULATOR 3: EcoSmart Carbon Footprint Dashboard */}
            {project.demoType === 'ecosmart_dashboard' && (
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Commute */}
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Daily Commute</span>
                      <span className="text-blue-400 font-bold font-mono">{dailyCommuteKm} km</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="60"
                      value={dailyCommuteKm}
                      onChange={(e) => setDailyCommuteKm(Number(e.target.value))}
                      className="w-full accent-blue-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Energy */}
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Monthly Electricity</span>
                      <span className="text-purple-400 font-bold font-mono">{energyUsageKwh} kWh</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="300"
                      value={energyUsageKwh}
                      onChange={(e) => setEnergyUsageKwh(Number(e.target.value))}
                      className="w-full accent-purple-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Consumption Profile */}
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400 mb-1">Diet / Lifestyle Profile</div>
                    <div className="flex gap-1">
                      {(['low', 'average', 'heavy'] as const).map((d) => (
                        <button
                          key={d}
                          onClick={() => setDietProfile(d)}
                          className={`flex-1 py-1 rounded text-[11px] font-mono capitalize ${
                            dietProfile === d
                              ? 'bg-emerald-600 text-white font-bold'
                              : 'bg-slate-950 text-slate-400 hover:text-white'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footprint Telemetry Metrics */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xs text-slate-400">Estimated Monthly Footprint</div>
                    <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
                      {ecoStats.total}{' '}
                      <span className="text-xs font-normal text-slate-400">kg CO₂e</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-400 flex items-center justify-center gap-1">
                      <Wind className="w-3.5 h-3.5 text-blue-400" />
                      Live Regional AQI Index
                    </div>
                    <div className="text-2xl font-black text-blue-400 font-mono mt-1">
                      {ecoStats.aqiIndex}{' '}
                      <span className="text-xs font-normal text-emerald-400 font-sans font-semibold">
                        (Moderate/Good)
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-400 flex items-center justify-center gap-1">
                      <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                      Suggested Trees to Offset
                    </div>
                    <div className="text-2xl font-black text-purple-400 font-mono mt-1">
                      {Math.max(1, Math.round(ecoStats.total / 21))}{' '}
                      <span className="text-xs font-normal text-slate-400">Trees/year</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Candidate: Nithyashree H S • ISE Portfolio
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
