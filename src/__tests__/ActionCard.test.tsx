import InfoCard from '@/components/InfoCard';
import { render, screen } from '@testing-library/react';

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
  Card: ({
    children,
    className,
  }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
  CardHeader: ({
    children,
    className,
  }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
  CardContent: ({
    children,
    className,
  }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
  CardTitle: ({
    children,
    className,
  }: { children: React.ReactNode; className?: string }) => (
    <h3 className={className}>{children}</h3>
  ),
}));

const defaultProps = {
  titulo: 'Direitos da Criança',
  descricao: 'Conheça os direitos garantidos pelo ECA.',
  link: '/sobre',
};

describe('InfoCard', () => {
  it('renderiza titulo e descricao', () => {
    render(<InfoCard {...defaultProps} />);
    expect(screen.getByText('Direitos da Criança')).toBeInTheDocument();
    expect(
      screen.getByText('Conheça os direitos garantidos pelo ECA.'),
    ).toBeInTheDocument();
  });

  it('linka para o href correto', () => {
    render(<InfoCard {...defaultProps} />);
    const link = screen.getByText('Direitos da Criança').closest('a');
    expect(link).toHaveAttribute('href', '/sobre');
  });
});
