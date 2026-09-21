import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  Layers, 
  Bot, 
  ShieldCheck, 
  Code2, 
  Cpu, 
  DollarSign, 
  ArrowRight,
  Filter,
  Check,
  AlertCircle
} from 'lucide-react';
import { api } from '../services/api';
import ScenarioBadge from '../components/ScenarioBadge';

export default function JobsPage() {
  const [jobsData, setJobsData] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('impact'); // 'impact' or 'new-roles'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJobs() {
      try {
        const data = await api.getJobs();
        setJobsData(data || null);
      } catch (err) {
        console.error("Error loading jobs data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadJobs();
  }, []);

  const categories = jobsData?.categories || [];
  const roles = jobsData?.roles || [];
  const newRoles = jobsData?.newRoles || [];

  const filteredRoles = activeCategory === 'all'
    ? roles
    : roles.filter(r => r.category === activeCategory);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-3">
          <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
          <span>WORKFORCE TRANSFORMATION MATRIX</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          AI Job Impact & New Careers Center
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-3">
          Objective workforce evolution analysis. We analyze task automation, enduring human advantages, and newly emerging high-leverage careers.
        </p>

        {/* Ethical Nuance Notice */}
        <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
          <span>
            Balanced Perspective: Rather than predicting absolute job extinction, we map the transformation of task distributions and the rise of new AI professions.
          </span>
        </div>
      </div>

      {/* Main Mode Switcher: Transformation vs New Roles */}
      <div className="flex justify-center mb-10">
        <div className="glass-panel p-1.5 rounded-2xl border border-slate-800 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('impact')}
            className={`px-6 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
              activeTab === 'impact'
                ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Existing Roles Transformation ({roles.length})
          </button>
          <button
            onClick={() => setActiveTab('new-roles')}
            className={`px-6 py-2.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'new-roles'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-200" />
            <span>New AI Era Careers ({newRoles.length})</span>
          </button>
        </div>
      </div>

      {/* ================= TAB 1: EXISTING ROLES TRANSFORMATION ================= */}
      {activeTab === 'impact' && (
        <div>
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              All Transformation Tiers
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeCategory === cat.id
                    ? `${cat.color} border`
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoles.map((role) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-white">{role.title}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      role.category === 'high' ? 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300' :
                      role.category === 'moderate' ? 'bg-amber-950/40 border-amber-500/30 text-amber-300' :
                      'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                    }`}>
                      {role.categoryName}
                    </span>
                  </div>

                  {/* 4 Pillars */}
                  <div className="space-y-3 mt-4 text-xs">
                    
                    {/* Automatable Tasks */}
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold mb-0.5">
                        Automatable Routine Tasks:
                      </span>
                      <p className="text-slate-300">{role.automatableTasks}</p>
                    </div>

                    {/* Human Advantages */}
                    <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                      <span className="text-[10px] font-mono uppercase text-emerald-400 block font-bold mb-0.5">
                        Enduring Human Edge:
                      </span>
                      <p className="text-emerald-200">{role.humanAdvantages}</p>
                    </div>

                    {/* New Skills Needed */}
                    <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                      <span className="text-[10px] font-mono uppercase text-cyan-400 block font-bold mb-0.5">
                        Required New Skills:
                      </span>
                      <p className="text-cyan-200">{role.newSkillsNeeded}</p>
                    </div>

                    {/* AI Opportunities */}
                    <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20">
                      <span className="text-[10px] font-mono uppercase text-purple-300 block font-bold mb-0.5">
                        10x Upside Opportunities:
                      </span>
                      <p className="text-purple-200">{role.aiOpportunities}</p>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 2: NEW JOBS OF THE AI ERA ================= */}
      {activeTab === 'new-roles' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newRoles.map((newJob) => (
            <motion.div
              key={newJob.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel rounded-2xl border border-purple-500/30 p-6 sm:p-7 flex flex-col justify-between hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">
                    {newJob.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">{newJob.salaryRange}</span>
                </div>

                <h3 className="text-xl font-black text-white mt-1">{newJob.title}</h3>
                <p className="text-xs text-purple-300 font-medium italic mt-0.5">"{newJob.tagline}"</p>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">{newJob.whatTheyDo}</p>

                {/* Skills */}
                <div className="mt-5 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">
                    Key Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {newJob.requiredSkills?.map((sk, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-cyan-300 border border-slate-800">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Arsenal */}
                <div className="mt-3 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">
                    Core Toolset:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {newJob.technologies?.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-purple-950/40 text-[10px] font-mono text-purple-200 border border-purple-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Era: 2026 – 2030 Standard</span>
                <span className="text-cyan-400 font-bold">High Growth</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

    </div>
  );
}
