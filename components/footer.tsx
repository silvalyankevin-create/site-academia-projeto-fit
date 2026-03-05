import { Dumbbell, Instagram, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1e293b]">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                <Dumbbell className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-[#ffffff]">
                  Projeto Fit
                </span>
                <span className="text-[10px] uppercase tracking-widest text-accent">
                  Academia
                </span>
              </div>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              {"Sua academia de referência em Jacareí. Transformando vidas através do exercício físico."}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#ffffff] mb-4">Links Rápidos</h4>
            <ul className="flex flex-col gap-2">
              {["Sobre", "Benefícios", "Planos", "Depoimentos", "Contato"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                      className="text-sm text-[#94a3b8] hover:text-[#ffffff] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#ffffff] mb-4">Horários</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#94a3b8]">
              <li className="flex justify-between">
                <span>Segunda a Sexta</span>
                <span className="text-[#ffffff]">5:30 - 12h / 15h - 22h</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="text-[#ffffff]">8h - 12h</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-[#ffffff]">Fechado</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#ffffff] mb-4">Contato</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#94a3b8]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{"Rua Benedita de Paula Souza, 53 - Jardim Sant'Anna do Pedregulho - Jacareí/SP"}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>(12) 99253-6251</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="https://instagram.com/_projetoacademia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffffff] transition-colors"
                >
                  @_projetoacademia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94a3b8]">
            {`© ${new Date().getFullYear()} Academia Projeto Fit. Todos os direitos reservados.`}
          </p>
          <p className="text-xs text-[#64748b]">
            {"Academia em Jacareí - SP"}
          </p>
        </div>
      </div>
    </footer>
  )
}
