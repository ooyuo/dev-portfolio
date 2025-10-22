import { useEffect, RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useAboutAnimation = (sectionRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Title animation - scale + fade
      gsap.from('.about-title', {
        scale: 0.8,
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.about-title',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })

      // Left column - slide from left with rotation
      gsap.from('.about-left', {
        x: -100,
        opacity: 0,
        rotation: -5,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-left',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      })

      // Left column children stagger
      gsap.from('.about-left > *', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.3,
        scrollTrigger: {
          trigger: '.about-left',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      })

      // Right column - slide from right with rotation
      gsap.from('.about-right', {
        x: 100,
        opacity: 0,
        rotation: 5,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-right',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      })

      // Education items individual animation
      gsap.from('.education-item', {
        x: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        scrollTrigger: {
          trigger: '.about-right',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      })

      // Tech stack tags
      gsap.from('.tech-tag', {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: '.about-bottom',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      })

      // Bottom sections fade and slide up
      gsap.from('.about-bottom > *', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-bottom',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [sectionRef])
}
