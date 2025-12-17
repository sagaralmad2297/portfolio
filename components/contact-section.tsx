"use client"

import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-20">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground">
              I'm always interested in hearing about new projects and opportunities. Let's create something amazing
              together.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:sagaralmad1997@gmail.com"
                className="flex items-center gap-4 p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-lg">sagaralmad1997@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:8660249460"
                className="flex items-center gap-4 p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-accent/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-lg">+91 8660249460</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-lg">Kalaburagi, Karnataka, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-6 text-center">
                Connect with me
              </h4>
              <div className="flex gap-6 justify-center">
                <a
                  href="https://github.com/sagaralmad2297

"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/sagaralmad2297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sagar Almad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
