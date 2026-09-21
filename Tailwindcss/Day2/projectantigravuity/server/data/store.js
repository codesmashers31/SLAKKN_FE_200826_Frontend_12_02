export const store = {
  companies: [
    {
      id: "openai",
      name: "OpenAI",
      slug: "openai",
      tagline: "Pioneering General Intelligence & Frontier Reasoning",
      color: "#10b981", // emerald
      gradient: "from-emerald-500 to-teal-700",
      accentBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      accentGlow: "shadow-[0_0_30px_rgba(16,185,129,0.25)]",
      founded: "2015",
      ceo: "Sam Altman",
      headquarters: "San Francisco, CA",
      flagshipModels: ["GPT-4o", "o1", "o3-mini", "Sora", "Operator"],
      ecosystem: "ChatGPT, OpenAI API, Custom GPTs, Advanced Voice Mode, Codex, Operator (Computer Use)",
      primaryFocus: "Autonomous reasoning (o-series), general-purpose agents, natural multimodal voice, consumer ubiquity",
      developerPlatform: "OpenAI Platform API, Realtime API (Voice), Structured Outputs, Assistants API, Fine-Tuning",
      agentEcosystem: "OpenAI Operator, Responses API, Function Calling, Swarm Framework",
      strengths: [
        "Massive brand dominance and global consumer distribution via ChatGPT (300M+ WAU)",
        "Pioneering chain-of-thought deliberate reasoning models (o1, o3-mini)",
        "Ultra-low latency bidirectional audio with native voice models",
        "Deep strategic capital and enterprise integration with Microsoft Azure"
      ],
      challenges: [
        "Intense open-source and proprietary price competition",
        "High inference computing infrastructure costs",
        "Leadership turnover and corporate governance restructuring"
      ],
      philosophicalApproach: "Iterative deployment: releasing increasingly capable models incrementally to allow society and safety guardrails to adapt toward AGI.",
      verifiedStats: {
        activeUsers: "300M+ Weekly",
        enterpriseCustomers: "1M+ Businesses",
        contextWindowMax: "128k - 200k tokens",
        primaryBacking: "Microsoft"
      }
    },
    {
      id: "anthropic",
      name: "Anthropic",
      slug: "anthropic",
      tagline: "Safety-First Frontier AI & The Standard for Developer Coding",
      color: "#f59e0b", // warm amber/orange
      gradient: "from-amber-500 to-orange-700",
      accentBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
      accentGlow: "shadow-[0_0_30px_rgba(245,158,11,0.25)]",
      founded: "2021",
      ceo: "Dario Amodei",
      headquarters: "San Francisco, CA",
      flagshipModels: ["Claude 3.7 Sonnet (Hybrid Reasoning)", "Claude 3.5 Sonnet", "Claude 3.5 Haiku", "Claude 3 Opus"],
      ecosystem: "Claude.ai, Anthropic API, Claude Code CLI, Artifacts, Computer Use API, MCP (Model Context Protocol)",
      primaryFocus: "Coding excellence, Constitutional AI safety research, deep agentic workflows, open tool protocols (MCP)",
      developerPlatform: "Anthropic Console API, Claude Code, Model Context Protocol (open standard), Prompt Caching, Batch API",
      agentEcosystem: "Computer Use API (OS manipulation), Claude Code, MCP Ecosystem (universal tool integration)",
      strengths: [
        "Uncontested benchmark leader in software engineering and real-world coding (SWE-bench verified)",
        "Pioneered Model Context Protocol (MCP) as the open standard for tool and context interoperability",
        "Pioneered Hybrid Reasoning in Claude 3.7 Sonnet (instant vs controllable deliberate thinking)",
        "Leading interpretability research and Constitutional AI alignment framework"
      ],
      challenges: [
        "Less consumer ubiquity compared to ChatGPT",
        "Smaller capital reserves compared to Google (supported by Amazon and Google)",
        "No proprietary real-time full-duplex speech modality released yet"
      ],
      philosophicalApproach: "Constitutional AI & Mechanistic Interpretability: Building reliable, steerable, and transparent frontier models where safety research directly enables capability.",
      verifiedStats: {
        activeUsers: "Top choice among professional software developers",
        enterpriseCustomers: "AWS Bedrock & GCP Vertex Integration",
        contextWindowMax: "200k tokens (100k+ output in 3.7)",
        primaryBacking: "Amazon & Google"
      }
    },
    {
      id: "google",
      name: "Google Gemini",
      slug: "gemini",
      tagline: "Natively Multimodal Intelligence with Massive 2M+ Context",
      color: "#8b5cf6", // blue-purple gradient
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      accentBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
      accentGlow: "shadow-[0_0_30px_rgba(139,92,246,0.25)]",
      founded: "DeepMind (2010) / Google AI (2023 Consolidated)",
      ceo: "Sundar Pichai / Demis Hassabis",
      headquarters: "Mountain View & London",
      flagshipModels: ["Gemini 2.0 Flash", "Gemini 2.0 Pro Exp", "Gemini 1.5 Pro", "Gemini 1.5 Flash", "AlphaFold 3"],
      ecosystem: "Google AI Studio, Vertex AI, Gemini Live, Workspace Integration, Project Astra, Gemma (Open Weights)",
      primaryFocus: "Native all-modal processing (audio, video, text, code), 2M+ token infinite context, custom TPU infrastructure, science/DeepMind discovery",
      developerPlatform: "Google AI Studio, Vertex AI, Gemini CLI, Function Calling, System Instructions, Multimodal Live API",
      agentEcosystem: "Project Astra, Deep Research Agent, Gemini Agents in Workspace, Android On-Device Agents",
      strengths: [
        "Colossal 2 Million+ token context window allowing entire repositories and video hours in single prompts",
        "World-class in-house custom TPU hardware stack (TPU v5p/Trillium) granting unmatched cost economics",
        "Native ground-up multimodal processing from inception (audio, pixels, code, text seamlessly unified)",
        "Deep scientific breakthroughs via DeepMind (Nobel prize in Chemistry for AlphaFold)"
      ],
      challenges: [
        "Historical corporate bureaucracy in product releases and brand fragmentation",
        "Balancing search ad-revenue cannibalization with direct answer synthesis"
      ],
      philosophicalApproach: "Native Multimodality & Planetary Scale: Training unified intelligence across all digital senses backed by custom silicon and scientific first principles.",
      verifiedStats: {
        activeUsers: "2B+ ecosystem users through Android & Workspace",
        enterpriseCustomers: "GCP Vertex AI Fortune 500 roster",
        contextWindowMax: "2,000,000+ tokens (Industry record)",
        primaryBacking: "Alphabet"
      }
    }
  ],

  capabilities: [
    {
      category: "Reasoning & Problem Solving",
      type: "Reasoning",
      openai: {
        rating: "Industry Pioneer",
        detail: "Pioneered test-time deliberate thinking with o1 and o3-mini. Produces hidden thinking tokens before responding, excelling in PhD-level science, competitive math, and logic puzzles.",
        highlight: "o1 / o3-mini deliberate compute scaling"
      },
      anthropic: {
        rating: "Hybrid Reasoning Frontier",
        detail: "Claude 3.7 Sonnet introduced revolutionary hybrid reasoning, allowing users and developers to dynamically control the thinking budget from 0 to 128k tokens, offering instant or deep analysis.",
        highlight: "Claude 3.7 Sonnet controllable hybrid thinking"
      },
      google: {
        rating: "Deep Multimodal Reasoning",
        detail: "Gemini 2.0 Flash Thinking / Pro Exp combines deep reasoning with native multimodal cross-modal understanding, solving visual geometry, complex code refactoring, and multi-hour video analysis.",
        highlight: "Gemini 2.0 Flash Thinking & Deep Research"
      }
    },
    {
      category: "Coding & Software Engineering",
      type: "Coding",
      openai: {
        rating: "High Tier & Generalist",
        detail: "GPT-4o and o3-mini are strong across algorithms and code generation, backed by GitHub Copilot integration and structured JSON output guarantees.",
        highlight: "GitHub Copilot default & o3-mini algorithmic coding"
      },
      anthropic: {
        rating: "Gold Standard",
        detail: "Widely regarded by engineering teams as the #1 coding model. Claude 3.5 & 3.7 Sonnet lead verified SWE-bench benchmarks with superior architectural reasoning, codebase refactoring, and Claude Code CLI.",
        highlight: "SWE-bench industry benchmark leader & Claude Code"
      },
      google: {
        rating: "Massive Context Codebase Review",
        detail: "Gemini 1.5 Pro & 2.0 Flash can ingest entire 100k+ line codebases and complete architectural repositories in a single 2M context window, enabling whole-repository refactoring.",
        highlight: "Full-repo 2M token context ingestion"
      }
    },
    {
      category: "Agents & Autonomous Workflows",
      type: "Agents",
      openai: {
        rating: "Operator & Swarm",
        detail: "Introduced Operator for autonomous browser tasks, Assistants API, Responses API, and lightweight Swarm multi-agent orchestration pattern.",
        highlight: "OpenAI Operator (Web automation) & Swarm"
      },
      anthropic: {
        rating: "Open Standards & Computer Use",
        detail: "Pioneered OS-level Computer Use API (direct mouse/keyboard/screen interaction) and created Model Context Protocol (MCP) as the universal standard for agent tool connections.",
        highlight: "Computer Use API & Model Context Protocol (MCP)"
      },
      google: {
        rating: "Deep Research & Multimodal Agents",
        detail: "Project Astra real-time visual-audio agents and Gemini Deep Research autonomous search engine capable of synthesizing hundreds of live sources into comprehensive reports.",
        highlight: "Project Astra & Gemini Deep Research"
      }
    },
    {
      category: "Multimodal AI (Audio, Vision, Video)",
      type: "Multimodal",
      openai: {
        rating: "Realtime Voice & Sora Video",
        detail: "Native speech-to-speech Advanced Voice Mode with emotional inflection and interruptibility; Sora generation engine for photorealistic high-fidelity video.",
        highlight: "Realtime Speech API & Sora Video"
      },
      anthropic: {
        rating: "High Precision Vision",
        detail: "World-class visual document analysis, chart interpretation, and screen-state parsing for Computer Use, with text-first architectural purity.",
        highlight: "Complex visual diagrams & screenshot parsing"
      },
      google: {
        rating: "Native Ground-Up Multimodal",
        detail: "Designed from ground up natively across all modalities. Interleaved video, audio, code, and text in real time with up to 1 hour of video in a single inference call.",
        highlight: "Multimodal Live API & 1-hr raw video processing"
      }
    },
    {
      category: "Context Window Capacity",
      type: "Enterprise",
      openai: {
        rating: "128,000 Tokens",
        detail: "Standard 128k context across GPT-4o and o1 series with robust middle-context retrieval.",
        highlight: "128k context window"
      },
      anthropic: {
        rating: "200,000 Tokens + Prompt Caching",
        detail: "200k input context with industry-leading 90% discount prompt caching, enabling cost-effective multi-turn agent execution with large system prompts.",
        highlight: "200k context + 90% cost reduction Prompt Caching"
      },
      google: {
        rating: "2,000,000+ Tokens",
        detail: "Uncontested industry record with 2 Million tokens in production. Capable of analyzing 1,400 pages of text, 1 hour of video, or 30,000 lines of code in one prompt.",
        highlight: "2M tokens (1M+ in Flash 2.0 / 1.5 Pro)"
      }
    },
    {
      category: "Developer Ecosystem & Open Standards",
      type: "Enterprise",
      openai: {
        rating: "Pervasive APIs & Tooling",
        detail: "De facto standard REST API structure adopted by hundreds of proxy libraries; massive library of SDKs, wrappers, and tutorials worldwide.",
        highlight: "Industry-standard API syntax & SDKs"
      },
      anthropic: {
        rating: "Open Tool Standard Pioneer (MCP)",
        detail: "Created Model Context Protocol (MCP) to liberate AI agents from vendor lock-in; open-sourced Claude Code CLI for terminal-native agentic development.",
        highlight: "Model Context Protocol (MCP) open ecosystem"
      },
      google: {
        rating: "Google AI Studio & Vertex AI",
        detail: "Zero-friction prototyping in AI Studio with generous free tiers, robust enterprise security on Vertex AI, and Gemma open-weights models for self-hosting.",
        highlight: "Google AI Studio generous tier & Gemma open models"
      }
    },
    {
      category: "Safety Research & Alignment",
      type: "Research",
      openai: {
        rating: "Preparedness Framework",
        detail: "System cards, red-teaming networks, automated safety evaluations, and catastrophic risk tracking across CBRN (chemical, biological, radiological, nuclear).",
        highlight: "Frontier Preparedness Framework"
      },
      anthropic: {
        rating: "Constitutional AI & Mechanistic Interpretability",
        detail: "Invented Constitutional AI (training models via written constitutional principles) and leading the world in dictionary learning / neural network feature visualization.",
        highlight: "Constitutional AI & Mechanistic Interpretability"
      },
      google: {
        rating: "DeepMind Alignment & SynthID",
        detail: "Pioneered SynthID digital watermarking for AI audio/images/text, alongside rigorous DeepMind evaluation suites for autonomous capability thresholds.",
        highlight: "SynthID watermarking & DeepMind Safety Suites"
      }
    }
  ],

  models: [
    {
      id: "claude-3-7-sonnet",
      provider: "Anthropic",
      providerSlug: "anthropic",
      name: "Claude 3.7 Sonnet",
      releaseDate: "February 2025",
      primaryPurpose: "Hybrid reasoning & frontier coding for complex software architecture and agentic tools",
      contextCapability: "200,000 tokens",
      maxOutput: "64,000 - 128,000 tokens",
      inputModes: ["Text", "Code", "Images", "PDFs", "Screenshots"],
      outputModes: ["Text", "Code", "Thinking Tokens (Controllable)"],
      reasoningSupport: "Native Hybrid (Controllable budget 0 to 128k thinking tokens)",
      codingSupport: "Leading Verified SWE-bench, full-stack architecture, refactoring, Claude Code integration",
      toolSupport: "Model Context Protocol (MCP), Function Calling, Computer Use",
      agentSupport: "Native Computer Use, OS automation, terminal tool calling, multi-agent pipelines",
      apiAvailability: "Anthropic API, AWS Bedrock, GCP Vertex AI",
      bestSuitedFor: "Complex software engineering, multi-hour refactoring, dynamic thinking tasks, agentic computer workflows",
      knownLimitations: "No native real-time audio generation; premium pricing for max thinking budgets",
      badge: "Flagship Hybrid"
    },
    {
      id: "o3-mini",
      provider: "OpenAI",
      providerSlug: "openai",
      name: "o3-mini",
      releaseDate: "January 2025",
      primaryPurpose: "High-speed deliberate reasoning and competitive coding at cost-efficient inference",
      contextCapability: "200,000 tokens",
      maxOutput: "100,000 tokens",
      inputModes: ["Text", "Code"],
      outputModes: ["Text", "Code", "Hidden Reasoning"],
      reasoningSupport: "Deliberate chain-of-thought (Low, Medium, High reasoning effort levels)",
      codingSupport: "Exceptional competitive coding, math reasoning, structured JSON outputs",
      toolSupport: "Function Calling, Structured Outputs, Developer Messages",
      agentSupport: "Agent routing, deep logic verification, code linting & analysis",
      apiAvailability: "OpenAI Platform API, Azure OpenAI",
      bestSuitedFor: "Algorithmic challenges, mathematical proofs, low-latency reasoning queries",
      knownLimitations: "Text-only input (no image/video inputs), hidden reasoning tokens cannot be modified mid-stream",
      badge: "Fast Reasoning"
    },
    {
      id: "gpt-4o",
      provider: "OpenAI",
      providerSlug: "openai",
      name: "GPT-4o (Omni)",
      releaseDate: "May 2024",
      primaryPurpose: "Flagship high-speed general intelligence with native bidirectional voice & vision",
      contextCapability: "128,000 tokens",
      maxOutput: "16,384 tokens",
      inputModes: ["Text", "Code", "Images", "Realtime Audio"],
      outputModes: ["Text", "Code", "Realtime Audio"],
      reasoningSupport: "Fast intuitive heuristic reasoning (non-deliberate)",
      codingSupport: "High generalist coding, copilot completions, web app prototyping",
      toolSupport: "Assistants API, Function Calling, Structured JSON",
      agentSupport: "Swarm, OpenAI Operator, Assistants API, Voice Agents",
      apiAvailability: "OpenAI API, Realtime API, Azure OpenAI",
      bestSuitedFor: "Conversational voice agents, interactive tutoring, broad general intelligence queries",
      knownLimitations: "Can struggle with ultra-deep multi-step logic compared to o1/o3 or Sonnet 3.7",
      badge: "Omni Multimodal"
    },
    {
      id: "claude-3-5-sonnet",
      provider: "Anthropic",
      providerSlug: "anthropic",
      name: "Claude 3.5 Sonnet",
      releaseDate: "June 2024 (Updated Oct 2024)",
      primaryPurpose: "Industry benchmark standard for coding, visual document parsing, and agentic Computer Use",
      contextCapability: "200,000 tokens",
      maxOutput: "8,192 tokens",
      inputModes: ["Text", "Code", "Images", "PDFs"],
      outputModes: ["Text", "Code"],
      reasoningSupport: "High-speed architectural reasoning",
      codingSupport: "Premier coding benchmark score, artifact rendering, UI generation",
      toolSupport: "MCP, Computer Use, Tool Calling",
      agentSupport: "Computer Use API (mouse, keyboard, click actions)",
      apiAvailability: "Anthropic API, AWS Bedrock, GCP Vertex AI",
      bestSuitedFor: "Everyday software development, complex UI/UX generation, automated testing",
      knownLimitations: "Fixed non-controllable reasoning depth compared to 3.7 Sonnet",
      badge: "Industry Standard"
    },
    {
      id: "gemini-2-0-flash",
      provider: "Google Gemini",
      providerSlug: "gemini",
      name: "Gemini 2.0 Flash",
      releaseDate: "December 2024",
      primaryPurpose: "Next-gen lightning-fast multimodal reasoning with real-time video/audio streaming and agent tools",
      contextCapability: "1,048,576 tokens",
      maxOutput: "8,192 tokens",
      inputModes: ["Text", "Code", "Images", "Realtime Audio", "Realtime Video"],
      outputModes: ["Text", "Code", "Realtime Audio"],
      reasoningSupport: "Gemini Flash Thinking (integrated test-time compute variant)",
      codingSupport: "Fast code synthesis, full repository search, multi-file inspection",
      toolSupport: "Google Search grounding, Code Execution, Function Calling, Multimodal Live API",
      agentSupport: "Project Astra real-time camera agents, live audio streaming agents",
      apiAvailability: "Google AI Studio, Vertex AI",
      bestSuitedFor: "Real-time interactive camera/voice agents, high-throughput batch processing, live stream analysis",
      knownLimitations: "Output length bounded to 8k tokens per generation",
      badge: "Realtime Live"
    },
    {
      id: "gemini-1-5-pro",
      provider: "Google Gemini",
      providerSlug: "gemini",
      name: "Gemini 1.5 Pro",
      releaseDate: "February 2024",
      primaryPurpose: "Massive 2M token long-context ingestion for colossal codebases, books, and multi-hour video",
      contextCapability: "2,097,152 tokens",
      maxOutput: "8,192 tokens",
      inputModes: ["Text", "Code", "Images", "Audio", "Video (1+ hour)"],
      outputModes: ["Text", "Code"],
      reasoningSupport: "Long-horizon in-context needle-in-a-haystack synthesis",
      codingSupport: "Whole repository understanding, legacy migration, architecture mapping",
      toolSupport: "Function Calling, Python Code Execution Sandbox, Search Grounding",
      agentSupport: "Deep document review agents, video analysis pipelines",
      apiAvailability: "Google AI Studio, Vertex AI",
      bestSuitedFor: "Ingesting 50,000+ line codebases, analyzing multi-hour video footage, complex academic synthesis",
      knownLimitations: "Higher latency when utilizing full 2M token context",
      badge: "2M Context King"
    },
    {
      id: "o1",
      provider: "OpenAI",
      providerSlug: "openai",
      name: "OpenAI o1",
      releaseDate: "December 2024",
      primaryPurpose: "Frontier full-scale deliberate reasoning for scientific research and advanced algorithms",
      contextCapability: "200,000 tokens",
      maxOutput: "100,000 tokens",
      inputModes: ["Text", "Code", "Images"],
      outputModes: ["Text", "Code", "Hidden Thinking"],
      reasoningSupport: "Full-tier reasoning compute allocation",
      codingSupport: "Deep algorithmic optimization, mathematical problem solving",
      toolSupport: "Vision reasoning, function calling in o1-pro",
      agentSupport: "High-assurance decision making, mathematical validation",
      apiAvailability: "OpenAI API (Tier 5), ChatGPT Pro",
      bestSuitedFor: "Scientific hypothesis testing, quantum/bio research, high-stakes verification",
      knownLimitations: "High token cost and longer inference wait times",
      badge: "Deep Reasoning"
    },
    {
      id: "deepseek-r1",
      provider: "DeepSeek",
      providerSlug: "deepseek",
      name: "DeepSeek R1",
      releaseDate: "January 2025",
      primaryPurpose: "Open-weights reinforcement learning reasoning model trained with pure RL incentives",
      contextCapability: "128,000 tokens",
      maxOutput: "8,192 tokens",
      inputModes: ["Text", "Code"],
      outputModes: ["Text", "Code", "Visible Thinking Tokens"],
      reasoningSupport: "Pure RL-driven visible chain-of-thought with emergent self-correction",
      codingSupport: "High algorithmic coding, LeetCode Hard solutions, mathematical derivation",
      toolSupport: "Standard Function Calling, Self-hosted Ollama/vLLM endpoints",
      agentSupport: "Open-source reasoning pipelines, private infrastructure agents",
      apiAvailability: "DeepSeek API, Open Weights (Hugging Face), Local Ollama",
      bestSuitedFor: "Private local hosting, open-source research, low-cost reasoning APIs",
      knownLimitations: "Third-party hosting quality varies; censorship constraints on sensitive topics",
      badge: "Open Reasoning"
    }
  ],

  timeline: [
    {
      year: "2020",
      title: "Language Model Scale Emergence",
      era: "Historical",
      isProjected: false,
      description: "OpenAI releases GPT-3 with 175B parameters, revealing unexpected few-shot emergent learning properties in large transformer architectures.",
      milestones: ["GPT-3 175B release", "Scaling laws paper published by Kaplan et al.", "Prompt engineering begins"],
      icon: "Cpu"
    },
    {
      year: "2022",
      title: "Chat AI Becomes Mainstream",
      era: "Historical",
      isProjected: false,
      description: "ChatGPT launches in November 2022, reaching 100M monthly active users in record time. RLHF (Reinforcement Learning from Human Feedback) turns raw models into intuitive conversational assistants.",
      milestones: ["ChatGPT launch", "InstructGPT RLHF breakthrough", "Mainstream global consciousness of generative AI"],
      icon: "MessageSquare"
    },
    {
      year: "2023",
      title: "Frontier Competition & Ecosystem Wars",
      era: "Historical",
      isProjected: false,
      description: "GPT-4 establishes standard for high intelligence. Anthropic releases Claude 2 and Constitutional AI. Google unveils Gemini project. Open-source Llama ignites global developer community.",
      milestones: ["GPT-4 release", "Anthropic Claude 2 with 100k context", "Meta Llama 2 open weights", "Function calling introduced"],
      icon: "Flame"
    },
    {
      year: "2024",
      title: "Multimodal Acceleration & Coding Domination",
      era: "Historical",
      isProjected: false,
      description: "Claude 3.5 Sonnet dominates software engineering benchmarks. Google unveils 2M token context in Gemini 1.5 Pro. OpenAI launches GPT-4o with native realtime voice. Anthropic introduces Computer Use API.",
      milestones: ["Claude 3.5 Sonnet sets SWE-bench record", "Gemini 2M token breakthrough", "OpenAI Advanced Voice Mode & o1-preview", "Model Context Protocol (MCP) released"],
      icon: "Layers"
    },
    {
      year: "2025",
      title: "Reasoning Models & Agentic Protocols",
      era: "Current Era",
      isProjected: false,
      description: "Deliberate test-time reasoning takes center stage with OpenAI o3-mini and Anthropic Claude 3.7 Sonnet (Hybrid Reasoning). Terminal-native agent tools like Claude Code and OpenAI Operator emerge.",
      milestones: ["Claude 3.7 Sonnet Hybrid Reasoning (128k thinking)", "OpenAI o3-mini deliberate compute", "Claude Code CLI autonomous repo tool", "DeepSeek R1 open reasoning revolution"],
      icon: "Brain"
    },
    {
      year: "2026",
      title: "Agentic Development & Tool Interoperability",
      era: "Transition Era",
      isProjected: false,
      description: "Autonomous software development workflows mature. Model Context Protocol (MCP) connects IDEs, terminal agents, databases, and continuous delivery pipelines into unified agentic loops.",
      milestones: ["IDEs transform into multi-agent command centers", "Standardized tool registries across enterprise", "Sub-agent orchestration standard in production"],
      icon: "Workflow"
    },
    {
      year: "2027",
      title: "Enterprise Multi-Agent Orchestration",
      era: "Scenario / Projection",
      isProjected: true,
      badge: "SCENARIO / PROJECTION",
      description: "Plausible future scenario: Autonomous agent clusters handle end-to-end bug triage, regression suite generation, migration refactoring, and infrastructure provisioning under senior human architectural supervision.",
      milestones: ["Autonomous ticket-to-PR pipelines with human approval gates", "Self-healing distributed microservices", "Synthetic integration test generation at scale"],
      icon: "ShieldAlert"
    },
    {
      year: "2028",
      title: "Autonomous Software Delivery Pipelines",
      era: "Scenario / Projection",
      isProjected: true,
      badge: "SCENARIO / PROJECTION",
      description: "Expected direction: Software engineering teams shrink in raw coding headcounts but expand in architectural influence. Developers design systems, audit security boundaries, and verify formal logic specifications.",
      milestones: ["Natural-language-to-production deployment guardrails", "Formal verification AI checkers", "Zero-boilerplate full-stack generation"],
      icon: "Terminal"
    },
    {
      year: "2029",
      title: "Adaptive AI Operating Systems",
      era: "Scenario / Projection",
      isProjected: true,
      badge: "SCENARIO / PROJECTION",
      description: "Possible future: Traditional software UI gives way to intention-driven ambient operating environments where custom ephemeral applications are generated on-the-fly for single-use tasks.",
      milestones: ["Ephemeral UI synthesis based on user intent", "Cross-device unified agent memory", "Autonomous multi-company business negotiation agents"],
      icon: "Sparkles"
    },
    {
      year: "2030",
      title: "The Human-AI Collaborative Frontier",
      era: "Scenario / Projection",
      isProjected: true,
      badge: "SCENARIO / PROJECTION",
      description: "Speculative scenario: Frontier AGI/ASI research boundaries. Small 5-person engineering squads operate capabilities equivalent to 500-person legacy enterprises through orchestrated autonomous intelligence swarms.",
      milestones: ["AI-native trillion-dollar micro-enterprises", "Human judgment and taste as primary engineering differentiators", "Continuous self-optimizing software ecosystems"],
      icon: "Globe"
    }
  ],

  scenarios: [
    {
      id: "scenario-01",
      number: "01",
      title: "AI Personal Agents",
      subtitle: "Autonomous multi-step execution across personal & digital life",
      status: "Plausible Future",
      icon: "UserCheck",
      description: "AI assistants evolve from single-turn chat boxes into proactive executive agents that execute multi-step workflows across systems with minimal human hand-holding.",
      capabilities: [
        "In-depth research synthesis across thousands of papers and live data streams",
        "Autonomous email preparation, priority filtering, and negotiation drafts",
        "Complex calendar orchestration across multi-party enterprise stakeholders",
        "Autonomous code debugging, environment reproduction, and pull request drafting",
        "Automated financial bookkeeping, tax preparation, and invoice reconciliation",
        "Personalized lifelong learning schedules tailored to real-time skill gaps"
      ],
      humanRole: "Final intent specification, ethical boundaries, high-stakes authorization, and taste verification."
    },
    {
      id: "scenario-02",
      number: "02",
      title: "Agentic Software Development",
      subtitle: "From writing syntax to orchestrating autonomous engineering squads",
      status: "Expected Direction",
      icon: "Code2",
      description: "Developers transition from manual line-by-line keystroke coding toward high-level system architecture, formal requirements modeling, and continuous agent supervision.",
      capabilities: [
        "Natural specification -> architecture diagram -> multi-repo scaffold in minutes",
        "Continuous automated test-driven development (TDD) with synthetic fuzzing",
        "Autonomous dependency upgrades, security patching, and framework migrations",
        "Zero-latency translation between legacy COBOL/C++ and modern Rust/TypeScript",
        "Self-healing runtime exceptions with automated rollback and patch PRs"
      ],
      humanRole: "System architecture, threat modeling, business domain logic, UX taste, and safety signing."
    },
    {
      id: "scenario-03",
      number: "03",
      title: "AI-Native Micro-Companies",
      subtitle: "Billion-dollar outcomes operated by 5-person super-teams",
      status: "Plausible Future",
      icon: "Building2",
      description: "The capital and headcount barrier to launching global scale software products drops by orders of magnitude. Small cross-functional teams direct specialized agent swarms.",
      capabilities: [
        "Continuous 24/7 autonomous customer support with native voice & multimodal troubleshooting",
        "Automated product analytics, cohort clustering, and personalized feature rollouts",
        "Automated marketing copy, visual asset creation, and campaign A/B optimization",
        "Dynamic localized pricing engines adjusting to global market shifts in real time"
      ],
      humanRole: "Visionary product discovery, customer empathy, ethical stewardship, and capital allocation."
    },
    {
      id: "scenario-04",
      number: "04",
      title: "Personalized Education at Scale",
      subtitle: "1-on-1 Socrates-grade tutoring available for every human on Earth",
      status: "Scenario",
      icon: "GraduationCap",
      description: "Every student gains an infinitely patient, multimodal tutor that adapts analogies, pacing, visual representations, and difficulty curves to their unique cognitive profile.",
      capabilities: [
        "Real-time diagnostic identification of exact foundational misconceptions",
        "Dynamic generation of interactive 3D simulations and code sandboxes",
        "Native voice conversation with natural pauses, emotional empathy, and encouraging tone",
        "Continuous adaptation across neurodiverse learning styles (ADHD, visual learners)"
      ],
      humanRole: "Human mentorship, emotional resilience training, collaborative group projects, and moral guidance."
    },
    {
      id: "scenario-05",
      number: "05",
      title: "AI + Physical Robotics",
      subtitle: "Frontier multimodal models step into physical spatial bodies",
      status: "Speculation",
      icon: "Bot",
      description: "Vision-Language-Action (VLA) models combine frontier reasoning with humanoid and specialized robotic actuators, bridging digital intelligence with physical world labor.",
      capabilities: [
        "Spatial reasoning for zero-shot manipulation of arbitrary household and warehouse objects",
        "Real-time hazard detection and physical safety constraint verification",
        "Autonomous lab experimentation and physical chemistry wet-lab synthesis",
        "Precision agricultural harvesting and construction assistance"
      ],
      humanRole: "Physical safety overrides, operational boundaries, task prioritization, and maintenance."
    },
    {
      id: "scenario-06",
      number: "06",
      title: "Multi-Agent System Swarms",
      subtitle: "Specialized collaborative agent teams with division of labor",
      status: "Expected Direction",
      icon: "Network",
      description: "Rather than one giant monolithic model trying to do everything, software evolves into networks of specialized agents communicating via standard protocols like MCP.",
      capabilities: [
        "Research Agent gathers constraints and reads latest docs",
        "Planning Agent structures architecture and defines API contracts",
        "Coding Agent implements modular components and unit tests",
        "Security Agent performs threat modeling and vulnerability scanning",
        "QA Agent executes synthetic user journeys and chaos tests",
        "Deployment Agent configures Terraform and manages canary rollouts"
      ],
      humanRole: "Orchestrator-in-chief: setting top-level objectives and arbitrating inter-agent disputes."
    },
    {
      id: "scenario-07",
      number: "07",
      title: "AI Ambient Operating Layer",
      subtitle: "Intent-driven computing replacing traditional app silos",
      status: "Speculation",
      icon: "Laptop",
      description: "Users no longer toggle between 30 separate SaaS tabs and desktop applications. Computing shifts to an ambient interface where you state what you want accomplished.",
      capabilities: [
        "Direct orchestration across APIs, databases, browsers, and local storage",
        "Ephemeral UI generation: customized interactive dashboards generated only for the current task",
        "Unified context awareness across calendar, chat, audio meetings, and documents",
        "Zero-friction cross-platform execution (macOS, Linux, Windows, Mobile, Cloud)"
      ],
      humanRole: "Intent declaration, critical review of high-impact actions, and permission boundaries."
    },
    {
      id: "scenario-08",
      number: "08",
      title: "Human + AI Collaborative Symbiosis",
      subtitle: "Leveraging the asymmetric complementary superpowers of both",
      status: "Core Philosophy",
      icon: "Users",
      description: "The winning paradigm is neither 100% human manual labor nor 100% unmonitored rogue AI. The greatest leverage comes from optimal symbiotic division of responsibility.",
      capabilities: [
        "Human: Judgment, Moral Accountability, Creativity, Empathy, Domain Experience, Strategy",
        "AI: Instant Generation, Exhaustive Search, Mass Parallel Execution, 24/7 Vigilance, Pattern Matching",
        "Continuous feedback loops where human critiques improve model alignment over time",
        "Amplified individual impact: 1 engineer building systems previously requiring 50"
      ],
      humanRole: "Accountability, original vision, human connection, taste, and ultimate responsibility."
    }
  ],

  futures2030: {
    scenarios: [
      {
        id: "conservative",
        name: "Conservative Future",
        tagline: "Supercharged Assistants with Human Bottlenecks",
        summary: "AI systems become significantly faster and more capable, but remain primarily reactive copilots. Rigorous regulatory constraints and reliability bounds keep humans directly in the loop for almost every digital action.",
        developerImpact: "Developers still write 40-60% of code manually while relying heavily on autocomplete and chat assistants for boilerplate and documentation lookup.",
        automationLevel: "35% of repetitive digital tasks fully automated",
        humanSupervision: "High (Mandatory human sign-off on all generated assets)"
      },
      {
        id: "balanced",
        name: "Balanced Future",
        tagline: "Supervised Autonomous Agent Swarms (Most Likely Direction)",
        summary: "AI agents operate with substantial autonomy across specialized domains (testing, refactoring, research, customer support) while human architects direct high-level strategy, ethics, and system designs.",
        developerImpact: "Developers operate as AI Orchestrators. 80%+ of raw syntax is synthesized by models; developers focus on system design, security, business logic, and code review.",
        automationLevel: "70% of standard software implementation and routine operations automated",
        humanSupervision: "Balanced (Humans act as architects and reviewers at key checkpoints)"
      },
      {
        id: "agentic",
        name: "Agentic Future",
        tagline: "Autonomous Self-Optimizing Digital Ecosystems",
        summary: "Highly capable autonomous multi-agent networks coordinate complex digital architectures with minimal human intervention. Ephemeral micro-services are generated, tested, and decommissioned dynamically in real time.",
        developerImpact: "Traditional software engineering is replaced by Formal Systems Architecture and AI Governance. Natural specification and mathematical constraint verification become the primary skills.",
        automationLevel: "90%+ of digital execution automated",
        humanSupervision: "Strategic Oversight (Humans set boundary guardrails and strategic goals)"
      }
    ],
    timelineSliderData: [
      {
        year: 2026,
        devManualWork: 65,
        aiCapability: 72,
        automation: 40,
        humanInvolvement: 85,
        agentUsage: 45,
        description: "AI copilots are ubiquitous; autonomous agents handle small tasks like unit test creation and PR summaries under direct oversight."
      },
      {
        year: 2027,
        devManualWork: 50,
        aiCapability: 80,
        automation: 55,
        humanInvolvement: 75,
        agentUsage: 60,
        description: "Standardized protocols (MCP) allow multi-agent pipelines to execute full bug triage and micro-service scaffolding."
      },
      {
        year: 2028,
        devManualWork: 35,
        aiCapability: 88,
        automation: 70,
        humanInvolvement: 65,
        agentUsage: 75,
        description: "Agentic teams manage end-to-end continuous integration and deployment. Developers focus heavily on system architecture and review."
      },
      {
        year: 2029,
        devManualWork: 22,
        aiCapability: 94,
        automation: 82,
        humanInvolvement: 55,
        agentUsage: 88,
        description: "Ephemeral applications and intent-driven ambient computing become widespread across modern developer stacks."
      },
      {
        year: 2030,
        devManualWork: 12,
        aiCapability: 98,
        automation: 90,
        humanInvolvement: 48,
        agentUsage: 96,
        description: "High-leverage Human Architects direct autonomous multi-agent swarms. System design, taste, security, and ethics are the supreme differentiators."
      }
    ]
  },

  developerRoadmap: {
    evolutionLadder: [
      {
        stage: "Stage 01",
        title: "Traditional Developer",
        badge: "Legacy Era",
        icon: "Code",
        color: "text-slate-400 border-slate-700 bg-slate-900/50",
        description: "Writes most syntax manually from scratch. Spends hours debugging compiler errors, reading StackOverflow, and writing boilerplate CRUD endpoints.",
        primaryTools: ["VS Code", "StackOverflow", "Manual Linters", "Git CLI"]
      },
      {
        stage: "Stage 02",
        title: "AI-Assisted Developer",
        badge: "Current Standard",
        icon: "Sparkles",
        color: "text-blue-400 border-blue-500/30 bg-blue-950/30",
        description: "Uses inline copilots (GitHub Copilot, Cursor, Supermaven) and web chat models to accelerate writing boilerplate, regex, SQL queries, and unit tests.",
        primaryTools: ["Cursor", "GitHub Copilot", "ChatGPT", "Claude.ai"]
      },
      {
        stage: "Stage 03",
        title: "AI-Native Developer",
        badge: "Emerging Standard",
        icon: "Layers",
        color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/30",
        description: "Builds applications infused with LLMs, RAG vector search, structured outputs, function calling, and embedding pipelines from day one.",
        primaryTools: ["OpenAI / Anthropic APIs", "LangChain / LlamaIndex", "Pinecone / pgvector", "Vercel AI SDK"]
      },
      {
        stage: "Stage 04",
        title: "Agent Engineer",
        badge: "High Growth",
        icon: "Bot",
        color: "text-amber-400 border-amber-500/30 bg-amber-950/30",
        description: "Creates autonomous multi-agent workflows with tool-calling capabilities, persistent state memory, sandboxed execution environments, and MCP servers.",
        primaryTools: ["Model Context Protocol (MCP)", "Claude Code", "CrewAI", "AutoGen", "E2B Sandboxes"]
      },
      {
        stage: "Stage 05",
        title: "AI System Architect",
        badge: "2030 Frontier",
        icon: "Cpu",
        color: "text-purple-400 border-purple-500/30 bg-purple-950/30",
        description: "Designs large-scale symbiotic human + AI operating systems. Defines boundary guardrails, threat models, orchestration protocols, and formal correctness proofs.",
        primaryTools: ["Multi-Agent Mesh", "AI Evaluation Suites", "Formal Verification", "System Observability"]
      }
    ],

    levels: [
      {
        level: "LEVEL 01",
        title: "Foundations & Web Core",
        status: "Essential Prerequisite",
        description: "Without solid computing and web fundamentals, you cannot evaluate if an AI's code is secure, scalable, or correct.",
        skills: [
          { name: "HTML5 & Modern CSS", tag: "Frontend Core", desc: "Semantic markup, CSS Grid, Flexbox, accessible design" },
          { name: "JavaScript & TypeScript", tag: "Language Core", desc: "ES6+, async/await, closures, strict type systems, interfaces" },
          { name: "Git & Version Control", tag: "Tooling", desc: "Branching strategies, interactive rebase, pull request reviews" },
          { name: "HTTP / REST & Networking", tag: "Protocol", desc: "Status codes, headers, CORS, WebSockets, DNS, TCP/IP" },
          { name: "Data Structures & Algorithms", tag: "CS Core", desc: "Big-O notation, trees, graphs, hash maps, caching algorithms" }
        ]
      },
      {
        level: "LEVEL 02",
        title: "Modern Application Architecture",
        status: "Production Standard",
        description: "Build robust full-stack applications with state management, database schemas, authentication, and comprehensive testing.",
        skills: [
          { name: "React / Next.js / Vue", tag: "Frontend Framework", desc: "Server components, reactive state, component lifecycles, hooks" },
          { name: "Node.js & Express / Fastify", tag: "Backend Runtime", desc: "Middleware pipelines, asynchronous event loops, API routing" },
          { name: "SQL & Relational Databases", tag: "Data Layer", desc: "PostgreSQL, schema indexing, ACID transactions, query optimization" },
          { name: "NoSQL & Caching", tag: "Data Layer", desc: "Redis in-memory caching, MongoDB document modeling, distributed locks" },
          { name: "Auth & Security Basics", tag: "Security", desc: "OAuth2, JWTs, RBAC, input sanitization, OWASP Top 10 mitigation" }
        ]
      },
      {
        level: "LEVEL 03",
        title: "Cloud Infrastructure & DevOps",
        status: "Scalability Standard",
        description: "Deploy and orchestrate resilient applications with automated CI/CD pipelines, containerization, and cloud primitives.",
        skills: [
          { name: "Docker & Containerization", tag: "DevOps", desc: "Multi-stage Dockerfiles, compose environments, layer caching" },
          { name: "CI/CD Automation", tag: "Pipeline", desc: "GitHub Actions, automated test suites, linting, preview deployments" },
          { name: "Linux & Terminal Mastery", tag: "System", desc: "Shell scripting (Bash/Zsh), permissions, systemd, process management" },
          { name: "Cloud Providers (AWS / GCP / Cloudflare)", tag: "Cloud", desc: "Serverless functions, object storage (S3/GCS), edge computing" },
          { name: "Observability & Monitoring", tag: "Reliability", desc: "OpenTelemetry, structured logging, Prometheus, Grafana, Sentry" }
        ]
      },
      {
        level: "LEVEL 04",
        title: "AI Development & RAG Systems",
        status: "AI-Native Standard",
        description: "Harness frontier foundation models, vector embeddings, semantic retrieval, and structured JSON outputs.",
        skills: [
          { name: "Python for AI", tag: "Language", desc: "NumPy, Pandas, async Python, Pydantic data validation" },
          { name: "LLM API Integration", tag: "APIs", desc: "Streaming responses, prompt caching, token cost optimization, error handling" },
          { name: "Prompt Engineering & Structured Outputs", tag: "Design", desc: "Few-shot prompting, JSON schema enforcement, deterministic validation" },
          { name: "Vector Embeddings & Semantic Search", tag: "Retrieval", desc: "OpenAI embeddings, distance metrics (Cosine/Dot), chunking strategies" },
          { name: "Retrieval-Augmented Generation (RAG)", tag: "Architecture", desc: "Hybrid search (BM25 + Dense), re-ranking, query expansion, metadata filtering" }
        ]
      },
      {
        level: "LEVEL 05",
        title: "AI Engineering & Agent Systems",
        status: "Agent Frontier",
        description: "Build autonomous tool-using agents, long-term memory systems, and multi-model routing architectures.",
        skills: [
          { name: "Tool & Function Calling", tag: "Agent Core", desc: "Providing tools to LLMs with strict schemas and execution validation" },
          { name: "Agent Loops & Reasoning Frameworks", tag: "Architecture", desc: "ReAct patterns, plan-and-solve loops, self-reflection, error recovery" },
          { name: "Agent State & Memory", tag: "State", desc: "Short-term conversation history, long-term episodic vector memory" },
          { name: "Model Routing & Cost Optimization", tag: "Efficiency", desc: "Routing simple tasks to cheap models (Flash/Haiku) and hard tasks to o3/3.7" },
          { name: "LLM Observability & Guardrails", tag: "Safety", desc: "Langfuse, Helicone, NeMo Guardrails, semantic caching, prompt injection defense" }
        ]
      },
      {
        level: "LEVEL 06",
        title: "Advanced Multi-Agent Systems & MCP",
        status: "Advanced Frontier",
        description: "Orchestrate distributed agent networks, standardize tool servers with MCP, and implement sandboxed code execution.",
        skills: [
          { name: "Model Context Protocol (MCP)", tag: "Open Standard", desc: "Building MCP servers and clients to connect agents to databases, terminals, APIs" },
          { name: "Multi-Agent Orchestration", tag: "Orchestration", desc: "Hierarchical supervisor architectures, swarm communication, role delegation" },
          { name: "Secure Sandboxed Code Execution", tag: "Security", desc: "E2B sandboxes, Docker microVMs, preventing agent breakout vulnerabilities" },
          { name: "Automated Model Evals & Benchmarks", tag: "Evaluation", desc: "LLM-as-a-judge, synthetic test set generation, deterministic regression testing" },
          { name: "Human-in-the-Loop (HITL) Workflows", tag: "Governance", desc: "Approval checkpoints, human intervention triggers, step undo mechanics" }
        ]
      },
      {
        level: "LEVEL 07",
        title: "The 2030 AI System Architect",
        status: "Future Mastery",
        description: "Lead organizations where humans and autonomous AI squads collaborate with high velocity, security, and mathematical rigor.",
        skills: [
          { name: "System Architecture & Threat Modeling", tag: "Strategy", desc: "Designing resilient distributed systems where subcomponents are autonomous" },
          { name: "Product Vision & Taste", tag: "Human Edge", desc: "Identifying authentic user problems and designing intuitive magical experiences" },
          { name: "Formal Verification & Specification", tag: "Correctness", desc: "Writing mathematically verifiable constraints that agents cannot violate" },
          { name: "Domain Expertise & Business Strategy", tag: "High Value", desc: "Deep specialized knowledge in healthcare, finance, logistics, or legal tech" },
          { name: "Ethical AI Governance & Leadership", tag: "Leadership", desc: "Auditing bias, data provenance, copyright compliance, and organizational safety" }
        ]
      }
    ],

    workflows: {
      old: [
        { step: 1, label: "Business Requirement", role: "Product Manager", desc: "Writes PRD in Jira" },
        { step: 2, label: "Developer Analysis", role: "Human Developer", desc: "Reads docs and creates branch" },
        { step: 3, label: "Manual Coding", role: "Human Developer", desc: "Writes syntax line-by-line for days" },
        { step: 4, label: "Manual Unit Testing", role: "Human Developer", desc: "Writes boilerplate test cases manually" },
        { step: 5, label: "Code Review", role: "Peer Developer", desc: "Waits 24-48 hours for peer review" },
        { step: 6, label: "Manual Deployment", role: "DevOps Engineer", desc: "Merges PR and monitors release" }
      ],
      future: [
        { step: 1, label: "Intent & Constraints", role: "Human Architect", desc: "Defines goal, security constraints & acceptance criteria" },
        { step: 2, label: "Planning Agent", role: "AI Planner", desc: "Decomposes into architecture contracts & sub-tasks" },
        { step: 3, label: "Coding Agent Squad", role: "AI Engineers", desc: "Synthesizes code across frontend, backend & migrations" },
        { step: 4, label: "Testing & Security Agents", role: "AI Verifiers", desc: "Fuzz tests, runs static analysis & checks edge cases" },
        { step: 5, label: "Human Review Gate", role: "Human Architect", desc: "Reviews architecture diff, taste & authorizes release" },
        { step: 6, label: "Autonomous Canary Deploy", role: "AI DevOps", desc: "Deploys canary, monitors telemetry & validates rollout" }
      ]
    }
  },

  jobs: {
    categories: [
      {
        id: "low",
        name: "Low AI Transformation",
        color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20",
        badge: "Human Heavy / Physical & High Empathy",
        description: "Roles demanding physical dexterity, high-stakes moral empathy, physical trades, or immediate real-world presence."
      },
      {
        id: "moderate",
        name: "Moderate AI Transformation",
        color: "text-amber-400 border-amber-500/30 bg-amber-950/20",
        badge: "Co-Pilot & Hybrid Shift",
        description: "Roles where routine administration is automated, but human domain judgment, strategic leadership, and relationships remain central."
      },
      {
        id: "high",
        name: "High AI Transformation",
        color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/20",
        badge: "Fundamental Workflow Overhaul",
        description: "Roles heavily based on digital manipulation, manual boilerplate writing, pattern lookup, or repetitive text/code synthesis."
      },
      {
        id: "new-roles",
        name: "New AI-Enabled Roles",
        color: "text-purple-400 border-purple-500/30 bg-purple-950/20",
        badge: "Emerging Career Frontiers",
        description: "Brand new high-leverage professions emerging specifically to build, evaluate, orchestrate, and secure AI systems."
      }
    ],

    roles: [
      {
        id: "software-developer",
        title: "Software Developer",
        category: "high",
        categoryName: "High AI Transformation",
        automatableTasks: "Writing boilerplate CRUD, syntax conversion, regex creation, basic unit test generation, API client wrappers",
        humanAdvantages: "High-level architecture, business domain nuance, user empathy, security threat modeling, trade-off analysis",
        newSkillsNeeded: "Agent orchestration, Model Context Protocol (MCP), prompt engineering, LLM evaluation, AI code auditing",
        aiOpportunities: "10x-100x individual output leverage, ability for a single developer to build full-stack end-to-end products"
      },
      {
        id: "ui-frontend-developer",
        title: "UI / Frontend Developer",
        category: "high",
        categoryName: "High AI Transformation",
        automatableTasks: "Converting Figma mockups to HTML/Tailwind, writing CSS responsive breakpoints, creating standard form controls",
        humanAdvantages: "Micro-interactions, animation feel & taste, accessibility audits, design system philosophy, user psychology",
        newSkillsNeeded: "AI-driven design systems, dynamic generative UI components, streaming UI state management, WebGPU",
        aiOpportunities: "Designing hyper-personalized adaptive interfaces that reshape themselves dynamically for each user"
      },
      {
        id: "qa-testing-engineer",
        title: "QA & Test Engineer",
        category: "high",
        categoryName: "High AI Transformation",
        automatableTasks: "Writing standard Selenium/Cypress scripts, basic regression runs, clicking through standard UI flows",
        humanAdvantages: "Chaos engineering, exploratory boundary testing, user journey psychology, finding subtle logic flaws",
        newSkillsNeeded: "LLM evaluation frameworks (Evals), automated red-teaming, synthetic user agent simulations",
        aiOpportunities: "Running thousands of autonomous synthetic AI user agents simultaneously to stress-test applications"
      },
      {
        id: "data-analyst",
        title: "Data Analyst",
        category: "high",
        categoryName: "High AI Transformation",
        automatableTasks: "Writing routine SQL aggregations, standard dashboard generation, basic trend summaries, data cleaning scripts",
        humanAdvantages: "Asking the right counter-intuitive questions, strategic business context, identifying data bias and causality vs correlation",
        newSkillsNeeded: "RAG over structured data, semantic layer modeling, AI agent analytical pipelines, predictive storytelling",
        aiOpportunities: "Transitioning into strategic decision-science advisors who guide executive strategy with automated real-time intelligence"
      },
      {
        id: "customer-support",
        title: "Customer Support Specialist",
        category: "high",
        categoryName: "High AI Transformation",
        automatableTasks: "Tier-1 ticket answering, password resets, FAQ lookup, standard refund routing, basic troubleshooting steps",
        humanAdvantages: "De-escalating angry customers, deep empathy during critical outages, relationship building for enterprise accounts",
        newSkillsNeeded: "AI agent supervisor, knowledge base curation, conversation flow prompt tuning, customer success strategy",
        aiOpportunities: "Managing fleets of AI support agents while focusing exclusively on high-value VIP relationship management"
      },
      {
        id: "content-creator",
        title: "Content Creator & Copywriter",
        category: "high",
        categoryName: "High AI Transformation",
        automatableTasks: "SEO keyword articles, generic social media posts, product descriptions, video transcription and summarization",
        humanAdvantages: "Authentic lived experience, unique voice and personality, provocative original opinions, investigative journalism",
        newSkillsNeeded: "Multimodal AI video editing, voice cloning curation, creative direction, prompt artistry, community building",
        aiOpportunities: "Producing studio-grade multimedia productions as a solo creator using AI video, audio, and graphics engines"
      },
      {
        id: "project-manager",
        title: "Project / Product Manager",
        category: "moderate",
        categoryName: "Moderate AI Transformation",
        automatableTasks: "Taking meeting notes, drafting Jira ticket descriptions, generating sprint burndown summaries, status update emails",
        humanAdvantages: "Team morale, executive negotiation, stakeholder alignment, ethical prioritization, discovering latent customer needs",
        newSkillsNeeded: "AI product management, managing probabilistic systems, writing precise specifications for AI agents",
        aiOpportunities: "Real-time automated project visibility, instant prototyping of PRDs into working interactive demos"
      },
      {
        id: "cybersecurity-analyst",
        title: "Cybersecurity Analyst",
        category: "moderate",
        categoryName: "Moderate AI Transformation",
        automatableTasks: "Parsing raw log files, basic signature-based alert triaging, vulnerability database matching",
        humanAdvantages: "Zero-day vulnerability intuition, human adversary psychology, physical security, disaster recovery leadership",
        newSkillsNeeded: "AI threat modeling, prompt injection defense, model weights security, detecting AI-generated phishing/deepfakes",
        aiOpportunities: "Deploying autonomous AI defensive agents that detect and patch attacks at machine speed"
      },
      {
        id: "devops-engineer",
        title: "DevOps & Cloud Engineer",
        category: "moderate",
        categoryName: "Moderate AI Transformation",
        automatableTasks: "Writing standard Terraform/Helm templates, routine certificate renewals, basic scaling rule configuration",
        humanAdvantages: "Disaster recovery, complex multi-cloud architecture, network topology design, hardware capacity planning",
        newSkillsNeeded: "AI workload infrastructure (GPU clusters, TPUs), Model Context Protocol infrastructure, LLM inference latency optimization",
        aiOpportunities: "Self-healing cloud infrastructure that automatically diagnoses bottlenecks and optimizes cloud spend"
      },
      {
        id: "ui-ux-designer",
        title: "UI / UX Product Designer",
        category: "moderate",
        categoryName: "Moderate AI Transformation",
        automatableTasks: "Generating color palette variants, drawing standard icon sets, resizing design components across devices",
        humanAdvantages: "Human psychology, emotional aesthetics, spatial intuition, brand storytelling, accessibility ethics",
        newSkillsNeeded: "Designing for non-deterministic and conversational UI, multimodal interfaces, generative design tools",
        aiOpportunities: "Creating living, adaptive interfaces that personalize typography and layouts in real time for every individual"
      },
      {
        id: "physician-healthcare",
        title: "Physician & Clinical Specialist",
        category: "low",
        categoryName: "Low AI Transformation",
        automatableTasks: "Clinical note documentation (ambient listening), looking up drug interactions, initial triage categorization",
        humanAdvantages: "Bedside manner, physical patient examination, breaking difficult diagnoses, surgical tactile dexterity",
        newSkillsNeeded: "Interpreting AI diagnostic risk scores, auditing algorithmic bias in clinical models",
        aiOpportunities: "Eliminating 80% of clerical EHR paperwork, catching rare diseases earlier through AI pattern detection"
      },
      {
        id: "skilled-tradesperson",
        title: "Electrician / Plumber / HVAC",
        category: "low",
        categoryName: "Low AI Transformation",
        automatableTasks: "Invoicing, scheduling customer appointments, looking up building code regulations",
        humanAdvantages: "Physical manipulation in tight unstructured physical spaces, tactile problem solving, emergency real-world response",
        newSkillsNeeded: "Using AI diagnostic camera tools to detect wiring faults and pipe leaks instantly",
        aiOpportunities: "Instant automated business back-office management and augmented reality repair guides"
      }
    ],

    newRoles: [
      {
        id: "agent-engineer",
        title: "Agent Engineer",
        tagline: "Architect of autonomous tool-calling loops and multi-agent meshes",
        whatTheyDo: "Builds and optimizes autonomous agent systems that connect LLMs to databases, APIs, web browsers, and sandboxed code execution environments.",
        requiredSkills: ["Python / TypeScript", "Model Context Protocol (MCP)", "LangGraph / CrewAI", "E2B Sandboxes", "Function Calling"],
        technologies: ["Claude Code", "OpenAI Swarm", "MCP SDKs", "Docker MicroVMs", "Langfuse"],
        salaryRange: "$160k - $280k",
        badge: "Highest Demand"
      },
      {
        id: "ai-application-engineer",
        title: "AI Application Engineer",
        tagline: "Bridges user interfaces with foundation models and RAG pipelines",
        whatTheyDo: "Integrates frontier AI APIs into production web and mobile apps, building streaming interfaces, structured outputs, and semantic search.",
        requiredSkills: ["React / Next.js", "Vercel AI SDK", "Prompt Caching", "Vector Databases", "Structured JSON Schema"],
        technologies: ["OpenAI API", "Anthropic Claude API", "Pinecone", "PostgreSQL pgvector", "Tailwind CSS"],
        salaryRange: "$140k - $240k",
        badge: "Rapid Growth"
      },
      {
        id: "ai-evaluation-engineer",
        title: "AI Evaluation & Benchmark Engineer",
        tagline: "The QA authority for probabilistic non-deterministic intelligence",
        whatTheyDo: "Designs rigorous evaluation frameworks (Evals) to measure model accuracy, reasoning fidelity, hallucination rates, and safety regressions.",
        requiredSkills: ["Statistics & Data Science", "LLM-as-a-judge methodologies", "Python / PyTest", "Benchmarking", "Dataset Curation"],
        technologies: ["DeepEval", "OpenAI Evals", "Braintrust", "Weights & Biases", "Promptfoo"],
        salaryRange: "$150k - $260k",
        badge: "Critical Enterprise Role"
      },
      {
        id: "ai-security-engineer",
        title: "AI Security & Red-Teamer",
        tagline: "Defender against prompt injection, jailbreaks, and agent hijacking",
        whatTheyDo: "Conducts adversarial attacks on AI models and agent workflows to identify prompt injections, data extraction leaks, and unauthorized tool execution.",
        requiredSkills: ["Cybersecurity", "Prompt Injection Defense", "Sandboxing", "OWASP for LLMs", "Threat Modeling"],
        technologies: ["NeMo Guardrails", "Llama Guard", "Garak LLM Vulnerability Scanner", "E2B Sandbox"],
        salaryRange: "$170k - $300k",
        badge: "High Security"
      },
      {
        id: "synthetic-data-engineer",
        title: "Synthetic Data & Alignment Engineer",
        tagline: "Generates high-quality synthetic training and fine-tuning datasets",
        whatTheyDo: "Creates programmatic pipelines that produce high-quality synthetic code, reasoning chains, and domain datasets for model distillation.",
        requiredSkills: ["Reinforcement Learning", "Python", "Data Quality Filtering", "Distillation Techniques", "Hugging Face"],
        technologies: ["vLLM", "DeepSeek RL frameworks", "PyTorch", "Pandas", "Ray"],
        salaryRange: "$160k - $270k",
        badge: "Deep Tech"
      },
      {
        id: "ai-workflow-architect",
        title: "AI Workflow & Operations Architect",
        tagline: "Transforms enterprise business processes into automated AI agent pipelines",
        whatTheyDo: "Analyzes traditional company workflows (customer service, legal analysis, invoice routing) and designs end-to-end agentic automation systems.",
        requiredSkills: ["Enterprise Architecture", "Business Process Modeling", "MCP Tool Integration", "Security Governance", "Cost Modeling"],
        technologies: ["Zapier Central", "n8n AI", "CrewAI Enterprise", "Temporal.io", "AWS Bedrock"],
        salaryRange: "$150k - $250k",
        badge: "Enterprise Standard"
      },
      {
        id: "human-ai-interaction-designer",
        title: "Human-AI Interaction (HAI) Designer",
        tagline: "Pioneers UX/UI for probabilistic and ambient computing",
        whatTheyDo: "Invents new user experience patterns for conversational, non-deterministic, and streaming AI interactions beyond traditional form inputs.",
        requiredSkills: ["Interaction Design", "Cognitive Psychology", "Generative UI", "Figma", "Micro-animations"],
        technologies: ["Vercel AI Generative UI", "React", "Framer Motion", "Web Audio API", "Three.js"],
        salaryRange: "$135k - $230k",
        badge: "Creative Frontier"
      },
      {
        id: "ai-platform-infra-engineer",
        title: "AI Platform & Inference Engineer",
        tagline: "Optimizes GPU/TPU clusters, token throughput, and model hosting",
        whatTheyDo: "Builds high-performance inference gateways, token caching layers, model routing proxies, and GPU cluster infrastructure.",
        requiredSkills: ["Kubernetes", "CUDA & GPU Networking", "vLLM / TensorRT-LLM", "C++ / Rust", "Traffic Engineering"],
        technologies: ["vLLM", "Triton Inference Server", "NVIDIA H100/B200", "Google TPU v5p", "Ray"],
        salaryRange: "$180k - $320k",
        badge: "Infrastructure Core"
      }
    ]
  },

  skills: {
    roles: [
      { id: "frontend", name: "Frontend Developer", focus: "UI/UX, Client State, Generative UI, Web Performance" },
      { id: "backend", name: "Backend Developer", focus: "APIs, Databases, Distributed Systems, Microservices" },
      { id: "fullstack", name: "Full Stack Developer", focus: "End-to-End Application Architecture, Full Lifecycle" },
      { id: "mobile", name: "Mobile Developer", focus: "iOS/Android, On-Device AI, Native Hardware Features" },
      { id: "devops", name: "DevOps / Cloud Engineer", focus: "Infrastructure, CI/CD, Containerization, Reliability" },
      { id: "data", name: "Data / ML Engineer", focus: "Pipelines, Embeddings, Model Fine-Tuning, Analytics" }
    ],

    skillGroups: [
      {
        category: "Web & Core Fundamentals",
        weight: 1.0,
        items: [
          { id: "javascript", label: "JavaScript (ES6+)", level: "Foundational" },
          { id: "typescript", label: "TypeScript & Static Typing", level: "Foundational" },
          { id: "react", label: "React / Modern UI Frameworks", level: "Application" },
          { id: "nextjs", label: "Next.js / Full-Stack Frameworks", level: "Application" },
          { id: "nodejs", label: "Node.js & Express APIs", level: "Application" },
          { id: "sql", label: "SQL & Relational Databases (PostgreSQL)", level: "Data" },
          { id: "nosql", label: "NoSQL & Caching (Redis / MongoDB)", level: "Data" },
          { id: "testing", label: "Automated Testing (Unit / Integration)", level: "Quality" },
          { id: "system_design", label: "System Design & Distributed Architecture", level: "Architecture" }
        ]
      },
      {
        category: "Cloud, Infrastructure & DevOps",
        weight: 1.2,
        items: [
          { id: "docker", label: "Docker & Containerization", level: "DevOps" },
          { id: "cicd", label: "CI/CD Pipelines (GitHub Actions)", level: "DevOps" },
          { id: "cloud", label: "Cloud Platforms (AWS / GCP / Cloudflare)", level: "Cloud" },
          { id: "linux", label: "Linux & Shell Scripting", level: "Systems" },
          { id: "observability", label: "Observability (Logging / Metrics / Tracing)", level: "Operations" }
        ]
      },
      {
        category: "AI Engineering & Frontier Technologies",
        weight: 1.8,
        items: [
          { id: "python", label: "Python for Data & AI Scripting", level: "Language" },
          { id: "llm_api", label: "LLM API Integration (OpenAI, Anthropic, Gemini)", level: "AI Core" },
          { id: "prompt_eng", label: "Prompt Engineering & Structured Outputs", level: "AI Core" },
          { id: "embeddings", label: "Vector Embeddings & Semantic Search", level: "AI Retrieval" },
          { id: "rag", label: "Retrieval-Augmented Generation (RAG)", level: "AI Retrieval" },
          { id: "tool_calling", label: "Tool Calling & Function Execution", level: "AI Agents" },
          { id: "agents", label: "Autonomous AI Agents (ReAct / Swarms)", level: "AI Agents" },
          { id: "mcp", label: "Model Context Protocol (MCP) Standard", level: "Frontier" },
          { id: "ai_security", label: "AI Security, Guardrails & Sandboxing", level: "Security" },
          { id: "ai_evals", label: "AI Evaluation & Benchmark Testing (Evals)", level: "Quality" }
        ]
      }
    ]
  },

  agents: {
    orchestratorTopology: {
      root: "User Intention",
      primaryCoordinator: "Project Master Orchestrator",
      subAgents: [
        { id: "researcher", name: "Research Agent", icon: "Search", color: "emerald", role: "Information Discovery" },
        { id: "planner", name: "Architecture & Planning Agent", icon: "Compass", color: "blue", role: "Specification & Task Breakdown" },
        { id: "coder", name: "Coding & Implementation Agent", icon: "Code", color: "indigo", role: "Modular Syntax Synthesis" },
        { id: "tester", name: "Testing & QA Agent", icon: "CheckCircle", color: "amber", role: "Unit, Fuzz & Regression Testing" },
        { id: "security", name: "Security & Threat Reviewer", icon: "Shield", color: "red", role: "Vulnerability & Boundary Audit" },
        { id: "docs", name: "Documentation & Release Agent", icon: "FileText", color: "purple", role: "Release Notes & Architecture Docs" }
      ],
      tools: [
        { id: "browser", name: "Browser Automation", icon: "Globe", desc: "Live web research, DOM inspection & screenshot capture" },
        { id: "db", name: "Database Sandbox", icon: "Database", desc: "Schema migrations, query execution & indexing validation" },
        { id: "terminal", name: "Terminal & Shell (E2B)", icon: "Terminal", desc: "Compiling code, running linters & executing test runners" },
        { id: "api", name: "External APIs & MCP", icon: "Cpu", desc: "Connecting to GitHub, Jira, Slack, Stripe & custom servers" },
        { id: "cloud", name: "Cloud Deployments", icon: "Cloud", desc: "Terraform provisioning, Docker builds & preview URLs" }
      ]
    },

    agentProfiles: [
      {
        id: "researcher",
        name: "Research Agent",
        badge: "Data Discovery",
        icon: "Search",
        responsibilities: [
          "Scrapes and summarizes latest technical documentation and API schemas",
          "Surveys GitHub issues, changelogs, and breaking dependency updates",
          "Synthesizes comparative trade-off analyses between libraries and tools",
          "Validates license compatibility (MIT, Apache 2.0, GPL) for dependencies"
        ],
        inputs: ["User product prompt", "Existing repository files", "Target tech stack constraints"],
        outputs: ["Technical research memo", "API endpoint contracts", "Recommended dependency versions"],
        tools: ["Web Browser (Puppeteer/Playwright)", "GitHub API", "Vector Documentation Search"],
        humanOversight: "Human verifies architectural direction and library selection."
      },
      {
        id: "planner",
        name: "Planning & Architecture Agent",
        badge: "System Design",
        icon: "Compass",
        responsibilities: [
          "Decomposes high-level goals into granular, testable development tasks",
          "Defines data schemas, TypeScript interfaces, and REST/GraphQL contracts",
          "Calculates dependency graphs and detects circular dependencies before coding",
          "Establishes security threat models and permission boundaries"
        ],
        inputs: ["Research memo", "User business rules", "Non-functional requirements (SLA, latency)"],
        outputs: ["Step-by-step implementation plan", "Interface definitions (types.ts)", "Database ERD diagram"],
        tools: ["Mermaid diagram generator", "File system scanner", "Schema validator"],
        humanOversight: "Mandatory human sign-off on the generated implementation plan before code execution begins."
      },
      {
        id: "frontend-dev",
        name: "Frontend Developer Agent",
        badge: "UI / UX Synthesis",
        icon: "Layout",
        responsibilities: [
          "Synthesizes pixel-perfect responsive UI components using React/Tailwind",
          "Implements client-side state management, hooks, and optimistic UI updates",
          "Ensures accessibility standards (ARIA labels, keyboard navigation, color contrast)",
          "Connects frontend view components to backend API services"
        ],
        inputs: ["Implementation plan", "Design system tokens", "API schema contracts"],
        outputs: ["Component code files (.jsx/.tsx)", "Tailwind styles", "Storybook stories"],
        tools: ["Vite preview server", "DOM inspector", "Accessibility linter"],
        humanOversight: "Human visual taste check and interactive UX review."
      },
      {
        id: "backend-dev",
        name: "Backend Developer Agent",
        badge: "API & Logic",
        icon: "Server",
        responsibilities: [
          "Implements Express/Fastify REST endpoints and WebSocket handlers",
          "Writes database migration scripts and optimized ORM/SQL queries",
          "Implements authentication middleware, rate limiting, and input validation",
          "Connects external third-party services and webhook listeners"
        ],
        inputs: ["API contracts", "Database schema", "Auth strategy specifications"],
        outputs: ["Backend route handlers", "Data models", "Migration scripts"],
        tools: ["Node.js runtime", "PostgreSQL sandbox", "Postman/curl test runner"],
        humanOversight: "Human reviews authentication logic, payment gateways, and data integrity."
      },
      {
        id: "database-engineer",
        name: "Database Engineer Agent",
        badge: "Data & Schema",
        icon: "Database",
        responsibilities: [
          "Designs normalized relational database tables and foreign key relations",
          "Configures composite B-tree and GIN indexes for query performance",
          "Writes idempotent migration scripts with clean rollback mechanisms",
          "Monitors query execution plans (EXPLAIN ANALYZE) to eliminate table scans"
        ],
        inputs: ["Domain data requirements", "Traffic volume projections"],
        outputs: ["SQL migration files", "Seed data scripts", "Index optimization guidelines"],
        tools: ["PostgreSQL sandbox", "Prisma/Drizzle ORM CLI", "EXPLAIN analyzer"],
        humanOversight: "Human approves destructive schema operations (DROP COLUMN, data migrations)."
      },
      {
        id: "tester",
        name: "Testing & QA Agent",
        badge: "Quality Assurance",
        icon: "CheckCircle",
        responsibilities: [
          "Generates comprehensive unit test suites with 90%+ branch coverage",
          "Executes automated end-to-end user journeys using Playwright",
          "Performs fuzz testing with malformed payloads and boundary conditions",
          "Detects regression breaks and generates instant failing test reproductions"
        ],
        inputs: ["Code files", "API specifications", "Acceptance criteria"],
        outputs: ["Test files (*.test.js)", "Coverage reports", "Regression triage logs"],
        tools: ["Vitest / Jest runner", "Playwright headless browser", "Fuzzing engine"],
        humanOversight: "Human verifies business edge case criteria and approves test overrides."
      },
      {
        id: "security-reviewer",
        name: "Security Reviewer Agent",
        badge: "Threat Defense",
        icon: "ShieldAlert",
        responsibilities: [
          "Audits codebase for OWASP Top 10 vulnerabilities (XSS, SQLi, CSRF, SSRF)",
          "Detects hardcoded secrets, API keys, and environment variable leaks",
          "Evaluates dependencies against National Vulnerability Database (NVD)",
          "Performs automated prompt injection and adversarial testing on LLM endpoints"
        ],
        inputs: ["All source code files", "Dependency lockfiles", "Environment configs"],
        outputs: ["Security audit report", "Patch PR recommendations", "Risk score (Critical to Low)"],
        tools: ["Static analysis scanners (Semgrep)", "Dependency vulnerability audit", "Prompt injection fuzzer"],
        humanOversight: "Human security officer must review and sign off on any reported vulnerability."
      },
      {
        id: "devops-engineer",
        name: "DevOps Engineer Agent",
        badge: "Cloud & CI/CD",
        icon: "Cloud",
        responsibilities: [
          "Configures multi-stage Dockerfiles and container orchestration",
          "Builds automated GitHub Actions workflows with linting, testing, and deployment",
          "Generates Terraform/OpenTofu infrastructure-as-code manifests",
          "Monitors preview deployments and health check endpoints"
        ],
        inputs: ["Application stack requirements", "Cloud provider target (AWS/GCP/Vercel)"],
        outputs: ["Dockerfile", "github-actions.yml", "Terraform configurations"],
        tools: ["Docker engine", "GitHub Actions CLI", "Cloud provider APIs"],
        humanOversight: "Human authorizes production deployment and cloud spending caps."
      },
      {
        id: "docs-writer",
        name: "Documentation Writer Agent",
        badge: "Knowledge & Specs",
        icon: "FileText",
        responsibilities: [
          "Generates comprehensive README documentation and setup guides",
          "Writes interactive OpenAPI / Swagger specifications for all endpoints",
          "Creates architecture decision records (ADRs) explaining system design rationale",
          "Compiles release notes and changelog entries from git commits"
        ],
        inputs: ["Repository code", "Git commit history", "API contracts"],
        outputs: ["README.md", "openapi.json", "CHANGELOG.md", "Architecture docs"],
        tools: ["Markdown formatter", "Swagger generator", "Git history analyzer"],
        humanOversight: "Human verifies developer clarity and public documentation tone."
      }
    ]
  },

  resources: [
    {
      category: "Foundational AI Research Papers",
      items: [
        {
          title: "Attention Is All You Need (2017)",
          authors: "Vaswani et al. (Google Brain / Google Research)",
          link: "https://arxiv.org/abs/1706.03762",
          summary: "The landmark paper that introduced the Transformer architecture, replacing recurrent models with self-attention and igniting the modern LLM revolution."
        },
        {
          title: "Scaling Laws for Neural Language Models (2020)",
          authors: "Kaplan et al. (OpenAI / Johns Hopkins)",
          link: "https://arxiv.org/abs/2001.08361",
          summary: "Demonstrated that model performance scales as a power law with compute, dataset size, and parameter count, forming the theoretical bedrock of modern frontier models."
        },
        {
          title: "Constitutional AI: Harmlessness from AI Feedback (2022)",
          authors: "Bai et al. (Anthropic)",
          link: "https://arxiv.org/abs/2212.08073",
          summary: "Introduced RLAIF (Reinforcement Learning from AI Feedback), allowing models to self-critique and align against a set of written constitutional principles."
        },
        {
          title: "ReAct: Synergizing Reasoning and Acting in Language Models (2022)",
          authors: "Yao et al. (Princeton / Google Brain)",
          link: "https://arxiv.org/abs/2210.03629",
          summary: "Pioneered the interleaved loop of Reasoning ('Thought') and Acting ('Action' / 'Observation'), which serves as the foundation for modern autonomous AI agents."
        }
      ]
    },
    {
      category: "Open Standards & Official Docs",
      items: [
        {
          title: "Model Context Protocol (MCP) Official Specification",
          provider: "Anthropic / Open Source Standard",
          link: "https://modelcontextprotocol.io",
          summary: "An open, vendor-neutral protocol that enables AI models to securely discover, inspect, and execute tools, resources, and prompts across any environment."
        },
        {
          title: "Anthropic Claude Developer Documentation",
          provider: "Anthropic",
          link: "https://docs.anthropic.com",
          summary: "Comprehensive guide for Claude 3.7 Sonnet, Hybrid Reasoning, Computer Use API, prompt caching, and tool calling."
        },
        {
          title: "OpenAI Platform Documentation",
          provider: "OpenAI",
          link: "https://platform.openai.com/docs",
          summary: "Official reference for o-series reasoning models, Realtime Voice API, Structured Outputs, and Assistants API."
        },
        {
          title: "Google AI Studio & Vertex AI Documentation",
          provider: "Google Cloud",
          link: "https://ai.google.dev/docs",
          summary: "Documentation for Gemini 2.0 Flash, Multimodal Live API, 2M context windows, and Google Search grounding."
        }
      ]
    },
    {
      category: "Frameworks & Developer Tooling",
      items: [
        {
          title: "Vercel AI SDK",
          type: "Frontend / Full-Stack Library",
          link: "https://sdk.vercel.ai/docs",
          summary: "The definitive TypeScript toolkit for building streaming AI chat, generative user interfaces, and structured object generation in React and Next.js."
        },
        {
          title: "LangGraph / LangChain",
          type: "Agent Framework",
          link: "https://www.langchain.com/langgraph",
          summary: "Cyclic computational graph framework for building complex multi-agent architectures with persistent state and human-in-the-loop control."
        },
        {
          title: "E2B Sandboxes",
          type: "Secure Code Execution",
          link: "https://e2b.dev",
          summary: "Secure cloud microVMs designed specifically for AI agents to run untrusted code, shell commands, and file operations safely."
        },
        {
          title: "Claude Code CLI",
          type: "Terminal Agent",
          link: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview",
          summary: "Anthropic's terminal-native agentic coding tool that navigates codebases, edits files, executes tests, and resolves git conflicts autonomously."
        }
      ]
    }
  ]
};
