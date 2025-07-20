import type { NextConfig } from "next";

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