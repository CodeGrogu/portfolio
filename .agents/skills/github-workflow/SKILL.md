---
name: github-workflow
description: >-
  Manage GitHub repositories, branches, commits, files, pull requests, reviews, and releases using GitHub MCP tools.
  Use whenever creating branches, pushing code, opening pull requests, reviewing diffs, checking CI status,
  or merging PRs for the CodeGrogu Portfolio.
---

# GitHub Workflow & MCP Operations Skill

This skill governs GitHub operations, branch synchronization, pull request lifecycles, and code integration for the **CodeGrogu Portfolio** (`CodeGrogu/portfolio`).

---

## Workspace & Repository Defaults

| Key | Value |
| :--- | :--- |
| **Owner** | `CodeGrogu` |
| **Repository** | `portfolio` |
| **Default Branch** | `main` |
| **Linear Workspace** | Peer Pressure (`CV`) |
| **MCP Server** | `github` (called via `call_mcp_tool`) |

---

## The Linear ↔ GitHub Traceability Protocol (D5)

Every implementation task follows a strict 1:1 branch and pull request traceability mapping:

```text
main
  ↑
Pull Request
  ↑
feature branch
  ↑
Linear issue
```

---

## End-to-End Development Cycle (D6)

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

---

## Standard Workflows & MCP Recipes

All tools in this skill are executed via `call_mcp_tool` with `ServerName: "github"`.

### 1. Branch Management

#### Creating a Feature Branch from Linear Metadata

Before making changes for an issue, ensure the corresponding branch exists:

```json
{
  "ServerName": "github",
  "ToolName": "create_branch",
  "Arguments": {
    "owner": "CodeGrogu",
    "repo": "portfolio",
    "branch": "boiihertz/cv-6-scaffold-nextjs-application-with-bun",
    "from_branch": "main"
  }
}
```

---

### 2. File Updates & Atomic Commits

#### Pushing Multiple Changes in a Single Commit (`push_files`)

When committing scaffold, components, or feature files remotely:

```json
{
  "ServerName": "github",
  "ToolName": "push_files",
  "Arguments": {
    "owner": "CodeGrogu",
    "repo": "portfolio",
    "branch": "boiihertz/cv-6-scaffold-nextjs-application-with-bun",
    "message": "feat(cv-6): initialize Next.js 16 app structure and Bun configuration",
    "files": [
      {
        "path": "package.json",
        "content": "{\n  \"name\": \"portfolio\",\n  \"module\": \"index.ts\",\n  \"type\": \"module\"\n}\n"
      },
      {
        "path": "tsconfig.json",
        "content": "{\n  \"compilerOptions\": { \"strict\": true }\n}\n"
      }
    ]
  }
}
```

#### Inspecting Remote Files (`get_file_contents`)

```json
{
  "ServerName": "github",
  "ToolName": "get_file_contents",
  "Arguments": {
    "owner": "CodeGrogu",
    "repo": "portfolio",
    "path": "package.json",
    "branch": "main"
  }
}
```

---

## Pull Request Convention (D7)

Every pull request must follow a strict, consistent format that clearly identifies its Linear issue.

### Title Format

```text
<type>(CV-<id>): <imperative summary>
```

Examples:
- `feat(CV-6): scaffold Next.js application with Bun`
- `chore(CV-7): establish TypeScript, linting, formatting and import conventions`
- `feat(CV-14): define environment and secrets strategy`
- `ci(CV-15): establish CI quality gate`

### PR Body Structure

Every PR body must contain these exact 5 sections:

```markdown
## Summary
Brief description of the problem and what this PR accomplishes.

## Linear
CV-6

## Changes
- List of concrete code, configuration, or architectural additions/modifications.

## Validation
- bun run typecheck
- bun run lint
- bun run build

## Notes
Any relevant technical details, architectural context, or follow-up dependencies.
```

---

### 3. Pull Request Lifecycle

#### Creating a Pull Request (`create_pull_request`)

When implementation and verification enter `In Review`:

```json
{
  "ServerName": "github",
  "ToolName": "create_pull_request",
  "Arguments": {
    "owner": "CodeGrogu",
    "repo": "portfolio",
    "title": "feat(CV-6): scaffold Next.js application with Bun",
    "head": "boiihertz/cv-6-scaffold-nextjs-application-with-bun",
    "base": "main",
    "body": "## Summary\nScaffolds Next.js 16 (Active LTS) with React 19, TypeScript, and Tailwind CSS.\n\n## Linear\nCV-6\n\n## Changes\n- Initialize Next.js project with App Router and Bun package manager\n- Configure Tailwind CSS v4 and standard CSS custom properties\n- Establish core directory structure\n\n## Validation\n- bun run typecheck\n- bun run lint\n- bun run build\n- bun run dev\n\n## Notes\nWindows 11 cross-platform verified.",
    "draft": false,
    "maintainer_can_modify": true
  }
}
```

#### Checking PR Status & Checks (`get_pull_request_status`)

```json
{
  "ServerName": "github",
  "ToolName": "get_pull_request_status",
  "Arguments": {
    "owner": "CodeGrogu",
    "repo": "portfolio",
    "pull_number": 1
  }
}
```

#### Reviewing PR Diffs (`get_pull_request_files`)

```json
{
  "ServerName": "github",
  "ToolName": "get_pull_request_files",
  "Arguments": {
    "owner": "CodeGrogu",
    "repo": "portfolio",
    "pull_number": 1
  }
}
```

#### Submitting a Code Review (`create_pull_request_review`)

```json
{
  "ServerName": "github",
  "ToolName": "create_pull_request_review",
  "Arguments": {
    "owner": "CodeGrogu",
    "repo": "portfolio",
    "pull_number": 1,
    "event": "APPROVE",
    "body": "LGTM. Verified against acceptance criteria and clean production build."
  }
}
```

#### Merging Pull Requests (`merge_pull_request`)

Once CI and reviews are satisfied:

```json
{
  "ServerName": "github",
  "ToolName": "merge_pull_request",
  "Arguments": {
    "owner": "CodeGrogu",
    "repo": "portfolio",
    "pull_number": 1,
    "merge_method": "squash",
    "commit_title": "feat(cv-6): Scaffold Next.js application with Bun (#1)",
    "commit_message": "Scaffold Next.js 16 app with React 19, TypeScript, and Bun runtime.\n\nCloses CV-6."
  }
}
```

---

## Best Practices & Safety Rules

1. **Squash Merges Preferred**: Use `merge_method: "squash"` to maintain a clean, linear git history on `main`.
2. **Atomic Commits**: Group related file additions into a single `push_files` call rather than multiple one-off commits.
3. **Link Linear Issues**: Always mention the Linear issue key (e.g. `CV-6` or `Closes CV-6`) in the PR title and description so GitHub and Linear automatically link the activity.
4. **Never Force-Push to Main**: Protected branches must remain immutable.

---

## Detailed Tool Reference

For the comprehensive index of all 26 GitHub MCP tools, see [GitHub Tool Reference](./references/tools.md).
