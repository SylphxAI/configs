# @sylphx/tsconfig

Shared TypeScript configuration for SylphxAI projects.

## Installation

```bash
bun add -D @sylphx/tsconfig
```

## Usage

### Base (Bun projects)

```json
{
  "extends": "@sylphx/tsconfig/bun",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Node.js projects

```json
{
  "extends": "@sylphx/tsconfig/node"
}
```

### React projects

```json
{
  "extends": "@sylphx/tsconfig/react"
}
```

## Configurations

| Config | Use Case |
|--------|----------|
| `@sylphx/tsconfig` | Base config |
| `@sylphx/tsconfig/bun` | Bun projects |
| `@sylphx/tsconfig/node` | Node.js projects |
| `@sylphx/tsconfig/react` | React projects |

## License

MIT
