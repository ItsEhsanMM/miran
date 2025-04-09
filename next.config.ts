import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: "standalone",
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "storage.c2.liara.space",
         },
      ],
   },
};

export default nextConfig;
