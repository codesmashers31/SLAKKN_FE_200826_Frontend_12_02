import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Code2, 
  Brain, 
  Bot, 
  Layers, 
  Building2, 
  ShieldCheck, 
  Filter, 
  Info,
  Zap,
  ExternalLink
} from 'lucide-react';
import { api } from '../services/api';
import CompanyBadge from '../components/CompanyBadge';
import ScenarioBadge from '../components/ScenarioBadge';

export default function AIWarPage() {
  const [companies, setCompanies] = useState([]);
  const [capabilities, setCapabilities] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  const filterTabs = [
    'All',
    'Coding',
    'Reasoning',
    'Agents',
    'Multimodal',
    'Enterprise',
    'Research'
  ];

  useEffect(() => {
    async function loadData() {
      try {
        const [compData, capData] = await Promise.all([
          api.getCompanies(),
          api.getCapabilities()
        ]);
        setCompanies(compData || []);
        setCapabilities(capData || []);
      } catch (err) {
        console.error("Error loading AI War data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredCapabilities = activeFilter === 'All'
    ? capabilities
    : capabilities.filter(c => c.type?.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header Banner */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-3">
          <Flame className="w-3.5 h-3.5 text-cyan-400" />
          <span>FRONTIER INTELLIGENCE MATRIX</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          AI WAR — THE FRONTIER RACE
        </h1>
        <p className="text-base text-slate-400 mt-3 max-w-2xl mx-auto">
          Qualitative and verified technical capability comparison across OpenAI, Anthropic, and Google Gemini.
        </p>

        {/* Real Data Disclaimer */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
          <Info className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            Strict Data Policy: We do not display synthetic unverified benchmark numbers. All capability assessments are qualitative summaries verified from official technical reports.
          </span>
        </div>
      </div>

      {/* 3 Major Company Panels Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {companies.map((company) => {
          const isEmerald = company.id === "openai";
          const isAmber = company.id === "anthropic";
          const isGemini = company.id === "google";

          return (
            <div
              key={company.id}
              className={`glass-panel p-6 rounded-2xl border flex flex-col justify-between ${
                isEmerald 
                  ? 'border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.15)]' 
                  : isAmber 
                  ? 'border-amber-500/40 shadow-[0_0_25px_rgba(245,158,11,0.15)]' 
                  : 'border-indigo-500/40 shadow-[0_0_25px_rgba(139,92,246,0.15)]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <CompanyBadge company={company.name} size="md" />
                  <span className="text-[11px] font-mono text-slate-400">{company.headquarters}</span>
                </div>
                <h2 className="text-xl font-black text-white">{company.name}</h2>
                <p className="text-xs text-slate-300 mt-1 font-medium italic">"{company.tagline}"</p>
                
                <div className="mt-4 space-y-2 text-xs">
                  <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Flagship Models</span>
                    <span className="font-semibold text-white">{company.flagshipModels?.join(", ")}</span>
                  </div>
                  <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Core Philosophy</span>
                    <span className="text-slate-300 text-[11px] leading-relaxed block mt-0.5">{company.philosophicalApproach}</span>
                  </div>
                </div>
              </div>

              {/* Verified Stats Block */}
              <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 gap-2 text-center text-xs font-mono">
                <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 uppercase block">Scale</span>
                  <span className="text-cyan-300 font-bold text-[11px]">{company.verifiedStats?.activeUsers}</span>
                </div>
                <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 uppercase block">Max Context</span>
                  <span className="text-purple-300 font-bold text-[11px]">{company.verifiedStats?.contextWindowMax}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            Filter Capabilities:
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all font-mono ${
                activeFilter === tab
                  ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan font-bold'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Comparative Capabilities Grid */}
      <div className="space-y-8">
        {filteredCapabilities.map((cap, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="glass-panel rounded-2xl border border-slate-800 overflow-hidden"
          >
            {/* Category Banner */}
            <div className="bg-slate-900/90 px-6 py-3.5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <h3 className="text-base font-bold text-white">{cap.category}</h3>
              </div>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {cap.type}
              </span>
            </div>

            {/* 3-Column Comparative Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-xs">
              
              {/* OpenAI Column */}
              <div className="p-6 bg-emerald-950/05 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <CompanyBadge company="OpenAI" size="sm" />
                    <span className="font-mono text-emerald-400 font-bold text-[11px]">{cap.openai?.rating}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{cap.openai?.detail}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 font-mono text-[11px] text-emerald-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{cap.openai?.highlight}</span>
                </div>
              </div>

              {/* Anthropic Column */}
              <div className="p-6 bg-amber-950/05 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <CompanyBadge company="Anthropic" size="sm" />
                    <span className="font-mono text-amber-400 font-bold text-[11px]">{cap.anthropic?.rating}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{cap.anthropic?.detail}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 font-mono text-[11px] text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{cap.anthropic?.highlight}</span>
                </div>
              </div>

              {/* Google Gemini Column */}
              <div className="p-6 bg-indigo-950/05 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <CompanyBadge company="Google" size="sm" />
                    <span className="font-mono text-indigo-300 font-bold text-[11px]">{cap.google?.rating}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{cap.google?.detail}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 font-mono text-[11px] text-indigo-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>{cap.google?.highlight}</span>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
