# GitHub MCP Tools Reference

Quick cheatsheet for available GitHub MCP tools in the workspace. All tools are called via `call_mcp_tool` with `ServerName: "github"`.

## Repository & File Operations

### `get_file_contents`

Retrieve contents and metadata of a file or directory in a repository.

```json
{
  "owner": "CodeGrogu",
  "repo": "portfolio",
  "path": "package.json",
  "branch": "main"
}
```

### `create_or_update_file`

Create or update a single file with a commit.

```json
{
  "owner": "CodeGrogu",
  "repo": "portfolio",
  "path": "README.md",
  "content": "# CodeGrogu Portfolio\n...",
  "message": "docs: update repository readme",
  "branch": "boiihertz/cv-6-scaffold-nextjs-application-with-bun",
  "sha": "<file-blob-sha-if-updating>"
}
```

### `push_files`

Push multiple files to a repository in a single atomic commit.

```json
{
  "owner": "CodeGrogu",
  "repo": "portfolio",
  "branch": "boiihertz/cv-6-scaffold-nextjs-application-with-bun",
  "message": "feat(core): scaffold Next.js 16 app with Bun runtime",
  "files": [
    { "path": "package.json", "content": "..." },
    { "path": "tsconfig.json", "content": "..." },
    { "path": "src/app/page.tsx", "content": "..." }
  ]
}
```

### `search_repositories`

Search repositories across GitHub.

```json
{
  "query": "user:CodeGrogu portfolio",
  "perPage": 10
}
```

### `search_code`

Search code within repositories.

```json
{
  "q": "repo:CodeGrogu/portfolio WebGPURenderer"
}
```

---

## Branching & Commit Operations

### `create_branch`

Create a new branch from a base branch.

```json
{
  "owner": "CodeGrogu",
  "repo": "portfolio",
  "branch": "boiihertz/cv-6-scaffold-nextjs-application-with-bun",
  "from_branch": "main"
}
```

### `list_commits`

List recent commits on a branch or repository.

```json
{
  "owner": "CodeGrogu",
  "repo": "portfolio",
  "sha": "main",
  "per_page": 20
}
```

---

## Pull Request Operations

### `create_pull_request`

Create a new Pull Request.

```json
{
  "owner": "CodeGrogu",
  "repo": "portfolio",
  "title": "feat(cv-6): Scaffold Next.js application with Bun",
  "head": "boiihertz/cv-6-scaffold-nextjs-application-with-bun",
  "base": "main",
  "body": "## Summary\nScaffolds Next.js 16 with Bun and Tailwind v4.\n\nCloses CV-6.\n\n## Verification\n- `bun run build` passed\n- `bun run dev` verified locally",
  "draft": false,
  "maintainer_can_modify": true
}
```

### `get_pull_request`

Fetch full PR details by number.

```json
{
  "owner": "CodeGrogu",
  "repo": "portfolio",
  "pull_number": 1
}
```

### `list_pull_requests`

List PRs in the repository.

```json
{
  "owner": "CodeGrogu",
  "repo": "portfolio",
  "state": "open",
  "head": "CodeGrogu:boiihertz/cv-6-scaffold-nextjs-application-with-bun"
}
```

### `get_pull_request_files`

List changed files in a PR.

```json
{
  "owner": "CodeGrogu",
  "repo": "portfolio",
  "pull_number": 1
}
```

### `get_pull_request_status`

Check CI and review statuses for a PR.

```json
{
  "owner": "CodeGrogu",
  "repo": "portfolio",
  "pull_number": 1
}
```

### `create_pull_request_review`

Submit a formal PR code review.

```json
{
  "owner": "CodeGrogu",
  "repo": "portfolio",
  "pull_number": 1,
  "event": "APPROVE",
  "body": "All criteria met and CI quality gate passed."
}
```

### `merge_pull_request`

Merge a pull request.

```json
{
  "owner": "CodeGrogu",
  "repo": "portfolio",
  "pull_number": 1,
  "merge_method": "squash",
  "commit_title": "feat(cv-6): Scaffold Next.js application with Bun (#1)",
  "commit_message": "Verified with Bun test suite and Next.js production build."
}
```

---

## Issues & Discussions

### `list_issues` / `get_issue` / `create_issue` / `update_issue`

Manage GitHub issues and mirror Linear milestones when needed.

```json
{
  "owner": "CodeGrogu",
  "repo": "portfolio",
  "state": "open"
}
```

### `add_issue_comment`

Add comment to an issue or pull request.

```json
{
  "owner": "CodeGrogu",
  "repo": "portfolio",
  "issue_number": 1,
  "body": "Automated verification completed: 0 errors."
}
```
