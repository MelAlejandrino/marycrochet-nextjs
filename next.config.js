/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-*.xx.fbcdn.net", // * wildcard on dynamic part of domain url
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: [
      "scontent.fcgm1-1.fna.fbcdn.net",
      "external.fcgm1-1.fna.fbcdn.net",
    ],
  },
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "scontent-*.xx.fbcdn.net", // * wildcard on dynamic part of domain url
        },
      ],
    },
  },
  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  }
};

module.exports = nextConfig;
