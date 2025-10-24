import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CSS 최적화
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // 번들 최적화
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 성능 최적화
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  // 모던 브라우저만 타겟팅
  transpilePackages: [],

  // 이미지 최적화
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Code splitting 최적화
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // 공통 라이브러리 분리
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
              priority: 20,
            },
            // React 관련 라이브러리 분리
            react: {
              name: 'react',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 30,
            },
            // GSAP 별도 분리
            gsap: {
              name: 'gsap',
              test: /[\\/]node_modules[\\/]gsap[\\/]/,
              priority: 25,
            },
            // UI 라이브러리 분리
            ui: {
              name: 'ui',
              test: /[\\/]node_modules[\\/](@radix-ui|lucide-react)[\\/]/,
              priority: 25,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
