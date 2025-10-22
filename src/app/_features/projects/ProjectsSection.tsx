'use client'

import { useState, useRef } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CustomDialog, CustomDialogContent, CustomDialogHeader, CustomDialogTitle } from '../../_components/common/CustomDialog'
import { ArrowRight, ExternalLink, Github, Calendar, Users } from 'lucide-react'
import ProjectDetail from './details/ProjectDetail'
import LegacyDMSProjectDetail from './details/LegacyDMSProjectDetail'
import NativeWebviewProjectDetail from './details/NativeWebviewProjectDetail'
import GifticonProjectDetail from './details/GifticonProjectDetail'
import ModealPointProjectDetail from './details/ModealPointProjectDetail'
import ChatbotProjectDetail from './details/ChatbotProjectDetail'
import { useProjectsAnimation } from './useProjectsAnimation'

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  period: string
  role: string
  team: string
  thumbnail?: string
  technologies: string[]
  highlights: string[]
  githubUrl?: string
  liveUrl?: string
  detailComponent?: React.ReactNode
}

const projects: Project[] = [
  {
    id: 'gifticon-management',
    title: '기프티콘 관리 시스템',
    subtitle: '대용량 데이터 처리 관리자 웹 앱',
    description: '스마트스토어 연동 기반의 대량 상품/주문/권한 관리가 가능한 관리자 웹 앱',
    period: '2025.01 - 2025.09',
    role: 'Frontend Engineer',
    team: '프론트엔드 1명, 백엔드 1명, 기획/디자인 1명',
    technologies: ['React', 'TypeScript', 'React Router', 'Zustand', 'TanStack Query', 'TailwindCSS', 'Vite', 'Jest'],
    highlights: [
      '대용량 이미지/데이터 최적화',
      '실시간 검색·필터·일괄처리',
      'RBAC 기반 권한 관리',
      '운영 자동화 시스템'
    ],
    detailComponent: <GifticonProjectDetail />
  },
  {
    id: 'naver-lotte-car',
    title: '네이버/롯데 자동차 견적 플랫폼',
    subtitle: '모노레포 기반 멀티 브랜드 플랫폼',
    description: '동일한 기능을 제공하는 두 개의 브랜드 앱을 모노레포 아키텍처로 효율적으로 구축한 프로젝트',
    period: '2024.10 - 2024.12',
    role: 'Frontend Engineer',
    team: '프론트엔드 3명, 백엔드 2명',
    technologies: ['TypeScript', 'React', 'pnpm workspace', 'TailwindCSS', 'Jest', 'Babel'],
    highlights: [
      '개발 시간 50% 단축',
      'Lighthouse 평균 96.8점 달성',
      '일평균 30-40건 상담 신청',
      '단일 코드베이스로 2개 브랜드 관리'
    ],
    detailComponent: <ProjectDetail />
  },
  {
    id: 'native-webview-navigation',
    title: '네이티브-웹뷰 통합 내비게이션 시스템 구축',
    subtitle: '실제 이력 기반 네비게이션',
    description: '하드코딩된 PHP 웹사이트를 React Native 네이티브 내비게이션으로 전환하여 자연스러운 앱 경험 구현',
    period: '2024.03 - 2024.05',
    role: 'Frontend Engineer',
    team: '웹뷰 → 네이티브',
    technologies: ['React Native', 'React Navigation', 'TypeScript', 'Deep Linking', 'Navigation Stack', 'Push Notification'],
    highlights: [
      '100% 내비게이션 오류 제거',
      '85% 사용자 불만 감소',
      '60% Push 전환율 개선',
      '자연스러운 앱 경험'
    ],
    detailComponent: <NativeWebviewProjectDetail />
  },
  {
    id: 'legacy-dms-integration',
    title: '레거시 관리 시스템 React 마이그레이션 및 통합 DMS 구축',
    subtitle: '모던 DMS 아키텍처 구축',
    description: 'Java 레거시 관리 시스템을 React로 전환해, 통합 DMS 플랫폼으로 운영 효율을 개선',
    period: '2024.01 - 2024.12',
    role: 'Frontend Engineer',
    team: 'Java → React 마이그레이션',
    technologies: ['React', 'TypeScript', 'Java (Legacy)', 'Iframe Integration', 'Component Architecture', 'Modern Build Tools'],
    highlights: [
      '개발 시간 단축',
      '60% 개발 시간 단축',
      '80% 버그 발생률 감소',
      '1개 통합 DMS 플랫폼',
      '100% 기능 호환성'
    ],
    detailComponent: <LegacyDMSProjectDetail />
  },
  {
    id: 'modil-point-system',
    title: '모딜 포인트시스템 개발',
    subtitle: '대고객 앱 + CMS 통합 구축',
    description: '대고객 앱(포인트 조회/적립/사용)과 JSP 기반 CMS(포인트 운영/승인/정산)를 동시에 구축',
    period: '2023.09 - 2023.12',
    role: 'Frontend Engineer',
    team: '기획 1명, 프론트엔드 1명, 백엔드 1명',
    technologies: ['JavaScript', 'jQuery', 'JSP', 'HTML/CSS', 'GitLab', 'Figma', 'Jira'],
    highlights: [
      '레거시 환경 안정적 구축',
      '포인트 이중 검증 플로우',
      'RBAC 기반 권한 관리',
      '추천/초대 기능 확장'
    ],
    detailComponent: <ModealPointProjectDetail />
  },
  {
    id: 'financial-chatbot',
    title: '금융권 대화형 챗봇 구축',
    subtitle: 'AI 기반 금융 상담 자동화',
    description: '금융 상품 추천, 계좌 조회, 만기 알림 등 대화형 금융 상담을 자동화한 AI 챗봇 시스템',
    period: '2021.04 - 2022.03',
    role: 'Dialogue Modeler',
    team: '팀 프로젝트',
    technologies: ['JavaScript', 'Dap Talk', 'Data Modeling', 'Dialogue Flow Design'],
    highlights: [
      '인증 사용자 개인화',
      '금융 도메인 대화 설계',
      '시나리오 기반 모델링',
      '데이터 기반 응답 품질 개선'
    ],
    detailComponent: <ChatbotProjectDetail />
  }
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useProjectsAnimation(sectionRef)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="projects-header text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent mb-2">
            Projects
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            실제 비즈니스 문제를 해결하며 만든 프로젝트들입니다
          </p>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="project-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col h-full"
              onClick={() => handleProjectClick(project)}
            >
              {/* 그라디언트 탑 보더 */}
              <div className="h-1 bg-gradient-to-r from-primary via-cyan-400 to-teal-500" />

              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="font-medium text-base">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 pt-0 flex-grow">
                <p className="text-sm text-foreground/80 line-clamp-2">
                  {project.description}
                </p>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Users className="w-4 h-4" />
                    <span>{project.role}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-0.5">
                  {project.highlights.slice(0, 2).map((highlight, index) => (
                    <div key={index} className="flex items-start gap-1">
                      <span className="text-primary mt-0.5 text-sm">•</span>
                      <span className="text-sm text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-3 mt-auto">
                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-primary/5 text-sm py-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleProjectClick(project)
                  }}
                >
                  자세히 보기
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* 프로젝트 상세 모달 */}
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
            <div className="h-full flex flex-col">
              <CustomDialogHeader className="px-6 pt-6 pb-4 flex-shrink-0">
                <CustomDialogTitle className="text-2xl">{selectedProject?.title}</CustomDialogTitle>
              </CustomDialogHeader>
              <div className="flex-1 overflow-y-auto px-6 pb-6">
                <div className="space-y-2">
                  <p className="text-muted-foreground">{selectedProject?.description}</p>
                  <div className="flex gap-4">
                    {selectedProject?.githubUrl && (
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    )}
                    {selectedProject?.liveUrl && (
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </CustomDialogContent>
      </CustomDialog>
    </section>
  )
}