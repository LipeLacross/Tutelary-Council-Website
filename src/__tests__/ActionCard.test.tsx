import { render, screen } from '@testing-library/react';
import ActionCard from '@/components/ActionCard';

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

vi.mock('@/components/ui/card', () => ({
  Card: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
  CardHeader: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
  CardContent: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
  CardTitle: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h3 className={className}>{children}</h3>
  ),
}));

const defaultProps = {
  title: 'Teste Title',
  description: 'Teste Description',
  image: '/imagens/test.svg',
  href: '/teste',
};

describe('ActionCard', () => {
  it('renderiza titulo e descricao', () => {
    render(<ActionCard {...defaultProps} />);
    expect(screen.getByText('Teste Title')).toBeInTheDocument();
    expect(screen.getByText('Teste Description')).toBeInTheDocument();
  });

  it('renderiza imagem com alt correto', () => {
    render(<ActionCard {...defaultProps} />);
    const img = screen.getByAltText('Teste Title');
    expect(img).toHaveAttribute('src', '/imagens/test.svg');
  });

  it('linka para o href correto', () => {
    render(<ActionCard {...defaultProps} />);
    const link = screen.getByText('Teste Title').closest('a');
    expect(link).toHaveAttribute('href', '/teste');
  });
});
