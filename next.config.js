// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com', 'linkedin.com', 'instagram.com', 'google.com', 'twitter.com'],
  },
};

module.exports = nextConfig;
