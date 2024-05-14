import { resolve } from 'path';
import { defineConfig } from 'vitepress';
import typedocSidebar from '../api/typedoc-sidebar.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CellCollection',
  description: "A helper collection to handle 2D or 3D arrays of 'cells'.",
  outDir: resolve(__dirname, '../../docs'),
  base: '/cell-collection/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/api/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        link: '/api/',
        items: typedocSidebar,
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/benoitlahoz/cell-collection',
      },
    ],
  },
});
