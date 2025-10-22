'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // 초기 테마 설정 (localStorage에서 가져오기)
    const savedTheme = localStorage.getItem('theme')
    const initialIsDark = savedTheme !== 'light'
    setIsDark(initialIsDark)

    if (!initialIsDark) {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    if (newIsDark) {
      // 다크 모드
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      // 라이트 모드
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 border-2"
        aria-label="테마 전환"
      >
        {isDark ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-blue-600" />
        )}
      </Button>
    </div>
  )
}
