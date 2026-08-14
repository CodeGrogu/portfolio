# Environment & Secrets Strategy

This document outlines the security architecture, environment variable lifecycle, and secret management conventions for the **CodeGrogu Portfolio** (`CodeGrogu/portfolio`).

---

## 1. Core Principles

1. **Zero Secret Exposure in Version Control**:
   - `.env`, `.env.local`, `.env.production`, and credential files are strictly ignored by `.gitignore`.
   - Only `.env.example` containing redacted placeholder values is committed to git.

2. **Type-Safe Validation at Startup**:
   - All environment variables are parsed and validated through Zod schemas in `src/lib/env.ts`.
   - Invalid or missing variables cause early warnings in development and immediate build/runtime failures in production.

3. **Strict Client vs. Server Isolation**:
   - Variables prefixed with `NEXT_PUBLIC_` are bundled into browser client code.
   - All other variables (`DATABASE_URL`, `RESEND_API_KEY`, `UPSTASH_REDIS_REST_TOKEN`) remain exclusively on the server / Edge runtime.

---

## 2. Environment Variables Directory

| Variable                   | Scope         |              Required              | Description                                                                         |
| :------------------------- | :------------ | :--------------------------------: | :---------------------------------------------------------------------------------- |
| `NODE_ENV`                 | Server        |                Yes                 | Runtime environment (`development`, `production`, `test`)                           |
| `NEXT_PUBLIC_APP_URL`      | Client/Server |                Yes                 | Canonical application base URL (`http://localhost:3000` or `https://codegrogu.com`) |
| `DATABASE_URL`             | Server        | Optional in dev / Required in prod | Neon Serverless PostgreSQL connection string with SSL                               |
| `RESEND_API_KEY`           | Server        | Optional in dev / Required in prod | Resend API token for transactional booking emails                                   |
| `RESEND_FROM_EMAIL`        | Server        | Optional in dev / Required in prod | Sender identity (e.g. `CodeGrogu <noreply@codegrogu.com>`)                          |
| `UPSTASH_REDIS_REST_URL`   | Server        | Optional in dev / Required in prod | Upstash Redis REST endpoint for rate limiting                                       |
| `UPSTASH_REDIS_REST_TOKEN` | Server        | Optional in dev / Required in prod | Upstash Redis REST authorization token                                              |
| `NEXT_PUBLIC_POSTHOG_KEY`  | Client        |              Optional              | PostHog telemetry project API key                                                   |
| `NEXT_PUBLIC_POSTHOG_HOST` | Client        |              Optional              | PostHog ingestion host endpoint                                                     |

---

## 3. Secret Provisioning by Environment

### Local Development

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Populate local test keys or leave optional services disabled.
3. Validate environment configuration:
   ```bash
   bun run validate
   ```

### Vercel Preview & Production

- Environment variables are provisioned declaratively via Vercel Project Settings or Vercel CLI (`vercel env pull`).
- Production secrets (`DATABASE_URL`, `RESEND_API_KEY`, `UPSTASH_REDIS_REST_TOKEN`) are marked as Sensitive in Vercel to prevent leakage in deployment logs.

### GitHub Actions (CI)

- CI workflows in `.github/workflows/` execute build and lint checks with mock/test environment variables injected directly into GitHub Actions Secrets.
