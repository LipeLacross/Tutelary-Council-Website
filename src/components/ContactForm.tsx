'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres.'),
  email: z.string().email('E-mail inválido.'),
  mensagem: z.string().min(10, 'Mensagem deve ter no mínimo 10 caracteres.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { nome: '', email: '', mensagem: '' },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    alert('Mensagem enviada! O conselho retornará em breve.');
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">
                Nome
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Seu nome"
                  className="border-input focus-visible:ring-ring"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">
                E-mail
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="email@exemplo.com"
                  className="border-input focus-visible:ring-ring"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mensagem"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">
                Mensagem
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Escreva sua dúvida ou denúncia..."
                  rows={5}
                  className="border-input focus-visible:ring-ring resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-cta text-cta-foreground hover:bg-cta/90 shadow-md hover:shadow-lg transition-all"
        >
          Enviar
        </Button>
      </form>
    </Form>
  );
}
