/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
    ACCESS_TOKEN:
      "EAALZBwisa01IBOZBo5HqGDVIm35QBQXMK8NjMT76uZAeaVZCemck2oFlWYXFK0o3HAE3kBuZCmnJdr9v7wHgtaiMH3B7KLmQcWoKuIUMxDSmsYtgHYAeZCrIz4blG8AZADL8Lf6LdySWMT72VEaKHNsWJNQRBoZCZArLQZCmaBva2vu9V24hOJLgzo4RpeUOhXqSi3klGDE9sE46hCR90ZD",
    fields:
      "id,message,permalink_url,reactions.summary(true),full_picture,created_time",
  },
};

module.exports = nextConfig;
