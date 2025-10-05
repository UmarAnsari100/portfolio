'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  strength?: number
  className?: string
}

export function MagneticButton({ 
  children, 
  strength = 0.3,
  className 
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current.getBoundingClientRect()
    
    const x = (clientX - (left + width / 2)) * strength
    const y = (clientY - (top + height / 2)) * strength

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.5
      }}
    >
      {children}
    </motion.div>
  )
}

