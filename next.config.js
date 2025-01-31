/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    distDir: 'build',
    output: 'export',
    cleanDistDir: true,
    images: {unoptimized: true},
    // Set to deploy at GitHub pages or other non-index page url
    basePath: '/next-card',
};
