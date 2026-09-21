import React from 'react';
import { X, ShieldCheck, Wrench, ArrowRight, ArrowLeft, CheckCircle2, UserCheck, Bot } from 'lucide-react';

export default function AgentInspectModal({ isOpen, onClose, agent }) {
  if (!isOpen || !agent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0B1020] border border-cyan-500/40 p-6 shadow-2xl shadow-cyan-950/60 text-slate-200">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                  {agent.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">ID: {agent.id}</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">{agent.name}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-5 space-y-5 max-h-[70vh] overflow-y-auto pr-2">
          
          {/* Core Responsibilities */}
          <div>
            <h4 className="text-xs font-bold font-mono text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Primary Responsibilities
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {agent.responsibilities?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Inputs & Outputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
              <h5 className="text-[11px] font-bold font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                Input Data Streams
              </h5>
              <ul className="space-y-1 text-xs text-slate-300">
                {agent.inputs?.map((inItem, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="text-blue-400">•</span> {inItem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
              <h5 className="text-[11px] font-bold font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                Synthesized Outputs
              </h5>
              <ul className="space-y-1 text-xs text-slate-300">
                {agent.outputs?.map((outItem, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="text-emerald-400">•</span> {outItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tools Used */}
          <div>
            <h4 className="text-xs font-bold font-mono text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-purple-400" />
              Connected Tools & Protocols
            </h4>
            <div className="flex flex-wrap gap-2">
              {agent.tools?.map((tool, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-purple-950/30 border border-purple-500/30 text-xs text-purple-300 font-mono">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Human Oversight Gate */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-3">
            <UserCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-300 block mb-0.5 font-mono uppercase tracking-wide">
                Human-in-the-Loop Oversight Gate
              </span>
              <span>{agent.humanOversight}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-semibold transition-colors"
          >
            Dismiss Inspector
          </button>
        </div>

      </div>
    </div>
  );
}
