import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '@/components/ContactForm';

vi.mock('@/components/ui/button', () => ({
  Button: ({
    children,
    type,
    className,
  }: {
    children: React.ReactNode;
    type?: string;
    className?: string;
  }) => (
    <button type={type} className={className}>
      {children}
    </button>
  ),
}));

vi.mock('@/components/ui/input', () => ({
  Input: (props: React.InputHTMLAttributes<HTMLInputElement>) => <input {...props} />,
}));

vi.mock('@/components/ui/textarea', () => ({
  Textarea: (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <textarea {...props} />
  ),
}));

vi.mock('@/components/ui/label', () => ({
  Label: ({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) => (
    <label htmlFor={htmlFor}>{children}</label>
  ),
}));

describe('ContactForm', () => {
  it('renderiza todos os campos do formulario', () => {
    render(<ContactForm />);
    expect(screen.getByText('Nome')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Mensagem')).toBeInTheDocument();
    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });

  it('exibe erros de validacao quando campos estao vazios', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByText('Enviar'));

    await waitFor(() => {
      expect(screen.getByText('Nome deve ter ao menos 3 caracteres')).toBeInTheDocument();
      expect(screen.getByText('E-mail inválido')).toBeInTheDocument();
      expect(screen.getByText('Mensagem deve ter ao menos 10 caracteres')).toBeInTheDocument();
    });
  });

  it('exibe erro para email invalido', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByPlaceholderText('Seu nome'), 'Teste');
    await user.type(screen.getByPlaceholderText('email@exemplo.com'), 'email-invalido');
    await user.type(screen.getByPlaceholderText('Descreva sua dúvida ou denúncia...'), 'Mensagem valida com mais de 10 chars');

    await user.click(screen.getByText('Enviar'));

    await waitFor(() => {
      expect(screen.getByText('E-mail inválido')).toBeInTheDocument();
    });
  });
});
