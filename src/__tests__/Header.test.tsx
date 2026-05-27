import Header from '@/components/Header';
import { render, screen } from '@testing-library/react';

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

vi.mock('@/components/ui/button', () => ({
  Button: ({
    children,
    className,
    variant,
  }: {
    children: React.ReactNode;
    className?: string;
    variant?: string;
  }) => (
    <button type="button" className={className}>
      {children}
    </button>
  ),
}));

describe('Header', () => {
  it('renderiza o titulo do conselho', () => {
    render(<Header />);
    expect(screen.getByText('Conselho Tutelar')).toBeInTheDocument();
  });

  it('renderiza os links de navegacao', () => {
    render(<Header />);
    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Serviços')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  it('possui link para a pagina inicial', () => {
    render(<Header />);
    const homeLink = screen.getByText('Conselho Tutelar').closest('a');
    expect(homeLink).toHaveAttribute('href', '/');
  });
});
