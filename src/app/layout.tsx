import type { Metadata } from "next";
import "./globals.css";
import GradientBackground from "./_components/effects/GradientBackground";
import SmoothScrollProvider from "./_components/providers/SmoothScrollProvider";
import ThemeToggle from "./_components/common/ThemeToggle";

export const metadata: Metadata = {
  title: "정도윤 | Frontend Engineer",
  description: "확장 가능한 아키텍처와 재사용 컴포넌트 개발로 최적화된 앱 서비스를 구축하는 프론트엔드 엔지니어입니다.",
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="lenis lenis-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/woff2-subset/Pretendard-Bold.subset.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Pretendard';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/woff2-subset/Pretendard-Regular.subset.woff2') format('woff2');
              unicode-range: U+AC00-D7A3, U+1100-11FF, U+3130-318F, U+A960-A97F, U+D7B0-D7FF, U+0020-007E, U+3000-303F, U+FF00-FFEF;
            }
            @font-face {
              font-family: 'Pretendard';
              font-style: normal;
              font-weight: 600;
              font-display: swap;
              src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/woff2-subset/Pretendard-SemiBold.subset.woff2') format('woff2');
              unicode-range: U+AC00-D7A3, U+1100-11FF, U+3130-318F, U+A960-A97F, U+D7B0-D7FF, U+0020-007E, U+3000-303F, U+FF00-FFEF;
            }
            @font-face {
              font-family: 'Pretendard';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/woff2-subset/Pretendard-Bold.subset.woff2') format('woff2');
              unicode-range: U+AC00-D7A3, U+1100-11FF, U+3130-318F, U+A960-A97F, U+D7B0-D7FF, U+0020-007E, U+3000-303F, U+FF00-FFEF;
            }
          `
        }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const isDark = savedTheme !== 'light';
                if (isDark) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif' }}>
        <GradientBackground />
        <ThemeToggle />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
