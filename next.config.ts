import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/:path*', // 捕获所有 /api 开头的请求
        destination: `https://stg-boss-web.weex.tech/:path*`, // 转发到目标服务器，避免重复的 /api
      },
    ]
  }
};

export default nextConfig;
