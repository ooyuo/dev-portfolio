import { useEffect, RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useDXAnimation = (sectionRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Title animation with gradient effect
      gsap.from('.dx-header', {
        y: 30,
        opacity: 0.3,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.dx-header',
          start: 'top 90%',
          toggleActions: 'play none none reset'
        }
      })

      // Accordion items alternating animation with rotation
      gsap.from('.dx-item:nth-child(odd)', {
        x: -50,
        opacity: 0.3,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.dx-accordion',
          start: 'top 85%',
          toggleActions: 'play none none reset'
        }
      })

      gsap.from('.dx-item:nth-child(even)', {
        x: 50,
        opacity: 0.3,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.dx-accordion',
          start: 'top 85%',
          toggleActions: 'play none none reset'
        }
      })

      // Gradient top bars animation
      gsap.from('.dx-item .h-1', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        scrollTrigger: {
          trigger: '.dx-accordion',
          start: 'top 85%',
          toggleActions: 'play none none reset'
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [sectionRef])
}
