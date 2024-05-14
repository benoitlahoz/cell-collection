import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/DOM.ts'),
      name: 'CellCollection',
    },
    emptyOutDir: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        entryFileNames: 'cell-collection.dom.js',
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
