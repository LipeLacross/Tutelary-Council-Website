'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/contato', label: 'Contato' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-primary/90 backdrop-blur-md text-primary-foreground shadow-lg sticky top-0 z-50 border-b-2 border-cta/30">
      <div className="container mx-auto flex justify-between items-center h-16 px-4 animate-fade-in-down">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
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
        <nav className="flex items-center gap-1 md:gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs md:text-sm font-medium px-2 md:px-3 py-1.5 transition-colors whitespace-nowrap rounded hover:bg-white/10 ${
                  isActive ? 'text-cta' : 'text-primary-foreground/80 hover:text-primary-foreground'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-cta rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
