export const PERSONAL_INFO = {
  name: "Harish Mohanani",
  title: "Frontend-focused Full Stack Developer",
  experience: "10+ years",
  email: "harish@example.com", // Placeholder
  github: "https://github.com/harish", // Placeholder
  linkedin: "https://linkedin.com/in/harish", // Placeholder
  intro: "I build scalable, high-performance web applications with React, TypeScript, and modern frontend architecture.",
  about: "As a product-minded engineer, I don't just write code; I design systems that solve real business problems. With over a decade of experience in building enterprise-grade UI architectures, I focus on performance, scalability, and an ownership mindset that bridges the gap between design and engineering."
};

export const PROJECTS = [
  {
    title: "Enterprise Design System",
    problem: "A fragmented UI across multiple micro-frontends leading to inconsistent user experience and slow development cycles.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Rollup"],
    challenges: "Synchronizing theme tokens across 15+ internal apps and ensuring zero-bundle-size overhead for consumers while maintaining strict WCAG 2.1 compliance.",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Real-time Analytics Dashboard",
    problem: "Visualizing high-frequency data streams (10k+ events/sec) without compromising browser responsiveness or frame rate.",
    stack: ["Next.js", "WebSockets", "D3.js", "Zustand", "Redis"],
    challenges: "Implementing a custom data-throlling layer and offscreen canvas rendering to maintain 60FPS during peak traffic periods.",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AI-Powered Content Platform",
    problem: "Managing complex multi-step generative AI workflows with long-running server operations and varied output formats.",
    stack: ["React", "Node.js", "PostgreSQL", "OpenAI API", "AWS Lambda"],
    challenges: "Architecting a robust state machine for the UI to handle intermittent connectivity and real-time streaming updates from background workers.",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Global E-commerce Engine",
    problem: "Legacy monolith migration to a modern headless architecture with a focus on SEO and sub-second Core Web Vitals.",
    stack: ["Next.js", "GraphQL", "Shopify Hydrogen", "Vercel"],
    challenges: "Implementing advanced ISR (Incremental Static Regeneration) strategies to manage 50,000+ dynamic product pages with localized pricing.",
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React (18+)", "Next.js", "TypeScript", "Tailwind CSS", "Redux/Zustand", "Web Performance Optimization"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "REST/GraphQL APIs", "Redis", "Serverless Architecture"]
  },
  {
    category: "Tooling",
    items: ["Webpack/Vite", "Docker", "CI/CD (GitHub Actions)", "Git Flow", "Vercel/AWS", "ESLint/Prettier"]
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library", "Cypress", "Playwright", "Unit/Integration/E2E Testing"]
  }
];

export const EXPERIENCE = [
  {
    company: "Exabeam / GlobalLogic",
    role: "Senior Staff Engineer",
    period: "2021 - Present",
    description: "Leading frontend architecture for cybersecurity operations. Spearheaded the migration of legacy dashboards to a modern micro-frontend architecture, improving developer velocity by 40%."
  },
  {
    company: "AppDirect",
    role: "Lead Frontend Developer",
    period: "2018 - 2021",
    description: "Architected core commerce components used by global telecommunications partners. Focused on high-performance catalog rendering and complex checkout flows."
  },
  {
    company: "Rocket Software",
    role: "Senior Software Engineer",
    period: "2015 - 2018",
    description: "Built modernized web interfaces for mainframe data management. Reduced system latency perception through optimistic UI patterns and efficient caching."
  },
  {
    company: "Coditas",
    role: "Software Engineer",
    period: "2013 - 2015",
    description: "Developed responsive web applications for early-stage startups. Gained foundation in full-stack engineering and agile methodologies."
  }
];
