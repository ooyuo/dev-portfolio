'use client'

import { useRef, useState } from 'react'
import { useHeroAnimation, handleScrollToAbout } from './useHeroAnimation'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)

  useHeroAnimation(containerRef, scrollIndicatorRef, () => setIsReady(true))

  return (
    <section className="hero-section h-screen flex items-center justify-center relative">
      <div className="container w-[90vw] flex flex-col items-center" ref={containerRef}>
        <h1 className="text-6xl font-bold flex flex-wrap items-center justify-center gap-1" style={{ opacity: isReady ? 1 : 0 }}>
          <span className="word">I&apos;m</span>
          <span className="word">a</span>
          <span className="word">frontend</span>
          <span className="word">engineer</span>
        </h1>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 scroll-indicator cursor-pointer hover:opacity-80 transition-opacity"
        style={{ opacity: isReady ? 1 : 0 }}
        onClick={handleScrollToAbout}
      >
        <p className="text-sm text-muted-foreground font-medium tracking-wider uppercase">Scroll to explore</p>

        {/* Animated Mouse Icon */}
        <div className="mouse-container w-7 h-11 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-2">
          <div className="mouse-scroll w-1 h-2 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
        </div>

        {/* Chevron Down */}
        <svg
          className="w-5 h-5 text-muted-foreground/60 chevron-down"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <style jsx>{`
        :global(.word) {
          border: 1.5px dashed rgba(244, 114, 182, 0.5);
          background-image: linear-gradient(to right, rgb(192, 132, 252), rgb(244, 114, 182));
          background-size: 100%;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
          background-clip: text;
          padding: 1rem;
          margin: 0.25rem;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(-100px);
        }

        :global(.dark .word) {
          border-color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  )
}
