import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Conselho Tutelar
        </Link>
        <nav className="flex gap-6 items-center">
          <Link href="/" className="hover:text-orange-400 transition">
            Início
          </Link>
          <Link href="/sobre-eca" className="hover:text-orange-400 transition">
            Sobre o ECA
          </Link>
          <Link href="/noticias" className="hover:text-orange-400 transition">
            Notícias
          </Link>
          <Link href="/contato">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-orange-500 hover:text-white"
            >
              Como Acionar
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
