/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.spline$/,
      type: 'asset/resource',
    });
    
    // Wichtig: Externals für Spline konfigurieren
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    
    return config;
  },
};

module.exports = nextConfig;
