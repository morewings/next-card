// @ts-check

import {dirname} from 'path';
import {fileURLToPath} from 'url';

import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    ...compat.config({
        plugins: ['prettier', '@typescript-eslint'],
        extends: [
            'next/core-web-vitals',
            'next/typescript',
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/stylistic',
            'prettier',
        ],
        rules: {
            'prettier/prettier': [
                'error',
                {
                    semi: true,
                    singleQuote: true,
                    jsxSingleQuote: false,
                    trailingComma: 'es5',
                    bracketSpacing: false,
                    jsxBracketSameLine: true,
                    arrowParens: 'avoid',
                },
            ],
            '@typescript-eslint/no-empty-function': [
                'error',
                {allow: ['arrowFunctions']},
            ],
            '@typescript-eslint/ban-ts-comment': 1,
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            'no-const-assign': 'error',
            /** Restrict imports from devDependencies since they are not included in library build. peerDependencies are ok */
            'import/no-extraneous-dependencies': [
                'error',
                {
                    devDependencies: false,
                    peerDependencies: true,
                },
            ],
            /**
             * Enforce import order with empty lines between import group
             * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
             */
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        ['parent', 'sibling', 'index'],
                    ],
                    pathGroups: [
                        {
                            pattern: '@/**',
                            group: 'internal',
                        },
                    ],
                    'newlines-between': 'always',
                },
            ],
            /**
             * Disallow combined module and type imports like this `import React, {FC} from 'react'`.
             * Eslint will try to split into type and module imports instead
             * @see https://typescript-eslint.io/rules/consistent-type-imports/
             */
            '@typescript-eslint/consistent-type-imports': 'error',
            'import/no-cycle': 'error',
            /**
             * Allow unused variables with names stating with '_'
             * @see https://eslint.org/docs/latest/rules/no-unused-vars
             * @see https://typescript-eslint.io/rules/no-unused-vars/
             */
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                    args: 'after-used',
                },
            ],
        },
    }),
    /* Allow devDependencies imports for tests and config files */
    {
        files: [
            '**/*.spec.*',
            '**/testUtils/*.{js,jsx,ts,tsx}',
            '*/*.{js,jsx,ts,tsx}',
            '**/setupTests.ts',
            '*.config.{js,ts,mjs}',
            '**/env/**/*.*',
        ],
        rules: {
            'import/no-extraneous-dependencies': [
                'error',
                {
                    devDependencies: true,
                    peerDependencies: true,
                },
            ],
        },
    },
    /* Disable `environment` directory imports for library files */
    {
        files: ['src/lib/**/*.{js,jsx,ts,tsx}'],
        rules: {
            'no-restricted-imports': [
                'error',
                {
                    patterns: [
                        {
                            group: ['**/environment/**'],
                            message:
                                'Imports from environment directory are forbidden in the library files.',
                        },
                    ],
                },
            ],
        },
    },
    /* Disable `template` directory imports for all files */
    {
        files: ['src/**/*.{js,jsx,ts,tsx}'],
        rules: {
            'no-restricted-imports': [
                'error',
                {
                    patterns: [
                        {
                            group: ['**/templates/**'],
                            message: 'Imports from templates directory are forbidden.',
                        },
                    ],
                },
            ],
        },
    },
    {
        ignores: ['**/*.{snap,css,jpg}'],
    },
];
