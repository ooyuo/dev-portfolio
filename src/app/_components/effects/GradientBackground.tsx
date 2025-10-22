'use client'

import { useEffect, useRef } from 'react'

export default function GradientBackground() {
  const gradientRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gradient = gradientRef.current
    if (!gradient) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      gradient.style.setProperty('--mouse-x', `${x * 100}%`)
      gradient.style.setProperty('--mouse-y', `${y * 100}%`)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        ref={gradientRef}
        className="gradient fixed inset-0 -z-10 opacity-30"
        style={{
          '--mouse-x': '50%',
          '--mouse-y': '50%',
        } as React.CSSProperties}
      />
      <div className="noise fixed inset-0 -z-10 opacity-[0.02] pointer-events-none" />
    </>
  )
}