---
"@sylphx/biome-config": minor
---

Add test file overrides for relaxed linting

- Disable `noExcessiveCognitiveComplexity` in test files
- Disable `noExplicitAny` in test files
- Disable `noNonNullAssertion` in test files
- Increase line width to 120 for test files
- Applies to: `*.test.ts`, `*.spec.ts`, `*.test.tsx`, `*.spec.tsx`, `test/`, `tests/`, `__tests__/`
