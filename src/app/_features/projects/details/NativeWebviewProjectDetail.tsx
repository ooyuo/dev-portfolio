
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
  Package,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Rocket,
  Navigation,
  Bell,
  ArrowLeftRight,
  Smartphone,
  X,
  Check,
  MessageSquare,
  Frown
} from 'lucide-react'

export default function NativeWebviewProjectDetail() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    { id: 'overview', title: '프로젝트 개요', icon: Layers },
    { id: 'problem', title: '문제 정의', icon: AlertCircle },
    { id: 'solution', title: '솔루션 설계', icon: Lightbulb },
    { id: 'results', title: '성과 및 임팩트', icon: Trophy }
  ]

  return (
    <>
      {/* DialogTitle for accessibility */}
      <CustomDialogHeader className="px-4 pt-4 pb-0 flex-shrink-0">
        <CustomDialogTitle className="text-lg font-bold flex items-center gap-2">
          <Navigation className="w-5 h-5" />
          네이티브-웹뷰 통합 내비게이션 시스템
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
          {activeSlide === 2 && <SolutionDesign />}
          {activeSlide === 3 && <ResultsAndImpact />}
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
            Native Navigation
          </div>
        </div>

        <h2 className="mb-3 text-xl font-bold">
          하드코딩된 뒤로가기를 실제 방문 이력 기반으로 바꾸기
        </h2>

        <p className="mb-4 text-base text-foreground leading-relaxed">
          미리 정해둔 부모-자식 구조 대신<br />
          사용자가 실제로 거쳐온 경로대로 동작하게 변경
        </p>

        {/* 통계 카드들 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg border bg-card">
            <Calendar className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">프로젝트 기간</div>
            <div className="text-sm font-bold text-foreground">2개월</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <Users className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">역할</div>
            <div className="text-sm font-bold text-foreground">Frontend Engineer</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <ArrowLeftRight className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">전환 유형</div>
            <div className="text-sm font-bold text-foreground">웹뷰→네이티브</div>
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
              "PHP 웹사이트를 WebView에 감싸서 앱으로 만듦",
              "뒤로가기 경로가 미리 정해져 있음",
              "Push 알림으로 들어가면 백버튼이 이상하게 동작",
              "사용자가 실제로 거쳐온 경로를 무시함"
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
            <div className="p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
              <div className="text-sm font-semibold mb-1">내비게이션 동작 일관성</div>
              <div className="text-xs text-muted-foreground">
                실제 방문 이력 기반 스택으로 전환하여, 뒤로가기 동작이 예측 가능하게 정리됨
              </div>
            </div>

            <div className="p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
              <div className="text-sm font-semibold mb-1">푸시/딥링크 시나리오 안정화</div>
              <div className="text-xs text-muted-foreground">
                딥링크 진입 후 불필요한 중간 경로 탐색 없이 홈 복귀/이전 이동 규칙을 명확화
              </div>
            </div>

            <div className="p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
              <div className="text-sm font-semibold mb-1">사용성 피드백 개선</div>
              <div className="text-xs text-muted-foreground">
                내부 데모/QA에서 “길을 잃는 느낌”이 줄었다는 의견 다수 확인
              </div>
            </div>
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
              <Navigation className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">Navigation Stack</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• 실제 방문 이력 추적</div>
                <div className="text-xs text-muted-foreground">• 동적 스택 관리</div>
              </div>
            </div>

            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <Bell className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">Deep Linking</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• Push 알림 진입 처리</div>
                <div className="text-xs text-muted-foreground">• 동적 스택 생성</div>
              </div>
            </div>

            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <TrendingUp className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">UX 설계</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• 자연스러운 뒤로가기</div>
                <div className="text-xs text-muted-foreground">• 예측 가능한 흐름</div>
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
                <CheckCircle2 className="w-4 h-4 text-teal-500 mt-1" />
                <div>
                  <div className="text-sm font-bold">뒤로가기 규칙 일관화</div>
                  <div className="text-xs text-muted-foreground">QA 시나리오로 재현 테스트 통과</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 mt-1" />
                <div>
                  <div className="text-sm font-bold">딥링크 케이스 정리</div>
                  <div className="text-xs text-muted-foreground">로그 기반 경로 추적으로 흐름 확인</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 mt-1" />
                <div>
                  <div className="text-sm font-bold">스택/URL 동기</div>
                  <div className="text-xs text-muted-foreground">Native-웹 간 상태 불일치 재현 이슈 없음</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 mt-1" />
                <div>
                  <div className="text-sm font-bold">사용 흐름 단순화</div>
                  <div className="text-xs text-muted-foreground">중간 경로 강제 이동 제거로 혼선 감소</div>
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
              {['React Native', 'React Navigation', 'TypeScript', 'Deep Linking', 'Navigation Stack', 'Push Notification'].map(tech => (
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
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
            Pain Points
          </div>
        </div>

        <h2 className="mb-3 text-xl font-bold">
          이슈
        </h2>

        <p className="mb-4 text-base text-foreground leading-relaxed">
          뒤로가기 경로가 미리 정해져 있어서 사용자가 혼란스러워하고 앱을 나가버림
        </p>

        {/* 문제점 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg border border-orange-500/30">
            <AlertCircle className="h-4 w-4 text-orange-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">하드코딩 구조</div>
            <div className="text-sm font-bold text-foreground">잘못된 백버튼</div>
          </div>

          <div className="p-3 rounded-lg border border-orange-500/30">
            <Bell className="h-4 w-4 text-orange-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">Push 진입</div>
            <div className="text-sm font-bold text-foreground">엉뚱한 페이지</div>
          </div>

          <div className="p-3 rounded-lg border border-orange-500/30">
            <Frown className="h-4 w-4 text-orange-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">사용자 혼란</div>
            <div className="text-sm font-bold text-foreground">높은 이탈률</div>
          </div>
        </div>
      </div>

      {/* 상세 문제점 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <Card className=" gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-500" />
              문제 1
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            {[
              "백버튼 눌렀을 때 어디로 갈지 미리 정해둠",
              "사용자가 실제로 어떤 경로로 왔는지 무시",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className=" gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="w-4 h-4 text-orange-500" />
              문제 2
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            {[
              "Push 알림으로 특정 페이지에 직접 진입",
              "백버튼 누르면 방문하지 않은 페이지로 이동",
              "사용자가 혼란스러워함"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 문제 발생 시나리오 */}
      <Card className=" gap-1">
        <CardHeader className="pb-1">
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-orange-500" />
            문제 발생 시나리오
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center text-xs font-bold">1</div>
                <span className="text-sm font-medium">사용자가 앱 미사용 중</span>
              </div>
              <div className="ml-8 text-xs text-muted-foreground">홈 화면에서 다른 작업 중</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center text-xs font-bold">2</div>
                <span className="text-sm font-medium">Push 알림 수신 및 클릭</span>
              </div>
              <div className="ml-8 text-xs text-muted-foreground">&quot;50% 할인 프로모션!&quot; 클릭</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center text-xs font-bold">3</div>
                <span className="text-sm font-medium">프로모션 페이지 직접 진입</span>
              </div>
              <div className="ml-8 text-xs text-muted-foreground">홈 → 상품목록을 거치지 않음</div>
            </div>
            <div className="p-2 rounded bg-red-50 dark:bg-red-900/20">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-red-500 text-foreground flex items-center justify-center text-xs font-bold">4</div>
                <span className="text-sm font-medium text-red-600 dark:text-red-400">백버튼 클릭 → 문제 발생!</span>
              </div>
              <div className="ml-8 text-xs text-red-600 dark:text-red-400">❌ 방문하지 않은 상품목록 페이지로 이동</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Before/After 비교 (퍼센트 막대 삭제) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <Card className="border-2 border-red-500/50 shadow-lg gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg text-red-400 flex items-center gap-2"><X className="w-5 h-5" /> 기존 하이라키 구조</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="space-y-1">
              {["부모-자식 관계가 미리 정해져 있음", "사용자가 실제로 거쳐온 경로 무시", "방문하지 않은 페이지로 이동"].map((item, index) => (
                <div key={index} className="flex items-start gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-teal-500/50 shadow-lg gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg text-teal-400 flex items-center gap-2"><Check className="w-5 h-5" /> 개선 후</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="space-y-1">
              {["사용자가 실제로 거쳐온 경로를 추적", "경로에 따라 동적으로 스택 관리", "예측 가능한 뒤로가기 동작"].map((item, index) => (
                <div key={index} className="flex items-start gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function SolutionDesign() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-4">
            <Lightbulb className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">솔루션</h2>
              <p className="text-muted-foreground text-sm">JavaScript Bridge로 React Native와 WebView를 연결하여 실제 이력 기반 내비게이션 구현</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { icon: Navigation, label: 'Navigation Stack', value: '이력 실시간 추적' },
              { icon: Bell, label: 'Deep Linking', value: 'Push로 직접 진입' },
              { icon: Target, label: '예측 가능성', value: '뒤로가기 동작' },
              { icon: CheckCircle2, label: '일관성', value: '네이티브와 동일' }
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

      {/* JavaScript Bridge 구현 */}
      <Card className="!gap-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Code2 className="w-5 h-5 text-teal-500" />
            JavaScript Bridge 구현
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          <p className="text-sm text-muted-foreground">
            React Native와 WebView가 서로 통신할 수 있도록 JavaScript Bridge를 만들어서, 네이티브 내비게이션 스택과 웹 페이지 상태를 동기화
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-start gap-2 mb-2">
                  <ArrowLeftRight className="w-4 h-4 text-teal-500 mt-0.5" />
                  <div className="font-semibold text-sm">Native → WebView</div>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• 네이티브에서 웹으로 이벤트 전달</div>
                  <div>• 현재 페이지 URL 동기화</div>
                  <div>• Push 알림 데이터 웹에 전달</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-start gap-2 mb-2">
                  <ArrowLeftRight className="w-4 h-4 text-teal-500 mt-0.5" />
                  <div className="font-semibold text-sm">WebView → Native</div>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• 웹에서 페이지 이동 요청</div>
                  <div>• 네이티브 스택 상태 업데이트</div>
                  <div>• 백버튼 눌렀을 때 처리</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* 네비게이션 스택 관리 */}
      <Card className="!gap-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Navigation className="w-5 h-5 text-teal-500" />
            네비게이션 스택 관리 로직
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          {[
            {
              step: '01',
              title: '일반적인 앱 사용',
              desc: '사용자가 홈 → 카테고리 → 상품목록 → 상품상세 순서로 이동',
              stack: 'Stack: [홈, 카테고리, 상품목록, 상품상세] (4개 쌓임)',
              icon: Smartphone
            },
            {
              step: '02',
              title: 'Push 알림으로 진입',
              desc: '알림 클릭해서 프로모션 페이지로 바로 진입 (중간 페이지 없음)',
              stack: 'Stack: [프로모션] (1개만 있음)',
              icon: Bell
            },
            {
              step: '03',
              title: '백버튼 눌렀을 때',
              desc: 'Stack이 1개면 홈으로, 2개 이상이면 이전 페이지로 이동',
              stack: '✅ 사용자가 실제로 거쳐온 경로대로 동작',
              icon: CheckCircle2
            }
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="pt-0">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-teal-500 text-teal-500 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm flex items-center gap-1 mb-1">
                      <item.icon className="w-3 h-3 text-teal-500" />
                      {item.title}
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">{item.desc}</div>
                    <div className="text-xs bg-muted p-2 rounded font-mono">{item.stack}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
              <h2 className="text-2xl font-bold">결과</h2>
              <p className="text-muted-foreground text-sm">
                뒤로가기 동작이 예측 가능해지고, 딥링크 진입 시나리오가 안정화됨
              </p>
            </div>
          </div>

          {/* 숫자 카드 대신 품질 신호 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { icon: CheckCircle2, label: '동작 일관성', value: '규칙 정립', sub: '이력 기반 스택 규칙으로 일관 동작' },
              { icon: Navigation,   label: '플로우 안정화', value: '재현 이슈 없음', sub: 'QA 시나리오 기준 재현 불가 이슈 미발견' },
              { icon: ArrowLeftRight,label: '상태 동기', value: 'Native ↔ WebView', sub: '스택/URL 동기 불일치 재현 없음' }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="text-center">
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-teal-500" />
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-semibold">{item.value}</div>
                  <div className="text-xs mt-1 text-muted-foreground">{item.sub}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 검증 방법 요약 */}
      <Card className="!gap-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="w-5 h-5 text-teal-500" />
            검증 방법
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Card><CardContent className="pt-3">
              <div className="text-sm font-semibold mb-1">QA 시나리오</div>
              <div className="text-xs text-muted-foreground">딥링크/일반 진입, 복귀 경로, 다중 백버튼 케이스 점검</div>
            </CardContent></Card>
            <Card><CardContent className="pt-3">
              <div className="text-sm font-semibold mb-1">로그 확인</div>
              <div className="text-xs text-muted-foreground">back action, current URL, stack depth 변화 기록으로 흐름 추적</div>
            </CardContent></Card>
            <Card><CardContent className="pt-3">
              <div className="text-sm font-semibold mb-1">내부 데모/피드백</div>
              <div className="text-xs text-muted-foreground">“길을 잃는 느낌이 줄었다”는 정성 피드백 수집</div>
            </CardContent></Card>
          </div>
        </CardContent>
      </Card>

      {/* Before/After 비교 (평점 문구 제거) */}
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
              <span className="text-sm">백버튼 이동 경로가 미리 고정됨</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500">•</span>
              <span className="text-sm">방문하지 않은 페이지로 이동</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500">•</span>
              <span className="text-sm">딥링크 진입 후 복귀 흐름 불명확</span>
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
              <span className="text-sm">사용자 방문 이력에 맞춰 동작</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-teal-500">•</span>
              <span className="text-sm">백버튼 규칙이 예측 가능</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-teal-500">•</span>
              <span className="text-sm">딥링크 진입 후에도 복귀 흐름이 끊기지 않음</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

