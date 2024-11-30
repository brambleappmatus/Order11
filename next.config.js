/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.co'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
};

module.exports = nextConfig;