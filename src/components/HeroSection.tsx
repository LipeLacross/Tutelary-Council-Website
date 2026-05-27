import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-orange-500 text-white rounded-xl p-12 text-center">
      <h1 className="text-4xl font-extrabold mb-4">
        Garantindo os Direitos da Infância e Adolescência
      </h1>
      <p className="text-lg mb-6">
        Informação e ação para proteger nossas crianças. Conheça o ECA e saiba
        como ajudar.
      </p>
      <Link href="/sobre-eca">
        <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
          Saiba Mais
        </Button>
      </Link>
    </section>
  );
}
