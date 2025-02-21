import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Export static HTML
  images: { unoptimized: true }, // Disable image optimization for static export
  basePath: "/Sy-Net/out", // Change this to match your repo name
  assetPrefix: "/Sy-Net",
  // remove these when deploying on github
};

export default nextConfig;
