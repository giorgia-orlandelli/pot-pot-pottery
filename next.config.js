/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.sanity.io'],
  },
  experimental: {
    scrollRestoration: true
  }
}

module.exports = nextConfig