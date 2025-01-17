import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { bundleStats } from 'rollup-plugin-bundle-stats';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	plugins: [
		sveltekit(),
		bundleStats({
			compare: false,
			baseline: true,
			baselineFilepath: join(currentDir, "node_modules", ".cache", "bundle-stats", "baseline.json"),
			silent: true,
		}),
	]
});
