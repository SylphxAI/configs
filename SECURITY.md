# Security Policy

## Supported surface

This repository publishes shared configuration packages: `@sylphx/tsconfig` and `@sylphx/biome-config`. It does not operate a hosted runtime, customer data plane, or product-specific application.

## Reporting a vulnerability

Please report security issues privately through GitHub Security Advisories for this repository when available. If advisories are unavailable, contact the repository maintainers through the organization-owned security contact listed on the SylphxAI GitHub organization profile.

Do not open public issues containing secrets, exploit details, customer data, or unreleased vulnerability information.

## Security expectations

- Do not commit secrets, credentials, private package tokens, customer data, or private runtime configuration.
- Do not add downstream product-specific compiler or formatter exceptions to shared config packages.
- Keep consumers on published package exports and documented config entrypoints instead of unpublished internal paths.
- Keep project-control facts in `PROJECT.md`, `project.manifest.json`, `.doctrine/project.json`, specs, ADRs, package metadata, tests, and CI instead of chat or generated navigation files.

## Validation

Security-relevant changes should pass:

```bash
bun run lint
bun run test
npm exec --yes --package groundatlas@0.1.2 -- ga fleet . --out .groundatlas-pilot --require-atlas --strict --json
```
