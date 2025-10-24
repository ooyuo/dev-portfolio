import { useEffect, RefObject } from 'react'

export const useHeroAnimation = (
  containerRef: RefObject<HTMLDivElement | null>,
  scrollIndicatorRef: RefObject<HTMLDivElement | null>,
  onReady: () => void
) => {
  useEffect(() => {
    if (!containerRef.current) return

    const words = containerRef.current.querySelectorAll('.word')

    // 즉시 onReady 호출
    onReady()

    // LCP 최적화: 애니메이션을 idle 상태에서 로드
    const loadAnimation = () => {
      // GSAP 동적 import - 초기 렌더링 차단 방지
      import('gsap').then(({ default: gsap }) => {
      // 초기 애니메이션 (부드럽게 등장)
      gsap.fromTo(words,
        {
          y: -20,
          opacity: 0,
          rotation: -5,
        },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'back.out(1.2)'
        }
      )

      // 지속적인 부드러운 움직임
      setTimeout(() => {
        words.forEach((word, index) => {
          gsap.to(word, {
            y: '+=15',
            rotation: '+=3',
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2
          })
        })
      }, 800)

      // Scroll to explore 애니메이션
      if (scrollIndicatorRef.current) {
        const mouseScroll = scrollIndicatorRef.current.querySelector('.mouse-scroll')
        const chevronDown = scrollIndicatorRef.current.querySelector('.chevron-down')

        // Mouse scroll dot animation
        if (mouseScroll) {
          gsap.to(mouseScroll, {
            y: 15,
            opacity: 0.3,
            duration: 1.2,
            repeat: -1,
            ease: 'power1.inOut'
          })
        }

        // Chevron bounce animation
        if (chevronDown) {
          gsap.to(chevronDown, {
            y: 8,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
          })
        }

        // Entire indicator bounce animation
        const bounceTl = gsap.timeline({ repeat: -1 })

        bounceTl
          .to(scrollIndicatorRef.current, {
            y: 0,
            duration: 0.1
          })
          .to(scrollIndicatorRef.current, {
            y: 20,
            duration: 0.3,
            ease: 'power2.in'
          })
          .to(scrollIndicatorRef.current, {
            y: 0,
            duration: 0.2,
            ease: 'power2.out'
          })
          .to(scrollIndicatorRef.current, {
            y: 10,
            duration: 0.15,
            ease: 'power2.in'
          })
          .to(scrollIndicatorRef.current, {
            y: 0,
            duration: 0.15,
            ease: 'power2.out'
          })
          .to(scrollIndicatorRef.current, {
            y: 5,
            duration: 0.1,
            ease: 'power2.in'
          })
          .to(scrollIndicatorRef.current, {
            y: 0,
            duration: 0.1,
            ease: 'power2.out'
          })
          .to(scrollIndicatorRef.current, {
            y: 0,
            duration: 1.5
          })
      }
      })
    }

    // requestIdleCallback으로 애니메이션 지연 (LCP 최적화)
    if ('requestIdleCallback' in window) {
      const win = window as Window & { requestIdleCallback: (callback: () => void, options?: { timeout: number }) => void }
      win.requestIdleCallback(loadAnimation, { timeout: 500 })
    } else {
      setTimeout(loadAnimation, 100)
    }
  }, [containerRef, scrollIndicatorRef, onReady])
}

export const handleScrollToAbout = () => {
  const aboutSection = document.querySelector('.about-section')
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
