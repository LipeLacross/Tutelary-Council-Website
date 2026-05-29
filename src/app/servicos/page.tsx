export default function Servicos() {
  return (
    <div className="max-w-3xl mx-auto animate-fade-in-up">
      <h1 className="text-3xl font-bold text-primary mb-2">
        Serviços do Conselho Tutelar
      </h1>
      <div className="w-16 h-1 bg-cta rounded-full mb-8 animate-shimmer" />
      <div className="relative rounded-xl overflow-hidden mb-8 h-40 md:h-56">
        <img
          src="/imagens/mae-filha-maos.jpeg"
          alt="Proteção infantil"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
        <div className="absolute bottom-3 left-4 text-white">
          <p className="text-base font-bold drop-shadow-lg">Cuidado e proteção</p>
          <p className="text-xs text-white/70">Atendimento humanizado à comunidade</p>
        </div>
      </div>
      <article className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          O Conselho Tutelar de Belo Jardim oferece diversos serviços à
          comunidade, todos voltados à proteção e garantia dos direitos das
          crianças e adolescentes. O atendimento presencial ocorre de segunda a
          domingo, das 08:00 às 17:00, na Rua São Lourenço, nº 13, Centro.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-10">
          Horário de Funcionamento
        </h2>
        <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded-r-lg">
          <p className="font-semibold text-secondary">
            Seg a Dom: 08:00 às 17:00 (plantão 24h)
          </p>
          <p className="text-sm text-foreground/70 mt-1">
            Em casos de emergência, o plantão funciona 24 horas por dia,
            inclusive feriados.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-primary mt-10">
          Atendimento à Comunidade
        </h2>
        <ul className="list-disc pl-6 space-y-2 marker:text-secondary">
          <li>Recebimento de denúncias de violação de direitos</li>
          <li>Orientação a famílias e responsáveis</li>
          <li>Encaminhamento para serviços de assistência social</li>
          <li>Acompanhamento de casos com a Justiça</li>
          <li>Articulação com escolas e unidades de saúde</li>
          <li>Visitas domiciliares para avaliação de risco</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-10">
          Medidas de Proteção
        </h2>
        <p>
          Quando identifica uma situação de risco, o Conselho aplica medidas
          como encaminhamento a programa oficial de acolhimento familiar,
          inclusão em programas de assistência social e aconselhamento aos
          responsáveis.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-10">
          Como Acionar
        </h2>
        <p>
          Qualquer cidadão pode acionar o Conselho Tutelar de Belo Jardim
          pessoalmente na sede, pelo telefone (81) 3726-8731, ou através do
          Disque 100. A denúncia pode ser anônima e o sigilo é garantido.
        </p>

        <div className="bg-cta/10 border-l-4 border-cta p-4 rounded-r-lg mt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <img
            src="/imagens/disque100-novo-logo.png"
            alt="Disque 100"
            className="h-12 sm:h-16 w-auto object-contain flex-shrink-0"
          />
          <div>
            <p className="font-semibold text-cta">
              Disque 100 — Denúncias anônimas 24 horas
            </p>
            <p className="text-sm text-foreground/70">
              Canal do Governo Federal. Sua identidade é preservada.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
