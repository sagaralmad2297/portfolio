"use client"

import { Calendar, Briefcase, GraduationCap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ExperienceSection() {
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

  return (
    <section id="experience" className="py-32 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          <div
            className={`max-w-3xl space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Experience</h2>
            <p className="text-xl text-muted-foreground">My professional journey in software development</p>
          </div>

          <div
            className={`relative pl-8 border-l-2 transition-all duration-1000 ${isVisible ? "border-primary/30" : "border-transparent"}`}
          >
            <div
              className={`absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary transition-all duration-1000 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
              style={{ transitionDelay: "0.3s" }}
            />

            <div
              className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>March 2023 - April 2024</span>
                </div>
                <h3 className="text-3xl font-bold">Full Stack Developer</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span className="font-medium">EasyStepIn IT Services Private Limited</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Developed responsive web applications using modern technologies and frameworks. Collaborated with
                cross-functional teams to deliver high-quality solutions.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm uppercase tracking-wide">Key Achievements</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Built applications with React.js, Next.js, and TypeScript",
                    "Implemented JWT authentication and RBAC",
                    "Developed infinite scrolling and skeleton loading",
                    "Integrated Razorpay payment gateway",
                    "Optimized performance and cross-device compatibility",
                    "Collaborated using GitLab for version control",
                  ].map((achievement, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-2 text-sm transition-all duration-700 hover:translate-x-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                      style={{ transitionDelay: `${0.5 + idx * 0.1}s` }}
                    >
                      <span className="text-primary mt-0.5">▹</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "TypeScript", "Node.js", "Express", "MySQL", "Material-UI", "Ant Design"].map(
                  (tech, idx) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md transition-all duration-500 hover:scale-110 hover:bg-primary/20 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                      style={{ transitionDelay: `${1.1 + idx * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div
            className={`relative pl-8 border-l-2 transition-all duration-1000 ${isVisible ? "border-border/30" : "border-transparent"}`}
            style={{ transitionDelay: "0.8s" }}
          >
            <div
              className={`absolute -left-3 top-0 w-6 h-6 rounded-full bg-border flex items-center justify-center transition-all duration-1000 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
              style={{ transitionDelay: "1s" }}
            >
              <GraduationCap className="h-3 w-3" />
            </div>

            <div
              className={`space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              style={{ transitionDelay: "1.1s" }}
            >
              <h3 className="text-2xl font-bold">Training</h3>

              <div className="space-y-3 text-sm">
                {[
                  "Full Stack Development - Unacademy",
                  "Data Structures and Algorithms",
                  "Developing Web Applications",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2 transition-all duration-700 hover:translate-x-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    style={{ transitionDelay: `${1.2 + idx * 0.1}s` }}
                  >
                    <span className="text-primary mt-1">▹</span>
                    <p className="text-muted-foreground">
                      <span className="text-foreground font-semibold">{item.split(" - ")[0]}</span>
                      {item.includes(" - ") && ` - ${item.split(" - ")[1]}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
