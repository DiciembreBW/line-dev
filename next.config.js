/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleapis.com",
      }
    ]
  }
}

module.exports = nextConfig
