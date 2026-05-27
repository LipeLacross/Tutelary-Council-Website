# Tutelary Council — Institutional Website

[![Portuguese](https://img.shields.io/badge/lang-pt--br-green)](README.md)
[![English](https://img.shields.io/badge/lang-en-blue)](README_EN.md)

> Institutional website developed as a **University Extension Project** for the Systems Analysis and Development course at **UNIASSELVI**.
>
> **SDG 16** — Peace, justice and strong institutions.

## 🔨 Features

- **Home** — Council presentation with info cards
- **About** — Explanation of the Tutelary Council and the Child and Adolescent Statute
- **Services** — Services provided and how to reach the Council
- **Contact** — Form with validation and Disque 100 highlight

## ✔️ Technologies

| Layer | Technology |
| :---- | :--------- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui |
| Forms | React Hook Form + Zod |
| Testing | Vitest + Testing Library |
| Quality | Biome (lint + format) |
| Deploy | Vercel |

## 📁 Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx           # Home
│   ├── sobre/             # About the Council and the Statute
│   ├── servicos/          # Services
│   └── contato/           # Contact form + Disque 100
├── components/
│   ├── ui/                # shadcn/ui primitives
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── InfoCard.tsx
│   └── ContactForm.tsx
├── lib/utils.ts
└── __tests__/              # Vitest tests
```

## 🛠️ Getting Started

```bash
git clone <URL>
cd tutelary-council-website
npm install
npm run dev        # http://localhost:3000
```

### Scripts

| Command | Description |
| :------ | :---------- |
| `npm run dev` | Development |
| `npm run build` | Production build |
| `npm test` | Run tests |
| `npm run lint` | Biome check |
| `npm run format` | Biome format |

## 🌐 Deploy

1. Create a GitHub repository
2. Push the code
3. Import at [Vercel](https://vercel.com)
4. Auto-deploy on every `git push`

---

<div align="center">
  <p><strong>University Extension Project — UNIASSELVI 2026</strong></p>
  <p>Systems Analysis and Development Course</p>
</div>
