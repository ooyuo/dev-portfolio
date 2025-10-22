'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CustomDialogHeader, CustomDialogTitle } from '../../../_components/common/CustomDialog'
import {
  MessageSquare,
  Users,
  Calendar,
  Target,
  Lightbulb,
  GitBranch,
  Code2,
  Shield,
  CheckCircle2,
  ArrowRight,
  Brain,
  Database,
  Workflow,
  User,
  Bell,
  TrendingUp,
  Zap,
  Lock
} from 'lucide-react'

export default function ChatbotProjectDetail() {
  return (
    <>
      {/* DialogTitle for accessibility */}
      <CustomDialogHeader className="px-6 pt-6 pb-4 flex-shrink-0 border-b">
        <CustomDialogTitle className="text-2xl font-bold flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          금융권 대화형 챗봇 만들기
        </CustomDialogTitle>
        <p className="text-sm text-muted-foreground mt-2">
          금융 상품 추천하고 계좌 조회하고 만기 알림 보내는 챗봇 개발
        </p>
      </CustomDialogHeader>

      {/* 스크롤 가능 영역 */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="space-y-6 pt-6">
          {/* 프로젝트 개요 */}
          <section>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-indigo-500" />
              프로젝트 개요
            </h3>

            {/* 기본 정보 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <Card className="border-2 border-indigo-500 dark:border-indigo-500">
                <CardContent className="pt-4 text-center">
                  <Calendar className="w-5 h-5 mx-auto mb-2 text-indigo-600 dark:text-indigo-400" />
                  <div className="text-xs font-medium text-foreground/70 mb-1">프로젝트 기간</div>
                  <div className="text-sm font-bold text-foreground">11개월</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500 dark:border-purple-500">
                <CardContent className="pt-4 text-center">
                  <User className="w-5 h-5 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                  <div className="text-xs font-medium text-foreground/70 mb-1">역할</div>
                  <div className="text-sm font-bold text-foreground">대화모델러</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-500 dark:border-pink-500">
                <CardContent className="pt-4 text-center">
                  <Users className="w-5 h-5 mx-auto mb-2 text-pink-600 dark:text-pink-400" />
                  <div className="text-xs font-medium text-foreground/70 mb-1">팀 구성</div>
                  <div className="text-sm font-bold text-foreground">팀 프로젝트</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-teal-500 dark:border-teal-500">
                <CardContent className="pt-4 text-center">
                  <MessageSquare className="w-5 h-5 mx-auto mb-2 text-teal-600 dark:text-teal-400" />
                  <div className="text-xs font-medium text-foreground/70 mb-1">도메인</div>
                  <div className="text-sm font-bold text-foreground">금융</div>
                </CardContent>
              </Card>
            </div>

         
          </section>

          {/* 기술적 과제 */}
          <section>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-500" />
              기술적 과제
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0">
                      <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-2">대화 신뢰성 확보</div>
                      <p className="text-sm text-muted-foreground">
                        계좌, 대출, 만기일 같은 금융 정보를 정확하게 전달하고 대화 맥락 유지
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0">
                      <User className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-2">개인화 로직 구현</div>
                      <p className="text-sm text-muted-foreground">
                        로그인한 사용자의 상품, 계좌 정보를 보고 맞춤형으로 대화 분기
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex-shrink-0">
                      <GitBranch className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-2">복잡한 시나리오 관리</div>
                      <p className="text-sm text-muted-foreground">
                        고객 유형에 따라 대화 흐름을 다르게 분기 처리
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 솔루션 아키텍처 */}
          <section>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Workflow className="w-5 h-5 text-indigo-500" />
              솔루션 아키텍처
            </h3>

            <div className="space-y-4">
              {/* Dap Talk 기반 대화 구조 */}
              <Card className="border-l-4 border-l-indigo-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-indigo-500" />
                    Dap Talk 기반 대화 구조 설계
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">대화 흐름을 트리 구조로 만들어서 복잡한 시나리오 관리</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">금융 도메인에 맞는 대화 패턴 설계</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* JavaScript 모듈 연동 */}
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-purple-500" />
                    JavaScript 모듈 연동
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">로그인한 사용자 정보(나이, 보유 상품, 만기일)를 받아서 분기 처리</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">조건에 따라 대화 흐름 제어 (예: 만기 30일 전인 고객에게 자동 연장 안내 먼저 보여줌)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 데이터 모델링 */}
              <Card className="border-l-4 border-l-pink-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Database className="w-4 h-4 text-pink-500" />
                    데이터 모델링
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">고객 정보와 전화 상담 데이터를 분석</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">예금, 대출, 공통 시나리오를 각각 개발</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 구현 상세 */}
          <section>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-500" />
              구현 상세
            </h3>

            <div className="space-y-3">
              {/* 상품 추천 시나리오 */}
              <Card className="border-2 border-indigo-200 dark:border-indigo-800">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">상품 추천 시나리오</div>
                      <p className="text-sm text-muted-foreground">사용자 맞춤형 금융 상품 추천</p>
                    </div>
                  </div>
                  <div className="ml-14 space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                      <span>사용자 보유 상품 기반 추천</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                      <span>나이·리스크 성향별 대화 흐름 분기</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 계좌 조회 시나리오 */}
              <Card className="border-2 border-purple-200 dark:border-purple-800">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">계좌 조회 시나리오</div>
                      <p className="text-sm text-muted-foreground">인증 기반 개인 정보 조회</p>
                    </div>
                  </div>
                  <div className="ml-14 space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <span>로그인 사용자 인증 상태 확인</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <span>계좌 목록을 대화형 응답으로 구성</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 만기 알림 시나리오 */}
              <Card className="border-2 border-pink-200 dark:border-pink-800">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                      <Bell className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">만기 알림 시나리오</div>
                      <p className="text-sm text-muted-foreground">시기별 맞춤 알림 제공</p>
                    </div>
                  </div>
                  <div className="ml-14 space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                      <span>D-30, D-7, D-1 조건에 따라 다른 어조·문장 구조 적용</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                      <span>단순 알림에서 상담 연결까지의 자연스러운 흐름</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                      <span>대화모델 내 JavaScript로 분기 로직 작성해 동적 응답 제어</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 기술 스택 */}
          <section>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-500" />
              사용 기술
            </h3>

            <Card>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700' },
                    { name: 'Dap Talk', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700' },
                    { name: 'Data Modeling', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-300 dark:border-purple-700' },
                    { name: 'Dialogue Flow Design', color: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 border-pink-300 dark:border-pink-700' }
                  ].map((tech) => (
                    <Badge key={tech.name} className={tech.color}>
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

       
        </div>
      </div>
    </>
  )
}
