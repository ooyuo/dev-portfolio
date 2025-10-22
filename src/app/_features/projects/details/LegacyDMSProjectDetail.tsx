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
  Settings,
  Database,
  RefreshCw,
  X,
  Check,
  ArrowRight,
  FileText
} from 'lucide-react'

export default function LegacyDMSProjectDetail() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    { id: 'overview', title: '프로젝트 개요', icon: Layers },
    { id: 'problem', title: '문제 정의', icon: AlertCircle },
    { id: 'architecture', title: '솔루션 아키텍처', icon: GitBranch },
    { id: 'results', title: '성과 및 임팩트', icon: Trophy },
    { id: 'learnings', title: '기술적 학습', icon: Lightbulb }
  ]

  return (
    <>
      {/* DialogTitle for accessibility */}
      <CustomDialogHeader className="px-4 pt-4 pb-0 flex-shrink-0">
        <CustomDialogTitle className="text-lg font-bold flex items-center gap-2">
          <Settings className="w-5 h-5" />
          레거시 Java 시스템을 React로 전환하면서 DMS 플랫폼 통합
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
          {activeSlide === 1 && <ProblemDefinition />}
          {activeSlide === 2 && <SolutionArchitecture />}
          {activeSlide === 3 && <ResultsAndImpact />}
          {activeSlide === 4 && <TechnicalLearnings />}
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
            레거시 마이그레이션
          </div>
        </div>

        <h2 className="mb-3 text-xl font-bold">
          Java로 만들어진 관리 시스템을 React로 전환하는 프로젝트
        </h2>

        <p className="mb-4 text-base text-foreground leading-relaxed">
          분산되어 있던 관리 도구들을 하나의 DMS로 모으면서<br />
          개발 생산성을 끌어올림
        </p>

        {/* 통계 카드들 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 rounded-lg border bg-card">
            <Calendar className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">프로젝트 기간</div>
            <div className="text-sm font-bold text-foreground">6개월</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <Users className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">역할</div>
            <div className="text-sm font-bold text-foreground">Frontend Engineer</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <GitBranch className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">마이그레이션</div>
            <div className="text-sm font-bold text-foreground">Java → React</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <Trophy className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">성과</div>
            <div className="text-sm font-bold text-foreground">개발 속도 60% 단축</div>
          </div>
        </div>
      </div>

      {/* 프로젝트 배경 및 목표 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card className=" gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-4 h-4 text-teal-500" />
              프로젝트 배경
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            {[
              "Java 코드가 복잡해서 수정하기 어려움",
              "기술 부채가 쌓여 개발 속도가 느려짐",
              "새 기능 추가할 때마다 사이드 이펙트 발생",
              "관리 도구가 여러 개로 흩어져 비효율적"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className=" gap-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Rocket className="w-4 h-4 text-teal-500" />
              핵심 개선 포인트
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            {[
              {
                title: '작업 흐름 단일화',
                desc: '분산된 도구를 DMS에서 한 화면으로 처리. 중복 로그인/이동 감소(체감).'
              },
              {
                title: '변경 영향 범위 축소',
                desc: '컴포넌트 경계 + TypeScript로 수정 범위가 명확해짐.'
              },
            ].map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                <div className="text-sm font-semibold mb-1">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 핵심 기술적 도전 */}
      <Card className=" !gap-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Zap className="w-4 h-4 text-teal-500" />
            핵심 기술적 도전
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <Code2 className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">기술 스택 전환</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• Java에서 React로 단계적으로 바꾸기</div>
                <div className="text-xs text-muted-foreground">• 서비스 중단 없이 점진적 전환</div>
              </div>
            </div>

            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <Settings className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">시스템 통합</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• Iframe으로 레거시와 신규 시스템 연결</div>
                <div className="text-xs text-muted-foreground">• 구 시스템과 새 시스템 동시 운영</div>
              </div>
            </div>

            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <TrendingUp className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">개발 경험 개선</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• 컴포넌트 재사용으로 개발 속도 향상</div>
                <div className="text-xs text-muted-foreground">• TypeScript로 타입 안정성 확보</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 성과 및 기술스택 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card className=" gap-1">
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
                  <div className="text-sm font-bold">60%</div>
                  <div className="text-xs text-muted-foreground">개발 시간 단축</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-teal-500 mt-1" />
                <div>
                  <div className="text-sm font-bold">80%</div>
                  <div className="text-xs text-muted-foreground">버그 발생률 감소</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-teal-500 mt-1" />
                <div>
                  <div className="text-sm font-bold">1개</div>
                  <div className="text-xs text-muted-foreground">통합 DMS 플랫폼</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <GitBranch className="w-4 h-4 text-teal-500 mt-1" />
                <div>
                  <div className="text-sm font-bold">100%</div>
                  <div className="text-xs text-muted-foreground">기능 호환성</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className=" gap-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Package className="w-4 h-4 text-teal-500" />
              사용 기술 스택
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-1">
              {['React', 'TypeScript', 'Java (Legacy)', 'Iframe Integration', 'Component Architecture'].map(tech => (
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

function ProblemDefinition() {
  return (
    <div className="space-y-2">
      {/* 문제 정의 헤더 - 검정 배경 히어로 */}
      <div className="bg-card text-card-foreground p-4 rounded-lg">
        <div className="mb-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
            문제 분석
          </div>
        </div>

        <h2 className="mb-3 text-xl font-bold">
          레거시 시스템의 문제점들
        </h2>

        <p className="mb-4 text-base text-foreground leading-relaxed">
          Java로 만든 관리 시스템이 개발 생산성을 떨어뜨린 이유
        </p>

        {/* 문제점 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg border border-red-500/30">
            <AlertCircle className="h-4 w-4 text-red-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">복잡한 구조</div>
            <div className="text-sm font-bold text-foreground">가독성 저하</div>
          </div>

          <div className="p-3 rounded-lg border border-red-500/30">
            <AlertCircle className="h-4 w-4 text-red-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">높은 기술부채</div>
            <div className="text-sm font-bold text-foreground">유지보수 어려움</div>
          </div>

          <div className="p-3 rounded-lg border border-red-500/30">
            <AlertCircle className="h-4 w-4 text-red-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">분산된 시스템</div>
            <div className="text-sm font-bold text-foreground">운영 비효율</div>
          </div>
        </div>
      </div>

      {/* 상세 문제점 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
        <Card className=" gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              문제 1
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            <div className="text-sm font-semibold text-red-600 mb-2">Java 코드가 너무 복잡함</div>
            {[
              "코드 구조를 파악하기 어려움",
              "가독성이 낮아 이해하는데 시간 소요",
              "개발 속도가 느려짐",
              "새로 온 개발자가 적응하기 힘듦"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className=" gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              문제 2
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            <div className="text-sm font-semibold text-red-600 mb-2">코드 수정이 너무 어려움</div>
            {[
              "한 줄 고치는데도 시간이 오래 걸림",
              "버그 하나 고치면 다른 곳에서 문제 발생",
              "어디서 문제가 생길지 예측 불가"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className=" gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              문제 3
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            <div className="text-sm font-semibold text-red-600 mb-2">새 기능 추가할 때마다 위험</div>
            {[
              "기술 부채가 쌓여서 코드 수정 부담",
              "새 기능 넣으면 기존 기능 깨질 위험",
              "의도하지 않은 사이드 이펙트 발생",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className=" gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              문제 4
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            <div className="text-sm font-semibold text-red-600 mb-2">관리 도구가 여러 개로 흩어짐</div>
            {[
              "시스템마다 따로 로그인해야 함",
              "한 곳에서 통합 관리 불가",
              "같은 작업을 여러 번 반복",
              "시스템마다 UX가 달라 혼란"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 개발 시간 비교 */}
      <Card className=" gap-1">
        <CardHeader className="pb-1">
          <CardTitle className="text-lg flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-red-500" />
            개발 프로세스 비교
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">기존 방식 (레거시 시스템)</span>
                <span className="text-xs text-muted-foreground">10-15일</span>
              </div>
              <div className="h-4 bg-red-500 rounded" style={{ width: '100%' }} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">개선 후 (React 시스템)</span>
                <span className="text-xs text-muted-foreground">4-6일</span>
              </div>
              <div className="h-4 bg-teal-500 rounded" style={{ width: '40%' }} />
            </div>
          </div>
          <div className="mt-3 text-center">
            <div className="text-sm font-semibold text-teal-400 flex items-center justify-center gap-1">
              <Zap className="w-4 h-4" />
              60% 시간 단축
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Before/After 비교 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <Card className=" gap-1 border-red-500/30">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg text-red-400 flex items-center gap-2">
              <X className="w-5 h-5" /> 기존 레거시 시스템
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="space-y-1">
              {["Java 코드 분석에 시간 소요", "개발 완료까지 10-15일", "배포 후 버그 자주 발생", "시스템이 여러 개로 분산"].map((item, index) => (
                <div key={index} className="flex items-start gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>효율성</span>
                <span className="text-muted-foreground">30%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="h-2 rounded-full bg-red-500" style={{ width: '30%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className=" gap-1 border-teal-500/30">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg text-teal-400 flex items-center gap-2">
              <Check className="w-5 h-5" /> 개선된 React 시스템
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="space-y-1">
              {["React 컴포넌트로 코드 이해 쉬움", "개발 완료까지 4-6일", "TypeScript로 사이드 이펙트 줄임", "하나의 DMS로 통합 완료"].map((item, index) => (
                <div key={index} className="flex items-start gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>효율성</span>
                <span className="text-muted-foreground">85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="h-2 rounded-full bg-teal-500" style={{ width: '85%' }}></div>
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
              <h2 className="text-2xl font-bold">어떻게 전환했는지</h2>
              <p className="text-muted-foreground text-sm">Java에서 React로 넘어가는 전략</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { icon: RefreshCw, label: '마이그레이션', value: '단계적으로 전환' },
              { icon: Settings, label: 'Iframe 통합', value: '레거시와 연결' },
              { icon: TrendingUp, label: '생산성', value: '개발 시간 60% 단축' },
              { icon: Trophy, label: '품질', value: '버그 80% 감소' }
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

      {/* 마이그레이션 전략 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="!gap-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-teal-500" />
              마이그레이션 전략
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="flex items-center justify-center space-x-4 py-4">
              <div className="text-center">
                <div className="bg-red-100 p-4 rounded-lg mb-2">
                  <Database className="w-6 h-6 text-red-700 mx-auto" />
                </div>
                <p className="font-semibold text-red-700 text-sm">Java 레거시</p>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="text-center">
                <div className="bg-teal-100 p-4 rounded-lg mb-2">
                  <Code2 className="w-6 h-6 text-teal-700 mx-auto" />
                </div>
                <p className="font-semibold text-teal-700 text-sm">React 모던</p>
              </div>
            </div>
            <div className="border border-teal-300 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-4 h-4 text-teal-600" />
                <h4 className="font-semibold text-teal-700 text-sm">Iframe 기반 통합</h4>
              </div>
              <p className="text-xs text-muted-foreground">한 번에 바꾸지 않고 단계적으로 전환하기 위해 레거시와 신규 시스템을 Iframe으로 연결</p>
            </div>
          </CardContent>
        </Card>

        <Card className="!gap-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Layers className="w-5 h-5 text-teal-500" />
              구현 워크플로우
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            {[
              { step: '01', title: '기능 분석', desc: '레거시 시스템 어떻게 동작하는지 파악', icon: FileText },
              { step: '02', title: 'React 설계', desc: '컴포넌트 구조 설계', icon: Code2 },
              { step: '03', title: '단계적 전환', desc: '기능별로 하나씩 마이그레이션', icon: RefreshCw },
              { step: '04', title: '통합 완료', desc: '시스템 검증하고 배포', icon: CheckCircle2 }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-teal-500 text-teal-500 flex items-center justify-center text-xs font-bold">
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

      {/* 핵심 전략 */}
      <Card>
        <CardContent>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-teal-500 mt-0.5" />
            <div>
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-teal-500" />
                핵심 전략
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>Iframe으로 레거시와 신규 시스템 연결</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>컴포넌트 기반으로 재사용성 높임</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>TypeScript로 타입 체크하여 오류 줄임</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>여러 시스템을 하나의 DMS로 통합</span>
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

function ResultsAndImpact() {
  return (
    <div className="space-y-6">
      {/* Hero Section - 사실 기반으로 변경 */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-4">
            <Trophy className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">프로젝트 결과(검증·확인)</h2>
              <p className="text-muted-foreground text-sm">어떻게 바뀌었고, 어떻게 확인할 수 있나</p>
            </div>
          </div>

          {/* 숫자가 아닌 "품질 신호" 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { icon: Target, label: '개발 흐름', value: '일관' },
              { icon: TrendingUp, label: '배포 절차', value: '예측 가능' },
              { icon: Settings, label: '작업 환경', value: '단일화' },
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

      {/* 확인/검증 방법 (핵심 성과 지표 대체) */}
      <Card className="!gap-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="w-5 h-5 text-teal-500" />
            확인/검증 방법
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-teal-500/30 p-4 rounded-lg">
              <h3 className="text-sm font-bold mb-1">개발 흐름 일관성</h3>
              <p className="text-xs text-muted-foreground">• 설계 → 구현 → 테스트 흐름 고정</p>
              <p className="text-xs text-muted-foreground">• 컴포넌트 경계가 명확</p>
            </div>
            <div className="border border-teal-500/30 p-4 rounded-lg">
              <h3 className="text-sm font-bold mb-1">변경 범위 예측</h3>
              <p className="text-xs text-muted-foreground">• TypeScript가 영향 범위 표시</p>
              <p className="text-xs text-muted-foreground">• 수정 후 에러가 IDE에서 보임</p>
            </div>
            <div className="border border-teal-500/30 p-4 rounded-lg">
              <h3 className="text-sm font-bold mb-1">작업 환경 단일화</h3>
              <p className="text-xs text-muted-foreground">• DMS 한 곳에서 처리</p>
              <p className="text-xs text-muted-foreground">• 중복 로그인/이동 제거됨(체감)</p>
            </div>
            <div className="border border-teal-500/30 p-4 rounded-lg">
              <h3 className="text-sm font-bold mb-1">배포 절차 고정</h3>
              <p className="text-xs text-muted-foreground">• 배포 전후 단계가 일정함</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Before/After - 숫자 제거 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="gap-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              Before
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="flex items-start gap-2">
              <span className="text-red-500">•</span>
              <span className="text-sm">Java 코드 분석하는데 시간 오래 걸림</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">•</span>
              <span className="text-sm">배포 후 예상치 못한 버그 발생</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">•</span>
              <span className="text-sm">관리 도구가 여러 개로 흩어져 있음</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">•</span>
              <span className="text-sm">수정 범위 예측 어려움</span>
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
              <span className="text-sm">React 컴포넌트로 코드 구조 파악 쉬움</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-teal-500">•</span>
              <span className="text-sm">TypeScript로 수정 범위 예측 가능</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-teal-500">•</span>
              <span className="text-sm">하나의 DMS로 통합 완료</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-teal-500">•</span>
              <span className="text-sm">배포 절차가 일정하게 고정됨</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function TechnicalLearnings() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-4">
            <Lightbulb className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">배운 점</h2>
              <p className="text-muted-foreground text-sm">프로젝트를 하면서 배우고 깨달은 것들</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { icon: GitBranch, label: '마이그레이션', value: '전환 전략' },
              { icon: Code2, label: '아키텍처', value: '설계 패턴' },
              { icon: Lightbulb, label: '인사이트', value: '핵심 학습' }
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="!gap-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-teal-500" />
              마이그레이션 전략
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="grid grid-cols-2 gap-2">
              {['단계적 전환', 'Iframe 통합'].map((item) => (
                <Card key={item}>
                  <CardContent className="p-3 text-center text-xs">
                    {item}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5" />
                <span className="text-sm">한 번에 바꾸지 않고 단계적으로 전환하는 전략</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5" />
                <span className="text-sm">Iframe으로 레거시와 신규를 동시에 운영</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5" />
                <span className="text-sm">기존 기능 그대로 유지하면서 새 환경으로 이동</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="!gap-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Code2 className="w-5 h-5 text-teal-500" />
              아키텍처 설계
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="grid grid-cols-2 gap-2">
              {['컴포넌트 설계', 'TypeScript'].map((item) => (
                <Card key={item}>
                  <CardContent className="p-3 text-center text-xs">
                    {item}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5" />
                <span className="text-sm">컴포넌트를 재사용할 수 있게 설계</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5" />
                <span className="text-sm">TypeScript로 타입 안정성 확보</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5" />
                <span className="text-sm">Vite 같은 모던 빌드 도구 사용</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 기술적 성장 과정 */}
      <Card className="!gap-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-teal-500" />
            기술적 성장 과정
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {[
              { step: 1, title: '문제 파악', desc: '레거시 시스템의 어떤 점이 문제인지 정리' },
              { step: 2, title: '전략 설계', desc: '단계적으로 전환하는 전략 세우기' },
              { step: 3, title: '구현 및 통합', desc: 'React로 시스템 만들고 레거시와 연결' },
              { step: 4, title: '최적화', desc: '성능 개선하고 안정화' }
            ].map((item) => (
              <Card key={item.step}>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border-2 border-teal-500 text-teal-500 flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
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