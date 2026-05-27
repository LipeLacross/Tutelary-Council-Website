export default function Servicos() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Serviços do Conselho Tutelar
      </h1>
      <article className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          O Conselho Tutelar oferece diversos serviços à comunidade, todos
          voltados à proteção e garantia dos direitos das crianças e
          adolescentes.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-8">
          Atendimento à Comunidade
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Recebimento de denúncias de violação de direitos</li>
          <li>Orientação a famílias e responsáveis</li>
          <li>Encaminhamento para serviços de assistência social</li>
          <li>Acompanhamento de casos com a Justiça</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-800 mt-8">
          Medidas de Proteção
        </h2>
        <p>
          Quando identifica uma situação de risco, o Conselho aplica medidas
          como encaminhamento a programa oficial de acolhimento familiar,
          inclusão em programas de assistência social e aconselhamento aos
          responsáveis.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-8">
          Como Acionar
        </h2>
        <p>
          Qualquer cidadão pode acionar o Conselho Tutelar. A denúncia pode ser
          anônima e o sigilo é garantido.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded mt-4">
          <p className="font-semibold text-orange-800">
            Disque 100 — Denúncias anônimas 24 horas
          </p>
        </div>
      </article>
    </div>
  );
}
