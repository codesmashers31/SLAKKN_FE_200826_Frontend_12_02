import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Flame, 
  ShieldCheck, 
  Cpu, 
  Compass, 
  Bot, 
  Terminal, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  ChevronRight,
  Code2,
  Users
} from 'lucide-react';
import { api } from '../services/api';
import CompanyBadge from '../components/CompanyBadge';
import ScenarioBadge from '../components/ScenarioBadge';

export default function HomePage() {
  const [companies, setCompanies] = useState([]);
  const [scenarios, setScenarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [compData, scenData] = await Promise.all([
          api.getCompanies(),
          api.getScenarios()
        ]);
        setCompanies(compData || []);
        setScenarios(scenData || []);
      } catch (err) {
        console.error("Error loading home data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="relative min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Small Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>THE AI RACE HAS STARTED</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-5xl mx-auto"
          >
            THE AI WAR <br />
            IS CHANGING <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 cyber-glow-text">
              EVERYTHING.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto space-y-2"
          >
            <p className="text-xl sm:text-2xl font-bold text-slate-200">
              <span className="text-emerald-400">OpenAI</span>. <span className="text-amber-400">Anthropic</span>. <span className="text-indigo-400">Google</span>.
            </p>
            <p className="text-base sm:text-lg text-slate-400 font-medium">
              Three companies. Three approaches. One rapidly changing future toward <span className="text-cyan-300 font-mono font-bold">2030</span>.
            </p>
            <p className="text-sm sm:text-base text-slate-400 pt-2 leading-relaxed">
              Explore how frontier AI could reshape software development, careers, companies, and the way humans collaborate with autonomous intelligence.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/ai-war"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 shadow-glow-cyan hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore AI War</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/developer-2030"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-slate-900/90 border border-slate-700 hover:border-cyan-500/50 hover:text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Developer Roadmap</span>
            </Link>
          </motion.div>

          {/* Live Intelligence Stats Ticker */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="glass-panel p-4 rounded-xl border border-slate-800 text-left">
              <div className="text-xs font-mono text-slate-400 uppercase">Weekly Active Users</div>
              <div className="text-xl font-bold text-white mt-1">300M+</div>
              <div className="text-[11px] text-emerald-400 mt-0.5">ChatGPT ecosystem</div>
            </div>
            <div className="glass-panel p-4 rounded-xl border border-slate-800 text-left">
              <div className="text-xs font-mono text-slate-400 uppercase">Coding Benchmark</div>
              <div className="text-xl font-bold text-white mt-1">SWE-bench #1</div>
              <div className="text-[11px] text-amber-400 mt-0.5">Claude 3.7 Sonnet</div>
            </div>
            <div className="glass-panel p-4 rounded-xl border border-slate-800 text-left">
              <div className="text-xs font-mono text-slate-400 uppercase">Max Context Window</div>
              <div className="text-xl font-bold text-white mt-1">2,000,000+</div>
              <div className="text-[11px] text-indigo-400 mt-0.5">Tokens in Gemini 1.5/2.0</div>
            </div>
            <div className="glass-panel p-4 rounded-xl border border-slate-800 text-left">
              <div className="text-xs font-mono text-slate-400 uppercase">Agent Protocol</div>
              <div className="text-xl font-bold text-white mt-1">Open MCP</div>
              <div className="text-[11px] text-cyan-400 mt-0.5">Universal standard</div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3 FLOATING COMPANY CARDS ================= */}
      <section className="py-16 bg-[#0B1020]/60 relative z-10 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4 text-purple-400" />
              <span>Frontier AI Titans</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Three Divergent Paths to High Intelligence
            </h2>
            <p className="text-sm text-slate-400 mt-3">
              Each frontier lab holds distinct architectural strengths, research philosophies, and ecosystem dominance. Neither is the absolute winner across all axes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => {
              const isEmerald = company.id === "openai";
              const isAmber = company.id === "anthropic";
              const isGemini = company.id === "google";

              return (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`glass-panel rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                    isEmerald 
                      ? 'border-emerald-500/30 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]' 
                      : isAmber 
                      ? 'border-amber-500/30 hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]' 
                      : 'border-indigo-500/30 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]'
                  }`}
                >
                  <div>
                    {/* Card Top */}
                    <div className="flex items-center justify-between mb-4">
                      <CompanyBadge company={company.name} size="md" />
                      <span className="text-xs font-mono text-slate-500">Founded {company.founded}</span>
                    </div>

                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {company.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-medium">
                      {company.tagline}
                    </p>

                    <div className="mt-6 space-y-4 text-xs">
                      
                      {/* Main Ecosystem */}
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="font-mono text-slate-400 text-[10px] uppercase block mb-1">
                          Main AI Ecosystem
                        </span>
                        <p className="text-slate-200 font-semibold">{company.ecosystem}</p>
                      </div>

                      {/* Primary Focus */}
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="font-mono text-slate-400 text-[10px] uppercase block mb-1">
                          Primary Focus Areas
                        </span>
                        <p className="text-slate-300">{company.primaryFocus}</p>
                      </div>

                      {/* Developer Platform */}
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="font-mono text-slate-400 text-[10px] uppercase block mb-1">
                          Developer Platform
                        </span>
                        <p className="text-slate-300">{company.developerPlatform}</p>
                      </div>

                      {/* Agent Ecosystem */}
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="font-mono text-slate-400 text-[10px] uppercase block mb-1">
                          Agent Ecosystem & Tools
                        </span>
                        <p className="text-slate-300">{company.agentEcosystem}</p>
                      </div>

                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-8 pt-4 border-t border-slate-800">
                    <Link
                      to="/ai-war"
                      className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>View Detailed Capability Matrix</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 2030 SCENARIOS PREVIEW ================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <ScenarioBadge type="Plausible 2030 Scenarios" size="md" />
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
              The Evolution of Work & Development
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Previewing the key technological transformations expected to mature between 2026 and 2030.
            </p>
          </div>
          <Link
            to="/future-2030"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-bold hover:bg-cyan-500/20 transition-all self-start md:self-auto"
          >
            <span>Explore All 8 Scenarios</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.slice(0, 4).map((scen) => (
            <div key={scen.id} className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-cyan-400 text-xs font-bold">SCENARIO {scen.number}</span>
                  <ScenarioBadge type={scen.status} size="sm" />
                </div>
                <h3 className="text-lg font-bold text-white">{scen.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{scen.subtitle}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <Link to="/future-2030" className="text-xs text-slate-300 hover:text-cyan-300 flex items-center gap-1 font-medium">
                  <span>Read Breakdown</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DEVELOPER SURVIVAL TEASER ================= */}
      <section className="py-16 bg-gradient-to-r from-cyan-950/20 via-purple-950/20 to-pink-950/20 border-t border-slate-800 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <Terminal className="w-4 h-4" />
            <span>Developer Survival Guide</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Will AI Replace Software Developers?
          </h2>
          <p className="text-base text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            AI is not replacing software engineering — it is changing what developers do. The highest-leverage engineers of 2030 will combine strong computing fundamentals with agent orchestration.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/developer-2030"
              className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-glow-cyan hover:bg-cyan-400 transition-all"
            >
              Read Full Survival Guide
            </Link>
            <Link
              to="/skills"
              className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-extrabold text-xs tracking-wider uppercase hover:border-cyan-400 transition-all"
            >
              Test Your Skill Gap
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
