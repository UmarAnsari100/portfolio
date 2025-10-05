'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VaporizeTextCycleProps {
  texts: string[]
  font?: {
    fontFamily?: string
    fontSize?: string
    fontWeight?: number
  }
  color?: string
  spread?: number
  density?: number
  animation?: {
    vaporizeDuration?: number
    fadeInDuration?: number
    waitDuration?: number
  }
  direction?: 'left-to-right' | 'right-to-left'
  alignment?: 'left' | 'center' | 'right'
  tag?: keyof JSX.IntrinsicElements
}

export default function VaporizeTextCycle({
  texts,
  font = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '48px',
    fontWeight: 700
  },
  color = 'rgb(255,255,255)',
  spread = 5,
  density = 5,
  animation = {
    vaporizeDuration: 2,
    fadeInDuration: 1,
    waitDuration: 0.5
  },
  direction = 'left-to-right',
  alignment = 'left',
  tag = 'h1'
}: VaporizeTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVaporizing, setIsVaporizing] = useState(false)
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    char: string
    delay: number
  }>>([])

  const textRef = useRef<HTMLElement>(null)
  const Component = tag as any

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVaporizing(true)
      
      // Create particles for current text
      if (textRef.current) {
        const text = texts[currentIndex]
        const newParticles = text.split('').map((char, index) => ({
          id: Math.random(),
          x: index * 30, // Approximate character width
          y: 0,
          char,
          delay: direction === 'left-to-right' ? index * 0.1 : (text.length - index) * 0.1
        }))
        setParticles(newParticles)
      }

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsVaporizing(false)
        setParticles([])
      }, (animation.vaporizeDuration || 2) * 1000)
    }, ((animation.vaporizeDuration || 2) + (animation.fadeInDuration || 1) + (animation.waitDuration || 0.5)) * 1000)

    return () => clearInterval(interval)
  }, [texts, currentIndex, animation, direction])

  return (
    <div 
      className="relative"
      style={{
        textAlign: alignment,
        minHeight: font.fontSize || '48px'
      }}
    >
      <AnimatePresence mode="wait">
        {!isVaporizing && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: animation.fadeInDuration || 1 }}
          >
            <Component
              ref={textRef}
              style={{
                fontFamily: font.fontFamily,
                fontSize: font.fontSize,
                fontWeight: font.fontWeight,
                color: color,
                margin: 0,
                lineHeight: 1.2
              }}
            >
              {texts[currentIndex]}
            </Component>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vapor particles */}
      <AnimatePresence>
        {isVaporizing && particles.map((particle) => (
          <motion.span
            key={particle.id}
            initial={{
              opacity: 1,
              x: particle.x,
              y: particle.y,
              scale: 1
            }}
            animate={{
              opacity: 0,
              x: particle.x + (Math.random() - 0.5) * spread * 20,
              y: particle.y - Math.random() * spread * 10,
              scale: 0.5
            }}
            transition={{
              duration: animation.vaporizeDuration || 2,
              delay: particle.delay,
              ease: 'easeOut'
            }}
            style={{
              position: 'absolute',
              fontFamily: font.fontFamily,
              fontSize: font.fontSize,
              fontWeight: font.fontWeight,
              color: color,
              pointerEvents: 'none'
            }}
          >
            {particle.char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}

