/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portofolio',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/portofolio',
  },
}

module.exports = nextConfig
