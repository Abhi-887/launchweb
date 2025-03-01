/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    // For static exports, images must be unoptimized
    unoptimized: true
    // Note: with unoptimized: true, other image optimization settings won't apply
    // but we keep them commented for reference if you switch to a server deployment
    /*
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    */
  },
  trailingSlash: true,
  // For static exports, experimental features like optimizeCss and scrollRestoration won't work
  // But we keep them commented for reference
  /*
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  */
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  }
};

module.exports = nextConfig;
