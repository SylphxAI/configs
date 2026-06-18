# Sylphx Configs Agent Instructions

## Scope

This file is the repo-local operating policy for agents working in
`SylphxAI/configs`. Org-wide engineering doctrine is owned by
`SylphxAI/doctrine`; this file only specializes that SSOT for the shared config
package boundary.

`configs` owns reusable TypeScript and Biome configuration packages consumed by
SylphxAI projects. It is a shared tooling repo, so changes here can affect many
projects after package release/adoption.

## Owns

- `packages/tsconfig/*` and the published `@sylphx/tsconfig` package.
- `packages/biome-config/*` and the published `@sylphx/biome-config` package.
- Root package/workspace metadata, CI/release wiring, and docs for consuming the
  shared configs.

## Does Not Own

- Per-project exceptions that belong in each consuming repo.
- Runtime app behavior, deployment manifests, credentials, or product policy.
- The org-wide doctrine itself; link to `SylphxAI/doctrine` rather than copying
  it here.

## Read First

Before changing shared config behavior, read the smallest relevant set of:

1. `README.md` — package overview and install examples.
2. `packages/tsconfig/README.md` — TypeScript config entrypoints and consumer
   usage.
3. `packages/biome-config/README.md` — Biome defaults and override model.
4. `package.json` — workspace scripts, package manager, and release tooling.
5. `.github/workflows/ci.yml` and `.github/workflows/release.yml` — CI/release
   gates.

## Guardrails

- Treat defaults as portfolio-wide contracts. Tightening a rule or compiler
  option can break downstream repos; document the rationale and expected
  migration path.
- Keep config packages generic. Do not encode app-specific, project-specific, or
  secret-bearing behavior.
- Prefer additive/new entrypoints for breaking TypeScript or Biome behavior;
  make broad default changes only with evidence from consumer compatibility.
- Do not commit credentials, npm tokens, or generated release secrets.
- Use branch → commit → PR. Do not push directly to `main`, force-push, publish,
  merge, or deploy without manager-visible evidence and required gates.

## Validation

For docs-only boundary changes, review the diff and check all referenced files
exist.

For config behavior changes, run at minimum:

- `bun run lint`
- any package-specific checks or consumer fixture checks added with the change

When changing published defaults, include evidence from at least one consuming
repo or fixture that the new contract behaves as intended.

## Reporting

When reporting completed work, include changed files, boundaries read,
validation run, PR/issue links, and downstream compatibility risk. Be explicit
when no package behavior, release metadata, credentials, or publication state
changed.
