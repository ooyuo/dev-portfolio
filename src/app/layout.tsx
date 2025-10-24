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
      <body className="font-sans antialiased">
        <GradientBackground />
        <ThemeToggle />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
