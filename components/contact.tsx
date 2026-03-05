import { MapPin, Phone, Clock, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua Benedita de Paula Souza, 53",
    detail: "Jardim Sant'Anna do Pedregulho - Jacareí/SP",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(12) 99253-6251",
    detail: "WhatsApp disponível",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg a Sex: 5:30 às 12h e 15h às 22h",
    detail: "Sáb: 8h às 12h",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@_projetoacademia",
    detail: "Siga-nos nas redes",
  },
]

export function Contact() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Contato
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Venha nos conhecer
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {"Estamos localizados no Jardim Sant'Anna do Pedregulho em Jacareí/SP, prontos para te receber. Venha fazer uma aula experimental!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info) => {
              const Icon = info.icon
              const isInstagram = info.label === "Instagram"
              const content = (
                <div
                  className="flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="mt-1 font-semibold text-foreground text-sm">
                      {info.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {info.detail}
                    </p>
                  </div>
                </div>
              )
              return isInstagram ? (
                <a
                  key={info.label}
                  href="https://www.instagram.com/_projetoacademia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              )
            })}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-80 lg:h-auto min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5!2d-45.9658!3d-23.3028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a1d8e8e8e8f%3A0xabcdef1234567890!2sRua%20Benedita%20de%20Paula%20Souza%2C%2053%20-%20Jardim%20Sant'Anna%20do%20Pedregulho%2C%20Jacare%C3%AD%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709459200000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Academia Projeto Fit em Jacareí SP"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
