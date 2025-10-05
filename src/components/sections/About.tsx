'use client'

import { BlurText } from "@/components/ui/animated-blur-text"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Rocket, 
  Users, 
  Award, 
  BookOpen, 
  Coffee,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap
} from "lucide-react"

const achievements = [
  {
    icon: Briefcase,
    title: "5+ Years Experience",
    description: "Building scalable web applications"
  },
  {
    icon: Users,
    title: "50+ Projects Delivered",
    description: "From startups to enterprise solutions"
  },
  {
    icon: Award,
    title: "Technical Leadership",
    description: "Led teams of 8+ developers"
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Improved app performance by 300%"
  }
]

const expertise = [
  "Full-Stack Development",
  "System Architecture",
  "Team Leadership",
  "DevOps & CI/CD",
  "Performance Optimization",
  "Code Review & Mentoring"
]

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Get to know me
              </p>
              <BlurText
                text="About Me"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl font-bold mb-6"
              />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Passionate about creating exceptional digital experiences through innovative technology solutions
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Story & Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Professional Story */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code2 className="text-primary" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold">My Journey</h3>
                  </div>
                  
                  <BlurText
                    text="With over 5 years of experience in software development, I've evolved from a curious computer science student to a seasoned full-stack developer and technical leader. My journey began with a fascination for problem-solving and has grown into a passion for building scalable, user-centric applications that make a real impact."
                    delay={50}
                    animateBy="words"
                    direction="bottom"
                    className="text-muted-foreground leading-relaxed"
                  />
                  
                  <BlurText
                    text="I specialize in modern JavaScript ecosystems, cloud architecture, and leading cross-functional teams. My approach combines technical excellence with business acumen, ensuring that every solution I build drives measurable results and exceptional user experiences."
                    delay={100}
                    animateBy="words"
                    direction="bottom"
                    className="text-muted-foreground leading-relaxed"
                  />
                </div>
              </Card>

              {/* Personal Details */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Coffee className="text-primary" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold">Beyond Code</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-primary" />
                      <span className="text-muted-foreground">San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-primary" />
                      <span className="text-muted-foreground">Available for projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <GraduationCap size={16} className="text-primary" />
                      <span className="text-muted-foreground">CS Degree, Stanford</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen size={16} className="text-primary" />
                      <span className="text-muted-foreground">Continuous Learner</span>
                    </div>
                  </div>
                  
                  <BlurText
                    text="When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers, or exploring the latest in AI and machine learning. I believe in giving back to the community that has given me so much."
                    delay={150}
                    animateBy="words"
                    direction="bottom"
                    className="text-muted-foreground leading-relaxed"
                  />
                </div>
              </Card>
            </motion.div>

            {/* Right Column - Achievements & Expertise */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Key Achievements */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Key Achievements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon
                    return (
                      <motion.div
                        key={achievement.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-all duration-300 group">
                          <div className="space-y-3">
                            <div className="p-2 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                              <Icon className="text-primary" size={20} />
                            </div>
                            <h4 className="font-semibold text-sm">{achievement.title}</h4>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                              {achievement.description}
                            </p>
                          </div>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Core Expertise */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Core Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {expertise.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Philosophy */}
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Rocket className="text-primary" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold">My Philosophy</h3>
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed border-l-4 border-primary pl-4">
                    "Great software isn't just about clean code—it's about understanding people, solving real problems, and creating experiences that make users' lives better. Every line of code should serve a purpose, and every feature should add genuine value."
                  </blockquote>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
