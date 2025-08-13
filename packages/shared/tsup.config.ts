import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/events/index.ts', 'src/types/index.ts', 'src/utils/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
});