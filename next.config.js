/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.MODE_ENV === "production";
const nextConfig = {
  basePath: isProd ? "/nextjs-blog-deployment" : "",
  output: "export",
  images: { unoptimized: true },

  distDir: "dist",
};

module.exports = nextConfig;
