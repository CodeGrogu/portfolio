## Summary
Replace all em dashes with standard hyphens across code, metadata, documentation, and workspace rules, and codify the Hyphens Only standard.

## Changes
- Replace em dashes in `src/app/layout.tsx` metadata titles
- Replace em dashes in `.env.example`, `GEMINI.md`, and `linear-workflow` SKILL.md
- Add Hyphens Only Standard rule to `project-execution-standards.md` Section 11
- Audit and clean all existing GitHub PR titles and bodies

## Validation
- `bun test`: Passed (6/6)
- `bun run validate`: Passed (0 errors)
