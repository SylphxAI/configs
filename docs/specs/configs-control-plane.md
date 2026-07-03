# SylphxAI Configs Control Plane Spec

## Purpose

`SylphxAI/configs` publishes shared TypeScript and Biome configuration packages. Its project control plane must be understandable to humans, agents, CI, release automation, and package consumers without requiring private Sylphx Doctrine context.

## Source of truth

- `PROJECT.md` is the human-readable project boundary, lifecycle, public surfaces, delivery, and adoption entry point.
- `project.manifest.json` is the vendor-neutral machine-readable manifest selected by GroundAtlas.
- `.doctrine/project.json` is the Sylphx Doctrine adapter and organization-local governance catalog. It must remain an adapter, not the vendor-neutral default.
- `package.json` and `packages/*/package.json` own package identity, scripts, workspaces, and published package metadata.
- `packages/*/README.md` owns consumer-facing package usage until generated package reference docs exist.

## Required GroundAtlas gate

The CI workflow must run the published GroundAtlas package/action on pull requests, merge-group candidates, and `main` pushes. The gate must assert:

1. `project.manifest.json` is selected as the vendor-neutral manifest.
2. `.doctrine/project.json` is detected only as an adapter.
3. Fleet strict mode has zero blocked projects and zero warnings.
4. Generated GroundAtlas output remains navigation-only and is not committed as SSOT.

## Package-release boundary

This spec does not change the package release workflow. Published config package versions remain forward-fix only; release runbook and consumer compatibility proof gaps stay tracked in `.doctrine/project.json` until separately closed.
