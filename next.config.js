/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: ["www.tripadvisor.ru"],
    unoptimized: true,
  },
  rewrites: async () => [
    {
      source: "/(.*)",
      destination: "/index.html",
    },
  ],
};

module.exports = nextConfig;
