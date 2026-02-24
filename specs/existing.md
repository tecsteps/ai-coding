# How to use coding agents in existing code bases

### Explore Code base

Explore the existing code base. Write documentation into docs/*.md. Explore: architechture, technologies, dependencies (incl version and update changes), workflows, ... Add vizulizations when useful.

### Addiitonal docs

Add external docs (esp depending services, APIs, What the company is about, ...)

### Code Conventions

- Ideally code conventions are already defined and checked by a linter -> Provide guidance as markdown filese4
- If not:

Reverse-engineer code conventions from the existing code base. Write to docs/code-conventions.md and link from CLAUDE.md. Ask me questions if things are uncertain.

### Unit Tests
Run tests and ceck coverage

If needed, add missing tests

### Run & Verify

Ensure the coding agend can run the aplication and verify results.

### Access
Access to logs ,db, external services, ...

### Tooling

Add existing tooling to Clause Code (linters, sniffers, debug, LSP, ...

