/**
 * MobileCon 디자인 시스템 타이포그래피
 * Pretendard 폰트 기반 타이포그래피 시스템
 */

export const fontFamily = {
  pretendard: 'var(--font-pretendard)',
  system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
} as const;

export const fontWeight = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
} as const;

export const fontSize = {
  xs: '0.75rem',     // 12px
  sm: '0.875rem',    // 14px
  base: '1rem',      // 16px
  lg: '1.125rem',    // 18px
  xl: '1.25rem',     // 20px
  '2xl': '1.5rem',   // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem',     // 48px
  '6xl': '3.75rem',  // 60px
  '7xl': '4.5rem',   // 72px
  '8xl': '6rem',     // 96px
  '9xl': '8rem',     // 128px
} as const;

export const lineHeight = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const;

export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// 타이포그래피 프리셋
export const typography = {
  // Display 텍스트 (대제목)
  display: {
    large: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.bold,
      fontSize: fontSize['6xl'],
      lineHeight: lineHeight.tight,
      letterSpacing: letterSpacing.tight,
    },
    medium: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.bold,
      fontSize: fontSize['5xl'],
      lineHeight: lineHeight.tight,
      letterSpacing: letterSpacing.tight,
    },
    small: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.semiBold,
      fontSize: fontSize['4xl'],
      lineHeight: lineHeight.snug,
      letterSpacing: letterSpacing.normal,
    },
  },

  // Headline 텍스트 (제목)
  headline: {
    large: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.semiBold,
      fontSize: fontSize['3xl'],
      lineHeight: lineHeight.snug,
      letterSpacing: letterSpacing.normal,
    },
    medium: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.semiBold,
      fontSize: fontSize['2xl'],
      lineHeight: lineHeight.normal,
      letterSpacing: letterSpacing.normal,
    },
    small: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.xl,
      lineHeight: lineHeight.normal,
      letterSpacing: letterSpacing.normal,
    },
  },

  // Title 텍스트 (부제목)
  title: {
    large: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.lg,
      lineHeight: lineHeight.normal,
      letterSpacing: letterSpacing.normal,
    },
    medium: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.base,
      lineHeight: lineHeight.normal,
      letterSpacing: letterSpacing.normal,
    },
    small: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.normal,
      letterSpacing: letterSpacing.normal,
    },
  },

  // Body 텍스트 (본문)
  body: {
    large: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.regular,
      fontSize: fontSize.base,
      lineHeight: lineHeight.relaxed,
      letterSpacing: letterSpacing.normal,
    },
    medium: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.regular,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.normal,
      letterSpacing: letterSpacing.normal,
    },
    small: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.regular,
      fontSize: fontSize.xs,
      lineHeight: lineHeight.normal,
      letterSpacing: letterSpacing.normal,
    },
  },

  // Label 텍스트 (라벨)
  label: {
    large: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.normal,
      letterSpacing: letterSpacing.normal,
    },
    medium: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.xs,
      lineHeight: lineHeight.normal,
      letterSpacing: letterSpacing.normal,
    },
    small: {
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.xs,
      lineHeight: lineHeight.tight,
      letterSpacing: letterSpacing.wide,
    },
  },
} as const;

// 타입 정의
export type FontFamily = keyof typeof fontFamily;
export type FontWeight = keyof typeof fontWeight;
export type FontSize = keyof typeof fontSize;
export type LineHeight = keyof typeof lineHeight;
export type LetterSpacing = keyof typeof letterSpacing;
export type TypographyPreset = keyof typeof typography;
export type TypographySize = 'large' | 'medium' | 'small';

// CSS 스타일 헬퍼 함수
export const getTypographyStyle = (preset: TypographyPreset, size: TypographySize) => {
  return typography[preset][size];
};

export default typography;