/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.BASE_PATH || '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
