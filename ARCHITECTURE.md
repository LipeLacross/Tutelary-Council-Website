# Architecture

## 📁 Project Structure

```
tutelary-council-website/
├── public/                          # Static assets served at root
│   ├── imagens/                    # Placeholder images for cards and news
│   │   ├── disque100.svg
│   │   ├── doacao.svg
│   │   ├── palestra.svg
│   │   └── placeholder.svg
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── globals.css            # Tailwind v4 + shadcn/ui CSS tokens
│   │   ├── layout.tsx             # Root layout (Header + Footer wrapper)
│   │   ├── page.tsx               # Home page
│   │   ├── sobre-eca/
│   │   │   └── page.tsx           # Institutional ECA page
│   │   ├── contato/
│   │   │   └── page.tsx           # Contact page with form
│   │   └── noticias/
│   │       ├── page.tsx           # News listing (reads MDX files)
│   │       └── [slug]/
│   │           └── page.tsx       # Individual news page (SSG)
│   ├── components/
│   │   ├── ui/                    # shadcn/ui primitives
│   │   │   ├── button.tsx        # cva-based button with variants
│   │   │   ├── card.tsx          # Card, CardHeader, CardContent, etc.
│   │   │   ├── form.tsx          # Form context + field wrappers
│   │   │   ├── input.tsx         # Styled input
│   │   │   ├── label.tsx         # Radix label wrapper
│   │   │   └── textarea.tsx      # Styled textarea
│   │   ├── Header.tsx            # Navigation bar
│   │   ├── Footer.tsx            # Footer with emergency info
│   │   ├── HeroSection.tsx       # Home hero with CTA
│   │   ├── ActionCard.tsx        # Clickable card for social actions
│   │   └── ContactForm.tsx       # React Hook Form + Zod form
│   ├── content/
│   │   └── noticias/             # MDX news source files
│   │       ├── campanha-doacao.mdx
│   │       └── palestra-eca.mdx
│   ├── lib/
│   │   └── utils.ts              # cn() — Tailwind class merge utility
│   └── __tests__/                # Vitest test suite
│       ├── setup.ts              # Jest DOM matchers (vitest)
│       ├── Header.test.tsx
│       ├── Footer.test.tsx
│       ├── HeroSection.test.tsx
│       ├── ActionCard.test.tsx
│       └── ContactForm.test.tsx
├── vitest.config.ts               # Vitest + jsdom + path alias config
├── next.config.ts                 # Next.js + MDX config
├── postcss.config.mjs             # PostCSS with @tailwindcss/postcss
├── tsconfig.json                  # TypeScript strict config
├── biome.json                     # Biome linter + formatter config
├── package.json
├── ARCHITECTURE.md
├── README.md
└── README_EN.md
```

## 🎯 Architecture Principles

### Separation of Concerns

The project follows a **layer-based separation**:

- **`src/app/`** — Routing and page composition. Each subdirectory maps to a route. Pages are thin — they import components and content but contain no business logic.
- **`src/components/`** — Reusable UI building blocks. Divided into `ui/` (generic primitives like `Button`, `Card`) and domain components (`Header`, `ContactForm`, `HeroSection`).
- **`src/content/`** — All mutable content lives in MDX files. This decouples content from code, so non-developers can edit news by simply writing Markdown.
- **`src/lib/`** — Pure utility functions with zero side effects.
- **`src/__tests__/`** — Tests mirror the component structure for easy discoverability.

### Scalability

- **File-based routing** (App Router) — adding a new page is just adding a directory with `page.tsx`.
- **SSG by default** — all pages are statically generated at build time. Dynamic content (news) uses `generateStaticParams` for SSG, making the site infinitely scalable without a database.
- **MDX content** — new news items are created by dropping a `.mdx` file into `src/content/noticias/`. No code changes needed.
- **Component isolation** — each component is self-contained with its own props interface, making it trivial to compose new pages.

### Reusability

