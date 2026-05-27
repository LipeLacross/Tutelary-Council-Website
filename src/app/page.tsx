import HeroSection from '@/components/HeroSection';
import InfoCard from '@/components/InfoCard';

const acoes = [
  {
    titulo: 'Direitos da Criança',
    descricao: 'Conheça os direitos fundamentais garantidos pelo ECA.',
    link: '/sobre',
  },
  {
    titulo: 'Como Denunciar',
    descricao: 'Canais seguros e anônimos para relatar violações.',
    link: '/contato',
  },
  {
    titulo: 'Serviços do Conselho',
    descricao: 'Atendimento, orientação e medidas de proteção.',
    link: '/servicos',
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
          Nossas Ações
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {acoes.map((item) => (
            <InfoCard key={item.titulo} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}
