import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/core.ts'),
      name: 'CellCollection',
    },
    minify: 'terser',
    rollupOptions: {
      output: {
        entryFileNames: 'cell-collection.core.js',
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: '**/*.spec.ts',
    }),
  ],
});
