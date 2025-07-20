import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/VishalHall.github.io',
    assetPrefix: '/VishalHall.github.io/',
  })
}

module.exports = nextConfig