# Plan Freeze & Execution Governance Rule

## 1. Plan Freeze Active

Before touching any issue status, **DO NOT** modify the project architecture, issue hierarchy, story point estimates, or the dependency graph.

## 2. Linear Mutation Guard

**Only modify Linear if implementation, tests, or builds reveal a concrete, real defect.**

- Do not engage in speculative, endless plan polishing or theoretical dependency restructuring.
- The plan is 100% normalized and certified across 58 active leaf tasks and 215 story points.
- Only add, remove, or alter Linear issues/dependencies when actual code or build verification demonstrates an unmodeled prerequisite or blocking error.

## 3. Linear Status Workflow (D4)

Use the strict 5-stage status workflow:

```text
Backlog  →  Todo  →  In Progress  →  In Review  →  Done
```

- **`Backlog`**: Unscheduled or future milestone issues.
- **`Todo`**: Ready to start. All blockers have completed, issue is in the active cycle.
- **`In Progress`**: Actively being implemented. Only 1 leaf task active in progress at a time.
- **`In Review`**: Implementation is finished; automated tests, builds, and verification/review are actively running.
- **`Done`**: Definition of Done has been satisfied and proven (**Evidence before assertions**).
  - _Rule_: Never move an issue to Done merely because code was written.
- **`Canceled`**: Reserved strictly for issues that are genuinely cancelled.

## 4. Issue → Git Branch Convention (D5)

Every implementation issue must generate and use its exact Linear-generated branch name.

```text
Linear Issue  ↔  Git Branch  ↔  Pull Request / Verification
```

- For example: `CV-6` $\rightarrow$ `boiihertz/cv-6-scaffold-nextjs-application-with-bun` $\rightarrow$ local implementation & verification.
- Do not manually invent arbitrary branch names. Maintain strict 1:1 traceability across Linear issues, Git branches, and PRs.

## 5. End-to-End Development Cycle (D6)

**Never work directly on `main` for feature implementation.** Follow the 10-step development cycle for every issue:

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

## 6. Pull Request Convention (D7)

Every PR must follow the canonical format and clearly identify its Linear issue.

### Title Format

```text
<type>(CV-<id>): <imperative summary>
```

Example: `feat(CV-6): scaffold Next.js application with Bun`

### Body Structure

```markdown
## Summary

...

## Linear

CV-6

## Changes

- ...

## Validation

- bun run typecheck
- bun run lint
- bun run build

## Notes

...
```

## 7. Baseline Verification Commands (D9)

Before creating application features, every issue and pull request must execute and verify cleanly against these 5 baseline commands:

```bash
bun install        # 1. Install & resolve dependencies cleanly
bun run dev        # 2. Launch development server on localhost:3000
bun run typecheck  # 3. Strict TypeScript static type check (tsc --noEmit)
bun run lint       # 4. Lint code for style, errors, and best practices
bun run build      # 5. Compile optimized production bundle with 0 errors
```

> [!IMPORTANT]
> **Evidence Before Assertions**: An issue cannot transition to `Done` unless all applicable verification commands have executed with 0 errors and proof is provided in the completion comment.
