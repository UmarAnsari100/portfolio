'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface EvervaultCardProps {
  text?: string
  className?: string
}

export function EvervaultCard({ text = "Hover", className }: EvervaultCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener('mousemove', handleMouseMove)
      return () => card.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Generate grid of characters
  const generateGrid = () => {
    const chars = '0123456789ABCDEF'
    const grid = []
    const rows = 15
    const cols = 20

    for (let i = 0; i < rows * cols; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)]
      grid.push(char)
    }
    return grid
  }

  const [grid, setGrid] = useState(generateGrid())

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setGrid(generateGrid())
      }, 100)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative w-full h-full bg-black rounded-lg overflow-hidden border border-white/20',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background grid */}
      <div className="absolute inset-0 flex flex-wrap gap-0 p-2 overflow-hidden">
        {grid.map((char, index) => {
          const cols = 20
          const row = Math.floor(index / cols)
          const col = index % cols
          const distance = Math.sqrt(
            Math.pow(mousePosition.x - col * 12, 2) + 
            Math.pow(mousePosition.y - row * 12, 2)
          )
          const isNear = distance < 50

          return (
            <motion.span
              key={index}
              className="text-xs font-mono text-center w-3 h-3 flex items-center justify-center"
              animate={{
                color: isHovered && isNear ? '#ffffff' : '#333333',
                scale: isHovered && isNear ? 1.2 : 1,
              }}
              transition={{ duration: 0.1 }}
            >
              {char}
            </motion.span>
          )
        })}
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-white text-2xl font-bold z-10"
          animate={{
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 0.9 : 0.7,
          }}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.div>
      </div>

      {/* Glow effect */}
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            width: 100,
            height: 100,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-full h-full bg-white/10 rounded-full blur-xl" />
        </motion.div>
      )}
    </div>
  )
}
