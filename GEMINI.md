# Workspace Configuration: CodeGrogu Portfolio

## Linear Integration & Project Reference

- **Workspace**: Peer Pressure (`https://linear.app/peerpressure`)
- **Default Project**: `CodeGrogu Portfolio`
- **Project ID**: `7f9d282c-6473-4d95-bf0d-3002497537d7`
- **Team**: `Portfolio` (Key: `CV`, ID: `48da45e0-0e42-4a0f-a469-11d38746466b`)
- **Linear URL**: https://linear.app/peerpressure/project/codegrogu-portfolio-36b613a818cf

### Milestones & Certified Workload (58 Tasks, 215 Story Points)

1. **Foundation** (`26b61743-861f-4a1c-9278-65911090ec3a`) — Target: 2026-08-21 (4 tasks, 13 pts)
   - Repository, environment, project conventions, application scaffold, secrets & CI
2. **Core Experience** (`ad3f3f93-4645-4640-9d70-ae58972a317c`) — Target: 2026-09-04 (9 tasks, 37 pts)
   - UI, information architecture, design tokens, hero, services, project showcase, a11y foundation
3. **Web3D** (`f55343ae-1696-4917-bd33-aaa6ce8b57e6`) — Target: 2026-09-25 (10 tasks, 41 pts)
   - WebGPU-first Three.js, WebGL fallback, R3F canvas, Draco/Meshopt assets, quality profiles, reduced motion
4. **Full-Stack Systems** (`50b5d985-c0c1-42f4-8348-3c6a28053e14`) — Target: 2026-10-16 (11 tasks, 43 pts)
   - Dynamic catalogue, Neon PostgreSQL, Drizzle ORM, Zod schemas, transactional booking engine, rate limiting
5. **Production Hardening** (`547e687f-bcb1-4fc0-bf53-3d083240800c`) — Target: 2026-10-30 (17 tasks, 61 pts)
   - Core Web Vitals, 3D memory profiling, dependency/API security review, cross-browser matrix, testing suites
6. **Launch & Hypercare** (`48af0f67-2f1e-4230-8683-8c429d5e392e`) — Target: 2026-11-13 (7 tasks, 20 pts)
   - Production deployment on Vercel, domain configuration for codegrogu.com, release verification & 72h hypercare

---

### Active Execution Cycle

- **Cycle Name**: `Foundation — Cycle 1` (Cycle `1`, ID: `e07214a7-bd5b-42e3-83f7-ad5864052297`)
- **Period**: `2026-08-17` to `2026-08-21` (5 business days)
- **Scope & Workload**: 4 tasks, 13 story points
- **Execution DAG**:
  ```
  CV-6: Scaffold Next.js application with Bun (3 pts, Due: 2026-08-17)
    ↓
  CV-7: Establish TypeScript, linting, formatting and import conventions (2 pts, Due: 2026-08-18)
    ↓
  CV-14: Define environment and secrets strategy (3 pts, Due: 2026-08-19)
    ↓
  CV-15: Establish CI quality gate (5 pts, Due: 2026-08-21)
  ```
- **Execution Rule**: Sequential execution following the DAG. Do not work on all four tasks simultaneously.

---

## Linear Status, Branching & GitHub Protocol (D4, D5, D6)

### Status Lifecycle (D4)

```text
Backlog  →  Todo  →  In Progress  →  In Review  →  Done
```

- **`Backlog`**: Unscheduled or future milestone issues.
- **`Todo`**: Ready to start. Prerequisites met; ticket is in the active cycle.
- **`In Progress`**: Actively being implemented. Exactly 1 leaf task active at a time.
- **`In Review`**: Implementation finished; automated test suite, builds, and code review in progress.
- **`Done`**: Definition of Done satisfied with verifiable proof. **Do not move to Done merely because code was written.**
- **`Canceled`**: Used strictly if an issue is genuinely cancelled.

### Issue → Git Branch Protocol (D5)

Every implementation issue corresponds strictly 1:1 with its Linear-generated branch:

```text
Linear Issue (e.g. CV-6) ↔ Git Branch (boiihertz/cv-6-scaffold-nextjs-application-with-bun) ↔ Pull Request
```

### End-to-End Development Cycle (D6)

**Never work directly on `main` for feature implementation.**

```text
Linear Issue (Todo)
      ↓
Create/Use Branch (In Progress)
      ↓
Implement Changes
      ↓
Local Validation (bun run dev, bun run build, tests)
      ↓
Commit
      ↓
Push
      ↓
GitHub PR (In Review)
      ↓
GitHub Actions / CI Quality Gate
      ↓
Review & Approval
      ↓
Merge to main
      ↓
Linear Issue (Done)
```

### Pull Request Convention (D7)

- **Title**: `<type>(CV-<id>): <imperative summary>` (e.g. `feat(CV-6): scaffold Next.js application with Bun`)
- **Body**: Must contain `## Summary`, `## Linear` (`CV-XX`), `## Changes`, `## Validation` (`bun run typecheck`, `bun run lint`, `bun run build`), and `## Notes`.

---

## Technical Stack & Conventions

- **Development Environment**: Windows 11 + Google Antigravity IDE
- **Runtime & Package Manager**: Bun
- **Version Control**: Git + GitHub (Repository: `CodeGrogu/portfolio`)
- **Framework**: Next.js 16 Active LTS + React 19 + TypeScript (App Router)
- **Styling**: Tailwind CSS
- **3D / Graphics**: Three.js (`three/webgpu`) + React Three Fiber + Drei (WebGPU-first with WebGL fallback)
- **Asset Pipeline**: Blender + glTF/GLB (Draco geometry compression & Meshopt texture optimization)
- **Animation**: GSAP + ScrollTrigger
- **State Management**: Zustand
- **Validation**: Zod
- **Database & ORM**: Neon Serverless PostgreSQL (`@neondatabase/serverless`) + Drizzle ORM (`drizzle-orm/neon-http`)
- **Deployment & Hosting**: Vercel (Edge & Serverless)
- **Tracking**: Linear is the source of truth for planning and issues.

---

## Execution Governance & Implementation Rules

> [!IMPORTANT]
> **Plan Freeze Active**: Before touching any issue status, do not modify the architecture, hierarchy, estimates, or dependency graph.
> 
> **Linear Mutation Guard**: Only modify Linear if implementation, tests, or builds reveal a concrete, real defect. Do not engage in speculative or endless plan polishing.

---

## Workspace Skills

- [**`linear-workflow`**](file:///c:/Users/Jaden/Documents/Programming/Personal/portfolio/.agents/skills/linear-workflow/SKILL.md): Canonical DAG rules, status lifecycle, branch conventions, and Linear operations.
- [**`github-workflow`**](file:///c:/Users/Jaden/Documents/Programming/Personal/portfolio/.agents/skills/github-workflow/SKILL.md): GitHub MCP operations, branch synchronization, pull request lifecycles, and code integration.
- [**`web3d-engineering`**](file:///c:/Users/Jaden/Documents/Programming/Personal/portfolio/.agents/skills/web3d-engineering/SKILL.md): Three.js WebGPU, R3F, Draco/Meshopt assets, quality profiles, and reduced motion.
- [**`fullstack-systems`**](file:///c:/Users/Jaden/Documents/Programming/Personal/portfolio/.agents/skills/fullstack-systems/SKILL.md): Neon PostgreSQL, Drizzle ORM, Zod validation, atomic booking engine, and rate limiting.
- [**`context7-docs`**](file:///c:/Users/Jaden/Documents/Programming/Personal/portfolio/.agents/skills/context7-docs/SKILL.md): Live, version-specific documentation queries across project dependencies.
