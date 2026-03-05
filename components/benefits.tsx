import { Dumbbell, Target, Flame, DollarSign, Handshake } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Treinos Personalizados",
    description:
      "Programas de treino desenvolvidos especialmente para seus objetivos, seja emagrecimento, hipertrofia ou condicionamento.",
  },
  {
    icon: Dumbbell,
    title: "Equipamentos Modernos",
    description:
      "Aparelhos de última geração para garantir segurança, conforto e eficiência em cada exercício.",
  },
  {
    icon: Flame,
    title: "Ambiente Motivador",
    description:
      "Um espaço energético e acolhedor, com música envolvente e uma comunidade que inspira você a dar o seu melhor.",
  },
  {
    icon: DollarSign,
    title: "Planos Acessíveis",
    description:
      "Opções que cabem no seu bolso sem abrir mão da qualidade. Investir na sua saúde nunca foi tão acessível.",
  },
  {
    icon: Handshake,
    title: "Wellhub e TotalPass",
    description:
      "Aceitamos Wellhub (Gympass) e TotalPass. Aproveite os benefícios do seu plano corporativo para treinar conosco.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Por que nos escolher
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#ffffff] lg:text-4xl text-balance">
            Tudo o que você precisa para sua transformação
          </h2>
          <p className="mt-4 text-[#94a3b8] leading-relaxed">
            {"Oferecemos estrutura completa e profissionais dedicados para que você alcance seus resultados de forma segura e eficiente."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="group relative rounded-2xl border border-[#1e293b] bg-[#0f172a] p-8 transition-all hover:border-primary/50 hover:bg-[#1a1a2e] hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-[#ffffff] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
