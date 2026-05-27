import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Conselho Tutelar — Proteção à Infância e Adolescência',
  description:
    'Site institucional do Conselho Tutelar. Informações sobre o ECA, serviços e canais de denúncia.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-muted/30">
        <div className="bg-foreground/90 text-background text-[11px] py-1.5">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <span className="font-medium tracking-wide">Governo Federal</span>
            <div className="flex items-center gap-3">
              <a href="#conteudo" className="hover:underline underline-offset-2">
                Ir para o conteúdo
              </a>
              <span className="opacity-40">|</span>
              <a href="#rodape" className="hover:underline underline-offset-2">
                Ir para o rodapé
              </a>
            </div>
          </div>
        </div>
        <Header />
        <main id="conteudo" className="flex-1 container mx-auto px-4 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
