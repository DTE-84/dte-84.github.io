import type { NextConfig } from "next";

module.exports = {
  images: {
    qualities: [80],
  },
};
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
