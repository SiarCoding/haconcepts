/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  trailingSlash: false, // Better for static hosting
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'vrtyqm5fac0amn1s.public.blob.vercel-storage.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // NOTE: 301 redirects from old domain (nextmoveconsulting.de) must be configured 
  // at hosting provider/proxy level, not in Next.js for static exports
  webpack: (config) => {
    config.module.rules.push({
      test: /\.spline$/,
      type: 'asset/resource',
    });
    
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    
    return config;
  },
};

module.exports = nextConfig;
