"use client"

import { Briefcase, GraduationCap, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
    <section id="about" className="py-32 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left - Main content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
            >
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">About Me</h2>
                <div
                  className={`h-1 w-20 bg-primary rounded-full transition-all duration-1000 ${isVisible ? "w-20" : "w-0"}`}
                />
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p
                  className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: "0.2s" }}
                >
                  I'm a passionate Full Stack Developer with a unique background in Mechanical Engineering. I bring a
                  problem-solving mindset and attention to detail from engineering into the world of web development.
                </p>
                <p
                  className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: "0.4s" }}
                >
                  With over a year of professional experience at EasyStepIn IT Services, I've specialized in building
                  responsive, scalable web applications using modern technologies like React, Node.js, and Next.js.
                </p>
                <p
                  className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: "0.6s" }}
                >
                  I'm driven by creating seamless user experiences and writing clean, maintainable code. When I'm not
                  coding, you'll find me traveling, exploring food cultures, or working on self-improvement.
                </p>
              </div>
            </div>

            {/* Right - Info cards */}
            <div className="space-y-6">
              <div
                className={`p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 space-y-4 transition-all duration-1000 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 ${
                  isVisible ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 translate-x-20 -rotate-3"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Experience</h3>
                    <p className="text-sm text-muted-foreground">Frontend Developer</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">EasyStepIn IT Services, Bangalore</p>
                  <p className="text-muted-foreground">March 2023 - April 2024</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed responsive web applications using React.js, Next.js, and TypeScript. Collaborated with
                    cross-functional teams to deliver high-quality solutions.
                  </p>
                </div>
              </div>

              <div
                className={`p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 space-y-4 transition-all duration-1000 hover:-translate-y-2 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 ${
                  isVisible ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 translate-x-20 -rotate-3"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Education</h3>
                    <p className="text-sm text-muted-foreground">Mechanical Engineering</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">Poojya Doddappa Appa College</p>
                  <p className="text-muted-foreground">Kalaburagi University</p>
                  <p className="text-primary font-mono font-semibold">CGPA: 7.58</p>
                </div>
              </div>

              <div
                className={`p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 transition-all duration-1000 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 ${
                  isVisible ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 translate-x-20 -rotate-3"
                }`}
                style={{ transitionDelay: "0.6s" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">Kalaburagi, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
