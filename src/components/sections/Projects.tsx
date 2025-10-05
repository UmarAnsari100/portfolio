'use client'

import { EvervaultCard } from "@/components/ui/evervault-card"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/api/placeholder/400/300"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
    image: "/api/placeholder/400/300"
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with interactive maps and forecasts.",
    tech: ["React", "D3.js", "Weather API", "Chart.js"],
    image: "/api/placeholder/400/300"
  }
]

export default function Projects() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions that drive business growth and user engagement
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="relative group">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm">
                  <div className="relative flex flex-1 flex-col justify-between gap-4">
                    {/* Project Image/Icon */}
                    <div className="w-full h-48 rounded-lg bg-muted flex items-center justify-center">
                      <EvervaultCard text="Project" className="w-full h-full" />
                    </div>
                    
                    {/* Project Info */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <MagneticButton>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors">
                          <ExternalLink size={16} />
                          Live Demo
                        </button>
                      </MagneticButton>
                      
                      <MagneticButton>
                        <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm hover:bg-muted transition-colors">
                          <Github size={16} />
                          Code
                        </button>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <MagneticButton>
            <button className="px-8 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors">
              View All Projects
            </button>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
