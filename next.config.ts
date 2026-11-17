import type { NextConfig } from "next"

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
      new URL('https://avatars.githubusercontent.com/**'),
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
}

export default nextConfig
