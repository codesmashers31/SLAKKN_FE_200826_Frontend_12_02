import React from 'react';
import { X, Check, AlertTriangle, Layers, Cpu, Code2, Zap } from 'lucide-react';
import CompanyBadge from './CompanyBadge';

export default function ModelCompareModal({ isOpen, onClose, selectedModels = [], allModels = [] }) {
  if (!isOpen) return null;

  const modelsToCompare = allModels.filter(m => selectedModels.includes(m.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0B1020] border border-cyan-500/30 p-6 shadow-2xl shadow-cyan-950/50">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
                HEAD-TO-HEAD MATRIX
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">
                {modelsToCompare.length} Models Selected
              </span>
            </div>
            <h2 className="text-2xl font-black text-white">AI Model Capability Comparison</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Table / Columns */}
        {modelsToCompare.length === 0 ? (
          <div className="py-16 text-center text-slate-400">
            <p className="text-sm">No models selected. Please select up to 3 models from the catalog to compare.</p>
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <div className="min-w-[700px] grid" style={{ gridTemplateColumns: `200px repeat(${modelsToCompare.length}, minmax(240px, 1fr))` }}>
              
              {/* Row: Header Models */}
              <div className="p-4 font-bold text-xs uppercase tracking-wider text-slate-400 bg-slate-900/50 rounded-tl-lg flex items-center">
                Model Identity
              </div>
              {modelsToCompare.map((model) => (
                <div key={model.id} className="p-4 bg-slate-900/30 border-l border-slate-800 flex flex-col justify-between">
                  <div>
                    <CompanyBadge company={model.provider} size="sm" />
                    <h3 className="text-lg font-bold text-white mt-2">{model.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{model.primaryPurpose}</p>
                  </div>
                  <div className="mt-3 text-[11px] font-mono text-cyan-400">
                    Released: {model.releaseDate}
                  </div>
                </div>
              ))}

              {/* Row: Context Window */}
              <div className="p-4 font-bold text-xs uppercase tracking-wider text-slate-400 border-t border-slate-800 bg-slate-900/40">
                Context Window
              </div>
              {modelsToCompare.map((model) => (
                <div key={model.id} className="p-4 border-t border-l border-slate-800 text-xs font-mono font-bold text-emerald-400">
                  {model.contextCapability}
                </div>
              ))}

              {/* Row: Max Output */}
              <div className="p-4 font-bold text-xs uppercase tracking-wider text-slate-400 border-t border-slate-800 bg-slate-900/40">
                Max Output Tokens
              </div>
              {modelsToCompare.map((model) => (
                <div key={model.id} className="p-4 border-t border-l border-slate-800 text-xs font-mono text-slate-200">
                  {model.maxOutput || "8,192 tokens"}
                </div>
              ))}

              {/* Row: Reasoning Support */}
              <div className="p-4 font-bold text-xs uppercase tracking-wider text-slate-400 border-t border-slate-800 bg-slate-900/40">
                Reasoning Architecture
              </div>
              {modelsToCompare.map((model) => (
                <div key={model.id} className="p-4 border-t border-l border-slate-800 text-xs text-slate-300">
                  <span className="font-semibold text-white block mb-1">{model.reasoningSupport}</span>
                </div>
              ))}

              {/* Row: Coding Support */}
              <div className="p-4 font-bold text-xs uppercase tracking-wider text-slate-400 border-t border-slate-800 bg-slate-900/40">
                Coding & SWE Capabilities
              </div>
              {modelsToCompare.map((model) => (
                <div key={model.id} className="p-4 border-t border-l border-slate-800 text-xs text-slate-300">
                  {model.codingSupport}
                </div>
              ))}

              {/* Row: Tool & Agent Support */}
              <div className="p-4 font-bold text-xs uppercase tracking-wider text-slate-400 border-t border-slate-800 bg-slate-900/40">
                Tool & Agent Integration
              </div>
              {modelsToCompare.map((model) => (
                <div key={model.id} className="p-4 border-t border-l border-slate-800 text-xs text-slate-300 space-y-1">
                  <p><strong className="text-cyan-300">Tools:</strong> {model.toolSupport}</p>
                  <p><strong className="text-purple-300">Agents:</strong> {model.agentSupport}</p>
                </div>
              ))}

              {/* Row: Input Modes */}
              <div className="p-4 font-bold text-xs uppercase tracking-wider text-slate-400 border-t border-slate-800 bg-slate-900/40">
                Input Modalities
              </div>
              {modelsToCompare.map((model) => (
                <div key={model.id} className="p-4 border-t border-l border-slate-800 flex flex-wrap gap-1">
                  {model.inputModes.map((mode, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300 font-mono">
                      {mode}
                    </span>
                  ))}
                </div>
              ))}

              {/* Row: Best Suited For */}
              <div className="p-4 font-bold text-xs uppercase tracking-wider text-slate-400 border-t border-slate-800 bg-slate-900/40">
                Best Suited For
              </div>
              {modelsToCompare.map((model) => (
                <div key={model.id} className="p-4 border-t border-l border-slate-800 text-xs text-emerald-300">
                  {model.bestSuitedFor}
                </div>
              ))}

              {/* Row: Known Limitations */}
              <div className="p-4 font-bold text-xs uppercase tracking-wider text-slate-400 border-t border-slate-800 bg-slate-900/40 rounded-bl-lg">
                Known Limitations
              </div>
              {modelsToCompare.map((model) => (
                <div key={model.id} className="p-4 border-t border-l border-slate-800 text-xs text-amber-300/90 flex items-start gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
                  <span>{model.knownLimitations}</span>
                </div>
              ))}

            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>* Qualitative assessments verified from official model specs & SWE-bench benchmarks.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors font-semibold"
          >
            Close Comparison
          </button>
        </div>

      </div>
    </div>
  );
}
