import fs from 'node:fs';
import path from 'node:path';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import matter from 'gray-matter';
import Link from 'next/link';

interface NewsMeta {
  slug: string;
  title: string;
  date: string;
  image: string;
  description: string;
}

function getNewsList(): NewsMeta[] {
  const dir = path.join(process.cwd(), 'src/content/noticias');
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));

  return files.map((file) => {
    const source = fs.readFileSync(path.join(dir, file), 'utf8');
    const { data } = matter(source);
    return {
      slug: file.replace('.mdx', ''),
      title: data.title || 'Sem título',
      date: data.date || '',
      image: data.image || '/imagens/placeholder.jpg',
      description: data.description || '',
    };
  });
}

export default function Noticias() {
  const newsList = getNewsList();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">
        Notícias e Ações Sociais
      </h1>
      {newsList.length === 0 && (
        <p className="text-gray-500">Nenhuma notícia publicada ainda.</p>
      )}
      <div className="grid md:grid-cols-2 gap-6">
        {newsList.map((news) => (
          <Link key={news.slug} href={`/noticias/${news.slug}`}>
            <Card className="hover:shadow-lg transition cursor-pointer h-full">
              <CardHeader className="p-0">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                <CardTitle className="text-blue-900 mb-2">
                  {news.title}
                </CardTitle>
                <p className="text-gray-600 text-sm">{news.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
