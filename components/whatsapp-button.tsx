"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/5512992536251?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Academia%20Projeto%20Fit."

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-[#ffffff] shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="sr-only">WhatsApp</span>
    </a>
  )
}
