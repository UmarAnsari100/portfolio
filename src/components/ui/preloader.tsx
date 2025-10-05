'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

// Array of "HELLO" in different languages with their language names
const helloInLanguages = [
  { text: "HELLO", language: "English" },
  { text: "नमस्ते", language: "Hindi" },
  { text: "السلام عليكم", language: "Urdu" },
  { text: "BONJOUR", language: "French" },
  { text: "HALLO", language: "German" },
  { text: "HOLA", language: "Spanish" },
  { text: "こんにちは", language: "Japanese" },
  { text: "你好", language: "Chinese" },
  { text: "CIAO", language: "Italian" },
  { text: "ПРИВЕТ", language: "Russian" },
]

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0)

  useEffect(() => {
    // Progress timer
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          setIsComplete(true)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    // Language switching timer
    const languageTimer = setInterval(() => {
      setCurrentLanguageIndex((prev) => 
        prev === helloInLanguages.length - 1 ? 0 : prev + 1
      )
    }, 600)

    return () => {
      clearInterval(progressTimer)
      clearInterval(languageTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="text-center space-y-8">
            {/* Multilingual Hello */}
            <div className="h-24 flex flex-col items-center justify-center">
              <motion.h1
                key={currentLanguageIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-5xl font-bold text-foreground"
              >
                {helloInLanguages[currentLanguageIndex].text}
              </motion.h1>
              <motion.p
                key={`lang-${currentLanguageIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-muted-foreground mt-1"
              >
                {helloInLanguages[currentLanguageIndex].language}
              </motion.p>
            </div>
            
            {/* Progress Bar */}
            <div className="w-64 mx-auto">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Loading</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  className="bg-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
            
            {/* Loading Animation */}
            <div className="flex justify-center space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


