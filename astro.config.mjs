import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kozhuhds.com',
  integrations: [
    tailwind(), // Integrate Tailwind CSS
    mdx({
      syntaxHighlight: false, // Disable default syntax highlighting (if using rehypePrettyCode)
      rehypePlugins: [
        rehypeSlug, // Adds ids to headings for linking
        [
          rehypePrettyCode, // Enhances code blocks with syntax highlighting
          {
            theme: 'github-dark', // Set the syntax highlighting theme
          },
        ],
      ],
    }),
  ],
});
