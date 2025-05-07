/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  // Optimize for Vercel deployment
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  }
}

module.exports = nextConfig 