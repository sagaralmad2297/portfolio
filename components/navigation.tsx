"use client"

import { useState, useEffect } from "react"
import { Menu, X, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Work" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="text-2xl font-bold">
              Sagar Almad
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition"
                >
                  {link.label}
                </a>
              ))}

              <a href="/sagar_resume.pdf" download>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <FileDown className="h-4 w-4" />
                  Resume
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-in Drawer */}
          <div className="absolute right-0 top-0 h-full w-72 bg-background shadow-xl animate-slide-in">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6 px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base text-muted-foreground hover:text-primary transition"
                >
                  {link.label}
                </a>
              ))}

              <a href="/sagar_resume.pdf" download>
                <Button
                  variant="outline"
                  className="w-full gap-2 border-primary/40 text-primary"
                >
                  <FileDown className="h-4 w-4" />
                  Resume
                </Button>
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
