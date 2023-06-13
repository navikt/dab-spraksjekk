import * as path from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'library/index.ts'),
            name: 'Spraksjekk',
            fileName: (format) => `spraksjekk.${format}.js`,
        },
        rollupOptions: {
            external: ['react', '@navikt/ds-react'],
            output: {
                globals: {
                    react: 'React',
                    '@navikt/ds-react': 'ds-react',
                },
            },
        },
    },
    plugins: [react(), dts()],
});
