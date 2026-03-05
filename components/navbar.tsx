"use client"

import { useState } from "react"
import { Menu, X, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#planos", label: "Planos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

const WHATSAPP_URL = "https://wa.me/5512992536251?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Academia%20Projeto%20Fit."

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1a1a2e]">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
            <Dumbbell className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-[#ffffff]">Projeto Fit</span>
            <span className="text-[10px] uppercase tracking-widest text-accent">Academia</span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#94a3b8] transition-colors hover:text-[#ffffff]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild className="bg-primary hover:bg-secondary text-primary-foreground">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden text-[#ffffff]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-md border-t border-[#1a1a2e]">
          <ul className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 px-4 text-sm font-medium text-[#94a3b8] hover:text-[#ffffff] hover:bg-[#1a1a2e] rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <Button asChild className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
