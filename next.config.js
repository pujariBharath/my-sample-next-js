/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enforce strict mode for React
    images: {
      domains: [
        'img.freepik.com', // Add external image domains used in your project
        'cdn.prod.website-files.com',
        // Add any additional domains here
      ],
    },
  };
  
  module.exports = nextConfig;
  