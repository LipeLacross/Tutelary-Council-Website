import HeroSection from '@/components/HeroSection';
import InfoCard from '@/components/InfoCard';

export default function Home() {
  const acoes = [
    {
      titulo: 'Direitos da Criança',
      descricao:
        'Conheça os direitos fundamentais garantidos pelo ECA para crianças e adolescentes de Belo Jardim.',
      link: '/sobre',
    },
    {
      titulo: 'Como Denunciar',
      descricao:
        'Canais seguros e anônimos para relatar violações de direitos em Belo Jardim. Sua identidade é preservada.',
      link: '/contato',
    },
    {
      titulo: 'Serviços do Conselho',
      descricao:
        'Atendimento à comunidade de Belo Jardim, orientação familiar e medidas de proteção.',
      link: '/servicos',
    },
  ];

  return (
    <>
      <HeroSection />
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-2 text-primary">
          Nossas Ações
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
          Informação e apoio para garantir os direitos da infância e
          adolescência em Belo Jardim.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {acoes.map((item, i) => (
            <InfoCard key={item.titulo} {...item} index={i} />
          ))}
        </div>
      </section>
      <section className="mt-16 relative rounded-xl overflow-hidden h-48 md:h-64">
        <img
          src="/imagens/maos-circulo.jpeg"
          alt="Mãos unidas pela proteção"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/30 to-secondary/20" />
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              Juntos pela infância
            </p>
            <p className="text-white/70 mt-2 max-w-md mx-auto">
              A união da comunidade faz a diferença na proteção das crianças e adolescentes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
