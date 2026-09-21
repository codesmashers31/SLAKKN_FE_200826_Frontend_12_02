import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Flame, 
  Menu, 
  X, 
  Sparkles, 
  Cpu, 
  Layers, 
  Clock, 
  Compass, 
  Code2, 
  Briefcase, 
  Award, 
  Bot, 
  BookOpen, 
  Info,
  ChevronRight
} from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI War', path: '/ai-war' },
    { name: 'Models', path: '/models' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Future 2030', path: '/future-2030' },
    { name: 'Developer 2030', path: '/developer-2030' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Skills', path: '/skills' },
    { name: 'AI Agents', path: '/agents' },
    { name: 'Resources', path: '/resources' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 bg-[#050816]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 p-[1px] shadow-glow-cyan transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0B1020] rounded-[7px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
                  AI WAR
                </span>
                <span className="font-mono text-xs font-black px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  2030
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono tracking-tight hidden sm:block">
                FRONTIER INTELLIGENCE & DEV GUIDE
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Link
              to="/future-2030"
              className="relative inline-flex items-center justify-center px-4 py-1.5 text-xs font-bold text-white transition-all bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 rounded-lg shadow-glow-cyan hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95 overflow-hidden group"
            >
              <span className="relative flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
                <span>EXPLORE 2030</span>
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#0B1020]/95 border-b border-slate-800 px-4 pt-3 pb-5 space-y-1 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
