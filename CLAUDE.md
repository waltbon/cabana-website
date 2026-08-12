# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `pnpm dev` - Start development server with turbo mode
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Architecture Overview

Next.js 16 App Router with TypeScript. Blog content is a local static dataset (no CMS) — WordPress was fully removed.

### Data Layer (`lib/blog.ts`, `data/blog/*`)
- Blog posts, authors, categories, and tags live as static data in `data/blog/`
- `lib/blog.ts` exposes lookup helpers: `getPostBySlug`, `getAllPostSlugs`, `getCategoryBySlug`, `getAuthorByName`
- Type definitions in `types/blog/*` (`Post`, `PostCategory`, `PostAuthor`)

### Routing
- Dynamic: `/posts/[slug]`
- Archive: `/posts`
- API: `/api/og` (OG images), `/api/contact` (lead capture)

### Data Fetching Patterns
- Server Components with parallel `Promise.all()` calls
- `generateStaticParams()` uses `getAllPostSlugs()` for static generation
- URL-based state for search/filters via `searchParams`
- Debounced search (300ms) in `SearchInput` component

### Configuration Files
- `site.config.ts` - Site metadata (domain, name, description)
- `menu.config.ts` - Navigation menu structure

## Code Style

### TypeScript
- Strict typing with interfaces from `types/blog/*`
- Async params: `params: Promise<{ slug: string }>` (Next.js 15+ pattern)

### Naming
- Components: PascalCase (`PostCard.tsx`)
- Functions/variables: camelCase
- Types/interfaces: PascalCase

### File Structure
- Pages: `/app/**/*.tsx`
- UI components: `/components/ui/*.tsx` (shadcn/ui)
- Feature components: `/components/posts/*.tsx`, `/components/theme/*.tsx`

### Page-Specific Components Pattern

Each page route should have a `_components` folder for page-specific components. The underscore prefix prevents Next.js App Router from treating it as a route.

```
app/
├── page.tsx                    # Home page (imports from _components)
├── _components/                # Home page components
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   ├── cta-section.tsx
│   └── index.ts               # Barrel export (optional)
├── about/
│   ├── page.tsx
│   └── _components/
│       ├── team-section.tsx
│       └── mission-section.tsx
├── services/
│   ├── page.tsx
│   └── _components/
│       ├── services-grid.tsx
│       └── pricing-section.tsx
```

**Guidelines:**
- Keep `page.tsx` files lean - they should primarily compose components
- Page-specific components go in `_components/` within the route folder
- Shared/reusable components go in `/components/` at the root
- Use barrel exports (`index.ts`) for cleaner imports when a folder has 3+ components
- Name section components descriptively: `hero-section.tsx`, `features-section.tsx`

**Example page.tsx:**
```tsx
import { HeroSection } from "./_components/hero-section";
import { FeaturesSection } from "./_components/features-section";
import { CTASection } from "./_components/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </>
  );
}
```

### Component Organization Guidelines

| Location | Purpose | Examples |
|----------|---------|----------|
| `/components/ui/` | Primitive UI components (shadcn) | Button, Card, Input |
| `/components/` | Shared layout/feature components | Footer, Nav, PostCard |
| `/app/*/_components/` | Page-specific sections | HeroSection, TeamGrid |
| `/components/icons/` | SVG icon components | LogoIcon, SocialIcons |

## Environment Variables
```
CLICKUP_API_KEY="pk_..."      # ClickUp API key for contact form lead creation
CLICKUP_LIST_ID="..."         # ClickUp list ID where leads are created
NEXT_PUBLIC_GA_ID="G-..."     # Google Analytics measurement ID
```

## Key Dependencies
- Next.js 16 with React 19
- Tailwind CSS v4 with `@tailwindcss/postcss`
- shadcn/ui components (Radix primitives)
- brijr/craft for layout (`Section`, `Container`, `Article`, `Prose`)

## Design System (Cabana Data)

Design tokens are defined in `app/globals.css` and extracted from Figma.

### Brand Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-cabana-blue` | `#0048ff` | Primary brand, buttons, links |
| `--color-cabana-green` | `#57ff8f` | Gradient accent |
| `--color-cabana-dark` | `#0f172a` | Dark sections (hero, CTA) |
| `--color-cabana-navy` | `#16364d` | Icon wrappers |
| `--color-cabana-light` | `#e0e6f5` | Light section backgrounds |
| `--color-cabana-slate` | `#f1f5f9` | Alternate light backgrounds |

### Typography
- **Font**: Montserrat (configured in layout.tsx)
- **Heading XL**: 72px - Hero headlines
- **Heading LG**: 36px - Section titles
- **Heading MD**: 24px - Subheadings

### Custom Utilities
```css
.text-gradient-cabana    /* Blue-to-green gradient text */
.bg-section-dark         /* Dark section background */
.bg-section-dark-2       /* Dark section background lighter */
.bg-section-light        /* Light blue section background */
.bg-section-slate        /* Slate section background */
.icon-wrapper            /* Circular icon container */
.icon-wrapper-sm/md/lg   /* Icon wrapper sizes */
```

### Figma Integration
- Figma file: "Parte I - Cabana Data"
- Use Figma MCP server for design context
- Extract design tokens from Figma variables when updating styles
