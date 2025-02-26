/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.spline$/,
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = nextConfig;
