// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['drive.google.com', 'linkedin.com', 'instagram.com', 'google.com', 'twitter.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
