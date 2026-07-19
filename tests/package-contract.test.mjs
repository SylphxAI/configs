import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const rootPackage = JSON.parse(readFileSync('package.json', 'utf8'))
const tsconfigPackage = JSON.parse(readFileSync('packages/tsconfig/package.json', 'utf8'))
const biomePackage = JSON.parse(readFileSync('packages/biome-config/package.json', 'utf8'))

assert.deepEqual(rootPackage.workspaces, ['packages/*'])
assert.equal(tsconfigPackage.name, '@sylphx/tsconfig')
assert.equal(biomePackage.name, '@sylphx/biome-config')
assert.ok(existsSync('packages/tsconfig/README.md'))
assert.ok(existsSync('packages/biome-config/README.md'))

console.log('shared config package contract ok')
