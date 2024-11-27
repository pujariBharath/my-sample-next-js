/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        'img.freepik.com', // For freepik images
        'cdn.prod.website-files.com', // For CDN images
      ],
    },
  };
  
  module.exports = nextConfig;
  