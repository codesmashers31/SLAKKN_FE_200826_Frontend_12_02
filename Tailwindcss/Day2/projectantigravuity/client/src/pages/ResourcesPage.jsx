import React, { useEffect, useState } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  Sparkles, 
  FileText, 
  Cpu, 
  Code2, 
  Layers, 
  ShieldCheck, 
  Terminal,
  Bookmark
} from 'lucide-react';
import { api } from '../services/api';

export default function ResourcesPage() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadResources() {
      try {
        const data = await api.getResources();
        setResources(data || []);
      } catch (err) {
        console.error("Error loading resources:", err);
      } finally {
        setLoading(false);
      }
    }
    loadResources();
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-3">
          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
          <span>RESEARCH & TOOLING REPOSITORY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Frontier AI Resources & Specs
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-3">
          Curated collection of foundational research papers, official documentation, Model Context Protocol (MCP) standards, and agent frameworks.
        </p>
      </div>

      {/* Resource Sections */}
      <div className="space-y-12">
        {resources.map((category, idx) => (
          <div key={idx} className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <h2 className="text-lg font-bold text-white uppercase font-mono tracking-wider">
                {category.category}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items?.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-300 hover:bg-slate-700 transition-colors shrink-0"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {(item.authors || item.provider || item.type) && (
                      <span className="text-[11px] font-mono text-cyan-400 block mb-2">
                        {item.authors || item.provider || item.type}
                      </span>
                    )}

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Verified Reference</span>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>Read Documentation</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
