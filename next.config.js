/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn5.vectorstock.com",
        port: "",
        pathname: "/i/*",
      },
    ],
  },
};

module.exports = nextConfig;
