/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true, 
  images: {
    domains: ["www.tripadvisor.ru"],
  },
};

module.exports = nextConfig;
