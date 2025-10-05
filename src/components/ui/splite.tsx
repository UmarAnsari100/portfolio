'use client'

import dynamic from 'next/dynamic'
import { cn } from '@/lib/utils'
import { memo } from 'react'

const Spline = dynamic(() => import('@splinetool/react-spline').then(m => m.default), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
        <p className="text-sm text-muted-foreground">Loading 3D Scene...</p>
      </div>
    </div>
  )
})

interface SplineSceneProps {
  scene: string
  className?: string
}

function SplineSceneComponent({ scene, className }: SplineSceneProps) {
  return (
    <div className={cn('w-full h-full', className)}>
      <Spline
        scene={scene}
        className="w-full h-full"
        style={{ 
          width: '100%', 
          height: '100%',
          borderRadius: '0.75rem'
        }}
      />
    </div>
  )
}

export const SplineScene = memo(SplineSceneComponent)

