import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {kitchen} from 'alias-kitchen';
import postcssPresetEnv from 'postcss-preset-env';
import {imagetools} from 'vite-imagetools';

const baseUrl = '/next-card/';
// const title = 'Patrick Bateman';

// @ts-expect-error no type
import {config} from './src/config';

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
            name: 'Inject meta tags',
            apply: () => true,
            transformIndexHtml(_) {
                return [
                    {
                        tag: 'title',
                        children: `${config.title}: ${config.bio}`,
                        injectTo: 'head',
                    },
                    {
                        tag: 'meta',
                        attrs: {
                            name: 'title',
                            content: config.title,
                        },
                        injectTo: 'head',
                    },
                    {
                        tag: 'meta',
                        attrs: {
                            name: 'og:title',
                            content: config.title,
                        },
                        injectTo: 'head',
                    },
                    {
                        tag: 'meta',
                        attrs: {
                            name: 'description',
                            content: config.bio,
                        },
                        injectTo: 'head',
                    },
                    {
                        tag: 'meta',
                        attrs: {
                            name: 'og:description',
                            content: config.bio,
                        },
                        injectTo: 'head',
                    },
                    {
                        tag: 'meta',
                        attrs: {
                            name: 'og:type',
                            content: 'profile',
                        },
                        injectTo: 'head',
                    },
                    {
                        tag: 'meta',
                        attrs: {
                            name: 'og:image',
                            content: 'web-app-manifest-512x512.png',
                        },
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
