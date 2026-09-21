import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Sparkles, 
  Workflow, 
  User, 
  Search, 
  Compass, 
  Code, 
  CheckCircle, 
  ShieldAlert, 
  FileText, 
  Globe, 
  Database, 
  Terminal, 
  Cpu, 
  Cloud, 
  ArrowDown, 
  Layers, 
  Play, 
  RefreshCw, 
  CheckCircle2, 
  Plus, 
  Trash2,
  Info
} from 'lucide-react';
import { api } from '../services/api';
import ScenarioBadge from '../components/ScenarioBadge';
import AgentInspectModal from '../components/AgentInspectModal';

export default function AgentsPage() {
  const [agentsData, setAgentsData] = useState(null);
  const [selectedAgentForModal, setSelectedAgentForModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // "Build Your AI Team" State
  const [teamSelection, setTeamSelection] = useState([
    'researcher', 'planner', 'frontend-dev', 'backend-dev', 'tester', 'security-reviewer'
  ]);
  const [builtTeamArchitecture, setBuiltTeamArchitecture] = useState(null);
  const [isBuildingTeam, setIsBuildingTeam] = useState(false);
  const [simulatedLogs, setSimulatedLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAgents() {
      try {
        const data = await api.getAgents();
        setAgentsData(data || null);
      } catch (err) {
        console.error("Error loading agents data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadAgents();
  }, []);

  const openInspector = (agent) => {
    setSelectedAgentForModal(agent);
    setIsModalOpen(true);
  };

  const toggleTeamAgent = (agentId) => {
    if (teamSelection.includes(agentId)) {
      if (teamSelection.length <= 2) {
        alert("Please keep at least 2 agents in your team.");
        return;
      }
      setTeamSelection(teamSelection.filter(id => id !== agentId));
    } else {
      setTeamSelection([...teamSelection, agentId]);
    }
  };

  const handleBuildTeam = () => {
    setIsBuildingTeam(true);
    setSimulatedLogs([]);
    setTimeout(() => {
      setBuiltTeamArchitecture({
        coordinator: "Autonomous Executive Orchestrator",
        squadSize: teamSelection.length,
        agents: teamSelection,
        timestamp: new Date().toLocaleTimeString()
      });
      setIsBuildingTeam(false);

      // Stream fake logs
      setSimulatedLogs([
        "Initializing MCP Tool Server connection...",
        "Spawning sandbox containers (E2B microVMs)...",
        `Orchestrator dispatched specifications to ${teamSelection.length} agents...`,
        "Cross-agent verification protocol established.",
        "Team topology online and ready for tasks."
      ]);
    }, 700);
  };

  const agentProfiles = agentsData?.agentProfiles || [];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-3">
          <Workflow className="w-3.5 h-3.5 text-cyan-400" />
          <span>AGENTIC SYSTEMS LAB</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          AI Agent Lab & Architecture
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-3">
          Explore multi-agent architectures, Model Context Protocol (MCP) tool bindings, and simulate your custom autonomous engineering squad.
        </p>
      </div>

      {/* ================= INTERACTIVE MULTI-AGENT ARCHITECTURE DIAGRAM ================= */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 mb-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-2xl font-black text-white">Hierarchical Multi-Agent Topology</h2>
            <p className="text-xs text-slate-400 mt-0.5">Click on any agent node to inspect internal responsibilities, tools, and human oversight gates.</p>
          </div>
          <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            Interactive Node Inspector
          </span>
        </div>

        {/* Interactive Diagram Flow */}
        <div className="flex flex-col items-center space-y-6">
          
          {/* Node 1: User / Human Intent */}
          <div className="p-4 px-8 rounded-2xl bg-cyan-950/40 border-2 border-cyan-400 shadow-glow-cyan flex items-center gap-3 text-center">
            <User className="w-5 h-5 text-cyan-300" />
            <div>
              <span className="text-[10px] font-mono uppercase text-cyan-300 font-bold block">Input Trigger</span>
              <span className="text-sm font-black text-white">HUMAN ARCHITECT / USER INTENT</span>
            </div>
          </div>

          <ArrowDown className="w-5 h-5 text-cyan-400 animate-bounce" />

          {/* Node 2: Master Orchestrator */}
          <div className="p-4 px-10 rounded-2xl bg-gradient-to-r from-purple-900/60 to-indigo-900/60 border-2 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.3)] flex items-center gap-3 text-center">
            <Bot className="w-6 h-6 text-purple-300" />
            <div>
              <span className="text-[10px] font-mono uppercase text-purple-300 font-bold block">Supervisor Loop</span>
              <span className="text-base font-black text-white">PROJECT MASTER ORCHESTRATOR</span>
            </div>
          </div>

          <ArrowDown className="w-5 h-5 text-purple-400" />

          {/* Node 3: Specialized Sub-Agents (Clickable) */}
          <div className="w-full">
            <div className="text-center mb-3">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Specialized Sub-Agent Mesh (Click to inspect)
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {agentProfiles.slice(0, 6).map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => openInspector(agent)}
                  className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400 hover:shadow-glow-cyan transition-all text-center group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 mx-auto flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform mb-2">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white block group-hover:text-cyan-300">{agent.name}</span>
                  <span className="text-[10px] font-mono text-slate-500 block mt-1">{agent.badge}</span>
                </button>
              ))}
            </div>
          </div>

          <ArrowDown className="w-5 h-5 text-cyan-400" />

          {/* Node 4: Universal Tools / Protocols */}
          <div className="w-full p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
              Model Context Protocol (MCP) Tool Servers & Sandboxes
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {['Headless Browser', 'PostgreSQL Sandbox', 'Terminal (E2B microVM)', 'GitHub & Slack APIs', 'Terraform Cloud'].map((tool, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 font-mono border border-slate-700">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <ArrowDown className="w-5 h-5 text-emerald-400" />

          {/* Node 5: Output */}
          <div className="p-3.5 px-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>VERIFIED PRODUCTION RELEASE / PULL REQUEST</span>
          </div>

        </div>
      </div>

      {/* ================= BUILD YOUR AI TEAM (SIMULATION) ================= */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-purple-500/30 shadow-2xl relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono uppercase text-purple-400 font-bold tracking-widest">
                TEAM SIMULATOR
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Build Your Autonomous AI Squad
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
            UI Architecture Simulation
          </span>
        </div>

        {/* Agent Picker */}
        <div className="mb-6">
          <label className="text-xs font-mono uppercase text-slate-400 font-bold block mb-3">
            Select Agents to Include in Your Custom Squad:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
            {agentProfiles.map((agent) => {
              const isSelected = teamSelection.includes(agent.id);

              return (
                <button
                  key={agent.id}
                  onClick={() => toggleTeamAgent(agent.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all flex items-start justify-between ${
                    isSelected
                      ? 'bg-purple-950/30 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)] text-white'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold block">{agent.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">{agent.badge}</span>
                  </div>
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-purple-400' : 'text-slate-600'}`}>
                    {isSelected ? 'ACTIVE' : 'OFF'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Build Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleBuildTeam}
            disabled={isBuildingTeam}
            className="px-8 py-3 rounded-xl font-bold text-xs font-mono text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            {isBuildingTeam ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>ASSEMBLING TEAM TOPOLOGY...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>BUILD AI TEAM TOPOLOGY</span>
              </>
            )}
          </button>
        </div>

        {/* Built Team Result Simulation */}
        {builtTeamArchitecture && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-slate-950 border border-purple-500/40"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-white uppercase">
                  DEPLOYED SQUAD ARCHITECTURE ({builtTeamArchitecture.squadSize} Agents)
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                Generated at {builtTeamArchitecture.timestamp}
              </span>
            </div>

            {/* Simulated Live Logs */}
            <div className="space-y-1 font-mono text-xs text-slate-400 mb-6 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              {simulatedLogs.map((log, idx) => (
                <div key={idx} className="flex items-center gap-2 text-cyan-300">
                  <span className="text-slate-600">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>

            {/* Visual Team Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {builtTeamArchitecture.agents.map((agId) => {
                const profile = agentProfiles.find(p => p.id === agId);
                return (
                  <div key={agId} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-xs font-bold text-white block truncate">{profile?.name || agId}</span>
                    <span className="text-[10px] font-mono text-emerald-400 mt-1 block">READY</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

      </div>

      {/* Inspector Modal */}
      <AgentInspectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        agent={selectedAgentForModal}
      />

    </div>
  );
}
