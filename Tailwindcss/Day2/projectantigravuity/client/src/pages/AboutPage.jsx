import React from 'react';
import { 
  Info, 
  ShieldCheck, 
  Sparkles, 
  Compass, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle,
  Flame,
  HeartHandshake
} from 'lucide-react';
import ScenarioBadge from '../components/ScenarioBadge';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-3">
          <Info className="w-3.5 h-3.5 text-cyan-400" />
          <span>PROJECT MANIFESTO & METHODOLOGY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          About AI WAR 2030
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-3">
          An independent intelligence dashboard designed to cut through marketing hype and provide software developers with grounded, actionable analysis of the frontier AI race.
        </p>
      </div>

      {/* Main Content Blocks */}
      <div className="space-y-8">
        
        {/* Core Manifesto */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 shadow-glow-cyan/20">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
            <Flame className="w-5 h-5 text-cyan-400" />
            Our Core Thesis
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            The transition from manual keystroke programming to agentic AI software architecture represents the most profound shift in computing since the birth of the commercial internet. 
            However, much of the discourse swings wildly between apocalyptic panic ("software engineering is dead") and reckless hyperbole ("AGI next month").
          </p>
          <p className="text-sm text-slate-300 leading-relaxed mt-3">
            <strong>AI WAR 2030</strong> exists to give developers a grounded, pragmatic roadmap. We evaluate the true technical trade-offs between OpenAI, Anthropic, and Google Gemini, outline the real skills developers need, and map plausible 2030 future scenarios with strict scientific humility.
          </p>
        </div>

        {/* 2030 Projection Disclaimer */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-amber-500/30 bg-amber-950/10">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl font-bold text-amber-300 font-mono uppercase tracking-wider">
              2030 Forecasting Policy & Disclaimer
            </h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            All forecasts and timelines covering the years <strong>2027 through 2030</strong> are explicitly labeled as:
          </p>
          <div className="flex flex-wrap gap-2 my-4">
            <ScenarioBadge type="Scenario" size="md" />
            <ScenarioBadge type="Projection" size="md" />
            <ScenarioBadge type="Possible Future" size="md" />
            <ScenarioBadge type="Expected Direction" size="md" />
            <ScenarioBadge type="Speculation" size="md" />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Future technology trajectories can be altered by scientific bottlenecks, unexpected breakthroughs, regulatory shifts, chip supply constraints, or energy limits. We do not present any 2030 scenario as an inevitable certainty.
          </p>
        </div>

        {/* Evaluation Methodology */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Intelligence & Evaluation Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-white block mb-1">No Synthetic Benchmarks</span>
              <p className="text-slate-400">
                We refuse to display artificial or unverified percentage scores that lack peer validation. We reference established industry suites (such as SWE-bench Verified) and qualitative architectural specs.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-white block mb-1">Multi-Vendor Neutrality</span>
              <p className="text-slate-400">
                We do not crown an absolute single winner. OpenAI dominates consumer distribution and fast reasoning; Anthropic leads verified coding and open tool protocols (MCP); Google leads native multimodal and 2M token context.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-white block mb-1">Developer-First Focus</span>
              <p className="text-slate-400">
                Every insight is framed from the perspective of what builders need to learn, test, and ship today to remain ahead of the curve.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-white block mb-1">Continuous Real-Time Updates</span>
              <p className="text-slate-400">
                Our intelligence registry is updated continuously as frontier models (such as Claude 3.7 Sonnet, o3-mini, Gemini 2.0 Flash) are deployed.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
