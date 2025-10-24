'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { CustomDialogHeader, CustomDialogTitle } from '../../../_components/common/CustomDialog'
import {
  Code2,
  Zap,
  Users,
  Calendar,
  Target,
  Layers,
  GitBranch,
  Package,
  AlertCircle,
  Rocket,
  Database,
  Gauge,
  FileText,
  X,
  Check,
  ShoppingCart,
  Image as ImageIcon,
  Shield,
  Filter,
  Keyboard,
  Eye,
  Boxes,
  Network,
  ListChecks,
  Maximize2
} from 'lucide-react'

export default function GifticonProjectDetail() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const slides = [
    { id: 'overview', title: '프로젝트 개요', icon: Layers },
    { id: 'challenge', title: '기술적 과제', icon: AlertCircle },
    { id: 'architecture', title: '솔루션 아키텍처', icon: GitBranch },
    { id: 'implementation', title: '구현 상세', icon: Code2 }
  ]

  return (
    <>
      {/* DialogTitle for accessibility */}
      <CustomDialogHeader className="px-4 pt-4 pb-0 flex-shrink-0">
        <CustomDialogTitle className="text-lg font-bold flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          기프티콘 관리 시스템
        </CustomDialogTitle>
      </CustomDialogHeader>

      {/* 네비게이션 탭 */}
      <div className="px-4 pt-2 pb-0 flex-shrink-0">
        <div className="flex gap-1 overflow-x-auto pb-2">
          {slides.map((slide, index) => (
            <Button
              key={slide.id}
              variant={activeSlide === index ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveSlide(index)}
              className={`flex items-center gap-1 whitespace-nowrap text-xs py-1 px-2 ${
                activeSlide === index ? 'bg-teal-500 dark:bg-teal-500 text-gray-900 dark:text-gray-900 border-teal-500 hover:bg-teal-600 dark:hover:bg-teal-600' : 'hover:bg-accent'
              }`}
            >
              <slide.icon className="w-3 h-3" />
              {slide.title}
            </Button>
          ))}
        </div>
      </div>

      {/* 슬라이드 컨텐츠 - 스크롤 가능 영역 */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="pt-2">
          {activeSlide === 0 && <ProjectOverview />}
          {activeSlide === 1 && <TechnicalChallenge />}
          {activeSlide === 2 && <SolutionArchitecture />}
          {activeSlide === 3 && <ImplementationDetails onImageClick={setSelectedImage} />}
        </div>
      </div>

      {/* 이미지 모달 */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)} modal>
        <DialogContent
          className="p-2 z-[9999] border-0"
          style={{ maxWidth: '95vw', width: '95vw', maxHeight: '95vh', height: 'auto' }}
        >
          <DialogHeader className="pb-2">
            <DialogTitle className="text-sm">{selectedImage?.alt}</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={selectedImage?.src}
              alt={selectedImage?.alt}
              className="w-full h-auto object-contain rounded-lg"
              style={{ maxHeight: '90vh' }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

function ProjectOverview() {
  return (
    <div className="space-y-2">
      {/* 프로젝트 헤더 - 검정 배경 히어로 */}
      <div className="bg-card text-card-foreground p-4 rounded-lg">
        <div className="mb-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 font-bold bg-teal-400/10 px-3 py-1 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 font-bold"></span>
            모듈형 관리자 SPA
          </div>
        </div>

        <h2 className="mb-3 text-xl font-bold">
          대량 상품과 주문을 처리하는 기프티콘 관리 시스템
        </h2>

        <p className="mb-4 text-base text-foreground leading-relaxed">
          스마트스토어와 연동하여 대량 상품, 주문, 권한을 관리하는 관리자 웹 애플리케이션
        </p>

        {/* 통계 카드들 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 rounded-lg border bg-card">
            <Calendar className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">프로젝트 기간</div>
            <div className="text-sm font-bold text-foreground">9개월</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <Users className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">역할</div>
            <div className="text-sm font-bold text-foreground">Frontend Engineer</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <Users className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">팀 구성</div>
            <div className="text-sm font-bold text-foreground">3명</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <Code2 className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">기여도</div>
            <div className="text-sm font-bold text-foreground">Frontend 100%</div>
          </div>
        </div>
      </div>

      {/* 프로젝트 배경 및 목표 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card className="gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-4 h-4 text-teal-500" />
              프로젝트 배경
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            {[
              "스마트스토어와 사내 플랫폼을 양방향으로 연동해야 함",
              "수백 건의 전시상품을 등록하고 수정하는 작업이 잦음",
              "운영자의 실수를 줄일 수 있는 안전장치가 필요함",
              "대량 이미지를 업로드하고 템플릿을 재사용할 수 있어야 함"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="gap-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Rocket className="w-4 h-4 text-teal-500" />
              핵심 개선 성과
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
              <div className="text-sm font-semibold mb-1">SKU 대량 등록 시간 단축</div>
              <div className="text-xl font-bold text-teal-500 mb-1">1시간 → 18분</div>
              <div className="text-xs text-muted-foreground">200건 이상 전시상품 등록 작업, 드래그앤드롭 + 이미지 OCR 자동 기입</div>
            </div>

            <div className="p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
              <div className="text-sm font-semibold mb-1">이미지 업로드 안정성</div>
              <div className="text-xl font-bold text-teal-500 mb-1">실패율 4.1% → 0.6%</div>
              <div className="text-xs text-muted-foreground">Web Worker 리사이즈 타이밍 문제 해결, canvas 압축 적용</div>
            </div>

            <div className="p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
              <div className="text-sm font-semibold mb-1">주문 목록 반응성</div>
              <div className="text-xl font-bold text-teal-500 mb-1">INP 280ms → 95ms</div>
              <div className="text-xs text-muted-foreground">가상 스크롤 + React.memo 행 메모화</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 핵심 기술적 도전 */}
      <Card className="!gap-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Zap className="w-4 h-4 text-teal-500" />
            주요 기능
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <ImageIcon className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">대량 이미지 처리</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• 브라우저에서 직접 이미지 리사이즈와 압축을 수행</div>
                <div className="text-xs text-muted-foreground">• Web Worker를 사용해 메인 스레드 블로킹 방지</div>
              </div>
            </div>

            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <Filter className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">실시간 검색과 일괄 작업</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• 가상 스크롤로 수천 건 리스트도 부드럽게 렌더링</div>
                <div className="text-xs text-muted-foreground">• 검색과 필터링 중에도 반응성 유지</div>
              </div>
            </div>

            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <Shield className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">역할 기반 권한 관리</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• RBAC 기반으로 메뉴와 버튼 단위로 권한을 제어</div>
                <div className="text-xs text-muted-foreground">• 조회, 생성, 수정, 삭제 권한을 세분화</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 사용 기술스택 */}
      <Card className="gap-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Package className="w-4 h-4 text-teal-500" />
            사용 기술 스택
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-1">
            {['React', 'TypeScript', 'React Router', 'Zustand', 'React Hook Form', 'TanStack Query', 'TailwindCSS', 'Vite', 'Jest'].map(tech => (
              <Badge key={tech} className="bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/30 text-xs py-0.5 px-2">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function TechnicalChallenge() {
  return (
    <div className="space-y-2">
      {/* 기술적 과제 헤더 - 검정 배경 히어로 */}
      <div className="bg-card text-card-foreground p-4 rounded-lg">
        <div className="mb-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/50 bg-purple-500/20 px-3 py-1 text-xs font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
            프로젝트 요구사항
          </div>
        </div>

        <h2 className="mb-3 text-xl font-bold">
          대량 데이터를 빠르게 처리하면서 안정성도 확보하기
        </h2>

        <p className="mb-4 text-base text-foreground leading-relaxed">
          수백 건의 상품과 수십만 건의 주문을<br />
          빠르고 안전하게 처리할 수 있어야 했음
        </p>

        {/* 과제 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="p-3 rounded-lg border border-purple-500/30">
            <Gauge className="h-4 w-4 text-purple-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">UI 반응성</div>
            <div className="text-sm font-bold text-foreground">대량 데이터</div>
          </div>

          <div className="p-3 rounded-lg border border-purple-500/30">
            <ImageIcon className="h-4 w-4 text-purple-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">이미지</div>
            <div className="text-sm font-bold text-foreground">대량 업로드</div>
          </div>

          <div className="p-3 rounded-lg border border-purple-500/30">
            <Shield className="h-4 w-4 text-purple-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">운영 안전</div>
            <div className="text-sm font-bold text-foreground">사고 방지</div>
          </div>

          <div className="p-3 rounded-lg border border-purple-500/30">
            <Network className="h-4 w-4 text-purple-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">권한 관리</div>
          </div>
        </div>
      </div>

      {/* 핵심 난제 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <Card className="gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <Gauge className="w-4 h-4 text-purple-500" />
              대량 데이터 렌더링 성능
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            {[
              "전시상품 수백 건을 테이블로 표시",
              "주문 수십만 건도 빠르게 조회",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-purple-500" />
              이미지 대량 업로드 처리
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            {[
              "브라우저에서 이미지를 압축하고 리사이즈",
              "OCR로 이미지를 분석해 폼에 자동으로 값 채움",
              "수백 장 이미지를 동시에 업로드해도 안정적으로 동작"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-500" />
              운영 실수를 막는 UX
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            {[
              "일괄 변경 전에 미리보기로 확인 가능",
              "플랫폼별로 다른 가격과 상세 정보 입력 분기",
              "유효기간 설정 시 잘못된 입력 차단",
              "중요한 작업은 2단계 확인 모달로 실수 방지"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <Network className="w-4 h-4 text-purple-500" />
              역할별 권한 세분화
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            {[
              "메뉴 단위로 접근 권한 제어",
              "조회, 생성, 수정, 삭제 각각 권한 설정",
              "권한 매트릭스로 한눈에 확인 가능",
              "RBAC 기반으로 역할에 따라 기능 노출"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 솔루션 선택 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <Card className="gap-1 border-gray-500/30">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg text-muted-foreground flex items-center gap-2">
              <X className="w-5 h-5" /> 기존 방식
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="space-y-1">
              {["상품마다 폼을 일일이 입력", "이미지를 미리 편집해서 업로드", "데이터가 많으면 테이블이 느려짐", "권한 관리 기능이 없음"].map((item, index) => (
                <div key={index} className="flex items-start gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>작업 효율성</span>
                <span className="text-muted-foreground">40%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="h-2 rounded-full bg-gray-500" style={{ width: '40%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gap-1 border-teal-500/30">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg text-teal-400 flex items-center gap-2">
              <Check className="w-5 h-5" /> 개선 방식
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="space-y-1">
              {["드래그앤드롭으로 대량 등록", "이미지 OCR로 자동 입력", "가상 스크롤로 끊김 없이 표시", "RBAC 기반 권한 관리"].map((item, index) => (
                <div key={index} className="flex items-start gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>작업 효율성</span>
                <span className="text-muted-foreground">90%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="h-2 rounded-full bg-teal-500" style={{ width: '90%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function SolutionArchitecture() {
  return (
    <div className="space-y-3">
      {/* Hero Section */}
      <div className="bg-card text-card-foreground p-4 rounded-lg">
        <div className="mb-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 font-bold bg-teal-400/10 px-3 py-1 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span>
            아키텍처 구조
          </div>
        </div>

        <h2 className="mb-3 text-xl font-bold">
          React 기반 싱글 페이지 애플리케이션
        </h2>

        <p className="mb-4 text-base text-foreground leading-relaxed">
          대량 데이터를 빠르게 렌더링하고 사용자 경험을 부드럽게 유지하는 구조
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 rounded-lg border bg-card">
            <Zap className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">코드 스플리팅</div>
            <div className="text-sm font-bold text-foreground">라우트 단위</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <Boxes className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">가상 스크롤</div>
            <div className="text-sm font-bold text-foreground">대량 리스트</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <ImageIcon className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">이미지 최적화</div>
            <div className="text-sm font-bold text-foreground">Web Worker</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <Database className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">캐싱</div>
            <div className="text-sm font-bold text-foreground">TanStack Query</div>
          </div>
        </div>
      </div>

      {/* 성능 전략 */}
      <Card className="!gap-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Gauge className="w-4 h-4 text-teal-500" />
            성능을 개선하기 위한 방법
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { icon: Zap, title: '코드 스플리팅과 지연 로딩', desc: '라우트, 모달, 테이블을 도메인 단위로 분할해 초기 로딩 속도 개선' },
              { icon: Boxes, title: '가상 스크롤', desc: '수백~수천 건 리스트를 끊김 없이 렌더링' },
              { icon: ImageIcon, title: 'Web Worker + canvas', desc: '이미지 리사이즈와 압축을 브라우저에서 처리해 서버 부담 감소' },
              { icon: Database, title: '데이터 캐싱', desc: '페이지를 다시 열어도 불필요한 서버 호출 방지' },
              { icon: Keyboard, title: 'Debounce/Throttle', desc: '검색, 입력, 드래그 이벤트 빈도를 제어해 성능 향상' },
              { icon: Rocket, title: 'Preload/Prefetch', desc: '사용자가 열 가능성 높은 데이터를 미리 로드해 체감 속도 개선' }
            ].map((item, index) => (
              <div key={index} className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
                <item.icon className="w-4 h-4 text-teal-500 mb-2" />
                <div className="text-sm font-semibold mb-1">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 보안/권한 */}
      <Card className="!gap-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="w-4 h-4 text-teal-500" />
            보안과 권한 관리
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <Network className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">RBAC</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• 메뉴, 리소스, 액션별로 권한 설정</div>
                <div className="text-xs text-muted-foreground">• 역할에 따라 접근 가능한 기능 제어</div>
              </div>
            </div>

            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <Shield className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">Route Guard</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• API 인터셉터로 인증 상태 체크</div>
                <div className="text-xs text-muted-foreground">• 토큰 만료 시 자동 재발급</div>
              </div>
            </div>

            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <FileText className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">감사 로그</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• 작업 이력을 자동으로 기록</div>
                <div className="text-xs text-muted-foreground">• 예외 처리를 일관되게 표준화</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ImplementationDetails({ onImageClick }: { onImageClick: (image: { src: string; alt: string }) => void }) {
  return (
    <div className="space-y-3">
      {/* Hero Section */}
      <div className="bg-card text-card-foreground p-4 rounded-lg">
        <div className="mb-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 font-bold bg-teal-400/10 px-3 py-1 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span>
            구현 상세
          </div>
        </div>

        <h2 className="mb-3 text-xl font-bold">
          운영자의 실수를 줄이는 UX 설계
        </h2>

        <p className="mb-4 text-base text-foreground leading-relaxed">
          실수를 사전에 방지하고 업무 효율을 높이기 위해 설계한 사용자 경험
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
          <div className="p-3 rounded-lg border bg-card">
            <Shield className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">실수 방지</div>
            <div className="text-sm font-bold text-foreground">2단계 확인</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <Eye className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">상태 표현</div>
            <div className="text-sm font-bold text-foreground">통일된 피드백</div>
          </div>
        </div>
      </div>

      {/* 스마트스토어 상품 등록 플로우 */}
      <Card className="!gap-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-teal-500" />
            상품 등록 플로우 (스마트스토어 연동)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground mb-3">
              전시상품 등록부터 플랫폼별 정보 입력까지 단계별로 진행
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="border rounded-lg p-2 bg-card">
                <div
                  className="relative group cursor-pointer mb-2"
                  onClick={() => onImageClick({ src: '/images/product_1.png', alt: '1단계: 브랜드·카테고리 선택' })}
                >
                  <Image
                    src="/images/product_1.png"
                    alt="1단계: 브랜드·카테고리 선택"
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full rounded transition-all group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/60 rounded-full p-3">
                      <Maximize2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center font-semibold text-foreground">
                  1단계: 브랜드·카테고리 선택
                </p>
                <p className="text-xs text-center text-muted-foreground mt-1">
                  재품권 선택 후 재품 정보 자동 로드
                </p>
              </div>
              <div className="border rounded-lg p-2 bg-card">
                <div
                  className="relative group cursor-pointer mb-2"
                  onClick={() => onImageClick({ src: '/images/product_2.png', alt: '2단계: 상품 정보 입력' })}
                >
                  <Image
                    src="/images/product_2.png"
                    alt="2단계: 상품 정보 입력"
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full rounded transition-all group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/60 rounded-full p-3">
                      <Maximize2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center font-semibold text-foreground">
                  2단계: 상품 정보 입력
                </p>
                <p className="text-xs text-center text-muted-foreground mt-1">
                  상품명, 가격, 썸네일, 유효기간 설정
                </p>
              </div>
              <div className="border rounded-lg p-2 bg-card">
                <div
                  className="relative group cursor-pointer mb-2"
                  onClick={() => onImageClick({ src: '/images/product_3.png', alt: '3단계: 플랫폼별 설정' })}
                >
                  <Image
                    src="/images/product_3.png"
                    alt="3단계: 플랫폼별 설정"
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full rounded transition-all group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/60 rounded-full p-3">
                      <Maximize2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center font-semibold text-foreground">
                  3단계: 플랫폼별 설정
                </p>
                <p className="text-xs text-center text-muted-foreground mt-1">
                  스마트스토어·모바일콘 앱 전시 정보
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 기프티콘 대량 업로드 */}
      <Card className="!gap-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-teal-500" />
            기프티콘 대량 업로드 (OCR 자동 기입)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground mb-3">
              기프티콘 이미지를 드래그앤드롭하면 OCR 분석 후 폼에 자동으로 값 채움
            </p>
            <div className="border rounded-lg p-2 bg-card">
              <div
                className="relative group cursor-pointer mb-2"
                onClick={() => onImageClick({ src: '/images/gifticon.png', alt: '기프티콘 재고 등록' })}
              >
                <Image
                  src="/images/gifticon.png"
                  alt="기프티콘 재고 등록"
                  width={800}
                  height={600}
                  sizes="100vw"
                  className="w-full rounded transition-all group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/60 rounded-full p-3">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-center font-semibold text-foreground mb-1">
                재고 등록 화면
              </p>
              <div className="space-y-1 mt-2">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-xs text-muted-foreground">이미지를 드래그앤드롭 영역에 업로드</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-xs text-muted-foreground">OCR로 이미지 분석 후 상품명·가격·유효기간 자동 추출</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-xs text-muted-foreground">자동으로 채워진 폼을 확인 후 일괄 등록</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* UX 세부 구현 */}
      <Card className="!gap-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Eye className="w-4 h-4 text-teal-500" />
            UX 세부 구현
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { icon: Shield, title: '2단계 확인 프로세스', desc: '중요한 작업은 미리보기와 최종 확인 단계를 거침' },
              { icon: ListChecks, title: '중복 확인 로직', desc: '같은 상품이 이미 있는지 자동으로 체크' },
              { icon: Eye, title: '상태 표현 통일', desc: '성공, 실패, 진행 중 상태를 토스트와 인라인 피드백으로 일관되게 표시' }
            ].map((item, index) => (
              <div key={index} className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
                <item.icon className="w-4 h-4 text-teal-500 mb-2" />
                <div className="text-sm font-semibold mb-1">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 성능 최적화 상세 */}
      <Card className="!gap-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Gauge className="w-4 h-4 text-teal-500" />
            성능 최적화 상세
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {[
              {
                category: '렌더링 최적화',
                items: [
                  '코드 스플리팅과 지연 로딩으로 라우트와 모달을 분할',
                  '가상 스크롤과 React.memo 행 메모화로 끊김 방지',
                  'Zustand selector로 불필요한 렌더링 최소화'
                ]
              },
              {
                category: '이미지 최적화',
                items: [
                  '업로드 시 브라우저에서 리사이즈와 압축 수행',
                  'Web Worker를 사용해 메인 스레드 블로킹 방지',
                  'WebP/AVIF 포맷으로 변환',
                  'OCR 분석 후 폼에 자동으로 값 채움'
                ]
              },
              {
                category: '네트워크 최적화',
                items: [
                  'TanStack Query로 데이터 캐싱과 동기화',
                  '검색은 디바운스 처리하고 다음 페이지는 프리페치',
                  '낙관적 업데이트로 즉각적인 피드백 제공',
                ]
              },
              {
                category: '빌드 최적화',
                items: [
                  'Tree-shaking으로 불필요한 코드 제거',
                  'Brotli로 코드와 에셋 압축',
                  '벤더 코드를 분리해 캐싱 효율 증대',
                  'LCP, INP, CLS 지표를 모니터링하며 개선'
                ]
              }
            ].map((section, index) => (
              <Card key={index}>
                <CardContent>
                  <div className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-teal-500" />
                    {section.category}
                  </div>
                  <div className="space-y-1">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
