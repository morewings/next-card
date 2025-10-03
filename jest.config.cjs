const nextJest = require('next/jest');
const {kitchen} = require('alias-kitchen');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = createJestConfig({
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    modulePathIgnorePatterns: ['<rootDir>/templates/'],
    moduleNameMapper: {
        ...kitchen({recipe: 'jest'}),
    }
});
