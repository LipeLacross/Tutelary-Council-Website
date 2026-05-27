import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface ActionCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function ActionCard({
  title,
  description,
  image,
  href,
}: ActionCardProps) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-lg transition cursor-pointer h-full">
        <CardHeader className="p-0">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-t-xl"
          />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-blue-900 mb-2">{title}</CardTitle>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
