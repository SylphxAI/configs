# @sylphx/configs

<p align="center">
  <img src="https://mark.sylphx.com/api/v1/mark/hero.svg?type=aurora&theme=grape&text=%40sylphx%2Fconfigs&desc=Shared%20TypeScript%20and%20Biome%20settings" alt="@sylphx/configs" width="100%" />
</p>

Shared TypeScript and [Biome](https://biomejs.dev) settings used across SylphxAI projects, published to npm so any project can extend them.

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| [@sylphx/tsconfig](./packages/tsconfig) | TypeScript configuration | [![npm](https://mark.sylphx.com/npm/v/@sylphx/tsconfig)](https://www.npmjs.com/package/@sylphx/tsconfig) |
| [@sylphx/biome-config](./packages/biome-config) | Biome linter/formatter configuration | [![npm](https://mark.sylphx.com/npm/v/@sylphx/biome-config)](https://www.npmjs.com/package/@sylphx/biome-config) |

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

