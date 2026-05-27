import Footer from '@/components/Footer';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  it('renderiza informacoes de emergencia', () => {
    render(<Footer />);
    expect(screen.getByText('Emergência: Disque 100')).toBeInTheDocument();
  });

  it('renderiza o endereco placeholder', () => {
    render(<Footer />);
    expect(screen.getByText(/Rua Exemplo/)).toBeInTheDocument();
  });

  it('renderiza a atribuicao do projeto', () => {
    render(<Footer />);
    expect(screen.getByText(/Uniasselvi/)).toBeInTheDocument();
  });
});
