"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-foreground">RD7</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActiveLink("/") ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Início
            </Link>
            <Link
              href="/imoveis"
              className={`text-sm font-medium transition-colors ${
                isActiveLink("/imoveis") ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Imóveis
            </Link>
            <Link
              href="/contato"
              className={`text-sm font-medium transition-colors ${
                isActiveLink("/contato") ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contato
            </Link>
            <Link
              href="/sobre"
              className={`text-sm font-medium transition-colors ${
                isActiveLink("/sobre") ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sobre
            </Link>
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent transition-all duration-200"
              >
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              <Link
                href="/"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActiveLink("/") ? "text-accent bg-accent/10" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/imoveis"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActiveLink("/imoveis") ? "text-accent bg-accent/10" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Imóveis
              </Link>
              <Link
                href="/contato"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActiveLink("/contato") ? "text-accent bg-accent/10" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Link
                href="/sobre"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActiveLink("/sobre") ? "text-accent bg-accent/10" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <div className="px-3 py-2">
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
