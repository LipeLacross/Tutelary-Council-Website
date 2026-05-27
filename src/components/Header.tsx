import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50 animate-fade-in-down border-b-2 border-cta/30">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition"
        >
          <img
            src="/imagens/brasao-bj.png"
            alt="Brasão de Belo Jardim"
            className="w-10 h-10 object-contain drop-shadow-sm"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight">
              Conselho Tutelar
            </span>
            <span className="text-[11px] text-primary-foreground/60 font-medium">
              Belo Jardim — PE
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-2 md:gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-cta transition">Início</Link>
            <Link href="/sobre" className="text-sm font-medium hover:text-cta transition">Sobre</Link>
            <Link href="/servicos" className="text-sm font-medium hover:text-cta transition">Serviços</Link>
          </div>
          <Link href="/contato">
            <Button className="bg-cta text-cta-foreground hover:bg-cta/90 shadow-md hover:shadow-lg transition-all text-xs md:text-sm px-3 md:px-4">
              Contato
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
