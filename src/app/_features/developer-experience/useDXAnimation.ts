import { useEffect, RefObject } from 'react'

export const useDXAnimation = (sectionRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!sectionRef.current) return

    // GSAP 동적 import - 초기 렌더링 차단 방지 및 모바일 호환성 개선
    let ctx: { revert: () => void } | null = null

    import('gsap').then(async ({ default: gsap }) => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // Title animation with gradient effect
        gsap.fromTo('.dx-header',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.dx-header',
              start: 'top 90%',
              toggleActions: 'play none none reset'
            }
          }
        )

        // Accordion items alternating animation with rotation
        gsap.fromTo('.dx-item:nth-child(odd)',
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.dx-accordion',
              start: 'top 85%',
              toggleActions: 'play none none reset'
            }
          }
        )

        gsap.fromTo('.dx-item:nth-child(even)',
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.dx-accordion',
              start: 'top 85%',
              toggleActions: 'play none none reset'
            }
          }
        )

        // Gradient top bars animation
        gsap.fromTo('.dx-item .h-1',
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'left',
            duration: 0.6,
            stagger: 0.1,
            delay: 0.3,
            scrollTrigger: {
              trigger: '.dx-accordion',
              start: 'top 85%',
              toggleActions: 'play none none reset'
            }
          }
        )
      }, sectionRef)
    }).catch((error) => {
      console.error('GSAP 로드 실패:', error)
    })

    return () => {
      if (ctx) ctx.revert()
    }
  }, [sectionRef])
}
