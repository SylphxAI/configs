# ADR-15: Dogfood GroundAtlas package gate

## Status

Accepted in SylphxAI/configs#15.

## Context

The shared configs repo had a Doctrine adapter manifest and ADR-29 validation, but neutral agents and public package consumers should not need private Sylphx Doctrine context to understand the project boundary. GroundAtlas strict scans also surfaced missing neutral manifest, security policy, ADR/spec records, and a lightweight test surface.

## Decision

Adopt `project.manifest.json` as the vendor-neutral project manifest and run the published GroundAtlas action/package in CI using `SylphxAI/groundatlas@v0.1.2` and `groundatlas@0.1.2`.

The CI gate must assert that:

- GroundAtlas selects `project.manifest.json`.
- `.doctrine/project.json` is reported only as an adapter.
- Fleet strict mode has zero blocked projects and zero warnings.
- Generated GroundAtlas files are navigation-only and are not committed as SSOT.

Add `SECURITY.md`, a control-plane spec, and a lightweight package-contract test so project-control facts and public-safety expectations are durable.

## Consequences

- External users and neutral agents can discover the configs repo boundary from `PROJECT.md` and `project.manifest.json`.
- Internal Sylphx governance can keep using `.doctrine/project.json` without imposing Doctrine as the public default.
- Package release runbook and consumer compatibility proof gaps remain separate adoption work.
