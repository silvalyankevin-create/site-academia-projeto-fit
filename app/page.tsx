import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Benefits } from "@/components/benefits"
import { Plans } from "@/components/plans"
import { Testimonials } from "@/components/testimonials"
import { CtaSection } from "@/components/cta-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Plans />
        <Testimonials />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