- **shadcn/ui primitives** — `Button`, `Card`, `Input` are generic, accessible, and used across the entire site.
- **`cn()` utility** — wraps `clsx` + `tailwind-merge` to safely combine Tailwind classes without conflicts.
- **`ContactForm`** — fully encapsulated form logic (validation schema, submit handler) that can be dropped into any page.

### Maintainability

- **TypeScript strict** — catches type errors at compile time.
- **Biome** — single tool for lint + format, zero config drift.
- **Vitest** — fast test runner with jsdom environment for component testing.
- **No runtime dependencies for content** — MDX files are compiled at build time, no CMS or database to maintain.

## 📝 Conventions

### Naming

| Asset | Convention | Example |
| :---- | :--------- | :------ |
| Files/directories | `kebab-case` | `sobre-eca/`, `campanha-doacao.mdx` |
| React components | `PascalCase` | `HeroSection.tsx`, `ActionCard.tsx` |
| Functions/variables | `camelCase` | `getNewsList()`, `formSchema` |
| Types/interfaces | `PascalCase` | `ActionCardProps`, `NewsMeta` |
| CSS classes | Tailwind utility-first | No custom CSS classes |
| Test files | `ComponentName.test.tsx` | `Header.test.tsx` |

### Coding Conventions

- **Single quotes** for JS/TS strings, **double quotes** for JSX attributes (enforced by Biome).
- **Default exports** for page components, **named exports** for utilities.
- **'use client' directive** only on components that use hooks (state, effects, browser APIs).
- **Server Components** by default (Next.js App Router convention).
- **Arrow function components** with explicit `interface Props` types.
- **Zod schemas** co-located with their form component.
- **No comments** — code should be self-documenting. Comments only for non-obvious business rules.

### Clean Code & SOLID

- **Single Responsibility** — each component has one job (e.g., `HeroSection` only renders hero content, `ContactForm` only handles form logic).
- **Open/Closed** — components accept props for customization (`ActionCard` receives `title`, `description`, `image`, `href`).
- **DRY** — `cn()` utility centralizes class merging. shadcn/ui primitives avoid recreating common patterns.
- **KISS** — no unnecessary abstractions. MDX files instead of a CMS.

## 🛠️ Maintenance & Expansion

### Maintenance

**Dependencies:**
```bash
npm outdated              # Check for outdated packages
npm update                # Update within semver range
npm install <pkg>@latest  # Major version upgrades
```

**Bug fixes:**
1. Write a failing test that reproduces the bug.
2. Fix the code.
3. Verify the test passes.
4. Run `npm run lint && npm test` before committing.

**Code quality:**
```bash
npm run lint       # Biome lint
npm run format     # Biome format
npm run typecheck  # TypeScript check
npm test           # Vitest run
```

### Adding New Features

#### 1. New Page
```bash
# Create the route directory
mkdir src/app/nova-pagina/
# Create the page component
touch src/app/nova-pagina/page.tsx
```

#### 2. New Component
```bash
# Domain component
touch src/components/MyComponent.tsx
# Test file
touch src/__tests__/MyComponent.test.tsx
```

#### 3. New News Article
```bash
# Just add an MDX file
touch src/content/noticias/meu-artigo.mdx
```
The MDX frontmatter must include:
```yaml
---
title: 'Article Title'
date: 'YYYY-MM-DD'
image: '/imagens/image.svg'
description: 'Short summary'
---
```

#### 4. New shadcn/ui Component
```bash
npx shadcn-ui@latest add dialog     # Example
npx shadcn-ui@latest add dropdown-menu
```

### Build & Deploy

```bash
npm run build                    # Production build (outputs to .next/)
npm start                        # Start production server
```

Deploy to Vercel:
1. Push to GitHub.
2. Import repo at [vercel.com](https://vercel.com).
3. Vercel auto-detects Next.js — no config needed.
4. Every `git push` triggers a new deployment.

---

**Last updated**: 2026-05-27  
**Project version**: 1.0.0  
**Maintainer**: Felipe Moreira
