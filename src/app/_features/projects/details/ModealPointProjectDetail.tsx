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
  Target,
  Layers,
  Package,
  AlertCircle,
  Rocket,
  Settings,
  Shield,
  X,
  Check,
  Coins,
  Eye,
  UserCheck,
  CheckCircle2,
  History,
  Share2,
  Bell,
  FileSpreadsheet,
  Lock,
  Clock
} from 'lucide-react'

export default function ModealPointProjectDetail() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    { id: 'overview', title: '프로젝트 개요', icon: Layers },
    { id: 'challenge', title: '기술적 과제', icon: AlertCircle },
    { id: 'implementation', title: '구현 상세', icon: Code2 }
  ]

  return (
    <>
      {/* DialogTitle for accessibility */}
      <CustomDialogHeader className="px-4 pt-4 pb-0 flex-shrink-0">
        <CustomDialogTitle className="text-lg font-bold flex items-center gap-2">
          <Coins className="w-5 h-5" />
          모딜 포인트시스템 개발
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
          {activeSlide === 2 && <ImplementationDetails />}
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
            레거시 환경 포인트 시스템
          </div>
        </div>

        <h2 className="mb-3 text-xl font-bold">
          대고객 앱과 운영 CMS 동시 구축
        </h2>

        <p className="mb-4 text-base text-muted-foreground leading-relaxed">
          사용자가 포인트 조회/적립/사용하는 앱과<br />
          관리자가 운영/승인/정산하는 CMS를 함께 개발
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
      <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
        <Card className="gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-4 h-4 text-teal-500" />
              프로젝트 배경
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            {[
              "포인트 적립하고 사용할 수 있는 시스템 필요",
              "관리자가 포인트 승인하고 관리하는 CMS 필요",
              "PHP+jQuery와 JSP로만 개발해야 하는 제약",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 핵심 기능 */}
      <Card className="!gap-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Zap className="w-4 h-4 text-teal-500" />
            핵심 기능
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <Eye className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">대고객 앱</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• 포인트 조회/적립/사용</div>
                <div className="text-xs text-muted-foreground">• 추천 코드 공유 (문자/카카오)</div>
              </div>
            </div>

            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <Settings className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">CMS 운영</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• 포인트 승인/차단/해제</div>
                <div className="text-xs text-muted-foreground">• 일괄 가감·정산 관리</div>
              </div>
            </div>

            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <History className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">히스토리 관리</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• 회원별 상세 내역</div>
                <div className="text-xs text-muted-foreground">• 엑셀 다운로드</div>
              </div>
            </div>

            <div className="p-3 rounded-lg border hover:border-teal-200 transition-colors">
              <Shield className="w-4 h-4 text-teal-500 mb-2" />
              <div className="text-sm font-semibold mb-2">권한/가드</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">• RBAC 메뉴·액션 제어</div>
                <div className="text-xs text-muted-foreground">• 2단계 확인·미리보기</div>
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
          <div className="space-y-3">
            <div>
              <div className="text-xs font-semibold mb-1 text-muted-foreground">대고객 앱</div>
              <div className="flex flex-wrap gap-1">
                {['JavaScript', 'jQuery', 'HTML/CSS'].map(tech => (
                  <Badge key={tech} className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/30 text-xs py-0.5 px-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold mb-1 text-muted-foreground">CMS</div>
              <div className="flex flex-wrap gap-1">
                {['JSP', 'JavaScript', 'jQuery'].map(tech => (
                  <Badge key={tech} className="bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/30 text-xs py-0.5 px-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold mb-1 text-muted-foreground">협업/도구</div>
              <div className="flex flex-wrap gap-1">
                {['GitLab', 'Figma', 'Jira'].map(tech => (
                  <Badge key={tech} className="bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/30 text-xs py-0.5 px-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
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
          오래된 기술 스택으로 안정적으로 만들기
        </h2>

        <p className="mb-4 text-base text-muted-foreground leading-relaxed">
          PHP+jQuery, JSP 같은 레거시 환경에서도<br />
          성능과 가독성을 유지하면서 포인트 시스템 개발
        </p>

        {/* 과제 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="p-3 rounded-lg border bg-card">
            <Code2 className="h-4 w-4 text-purple-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">레거시 공존</div>
            <div className="text-sm font-bold text-foreground">PHP+jQuery/JSP</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <Shield className="h-4 w-4 text-purple-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">데이터 신뢰성</div>
            <div className="text-sm font-bold text-foreground">이중 검증</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <Lock className="h-4 w-4 text-purple-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">운영 가드</div>
            <div className="text-sm font-bold text-foreground">사고 방지 UX</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <Rocket className="h-4 w-4 text-purple-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">확장성</div>
            <div className="text-sm font-bold text-foreground">기능 확장 대비</div>
          </div>
        </div>
      </div>

      {/* 핵심 난제 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <Card className="gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <Code2 className="w-4 h-4 text-purple-500" />
              레거시 공존
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            {[
              "PHP+jQuery로 만든 화면",
              "JSP로 만든 CMS",
              "성능과 코드 가독성 유지해야 함",
              "한 번에 바꾸지 않고 점진적으로 개선"
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
              데이터 신뢰성
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            {[
              "포인트 적립하고 사용하고 차감하는 기능",
              "클라이언트와 서버에서 두 번 검증",
              "관리자 승인 프로세스",
              "트랜잭션 안정성 확보"
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
              <Lock className="w-4 h-4 text-purple-500" />
              운영 가드
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            {[
              "대량 작업할 때 안전장치",
              "승인하거나 반려하는 플로우",
              "실수로 사고 나는 걸 막는 UX"
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
              <Rocket className="w-4 h-4 text-purple-500" />
              확장성
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 pt-0">
            {[
              "추천하고 초대하는 기능",
              "포인트 히스토리 조회",
              "Push 알림 연동",
              "나중에 기능 추가하기 쉽게 구조 설계"
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
        <Card className="gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg text-muted-foreground flex items-center gap-2">
              <X className="w-5 h-5" /> 기존 문제점
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="space-y-1">
              {["레거시 코드 복잡도", "수동 검증 오류", "운영 사고 위험", "확장 어려움"].map((item, index) => (
                <div key={index} className="flex items-start gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>안정성</span>
                <span className="text-muted-foreground">50%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-muted rounded-full h-2">
                <div className="h-2 rounded-full bg-gray-500" style={{ width: '50%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gap-1">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg text-teal-400 flex items-center gap-2">
              <Check className="w-5 h-5" /> 개선 방안
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="space-y-1">
              {["공통 유틸 모듈화", "이중 검증·승인", "2단계 확인 가드", "확장 가능 구조"].map((item, index) => (
                <div key={index} className="flex items-start gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>안정성</span>
                <span className="text-muted-foreground">95%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-muted rounded-full h-2">
                <div className="h-2 rounded-full bg-teal-500" style={{ width: '95%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ImplementationDetails() {
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
          구체적으로 어떻게 만들었는지
        </h2>

        <p className="mb-4 text-base text-muted-foreground leading-relaxed">
          레거시 환경에서도 안정적으로 동작하고<br />
          사용하기 편한 포인트 시스템 구현
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg border bg-card">
            <Eye className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">대시보드</div>
            <div className="text-sm font-bold text-foreground">한눈에 조회</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <Share2 className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">추천/초대</div>
            <div className="text-sm font-bold text-foreground">코드 공유</div>
          </div>

          <div className="p-3 rounded-lg border bg-card">
            <Shield className="h-4 w-4 text-teal-400 mb-2" />
            <div className="text-sm text-muted-foreground mb-1">승인 관리</div>
            <div className="text-sm font-bold text-foreground">안전한 운영</div>
          </div>
        </div>
      </div>

      {/* 대고객 앱 구현 */}
      <Card className="!gap-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Eye className="w-4 h-4 text-teal-500" />
            대고객 앱(사용자) 구현
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            <Card>
              <CardContent>
                <div className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Coins className="w-4 h-4 text-teal-500" />
                  포인트 대시보드
                </div>
                <div className="space-y-1">
                  {[
                    '적립/사용/차감/만료 내역 한 화면',
                    '기간 필터',
                    '직관적 시각화'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-teal-500" />
                  추천/초대 기능
                </div>
                <div className="space-y-1">
                  {[
                    '추천 코드 문자/카카오 공유',
                    '참여 현황 안내',
                    '리워드 자동 적립',
                    '공유 이력 조회'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* CMS 구현 */}
      <Card className="!gap-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Settings className="w-4 h-4 text-teal-500" />
            CMS(운영자) 구현
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            <Card>
              <CardContent>
                <div className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-teal-500" />
                  포인트 관리
                </div>
                <div className="space-y-1">
                  {[
                    '차단/해제 기능',
                    '대량 가감 처리',
                    '사유 기록 필수',
                    '담당자·시간 스탬프 자동 기록'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  승인 프로세스
                </div>
                <div className="space-y-1">
                  {[
                    '승인/반려 처리',
                    '로그 남김 (감사 추적)',
                    '검색/필터 (회원/기간/상태)',
                    '벌크 승인 기능'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-teal-500" />
                  히스토리 조회
                </div>
                <div className="space-y-1">
                  {[
                    '회원별 상세 내역',
                    '엑셀 다운로드',
                    '기간별 통계',
                    '실시간 집계'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* 핵심 구현 포인트 */}
      <Card className="!gap-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Code2 className="w-4 h-4 text-teal-500" />
            핵심 구현 포인트
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { icon: Shield, title: '이중 검증', desc: '클라이언트·서버 검증' },
              { icon: Bell, title: '공통 컴포넌트', desc: '토스트/모달 레거시 호환' },
              { icon: UserCheck, title: 'RBAC', desc: '메뉴·액션 권한 체크' },
              { icon: Clock, title: '상태 머신', desc: '승인 플로우 동기화' },
            ].map((item, index) => (
              <div key={index} className="p-3 rounded-lg border hover:border-teal-200 transition-colors text-center">
                <item.icon className="w-5 h-5 text-teal-500 mx-auto mb-2" />
                <div className="text-sm font-semibold mb-1">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
