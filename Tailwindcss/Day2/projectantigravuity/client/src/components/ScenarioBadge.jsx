import React from 'react';
import { Sparkles, AlertCircle, HelpCircle, Compass, History } from 'lucide-react';

export default function ScenarioBadge({ type = "Scenario", size = "sm" }) {
  const normalized = type.toUpperCase();

  const getStyle = () => {
    if (normalized.includes("HISTORICAL")) {
      return {
        bg: "bg-slate-800/80 border-slate-700/80 text-slate-300",
        icon: History,
        glow: ""
      };
    }
    if (normalized.includes("SPECULATION")) {
      return {
        bg: "bg-pink-950/40 border-pink-500/40 text-pink-300 shadow-[0_0_12px_rgba(236,72,153,0.2)]",
        icon: AlertCircle,
        glow: "animate-pulse"
      };
    }
    if (normalized.includes("PROJECTED") || normalized.includes("PROJECTION")) {
      return {
        bg: "bg-cyan-950/40 border-cyan-500/40 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.25)]",
        icon: Compass,
        glow: "animate-pulse"
      };
    }
    if (normalized.includes("POSSIBLE") || normalized.includes("EXPECTED")) {
      return {
        bg: "bg-purple-950/40 border-purple-500/40 text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.2)]",
        icon: Sparkles,
        glow: ""
      };
    }
    // Default Scenario
    return {
      bg: "bg-cyan-950/40 border-cyan-500/30 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]",
      icon: Sparkles,
      glow: ""
    };
  };

  const config = getStyle();
  const IconComponent = config.icon;
  const isSmall = size === "sm";

  return (
    <span className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider rounded-full border transition-all ${config.bg} ${isSmall ? 'text-[10px] px-2.5 py-0.5' : 'text-xs px-3.5 py-1'}`}>
      <IconComponent className={`${isSmall ? 'w-3 h-3' : 'w-3.5 h-3.5'} ${config.glow}`} />
      <span>{type}</span>
    </span>
  );
}
