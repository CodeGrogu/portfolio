import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Optimize package imports for icons and utility packages
    optimizePackageImports: ['lucide-react', 'clsx', 'tailwind-merge'],
  },
};

export default nextConfig;
