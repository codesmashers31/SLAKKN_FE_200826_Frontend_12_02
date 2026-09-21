import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Award, 
  CheckSquare, 
  Square, 
  Sparkles, 
  RefreshCw, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp,
  Cpu,
  Layers,
  Terminal
} from 'lucide-react';
import { api } from '../services/api';
import ScenarioBadge from '../components/ScenarioBadge';

export default function SkillsPage() {
  const [skillsData, setSkillsData] = useState(null);
  const [selectedRole, setSelectedRole] = useState('fullstack');
  const [selectedSkills, setSelectedSkills] = useState([
    'javascript', 'typescript', 'react', 'nextjs', 'nodejs', 'sql', 'docker', 'llm_api', 'prompt_eng'
  ]);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSkills() {
      try {
        const data = await api.getSkills();
        setSkillsData(data || null);
      } catch (err) {
        console.error("Error loading skills data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadSkills();
  }, []);

  const toggleSkill = (id) => {
    if (selectedSkills.includes(id)) {
      setSelectedSkills(selectedSkills.filter(sId => sId !== id));
    } else {
      setSelectedSkills([...selectedSkills, id]);
    }
  };

  const selectAllInGroup = (items) => {
    const itemIds = items.map(i => i.id);
    const allSelected = itemIds.every(id => selectedSkills.includes(id));
    if (allSelected) {
      setSelectedSkills(selectedSkills.filter(id => !itemIds.includes(id)));
    } else {
      const merged = Array.from(new Set([...selectedSkills, ...itemIds]));
      setSelectedSkills(merged);
    }
  };

  const handleRunAnalysis = async () => {
    setIsAnalyzing(true);
    try {
      const result = await api.analyzeSkills(selectedRole, selectedSkills);
      setAnalysisResult(result);
      if (result.score >= 75) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } catch (err) {
      console.error("Analysis failed:", err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const roles = skillsData?.roles || [];
  const skillGroups = skillsData?.skillGroups || [];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-3">
          <Award className="w-3.5 h-3.5 text-cyan-400" />
          <span>AI READINESS DIAGNOSTIC</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Developer Skill Gap Analyzer
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-3">
          Select your current primary role and stack to calculate your AI Readiness Score and receive a personalized 2030 engineering transition roadmap.
        </p>
      </div>

      {/* Role Selection */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 mb-8">
        <label className="text-xs font-mono uppercase text-slate-400 font-bold block mb-3">
          Step 1: Select Your Primary Engineering Discipline
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedRole(r.id)}
              className={`p-3 rounded-xl text-center border transition-all text-xs font-semibold ${
                selectedRole === r.id
                  ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-glow-cyan'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>{r.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Skills Checkboxes by Group */}
      <div className="space-y-8 mb-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Step 2: Check All Skills You Have Working Experience In</h2>
          <span className="text-xs font-mono text-cyan-400">
            {selectedSkills.length} Selected
          </span>
        </div>

        {skillGroups.map((group, gIdx) => {
          const allInGroupSelected = group.items.every(i => selectedSkills.includes(i.id));

          return (
            <div key={gIdx} className="glass-panel p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                    {group.category}
                  </h3>
                </div>
                <button
                  onClick={() => selectAllInGroup(group.items)}
                  className="text-[11px] font-mono text-cyan-400 hover:underline"
                >
                  {allInGroupSelected ? "Deselect All" : "Select All"}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {group.items.map((skill) => {
                  const isChecked = selectedSkills.includes(skill.id);

                  return (
                    <button
                      key={skill.id}
                      onClick={() => toggleSkill(skill.id)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all text-xs ${
                        isChecked
                          ? 'bg-cyan-950/30 border-cyan-500/40 text-white'
                          : 'bg-slate-900/50 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-cyan-400 shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-600 shrink-0" />
                      )}
                      <div className="truncate">
                        <span className="font-medium block truncate">{skill.label}</span>
                        <span className="text-[10px] font-mono text-slate-500">{skill.level}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Button */}
      <div className="text-center mb-12">
        <button
          onClick={handleRunAnalysis}
          disabled={isAnalyzing}
          className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 shadow-glow-cyan hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
        >
          {isAnalyzing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Analyzing Skill Matrix...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>ANALYZE MY 2030 READINESS SCORE</span>
            </>
          )}
        </button>
      </div>

      {/* ================= ANALYSIS RESULTS ================= */}
      {analysisResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 rounded-3xl border border-cyan-500/40 shadow-2xl bg-gradient-to-br from-[#0B1020] via-slate-900 to-cyan-950/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-widest block">
                DIAGNOSTIC REPORT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Your 2030 AI Readiness Score
              </h3>
            </div>
            <div className="text-center md:text-right">
              <div className="text-4xl sm:text-5xl font-black text-cyan-300 cyber-glow-text">
                {analysisResult.score}%
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 mt-1 inline-block font-bold">
                {analysisResult.tier}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            {/* Critical Missing Skills */}
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30">
              <h4 className="text-xs font-bold font-mono text-amber-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                Priority High-Leverage Skills to Acquire
              </h4>
              {analysisResult.missingCritical?.length === 0 ? (
                <p className="text-xs text-emerald-300">Outstanding! You have selected all core AI Engineering capabilities.</p>
              ) : (
                <ul className="space-y-2 text-xs text-amber-200">
                  {analysisResult.missingCritical?.map((m, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{m.label} ({m.level})</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Recommended Transition Steps */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30">
              <h4 className="text-xs font-bold font-mono text-cyan-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Recommended 2030 Action Steps
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {analysisResult.recommendedNextSteps?.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-cyan-400 font-bold mt-0.5">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      )}

    </div>
  );
}
