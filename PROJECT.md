# SylphxAI Configs

SylphxAI/configs is the shared configuration package monorepo for Sylphx TypeScript and Biome defaults.

## Lifecycle

- State: `production`
- Layer: `tooling`
- Machine manifest: [`.doctrine/project.json`](./.doctrine/project.json)

## Goals

- Provide the published `@sylphx/tsconfig` package for shared TypeScript configuration.
- Provide the published `@sylphx/biome-config` package for shared Biome configuration.
- Keep shared config packages small, versioned, and consumed through package exports rather than copied into downstream repositories.

## Non-Goals

- This repository does not own downstream application code style exceptions or product-specific compiler behavior.
- This repository does not own every repo's CI workflow, branch protection, or release process.
- This repository does not own enterprise engineering doctrine.

## Boundary

This repository owns shared configuration packages and their release surface. Downstream repositories choose and validate how they consume those packages; doctrine owns the standards and adoption control plane.

## Public Surfaces

- Repository README: [`README.md`](./README.md)
- Root package manifest and scripts: [`package.json`](./package.json)
- TypeScript config package: [`packages/tsconfig/`](./packages/tsconfig/)
- Biome config package: [`packages/biome-config/`](./packages/biome-config/)
- ADR-29 CI and release workflows: [`.github/workflows/`](./.github/workflows/)

## Delivery

The repository has ADR-29-style risk classification, trunk admission, postsubmit proof, and recovery-decision workflow jobs, plus a reusable main-branch release workflow. Production proof is passing lint/config validation, trunk admission fan-in, postsubmit proof on main, release workflow evidence, and package-registry readback for published config versions. This manifest slice is documentation-only and does not change package code, config defaults, CI, release, or deployment behavior.
