import * as path from 'path';
import dts from 'unplugin-dts/vite'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'library/index.ts'),
            name: 'Spraksjekk',
            fileName: (format) => `spraksjekk.${format}.js`,
        },
        rolldownOptions: {
            external: ['react', '@navikt/ds-react', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React',
                    '@navikt/ds-react': 'ds-react',
                    'react/jsx-runtime': 'ReactJsxRuntime',
                },
            },
        },
    },
    plugins: [react(), svgr(), dts()],
});
