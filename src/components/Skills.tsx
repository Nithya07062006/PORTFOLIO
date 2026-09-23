import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Database,
  Brain,
  Wrench,
  Globe,
  FileCode,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';
import skillsIllustration from '../assets/images/tech_skills_matrix_1788925593022.jpg';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSnippetKey, setActiveSnippetKey] = useState<string>('java');

  const categories = [
    { id: 'All', label: 'All Capabilities', icon: Sparkles },
    { id: 'Programming', label: 'Programming', icon: Code2 },
    { id: 'Web', label: 'Web Tech', icon: Globe },
    { id: 'Databases', label: 'Databases', icon: Database },
    { id: 'Core Concepts', label: 'Core CS & AI', icon: Brain },
    { id: 'Tools', label: 'Tools & DevOps', icon: Wrench },
  ];

  const filteredSkills =
    selectedCategory === 'All'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === selectedCategory);

  const codeSnippets: Record<
    string,
    { title: string; lang: string; code: string; notes: string }
  > = {
    java: {
      title: 'OOP & Collections (Java)',
      lang: 'Java',
      code: `package com.nithyashree.core;

import java.util.*;

public class PriorityTaskEngine<T> {
    private final PriorityQueue<T> taskQueue;

    public PriorityTaskEngine(Comparator<T> comparator) {
        this.taskQueue = new PriorityQueue<>(comparator);
    }

    public synchronized void enqueue(T item) {
        Objects.requireNonNull(item, "Task item must not be null");
        taskQueue.offer(item);
    }

    public synchronized Optional<T> dispatch() {
        return Optional.ofNullable(taskQueue.poll());
    }
}`,
      notes: 'Strong foundation in OOP principles, encapsulation, generics, and concurrent thread safety.',
    },
    python: {
      title: 'YOLOv12n Detection Pipeline (Python)',
      lang: 'Python',
      code: `import cv2
from ultralytics import YOLO

def process_marine_feed(video_path: str, confidence_threshold=0.60):
    detector = YOLO("yolov12n-marine.pt")
    cap = cv2.VideoCapture(video_path)

    while cap.isOpened():
        success, frame = cap.read()
        if not success:
            break

        results = detector(frame, conf=confidence_threshold)
        for r in results:
            boxes = r.boxes
            print(f"Detected {len(boxes)} debris clusters in frame.")
    cap.release()`,
      notes: 'Applied in Marine Debris & Pollution Monitoring system for coastal protection.',
    },
    sql: {
      title: 'Relational Schema & Indexing (MySQL)',
      lang: 'SQL',
      code: `CREATE TABLE product_price_history (
    price_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_asin VARCHAR(20) NOT NULL,
    recorded_price DECIMAL(10, 2) NOT NULL,
    stock_status ENUM('IN_STOCK', 'LOW_STOCK', 'OUT_OF_STOCK'),
    seller_rating DECIMAL(3, 2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_asin_timestamp (product_asin, timestamp)
) ENGINE=InnoDB;`,
      notes: 'Engineered for Amazon Price Intelligence pipeline to track dynamic price volatility.',
    },
    selenium: {
      title: 'Automated Headless Scraper (Selenium)',
      lang: 'Python',
      code: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless=new")
options.add_argument("--disable-blink-features=AutomationControlled")

driver = webdriver.Chrome(options=options)
driver.get("https://www.amazon.in/dp/EXAMPLE_ASIN")

price_tag = driver.find_element(By.CSS_SELECTOR, ".a-price-whole")
print("Extracted Current Market Price:", price_tag.text)
driver.quit()`,
      notes: 'Robust automation handling dynamic JavaScript rendering and anti-scraping checks.',
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050814]">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp;{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Core Competencies
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Hands-on capability spanning object-oriented Java, Python scripting, automated data scraping, AI/ML models, and relational &amp; NoSQL databases.
          </p>
        </div>

        {/* Futuristic Technical Illustration Showcase Banner */}
        <div
          id="skills-illustration-banner"
          className="relative w-full rounded-2xl overflow-hidden p-[1px] bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-blue-500/30 mb-14 shadow-2xl group"
        >
          <div className="relative w-full rounded-[15px] overflow-hidden bg-[#070c1e] grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 relative h-64 sm:h-80 overflow-hidden">
              <img
                src={skillsIllustration}
                alt="Futuristic technology illustration showing Java, Python, AI, databases, and software engineering visual nodes"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#070c1e]/40 to-[#070c1e] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070c1e] via-transparent to-transparent lg:hidden" />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-3">
                <Brain className="w-3.5 h-3.5 text-purple-400" />
                Interconnected Tech Stack
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Information Science Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Bridging software engineering paradigms, efficient data structures, machine learning architectures, and modern web environments.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'YOLOv12n', 'MySQL', 'MongoDB', 'Selenium', 'GitHub', 'DSA'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-700/80 text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                id={`filter-skills-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.name}
              id={`skill-card-${idx}`}
              className="p-5 rounded-2xl bg-[#0a0f24]/90 border border-slate-800/90 backdrop-blur-md hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider font-mono">
                    {skill.category}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      skill.levelLabel === 'Advanced'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : skill.levelLabel === 'Proficient'
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    }`}
                  >
                    {skill.levelLabel}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar with glowing indicator */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="text-slate-400 font-mono text-[11px]">Proficiency Level</span>
                  <span className="font-bold text-slate-200 font-mono text-xs">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-[1px] border border-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Code & Implementation Sandbox */}
        <div className="rounded-2xl bg-[#070c1e] border border-slate-800 shadow-2xl overflow-hidden">
          <div className="p-4 sm:p-5 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-blue-400" />
              <div>
                <h3 className="text-sm font-bold text-white">Code Implementation Sandbox</h3>
                <p className="text-[11px] text-slate-400">
                  Sample modules demonstrating practical programming patterns
                </p>
              </div>
            </div>

            {/* Snippet Switcher */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
              {Object.keys(codeSnippets).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSnippetKey(key)}
                  id={`code-sandbox-tab-${key}`}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                    activeSnippetKey === key
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {codeSnippets[key].lang}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-5 bg-[#050814] overflow-x-auto text-xs font-mono leading-relaxed text-slate-300 border-b lg:border-b-0 lg:border-r border-slate-800">
              <div className="flex items-center justify-between mb-3 text-slate-500 text-[11px]">
                <span>// {codeSnippets[activeSnippetKey].title}</span>
                <span className="text-blue-400">UTF-8</span>
              </div>
              <pre className="scrollbar-thin">
                <code>{codeSnippets[activeSnippetKey].code}</code>
              </pre>
            </div>

            <div className="lg:col-span-4 p-5 flex flex-col justify-between bg-slate-950/60">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Architecture Notes
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {codeSnippets[activeSnippetKey].notes}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Clean syntax and exception resilience</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tested on real workloads and datasets</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Modular, reusable code structure</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Language Target</span>
                <span className="text-white font-mono font-semibold">
                  {codeSnippets[activeSnippetKey].lang}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
