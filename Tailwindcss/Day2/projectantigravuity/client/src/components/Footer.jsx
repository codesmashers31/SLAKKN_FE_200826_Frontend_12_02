import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ShieldCheck, Sparkles, Terminal, Activity, ArrowUpRight, Github } from 'lucide-react';
import ScenarioBadge from './ScenarioBadge';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#050816] relative z-10 text-slate-400 text-sm">
      {/* Disclaimer Banner */}
      <div className="border-b border-slate-800/50 bg-[#0B1020]/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <ScenarioBadge type="Scenario / Projection Disclaimer" size="sm" />
            <span className="text-slate-300">
              Future 2027–2030 projections are speculative scenarios based on technology trajectories, not guaranteed outcomes.
            </span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>INTELLIGENCE MESH: ONLINE (2026.09 ACTIVE)</span>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#0B1020] rounded-[7px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-white text-base tracking-wider">
                AI WAR 2030
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An independent frontier intelligence dashboard and developer survival guide analyzing the competition between OpenAI, Anthropic, and Google Gemini, alongside the emerging agentic software era.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-slate-500">
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">React + Vite</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Tailwind CSS</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Express.js</span>
            </div>
          </div>

          {/* Quick Links: Intelligence */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Frontier Race
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/ai-war" className="hover:text-cyan-400 transition-colors">AI War Matrix</Link>
              </li>
              <li>
                <Link to="/models" className="hover:text-cyan-400 transition-colors">Model Intelligence</Link>
              </li>
              <li>
                <Link to="/timeline" className="hover:text-cyan-400 transition-colors">Evolution Timeline</Link>
              </li>
              <li>
                <Link to="/future-2030" className="hover:text-cyan-400 transition-colors">The Road to 2030</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links: Developer Guide */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Developer 2030
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/developer-2030" className="hover:text-cyan-400 transition-colors">Survival Guide</Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-cyan-400 transition-colors">AI Job Impact</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-cyan-400 transition-colors">Skill Gap Analyzer</Link>
              </li>
              <li>
                <Link to="/agents" className="hover:text-cyan-400 transition-colors">AI Agent Lab</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links: Governance & Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Knowledge Base
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/resources" className="hover:text-cyan-400 transition-colors">Research & Tools</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">Methodology & Ethics</Link>
              </li>
              <li>
                <a href="https://modelcontextprotocol.io" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                  <span>MCP Standard</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026–2030 AI WAR INTELLIGENCE PLATFORM. Crafted for modern software engineers.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-slate-300 transition-colors">Disclaimer</Link>
            <span>•</span>
            <Link to="/resources" className="hover:text-slate-300 transition-colors">Open Source Papers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
