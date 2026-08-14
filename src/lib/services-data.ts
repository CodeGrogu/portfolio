import { ServicePackage, AboutPillar, TechStackCategory } from '@/types/services';

export const SERVICES: ServicePackage[] = [
  {
    id: 'fullstack-web-development',
    title: 'Full-Stack Web Development',
    subtitle: 'High-Velocity, Type-Safe Modern Web Applications',
    badge: 'Core Architecture',
    badgeVariant: 'cyan',
    description:
      'End-to-end full-stack web applications engineered with Next.js 16 App Router, React 19 Server Components, TypeScript, and Bun. Zero bloat, instant transitions, and deterministic backend pipelines.',
    deliverables: [
      {
        title: 'App Router Architecture',
        description:
          'Server Components, dynamic streaming, and server actions optimized for zero client bundle bloat.',
      },
      {
        title: 'Type-Safe Data Layer',
        description:
          'PostgreSQL database schemas, migrations, and transactional data pipelines using Drizzle ORM and Zod.',
      },
      {
        title: 'Design System Primitives',
        description:
          'Reusable UI component library built on Tailwind CSS v4, accessible ARIA patterns, and glassmorphism.',
      },
      {
        title: 'Automated CI/CD Quality Gate',
        description:
          'Comprehensive test suites (Bun Test, Playwright E2E) integrated into GitHub Actions deployment pipelines.',
      },
    ],
    outcomes: [
      'Sub-second page load times and Core Web Vitals compliance',
      'End-to-end type safety eliminating runtime regression bugs',
      'Production-ready codebase on Vercel or modern edge infrastructure',
    ],
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Neon PostgreSQL',
      'Drizzle ORM',
      'Bun',
    ],
    timeline: '3 - 8 weeks',
    idealFor:
      'Startups and engineering teams launching new SaaS platforms, portals, or high-conversion applications.',
  },
  {
    id: 'web3d-creative-engineering',
    title: 'Web3D & Creative Engineering',
    subtitle: 'GPU-Accelerated 3D Web Graphics & Spatial Interfaces',
    badge: 'GPU Graphics',
    badgeVariant: 'emerald',
    description:
      'Immersive in-browser 3D experiences powered by Three.js, React Three Fiber (R3F), and WebGPU with graceful WebGL fallbacks. Custom WGSL/GLSL shaders, Draco/Meshopt compression, and 60fps real-time spatial interaction.',
    deliverables: [
      {
        title: 'WebGPU 3D Canvas Engine',
        description:
          'Hardware-accelerated compute shaders, device-aware quality tiering, and high-performance render loops.',
      },
      {
        title: 'Optimized 3D Asset Pipeline',
        description:
          'GLTF/GLB models compressed with Draco and Meshopt for sub-second asset streaming over HTTP/2.',
      },
      {
        title: 'Custom Shader Development',
        description:
          'Procedural materials, volumetric lighting, particle simulations, and dynamic audio-reactive post-processing.',
      },
      {
        title: 'Reduced-Motion & WebGL Fallback',
        description:
          'Progressive enhancement architecture supporting low-power mobile devices and accessibility preferences.',
      },
    ],
    outcomes: [
      'Silky smooth 60fps graphics across modern mobile and desktop browsers',
      'Dramatic increase in visitor engagement and brand memorability',
      'Optimized memory lifecycle with zero WebGL/WebGPU context leaks',
    ],
    technologies: [
      'Three.js',
      'WebGPU',
      'WebGL 2',
      'React Three Fiber',
      'WGSL',
      'GLSL',
      'Draco / Meshopt',
      'GSAP',
    ],
    timeline: '4 - 10 weeks',
    idealFor:
      'Product configurators, creative agency showcases, architectural visualizers, and interactive brand launches.',
  },
  {
    id: 'cloud-database-systems',
    title: 'Cloud & Database Systems',
    subtitle: 'Resilient Serverless Backends & High-Throughput APIs',
    badge: 'Infrastructure',
    badgeVariant: 'indigo',
    description:
      'Cloud backend architecture built for concurrency, resilience, and strict data consistency. Neon Serverless PostgreSQL with connection pooling, distributed caching with Upstash Redis, and rate-limited API endpoints.',
    deliverables: [
      {
        title: 'Transactional Booking Engine',
        description:
          'Concurrency-safe slot reservation using PostgreSQL serialized transactions, advisory locks, and idempotency keys.',
      },
      {
        title: 'Database Schema & Migrations',
        description:
          'Optimized indexes, foreign keys, and automated migration scripts orchestrated via Drizzle Kit.',
      },
      {
        title: 'Abuse Protection & Rate Limiting',
        description:
          'Sliding-window rate limiting algorithms on mutations to prevent brute-force attacks and abuse.',
      },
      {
        title: 'Automated Notifications',
        description:
          'Transactional email confirmation workflows and webhook orchestration via Resend and edge queues.',
      },
    ],
    outcomes: [
      'Zero double-booking conflicts under heavy concurrent load',
      'Sub-50ms database query response latency with serverless pooling',
      'Hardened security against injection, replay attacks, and DDoS spikes',
    ],
    technologies: [
      'Neon PostgreSQL',
      'Drizzle ORM',
      'Upstash Redis',
      'Zod',
      'Resend',
      'Vercel Edge Functions',
    ],
    timeline: '2 - 6 weeks',
    idealFor:
      'Platforms requiring transactional integrity, booking/reservation systems, and high-security API endpoints.',
  },
  {
    id: 'ai-automation-systems',
    title: 'AI & Automation Systems',
    subtitle: 'Agentic WebMCP Integrations & Autonomous Workflows',
    badge: 'Intelligent Systems',
    badgeVariant: 'violet',
    description:
      'Next-generation browser-integrated AI tooling, WebMCP (Web Model Context Protocol) agent interfaces, LLM context orchestration, and automated end-to-end testing systems.',
    deliverables: [
      {
        title: 'WebMCP Agent Tools',
        description:
          'Annotated HTML forms and imperative JavaScript tool registries allowing AI agents to interact with web apps.',
      },
      {
        title: 'LLM Context Engineering',
        description:
          'High-precision retrieval pipelines, structured output validation via Zod, and memory persistence.',
      },
      {
        title: 'Automated E2E Agent Test Matrix',
        description:
          'Headless Playwright and Chrome DevTools MCP suites testing user journeys and visual regressions in CI.',
      },
      {
        title: 'Lighthouse Quality Optimization',
        description:
          'Automated performance budgets and CI quality gates guaranteeing 100% scores across all metrics.',
      },
    ],
    outcomes: [
      'Ready for autonomous agent interaction and modern AI tool calling',
      'Zero human regression overhead with automated browser verification',
      'State-of-the-art developer experience and continuous deployment reliability',
    ],
    technologies: [
      'WebMCP',
      'Playwright',
      'Chrome DevTools MCP',
      'Lighthouse CI',
      'Zod',
      'GitHub Actions',
    ],
    timeline: '2 - 5 weeks',
    idealFor:
      'Engineering organizations modernizing workflows with AI agent capabilities and automated quality gates.',
  },
];

