import ActionCard from '@/components/ActionCard';
import HeroSection from '@/components/HeroSection';

const actions = [
  {
    title: 'Campanha de Doação de Brinquedos',
    description: 'Arrecadamos brinquedos para o Dia das Crianças. Participe!',
    image: '/imagens/doacao.svg',
    href: '/noticias/campanha-doacao',
  },
  {
    title: 'Palestra: Entendendo o ECA',
    description: 'Educadores e pais discutem a importância do Estatuto.',
    image: '/imagens/palestra.svg',
    href: '/noticias/palestra-eca',
  },
  {
    title: 'Canal de Denúncias',
    description: 'Saiba como e quando acionar o Disque 100.',
    image: '/imagens/disque100.svg',
    href: '/contato',
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
          Nossas Ações Sociais
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {actions.map((item) => (
            <ActionCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}
