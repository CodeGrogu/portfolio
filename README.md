# CodeGrogu Portfolio

[![CI Quality Gate](https://github.com/CodeGrogu/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/CodeGrogu/portfolio/actions/workflows/ci.yml)

Production-grade personal portfolio and digital storefront for **CodeGrogu**, showcasing high-performance interactive web architecture, WebGPU 3D graphics, and resilient full-stack systems.

---

## Technical Stack

- **Runtime & Package Manager**: [Bun](https://bun.sh) (`v1.3.14+`)
- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19
- **Type System**: Strict TypeScript
- **Styling**: Tailwind CSS v4 + Prettier Tailwind Class Sorting
- **Linting & Quality**: ESLint 9 Flat Config + Prettier
- **3D Graphics**: Three.js WebGPU-first with WebGL 2 fallback + React Three Fiber
- **Database & ORM**: Neon Serverless PostgreSQL + Drizzle ORM
- **CI / CD**: GitHub Actions Quality Gate
- **Hosting**: Vercel

---

## Local Development & Baseline Verification

```bash
# 1. Install dependencies
bun install

# 2. Run local development server (localhost:3000)
bun run dev

# 3. Execute composite verification suite
bun run validate
```

---

## Quality Gate Commands

```bash
bun run format:check   # Verify code style and class sorting
bun run typecheck      # Strict TypeScript compilation check
bun run lint           # ESLint static analysis
bun test               # Automated test suite
bun run build          # Production Next.js bundle generation
```
