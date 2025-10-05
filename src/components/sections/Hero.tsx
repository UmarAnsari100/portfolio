'use client'

import { SplineScene } from "@/components/ui/splite"
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion"
import { ArrowDown, ArrowRight, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Hero() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative w-full min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/20 dark:bg-grid-gray-900/20 -z-10" />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center py-20">
        <div className="max-w-screen-xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800"
              >
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Professional Web Development</span>
              </motion.div>
              
              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Creating exceptional <span className="text-blue-600 dark:text-blue-400">digital experiences</span> for modern businesses
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                  We build professional, high-performance websites and applications that help businesses achieve their goals and connect with their audience.
                </p>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md text-lg font-medium flex items-center gap-2 shadow-lg shadow-blue-600/20"
                  onClick={scrollToAbout}
                >
                  View Our Work
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 px-8 py-6 rounded-md text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Contact Us
                </Button>
              </motion.div>
              
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200 dark:border-gray-800 mt-12"
              >
                <div>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">200+</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Happy Clients</p>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Visual Content (only robot) */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="w-full h-[400px] md:h-[460px] lg:h-[500px]">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
      
      <div ref={aboutRef} />
    </section>
  )
}
