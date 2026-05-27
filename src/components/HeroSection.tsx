import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-orange-500 text-white rounded-xl p-12 text-center">
      <h1 className="text-4xl font-extrabold mb-4">
        Protegendo a Infância e Adolescência
      </h1>
      <p className="text-lg mb-6">
        O Conselho Tutelar e o ECA: informação e ação em defesa dos direitos.
      </p>
      <Link href="/sobre">
        <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
          Saiba Mais
        </Button>
      </Link>
    </section>
  );
}
