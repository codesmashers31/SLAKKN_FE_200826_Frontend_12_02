import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { store } from "./data/store.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "AI WAR 2030 Intelligence API",
    version: "2.0.0",
    timestamp: new Date().toISOString()
  });
});

// Core intelligence endpoints
app.get("/api/companies", (req, res) => {
  res.json({ success: true, data: store.companies });
});

app.get("/api/companies/:id", (req, res) => {
  const company = store.companies.find(c => c.id === req.params.id || c.slug === req.params.id);
  if (!company) {
    return res.status(404).json({ success: false, message: "Company not found" });
  }
  res.json({ success: true, data: company });
});

app.get("/api/capabilities", (req, res) => {
  res.json({ success: true, data: store.capabilities });
});

app.get("/api/models", (req, res) => {
  res.json({ success: true, data: store.models });
});

app.get("/api/models/:id", (req, res) => {
  const model = store.models.find(m => m.id === req.params.id);
  if (!model) {
    return res.status(404).json({ success: false, message: "Model not found" });
  }
  res.json({ success: true, data: model });
});

app.get("/api/timeline", (req, res) => {
  res.json({ success: true, data: store.timeline });
});

app.get("/api/scenarios", (req, res) => {
  res.json({ success: true, data: store.scenarios });
});

app.get("/api/futures", (req, res) => {
  res.json({ success: true, data: store.futures2030 });
});

app.get("/api/developer-roadmap", (req, res) => {
  res.json({ success: true, data: store.developerRoadmap });
});

app.get("/api/jobs", (req, res) => {
  res.json({ success: true, data: store.jobs });
});

app.get("/api/skills", (req, res) => {
  res.json({ success: true, data: store.skills });
});

app.get("/api/agents", (req, res) => {
  res.json({ success: true, data: store.agents });
});

app.get("/api/resources", (req, res) => {
  res.json({ success: true, data: store.resources });
});

// Skill gap analyzer scoring endpoint
app.post("/api/skills/analyze", (req, res) => {
  const { role, selectedSkills = [] } = req.body;
  
  // Calculate AI Readiness Score (0 - 100)
  const allSkills = store.skills.skillGroups.flatMap(g => g.items);
  const totalCount = allSkills.length;
  const selectedCount = selectedSkills.length;

  const aiGroup = store.skills.skillGroups.find(g => g.category.includes("AI Engineering"))?.items || [];
  const aiSelectedCount = selectedSkills.filter(s => aiGroup.some(item => item.id === s)).length;

  const baseScore = Math.min(100, Math.round((selectedCount / totalCount) * 60 + (aiSelectedCount / aiGroup.length) * 40));
  
  let readinessTier = "Beginner Explorer";
  if (baseScore >= 80) readinessTier = "2030 AI System Architect";
  else if (baseScore >= 60) readinessTier = "Agent Engineer";
  else if (baseScore >= 40) readinessTier = "AI-Native Developer";
  else if (baseScore >= 20) readinessTier = "AI-Assisted Developer";

  // Identify top gaps
  const missingAiSkills = aiGroup.filter(item => !selectedSkills.includes(item.id));

  res.json({
    success: true,
    score: baseScore,
    tier: readinessTier,
    selectedCount,
    totalSkills: totalCount,
    missingCritical: missingAiSkills.slice(0, 4),
    recommendedNextSteps: [
      "Master Model Context Protocol (MCP) to standardize tool calling",
      "Adopt Claude Code / agentic CLI tooling into daily refactoring loops",
      "Implement structured JSON output schemas and automated LLM evals",
      "Study multi-agent supervisor patterns for asynchronous pipelines"
    ]
  });
});

app.listen(PORT, () => {
  console.log(`>>> AI WAR 2030 Intelligence Server running on port ${PORT}`);
});
