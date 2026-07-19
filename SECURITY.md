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
- Keep repository facts in `PROJECT.md`, package metadata, tests, and CI.

## Validation

Security-relevant changes should pass:

```bash
bun run lint
bun run test
```
