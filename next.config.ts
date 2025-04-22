import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        localPatterns: [
            {
                pathname: '/public/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
