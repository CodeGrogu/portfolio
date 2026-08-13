---
name: linear-workflow
description: >-
  Manage issues, milestones, status updates, cycles, and project tracking in Linear for the CodeGrogu Portfolio.
  Use this skill whenever creating, searching, updating, or closing Linear issues, tracking project progress,
  linking Git branches/commits to tickets, or posting status updates and comments.
---

# Linear Workflow & Project Management Skill

This skill governs issue tracking, milestone alignment, status transitions, and project operations in Linear for the **CodeGrogu Portfolio** workspace.

## Workspace & Project Defaults

| Key | Value |
| :--- | :--- |
| **Workspace** | Peer Pressure (`https://linear.app/peerpressure`) |
| **Project** | `CodeGrogu Portfolio` |
| **Project ID** | `7f9d282c-6473-4d95-bf0d-3002497537d7` |
| **Team** | `Portfolio` (Key: `CV`, ID: `48da45e0-0e42-4a0f-a469-11d38746466b`) |
| **URL** | https://linear.app/peerpressure/project/codegrogu-portfolio-36b613a818cf |

### Milestones

- **Foundation** (`26b61743-861f-4a1c-9278-65911090ec3a`) — Target: 2026-08-21
- **Core Experience** (`ad3f3f93-4645-4640-9d70-ae58972a317c`) — Target: 2026-09-04
- **Web3D** (`f55343ae-1696-4917-bd33-aaa6ce8b57e6`) — Target: 2026-09-25
- **Full-Stack Systems** (`50b5d985-c0c1-42f4-8348-3c6a28053e14`) — Target: 2026-10-16
- **Production Hardening** (`547e687f-bcb1-4fc0-bf53-3d083240800c`) — Target: 2026-10-30
- **Launch** (`48af0f67-2f1e-4230-8683-8c429d5e392e`) — Target: 2026-11-13

### Active Execution Cycle

- **Cycle Name**: `Foundation — Cycle 1` (Cycle `1`, ID: `e07214a7-bd5b-42e3-83f7-ad5864052297`)
- **Period**: `2026-08-17` to `2026-08-21`
- **Workload**: 4 tasks, 13 story points (`CV-6` $\rightarrow$ `CV-7` $\rightarrow$ `CV-14` $\rightarrow$ `CV-15`)
- **Protocol**: Sequential leaf execution. Only 1 leaf task active in `In Progress` at any time.

---

## Linear Status & Branching Protocol (D4 & D5)

### 1. Status Lifecycle (D4)

```
Backlog  →  Todo  →  In Progress  →  In Review  →  Done
```

- **`Backlog`**: Unscheduled or future milestone backlog tasks.
- **`Todo`**: Ready to start. Prerequisites complete; task belongs to the active cycle.
- **`In Progress`**: Actively being implemented. Exactly 1 leaf task active at any time.
- **`In Review`**: Implementation code written; automated test suites, build checks, and verification underway.
- **`Done`**: Definition of Done satisfied and verified with proof (**Evidence before assertions**).
  - *Rule*: Never move an issue to Done merely because you wrote the code.
- **`Canceled`**: Reserved strictly for genuine cancellations.

### 2. Issue → Git Branch Protocol (D5)

Every implementation issue corresponds 1:1 with its Linear-generated branch:

```
Linear Issue (e.g. CV-6)  ↔  Git Branch (boiihertz/cv-6-scaffold-nextjs-application-with-bun)  ↔  Pull Request
```

- Retrieve the official branch name from the issue: `get_issue(id="CV-XX")` $\rightarrow$ `gitBranchName`.
- Never manually invent arbitrary branch names.

---

## Canonical Principles of Issue Tracking & DAG Architecture

These golden rules must be strictly adhered to whenever interacting with or modifying the Linear workspace:

### 1. The Separation of Concerns

- **Parent $\neq$ Blocker**: A parent issue represents an organizational container or epic grouping. **Never** make a parent epic block other workstreams or milestones. Containment is orthogonal to execution prerequisites.
- **Date Sequence $\neq$ Dependency**: Having Task B scheduled on the calendar after Task A does not mean Task A blocks Task B. Only use `blocks` / `blockedBy` when Task B literally cannot reasonably start without Task A's deliverables.
- **Containers $\neq$ Workload**: Milestone parent issues (`CV-1` through `CV-5`, `CV-16`) and sub-epic containers (`CV-53` through `CV-56`, `CV-37`) must remain **unestimated (0 story points)**. Estimates belong strictly to actionable leaf tasks to prevent double-counting.

### 2. Honest Leaf-Level DAGs

- **Decoupled Streams**: Parallel workstreams (e.g. Database schema vs Hero UI; Core Web Vitals vs 3D profiling; Secret leak audit vs API threat testing) must remain concurrent without artificial cross-stream blockers.
- **Sub-Epics as Completion Gates**: Sub-epic containers act as umbrella completion gates closed by their final validating leaf tasks (e.g. `CV-71` gates `CV-53`, `CV-78` gates `CV-55`, `CV-76` gates `CV-54`, `CV-79` gates `CV-56`).
- **Cycle Prevention**: Always verify that the dependency graph remains a strict Directed Acyclic Graph (DAG) with zero circular loops.

### 3. Schedule & Calendar Hygiene

- **Business Days Only**: All task due dates must fall on Monday–Friday (zero weekend deadlines).
- **Predecessor Invariant**: For every dependency edge $A \rightarrow B$, verify $\text{dueDate}(A) \le \text{dueDate}(B)$.
- **Parent-Child Invariant**: For every child task $C$ of parent container $P$, verify $\text{dueDate}(C) \le \text{dueDate}(P)$.

---

## Standard Procedures

### 1. Finding & Inspecting Issues

When checking what to work on, finding tickets for a feature, or verifying existing scope:

1. **Filter by Project**: Always scope queries to `project: "CodeGrogu Portfolio"` or `team: "Portfolio"`.
2. **List Issues**: Use `list_issues` with parameters:
   - `project`: `"CodeGrogu Portfolio"`
   - `state`: `"Todo"`, `"In Progress"`, `"In Review"`, `"Backlog"`, or `"Done"`
   - `limit`: number of results (default 50)
   - `query`: keyword search string
3. **Get Full Issue Details**: Use `get_issue` with `id: "<ISSUE_ID>"` (e.g. `CV-6`) to fetch acceptance criteria, sub-issues, attachments, and branch names.

### 2. Starting Work on an Issue

When beginning implementation of a task:

1. Fetch ticket details: `get_issue(id="CV-XX")`
2. Update issue state to **`In Progress`** using `save_issue`.
3. Check out the official `gitBranchName` on the ticket (e.g., `boiihertz/cv-6-scaffold-nextjs-application-with-bun`).

### 3. Review & Verification

When implementation code is complete:

1. Update issue state to **`In Review`** using `save_issue`.
2. Run all build, test, and lint commands locally.

### 4. Completing & Closing an Issue

When feature code is verified and the Definition of Done is fully satisfied:

1. Add a completion comment using `save_comment`:
   - Summarize what was built, key technical decisions, and test/verification evidence.
2. Update issue state to **`Done`** using `save_issue`.

---

## Detailed Tool Reference

For full parameter definitions and examples across all Linear MCP tools, see [Linear Tool Reference](./references/tools.md).
