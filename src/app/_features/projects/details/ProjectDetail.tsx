'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CustomDialogHeader, CustomDialogTitle } from '../../../_components/common/CustomDialog'
import {
  Code2,
  Zap,
  Users,
  Calendar,
  Trophy,
  Target,
  Layers,
  GitBranch,
  Package,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Rocket,
  Car,
  Smartphone,
  RefreshCw,
  Settings,
  Palette,
  Wrench,
  Database,
  Hammer,
  Gauge,
  Puzzle,
  FileText,
  FishIcon,
  Box,
  Folder,
  Lock,
  Circle,
  Frown,
  X,
  Check
} from 'lucide-react'
import { CodeEditor } from '@/components/ui/shadcn-io/code-editor'
import Image from 'next/image'

export default function ProjectDetail() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    { id: 'overview', title: '프로젝트 개요', icon: Layers },
    { id: 'challenge', title: '기술적 과제', icon: AlertCircle },
    { id: 'architecture', title: '솔루션 아키텍처', icon: GitBranch },
    { id: 'implementation', title: '구현 상세', icon: Code2 },
    { id: 'results', title: '성과 및 임팩트', icon: Trophy }
  ]

  return (
    <>
      {/* DialogTitle for accessibility */}
      <CustomDialogHeader className="px-4 pt-4 pb-0 flex-shrink-0">
        <CustomDialogTitle className="text-lg font-bold flex items-center gap-2">
          <Car className="w-5 h-5" />
          네이버/롯데 제휴 자동차 견적 플랫폼
        </CustomDialogTitle>
      </CustomDialogHeader>

      {/* 네비게이션 탭 */}
      <div className="px-4 pt-2 pb-0 flex-shrink-0">
        <div className="flex gap-1 overflow-x-auto pb-2">
          {slides.map((slide, index) => (
            <Button
              key={slide.id}
              variant="outline"
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
          {activeSlide === 3 && <ImplementationDetails />}
          {activeSlide === 4 && <ResultsAndImpact />}
        </div>
      </div>
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
            모노레포 아키텍처
          </div>
        </div>

        <h2 className="mb-3 text-xl font-bold">
          멀티 브랜드 플랫폼 구축 프로젝트
        </h2>

        <p className="mb-4 text-base text-foreground leading-relaxed">
          동일한 기능을 제공하는 네이버/롯데 브랜드 앱을<br />
          단일 코드베이스로 효율적으로 구축
        </p>

        {/* 통계 카드들 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 rounded-lg border border bg-card">
            <Calendar className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">프로젝트 기간</div>
            <div className="text-sm font-bold text-foreground">3개월</div>
          </div>

          <div className="p-3 rounded-lg border border bg-card">
            <Users className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">역할</div>
            <div className="text-sm font-bold text-foreground">Frontend Engineer</div>
          </div>

          <div className="p-3 rounded-lg border border bg-card">
            <Users className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">팀 구성</div>
            <div className="text-sm font-bold text-foreground">4명</div>
          </div>

          <div className="p-3 rounded-lg border border bg-card">
            <Trophy className="h-4 w-4 text-teal-400 mb-2" />
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
              "네이버/롯데와 제휴한 서비스 구축",
              "동일한 차량 상담 기능 제공",
              "각 브랜드 고유 디자인 적용 요구",
              "빠른 개발 및 동시 런칭 필요"
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
              프로젝트 목표
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            {[
              { label: "개발 효율성", value: 90, desc: "중복 개발 최소화" },
              { label: "유지보수성", value: 95, desc: "단일 코드베이스" },
              { label: "확장성", value: 85, desc: "향후 브랜드 추가" },
              { label: "성능", value: 96.8, desc: "Lighthouse 평균 96.8점" }
            ].map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-muted rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-teal-500 transition-all duration-1000 ease-out"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 핵심 기술적 도전 */}
      <Card className="!gap-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Zap className="w-4 h-4 text-teal-500" />
            핵심 기술적 도전
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <Layers className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">아키텍처 설계</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• 모노레포 기반 통합 구조</div>
                <div className="text-xs text-muted-foreground">• 다중 앱 동시 통합 구조</div>
              </div>
            </div>

            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <Zap className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">브랜드 분리</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• 디자인 토큰 추상화</div>
                <div className="text-xs text-muted-foreground">• 브랜드별 추가 대응</div>
              </div>
            </div>

            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <TrendingUp className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">개발 경험 개선</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• 개발 생산성 향상</div>
                <div className="text-xs text-muted-foreground">• 코드 재사용성 극대화</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 성과 및 기술스택 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card className="gap-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Trophy className="w-4 h-4 text-teal-500" />
              달성한 핵심 성과
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <BarChart3 className="w-4 h-4 text-teal-500 mt-1" />
                <div>
                  <div className="text-sm font-bold">30-40건</div>
                  <div className="text-xs text-muted-foreground">일평균 상담 신청</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-teal-500 mt-1" />
                <div>
                  <div className="text-sm font-bold">평균 96.8점</div>
                  <div className="text-xs text-muted-foreground">Lighthouse Score</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-teal-500 mt-1" />
                <div>
                  <div className="text-sm font-bold">50%</div>
                  <div className="text-xs text-muted-foreground">개발 시간 단축</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <GitBranch className="w-4 h-4 text-teal-500 mt-1" />
                <div>
                  <div className="text-sm font-bold">1개</div>
                  <div className="text-xs text-muted-foreground">단일 코드베이스</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gap-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Package className="w-4 h-4 text-teal-500" />
              사용 기술 스택
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-1">
              {['TypeScript', 'React', 'pnpm workspace', 'TailwindCSS', 'Jest', 'Git', 'Babel'].map(tech => (
                <Badge key={tech} className="bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/30 text-xs py-0.5 px-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
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
          동시 런칭을 위한 효율적 개발 전략
        </h2>

        <p className="mb-4 text-base text-foreground leading-relaxed">
          네이버/롯데 두 브랜드의 동일 기능 앱을<br />
          짧은 기간 내 동시 오픈해야 하는 과제
        </p>

        {/* 과제 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg border border-purple-500/30">
            <Target className="h-4 w-4 text-purple-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">동시 런칭</div>
            <div className="text-sm font-bold text-foreground">2개 브랜드</div>
          </div>

          <div className="p-3 rounded-lg border border-purple-500/30">
            <Palette className="h-4 w-4 text-purple-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">브랜드 정체성</div>
            <div className="text-sm font-bold text-foreground">독립적 디자인</div>
          </div>

          <div className="p-3 rounded-lg border border-purple-500/30">
            <Zap className="h-4 w-4 text-purple-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">개발 효율</div>
            <div className="text-sm font-bold text-foreground">짧은 기간</div>
          </div>
        </div>
      </div>

      {/* 핵심 요구사항 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        <Card className="gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-4 h-4 text-purple-500" />
              비즈니스 요구사항
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            {[
              "네이버/롯데 동시 런칭",
              "동일한 기능 제공",
              "각 브랜드 정체성 유지",
              "3개월 내 출시"
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
              <Palette className="w-4 h-4 text-purple-500" />
              디자인 요구사항
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            {[
              "브랜드별 독립적 UI/UX",
              "Key color 차별화",
              "일관된 사용자 경험",
              "반응형 디자인"
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
              <Zap className="w-4 h-4 text-purple-500" />
              기술적 요구사항
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            {[
              "효율적인 개발 프로세스",
              "코드 재사용성 극대화",
              "빠른 배포 및 업데이트",
              "높은 성능 유지"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 개발 전략 비교 */}
      <Card className="gap-1">
        <CardHeader className="pb-1">
          <CardTitle className="text-lg flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-purple-500" />
            개발 접근 방식 비교
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">개별 개발 방식 (예상)</span>
                <span className="text-xs text-muted-foreground">6개월</span>
              </div>
              <div className="h-4 bg-gray-500 rounded" style={{ width: '100%' }} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">모노레포 방식 (실제)</span>
                <span className="text-xs text-muted-foreground">3개월</span>
              </div>
              <div className="h-4 bg-teal-500 rounded" style={{ width: '50%' }} />
            </div>
          </div>
          <div className="mt-3 text-center">
            <div className="text-sm font-semibold text-teal-400 flex items-center justify-center gap-1">
              <Zap className="w-4 h-4" />
              50% 개발 기간 단축
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 솔루션 선택 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <Card className="gap-1 border-gray-500/30">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg text-muted-foreground flex items-center gap-2"><X className="w-5 h-5" /> 개별 개발 시</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="space-y-1">
              {["네이버용 별도 개발", "롯데용 별도 개발", "중복된 작업", "긴 개발 기간"].map((item, index) => (
                <div key={index} className="flex items-start gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>예상 효율성</span>
                <span className="text-muted-foreground">50%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="h-2 rounded-full bg-gray-500" style={{ width: '50%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gap-1 border-teal-500/30">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg text-teal-400 flex items-center gap-2"><Check className="w-5 h-5" /> 모노레포 선택</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="space-y-1">
              {["단일 코드베이스", "테마 시스템 분리", "95% 코드 재사용", "효율적 개발"].map((item, index) => (
                <div key={index} className="flex items-start gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>달성 효율성</span>
                <span className="text-muted-foreground">95%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="h-2 rounded-full bg-teal-500" style={{ width: '95%' }}></div>
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
    <div className="space-y-6">
      {/* Hero Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-4">
            <GitBranch className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">솔루션 아키텍처</h2>
              <p className="text-muted-foreground text-sm">모노레포 기반 멀티 브랜드 플랫폼 설계</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { icon: Box, label: '모노레포', value: 'pnpm workspace' },
              { icon: Puzzle, label: '공유 패키지', value: '9개' },
              { icon: RefreshCw, label: '재사용률', value: '95%' },
              { icon: Rocket, label: '배포 효율', value: '50% 단축' }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="text-center">
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-teal-500" />
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-semibold">{item.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Architecture Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="!gap-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Layers className="w-5 h-5 text-teal-500" />
              모노레포 구조
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            {[
              {
                label: 'Apps Layer',
                items: ['naver-app', 'lotte-app'],
                color: 'bg-blue-200 dark:bg-blue-900/40',
                icon: Smartphone,
                desc: 'Router + Config'
              },
              {
                label: 'Packages Layer',
                items: ['apis', 'components', 'context', 'hooks', 'lib', 'models', 'pages', 'store', 'styles'],
                color: 'bg-purple-200 dark:bg-purple-900/40',
                icon: Box,
                desc: '9개 공유 패키지'
              }
            ].map((layer, index) => (
              <Card key={index}>
                <CardContent>
                  <div className="flex items-center gap-2 mb-3">
                    <layer.icon className="w-4 h-4 text-teal-500" />
                    <span className="font-semibold text-sm">{layer.label}</span>
                  </div>
                  <div className={`grid ${index === 0 ? 'grid-cols-2' : 'grid-cols-3'} gap-2`}>
                    {layer.items.map((item, idx) => (
                      <div key={idx} className={`${layer.color} text-foreground p-2 rounded text-xs text-center`}>
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">{layer.desc}</div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="!gap-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-5 h-5 text-teal-500" />
              컴포넌트 재사용 흐름
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            {[
              { step: '01', title: '컴포넌트 개발', desc: 'packages/components', icon: Code2 },
              { step: '02', title: '테마 주입', desc: 'packages/styles', icon: Palette },
              { step: '03', title: '브랜드 적용', desc: 'apps/brand-app', icon: Smartphone }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 border-teal-500 text-teal-500 flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm flex items-center gap-1">
                        <item.icon className="w-3 h-3 text-teal-500" />
                        {item.title}
                      </div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Package Architecture */}
      <Card className="!gap-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Package className="w-5 h-5 text-teal-500" />
            패키지 아키텍처
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { name: 'apis', icon: Settings, color: 'bg-green-300/80', desc: 'API 로직' },
              { name: 'components', icon: Puzzle, color: 'bg-blue-300/80', desc: 'UI 컴포넌트' },
              { name: 'context', icon: GitBranch, color: 'bg-yellow-300/80', desc: 'Context API' },
              { name: 'hooks', icon: FishIcon, color: 'bg-indigo-300/80', desc: '리액트 훅' },
              { name: 'lib', icon: Wrench, color: 'bg-orange-300/80', desc: '유틸리티' },
              { name: 'models', icon: Database, color: 'bg-teal-300/80', desc: '데이터 모델' },
              { name: 'pages', icon: FileText, color: 'bg-purple-300/80', desc: '페이지 로직' },
              { name: 'store', icon: Box, color: 'bg-gray-300/80', desc: '상태 관리' },
              { name: 'styles', icon: Palette, color: 'bg-pink-300/80', desc: '테마 시스템' }
            ].map((pkg, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="text-center">
                  <div className={`${pkg.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <pkg.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="font-semibold text-sm">{pkg.name}</div>
                  <div className="text-xs text-muted-foreground">{pkg.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Benefits */}
      <Card>
        <CardContent>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-teal-500 mt-0.5" />
            <div>
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-teal-500" />
                핵심 아키텍처 전략
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>Router를 제외한 모든 로직 모듈화</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>브랜드별 테마 시스템 분리</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>컴포넌트 95% 재사용률 달성</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>개발 시간 50% 단축 효과</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ImplementationDetails() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <Code2 className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">구현 상세</h2>
              <p className="text-muted-foreground text-sm">TypeScript 기반 모노레포 구현</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { icon: Palette, label: '테마 시스템', value: 'Design Tokens' },
              { icon: Puzzle, label: '컴포넌트', value: 'Theme Props 주입' },
              { icon: Wrench, label: '개발 도구', value: 'pnpm + Babel' }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="text-center">
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-teal-500" />
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-semibold">{item.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Theme System */}
      <Card className="!gap-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Palette className="w-5 h-5 text-teal-500" />
            브랜드별 테마 시스템
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            {/* 브랜드 비교 이미지 */}
            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
              <Card>
                <CardContent className="p-3">
                  <div className="text-center mb-2">
                    <div className="inline-flex items-center gap-1 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-xs font-semibold text-green-700 dark:text-green-400">네이버</span>
                    </div>
                  </div>
                  <div className="relative w-full aspect-[9/19.5] mx-auto rounded-lg overflow-hidden border-2 border-green-500/30">
                    <Image
                      src="/naver.png"
                      alt="네이버 앱 화면"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-3">
                  <div className="text-center mb-2">
                    <div className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-xs font-semibold text-blue-700 dark:text-blue-400">롯데</span>
                    </div>
                  </div>
                  <div className="relative w-full aspect-[9/19.5] mx-auto rounded-lg overflow-hidden border-2 border-blue-500/30">
                    <Image
                      src="/lotte.png"
                      alt="롯데 앱 화면"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <RefreshCw className="w-4 h-4 inline mr-2" />
                동일한 컴포넌트, 다른 브랜드 테마 적용
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Structure */}
      <Card className="!gap-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Folder className="w-5 h-5 text-teal-500" />
            프로젝트 구조
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="font-semibold text-sm flex items-center gap-2">
                <Box className="w-4 h-4 text-teal-500" />
                패키지 구조
              </div>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center gap-1 text-teal-500">
                  <Folder className="w-3 h-3" /> packages/
                </div>
                <div className="ml-4 flex items-center gap-1">
                  ├── <Puzzle className="w-3 h-3 text-blue-500" /> shared-components/
                </div>
                <div className="ml-8 text-muted-foreground">├── Button.tsx</div>
                <div className="ml-8 text-muted-foreground">├── Input.tsx</div>
                <div className="ml-8 text-muted-foreground">└── Modal.tsx</div>
                <div className="ml-4 flex items-center gap-1">
                  ├── <Palette className="w-3 h-3 text-teal-500" /> design-tokens/
                </div>
                <div className="ml-8 text-muted-foreground">├── themes.ts</div>
                <div className="ml-8 text-muted-foreground">└── typography.ts</div>
                <div className="ml-4 flex items-center gap-1">
                  └── <Settings className="w-3 h-3 text-teal-500" /> business-logic/
                </div>
                <div className="ml-8 text-muted-foreground">├── api.ts</div>
                <div className="ml-8 text-muted-foreground">└── utils.ts</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="font-semibold text-sm flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-teal-500" />
                핵심 구현 포인트
              </div>
              <div className="space-y-3">
                {[
                  { icon: Target, title: '타입 안정성', desc: 'TypeScript 인터페이스로 테마 타입 보장' },
                  { icon: RefreshCw, title: '런타임 주입', desc: '컴포넌트에 테마 객체 동적 주입' },
                  { icon: Zap, title: '빌드 최적화', desc: 'Babel 변환으로 브랜드별 최적화' }
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent>
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-teal-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.desc}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ResultsAndImpact() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-4">
            <Trophy className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">성과 및 임팩트</h2>
              <p className="text-muted-foreground text-sm">비즈니스 목표 달성과 기술적 성과</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { icon: Target, label: '목표 달성', value: '100%' },
              { icon: TrendingUp, label: '효율성 개선', value: '50% 단축' },
              { icon: Zap, label: '성능 지표', value: '평균 96.8점' }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="text-center">
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-teal-500" />
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-semibold">{item.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 핵심 성과 지표 */}
      <Card className="!gap-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="w-5 h-5 text-teal-500" />
            핵심 성과 지표
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '30-40', label: '일평균 상담신청', trend: '', icon: TrendingUp },
              { value: '100%', label: '목표 달성률', trend: 'KPI 100% 달성', icon: Target },
              { value: '50%', label: '개발시간 단축', trend: '효율성 극대화', icon: Zap },
              { value: '99.9%', label: '시스템 가용성', trend: '안정적 운영', icon: Lock }
            ].map((metric) => (
              <Card key={metric.label}>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-teal-500">{metric.value}</div>
                  <div className="text-sm font-medium mt-1">{metric.label}</div>
                 {metric.trend !== "" &&
                  <div className="text-xs mt-2 text-muted-foreground flex items-center justify-center gap-1">
                    <metric.icon className="w-3 h-3 text-teal-500" />
                    {metric.trend}
                  </div>}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lighthouse 성능 지표 */}
      <Card className="!gap-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Zap className="w-5 h-5 text-teal-500" />
            Lighthouse 성능 지표
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            {/* 실제 Lighthouse 스크린샷 */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/lighthouse.png"
                  alt="Lighthouse 성능 지표 100점"
                  width={413}
                  height={125}
                  className="rounded-lg border-2 border-teal-500/30"
                />
                <div className="absolute -top-2 -right-2 bg-teal-400 font-bold bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-full">
                  실제 측정 결과
                </div>
              </div>
            </div>

            {/* 기존 차트 */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { metric: 'Performance', score: 100 },
                { metric: 'Accessibility', score: 95 },
                { metric: 'Best Practice', score: 100 },
                { metric: 'SEO', score: 92 }
              ].map((item) => (
                <Card key={item.metric}>
                  <CardContent className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-2">
                      <svg className="w-16 h-16 transform -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          className="text-gray-200"
                        />
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          className="text-teal-500"
                          strokeDasharray={`${(item.score / 100) * 175.93} 175.93`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold">{item.score}</span>
                      </div>
                    </div>
                    <div className="text-xs font-medium">{item.metric}</div>
                  </CardContent>
                </Card>
              ))}
            </div> */}
          </div>
        </CardContent>
      </Card>

      {/* 개발 효율성 향상 */}
      <Card className="!gap-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-teal-500" />
            개발 효율성 향상
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {['기존: 개별 개발', '→', '개선: 통합 아키텍처', '→', '50% 시간 단축'].map((item, idx) => (
              <Badge
                key={idx}
                variant={idx === 4 ? "default" : "outline"}
                className={`whitespace-nowrap ${idx === 4 ? 'bg-primary hover:bg-primary/90 bg-secondary text-secondary-foreground' : ''}`}
              >
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Before/After 개선 효과 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="gap-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <X className="w-5 h-5 text-orange-500" />
              Before
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="flex items-start gap-2">
              <span className="text-orange-500">•</span>
              <span className="text-sm">각각 개발 및 배포</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500">•</span>
              <span className="text-sm">브랜드별 수정 시 중복 작업</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500">•</span>
              <span className="text-sm">기능 동기화 어려움</span>
            </div>
          </CardContent>
        </Card>

        <Card className="gap-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Check className="w-5 h-5 text-teal-500" />
              After
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="flex items-start gap-2">
              <span className="text-teal-500">•</span>
              <span className="text-sm">단일 코드베이스 관리</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-teal-500">•</span>
              <span className="text-sm">설정 변경만으로 브랜드 적용</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-teal-500">•</span>
              <span className="text-sm">동시 기능 업데이트 가능</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-teal-500">•</span>
              <span className="text-sm">통합 테스트 및 배포</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ROI 계산 */}
      <Card className="!gap-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-teal-500" />
            투자 대비 효과 (ROI)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: '50%', label: '개발 시간 단축' },
              { value: '70%', label: '유지보수 비용 절감' },
              { value: '2x', label: '개발 생산성 향상' }
            ].map((item) => (
              <Card key={item.label}>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-teal-500">{item.value}</div>
                  <div className="text-sm mt-1 text-muted-foreground">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

