export const projectsData = {
  kisan: {
    id: "kisan",
    tabLabel: "Kisan Ally AI",
    title: "Kisan Ally – Intelligent Agriculture Platform",
    summary: "An AI-powered agricultural assistant designed to empower farmers with real-time crop disease detection, multilingual assistance, and voice interaction.",
    problem: "Empowered agricultural communities by resolving language and technical barriers, providing sub-second crop diagnosis and automated smart farming advisory.",
    features: [
      "AI Crop Disease Detection via Computer Vision",
      "Multilingual NLP & Voice Assistance",
      "Real-time Agronomy Advisory",
      "Accessible Mobile-First Platform"
    ],
    stack: ["Python", "PyTorch", "Computer Vision", "NLP", "FastAPI"],
    steps: [
      { title: "Voice & Image Input", desc: "Multilingual audio query & leaf scan capture", icon: "camera", stage: "STAGE 01", status: "Ready" },
      { title: "CV Diagnosis", desc: "PyTorch Vision model inference for disease identification", icon: "scan", stage: "STAGE 02", status: "Active" },
      { title: "NLP Translation", desc: "Multilingual NLP translation & contextual synthesis", icon: "cpu", stage: "STAGE 03", status: "Ready" },
      { title: "Voice Advisory", desc: "Local language voice & text remedy dispatch", icon: "bell", stage: "STAGE 04", status: "Output" }
    ],
    demo: "#",
    github: "https://github.com/AmitKashyap-21"
  },
  sasta: {
    id: "sasta",
    tabLabel: "SastaTaxi App",
    title: "SastaTaxi – Ride Fare Comparison Platform",
    summary: "A unified mobile platform that aggregates and compares estimated ride fares in real-time across Uber, Ola, Rapido, and inDrive.",
    problem: "Eliminated manual cross-app price checking by consolidating live ride quotes into a single intuitive comparison interface with direct app redirection.",
    features: [
      "Multi-Platform Fare Aggregation (Uber, Ola, Rapido, inDrive)",
      "Instant Price Comparison & Sorting",
      "One-Tap Direct App Redirection",
      "Scalable REST API Backend"
    ],
    stack: ["Flutter", "Dart", "Android", "REST APIs", "Python"],
    steps: [
      { title: "Location Input", desc: "Pickup & destination coordinates geocoding", icon: "file-text", stage: "STAGE 01", status: "Ready" },
      { title: "API Fetch", desc: "Parallel fare quotes aggregation from provider APIs", icon: "zap", stage: "STAGE 02", status: "Active" },
      { title: "Fare Analysis", desc: "Price normalization & ETA comparison calculation", icon: "database", stage: "STAGE 03", status: "Ready" },
      { title: "Redirect Dispatch", desc: "Deep-link redirect to selected ride app", icon: "sparkles", stage: "STAGE 04", status: "Output" }
    ],
    demo: "#",
    github: "https://github.com/AmitKashyap-21"
  },
  quiz: {
    id: "quiz",
    tabLabel: "Quiz & Flashcards",
    title: "Quiz & Flashcard Educational Platform",
    summary: "Full-stack learning application allowing educators to create assessments and students to attempt quizzes with automated scoring and topic-wise flashcards.",
    problem: "Streamlined assessment workflows and revision cycles with relational PostgreSQL schemas, role-based JWT security, and interactive practice cards.",
    features: [
      "Role-Based Access (Teachers & Students)",
      "Automated Assessment Scoring",
      "JWT Secure Authentication",
      "Topic-wise Interactive Flashcards"
    ],
    stack: ["React", "REST APIs", "PostgreSQL", "JWT Authentication", "Python"],
    steps: [
      { title: "Auth & Role Sync", desc: "JWT verification & role permission check", icon: "terminal", stage: "STAGE 01", status: "Ready" },
      { title: "Question Bank", desc: "Relational query execution in PostgreSQL", icon: "database", stage: "STAGE 02", status: "Active" },
      { title: "Assessment Engine", desc: "Real-time evaluation & dynamic flashcard flip", icon: "check-square", stage: "STAGE 03", status: "Ready" },
      { title: "Analytics Output", desc: "Student performance scoring & feedback", icon: "sparkles", stage: "STAGE 04", status: "Output" }
    ],
    demo: "#",
    github: "https://github.com/AmitKashyap-21"
  },
  rag: {
    id: "rag",
    tabLabel: "RAG Engine",
    title: "Enterprise RAG Intelligence Pipeline",
    summary: "An end-to-end Retrieval-Augmented Generation system designed to query enterprise document bases with sub-second latency using Ollama, Qdrant, and FastAPI.",
    problem: "Eliminated operational delays for knowledge workers searching across internal document bases with grounded contextual synthesis.",
    features: [
      "Sub-200ms Hybrid Search",
      "Ollama & LangChain Orchestration",
      "Vector Similarity via Qdrant",
      "Strict Source Attribution"
    ],
    stack: ["Python", "FastAPI", "Qdrant", "Ollama (Qwen)", "LangChain", "Docker"],
    steps: [
      { title: "Document Ingestion", desc: "PDF, Markdown, Unstructured Web Data parsing", icon: "file-text", stage: "STAGE 01", status: "Ready" },
      { title: "Vector Embedding", desc: "Ollama tokenization & vector indexing", icon: "cpu", stage: "STAGE 02", status: "Active" },
      { title: "Hybrid Retrieval", desc: "Qdrant vector similarity & keyword search", icon: "database", stage: "STAGE 03", status: "Ready" },
      { title: "LLM Synthesis", desc: "Grounded answer synthesis with citations", icon: "sparkles", stage: "STAGE 04", status: "Output" }
    ],
    demo: "#",
    github: "https://github.com/AmitKashyap-21"
  }
};
