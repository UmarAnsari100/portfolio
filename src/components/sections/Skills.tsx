'use client'

import OrbitingSkills from "@/components/ui/orbiting-skills"

export default function Skills() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Technical Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build scalable and performant applications
          </p>
        </div>
        
        <div className="flex justify-center mb-16">
          <OrbitingSkills />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
            { name: "Backend", skills: ["Node.js", "Express", "Python", "PostgreSQL"] },
            { name: "Tools", skills: ["Git", "Docker", "AWS", "Figma"] },
            { name: "Mobile", skills: ["React Native", "Flutter", "iOS", "Android"] }
          ].map((category, index) => (
            <div key={category.name} className="text-center">
              <h3 className="font-semibold text-lg mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
