'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface GlowingEffectProps {
  spread?: number
  glow?: boolean
  disabled?: boolean
  proximity?: number
  inactiveZone?: number
  borderWidth?: number
  className?: string
}

export function GlowingEffect({
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
  borderWidth = 3,
  className
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (disabled) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setMousePosition({ x, y })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseenter', () => setIsHovered(true))
      container.addEventListener('mouseleave', () => setIsHovered(false))

      return () => {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseenter', () => setIsHovered(true))
        container.removeEventListener('mouseleave', () => setIsHovered(false))
      }
    }
  }, [disabled])

  if (disabled) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
    >
      {/* Glow effect */}
      {glow && isHovered && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x - spread,
            top: mousePosition.y - spread,
            width: spread * 2,
            height: spread * 2,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
              filter: 'blur(8px)',
            }}
          />
        </motion.div>
      )}

      {/* Border glow */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background: `radial-gradient(${proximity}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.4), transparent 40%)`,
            borderRadius: 'inherit',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </div>
  )
}

