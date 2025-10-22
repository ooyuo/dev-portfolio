'use client'

import { useState, useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CustomDialog, CustomDialogContent } from '../../_components/common/CustomDialog'
import { Wrench, ArrowRight, ChevronRight, Zap, Network } from 'lucide-react'
import DXProjectDetail from './details/DXProjectDetail'
import BuildOptimizationDetail from './details/BuildOptimizationDetail'
import ProxyConfigDetail from './details/ProxyConfigDetail'
import { useDXAnimation } from './useDXAnimation'
import { getColorClasses, getIconColorClass, getProgressColorClass } from '@/lib/colorUtils'

interface DXProject {
  id: string
  title: string
  subtitle: string
  description: string
  period: string
  icon: React.ReactNode
  color: string
  metrics: {
    primary: {
      value: string
      label: string
    }
    secondary?: {
      before: string
      after: string
      label: string
    }
  }
  impact: {
    value: number
    label: string
  }
  technologies: string[]
  detailComponent?: React.ReactNode
  isHero?: boolean
}

const dxProjects: DXProject[] = [
  {
    id: 'rn-gradle-migration',
    title: 'React Native Android Gradle 7.0+ Migration',
    subtitle: '30+ 라이브러리 namespace 자동화',
    description: 'Android Gradle Plugin 7.0+ 필수 namespace 요구사항으로 인한 30개 이상의 서드파티 라이브러리 빌드 실패 문제를 자동화 스크립트로 해결',
    period: '2024.05',
    icon: <Wrench className="w-5 h-5" />,
    color: 'orange',
    metrics: {
      primary: {
        value: '30+',
        label: '라이브러리 수정'
      },
      secondary: {
        before: '30-60분',
        after: '3분',
        label: '빌드 시간'
      }
    },
    impact: {
      value: 90,
      label: '시간 단축'
    },
    technologies: ['Node.js', 'TypeScript', 'React Native', 'Android Gradle', 'npm scripts', 'Shell Script'],
    detailComponent: <DXProjectDetail />,
    isHero: true
  },
  {
    id: 'build-optimization',
    title: 'Build Optimization Pipeline',
    subtitle: 'Vite 멀티 레이어 최적화',
    description: '이미지 압축, Gzip/Brotli 압축, 벤더 청크 분리, esbuild 최소화를 포함한 멀티 레이어 빌드 최적화로 번들 사이즈 및 로딩 성능 개선',
    period: '2024.11',
    icon: <Zap className="w-5 h-5" />,
    color: 'yellow',
    metrics: {
      primary: {
        value: '70%',
        label: '번들 크기 감소'
      },
      secondary: {
        before: '2.1MB',
        after: '630KB',
        label: '번들 사이즈'
      }
    },
    impact: {
      value: 70,
      label: '성능 개선'
    },
    technologies: ['Vite', 'esbuild', 'Rollup', 'ImageMin', 'Gzip', 'Brotli'],
    detailComponent: <BuildOptimizationDetail />
  },
  {
    id: 'proxy-config',
    title: 'Development Proxy Configuration',
    subtitle: '멀티 서버 프록시 설정',
    description: '로컬 개발 환경을 위한 8개 마이크로서비스 API 프록시 통합 및 경로 재작성으로 CORS 이슈 해결',
    period: '2024.10',
    icon: <Network className="w-5 h-5" />,
    color: 'green',
    metrics: {
      primary: {
        value: '8개',
        label: 'API 통합'
      },
      secondary: {
        before: 'CORS 에러',
        after: '0건',
        label: '개발 환경'
      }
    },
    impact: {
      value: 100,
      label: 'CORS 해결'
    },
    technologies: ['Vite', 'Proxy Server', 'HTTP Rewrite', 'CORS'],
    detailComponent: <ProxyConfigDetail />
  }
]

export default function DeveloperExperienceSection() {
  const [selectedProject, setSelectedProject] = useState<DXProject | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useDXAnimation(sectionRef)

  const handleProjectClick = (project: DXProject) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  return (
    <section ref={sectionRef} className="pt-20 pb-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="dx-header text-center mb-12">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
            Developer Experience
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            팀 전체 생산성을 높인 개발 환경 개선 사례
          </p>
        </div>

        <Accordion type="multiple" className="dx-accordion w-full space-y-4">
          {dxProjects.map((project) => (
            <AccordionItem
              key={project.id}
              value={project.id}
              className={`dx-item border rounded-lg ${getColorClasses(project.color).split(' ')[2]}`}
            >
              <div className={`h-1 bg-gradient-to-r from-${project.color}-500 to-${project.color}-400 rounded-t-lg`} />

              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <span className={getIconColorClass(project.color)}>{project.icon}</span>
                    <div className="text-left">
                      <h3 className="font-semibold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {project.isHero && (
                      <Badge className={`${getColorClasses(project.color)} border`}>
                        Critical Fix
                      </Badge>
                    )}
                    <div className="text-right">
                      <div className={`text-xl font-bold ${getIconColorClass(project.color)}`}>
                        {project.metrics.primary.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {project.metrics.primary.label}
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border">
                      <div className={`text-2xl font-bold ${getIconColorClass(project.color)}`}>
                        {project.metrics.primary.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {project.metrics.primary.label}
                      </div>
                    </div>
                    <div className="p-4 rounded-lg border">
                      <div className="text-2xl font-bold text-green-500">
                        {project.impact.value}%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {project.impact.label}
                      </div>
                    </div>
                  </div>

                  {project.metrics.secondary && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{project.metrics.secondary.label}</span>
                        <span className="font-mono">
                          <span className="text-muted-foreground">{project.metrics.secondary.before}</span>
                          <ArrowRight className="w-4 h-4 inline mx-2" />
                          <span className="text-green-500">{project.metrics.secondary.after}</span>
                        </span>
                      </div>
                      <Progress value={project.impact.value} className={`h-2 ${getProgressColorClass(project.color)}`} />
                    </div>
                  )}

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">사용 기술</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <Badge variant="outline" className="w-fit">{project.period}</Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleProjectClick(project)}
                      className="gap-1.5 group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 animate-bounce" />
                     
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <CustomDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <CustomDialogContent
          className="p-0 flex flex-col"
          style={{
            maxWidth: '70vw',
            width: '70vw',
            maxHeight: '90vh',
            height: '90vh'
          }}
        >
          {selectedProject?.detailComponent ? (
            <div className="h-full overflow-hidden flex flex-col">
              {selectedProject.detailComponent}
            </div>
          ) : (
            <div className="h-full flex flex-col p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedProject?.title}</h2>
              <p className="text-muted-foreground">{selectedProject?.description}</p>
            </div>
          )}
        </CustomDialogContent>
      </CustomDialog>
    </section>
  )
}