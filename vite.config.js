import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Serve from the repo subpath on GitHub Pages, but keep local dev at /.
export default defineConfig(({ command }) => ({
    base: command === 'build' ? '/SoftSkills/' : '/',
    plugins: [react()],
}));
