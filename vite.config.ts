import { defineConfig } from 'vitest/config';

export default defineConfig({
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    includeSource: ['src/**/*.ts'],
    coverage: {
      reporter: ['text', 'html-spa'],
    },
  },
});
