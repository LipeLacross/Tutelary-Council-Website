export default function Sobre() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Sobre o Conselho Tutelar e o ECA
      </h1>
      <article className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          O Conselho Tutelar é uma instituição criada pelo Estatuto da Criança e
          do Adolescente (ECA), Lei nº 8.069/1990, presente em cada município
          brasileiro. É composto por membros eleitos pela comunidade e atua de
          forma autônoma na defesa dos direitos das crianças e adolescentes.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-8">
          O que é o ECA?
        </h2>
        <p>
          O ECA é um marco legal que estabelece os direitos fundamentais de
          crianças e adolescentes no Brasil, garantindo proteção integral,
          prioridade absoluta e acesso à justiça.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-8">
          Direitos Garantidos
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Vida, saúde e alimentação</li>
          <li>Educação, lazer e cultura</li>
          <li>Dignidade, respeito e liberdade</li>
          <li>Convivência familiar e comunitária</li>
          <li>Proteção contra negligência, exploração e violência</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-800 mt-8">
          Disque 100
        </h2>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
          <p className="font-semibold text-orange-800">
            Disque 100 — Denúncias anônimas 24 horas
          </p>
          <p className="text-sm text-orange-700">
            Canal do Governo Federal. Sua identidade é preservada.
          </p>
        </div>
      </article>
    </div>
  );
}
