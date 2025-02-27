/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'default',
    deviceSizes: [640, 768, 1024, 1280, 1600],
    disableStaticImages: false
  },
  trailingSlash: true,
  // Clear cache on build
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}

module.exports = nextConfig
