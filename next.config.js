/* Enable bundle analysis. Run `yarn analyze:build` to get report */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    distDir: 'build',
    output: process.env.PAGES_BUILD === 'true' ? 'export' : undefined,
    cleanDistDir: true,
    basePath: process.env.PAGES_BUILD === 'true' ? '/ts-global-state-next' : undefined,
});
