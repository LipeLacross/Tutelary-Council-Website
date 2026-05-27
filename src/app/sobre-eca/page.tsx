export default function SobreECA() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Sobre o ECA</h1>
      <article className="prose lg:prose-xl space-y-4 text-gray-700 leading-relaxed">
        <p>
          O Estatuto da Criança e do Adolescente (ECA), Lei nº 8.069/1990, é um
          marco legal que estabelece os direitos fundamentais de crianças e
          adolescentes no Brasil. Ele representa um avanço significativo na
          legislação brasileira, consolidando o compromisso do país com a
          proteção integral dos direitos da infância e da adolescência.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-8">
          O que é o Conselho Tutelar?
        </h2>
        <p>
          O Conselho Tutelar é uma instituição criada pelo ECA, presente em cada
          município brasileiro, composta por membros eleitos pela comunidade.
          Sua função principal é zelar pelos direitos das crianças e
          adolescentes, atuando de forma autônoma e independente.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-8">
          Principais Atribuições
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Receber e encaminhar denúncias de abuso, exploração e negligência
          </li>
          <li>
            Aplicar medidas de proteção às crianças e adolescentes em situação
            de risco
          </li>
          <li>Aconselhar famílias e responsáveis</li>
          <li>Acompanhar casos perante a Justiça</li>
          <li>
            Promover políticas públicas voltadas ao bem-estar infantojuvenil
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-800 mt-8">
          Direitos Fundamentais
        </h2>
        <p>
          O ECA garante à criança e ao adolescente o direito à vida, à saúde, à
          alimentação, à educação, ao lazer, à profissionalização, à cultura, à
          dignidade, ao respeito, à liberdade e à convivência familiar e
          comunitária.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-8">
          Como acionar o Conselho Tutelar?
        </h2>
        <p>
          Em casos de violação de direitos, qualquer cidadão pode acionar o
          Conselho Tutelar de sua cidade. A denúncia pode ser anônima e é
          garantido o sigilo da identidade do denunciante.
        </p>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded mt-4">
          <p className="font-semibold text-orange-800">
            Disque 100 - Denúncias anônimas 24 horas
          </p>
          <p className="text-sm text-orange-700">
            Canal de denúncia do Governo Federal. Sua identidade é preservada.
          </p>
        </div>
      </article>
    </div>
  );
}
