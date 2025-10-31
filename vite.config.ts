import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {kitchen} from 'alias-kitchen';
import postcssPresetEnv from 'postcss-preset-env';
import {imagetools} from 'vite-imagetools';

const baseUrl = '/next-card/';
const title = 'Patrick Bateman';

// https://vitejs.dev/config/
export default defineConfig({
    base: baseUrl,
    resolve: {
        alias: kitchen({recipe: 'vite'}),
    },
    plugins: [
        react(),
        imagetools({
            defaultDirectives: id => {
                if (id.searchParams.has('cardImage')) {
                    return new URLSearchParams('w=266&h=266&format=webp');
                }
                return new URLSearchParams();
            },
        }),
        {
            name: 'Inject title',
            apply: () => true,
            transformIndexHtml(_) {
                return [
                    {
                        tag: 'title',
                        children: title,
                        injectTo: 'head',
                    },
                ];
            },
        },
    ],
    build: {
        sourcemap: true,
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
        postcss: {
            plugins: [postcssPresetEnv({stage: 1})],
        },
    },
});
