/**
 * @format
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
  },
  env: {
    STATIC_FORMS_ACCESS_KEY: process.env.STATIC_FORMS_ACCESS_KEY,
  },
};

module.exports = nextConfig;
