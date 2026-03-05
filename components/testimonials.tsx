import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Aluna há 10 meses",
    content:
      "A Projeto Fit mudou minha vida! Perdi 15kg em 8 meses com o acompanhamento incrível dos profissionais. O ambiente é super acolhedor e me sinto em casa a cada treino.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Rafael Oliveira",
    role: "Aluno há 8 meses",
    content:
      "Depois de pesquisar várias academias na região, escolhi a Projeto Fit e não me arrependo. Os equipamentos são modernos e o atendimento é personalizado de verdade.",
    rating: 5,
    initials: "RO",
  },
  {
    name: "Camila Santos",
    role: "Aluna há 5 meses",
    content:
      "Sempre tive receio de academia, mas aqui me senti acolhida desde o primeiro dia. Os profissionais são atenciosos e meu condicionamento físico melhorou muito!",
    rating: 5,
    initials: "CS",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#ffffff] lg:text-4xl text-balance">
            O que nossos alunos dizem
          </h2>
          <p className="mt-4 text-[#94a3b8] leading-relaxed">
            {"Histórias reais de pessoas que transformaram suas vidas na Academia Projeto Fit em Sant'Anna do Pedregulho."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl border border-[#1e293b] bg-[#0f172a] p-8 transition-all hover:border-primary/30"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-[#94a3b8] leading-relaxed mb-6">
                {`"${testimonial.content}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#ffffff] text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#94a3b8]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
