import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/5512992536251?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20na%20Academia%20Projeto%20Fit."

export function CtaSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[url('/images/hero-gym.jpg')] bg-cover bg-center opacity-10" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground lg:text-5xl text-balance">
          Comece sua transformação hoje
        </h2>
        <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
          {"Não deixe para amanhã o que pode mudar sua vida hoje. Agende sua aula experimental gratuita e descubra por que a Projeto Fit é a academia certa para você."}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#ffffff] text-primary hover:bg-[#f1f5f9] text-base px-10 py-6 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 font-semibold"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Agendar Aula Experimental
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
