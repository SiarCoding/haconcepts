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
    
    // Wichtig: Externals für Spline konfigurieren
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    
    return config;
  },
};

module.exports = nextConfig;
