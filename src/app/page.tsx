import dynamic from 'next/dynamic'
import HeroSection from './_features/hero/HeroSection'

// Lazy load sections below the fold
const AboutSection = dynamic(() => import('./_features/about/AboutSection'), {
  loading: () => <div className="min-h-screen" />,
})
const ProjectsSection = dynamic(() => import('./_features/projects/ProjectsSection'), {
  loading: () => <div className="min-h-screen" />,
})
const DeveloperExperienceSection = dynamic(() => import('./_features/developer-experience/DeveloperExperienceSection'), {
  loading: () => <div className="min-h-screen" />,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <DeveloperExperienceSection />
    </main>
  );
}