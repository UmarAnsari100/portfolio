'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const splineRef = useRef<any>(null)

  useEffect(() => {
    const loadSpline = async () => {
      try {
        // Dynamically import Spline runtime
        const Spline = await import('@splinetool/react-spline').then(
          (module) => module.default
        )
        
        if (containerRef.current) {
          splineRef.current = (
            <Spline scene={scene} />
          )
          // Force a re-render
          containerRef.current.innerHTML = ''
          const div = document.createElement('div')
          containerRef.current.appendChild(div)
          
          // Use React to render the Spline component
          const { createRoot } = await import('react-dom/client')
          const root = createRoot(div)
          root.render(splineRef.current)
        }
      } catch (error) {
        console.error('Error loading Spline:', error)
      }
    }

    loadSpline()

    return () => {
      // Cleanup if needed
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [scene])

  return (
    <div 
      ref={containerRef} 
      className={cn('w-full h-full', className)}
    />
  )
}