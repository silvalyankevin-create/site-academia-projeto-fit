import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Academia Projeto Fit | Academia em Jacareí SP',
  description: 'Academia Projeto Fit - A melhor academia em Jacareí SP, no bairro Jardim Sant\'Anna do Pedregulho. Treinos personalizados, equipamentos modernos e planos acessíveis. Agende sua aula experimental!',
  keywords: 'academia em Jacareí, Academia Projeto Fit Jacareí, academia Sant\'Anna do Pedregulho, musculação, fitness, treino personalizado, Jacareí SP',
  openGraph: {
    title: 'Academia Projeto Fit | Jacareí SP',
    description: 'Rumo à sua melhor versão. Treinos personalizados e ambiente motivador em Jacareí SP.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D47A1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
