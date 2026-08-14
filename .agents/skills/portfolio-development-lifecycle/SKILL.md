---
name: portfolio-development-lifecycle
description: >-
  Executes the canonical 18-step end-to-end development, verification, and issue lifecycle for the CodeGrogu Portfolio.
  Use whenever picking up a new Linear issue, creating branches, executing baseline checks, opening PRs, conducting reviews,
  verifying CI status, merging into main, and transitioning Linear issues to Done.
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
5. Check CLI Generation First (use official CLI generator before manual edits)
      ↓
6. Enforce Scope Guard (strictly focus on active issue Acceptance Criteria)
      ↓
7. Implement Code (Next.js 16 + React 19 + TypeScript strict + Tailwind v4 on Bun)
      ↓
8. Execute Local Pre-Flight Verification Suite:
   • bun test (unit and schema test suites)
   • bun run validate (typecheck && lint && format:check && build)
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
14. Verify GitHub Actions CI Quality Gate (gh pr checks <pr_number>)
      ↓
15. Squash Merge PR to main (gh pr merge --squash --delete-branch)
      ↓
16. Sync Local main (git checkout main && git pull origin main)
      ↓
17. Post Completion Proof Comment & Move Issue to "Done" (save_comment + save_issue)
      ↓
18. Advance & Verify Next DAG Task in "Todo"
```

---

## Operational Guide & Step-by-Step Recipes

### Phase 1: Task Pickup & Branching (Steps 1–4)

1. **Query Linear Issue**:

   ```javascript
   const res = await callTool('get_issue', { id: 'CV-XX' });
   const issue = JSON.parse(res.result.content[0].text);
   const branchName = issue.gitBranchName; // e.g. "boiihertz/cv-14-..."
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
   - If scaffolding a configuration or package, execute the official CLI command first (e.g. `bun create`, `drizzle-kit generate`, `tsc --init`, `bun test --init`).
   - Edit the generated files afterward to apply custom project tokens.

2. **Scope Guard**:
   - Never silently implement work outside the active issue's acceptance criteria.
   - If a new requirement or defect is uncovered, document it and file a dedicated Linear issue.

3. **Version Strictness with Linear**:
   - Ensure installed dependencies match the exact versions defined in Linear tickets and milestone specs (e.g. Next.js 16, React 19, Bun 1.3.14+, Tailwind CSS v4).

4. **Linear Checklist / Acceptance Criteria Ticking**:
   - As each acceptance criteria checklist item (`- [ ]`) is implemented and verified, update the Linear issue description via `save_issue` to mark it complete (`- [x]`).

5. **Environment & Secrets Synchronization**:
   - When introducing any new environment variable:
     1. Add documented placeholder to `.env.example`.
     2. Validate in `src/lib/env.ts` with Zod.
     3. Add test case in `tests/env.test.ts`.
     4. Add mock value in `.github/workflows/ci.yml` under `quality-gate.env`.

6. **Local Pre-Flight Verification Suite**:
   Run composite checks in PowerShell before committing:
   ```powershell
   $env:Path = "$env:USERPROFILE\.bun\bin;" + $env:Path
   bun test
   bun run validate
   ```

---

### Phase 3: Commit, Pull Request & CI Verification (Steps 9–14)

1. **Commit & Push**:

   ```bash
   git add .
   git commit -m "<type>(CV-<id>): <imperative summary>"
   git push -u origin <branchName>
   ```

2. **Open Pull Request (D7 Template & Literal Markdown)**:
   Always use unescaped literal multiline Markdown. Use `--body-file` or GitHub API to ensure pristine formatting:

   ```bash
   # Create temporary body file or use script with literal multiline Markdown:
   gh pr create --title "<type>(CV-<id>): <summary>" --body-file ".github/temp_pr_body.md"
   ```

   _Body format_:

   ```markdown
   ## Summary

   Clear summary of the implementation.

   ## Linear

   CV-<id>

   ## Changes

   - Add `feature` in `src/...`
   - Update `component`

   ## Validation

   - `bun test`: Passed (6/6)
   - `bun run validate`: Passed (0 errors)

   ## Notes

   Acceptance criteria satisfied.
   ```

3. **Transition to `In Review`**:

   ```javascript
   await callTool('save_issue', { id: 'CV-XX', state: 'In Review' });
   ```

4. **Verify GitHub Actions CI Quality Gate**:
   Inspect live CI checks before proceeding to merge:
   ```bash
   gh pr checks <pr_number>
   ```
   > [!IMPORTANT]
   > A PR must **never** be merged while CI checks are `pending` or `failed`. All checks must report `pass`.

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
     body: `## Definition of Done Satisfied: CV-XX\n\n**Merged PR**: #${prNumber}\n**CI Quality Gate**: Passed\n\n### Verification Evidence:\n- bun test: All tests passed\n- bun run validate: 0 errors\n\nTask complete. Advancing to next DAG task.`,
   });
   await callTool('save_issue', { id: 'CV-XX', state: 'Done' });
   ```

4. **Advance Next Task**:
   - Verify the next dependent leaf task in the DAG is in `Todo` and ready to be picked up.
