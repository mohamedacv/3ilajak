import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "tighten-lively-mud.ngrok-free.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;