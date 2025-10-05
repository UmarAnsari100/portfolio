'use client'

import { useState, useCallback } from 'react'
import Preloader from '@/components/ui/preloader'
import { AnimeNavBar } from '@/components/ui/anime-navbar'
import { Home, User, Briefcase, Wrench, Mail } from 'lucide-react'
import { Hero } from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import { Footer } from '@/components/ui/footer-section'

const navItems = [
  {
    name: "Home",
    url: "#home",
    icon: Home,
  },
  {
    name: "About",
    url: "#about",
    icon: User,
  },
  {
    name: "Skills",
    url: "#skills",
    icon: Wrench,
  },
  {
    name: "Projects",
    url: "#projects",
    icon: Briefcase,
  },
  {
    name: "Contact",
    url: "#contact",
    icon: Mail,
  },
]

export default function Portfolio() {
  const [showPreloader, setShowPreloader] = useState(true)

  const handleComplete = useCallback(() => {
    setShowPreloader(false)
  }, [])

  return (
    <>
      {showPreloader && <Preloader onComplete={handleComplete} />}
      <div className="min-h-screen bg-background">
        <AnimeNavBar items={navItems} defaultActive="Home" />
        
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
        <Footer />
      </div>
    </>
  )
}