import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "5512992536251"

const plans = [
  {
    name: "Diária",
    price: "9,99",
    period: "",
    description: "Para quem quer experimentar",
    features: [
      "Acesso à musculação por 1 dia",
      "Acompanhamento profissional",
      "Sem compromisso",
    ],
    featured: false,
    whatsappMessage: "Oi, gostaria de saber mais sobre a diária da academia!",
  },
  {
    name: "Mensal",
    price: "99,90",
    period: "/mês",
    description: "Ideal para quem quer flexibilidade",
    features: [
      "Acesso à musculação",
      "Treino personalizado",
      "Acompanhamento profissional",
      "Acesso de segunda a sábado",
    ],
    featured: false,
    whatsappMessage: "Oi, gostaria de fazer a matrícula no plano Mensal!",
  },
  {
    name: "Trimestral",
    price: "95",
    period: "/mês",
    description: "Economia e compromisso com resultados",
    features: [
      "Tudo do plano Mensal",
      "Avaliação física inclusa",
      "Desconto especial",
      "Acesso de segunda a sexta",
    ],
    featured: false,
    whatsappMessage: "Oi, gostaria de fazer a matrícula no plano Trimestral!",
  },
  {
    name: "Anual",
    price: "89,90",
    period: "/mês",
    description: "Melhor custo-benefício",
    features: [
      "Tudo do plano Trimestral",
      "Avaliação física trimestral",
      "Melhor economia",
      "Acesso ilimitado",
      "Brinde exclusivo de matrícula",
    ],
    featured: true,
    whatsappMessage: "Oi, gostaria de fazer a matrícula no plano Anual!",
  },
]

export function Plans() {
  return (
    <section id="planos" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Planos
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Escolha o plano ideal para você
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Planos que cabem no seu bolso. Todos incluem acompanhamento profissional e acesso aos equipamentos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
                plan.featured
                  ? "border-primary bg-primary/5 shadow-xl shadow-primary/10 ring-1 ring-primary/20"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Mais popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={`w-full rounded-xl py-6 text-base font-semibold transition-all hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-primary hover:bg-secondary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-foreground hover:bg-foreground/90 text-background"
                }`}
              >
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                  Quero me matricular
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
