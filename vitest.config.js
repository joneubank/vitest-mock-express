import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		coverage: {
			provider: 'istanbul',
		},
		globals: true,
		isolate: true,
		include: ['src/test/**/*.test.ts'],
	},
});
