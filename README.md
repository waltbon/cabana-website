# Cabana Data · sitio web

Sitio de [cabanadata.com](https://cabanadata.com): Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS v4. Bilingüe (es/en) con next-intl. El blog es un conjunto de datos estático local en `data/blog/`; no hay CMS.

## Desarrollo

```bash
pnpm install
cp .env.local.example .env.local   # completar las variables
pnpm dev
```

| Comando | Qué hace |
|---|---|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Build de producción |
| `pnpm start` | Servidor de producción |
| `pnpm lint` | ESLint |
| `pnpm seo:lint` | Guardrails de SEO y copy (`scripts/seo-lint.mjs`) |

## Variables de entorno

| Variable | Uso |
|---|---|
| `CLICKUP_API_KEY` | Crear leads del formulario de contacto en ClickUp |
| `CLICKUP_LIST_ID` | Lista de ClickUp donde se crean los leads |
| `NEXT_PUBLIC_GA_ID` | ID de medición de Google Analytics |

## Documentación

- `CLAUDE.md`: arquitectura, convenciones y sistema de diseño.
- `design/DESIGN-RULES.md`: reglas de UI.
- `docs/content/`: guías de tono y marketing; léanse antes de escribir copy.
- `docs/seo/`: estrategia, backlog y corridas del ciclo SEO.
