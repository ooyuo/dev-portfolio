/**
 * MobileCon 디자인 시스템 테마
 * 색상과 타이포그래피를 통합한 디자인 시스템
 */

import { colors, semanticColors } from './colors';
import { typography, fontFamily, fontWeight, fontSize, lineHeight, letterSpacing } from './typography';

export const theme = {
  colors,
  semanticColors,
  typography,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
} as const;

// 자주 사용되는 조합들
export const designTokens = {
  // 색상 토큰
  color: {
    primary: semanticColors.primary.normal,
    primarySoft: semanticColors.primary.soft,
    primaryDark: semanticColors.primary.dark,
    secondary: semanticColors.secondary.normal,
    text: semanticColors.text.normal,
    textSecondary: semanticColors.text.secondary,
    textTertiary: semanticColors.text.tertiary,
    background: semanticColors.background.normal,
    backgroundLight: semanticColors.background.light,
    backgroundDark: semanticColors.background.dark,
    border: semanticColors.border.normal.normal,
    success: semanticColors.status.success,
    warning: semanticColors.status.warning,
    error: semanticColors.status.destructive,
  },

  // 타이포그래피 토큰
  text: {
    displayLarge: typography.display.large,
    displayMedium: typography.display.medium,
    displaySmall: typography.display.small,
    headlineLarge: typography.headline.large,
    headlineMedium: typography.headline.medium,
    headlineSmall: typography.headline.small,
    titleLarge: typography.title.large,
    titleMedium: typography.title.medium,
    titleSmall: typography.title.small,
    bodyLarge: typography.body.large,
    bodyMedium: typography.body.medium,
    bodySmall: typography.body.small,
    labelLarge: typography.label.large,
    labelMedium: typography.label.medium,
    labelSmall: typography.label.small,
  },

  // 스페이싱 (8px 기준)
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    '3xl': '3rem',    // 48px
    '4xl': '4rem',    // 64px
    '5xl': '6rem',    // 96px
    '6xl': '8rem',    // 128px
  },

  // 그림자
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  },

  // 보더 반지름
  borderRadius: {
    none: '0',
    xs: '0.125rem',   // 2px
    sm: '0.25rem',    // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',
  },

  // 애니메이션 지속시간
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },

  // 이징
  easing: {
    default: 'ease',
    in: 'ease-in',
    out: 'ease-out',
    inOut: 'ease-in-out',
  },
} as const;

// 자주 사용되는 컴포넌트 스타일 프리셋
export const componentPresets = {
  button: {
    primary: {
      backgroundColor: designTokens.color.primary,
      color: semanticColors.text.reverse,
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.sm,
      padding: `${designTokens.spacing.md} ${designTokens.spacing.xl}`,
      borderRadius: designTokens.borderRadius.lg,
      border: 'none',
      transition: `all ${designTokens.duration.normal} ${designTokens.easing.inOut}`,
    },
    secondary: {
      backgroundColor: 'transparent',
      color: designTokens.color.text,
      fontFamily: fontFamily.pretendard,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.sm,
      padding: `${designTokens.spacing.md} ${designTokens.spacing.xl}`,
      borderRadius: designTokens.borderRadius.lg,
      border: `1px solid ${designTokens.color.border}`,
      transition: `all ${designTokens.duration.normal} ${designTokens.easing.inOut}`,
    },
  },
  card: {
    default: {
      backgroundColor: designTokens.color.background,
      borderRadius: designTokens.borderRadius.xl,
      boxShadow: designTokens.shadow.md,
      border: `1px solid ${designTokens.color.border}`,
      padding: designTokens.spacing['2xl'],
      transition: `all ${designTokens.duration.normal} ${designTokens.easing.inOut}`,
    },
  },
} as const;

export type Theme = typeof theme;
export type DesignTokens = typeof designTokens;
export type ComponentPresets = typeof componentPresets;

export default theme;