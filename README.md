# @sylphx/configs

Shared TypeScript and [Biome](https://biomejs.dev) settings used across SylphxAI projects, published to npm so any project can extend them.

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| [@sylphx/tsconfig](./packages/tsconfig) | TypeScript configuration | [![npm](https://img.shields.io/npm/v/@sylphx/tsconfig)](https://www.npmjs.com/package/@sylphx/tsconfig) |
| [@sylphx/biome-config](./packages/biome-config) | Biome linter/formatter configuration | [![npm](https://img.shields.io/npm/v/@sylphx/biome-config)](https://www.npmjs.com/package/@sylphx/biome-config) |

## Use them

### TypeScript

```bash
bun add -D @sylphx/tsconfig
```

In `tsconfig.json`:

```json
{
  "extends": "@sylphx/tsconfig/bun"
}
```

Presets: `@sylphx/tsconfig` (base), `@sylphx/tsconfig/bun`, `@sylphx/tsconfig/node`, `@sylphx/tsconfig/react`.

### Biome

```bash
bun add -D @sylphx/biome-config @biomejs/biome
```

In `biome.json`:

```json
{
  "extends": ["@sylphx/biome-config"]
}
```

## License

MIT

