# Agent Instructions

This repository consumes the Sylphx engineering doctrine from [SylphxAI/doctrine](https://github.com/SylphxAI/doctrine).

Before changing files here:

- Read [PROJECT.md](./PROJECT.md) and [`.doctrine/project.json`](./.doctrine/project.json) for this repository's goal, lifecycle, boundary, public surfaces, and adoption gaps.
- Read `SylphxAI/doctrine` `AGENTS.md`, `PRINCIPLES.md`, and `ADR.md`, then load any triggered standards.
- Keep shared configs generic; product-specific compiler or formatter exceptions belong in the consuming repository.

Do not add downstream product policy here. This repository owns shared TypeScript and Biome configuration packages only.
