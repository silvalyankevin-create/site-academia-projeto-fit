import Image from "next/image"
import { CheckCircle } from "lucide-react"

const highlights = [
  "Ambiente acolhedor e familiar",
  "Acompanhamento profissional dedicado",
  "Proximidade e atenção com cada aluno",
  "Localização privilegiada no bairro",
]

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-gym.jpg"
                alt="Ambiente interno da Academia Projeto Fit"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden lg:flex items-center gap-3 rounded-xl bg-primary p-4 shadow-lg">
              <div className="flex flex-col text-primary-foreground">
                <span className="text-2xl font-bold">1 ano</span>
                <span className="text-xs opacity-80">transformando vidas</span>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Sobre nós
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              {"Sua academia de referência em Sant'Anna do Pedregulho"}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {"A Academia Projeto Fit nasceu com o propósito de ser mais do que uma academia — somos um espaço de transformação. Localizada no coração de Sant'Anna do Pedregulho, oferecemos um ambiente acolhedor onde cada aluno é tratado de forma única e especial."}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {"Nosso compromisso é com seus resultados. Contamos com profissionais qualificados que acompanham de perto sua evolução, garantindo treinos seguros e eficientes para todos os níveis."}
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
