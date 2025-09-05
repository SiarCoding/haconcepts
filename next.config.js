/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // Add for faster boot on Scalingo
  reactStrictMode: false,
  trailingSlash: false,
  images: {
    // Re-enabled optimization for server deployment
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
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // NOTE: 301 redirects from old domain (nextmoveconsulting.de) must be configured 
  // at hosting provider/proxy level, not in Next.js for static exports
  webpack: (config) => {
    
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    
    return config;
  },
};

module.exports = nextConfig;
