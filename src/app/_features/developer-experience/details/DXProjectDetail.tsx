'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { CustomDialogHeader, CustomDialogTitle } from '../../../_components/common/CustomDialog'
import {
  FileText,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Wrench,
  Package,
  Users,
  CheckCircle,
  XCircle,
  ArrowRight,
  Terminal,
  Zap,
  Shield
} from 'lucide-react'

export default function DXProjectDetail() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { id: 'overview', title: '프로젝트 개요', icon: FileText },
    { id: 'problem', title: '문제 정의', icon: AlertCircle },
    { id: 'solution', title: '솔루션 설계', icon: Lightbulb },
    { id: 'impact', title: '성과 & 임팩트', icon: TrendingUp }
  ]

  return (
    <>
      {/* DialogTitle for accessibility */}
      <CustomDialogHeader className="px-4 pt-4 pb-0 flex-shrink-0">
        <CustomDialogTitle className="text-lg font-bold flex items-center gap-2">
          <Wrench className="w-5 h-5" />
          React Native Android Gradle 7.0+ Migration
        </CustomDialogTitle>
      </CustomDialogHeader>

      <div className="h-full flex flex-col">
        {/* 네비게이션 탭 */}
        <div className="px-4 pt-2 pb-0 flex-shrink-0">
        <div className="flex gap-1 overflow-x-auto pb-2">
          {tabs.map((tab, index) => (
            <Button
              key={tab.id}
              variant={activeTab === index ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-1 whitespace-nowrap text-xs py-1 px-2 ${
                activeTab === index ? 'bg-secondary text-secondary-foreground' : ''
              }`}
            >
              <tab.icon className="w-3 h-3" />
              {tab.title}
            </Button>
          ))}
        </div>
      </div>

      {/* 슬라이드 컨텐츠 - 스크롤 가능 영역 */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="pt-2">
        {activeTab === 0 && (
          <div className="space-y-6">
          <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded-xl p-6 border border-orange-500/20">
            <div className="flex items-start gap-3 mb-4">
              <Wrench className="w-6 h-6 text-orange-500 mt-1" />
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">React Native Android Gradle 7.0+ Migration</h1>
                <p className="text-muted-foreground">
                  Android Gradle Plugin 7.0+ 업그레이드로 인한 namespace 필수화 문제 해결
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                Critical Fix
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="border-0 bg-card/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-500">30+</div>
                  <div className="text-xs text-muted-foreground">라이브러리 수정</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-card/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-500">90%</div>
                  <div className="text-xs text-muted-foreground">시간 단축</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-card/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-500">0</div>
                  <div className="text-xs text-muted-foreground">빌드 실패</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-card/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-500">1일</div>
                  <div className="text-xs text-muted-foreground">개발 완료</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="gap-2">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Package className="w-4 h-4 text-orange-500" />
                  프로젝트 배경
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• React Native 0.71 업그레이드 진행</p>
                <p>• Android Gradle Plugin 7.0+ 필수 요구사항</p>
                <p>• 30개 이상 서드파티 라이브러리 빌드 실패</p>
                <p>• 팀 전체 개발 환경 블로킹 이슈 발생</p>
              </CardContent>
            </Card>

            <Card className="gap-2">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange-500" />
                  핵심 기능
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• 자동화 스크립트 개발 (TypeScript)</p>
                <p>• postinstall hook으로 자동 실행</p>
                <p>• 라이브러리별 namespace 자동 생성</p>
                <p>• 빌드 검증 및 오류 리포팅</p>
              </CardContent>
            </Card>
          </div>

          <Card className="gap-2">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Shield className="w-4 h-4 text-orange-500" />
                사용 기술 스택
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-secondary text-secondary-foreground">Node.js</Badge>
                <Badge className="bg-secondary text-secondary-foreground">TypeScript</Badge>
                <Badge className="bg-secondary text-secondary-foreground">React Native</Badge>
                <Badge className="bg-secondary text-secondary-foreground">Android Gradle</Badge>
                <Badge className="bg-secondary text-secondary-foreground">npm scripts</Badge>
                <Badge className="bg-secondary text-secondary-foreground">Shell Script</Badge>
                <Badge className="bg-secondary text-secondary-foreground">Python</Badge>
              </div>
            </CardContent>
          </Card>
          </div>
        )}

        {activeTab === 1 && (
          <div className="space-y-6">
          <div className="rounded-xl p-4 border border-red-500/30">
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              문제 정의 (Pain Points)
            </h2>

            <div className="space-y-2">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-3">
                  <h3 className="font-medium mb-1 text-red-500 text-sm">문제 1: Android Gradle 7.0+ 업그레이드 namespace 필수화</h3>
                  <p className="text-xs text-muted-foreground">
                    AGP 7.0부터 build.gradle에 namespace 선언이 필수가 되었으나,
                    대부분의 React Native 라이브러리가 이를 지원하지 않음
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-3">
                  <h3 className="font-medium mb-1 text-red-500 text-sm">문제 2: 30개+ React Native 라이브러리 수동 수정 필요</h3>
                  <p className="text-xs text-muted-foreground">
                    각 라이브러리마다 구현된 Gradle 기준으로 작성해야 하는 어려움
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-3">
                  <h3 className="font-medium mb-1 text-red-500 text-sm">문제 3: 반복적인 빌드 실패와 디버깅 시간 낭비</h3>
                  <p className="text-xs text-muted-foreground">
                    누락된 namespace로 인한 빌드 에러 반복 발생,
                    평균 빌드 시간 30-60분 소요
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-3">
                  <h3 className="font-medium mb-1 text-red-500 text-sm">문제 4: 팀 전체 개발 환경 정상 병목 현상</h3>
                  <p className="text-xs text-muted-foreground">
                    모든 개발자가 동일한 수동 작업을 반복해야 하는 비효율성
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-red-500/30 gap-2">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  기존 방식
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-xs">
                <p className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">•</span>
                  <span>수동 설정 (30-60분)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">•</span>
                  <span>반복적인 빌드 실패 오류</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">•</span>
                  <span>복잡한 문서화 과정</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-500/30 gap-2">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  개선 후
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-xs">
                <p className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>자동 설정 (1분 이내)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>빌드 실패 오류 제로</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>원클릭 문서</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">기존 개발환경 설정 프로세스</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between gap-2 text-xs">
                <div className="text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-red-500">1</span>
                  </div>
                  <p>프로젝트 클론</p>
                  <p className="text-muted-foreground">Git repository 소스코드 다운로드</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <div className="text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-red-500">2</span>
                  </div>
                  <p>의존성 설치</p>
                  <p className="text-muted-foreground">npm install 실행</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <div className="text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-red-500">3</span>
                  </div>
                  <p>수동 설정 작업 (30-60분)</p>
                  <p className="text-muted-foreground">30개+ 라이브러리 build.gradle 파일 수동 수정</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <div className="text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-red-500">4</span>
                  </div>
                  <p>설정 오류 디버깅</p>
                  <p className="text-muted-foreground">빌드 실패 시 누락된 namespace 찾아 수정</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <div className="text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-red-500">5</span>
                  </div>
                  <p>개발 시작</p>
                  <p className="text-muted-foreground">실제 개발 작업 착수 (총 1-2시간 소요)</p>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        )}

        {activeTab === 2 && (
          <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl p-6 border border-blue-500/20">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-blue-500" />
              솔루션 설계
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="gap-2">
                <CardHeader>
                  <CardTitle className="text-base">자동화 스크립트 아키텍처</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-500">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">npm install 실행</p>
                        <p className="text-xs text-muted-foreground">의존성 설치 후 postinstall hook 자동 트리거</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-500">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">라이브러리 스캔</p>
                        <p className="text-xs text-muted-foreground">node_modules에서 React Native 라이브러리 자동 감지</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-500">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">네임스페이스 생성</p>
                        <p className="text-xs text-muted-foreground">각 라이브러리별로 고유 namespace 자동 생성</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-500">4</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">설정 파일 업데이트</p>
                        <p className="text-xs text-muted-foreground">android/build.gradle 파일 자동 수정</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-500">5</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">검증 및 완료</p>
                        <p className="text-xs text-muted-foreground">설정 유효성 검사 후 개발 환경 준비 완료</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gap-2">
                <CardHeader>
                  <CardTitle className="text-base">핵심 기술 전략</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-lg bg-gradient-to-r from-orange-500/10 to-transparent p-3">
                    <h4 className="font-medium text-sm mb-1">동적 라이브러리 감지</h4>
                    <p className="text-xs text-muted-foreground">
                      package.json의 node_modules 스캔
                    </p>
                  </div>
                  <div className="rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent p-3">
                    <h4 className="font-medium text-sm mb-1">파일 시스템 처리</h4>
                    <p className="text-xs text-muted-foreground">
                      네이밍 스페이스를 중앙 집중 구현하여 namespace 스타일 처리
                    </p>
                  </div>
                  <div className="rounded-lg bg-gradient-to-r from-green-500/10 to-transparent p-3">
                    <h4 className="font-medium text-sm mb-1">설정 검증 시스템</h4>
                    <p className="text-xs text-muted-foreground">
                      빌드 전 설정 파일 유효성 자동 검사
                    </p>
                  </div>
                  <div className="rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent p-3">
                    <h4 className="font-medium text-sm mb-1">증분 업데이트</h4>
                    <p className="text-xs text-muted-foreground">
                      변경된 라이브러리만 선택적으로 업데이트
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="gap-2">
            <CardHeader>
              <CardTitle className="text-base">솔루션 구조</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 font-mono text-xs">
                <div className="space-y-1">
                  <div>📁 project-root/</div>
                  <div className="ml-4">├── 📁 package.json</div>
                  <div className="ml-4">└── 📁 &quot;postinstall&quot;: &quot;node scripts/add-namespaces.ts&quot;</div>
                  <div className="ml-4">├── 📁 scripts/</div>
                  <div className="ml-8">├── 📄 add-namespaces.ts</div>
                  <div className="ml-8">├── 📄 setup-namespaces.ts</div>
                  <div className="ml-8">├── 📄 config-generator.ts</div>
                  <div className="ml-8">└── 📄 validator.ts</div>
                  <div className="ml-4">└── 📁 node_modules/</div>
                  <div className="ml-8">├── 📁 [30+ 라이브러리들]</div>
                  <div className="ml-8">└── 📁 android/</div>
                  <div className="ml-12">└── 📄 build.gradle</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-orange-500/10 to-transparent border-orange-500/20">
              <CardContent className="p-4 text-center">
                <Terminal className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                <p className="font-medium text-sm">동적 라이브러리 감지</p>
                <p className="text-xs text-muted-foreground mt-1">
                  package.json과 node_modules 스캔, @스코프 패키지 정확 처리
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-yellow-500/10 to-transparent border-yellow-500/20">
              <CardContent className="p-4 text-center">
                <Wrench className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                <p className="font-medium text-sm">무중단 설치 완료</p>
                <p className="text-xs text-muted-foreground mt-1">
                  네임스페이스 주입 연산 성능 최적화, 어떤 영향 없이 처리
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20">
              <CardContent className="p-4 text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <p className="font-medium text-sm">설정 검증 시스템</p>
                <p className="text-xs text-muted-foreground mt-1">
                  설정 파일 무결성 검사, 빌드 조기에 검증
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20">
              <CardContent className="p-4 text-center">
                <Zap className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                <p className="font-medium text-sm">증분 업데이트</p>
                <p className="text-xs text-muted-foreground mt-1">
                  변드링된 터베터지 업데이트만 수정
                </p>
              </CardContent>
            </Card>
          </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-500/10 to-transparent rounded-xl p-6 border border-green-500/20">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              성과 및 임팩트
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-orange-500/10 to-transparent">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-orange-500">90%</div>
                  <div className="text-sm text-muted-foreground">설정 시간 단축</div>
                  <div className="text-xs text-muted-foreground mt-1">30-60분 → 1분 이내로 개선</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-500/10 to-transparent">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-green-500">30+</div>
                  <div className="text-sm text-muted-foreground">라이브러리 자동화</div>
                  <div className="text-xs text-muted-foreground mt-1">모든 RN 라이브러리 대응</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500/10 to-transparent">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-blue-500">0</div>
                  <div className="text-sm text-muted-foreground">빌드 오류 발생</div>
                  <div className="text-xs text-muted-foreground mt-1">100% 정확한 설정 적용</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500/10 to-transparent">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-purple-500">1일</div>
                  <div className="text-sm text-muted-foreground">개발 완료</div>
                  <div className="text-xs text-muted-foreground mt-1">빠른 해결책 제시</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-red-500/30 gap-2">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  Before
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• 30-60분 수동 설정 작업</p>
                <p>• 반복적인 빌드 실패 오류 발생</p>
                <p>• 복잡한 문서와 과정</p>
                <p>• AGP 7.0+ 호환성 문제</p>
              </CardContent>
            </Card>

            <Card className="border-green-500/30 gap-2">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  After
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• 1분 이내 자동 완료</p>
                <p>• 실패 오류 완전 제거</p>
                <p>• 원클릭 개발환경 구성</p>
                <p>• Gradle 7.0+ 호환성 확보</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">정량적 비즈니스 임팩트</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center flex flex-col items-center">
                  <div className="text-2xl font-bold text-orange-500">29-59분</div>
                  <div className="text-xs text-muted-foreground">개발자 1명당 시간 절약</div>
                </div>
                <div className="text-center flex flex-col items-center">
                  <div className="text-2xl font-bold text-blue-500">15시간+</div>
                  <div className="text-xs text-muted-foreground">팀 월 평균 절감</div>
                </div>
                <div className="text-center flex flex-col items-center">
                  <div className="text-2xl font-bold text-green-500">100%</div>
                  <div className="text-xs text-muted-foreground">AGP 7.0+ 호환성 확보</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-transparent gap-2">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Users className="w-4 h-4 text-green-500" />
                팀 피드백
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="italic text-sm text-muted-foreground border-l-4 border-green-500 pl-4">
                &quot;Gradle 업그레이드로 인한 빌드 오류가 완전히 사라졌습니다. 신규 라이브러리 추가할 때마다 걱정하지 않아도 되어서 정말 큰 도움이 됩니다.&quot;
              </blockquote>
              <p className="text-xs text-muted-foreground mt-2 text-right">- 개발팀</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">개발 경험 개선</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <span>기존: 수동 작업</span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-green-500">개선: 자동화 도구</span>
              </div>
              <Progress value={90} className="h-3 mt-2 [&>div]:bg-green-500" />
              <p className="text-xs text-muted-foreground mt-2">
                90% 시간 절약 및 휴먼 에러 완전 제거
              </p>
            </CardContent>
          </Card>

         
          </div>
        )}
        </div>
      </div>
    </div>
    </>
  )
}