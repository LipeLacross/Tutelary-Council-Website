export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/90 mt-auto animate-fade-in">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-cta to-transparent" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className="bg-white/90 rounded-lg px-3 py-1.5">
              <img
                src="/imagens/logo-prefeitura-bj.png"
                alt="Prefeitura de Belo Jardim"
                className="h-10 w-auto object-contain"
              />
            </div>
            <span className="text-[10px] text-primary-foreground/40 tracking-wide">Apoio institucional</span>
          </div>
          <div className="flex-1 min-w-0 space-y-1">
            <p className="font-bold text-cta tracking-wide">
              Emergência: Disque 100
            </p>
            <div className="text-xs text-primary-foreground/70 space-y-0.5 leading-relaxed">
              <p>Rua São Lourenço, nº 13, Centro — Belo Jardim/PE</p>
              <p>Tel: (81) 3726-8731 | (81) 3726-2800</p>
              <p>Seg a Dom 08:00 às 17:00 (plantão 24h)</p>
            </div>
          </div>
          <div className="text-xs text-primary-foreground/50 flex-shrink-0 space-y-0.5 leading-relaxed">
            <p>Projeto de Extensão Uniasselvi | 2026</p>
            <p>COMDICA: (81) 99136-6088</p>
            <p>comdicabjconselho@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
