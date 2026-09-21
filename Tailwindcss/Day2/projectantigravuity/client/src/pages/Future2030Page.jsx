import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Compass, 
  Cpu, 
  Bot, 
  Layers, 
  Sliders, 
  Code2, 
  Users, 
  ShieldCheck, 
  Building2, 
  GraduationCap, 
  Laptop, 
  CheckCircle2, 
  AlertCircle,
  Activity,
  ArrowRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis 
} from 'recharts';
import { api } from '../services/api';
import ScenarioBadge from '../components/ScenarioBadge';

export default function Future2030Page() {
  const [scenarios, setScenarios] = useState([]);
  const [futuresData, setFuturesData] = useState(null);
  const [selectedYear, setSelectedYear] = useState(2028);
  const [activeFutureTab, setActiveFutureTab] = useState('balanced');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [scenData, futData] = await Promise.all([
          api.getScenarios(),
          api.getFutures()
        ]);
        setScenarios(scenData || []);
        setFuturesData(futData || null);
      } catch (err) {
        console.error("Error loading 2030 futures data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const sliderData = futuresData?.timelineSliderData || [];
  const currentSliderState = sliderData.find(d => d.year === selectedYear) || sliderData[2] || {
    year: 2028,
    devManualWork: 35,
    aiCapability: 88,
    automation: 70,
    humanInvolvement: 65,
    agentUsage: 75,
    description: "Agentic teams manage end-to-end continuous integration and deployment. Developers focus heavily on system architecture and review."
  };

  const radarData = [
    { subject: 'AI Capability', value: currentSliderState.aiCapability },
    { subject: 'Automation', value: currentSliderState.automation },
    { subject: 'Agent Usage', value: currentSliderState.agentUsage },
    { subject: 'Human Involvement', value: currentSliderState.humanInvolvement },
    { subject: 'Manual Code Work', value: currentSliderState.devManualWork }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-3">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>PLANNED HORIZONS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          THE ROAD TO 2030
        </h1>
        <p className="text-lg font-semibold text-slate-200 mt-2">
          Nobody knows exactly what AI will look like in 2030.
        </p>
        <p className="text-sm text-slate-400 mt-1 max-w-2xl mx-auto">
          These are plausible scenarios and expected technological trajectories based on foundation model scaling, agentic protocols, and developer tool evolution.
        </p>
      </div>

      {/* ================= 8 SCENARIO CARDS ================= */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-2xl font-black text-white">8 Plausible 2030 Scenarios</h2>
            <p className="text-xs text-slate-400 mt-1">Exploration of architectural, societal, and engineering shifts.</p>
          </div>
          <ScenarioBadge type="Speculative Scenarios" size="sm" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scenarios.map((scen) => (
            <motion.div
              key={scen.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                      SCENARIO {scen.number}
                    </span>
                  </div>
                  <ScenarioBadge type={scen.status} size="sm" />
                </div>

                <h3 className="text-xl font-black text-white">{scen.title}</h3>
                <p className="text-xs font-semibold text-cyan-400/90 mt-1">{scen.subtitle}</p>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">{scen.description}</p>

                {/* Capabilities List */}
                <div className="mt-5 space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                    Expected Capabilities:
                  </span>
                  {scen.capabilities?.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/50 p-2 rounded-lg border border-slate-800/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Human Role Box */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 p-3 rounded-xl bg-purple-950/20 border border-purple-500/20">
                <span className="text-[10px] font-mono text-purple-300 uppercase tracking-wider font-bold block mb-0.5">
                  Human Role & Leverage:
                </span>
                <p className="text-xs text-purple-200">{scen.humanRole}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= 3 POSSIBLE 2030 FUTURES & INTERACTIVE SLIDER ================= */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl relative overflow-hidden">
        
        {/* Glow Background */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-10">
          <ScenarioBadge type="Interactive Projection Simulation" size="md" />
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
            Three Possible 2030 Trajectories
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Adjust the 2026–2030 horizon slider to simulate conceptual shifts in developer workflows, AI capabilities, and human involvement.
          </p>
        </div>

        {/* 3 Future Archetype Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {futuresData?.scenarios?.map((fut) => {
            const isActive = activeFutureTab === fut.id;
            return (
              <button
                key={fut.id}
                onClick={() => setActiveFutureTab(fut.id)}
                className={`p-5 rounded-2xl text-left border transition-all ${
                  isActive
                    ? 'bg-cyan-950/40 border-cyan-400 shadow-glow-cyan'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold uppercase ${isActive ? 'text-cyan-300' : 'text-slate-400'}`}>
                    {fut.name}
                  </span>
                  {isActive && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{fut.tagline}</h4>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{fut.summary}</p>
                
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-300 space-y-1">
                  <p><strong>Automation:</strong> {fut.automationLevel}</p>
                  <p><strong>Supervision:</strong> {fut.humanSupervision}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ================= 2026 - 2030 INTERACTIVE SLIDER ================= */}
        <div className="bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-slate-800">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-widest block">
                TIMELINE SIMULATION SLIDER
              </span>
              <h3 className="text-2xl font-black text-white mt-1">Year Horizon: {selectedYear}</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">Simulation Target:</span>
              <span className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/40">
                {selectedYear === 2030 ? "2030 FRONTIER" : `YEAR ${selectedYear}`}
              </span>
            </div>
          </div>

          {/* Range Slider */}
          <div className="space-y-2 mb-8">
            <input
              type="range"
              min={2026}
              max={2030}
              step={1}
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-xs font-mono font-bold text-slate-400 px-1">
              <span className={selectedYear === 2026 ? "text-cyan-400 font-black" : ""}>2026 (Agentic Dawn)</span>
              <span className={selectedYear === 2027 ? "text-cyan-400 font-black" : ""}>2027 (MCP Mesh)</span>
              <span className={selectedYear === 2028 ? "text-cyan-400 font-black" : ""}>2028 (Auto Pipelines)</span>
              <span className={selectedYear === 2029 ? "text-cyan-400 font-black" : ""}>2029 (Ambient OS)</span>
              <span className={selectedYear === 2030 ? "text-cyan-400 font-black" : ""}>2030 (Symbiosis)</span>
            </div>
          </div>

          {/* Current Year Narrative */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 mb-8 text-xs text-cyan-200">
            <strong>{selectedYear} Trajectory Summary:</strong> {currentSliderState.description}
          </div>

          {/* Animated Metrics & Visualizations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Metric Bars */}
            <div className="space-y-4 text-xs font-mono">
              
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>AI Autonomy & Capability</span>
                  <span className="text-cyan-400 font-bold">{currentSliderState.aiCapability}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${currentSliderState.aiCapability}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Software Pipeline Automation</span>
                  <span className="text-purple-400 font-bold">{currentSliderState.automation}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${currentSliderState.automation}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Agent-to-Agent Swarm Usage</span>
                  <span className="text-indigo-400 font-bold">{currentSliderState.agentUsage}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${currentSliderState.agentUsage}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Human Strategic Involvement</span>
                  <span className="text-emerald-400 font-bold">{currentSliderState.humanInvolvement}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-emerald-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${currentSliderState.humanInvolvement}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Manual Syntax Keystroke Coding</span>
                  <span className="text-amber-400 font-bold">{currentSliderState.devManualWork}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-amber-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${currentSliderState.devManualWork}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

            </div>

            {/* Radar Topology Chart */}
            <div className="h-64 sm:h-72 w-full flex items-center justify-center bg-slate-950/60 rounded-xl p-2 border border-slate-800/80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" />
                  <Radar name="Metric" dataKey="value" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

          </div>

          <p className="text-[11px] font-mono text-slate-500 text-center mt-6">
            * Conceptual simulation based on multi-variable technology adoption forecasting.
          </p>
        </div>

      </div>

    </div>
  );
}
