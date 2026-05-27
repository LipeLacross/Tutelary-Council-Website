# Architecture

## 📁 Project Structure

```
tutelary-council-website/
├── public/
│   └── imagens/             # Static images (logos, photos from visits)
│       └── disque100.svg
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── globals.css     # Tailwind v4 + shadcn/ui CSS tokens
│   │   ├── layout.tsx      # Root layout (Header + Footer wrapper)
│   │   ├── page.tsx        # Home page with HeroSection + InfoCards
│   │   ├── sobre/
│   │   │   └── page.tsx    # About the Council and ECA
│   │   ├── servicos/
│   │   │   └── page.tsx    # Services provided
│   │   └── contato/
│   │       └── page.tsx    # Contact form + Disque 100
│   ├── components/
│   │   ├── ui/             # shadcn/ui primitives
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── textarea.tsx
│   │   ├── Header.tsx      # Navigation bar
│   │   ├── Footer.tsx      # Footer with emergency info
│   │   ├── HeroSection.tsx # Home hero with CTA
│   │   ├── InfoCard.tsx    # Clickable info card
│   │   └── ContactForm.tsx # React Hook Form + Zod
│   ├── lib/
│   │   └── utils.ts        # cn() — Tailwind class merge
│   └── __tests__/          # Vitest tests
│       ├── setup.ts
│       ├── Header.test.tsx
│       ├── Footer.test.tsx
│       ├── HeroSection.test.tsx
│       ├── InfoCard.test.tsx
│       └── ContactForm.test.tsx
├── vitest.config.ts
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── biome.json
├── package.json
├── ARCHITECTURE.md
├── README.md
└── README_EN.md
```

## 🎯 Architecture Principles

### Separation of Concerns

- **`src/app/`** — Routing only. Each subdirectory maps to a route.
- **`src/components/`** — Reusable UI. Divided into `ui/` (generic primitives) and domain components.
- **`src/lib/`** — Pure utility functions.
- **`src/__tests__/`** — Tests mirror the component structure.

### Scalability

- **File-based routing** — add a page by creating a directory with `page.tsx`.
- **SSG by default** — all pages statically generated at build time.
- **Component isolation** — self-contained props interfaces for easy composition.

### Reusability

- **shadcn/ui primitives** — accessible, reusable across all pages.
- **`cn()` utility** — safe Tailwind class merging via `clsx` + `tailwind-merge`.
- **`ContactForm`** — encapsulated form with validation, can be dropped anywhere.

### Maintainability

- **TypeScript strict** — catches type errors at compile time.
- **Biome** — single tool for lint + format.
- **Vitest** — fast component testing with jsdom.
- **No runtime deps** — no database, no CMS, no backend.

## 📝 Conventions

| Asset | Convention | Example |
| :---- | :--------- | :------ |
| Directories | `kebab-case` | `sobre/`, `servicos/` |
| Components | `PascalCase` | `HeroSection.tsx` |
| Functions | `camelCase` | `formSchema` |
| Test files | `ComponentName.test.tsx` | `Header.test.tsx` |
| Strings | single quotes (JS), double quotes (JSX) | |

## 🛠️ Maintenance & Expansion

### Dependencies
```bash
npm outdated
npm update
```

### Code Quality
```bash
npm run lint       # Biome
npm run format     # Biome
npm run typecheck  # TypeScript
npm test           # Vitest
```

### Adding a New Page
```bash
mkdir src/app/nova-pagina/
touch src/app/nova-pagina/page.tsx
```

### Adding a New Component
```bash
touch src/components/MyComponent.tsx
touch src/__tests__/MyComponent.test.tsx
```

---

**Last updated**: 2026-05-27  
**Version**: 1.0.0  
**Maintainer**: Felipe Moreira
