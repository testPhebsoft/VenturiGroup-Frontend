/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
