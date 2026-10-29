import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "*.app.github.dev"],
      bodySizeLimit: "100mb",
    },
  },

  images: {
    localPatterns: [
      {
        pathname: "/assets/media/**",
      },
      {
        pathname: "/assets/icons/**",
      },
    ],
  },
};

export default nextConfig;
