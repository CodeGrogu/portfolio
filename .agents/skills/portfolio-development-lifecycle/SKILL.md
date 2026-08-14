---
name: portfolio-development-lifecycle
description: >-
  Executes the canonical 18-step end-to-end development, verification, and issue lifecycle for the CodeGrogu Portfolio.
  Use whenever picking up a new Linear issue, creating branches, executing baseline checks, opening PRs, conducting reviews,
  merging into main, and transitioning Linear issues to Done.
---

# Portfolio Development Lifecycle Skill

This skill defines the battle-tested, certified end-to-end execution loop for implementing tasks in the **CodeGrogu Portfolio** (`CodeGrogu/portfolio`).

---

## The Complete 18-Step Execution Flow

```text
1. Select Active Task from Linear Cycle (Todo)
      ↓
2. Query Ticket Details & gitBranchName (get_issue)
      ↓
3. Checkout Feature Branch (git checkout -b boiihertz/cv-XX-...)
      ↓
4. Transition Linear Issue to "In Progress" (save_issue)
      ↓
5. Check CLI Generation First (use CLI generator if available)
      ↓
6. Enforce Scope Guard (strictly implement issue acceptance criteria)
      ↓
7. Implement Code (Next.js 16 + React 19 + TypeScript strict + Tailwind v4 on Bun)
      ↓
8. Execute Baseline Verification Suite (D9):
   • bun install
   • bun run typecheck (tsc --noEmit)
   • bun run lint (eslint .)
   • bun run build (next build)
      ↓
9. Atomic Commit (feat(CV-XX): imperative summary)
      ↓
10. Push Branch (git push -u origin boiihertz/cv-XX-...)
      ↓
11. Open GitHub PR with D7 Template (gh pr create)
      ↓
12. Verify Linear ↔ GitHub Automatic Linkage
      ↓
13. Transition Linear Issue to "In Review" (save_issue)
      ↓
14. Perform Engineering & Architecture Review
      ↓
15. Squash Merge PR to main (gh pr merge --squash --delete-branch)
      ↓
16. Sync Local main (git checkout main && git pull origin main)
      ↓
17. Post Completion Proof Comment & Move Issue to "Done" (save_comment + save_issue)
      ↓
18. Verify Next DAG Task in "Todo"
```

---

## Operational Guide & Step-by-Step Recipes

### Phase 1: Task Pickup & Branching (Steps 1–4)

1. **Query Linear Issue**:
   ```javascript
   const res = await callTool('get_issue', { id: 'CV-XX' });
   const issue = JSON.parse(res.result.content[0].text);
   const branchName = issue.gitBranchName; // e.g. "boiihertz/cv-7-..."
   ```
2. **Create / Checkout Git Branch**:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b <branchName>
   ```
3. **Transition to `In Progress`**:
   ```javascript
   await callTool('save_issue', { id: 'CV-XX', state: 'In Progress' });
   ```

---

### Phase 2: Implementation & Quality Gates (Steps 5–8)

1. **CLI Generation First**:
   - If scaffolding a configuration or package, run the official CLI first (e.g. `bun create`, `drizzle-kit generate`, `tsc --init`).
   - Edit the generated files afterward to apply custom project tokens.
2. **Scope Guard**:
   - Never implement work outside the active issue's acceptance criteria.
   - If a new requirement or defect is uncovered, file a separate Linear issue.
3. **Baseline Verification Commands (D9)**:
   Run all 4 baseline commands in PowerShell:
   ```powershell
   $env:Path = "$env:USERPROFILE\.bun\bin;" + $env:Path
   bun install
   bun run typecheck
   bun run lint
   bun run build
   ```

---

### Phase 3: Commit, Pull Request & Review (Steps 9–14)

1. **Commit & Push**:
   ```bash
   git add .
   git commit -m "<type>(CV-<id>): <imperative summary>"
   git push -u origin <branchName>
   ```
2. **Open Pull Request (D7 Template)**:
   ```bash
   gh pr create --title "<type>(CV-<id>): <summary>" --body "## Summary`n...`n`n## Linear`nCV-<id>`n`n## Changes`n- ...`n`n## Validation`n- bun run typecheck`n- bun run lint`n- bun run build`n`n## Notes`n..."
   ```
3. **Transition to `In Review`**:
   ```javascript
   await callTool('save_issue', { id: 'CV-XX', state: 'In Review' });
   ```
4. **Conduct Engineering Review**:
   - Check against acceptance criteria and Definition of Done.
   - Verify zero dead code, clean imports, and zero `any` types.

---

### Phase 4: Merge, Linear Closure & Hand-off (Steps 15–18)

1. **Squash Merge PR**:
   ```bash
   gh pr merge <pr_number> --squash --delete-branch
   ```
2. **Sync Local `main`**:
   ```bash
   git checkout main
   git pull origin main
   ```
3. **Post Completion Comment & Close Issue to `Done`**:
   ```javascript
   await callTool('save_comment', {
     issueId: 'CV-XX',
     body: `## Definition of Done Satisfied: CV-XX\n\n**Merged PR**: #${prNumber}\n\n### Verification Evidence:\n- bun run typecheck: 0 errors\n- bun run lint: 0 errors\n- bun run build: 0 errors\n\nTask complete. Advancing to next DAG task.`
   });
   await callTool('save_issue', { id: 'CV-XX', state: 'Done' });
   ```
4. **Advance Next Task**:
   - Verify next dependent leaf task in the DAG is in `Todo` and ready to be picked up.
