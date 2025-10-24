'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Package, TrendingUp, CheckCircle } from 'lucide-react'
import { CustomDialogHeader, CustomDialogTitle, CustomDialogDescription } from '../../../_components/common/CustomDialog'

export default function BuildOptimizationDetail() {
  return (
    <>
      <CustomDialogHeader className="px-6 pt-6 pb-0 flex-shrink-0">
        <CustomDialogTitle className="text-2xl font-bold flex items-center gap-2">
          <Zap className="w-6 h-6" />
          Build Optimization Pipeline
        </CustomDialogTitle>
        <CustomDialogDescription className="sr-only">
          Vite 기반 멀티 레이어 빌드 최적화로 번들 사이즈 및 로딩 성능 개선 프로젝트
        </CustomDialogDescription>
      </CustomDialogHeader>

      {/* 헤더 */}
      <div className="px-6 pt-4 pb-4 flex-shrink-0">
        <div className="bg-gradient-to-br from-yellow-500/10 to-transparent rounded-xl p-6 border border-yellow-500/20">
          <div className="flex items-start gap-3 mb-4">
            <Zap className="w-6 h-6 text-yellow-500 mt-1" />
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">Build Optimization Pipeline</h1>
              <p className="text-muted-foreground">
                Vite 기반 멀티 레이어 빌드 최적화로 번들 사이즈 및 로딩 성능 개선
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-0 bg-card/50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-yellow-500 dark:text-yellow-500">70%</div>
                <div className="text-xs text-muted-foreground">번들 크기 감소</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-card/50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-500">50%</div>
                <div className="text-xs text-muted-foreground">초기 로딩 개선</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-card/50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-500">95+</div>
                <div className="text-xs text-muted-foreground">Lighthouse 점수</div>
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
                <Package className="w-4 h-4 text-yellow-500" />
                구현 내용
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-yellow-500" />
                    <h4 className="font-medium text-sm">이미지 최적화</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    vite-plugin-imagemin으로 PNG/JPG/SVG 압축 및 WebP 변환
                  </p>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-green-500/10 to-transparent p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <h4 className="font-medium text-sm">Gzip/Brotli 압축</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    vite-plugin-compression으로 빌드 결과물 압축 (.gz, .br)
                  </p>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <h4 className="font-medium text-sm">벤더 청크 분리</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    manualChunks로 node_modules 분리하여 캐싱 효율 증대
                  </p>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    <h4 className="font-medium text-sm">esbuild 최소화</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    빠른 빌드 속도와 효율적인 코드 압축
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 성과 */}
          <Card className="gap-2 bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                최적화 성과
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">번들 크기</span>
                    <span className="font-mono font-medium">2.1MB → 630KB</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">초기 로딩</span>
                    <span className="font-mono font-medium">3.2s → 1.6s</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">이미지 용량</span>
                    <span className="font-mono font-medium">65% 감소</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Lighthouse</span>
                    <span className="font-mono font-medium text-green-500">96.8점</span>
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
                <Badge className="bg-secondary text-secondary-foreground">esbuild</Badge>
                <Badge className="bg-secondary text-secondary-foreground">Rollup</Badge>
                <Badge className="bg-secondary text-secondary-foreground">ImageMin</Badge>
                <Badge className="bg-secondary text-secondary-foreground">Gzip</Badge>
                <Badge className="bg-secondary text-secondary-foreground">Brotli</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
