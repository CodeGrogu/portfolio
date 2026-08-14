# Linear MCP Tools Reference

Quick cheatsheet for available Linear tools in the workspace.

## Issue Operations

### `list_issues`

List and search issues in the project.

```json
{
  "project": "CodeGrogu Portfolio",
  "state": "In Progress",
  "limit": 20,
  "orderBy": "updatedAt"
}
```

### `get_issue`

Retrieve comprehensive details for an issue.

```json
{
  "issue": "CV-12"
}
```

### `save_issue`

Create or update an issue. To update, include the `id` field.

```json
{
  "id": "CV-12",
  "state": "In Progress"
}
```

Or create:

```json
{
  "teamId": "48da45e0-0e42-4a0f-a469-11d38746466b",
  "projectId": "7f9d282c-6473-4d95-bf0d-3002497537d7",
  "projectMilestoneId": "26b61743-861f-4a1c-9278-65911090ec3a",
  "title": "Setup Next.js 15 app scaffold with Bun and Tailwind",
  "description": "## Objective\nScaffold the Next.js application...",
  "priority": 2,
  "estimate": 3
}
```

## Comments & Updates

### `save_comment`

Post a comment to an issue.

```json
{
  "issueId": "CV-12",
  "body": "Implementation complete. Verified WebGPU detection and WebGL fallback via automated test suite."
}
```

### `list_comments`

Retrieve conversation threads on an issue.

```json
{
  "issueId": "CV-12"
}
```

## Project & Milestone Management

### `get_project`

Get details, health, and milestone progress.

```json
{
  "query": "CodeGrogu Portfolio",
  "includeMilestones": true
}
```

### `list_milestones`

List all milestones for the project.

```json
{
  "project": "CodeGrogu Portfolio"
}
```

### `save_status_update`

Post a project status update.

```json
{
  "projectId": "7f9d282c-6473-4d95-bf0d-3002497537d7",
  "health": "onTrack",
  "body": "Milestone 1 (Foundation) is underway..."
}
```
