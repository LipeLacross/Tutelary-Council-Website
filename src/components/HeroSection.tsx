import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary/60 text-primary-foreground p-12 md:p-16 text-center animate-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(253,171,15,0.12),transparent_50%)]" />
      <img
        src="/imagens/adulto-crianca-maos.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08] pointer-events-none"
      />
      <img
        src="/imagens/bandeira-bj.png"
        alt=""
        className="absolute -top-10 -right-10 w-48 md:w-64 opacity-[0.07] rotate-12 pointer-events-none object-contain"
      />
      <img
        src="/imagens/bandeira-bj.png"
        alt=""
        className="absolute -bottom-10 -left-10 w-40 md:w-56 opacity-[0.05] -rotate-6 pointer-events-none object-contain"
      />
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-secondary/10 animate-float blur-xl" />
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-secondary/5 animate-float-delayed blur-lg" />
      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <p
          className="text-sm uppercase tracking-widest text-cta font-semibold animate-fade-in-down"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          Conselho Tutelar de Belo Jardim — PE
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          Protegendo a Infância e Adolescência
        </h1>
        <p
          className="text-lg text-primary-foreground/80 max-w-lg mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
        >
          O Conselho Tutelar e o ECA: informação e ação em defesa dos direitos
          das crianças e adolescentes em Belo Jardim.
        </p>
        <Link
          href="/sobre"
          className="inline-block animate-fade-in-up"
          style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
        >
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            Saiba Mais
          </Button>
        </Link>
      </div>
    </section>
  );
}
