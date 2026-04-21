import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite'; // Importación para v4
import path from 'path';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()], // Tailwind 4 vive aquí ahora
    resolve: {
        alias: {
            '@': path.resolve('./src'),
        }
    },
  },
});
