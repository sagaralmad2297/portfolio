"use client"

import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleProjects((prev) => [...new Set([...prev, index])])
            }
          })
        },
        { threshold: 0.1 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const projects = [
    {
      title: "Link-to-Society",
      category: "Social Platform",
      description:
        "A comprehensive social platform enabling users to create and manage petitions with real-time engagement features.",
      technologies: ["React.js", "Node.js", "Express", "MySQL", "JWT", "Redux"],
      features: [
        "JWT-based authentication with role management",
        "Petition creation, sharing, and voting system",
        "Infinite scroll with skeleton loading",
        "Real-time petition counters and analytics",
      ],
      image: "/social-petition-platform-dashboard.jpg",
    },
    {
      title: "Meghafarms",
      category: "E-commerce",
      description:
        "E-commerce platform for agricultural products with complete shopping experience and secure payment integration.",
      technologies: ["React.js", "Next.js", "Razorpay", "Material-UI"],
      features: [
        "Add to cart with quantity management",
        "Real-time cart total calculations",
        "Persistent cart data across sessions",
        "Razorpay payment gateway integration",
      ],
      image: "/agriculture-ecommerce-product-catalog.jpg",
    },
    {
      title: "Meepaisa Seller",
      category: "Partner Portal",
      description:
        "Partner portal for sellers to manage their services and products with dynamic content loading and filtering.",
      technologies: ["React.js", "TypeScript", "Ant Design", "REST APIs"],
      features: [
        "Seller dashboard and analytics",
        "Product and service management",
        "Search and filtering system",
        "Integration with backend APIs",
      ],
      image: "/seller-dashboard-analytics-interface.jpg",
    },
  ]

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="max-w-3xl space-y-4 opacity-0 animate-slide-up-fade">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Featured Work</h2>
            <p className="text-xl text-muted-foreground">
              A selection of projects showcasing my expertise in full-stack development
            </p>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.title}
                ref={(el) => {
                  projectRefs.current[index] = el
                }}
                className={`group transition-all duration-1000 ${
                  visibleProjects.includes(index)
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-20 scale-95"
                }`}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur transition-all duration-700 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-4 hover:scale-105">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-2"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      </div>
                    </Card>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="space-y-2">
                      <span className="text-sm font-mono text-primary animate-bounce-subtle inline-block">
                        {project.category}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-bold">{project.title}</h3>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold uppercase tracking-wide">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-3 transition-all duration-700 hover:translate-x-2 ${
                              visibleProjects.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                            }`}
                            style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
                          >
                            <span className="text-primary mt-1">▹</span>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs font-mono bg-border/50 text-foreground rounded-md transition-all duration-700 hover:scale-110 hover:bg-primary/20 hover:-translate-y-1 ${
                            visibleProjects.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-75"
                          }`}
                          style={{ transitionDelay: `${0.6 + idx * 0.05}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-2">
                   
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
