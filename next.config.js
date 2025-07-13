/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: ["www.tripadvisor.ru"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
