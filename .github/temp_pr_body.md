## Summary
Codify the Literal Markdown rule for Pull Request descriptions into project execution standards, master configuration, and lifecycle skills.

## Changes
- Update `project-execution-standards.md` Section 11 to require literal Markdown and forbid escaped JSON artifacts in PR bodies
- Update `GEMINI.md` Core Principle 13 to enforce the `--body-file` and literal Markdown protocol
- Update `portfolio-development-lifecycle` skill Phase 3 recipe to demonstrate clean multiline Markdown generation

## Validation
- `bun test`: Passed (6/6)
- `bun run validate`: Passed (0 errors)
