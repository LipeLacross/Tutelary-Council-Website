import fs from 'node:fs';
import path from 'node:path';
import { Button } from '@/components/ui/button';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'src/content/noticias');
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
  return files.map((file) => ({ slug: file.replace('.mdx', '') }));
}

export default async function Noticia({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    'src/content/noticias',
    `${slug}.mdx`,
  );

  if (!fs.existsSync(filePath)) notFound();

  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);

  return (
    <article className="max-w-2xl mx-auto">
      <Link href="/noticias">
        <Button variant="ghost" className="mb-4">
          &larr; Voltar para Notícias
        </Button>
      </Link>
      <h1 className="text-3xl font-bold text-blue-900 mb-2">{data.title}</h1>
      <p className="text-gray-500 mb-8">{data.date}</p>
      <div className="prose prose-lg max-w-none">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
