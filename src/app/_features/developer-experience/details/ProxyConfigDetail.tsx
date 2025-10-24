'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Network, Package, TrendingUp, CheckCircle } from 'lucide-react'
import { CustomDialogHeader, CustomDialogTitle, CustomDialogDescription } from '../../../_components/common/CustomDialog'

export default function ProxyConfigDetail() {
  return (
    <>
      <CustomDialogHeader className="px-6 pt-6 pb-0 flex-shrink-0">
        <CustomDialogTitle className="text-2xl font-bold flex items-center gap-2">
          <Network className="w-6 h-6" />
          Development Proxy Configuration
        </CustomDialogTitle>
        <CustomDialogDescription className="sr-only">
          로컬 개발 환경을 위한 멀티 서버 프록시 설정 및 경로 재작성 프로젝트
        </CustomDialogDescription>
      </CustomDialogHeader>

      {/* 헤더 */}
      <div className="px-6 pt-4 pb-4 flex-shrink-0">
        <div className="bg-gradient-to-br from-green-500/10 to-transparent rounded-xl p-6 border border-green-500/20">
          <div className="flex items-start gap-3 mb-4">
            <Network className="w-6 h-6 text-green-500 mt-1" />
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">Development Proxy Configuration</h1>
              <p className="text-muted-foreground">
                로컬 개발 환경을 위한 멀티 서버 프록시 설정 및 경로 재작성
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-0 bg-card/50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-500">8개</div>
                <div className="text-xs text-muted-foreground">API 엔드포인트</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-card/50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-500">100%</div>
                <div className="text-xs text-muted-foreground">CORS 해결</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-card/50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-500">0</div>
                <div className="text-xs text-muted-foreground">설정 오류</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-card/50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-500">즉시</div>
                <div className="text-xs text-muted-foreground">환경 전환</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* 스크롤 가능 영역 */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="space-y-6">
          {/* 구현 내용 */}
          <Card className="gap-2">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Package className="w-4 h-4 text-green-500" />
                구현 내용
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="rounded-lg bg-gradient-to-r from-green-500/10 to-transparent p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <h4 className="font-medium text-sm">멀티 서버 프록시</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    8개 마이크로서비스 API를 로컬에서 단일 포트로 통합
                  </p>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <h4 className="font-medium text-sm">경로 재작성</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    /car-api → /api 등 통일된 백엔드 경로로 자동 변환
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 기술적 접근 */}
          <Card className="gap-2">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Network className="w-4 h-4 text-green-500" />
                기술적 접근
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-2">Vite 서버 프록시 설정</h4>
                  <div className="bg-muted rounded-lg p-3 font-mono text-xs text-foreground">
                    <div className="space-y-1">
                      <div className="text-muted-foreground">{/* vite.config.ts */}</div>
                      <div>server: isDevelop ? {'{'}</div>
                      <div className="ml-4">proxy: {'{'}</div>
                      <div className="ml-8">&apos;/car-api&apos;: {'{'}</div>
                      <div className="ml-12">target: process.env.VITE_SERVER_URL_CAR,</div>
                      <div className="ml-12">changeOrigin: true,</div>
                      <div className="ml-12">rewrite: (path) =&gt; path.replace(/^\/car-api/, &apos;/api&apos;)</div>
                      <div className="ml-8">{'}'}</div>
                      <div className="ml-4">{'}'}</div>
                      <div>{'}'} : undefined</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm mb-2">주요 엔드포인트</h4>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs">
                      <Badge variant="outline" className="font-mono text-xs">car-api</Badge>
                      <span className="text-muted-foreground">→ 자동차 견적 서비스</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Badge variant="outline" className="font-mono text-xs">auth-api</Badge>
                      <span className="text-muted-foreground">→ 인증/권한 서비스</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Badge variant="outline" className="font-mono text-xs">estimate-api</Badge>
                      <span className="text-muted-foreground">→ 견적 관리 서비스</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Badge variant="outline" className="font-mono text-xs">counsel-api</Badge>
                      <span className="text-muted-foreground">→ 상담 관리 서비스</span>
                    </div>
                    <div className="text-xs text-muted-foreground ml-1">+ 4개 추가 마이크로서비스</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 개선 효과 */}
          <Card className="gap-2 bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                개발 경험 개선
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">CORS 에러</span>
                    <span className="font-mono font-medium text-green-500">0건</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">환경 전환</span>
                    <span className="font-mono font-medium">즉시</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">설정 시간</span>
                    <span className="font-mono font-medium">1회</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">API 통합</span>
                    <span className="font-mono font-medium text-green-500">8개</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 기술 스택 */}
          <Card className="gap-2">
            <CardHeader>
              <CardTitle className="text-base">사용 기술 스택</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-secondary text-secondary-foreground">Vite</Badge>
                <Badge className="bg-secondary text-secondary-foreground">Proxy Server</Badge>
                <Badge className="bg-secondary text-secondary-foreground">HTTP Rewrite</Badge>
                <Badge className="bg-secondary text-secondary-foreground">CORS</Badge>
                <Badge className="bg-secondary text-secondary-foreground">Environment Variables</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
