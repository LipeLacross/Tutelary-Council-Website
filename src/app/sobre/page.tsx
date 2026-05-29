export default function Sobre() {
  return (
    <div className="max-w-3xl mx-auto animate-fade-in-up">
      <h1 className="text-3xl font-bold text-primary mb-2">
        Sobre o Conselho Tutelar de Belo Jardim e o ECA
      </h1>
      <div className="w-16 h-1 bg-cta rounded-full mb-8 animate-shimmer" />
      <div className="flex justify-center gap-4 md:gap-8 mb-8">
        <img
          src="/imagens/brasao-bj.png"
          alt="Brasão de Belo Jardim"
          className="w-20 h-20 md:w-28 md:h-28 object-contain animate-fade-in"
        />
        <img
          src="/imagens/bandeira-bj.png"
          alt="Bandeira de Belo Jardim"
          className="w-28 h-20 md:w-36 md:h-28 object-contain animate-fade-in"
        />
      </div>
      <div className="relative rounded-xl overflow-hidden mb-8 h-48 md:h-64">
        <img
          src="/imagens/familia-maos-juntas.jpeg"
          alt="Família unida"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-lg font-bold drop-shadow-lg">Proteção e cuidado</p>
          <p className="text-sm text-white/70">Família unida pelos direitos da infância</p>
        </div>
      </div>
      <article className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          O Conselho Tutelar é uma instituição criada pelo Estatuto da Criança e
          do Adolescente (ECA), Lei nº 8.069/1990, presente em cada município
          brasileiro. É composto por membros eleitos pela comunidade e atua de
          forma autônoma na defesa dos direitos das crianças e adolescentes.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-10">
          Conselho Tutelar de Belo Jardim
        </h2>
        <p>
          O Conselho Tutelar de Belo Jardim está localizado na Rua São Lourenço,
          nº 13, Centro. Atende a população de segunda a domingo, das 08:00 às
          17:00, com plantão 24 horas para emergências. O conselho conta com
          cinco conselheiros titulares e cinco suplentes, todos eleitos pela
          comunidade para mandato de quatro anos.
        </p>
        <p>
          Além do conselho, o município conta com o COMDICA (Conselho Municipal
          dos Direitos da Criança e do Adolescente), situado na Av. Dep. José
          Mendonça Bezerra, nº 220, Centro, que atua na formulação e
          fiscalização das políticas públicas voltadas à infância e
          adolescência.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-10">
          <img
            src="/imagens/eca-badge.svg"
            alt="ECA - Estatuto da Criança e do Adolescente"
            className="w-56 md:w-72 h-auto object-contain flex-shrink-0"
          />
          <div>
            <h2 className="text-2xl font-semibold text-primary">
              O que é o ECA?
            </h2>
            <p>
              O ECA é um marco legal que estabelece os direitos fundamentais de
              crianças e adolescentes no Brasil, garantindo proteção integral,
              prioridade absoluta e acesso à justiça.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-primary mt-10">
          Direitos Garantidos
        </h2>
        <ul className="list-disc pl-6 space-y-2 marker:text-secondary">
          <li>Vida, saúde e alimentação</li>
          <li>Educação, lazer e cultura</li>
          <li>Dignidade, respeito e liberdade</li>
          <li>Convivência familiar e comunitária</li>
          <li>Proteção contra negligência, exploração e violência</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-10">
          Disque 100
        </h2>
        <div className="bg-cta/10 border-l-4 border-cta p-4 rounded-r-lg flex items-center gap-4">
          <img
            src="/imagens/disque100-novo-logo.png"
            alt="Disque 100"
            className="h-16 w-auto object-contain"
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
