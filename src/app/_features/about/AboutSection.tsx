'use client'

import { useRef } from 'react'
import { Github, Linkedin, Globe, Mail, FileDown } from 'lucide-react'
import Image from 'next/image'
import { useAboutAnimation } from './useAboutAnimation'

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useAboutAnimation(sectionRef)

  return (
    <section ref={sectionRef} className="about-section min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="about-title text-7xl font-bold mb-20">About me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Profile & Description */}
          <div className="about-left space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-purple-400/30">
                  <Image
                    src="/images/profile.JPG"
                    alt="정도윤 프로필 사진"
                    fill
                    sizes="168px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">정도윤 / Jeong Do Youn</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <Mail className="w-4 h-4" />
                    <p>doyounjeong0@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/ooyuo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/80 hover:text-purple-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/doyunjeong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/80 hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://ooyuo.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/80 hover:text-purple-400 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-sm">Blog</span>
                </a>
                <a
                  href="/documents/resume.pdf"
                  download="정도윤_이력서.pdf"
                  className="flex items-center gap-2 text-foreground/80 hover:text-purple-400 transition-colors"
                >
                  <FileDown className="w-5 h-5" />
                  <span className="text-sm">Resume</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">DESCRIPTION</h4>
              <p className="text-foreground/80 leading-relaxed">
                확장 가능한 아키텍처와 재사용 컴포넌트 개발로 최적화된 앱 서비스를 구축합니다.
                <br />
                조직의 브랜드를 강화하기 위해 도전적인 과제도 능숙하게 해결합니다.
              </p>
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="about-right">
            <h4 className="text-xl font-semibold mb-6">EDUCATION</h4>
            <div className="space-y-4 text-foreground/80">
              <div className="education-item border-l-2 border-purple-400 pl-4">
                <p className="font-semibold">항해99 - 플러스 프론트엔드 3기</p>
                <p className="text-sm text-muted-foreground">2024.09 ~ 2024.12</p>
              </div>
              <div className="education-item border-l-2 border-purple-400 pl-4">
                <p className="font-semibold">고려사이버대학교 - 소프트웨어공학</p>
                <p className="text-sm text-muted-foreground">2019.03 ~ 2020.02 (학사)</p>
              </div>
              <div className="education-item border-l-2 border-purple-400 pl-4">
                <p className="font-semibold">비트캠프 - 클라우드 컴퓨팅 기반 웹 프로그래밍</p>
                <p className="text-sm text-muted-foreground">2018.11 ~ 2019.01</p>
              </div>
              <div className="education-item border-l-2 border-purple-400 pl-4">
                <p className="font-semibold">한양여자대학교 - 컴퓨터 정보</p>
                <p className="text-sm text-muted-foreground">2013.03 ~ 2017.02 (전문학사)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-bottom grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Tech Stack */}
          <div>
            <h4 className="text-xl font-semibold mb-6">TECH STACK</h4>
            <div className="flex flex-wrap gap-3">
              {['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS',
                'styled-components', 'Redux', 'Zustand', 'TanStack Query', 'Jest',
                'Git', 'react-testing-library', 'vitest', 'Babel', 'axios', 'python', 'node'].map((tech) => (
                <span
                  key={tech}
                  className="tech-tag px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-black rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Certification & Awards */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold mb-6">CERTIFICATION</h4>
              <div className="space-y-2 text-foreground/80">
                <p>• 정보처리산업기사 (2018.03)</p>
                <p>• 컴퓨터그래픽스운용기능사 (2013.12)</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6">AWARDS</h4>
              <div className="space-y-2 text-foreground/80">
                <p className="font-semibold">하드웨어 연동 메모 프린팅 서비스 개발</p>
                <p className="text-sm">KT-DS 산업체상 수상</p>
                <p className="text-sm text-muted-foreground">
                  • 모바일앱에서 작성된 그림/텍스트를 아두이노 프린터로 출력하는 서비스 개발
                  <br />
                  • Android 앱 UI/UX 및 백엔드 서버 단독 설계/구현
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
