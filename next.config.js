/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    distDir: 'build',
    output: 'export',
    cleanDistDir: true,
    images: {
        loader: 'custom',
        loaderFile: './imageLoader.ts',
    },
    // Set to deploy at GitHub pages or other non-index page url
    basePath: '/next-card',
    // Required to compile vCard
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };
        return config;
    },
};