export const ABOUT_PILLARS: AboutPillar[] = [
  {
    title: 'GPU Compute & Web3D First',
    description:
      'Pushing browser visual capabilities with WebGPU compute shaders, custom GLSL pipelines, and Draco/Meshopt compression for 60fps real-time 3D fidelity.',
    metric: '60 FPS',
    metricLabel: 'WebGPU Render Target',
    iconName: 'Cpu',
  },
  {
    title: 'End-to-End Type Safety',
    description:
      'Strict TypeScript (`noImplicitAny`, `strictNullChecks`, `noUncheckedIndexedAccess`), Drizzle ORM schemas, and Zod runtime validation across client, server, and database boundaries.',
    metric: '0 Any',
    metricLabel: 'TypeScript Policy',
    iconName: 'Shield',
  },
  {
    title: 'Sub-Second Performance',
    description:
      'Lean server component architecture, zero unnecessary runtime dependencies, instant font swap, and strict Core Web Vitals optimization.',
    metric: '< 100ms',
    metricLabel: 'Average Edge TTFB',
    iconName: 'Zap',
  },
  {
    title: 'Uncompromised Accessibility',
    description:
      'WCAG 2.2 AA conformance by default, high-contrast focus rings, semantic landmark architecture, screen-reader navigation, and reduced-motion media query respect.',
    metric: '100%',
    metricLabel: 'Lighthouse Target',
    iconName: 'Layers',
  },
];

export const TECH_STACK_CATEGORIES: TechStackCategory[] = [
  {
    category: 'Web3D & Computer Graphics',
    description:
      'Hardware-accelerated graphics pipelines, custom shaders, and interactive spatial interfaces.',
    skills: [
      'Three.js',
      'WebGPU',
      'WebGL 2',
      'React Three Fiber (R3F)',
      '@react-three/drei',
      'WGSL / GLSL Shaders',
      'Draco & Meshopt Compression',
      'GSAP Animation Suite',
    ],
  },
  {
    category: 'Full-Stack & UI Frameworks',
    description: 'Modern component-driven web frameworks with server streaming and type safety.',
    skills: [
      'Next.js 16 (App Router & Turbopack)',
      'React 19 (Server & Client Components)',
      'TypeScript 5.x (Strict Mode)',
      'Tailwind CSS v4',
      'Vanilla CSS Design Tokens',
      'Lucide React Icons',
    ],
  },
  {
    category: 'Backend & Cloud Infrastructure',
    description:
      'Serverless databases, connection pools, transactional scheduling, and edge deployment.',
    skills: [
      'Neon Serverless PostgreSQL',
      'Drizzle ORM & Drizzle Kit',
      'Upstash Redis (Rate Limiting)',
      'Zod Schema Validation',
      'Bun Runtime (v1.3.14+)',
      'Vercel Edge Platform',
      'Resend Transactional Email',
    ],
  },
  {
    category: 'Testing & Engineering Governance',
    description: 'Automated quality assurance, performance budgets, and continuous integration.',
    skills: [
      'Playwright E2E & WebGPU Testing',
      'Bun Test Runner',
      'Google Lighthouse & LHCI',
      'Chrome DevTools MCP Automation',
      'WebMCP (Model Context Protocol)',
      'GitHub Actions CI Pipeline',
      'WCAG 2.2 AA Standards',
    ],
  },
];
