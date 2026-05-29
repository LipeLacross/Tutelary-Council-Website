import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Conselho Tutelar — Proteção à Infância e Adolescência',
  description:
    'Site institucional do Conselho Tutelar. Informações sobre o ECA, serviços e canais de denúncia.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-muted/30">
        <Header />
        <div className="relative w-full h-48 md:h-64 overflow-hidden bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20">
          <img
            src="/imagens/crianca-protecao.jpeg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/70" />
          <div className="absolute top-4 left-4 w-24 h-24 rounded-full bg-white/5 blur-xl" />
          <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-secondary/10 blur-xl" />
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
            <div className="flex items-center gap-5">
              <img
                src="/imagens/tutelary-council-symbol.jpg"
                alt="Símbolo do Conselho Tutelar"
                className="h-16 w-auto object-contain drop-shadow-lg"
              />
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-white drop-shadow-lg tracking-wide">
                  Proteção à Infância e Adolescência
                </span>
                <span className="text-xs md:text-sm text-white/60">
                  Conselho Tutelar de Belo Jardim — PE
                </span>
              </div>
            </div>
          </div>
        </div>
        <main id="conteudo" className="flex-1 container mx-auto px-4 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
