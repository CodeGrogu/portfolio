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

## The Scope Guard (Critical Workflow Rule)

> [!IMPORTANT]
> **Antigravity works strictly against the active Linear issue and must not silently expand its scope.**
>
> If any work, refactoring, enhancement, or unmodeled requirement outside the active issue is discovered during implementation:
>
> 1. **Do NOT silently implement it.**
> 2. **Do NOT bundle it into the current branch/PR.**
> 3. Document the finding and create a dedicated Linear issue in the backlog/active cycle.
> 4. Keep the active issue focused solely on its certified Definition of Done and Acceptance Criteria.

---

## CLI Generation First (Critical Tooling Rule)

> [!IMPORTANT]
> **If files or configurations can be generated with a command, use the CLI command first and edit afterward.**
>
> Whenever an official CLI tool, framework generator, or package scaffolding command exists (e.g. `bun create ...`, `drizzle-kit generate`, `bunx @tailwindcss/upgrade`, `tsc --init`, `bun test --init`):
>
> 1. **Execute the official CLI command** to generate the canonical structure, configuration, or boilerplate.
> 2. **Inspect and edit** the resulting files to apply project-specific overrides, types, and custom tokens.
> 3. Do **not** manually author complex configuration templates from scratch when standard generators are available.

---

## Version Strictness & Linear Checklist Synchronization

> [!IMPORTANT]
> **1. Strict Version Alignment with Linear**:
> Every package, runtime, library, and framework version installed in the codebase must strictly match what is specified in Linear issues, tickets, and milestone descriptions (e.g., Next.js 16, React 19, Bun 1.3.14+, Tailwind CSS v4). Never install an older major/minor release when Linear specifies a newer target.
>
> **2. Linear Acceptance Criteria Checklist Ticking**:
> When implementing an issue, as each item in the ticket's scope or acceptance criteria checklist (`- [ ]`) is completed and validated, update the Linear issue description via `save_issue` to tick it off (`- [x]`). When all criteria are satisfied, all checkboxes must be ticked before moving to `Done`.

---

## Core Engineering & Architectural Principles

1. **Architecture & Directory Structure**:
   - `src/app/`: Next.js 16 App Router pages, layouts, and route handlers.
   - `src/components/`: Modular UI, 3D Canvas, and design system primitives.
   - `src/lib/`: Database clients (Neon), ORM schemas (Drizzle), validation schemas (Zod), shared utilities.
   - `src/hooks/`: Reusable React hooks.
   - `src/types/`: TypeScript definitions.
   - `src/styles/`: Global CSS and Tailwind design tokens.
2. **Code Style**: Functional component composition, descriptive variable/function names, zero dead code, strict error handling.
3. **Bun Usage**: Managed strictly via Bun `v1.3.14+` (`bun install`, `bun run <script>`, `bun test`). Never use `npm`, `npx`, `yarn`, or `pnpm`.
4. **Next.js Conventions**: Next.js 16 Active LTS + React 19 App Router. Server Components by default; explicit `'use client'` only when state/effects/Canvas hooks are required.
5. **TypeScript Strictness**: `strict: true`, `noImplicitAny: true`, `strictNullChecks: true`, `noUncheckedIndexedAccess: true`. Zero `any` policy.
6. **No Unnecessary Dependencies**: Zero bloat. Do not install speculative packages or duplicate utility libraries.
7. **No Fabricated Requirements**: Adhere strictly to the certified Linear issue scope and acceptance criteria.
8. **Security Rules**: Zero plaintext secrets, environment variables validated via Zod at startup, rate limiting on mutations, strict input sanitization.
9. **Git Conventions & No Direct Main Development**: Protected `main` branch. All work goes through `boiihertz/cv-XX-...` feature branches and GitHub PRs.
10. **Linear Issue Discipline (D4)**: Strict 5-state lifecycle (`Backlog` $\rightarrow$ `Todo` $\rightarrow$ `In Progress` $\rightarrow$ `In Review` $\rightarrow$ `Done`). Exactly 1 active task in progress.
11. **Testing & Pre-Flight Verification (D9)**: Every task must execute and satisfy `bun test` and `bun run validate` (`typecheck && lint && format:check && build`) before committing/pushing.
12. **GitHub Actions CI Quality Gate**: Automated 5-stage CI workflow (`.github/workflows/ci.yml`) protects `main`. A PR must never be merged with pending/failing checks.
13. **Pull Request Protocol (D7)**: Standard PR title `<type>(CV-<id>): <summary>` and 5-section body (`## Summary`, `## Linear`, `## Changes`, `## Validation`, `## Notes`).

---

## Execution Governance & Implementation Rules

> [!IMPORTANT]
> **Plan Freeze Active**: Before touching any issue status, do not modify the architecture, hierarchy, estimates, or dependency graph.
>
> **Linear Mutation Guard**: Only modify Linear if implementation, tests, or builds reveal a concrete, real defect. Do not engage in speculative or endless plan polishing.

---

## Workspace Skills

- [**`portfolio-development-lifecycle`**](file:///c:/Users/Jaden/Documents/Programming/Personal/portfolio/.agents/skills/portfolio-development-lifecycle/SKILL.md): Canonical 18-step development, quality gate, PR review, merge, and Linear closure loop.
- [**`linear-workflow`**](file:///c:/Users/Jaden/Documents/Programming/Personal/portfolio/.agents/skills/linear-workflow/SKILL.md): Canonical DAG rules, status lifecycle, branch conventions, and Linear operations.
- [**`github-workflow`**](file:///c:/Users/Jaden/Documents/Programming/Personal/portfolio/.agents/skills/github-workflow/SKILL.md): GitHub MCP operations, branch synchronization, pull request lifecycles, and code integration.
- [**`web3d-engineering`**](file:///c:/Users/Jaden/Documents/Programming/Personal/portfolio/.agents/skills/web3d-engineering/SKILL.md): Three.js WebGPU, R3F, Draco/Meshopt assets, quality profiles, and reduced motion.
- [**`fullstack-systems`**](file:///c:/Users/Jaden/Documents/Programming/Personal/portfolio/.agents/skills/fullstack-systems/SKILL.md): Neon PostgreSQL, Drizzle ORM, Zod validation, atomic booking engine, and rate limiting.
- [**`context7-docs`**](file:///c:/Users/Jaden/Documents/Programming/Personal/portfolio/.agents/skills/context7-docs/SKILL.md): Live, version-specific documentation queries across project dependencies.
