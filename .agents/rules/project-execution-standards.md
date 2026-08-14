# Project Execution Standards & Architectural Principles

This document defines the strict, certified engineering standards for the **CodeGrogu Portfolio** (`CodeGrogu/portfolio`).

---

## 1. The Scope Guard (Critical Workflow Rule)

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

## 2. CLI Generation First (Critical Tooling Rule)

> [!IMPORTANT]
> **If files or configurations can be generated with a command, use the CLI command first and edit afterward.**
>
> Whenever an official CLI tool, framework generator, or package scaffolding command exists (e.g. `bun create ...`, `drizzle-kit generate`, `bunx @tailwindcss/upgrade`, `tsc --init`, `bun test --init`):
>
> 1. **Execute the official CLI command** to generate the canonical structure, configuration, or boilerplate.
> 2. **Inspect and edit** the resulting files to apply project-specific overrides, types, and custom tokens.
> 3. Do **not** manually author complex configuration templates from scratch when standard generators are available.

---

## 3. Version Strictness & Linear Checklist Synchronization

> [!IMPORTANT]
> **1. Strict Version Alignment with Linear**:
> Every package, runtime, library, and framework version installed in the codebase must strictly match what is specified in Linear issues, tickets, and milestone descriptions (e.g., Next.js 16, React 19, Bun 1.3.14+, Tailwind CSS v4). Never install an older major/minor release when Linear specifies a newer target.
>
> **2. Linear Acceptance Criteria Checklist Ticking**:
> When implementing an issue, as each item in the ticket's scope or acceptance criteria checklist (`- [ ]`) is completed and validated, update the Linear issue description via `save_issue` to tick it off (`- [x]`). When all criteria are satisfied, all checkboxes must be ticked before moving to `Done`.

---

## 4. Core Technical Architecture

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

## 5. Package Management & Runtime: Bun Only

- **Strict Bun Runtime**: Managed strictly via Bun `v1.3.14+`.
- **Prohibited Tools**: **Never** run `npm`, `npx`, `yarn`, or `pnpm` for project dependency management or script execution.
- **Standard Commands**:
  - Install: `bun install`
  - Scripts: `bun run <script>` (e.g. `bun run dev`, `bun run build`, `bun run lint`)
  - Tests: `bun test`

---

## 6. Next.js 16 & React 19 Conventions

- **App Router**: Use nested layouts, loading states (`loading.tsx`), and error boundaries (`error.tsx`).
- **Metadata**: Configure static and dynamic metadata using Next.js `Metadata` / `generateMetadata`.
- **Server Actions & API Routes**: Validate all inputs at the boundary using Zod schemas.
- **React 19 Hooks**: Use modern idioms (`useActionState`, `useOptimistic`) and avoid legacy patterns.

---

## 7. TypeScript Strictness & Standards

- **Zero `any` Policy**: The `any` keyword is strictly prohibited. Use `unknown` with type guards or Zod parsing.
- **Strict Compiler Config**:
  - `strict: true`
  - `noImplicitAny: true`
  - `strictNullChecks: true`
  - `noUncheckedIndexedAccess: true`
  - `exactOptionalPropertyTypes: true`
- **Imports**: Group imports (1. Node/React/Next, 2. External packages, 3. Internal aliases `@/...`, 4. Relative styles/types).

---

## 8. Code Style & Cleanliness

- **Functional Composition**: Prefer small, single-responsibility functional components and pure functions.
- **Naming Conventions**:
  - Components & Types: `PascalCase`
  - Functions, variables, hooks: `camelCase` (hooks prefixed with `use`)
  - Constants & Env schemas: `SCREAMING_SNAKE_CASE`
- **Zero Dead Code**: No unused variables, commented-out dead code blocks, or orphan imports.

---

## 9. No Unnecessary Dependencies & Zero Bloat

- **Justification Required**: Do not install external libraries for trivial tasks that can be accomplished with standard Web APIs or Bun built-ins.
- **No Redundant Packages**: Do not mix multiple utility libraries that solve the same problem (e.g. use Zod for all validations; use Tailwind for styling).

---

## 10. No Fabricated Requirements & Plan Integrity

- Implement only what is explicitly specified in the issue's **Objective**, **Scope**, and **Acceptance Criteria**.
- Do not add speculative future-proofing, hidden abstractions, or unrequested features.

---

## 11. Git Conventions & No Direct Main Development

- **Protected Main**: Never commit or push directly to `main`.
- **Linear Branch Alignment**: Work strictly on the branch named in the Linear issue:
  `boiihertz/cv-<id>-<slug>`
- **Pull Requests (D7)**: Every PR must use the standard template linking `CV-<id>`.
- **Literal Markdown in PR Descriptions (Mandatory --body-file Convention)**:
  Always construct PR bodies using unescaped, literal multiline Markdown (with real newlines and unescaped backticks). **NEVER** pass PR bodies as inline shell arguments (`--body "..."`), which causes PowerShell or Bash escaping corruption and double-escaped backticks. **ALWAYS** write the PR body to a `.github/pr_body.tmp.md` file (which is git-ignored) and execute `gh pr create --body-file ".github/pr_body.tmp.md"`.
- **Hyphens Only Standard (No Em Dashes Rule)**:
  Never use em dashes (`—`) anywhere in code, markdown, comments, git commit messages, PR titles, PR bodies, or Linear descriptions. Always use standard hyphens (`-`).

---

## 12. Linear Issue Discipline (D4)

- **One Active Leaf Task**: Exactly 1 leaf task active in `In Progress` at any time.
- **Lifecycle Progression**: `Todo` $\rightarrow$ `In Progress` $\rightarrow$ `In Review` $\rightarrow$ `Done`.
- **Definition of Done Verification**: An issue is only moved to `Done` once tests and baseline commands succeed with evidence.

---

## 13. Testing & Pre-Flight Verification (D9)

Every task must execute and satisfy the pre-flight verification checks locally before pushing or opening a PR:

```bash
bun test           # 1. Automated unit & schema test suite
bun run validate   # 2. Composite quality gate (typecheck && lint && format:check && build)
```

---

## 14. GitHub Actions CI Quality Gate Invariant

- Every PR automatically triggers the 5-stage GitHub Actions CI workflow (`.github/workflows/ci.yml`).
- **Zero Merge on Failure**: A PR must **never** be merged if CI checks are failing or pending. All checks (`gh pr checks <pr_number>`) must report `pass`.
- **Environment Mock Synchronization**: Any new environment variable added to `src/lib/env.ts` must have a corresponding mock value in `.github/workflows/ci.yml` so production builds succeed in CI.

---

## 15. Security & Secrets Hardening

- **Zero Secret Exposure**: Never commit `.env`, `.env.local`, API tokens, or credentials to git.
- **Env Validation**: Validate all environment variables at application startup with Zod (`src/lib/env.ts`).
- **Input Sanitization & Rate Limiting**: All public mutations/endpoints must enforce rate limiting and schema validation.
