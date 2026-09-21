import React from 'react';
import { Cpu, Zap, Flame, Sparkles } from 'lucide-react';

export default function CompanyBadge({ company = "OpenAI", size = "sm" }) {
  const comp = company.toLowerCase();

  const isSmall = size === "sm";

  if (comp.includes("openai")) {
    return (
      <span className={`inline-flex items-center gap-1.5 font-semibold rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)] ${isSmall ? 'text-[11px] px-2.5 py-0.5' : 'text-xs px-3.5 py-1'}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>OpenAI</span>
      </span>
    );
  }

  if (comp.includes("anthropic") || comp.includes("claude")) {
    return (
      <span className={`inline-flex items-center gap-1.5 font-semibold rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.15)] ${isSmall ? 'text-[11px] px-2.5 py-0.5' : 'text-xs px-3.5 py-1'}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
        <span>Anthropic</span>
      </span>
    );
  }

  if (comp.includes("google") || comp.includes("gemini")) {
    return (
      <span className={`inline-flex items-center gap-1.5 font-semibold rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 shadow-[0_0_12px_rgba(139,92,246,0.15)] ${isSmall ? 'text-[11px] px-2.5 py-0.5' : 'text-xs px-3.5 py-1'}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
        <span>Google Gemini</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 font-semibold rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 ${isSmall ? 'text-[11px] px-2.5 py-0.5' : 'text-xs px-3.5 py-1'}`}>
      <Sparkles className="w-3 h-3" />
      <span>{company}</span>
    </span>
  );
}
