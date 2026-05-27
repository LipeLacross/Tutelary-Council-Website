# Conselho Tutelar — Site Institucional

[![Portuguese](https://img.shields.io/badge/lang-pt--br-green)](README.md)
[![English](https://img.shields.io/badge/lang-en-blue)](README_EN.md)

> Site institucional desenvolvido como **Projeto de Extensão Universitária** para o curso de Análise e Desenvolvimento de Sistemas da **UNIASSELVI**.
>
> **ODS 16** — Paz, justiça e instituições eficazes.

## 🔨 Funcionalidades

- **Home** — Apresentação do Conselho Tutelar com cards informativos
- **Sobre** — Explicação sobre o Conselho Tutelar e o ECA
- **Serviços** — Serviços prestados e como acionar o Conselho
- **Contato** — Formulário com validação e destaque do Disque 100

## ✔️ Técnicas e Tecnologias

| Camada | Tecnologia |
| :----- | :--------- |
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript (strict) |
| Estilização | Tailwind CSS v4 |
| Componentes | shadcn/ui |
| Formulário | React Hook Form + Zod |
| Testes | Vitest + Testing Library |
| Qualidade | Biome (lint + format) |
| Deploy | Vercel |

## 📁 Estrutura

```
src/
├── app/
│   ├── globals.css        # Estilos globais + tokens shadcn/ui
│   ├── layout.tsx         # Layout raiz (Header + Footer)
│   ├── page.tsx           # Home
│   ├── sobre/             # Sobre o Conselho e o ECA
│   ├── servicos/          # Serviços prestados
│   └── contato/           # Formulário + Disque 100
├── components/
│   ├── ui/                # shadcn/ui (button, card, form, input, label, textarea)
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── InfoCard.tsx
│   └── ContactForm.tsx
├── lib/utils.ts
└── __tests__/              # Testes com Vitest
```

## 🛠️ Como Rodar

```bash
git clone <URL>
cd tutelary-council-website
npm install
npm run dev        # http://localhost:3000
```

### Scripts

| Comando | Descrição |
| :------ | :-------- |
| `npm run dev` | Desenvolvimento |
| `npm run build` | Build produção |
| `npm test` | Executa testes |
| `npm run lint` | Biome check |
| `npm run format` | Biome format |

## 🌐 Deploy

1. Crie um repositório no GitHub
2. Faça push do código
3. Importe na [Vercel](https://vercel.com)
4. Deploy automático a cada `git push`

---

<div align="center">
  <p><strong>Projeto de Extensão Universitária — UNIASSELVI 2026</strong></p>
  <p>Curso de Análise e Desenvolvimento de Sistemas</p>
</div>
