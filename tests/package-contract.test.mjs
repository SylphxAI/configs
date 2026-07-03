import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const rootPackage = JSON.parse(readFileSync('package.json', 'utf8'))
const tsconfigPackage = JSON.parse(readFileSync('packages/tsconfig/package.json', 'utf8'))
const biomePackage = JSON.parse(readFileSync('packages/biome-config/package.json', 'utf8'))
const manifest = JSON.parse(readFileSync('project.manifest.json', 'utf8'))

assert.deepEqual(rootPackage.workspaces, ['packages/*'])
assert.equal(tsconfigPackage.name, '@sylphx/tsconfig')
assert.equal(biomePackage.name, '@sylphx/biome-config')
assert.ok(existsSync('packages/tsconfig/README.md'))
assert.ok(existsSync('packages/biome-config/README.md'))
assert.equal(manifest.project.id, 'configs')
assert.equal(manifest.adoption.status, 'adopted')
assert.ok(
	manifest.surfaces.some(
		(surface) => surface.path === '.doctrine/project.json' && /adapter/i.test(surface.description)
	)
)

console.log('shared config package contract ok')
