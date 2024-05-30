/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://venturi.gitwork.tech"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "venturi.gitwork.tech",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

export default nextConfig;
