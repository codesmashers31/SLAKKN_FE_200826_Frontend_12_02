import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Sparkles, 
  Cpu, 
  Layers, 
  Terminal, 
  Bot, 
  Flame, 
  ShieldAlert, 
  Globe, 
  MessageSquare,
  CheckCircle2,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { api } from '../services/api';
import ScenarioBadge from '../components/ScenarioBadge';

export default function TimelinePage() {
  const [timeline, setTimeline] = useState([]);
  const [filterEra, setFilterEra] = useState('All'); // 'All', 'Historical', 'Future'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTimeline() {
      try {
        const data = await api.getTimeline();
        setTimeline(data || []);
      } catch (err) {
        console.error("Error loading timeline:", err);
      } finally {
        setLoading(false);
      }
    }
    loadTimeline();
  }, []);

  const filteredTimeline = timeline.filter((item) => {
    if (filterEra === 'Historical') return !item.isProjected;
    if (filterEra === 'Future') return item.isProjected;
    return true;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-3">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>EVOLUTIONARY CHRONOLOGY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          AI Evolution Timeline (2020 – 2030)
        </h1>
        <p className="text-base text-slate-400 mt-3">
          Trace the trajectory from raw language model emergence to autonomous multi-agent software ecosystems and speculative 2030 frontiers.
        </p>
      </div>

      {/* Era Toggle Controls */}
      <div className="flex items-center justify-center gap-3 mb-14">
        <button
          onClick={() => setFilterEra('All')}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
            filterEra === 'All'
              ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
          }`}
        >
          All Eras (2020 – 2030)
        </button>
        <button
          onClick={() => setFilterEra('Historical')}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
            filterEra === 'Historical'
              ? 'bg-slate-700 text-white shadow-lg'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
          }`}
        >
          Historical Era (2020 – 2026)
        </button>
        <button
          onClick={() => setFilterEra('Future')}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
            filterEra === 'Future'
              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-glow-cyan'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
          }`}
        >
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Projected Scenarios (2027 – 2030)</span>
        </button>
      </div>

      {/* Interactive Vertical Timeline */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 md:ml-40 space-y-12">
        {filteredTimeline.map((item, index) => {
          const isFuture = item.isProjected;

          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Year Label in Left Margin */}
              <div className="absolute -left-20 sm:-left-36 md:-left-44 top-1 text-right hidden sm:block">
                <span className={`font-mono text-xl md:text-2xl font-black ${isFuture ? 'text-cyan-400 cyber-glow-text' : 'text-slate-300'}`}>
                  {item.year}
                </span>
                <span className="block text-[10px] font-mono text-slate-500 uppercase">
                  {item.era}
                </span>
              </div>

              {/* Timeline Connector Dot */}
              <div className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 transition-all ${
                isFuture
                  ? 'bg-cyan-500 border-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-pulse'
                  : 'bg-slate-800 border-slate-600 group-hover:border-slate-400'
              }`} />

              {/* Card Container */}
              <div className={`glass-panel rounded-2xl p-6 sm:p-7 border transition-all duration-300 ${
                isFuture
                  ? 'border-cyan-500/40 bg-gradient-to-br from-[#0B1020] via-slate-900/90 to-cyan-950/20 shadow-[0_0_30px_rgba(6,182,212,0.12)]'
                  : 'border-slate-800/90 bg-[#0B1020]/60'
              }`}>
                
                {/* Year tag for mobile */}
                <div className="flex sm:hidden items-center justify-between mb-2">
                  <span className="font-mono text-lg font-black text-cyan-400">{item.year}</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">{item.era}</span>
                </div>

                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {item.title}
                  </h3>
                  {isFuture ? (
                    <ScenarioBadge type="PROJECTED / SCENARIO" size="sm" />
                  ) : (
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      Historical Milestone
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Technical Milestones */}
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isFuture ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span>Key Breakthroughs & Indicators</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.milestones?.map((m, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1 rounded-lg border font-mono ${
                          isFuture
                            ? 'bg-cyan-950/30 border-cyan-500/30 text-cyan-200'
                            : 'bg-slate-900 border-slate-800 text-slate-300'
                        }`}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
