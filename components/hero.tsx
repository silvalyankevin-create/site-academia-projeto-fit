import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const WHATSAPP_URL = "https://wa.me/5512992536251?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20na%20Academia%20Projeto%20Fit."

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="/images/hero-gym.jpg"
        alt="Interior da Academia Projeto Fit com equipamentos modernos"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-[#0a0a0a]/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-accent">
              {"Sant'Anna do Pedregulho"}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#ffffff] sm:text-5xl lg:text-7xl leading-tight text-balance">
            Rumo à sua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              melhor versão.
            </span>
          </h1>

          <p className="mt-6 text-lg text-[#94a3b8] leading-relaxed max-w-lg">
            {"A academia referência em Sant'Anna do Pedregulho. Treinos personalizados, equipamentos modernos e o acompanhamento que você precisa para alcançar seus objetivos."}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-secondary text-primary-foreground text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agende sua Aula Experimental
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-[#ffffff] text-base px-8 py-6 rounded-xl transition-all hover:-translate-y-0.5"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#ffffff]">500+</span>
              <span className="text-xs text-[#94a3b8]">Alunos ativos</span>
            </div>
            <div className="h-10 w-px bg-[#334155]" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#ffffff]">1</span>
              <span className="text-xs text-[#94a3b8]">Ano ativa</span>
            </div>
            <div className="h-10 w-px bg-[#334155]" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#ffffff]">4.9</span>
              <span className="text-xs text-[#94a3b8]">Avaliação Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
