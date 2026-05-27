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
          <Link href="/sobre" className="hover:text-orange-400 transition">
            Sobre
          </Link>
          <Link href="/servicos" className="hover:text-orange-400 transition">
            Serviços
          </Link>
          <Link href="/contato">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-orange-500 hover:text-white"
            >
              Contato
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
