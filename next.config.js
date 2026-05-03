/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cleveland',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/cleveland',
  },
}

module.exports = nextConfig
