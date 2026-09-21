import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  ArrowDown, 
  Layers, 
  Cpu, 
  Bot, 
  ShieldCheck, 
  Workflow, 
  UserCheck, 
  HelpCircle,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { api } from '../services/api';
import ScenarioBadge from '../components/ScenarioBadge';

export default function Developer2030Page() {
  const [roadmap, setRoadmap] = useState(null);
  const [expandedLevel, setExpandedLevel] = useState('LEVEL 01');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRoadmap() {
      try {
        const data = await api.getDeveloperRoadmap();
        setRoadmap(data || null);
      } catch (err) {
        console.error("Error loading developer roadmap:", err);
      } finally {
        setLoading(false);
      }
    }
    loadRoadmap();
  }, []);

  const evolutionLadder = roadmap?.evolutionLadder || [];
  const levels = roadmap?.levels || [];
  const workflows = roadmap?.workflows || { old: [], future: [] };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-3">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>THE DEVELOPER SURVIVAL GUIDE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          WILL AI REPLACE DEVELOPERS?
        </h1>
        
        {/* Core Thesis Box */}
        <div className="mt-6 p-6 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 text-left sm:text-center max-w-2xl mx-auto shadow-[0_0_30px_rgba(6,182,212,0.15)]">
          <p className="text-lg sm:text-xl font-bold text-white">
            AI is not eliminating developers. AI is changing what developers do.
          </p>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            The strongest future engineers will combine bedrock computing fundamentals (data structures, systems architecture, security) with autonomous AI agent orchestration and domain taste.
          </p>
        </div>
      </div>

      {/* ================= 5-STAGE DEVELOPER TRANSFORMATION ================= */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
            EVOLUTIONARY LADDER
          </span>
          <h2 className="text-3xl font-black text-white mt-1">The 5 Stages of Developer Evolution</h2>
          <p className="text-xs text-slate-400 mt-1">From manual syntax writer to AI system architect.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {evolutionLadder.map((stage, idx) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-5 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-bold uppercase text-slate-400">
                    {stage.stage}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${stage.color}`}>
                    {stage.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{stage.description}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="text-[10px] text-slate-500 uppercase block mb-1">Key Arsenal:</span>
                <div className="flex flex-wrap gap-1">
                  {stage.primaryTools?.map((tool, tIdx) => (
                    <span key={tIdx} className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= 7-LEVEL CURRICULUM ROADMAP ================= */}
      <div className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-800 gap-4">
          <div>
            <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
              MASTERY CURRICULUM
            </span>
            <h2 className="text-3xl font-black text-white mt-1">What Developers Should Learn</h2>
            <p className="text-xs text-slate-400 mt-1">7-level structured roadmap to thrive through 2030.</p>
          </div>
          <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
            7 Sequential Modules
          </span>
        </div>

        <div className="space-y-4">
          {levels.map((level) => {
            const isExpanded = expandedLevel === level.level;

            return (
              <div
                key={level.level}
                className={`glass-panel rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded ? 'border-cyan-500/50 shadow-glow-cyan/50' : 'border-slate-800'
                }`}
              >
                {/* Level Accordion Header */}
                <button
                  onClick={() => setExpandedLevel(isExpanded ? '' : level.level)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {level.level}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">{level.title}</h3>
                      <p className="text-xs text-slate-400 hidden sm:block">{level.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400 hidden md:block">{level.status}</span>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-cyan-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </div>
                </button>

                {/* Level Skills Grid */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/80">
                    <p className="text-xs text-slate-300 mb-4 sm:hidden">{level.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {level.skills?.map((sk, sIdx) => (
                        <div key={sIdx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-white">{sk.name}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                              {sk.tag}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400">{sk.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= OLD WORKFLOW VS FUTURE WORKFLOW ================= */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <ScenarioBadge type="Workflow Paradigm Shift" size="md" />
          <h2 className="text-3xl font-black text-white mt-3">
            Old Developer vs Future Developer Workflow
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Possible workflow evolution showing how human engineers transition from writing raw code to orchestrating specialized AI agent verification pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Traditional Workflow */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800">
              <span className="font-mono text-xs font-bold uppercase text-slate-400">TRADITIONAL WORKFLOW</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">Manual Centric</span>
            </div>

            <div className="space-y-4">
              {workflows.old?.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-mono text-xs text-slate-300 shrink-0">
                    {step.step}
                  </div>
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{step.label}</span>
                      <span className="text-[10px] font-mono text-slate-500">{step.role}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Workflow */}
          <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-cyan-500/30">
              <span className="font-mono text-xs font-bold uppercase text-cyan-300">2030 AGENTIC WORKFLOW</span>
              <ScenarioBadge type="Expected Direction" size="sm" />
            </div>

            <div className="space-y-4">
              {workflows.future?.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center font-mono text-xs text-cyan-300 shrink-0 font-bold">
                    {step.step}
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-cyan-500/20 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{step.label}</span>
                      <span className="text-[10px] font-mono text-cyan-400 font-bold">{step.role}</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <p className="text-[11px] font-mono text-slate-500 text-center mt-6">
          * This represents a plausible workflow evolution based on current agentic engineering trends, not a guaranteed certainty.
        </p>
      </div>

    </div>
  );
}
