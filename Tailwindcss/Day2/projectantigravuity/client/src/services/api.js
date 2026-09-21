import { store as fallbackStore } from "../data/store.js";

const BASE_URL = import.meta.env.VITE_API_URL || "/api";

async function fetchFromApi(endpoint, fallbackData) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const json = await res.json();
    return json.data !== undefined ? json.data : json;
  } catch (err) {
    console.warn(`Falling back to local data store for ${endpoint}:`, err.message);
    return fallbackData;
  }
}

export const api = {
  getCompanies: () => fetchFromApi("/companies", fallbackStore.companies),
  getCapabilities: () => fetchFromApi("/capabilities", fallbackStore.capabilities),
  getModels: () => fetchFromApi("/models", fallbackStore.models),
  getTimeline: () => fetchFromApi("/timeline", fallbackStore.timeline),
  getScenarios: () => fetchFromApi("/scenarios", fallbackStore.scenarios),
  getFutures: () => fetchFromApi("/futures", fallbackStore.futures2030),
  getDeveloperRoadmap: () => fetchFromApi("/developer-roadmap", fallbackStore.developerRoadmap),
  getJobs: () => fetchFromApi("/jobs", fallbackStore.jobs),
  getSkills: () => fetchFromApi("/skills", fallbackStore.skills),
  getAgents: () => fetchFromApi("/agents", fallbackStore.agents),
  getResources: () => fetchFromApi("/resources", fallbackStore.resources),

  analyzeSkills: async (role, selectedSkills) => {
    try {
      const res = await fetch(`${BASE_URL}/skills/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, selectedSkills })
      });
      if (!res.ok) throw new Error("API analysis failed");
      return await res.json();
    } catch (err) {
      // Local fallback calculation
      const allSkills = fallbackStore.skills.skillGroups.flatMap(g => g.items);
      const totalCount = allSkills.length;
      const selectedCount = selectedSkills.length;
      const aiGroup = fallbackStore.skills.skillGroups.find(g => g.category.includes("AI Engineering"))?.items || [];
      const aiSelectedCount = selectedSkills.filter(s => aiGroup.some(item => item.id === s)).length;

      const baseScore = Math.min(100, Math.round((selectedCount / totalCount) * 60 + (aiSelectedCount / aiGroup.length) * 40));
      
      let readinessTier = "Beginner Explorer";
      if (baseScore >= 80) readinessTier = "2030 AI System Architect";
      else if (baseScore >= 60) readinessTier = "Agent Engineer";
      else if (baseScore >= 40) readinessTier = "AI-Native Developer";
      else if (baseScore >= 20) readinessTier = "AI-Assisted Developer";

      const missingAiSkills = aiGroup.filter(item => !selectedSkills.includes(item.id));

      return {
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
      };
    }
  }
};
