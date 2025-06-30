'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { typingContent, timerOptions } from '@/lib/data'
import { Selectors } from '@/components/typing-test/Selectors'
import { StatsCards } from '@/components/typing-test/StatsCards'
import { ContentCard } from '@/components/typing-test/ContentCard'
import { Controls } from '@/components/typing-test/Controls'
import { KeyDisplay } from '@/components/typing-test/KeyDisplay'
import { ResultsModal } from '@/components/typing-test/ResultsModal'

export default function TypingTestPage() {
  const [input, setInput] = useState('')
  const [startTime, setStartTime] = useState<number | null>(null)
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [errors, setErrors] = useState(0)
  const [timer, setTimer] = useState(60)
  const [isRunning, setIsRunning] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [lastPressedKey, setLastPressedKey] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('technologie')
  const [selectedTheme, setSelectedTheme] = useState('ia')
  const [useTimer, setUseTimer] = useState(true)

  const sampleText = typingContent[selectedCategory as keyof typeof typingContent].themes[selectedTheme as keyof typeof typingContent.technologie.themes]

  // Gestion du minuteur
  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isRunning && timer > 0 && !completed && useTimer) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1)
      }, 1000)
    } else if ((useTimer && timer === 0) || (!useTimer && input.length === sampleText.length)) {
      setIsRunning(false)
      setCompleted(true)
    }
    
    return () => clearInterval(interval)
  }, [isRunning, timer, completed, useTimer, input, sampleText])

  // Calcul des statistiques
  useEffect(() => {
    if (input.length > 0 && !startTime) {
      setStartTime(Date.now())
      setIsRunning(true)
    }

    if (input.length > 0 && startTime) {
      const timeElapsed = (Date.now() - startTime) / 60000
      const words = input.trim().split(/\s+/).length
      const currentWpm = Math.round(words / timeElapsed)
      setWpm(currentWpm)

      const correct = input.split('').filter((char, i) => char === sampleText[i]).length
      const currentAccuracy = Math.round((correct / input.length) * 100)
      setAccuracy(currentAccuracy)
      setErrors(input.length - correct)
    }
  }, [input, startTime, sampleText])

  const handleRestart = () => {
    setInput('')
    setStartTime(null)
    setWpm(0)
    setAccuracy(100)
    setErrors(0)
    setTimer(useTimer ? timer : 0)
    setIsRunning(false)
    setCompleted(false)
    setLastPressedKey(null)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    const firstTheme = Object.keys(typingContent[category as keyof typeof typingContent].themes)[0]
    setSelectedTheme(firstTheme)
    handleRestart()
  }

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme)
    handleRestart()
  }

  const handleTimerChange = (value: number) => {
    setTimer(value)
    setUseTimer(value !== 0)
    handleRestart()
  }

  // Gestion des touches pressées
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (completed) return
      
      if (e.key.length === 1 || e.key === 'Backspace' || e.key === ' ') {
        if (e.key === 'Backspace') {
          setInput(prev => prev.slice(0, -1))
          setLastPressedKey('⌫')
        } else if (e.key === ' ') {
          setInput(prev => prev + ' ')
          setLastPressedKey('␣')
        } else {
          setInput(prev => prev + e.key)
          setLastPressedKey(e.key.toUpperCase())
        }
        
        setTimeout(() => setLastPressedKey(null), 300)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [completed])

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <Selectors
          selectedCategory={selectedCategory}
          selectedTheme={selectedTheme}
          onCategoryChange={handleCategoryChange}
          onThemeChange={handleThemeChange}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cartes de stats à gauche */}
          <div className="lg:col-span-1">
            <StatsCards wpm={wpm} accuracy={accuracy} errors={errors} />
          </div>

          {/* Contenu au centre */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <ContentCard text={sampleText} input={input} />
          </div>

          {/* Contrôles à droite */}
          <div className="lg:col-span-1 flex flex-col items-end justify-between">
            <Controls 
              useTimer={useTimer}
              timer={timer}
              onTimerChange={handleTimerChange}
              onRestart={handleRestart}
            />
            <KeyDisplay lastPressedKey={lastPressedKey} />
          </div>
        </div>
      </motion.div>

      <ResultsModal 
        isOpen={completed}
        wpm={wpm}
        accuracy={accuracy}
        onRestart={handleRestart}
      />
    </div>
  )
}