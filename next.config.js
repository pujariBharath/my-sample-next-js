module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // Include all app files
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  
module.exports = {
    images: {
      domains: ["example.com"], // Replace with your image domains
    },
  };
  
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
  