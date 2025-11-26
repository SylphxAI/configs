# @sylphx/configs

Shared configurations for SylphxAI projects.

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| [@sylphx/tsconfig](./packages/tsconfig) | TypeScript configuration | [![npm](https://img.shields.io/npm/v/@sylphx/tsconfig)](https://www.npmjs.com/package/@sylphx/tsconfig) |
| [@sylphx/biome-config](./packages/biome-config) | Biome linter/formatter configuration | [![npm](https://img.shields.io/npm/v/@sylphx/biome-config)](https://www.npmjs.com/package/@sylphx/biome-config) |

## Quick Start

### TypeScript

```bash
bun add -D @sylphx/tsconfig
```

```json
{
  "extends": "@sylphx/tsconfig/bun"
}
```

### Biome

```bash
bun add -D @sylphx/biome-config @biomejs/biome
```

```json
{
  "extends": ["@sylphx/biome-config"]
}
```

## License

MIT
