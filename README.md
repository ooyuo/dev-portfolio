# 개발자 포트폴리오

Next.js 15 기반의 개인 포트폴리오 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animation**: GSAP 3.13, Framer Motion 12
- **Smooth Scroll**: Lenis 1.3
- **UI Components**: Radix UI
- **Theme**: next-themes (다크/라이트 모드)
- **Icons**: Lucide React
- **Font**: Pretendard

## 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- **다크/라이트 테마**: 사용자 선호도 저장 및 깜빡임 없는 테마 전환
- **스무스 스크롤**: Lenis를 활용한 부드러운 스크롤 경험
- **GSAP 애니메이션**: ScrollTrigger 기반 인터랙티브 애니메이션
- **프로젝트 상세**: Dialog 기반 프로젝트 상세 정보 제공
- **이력서 다운로드**: PDF 이력서 다운로드 기능
- **접근성**: ARIA 속성 및 키보드 네비게이션 지원

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 프로젝트 구조

```
src/
├── app/
│   ├── _components/        # 공통 컴포넌트
│   │   ├── common/         # Dialog, ThemeToggle 등
│   │   ├── effects/        # 배경 효과
│   │   └── providers/      # Context Provider
│   ├── _features/          # 섹션별 기능
│   │   ├── about/          # 소개 섹션
│   │   ├── hero/           # 히어로 섹션
│   │   ├── projects/       # 프로젝트 섹션
│   │   └── developer-experience/  # DX 개선 사례
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 메인 페이지
├── components/ui/          # Radix UI 기반 컴포넌트
├── design-system/          # 디자인 시스템
├── lib/                    # 유틸리티 함수
└── public/
    ├── images/             # 이미지 파일
    ├── documents/          # 문서 파일
    └── fonts/              # 폰트 파일
```

## 라이선스

MIT
