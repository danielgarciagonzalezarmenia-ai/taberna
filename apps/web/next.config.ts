import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/taberna",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;