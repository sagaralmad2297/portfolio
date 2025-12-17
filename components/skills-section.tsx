"use client"

import { Code2, Database, Wrench } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind", "Material-UI", "Redux"],
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Express.js", "REST APIs", "MySQL", "JWT Auth"],
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git/GitLab", "Axios", "Razorpay", "Infinite Scroll", "Skeleton Loading"],
    },
  ]

  return (
    <section id="skills" className="py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div
            className={`max-w-3xl space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I use to craft exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
                  className={`p-8 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all duration-700 space-y-6 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-20 -rotate-2"
                  }`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-500 hover:bg-primary/20 hover:scale-125 hover:rotate-12">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 text-sm bg-muted/50 text-foreground rounded-lg transition-all duration-500 hover:scale-110 hover:bg-primary/20 hover:-translate-y-1 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                        }`}
                        style={{ transitionDelay: `${index * 0.15 + skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div
            className={`p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 space-y-6 transition-all duration-1000 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <h3 className="text-2xl font-bold">Special Expertise</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Performance Optimization",
                  desc: "Expert in implementing infinite scroll, skeleton loading, and lazy loading for optimal user experience",
                },
                {
                  title: "State Management",
                  desc: "Proficient with Redux, Context API, and modern React patterns for complex state handling",
                },
                {
                  title: "Authentication",
                  desc: "Implementing secure JWT-based authentication with role-based access control systems",
                },
                {
                  title: "Payment Integration",
                  desc: "Seamless Razorpay integration for secure online transactions and cart management",
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className={`space-y-2 p-4 rounded-xl bg-background/50 backdrop-blur transition-all duration-700 hover:-translate-y-2 hover:shadow-lg hover:bg-background/70 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${0.7 + idx * 0.1}s` }}
                >
                  <h4 className="font-semibold text-primary">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
