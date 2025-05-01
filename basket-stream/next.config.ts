import { NextConfig } from "next";

const API_URL = `${process.env.NEXT_PUBLIC_BASKET_STREAM_API}`;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_BASKET_STREAM_API is not defined in .env.local file");
}

const url = new URL(API_URL);

// Validate protocol
if (url.protocol !== "http:" && url.protocol !== "https:") {
  throw new Error(`Unsupported protocol: ${url.protocol}`);
}

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: url.protocol.slice(0, -1) as "http" | "https",
        hostname: url.hostname,
        port: url.port,
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
