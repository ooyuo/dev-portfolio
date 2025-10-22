import HeroSection from './_features/hero/HeroSection'
import AboutSection from './_features/about/AboutSection'
import ProjectsSection from './_features/projects/ProjectsSection'
import DeveloperExperienceSection from './_features/developer-experience/DeveloperExperienceSection'

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