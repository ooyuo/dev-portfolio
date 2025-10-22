import { useEffect, RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useProjectsAnimation = (sectionRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.projects-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.projects-header',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Cards stagger animation - marginTop 사용하여 hover transform과 충돌 방지
      gsap.fromTo('.project-card',
        { marginTop: 60, opacity: 0 },
        {
          marginTop: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [sectionRef])
}
