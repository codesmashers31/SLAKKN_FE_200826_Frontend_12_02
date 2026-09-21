import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Layers, 
  Cpu, 
  Check, 
  Plus, 
  X, 
  ArrowUpDown, 
  AlertTriangle, 
  Sparkles, 
  Code2, 
  Bot, 
  Wrench,
  CheckSquare,
  Square
} from 'lucide-react';
import { api } from '../services/api';
import CompanyBadge from '../components/CompanyBadge';
import ModelCompareModal from '../components/ModelCompareModal';

export default function ModelsPage() {
  const [models, setModels] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedForCompare, setSelectedForCompare] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadModels() {
      try {
        const data = await api.getModels();
        setModels(data || []);
      } catch (err) {
        console.error("Error loading models:", err);
      } finally {
        setLoading(false);
      }
    }
    loadModels();
  }, []);

  const toggleCompare = (id) => {
    if (selectedForCompare.includes(id)) {
      setSelectedForCompare(selectedForCompare.filter(mId => mId !== id));
    } else {
      if (selectedForCompare.length >= 3) {
        alert("You can compare a maximum of 3 models at a time.");
        return;
      }
      setSelectedForCompare([...selectedForCompare, id]);
    }
  };

  // Filter and sort logic
  const filteredModels = models.filter((model) => {
    const matchesSearch = 
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.primaryPurpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.bestSuitedFor.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesProvider = 
      selectedProvider === 'All' || 
      model.provider.toLowerCase().includes(selectedProvider.toLowerCase());

    return matchesSearch && matchesProvider;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-3">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>FRONTIER MODEL REGISTRY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          AI Model Intelligence Center
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-3">
          Inspect, evaluate, and benchmark flagship foundation models from OpenAI, Anthropic, Google, and open-weights labs.
        </p>
      </div>

      {/* Controls: Search, Filter, Sort, Compare CTA */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search models, reasoning, tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Provider Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {['All', 'OpenAI', 'Anthropic', 'Google', 'DeepSeek'].map((prov) => (
            <button
              key={prov}
              onClick={() => setSelectedProvider(prov)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedProvider === prov
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {prov}
            </button>
          ))}
        </div>

        {/* Compare Bar Button */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button
            onClick={() => setIsCompareOpen(true)}
            disabled={selectedForCompare.length === 0}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              selectedForCompare.length > 0
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-glow-cyan hover:scale-105'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMPARE ({selectedForCompare.length}/3)</span>
          </button>
        </div>

      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModels.map((model) => {
          const isSelected = selectedForCompare.includes(model.id);

          return (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`glass-panel rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                isSelected 
                  ? 'border-cyan-400 shadow-glow-cyan ring-1 ring-cyan-400' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Header: Provider & Compare Checkbox */}
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-1">
                    <CompanyBadge company={model.provider} size="sm" />
                    <span className="text-[11px] font-mono text-cyan-400 block font-bold mt-1">{model.badge}</span>
                  </div>
                  <button
                    onClick={() => toggleCompare(model.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-colors border ${
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {isSelected ? <CheckSquare className="w-3.5 h-3.5 text-cyan-400" /> : <Square className="w-3.5 h-3.5" />}
                    <span>Compare</span>
                  </button>
                </div>

                <h3 className="text-xl font-black text-white">{model.name}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{model.primaryPurpose}</p>

                {/* Specs Pill Matrix */}
                <div className="mt-5 space-y-2.5 text-xs">
                  
                  {/* Context Window */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800 font-mono">
                    <span className="text-slate-400">Context Window</span>
                    <span className="text-emerald-400 font-bold">{model.contextCapability}</span>
                  </div>

                  {/* Reasoning */}
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="text-[10px] font-mono uppercase text-slate-400 mb-0.5 flex items-center gap-1">
                      <Brain className="w-3 h-3 text-cyan-400" />
                      Reasoning Architecture
                    </div>
                    <p className="text-slate-300 font-medium text-[11px]">{model.reasoningSupport}</p>
                  </div>

                  {/* Coding */}
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="text-[10px] font-mono uppercase text-slate-400 mb-0.5 flex items-center gap-1">
                      <Code2 className="w-3 h-3 text-amber-400" />
                      Coding & SWE Ability
                    </div>
                    <p className="text-slate-300 font-medium text-[11px]">{model.codingSupport}</p>
                  </div>

                  {/* Best Suited For */}
                  <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/20">
                    <div className="text-[10px] font-mono uppercase text-emerald-400 mb-0.5 font-bold">
                      Best Suited For
                    </div>
                    <p className="text-emerald-200 text-[11px]">{model.bestSuitedFor}</p>
                  </div>

                  {/* Known Limitations */}
                  <div className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-500/20">
                    <div className="text-[10px] font-mono uppercase text-amber-400 mb-0.5 flex items-center gap-1 font-bold">
                      <AlertTriangle className="w-3 h-3 text-amber-400" />
                      Known Limitations
                    </div>
                    <p className="text-amber-200 text-[11px]">{model.knownLimitations}</p>
                  </div>

                </div>
              </div>

              {/* Card Footer Info */}
              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Release: {model.releaseDate}</span>
                <span className="text-slate-500">{model.apiAvailability?.split(',')[0]}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Comparison Modal */}
      <ModelCompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        selectedModels={selectedForCompare}
        allModels={models}
      />

    </div>
  );
}
