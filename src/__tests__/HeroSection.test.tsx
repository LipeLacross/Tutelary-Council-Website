import HeroSection from '@/components/HeroSection';
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

vi.mock('@/components/ui/button', () => ({
  Button: ({
    children,
    size,
    className,
  }: {
    children: React.ReactNode;
    size?: string;
    className?: string;
  }) => (
    <button type="button" className={className}>
      {children}
    </button>
  ),
}));

describe('HeroSection', () => {
  it('renderiza o titulo principal', () => {
    render(<HeroSection />);
    expect(
      screen.getByText('Protegendo a Infância e Adolescência'),
    ).toBeInTheDocument();
  });

  it('renderiza o botao CTA', () => {
    render(<HeroSection />);
    expect(screen.getByText('Saiba Mais')).toBeInTheDocument();
  });

  it('botao CTA linka para /sobre', () => {
    render(<HeroSection />);
    const link = screen.getByText('Saiba Mais').closest('a');
    expect(link).toHaveAttribute('href', '/sobre');
  });
});
