# Project Execution Standards & Architectural Principles

This document defines the strict, certified engineering standards for the **CodeGrogu Portfolio** (`CodeGrogu/portfolio`).

---

## 1. The Scope Guard (Critical Workflow Rule)

> [!IMPORTANT]
> **Antigravity works strictly against the active Linear issue and must not silently expand its scope.**
>
> If any work, refactoring, enhancement, or unmodeled requirement outside the active issue is discovered during implementation:
> 1. **Do NOT silently implement it.**
> 2. **Do NOT bundle it into the current branch/PR.**
> 3. Document the finding and create a dedicated Linear issue in the backlog/active cycle.
> 4. Keep the active issue focused solely on its certified Definition of Done and Acceptance Criteria.

---

## 2. CLI Generation First (Critical Tooling Rule)

> [!IMPORTANT]
> **If files or configurations can be generated with a command, use the CLI command first and edit afterward.**
>
> Whenever an official CLI tool, framework generator, or package scaffolding command exists (e.g. `bun create ...`, `drizzle-kit generate`, `bunx @tailwindcss/upgrade`, `tsc --init`, `bun test --init`):
> 1. **Execute the official CLI command** to generate the canonical structure, configuration, or boilerplate.
> 2. **Inspect and edit** the resulting files to apply project-specific overrides, types, and custom tokens.
> 3. Do **not** manually author complex configuration templates from scratch when standard generators are available.

---

## 3. Core Technical Architecture

- **Clean Layered Organization**:
  - `src/app/`: Next.js 16 App Router pages, layouts, and route handlers.
  - `src/components/`: Modular UI, 3D Canvas, and design system primitives.
  - `src/lib/`: Database clients (Neon), ORM schemas (Drizzle), validation schemas (Zod), and shared utilities.
  - `src/hooks/`: Reusable custom React hooks.
  - `src/types/`: Global TypeScript interfaces and domain types.
  - `src/styles/`: Global CSS, Tailwind v4 tokens, and font configurations.
- **Server vs Client Boundary**:
  - All components are Server Components by default.
  - Use `'use client'` strictly when lifecycle hooks (`useState`, `useEffect`), event handlers, or R3F/Three.js Canvas mount points are required.
- **Graphics Pipeline**: Three.js WebGPU-first (`three/webgpu`) with automatic WebGL 2 fallback and device-tier profiles.

---

## 4. Package Management & Runtime: Bun Only

- **Strict Bun Runtime**: Managed strictly via Bun `v1.3.14+`.
- **Prohibited Tools**: **Never** run `npm`, `npx`, `yarn`, or `pnpm` for project dependency management or script execution.
- **Standard Commands**:
  - Install: `bun install`
  - Scripts: `bun run <script>` (e.g. `bun run dev`, `bun run build`, `bun run lint`)
  - Tests: `bun test`

---

## 5. Next.js 16 & React 19 Conventions

- **App Router**: Use nested layouts, loading states (`loading.tsx`), and error boundaries (`error.tsx`).
- **Metadata**: Configure static and dynamic metadata using Next.js `Metadata` / `generateMetadata`.
- **Server Actions & API Routes**: Validate all inputs at the boundary using Zod schemas.
- **React 19 Hooks**: Use modern idioms (`useActionState`, `useOptimistic`) and avoid legacy patterns.

---

## 6. TypeScript Strictness & Standards

- **Zero `any` Policy**: The `any` keyword is strictly prohibited. Use `unknown` with type guards or Zod parsing.
- **Strict Compiler Config**:
  - `strict: true`
  - `noImplicitAny: true`
  - `strictNullChecks: true`
  - `noUncheckedIndexedAccess: true`
  - `exactOptionalPropertyTypes: true`
- **Imports**: Group imports (1. Node/React/Next, 2. External packages, 3. Internal aliases `@/...`, 4. Relative styles/types).

---

## 7. Code Style & Cleanliness

- **Functional Composition**: Prefer small, single-responsibility functional components and pure functions.
- **Naming Conventions**:
  - Components & Types: `PascalCase`
  - Functions, variables, hooks: `camelCase` (hooks prefixed with `use`)
  - Constants & Env schemas: `SCREAMING_SNAKE_CASE`
- **Zero Dead Code**: No unused variables, commented-out dead code blocks, or orphan imports.

---

## 8. No Unnecessary Dependencies & Zero Bloat

- **Justification Required**: Do not install external libraries for trivial tasks that can be accomplished with standard Web APIs or Bun built-ins.
- **No Redundant Packages**: Do not mix multiple utility libraries that solve the same problem (e.g. use Zod for all validations; use Tailwind for styling).

---

## 9. No Fabricated Requirements & Plan Integrity

- Implement only what is explicitly specified in the issue's **Objective**, **Scope**, and **Acceptance Criteria**.
- Do not add speculative future-proofing, hidden abstractions, or unrequested features.

---

## 10. Git Conventions & No Direct Main Development

- **Protected Main**: Never commit or push directly to `main`.
- **Linear Branch Alignment**: Work strictly on the branch named in the Linear issue:
  `boiihertz/cv-<id>-<slug>`
- **Commit Formatting**: `<type>(CV-<id>): <imperative summary>`
- **Pull Requests (D7)**: Every PR must use the standard template linking `CV-<id>`.

---

## 11. Linear Issue Discipline (D4)

- **One Active Leaf Task**: Exactly 1 leaf task active in `In Progress` at any time.
- **Lifecycle Progression**: `Todo` $\rightarrow$ `In Progress` $\rightarrow$ `In Review` $\rightarrow$ `Done`.
- **Definition of Done Verification**: An issue is only moved to `Done` once tests and baseline commands succeed with evidence.

---

## 12. Testing & Baseline Verification (D9)

Every task must satisfy the 5 baseline verification checks before PR merge:

```bash
bun install        # Clean dependency resolution
bun run dev        # Development server verification
bun run typecheck  # Strict TypeScript compilation
bun run lint       # Linting & code hygiene
bun run build      # Production bundle optimization
```

---

## 13. Security & Secrets Hardening

- **Zero Secret Exposure**: Never commit `.env`, `.env.local`, API tokens, or credentials to git.
- **Env Validation**: Validate all environment variables at application startup with Zod (`src/lib/env.ts`).
- **Input Sanitization & Rate Limiting**: All public mutations/endpoints must enforce rate limiting and schema validation.
