import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface InfoCardProps {
  titulo: string;
  descricao: string;
  link: string;
}

export default function InfoCard({ titulo, descricao, link }: InfoCardProps) {
  return (
    <Link href={link}>
      <Card className="hover:shadow-lg transition cursor-pointer h-full">
        <CardHeader>
          <CardTitle className="text-blue-900">{titulo}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{descricao}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
