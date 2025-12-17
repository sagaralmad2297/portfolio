"use client"

import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-block opacity-0 animate-fade-in-down" style={{ animationDelay: "0.1s" }}>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Full Stack Developer
              </span>
            </div>

            <div className="overflow-hidden">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Hello, I'm
                </span>
                <span
                  className="block opacity-0 animate-slide-up-fade text-primary bg-gradient-to-r from-primary via-accent to-primary animate-gradient-shift bg-clip-text text-transparent"
                  style={{ animationDelay: "0.4s" }}
                >
                  Sagar Almad
                </span>
              </h1>
            </div>

            <p
              className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
             Full-stack developer with expertise in React.js and Node.js, experienced in developing scalable, maintainable, and user-focused web applications.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-4 justify-center opacity-0 animate-scale-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
           <Button
  size="lg"
  variant="outline"
  onClick={() => scrollToSection("contact")}
  className="
    transition-all
    duration-300
    border-primary/40
    text-primary
    cursor-pointer
    hover:bg-primary
    hover:text-primary-foreground
    hover:border-primary
    hover:scale-105
  "
>
  Get In Touch
</Button>

          </div>

          <div
            className="flex items-center justify-center gap-6 pt-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="https://github.com/sagaralmad2297"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/sagaralmad2297"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:sagaralmad1997@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:8660249460"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="Phone"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Scroll Down Indicator */}
<div
  className="
    absolute
    bottom-1
    left-1/2
    -translate-x-1/2
    mt-12
    cursor-pointer
    animate-scroll-bounce
  "
  onClick={() => scrollToSection('about')}
>
  <div className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
    

    <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center">
      <span className="w-1.5 h-1.5 bg-current rounded-full mt-2" />
    </div>
  </div>
</div>

    </section>
  )
}
