'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  animateBy?: 'words' | 'letters'
  direction?: 'top' | 'bottom' | 'left' | 'right'
}

export function BlurText({
  text,
  className,
  delay = 0,
  animateBy = 'words',
  direction = 'top'
}: BlurTextProps) {
  const words = text.split(' ')
  
  const getInitialPosition = () => {
    switch (direction) {
      case 'top': return { y: -20, x: 0 }
      case 'bottom': return { y: 20, x: 0 }
      case 'left': return { y: 0, x: -20 }
      case 'right': return { y: 0, x: 20 }
      default: return { y: -20, x: 0 }
    }
  }

  const initialPos = getInitialPosition()

  if (animateBy === 'words') {
    return (
      <div className={cn('', className)}>
        {words.map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            initial={{
              opacity: 0,
              filter: 'blur(10px)',
              ...initialPos
            }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
              x: 0
            }}
            transition={{
              duration: 0.6,
              delay: delay + wordIndex * 0.1,
              ease: 'easeOut'
            }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </div>
    )
  }

  // Animate by letters
  return (
    <div className={cn('', className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-1">
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              initial={{
                opacity: 0,
                filter: 'blur(10px)',
                ...initialPos
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                x: 0
              }}
              transition={{
                duration: 0.4,
                delay: delay + (wordIndex * word.length + letterIndex) * 0.05,
                ease: 'easeOut'
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  )
}

