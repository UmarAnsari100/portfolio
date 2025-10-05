'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface OrbitingSkillsProps {
  className?: string
}

const skills = [
  { name: 'React', icon: '⚛️', radius: 120, duration: 20 },
  { name: 'TypeScript', icon: '📘', radius: 140, duration: 25 },
  { name: 'Next.js', icon: '▲', radius: 100, duration: 15 },
  { name: 'Node.js', icon: '🟢', radius: 160, duration: 30 },
  { name: 'Python', icon: '🐍', radius: 110, duration: 18 },
  { name: 'AWS', icon: '☁️', radius: 150, duration: 22 },
  { name: 'Docker', icon: '🐳', radius: 130, duration: 28 },
  { name: 'Git', icon: '📚', radius: 90, duration: 12 }
]

export default function OrbitingSkills({ className }: OrbitingSkillsProps) {
  return (
    <div className={cn('relative w-80 h-80 mx-auto', className)}>
      {/* Center element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-primary/60 flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg"
        >
          💻
        </motion.div>
      </div>

      {/* Orbiting skills */}
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6"
          style={{
            '--radius': skill.radius,
            '--duration': skill.duration,
          } as React.CSSProperties}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: skill.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-background border-2 border-border flex items-center justify-center text-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            style={{
              transform: `translateY(-${skill.radius}px) rotate(-360deg)`,
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="group-hover:scale-110 transition-transform">
              {skill.icon}
            </span>
            
            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {skill.name}
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Orbit paths (optional visual guides) */}
      {[90, 110, 130, 150].map((radius, index) => (
        <div
          key={radius}
          className="absolute top-1/2 left-1/2 border border-border/20 rounded-full"
          style={{
            width: radius * 2,
            height: radius * 2,
            marginLeft: -radius,
            marginTop: -radius,
          }}
        />
      ))}
    </div>
  )
}

