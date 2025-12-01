# @sylphx/biome-config

Shared Biome configuration for SylphxAI projects.

## Installation

```bash
bun add -D @sylphx/biome-config @biomejs/biome
```

## Usage

Create a `biome.json` in your project root:

```json
{
  "$schema": "https://biomejs.dev/schemas/2.0.0/schema.json",
  "extends": ["@sylphx/biome-config"]
}
```

## Configuration

The shared config includes:

### Formatter
- Indent: tabs (width 2)
- Line width: 100 (120 for tests/examples)
- Single quotes
- Trailing commas (all)
- No semicolons

### Linter
- Recommended rules enabled
- No unused imports/variables (error)
- Use const (error)
- Use import type (error)
- No non-null assertion (warn)
- No explicit any (warn)

### Overrides (relaxed rules)
Tests, examples, and config files have relaxed linting:
- `noExplicitAny`: off
- `noNonNullAssertion`: off
- `noExcessiveCognitiveComplexity`: off

### Files
- Ignores: `dist`, `node_modules`

## Overriding

You can override any setting in your project's `biome.json`:

```json
{
  "$schema": "https://biomejs.dev/schemas/2.0.0/schema.json",
  "extends": ["@sylphx/biome-config"],
  "formatter": {
    "lineWidth": 120
  },
  "linter": {
    "rules": {
      "suspicious": {
        "noExplicitAny": "off"
      }
    }
  }
}
```

## License

MIT
