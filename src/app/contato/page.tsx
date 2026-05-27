import ContactForm from '@/components/ContactForm';

export default function Contato() {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in-up">
      <h1 className="text-3xl font-bold text-primary mb-2">
        Fale com o Conselho Tutelar de Belo Jardim
      </h1>
      <div className="w-16 h-1 bg-cta rounded-full mb-8 animate-shimmer" />

      <section className="space-y-6 mb-10">
        <h2 className="text-xl font-semibold text-primary">
          Informações de Contato
        </h2>

        <div className="bg-muted/50 border border-border rounded-lg p-4 space-y-2">
          <p className="font-medium text-foreground">
            Conselho Tutelar de Belo Jardim
          </p>
          <p className="text-sm text-foreground/70">
            Rua São Lourenço, nº 13, Centro — Belo Jardim/PE
          </p>
          <p className="text-sm text-foreground/70">
            Tel: (81) 3726-8731 | (81) 3726-2800
          </p>
          <p className="text-sm text-foreground/70">
            Seg a Dom: 08:00 às 17:00 (plantão 24h)
          </p>
        </div>

        <div className="bg-muted/50 border border-border rounded-lg p-4 space-y-2">
          <p className="font-medium text-foreground">COMDICA</p>
          <p className="text-sm text-foreground/70">
            Av. Dep. José Mendonça Bezerra, nº 220, Centro — Belo Jardim/PE
          </p>
          <p className="text-sm text-foreground/70">Tel: (81) 99136-6088</p>
          <p className="text-sm text-foreground/70">
            E-mail: comdicabjconselho@gmail.com
          </p>
        </div>
      </section>

      <section className="space-y-6 mb-10">
        <h2 className="text-xl font-semibold text-primary">
          Conselheiros Tutelares — Gestão Atual
        </h2>

        <div>
          <h3 className="text-lg font-medium text-secondary mb-2">Titulares</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm text-foreground/80 marker:text-secondary">
            <li>Fabinho Cabeludo</li>
            <li>Adryane Sabrina</li>
            <li>Tiago dos Escoteiros</li>
            <li>Paulo José</li>
            <li>Josenildo Batata</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-secondary mb-2">Suplentes</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm text-foreground/80 marker:text-secondary">
            <li>Professora Janaina</li>
            <li>Maciel Alves</li>
            <li>Washington</li>
            <li>Antonio Carvalho</li>
            <li>Vilma Nunes</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold text-primary">
          Envie sua Mensagem
        </h2>
        <ContactForm />
      </section>

      <div className="bg-cta/10 border-l-4 border-cta p-4 rounded-r-lg flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <img
          src="/imagens/disque100-novo-logo.png"
          alt="Disque 100"
          className="h-12 sm:h-16 w-auto object-contain flex-shrink-0"
        />
        <div>
          <h2 className="text-lg font-semibold text-cta">Disque 100</h2>
          <p className="text-sm text-foreground/70">
            Denúncias anônimas 24h. Sua identidade é preservada. Emergências ligue
            imediatamente.
          </p>
        </div>
      </div>
    </div>
  );
}
