# React + TypeScript + Vite + Supabase

This is a template for projects using Supabase.

## Includes

- Supabase client + email/password auth (signup, login, logout)
- Protected & guest-only routes with post-login redirect
- Session context provider
- Tailwind CSS
- TanStack React Query (+ Devtools and ESLint plugin)
- React Hook Form + Zod validation
- React Router
- React Hot Toast
- Lucide React icons
- `cn()` utility (clsx + tailwind-merge)
- `@/` path alias for `src/`

## Getting started

1. Clone the repo and install dependencies:

   ```sh
   npm install
   ```

2. Create a project at [supabase.com/dashboard](https://supabase.com/dashboard) (skip if you have one).

3. Copy `.env.example` to `.env` and fill in your project's URL and publishable key (Dashboard → Settings → API Keys):

   ```sh
   cp .env.example .env
   ```

4. Start the dev server:

   ```sh
   npm run dev
   ```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler |

## Notes

- Auth pages live in `src/pages/auth/`, route guards in `src/components/`.
- API calls go in `src/utils/supabase.ts`; wrap them in React Query hooks (`src/hooks/`).
- Zod schemas live in `src/schemas/` and plug into forms via `@hookform/resolvers`.
