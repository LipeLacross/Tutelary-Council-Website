import ContactForm from '@/components/ContactForm';

export default function Contato() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Fale com o Conselho Tutelar
      </h1>
      <ContactForm />
      <div className="mt-8 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
        <h2 className="text-xl font-semibold text-orange-700">Disque 100</h2>
        <p className="text-gray-700">
          Denúncias anônimas 24h. Sua identidade é preservada.
        </p>
      </div>
    </div>
  );
}
