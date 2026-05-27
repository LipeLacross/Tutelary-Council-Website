import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface InfoCardProps {
  titulo: string;
  descricao: string;
  link: string;
  index?: number;
}

export default function InfoCard({
  titulo,
  descricao,
  link,
  index = 0,
}: InfoCardProps) {
  return (
    <Link href={link}>
      <Card
        className="group h-full border-border bg-card hover:border-secondary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-fade-in-up relative overflow-hidden"
        style={{
          animationDelay: `${0.2 + index * 0.15}s`,
          animationFillMode: 'both',
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        <CardHeader>
          <CardTitle className="text-primary group-hover:text-secondary transition-colors duration-300">
            {titulo}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {descricao}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Saiba mais
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
