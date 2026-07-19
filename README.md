# Omar Naceur Portfolio

A modern, animated developer portfolio for **Omar Naceur** — an AI Engineering student focused on Agentic AI, LLM systems, and Computer Vision. The frontend is a single-page React app with a backend API server, both sharing a type-safe, contract-first API defined from an OpenAPI spec.

## Stack

- **pnpm workspaces**, Node.js 24, TypeScript 5.9
- **Frontend**: React 19, Vite 7, Tailwind CSS v4, TanStack Query, Framer Motion, Wouter (routing)
- **API**: Express 5, Pino logging
- **DB**: PostgreSQL + Drizzle ORM (`drizzle-zod` for schema validation)
- **Validation**: Zod (`zod/v4`)
- **API codegen**: Orval (generates React Query hooks + Zod schemas from OpenAPI)
- **Build**: esbuild (CJS/ESM bundling for the API server), Vite (frontend)

## Workspace layout

This is a pnpm monorepo split into shared **libs** and **artifacts** (deployable apps).

```
Portfolio-Showcase/
├── lib/                       # shared, reusable packages
│   ├── api-spec/             # source-of-truth OpenAPI spec (openapi.yaml) + Orval config
│   ├── api-zod/              # Zod schemas generated from the spec (runtime validation)
│   ├── api-client-react/     # React Query hooks + custom fetch generated from the spec
│   └── db/                   # Drizzle ORM schema + client (@workspace/db)
├── artifacts/                # deployable apps
│   ├── portfolio/            # React SPA — the public portfolio site (@workspace/portfolio)
│   ├── api-server/          # Express API server (@workspace/api-server)
│   └── mockup-sandbox/       # design/mockup preview sandbox (@workspace/mockup-sandbox)
├── scripts/                  # workspace tooling scripts (@workspace/scripts)
├── attached_assets/          # static assets referenced by the app (e.g. profile photo)
├── pnpm-workspace.yaml       # workspace config, dependency catalog, supply-chain guards
├── tsconfig.base.json        # shared TypeScript settings
```

## Run & Operate

> Requires **pnpm** (the repo enforces it via a `preinstall` guard).

```bash
# Install dependencies
pnpm install

# Run the public portfolio site (Vite dev server)
pnpm --filter @workspace/portfolio run dev

# Run the API server (esbuild build + node, default port 3001)
pnpm --filter @workspace/api-server run dev

# Full typecheck across all packages
pnpm run typecheck

# Typecheck + build all packages
pnpm run build
```

### Database

The API server talks to PostgreSQL. Provide a connection string via the `DATABASE_URL` env var, then push the schema (dev only):

```bash
pnpm --filter @workspace/db run push
```

`scripts/post-merge.sh` runs `pnpm install --frozen-lockfile` and `db push` automatically after merges.

### API codegen

The API contract lives in `lib/api-spec/openapi.yaml`. Regenerate the Zod schemas and React Query client with:

```bash
pnpm --filter @workspace/api-spec run codegen
```

This writes generated code into `lib/api-zod/src/generated` and `lib/api-client-react/src/generated`, keeping validation and the client in sync with the spec.

## Architecture decisions

- **Contract-first API**: A single OpenAPI spec is the source of truth. Orval generates both the server-side validation schemas (`api-zod`) and the client-side React Query hooks (`api-client-react`), so types can't drift between frontend and backend.
- **Shared lib packages**: Schema and API client are published internally as workspace packages (`@workspace/*`) and consumed by artifacts, avoiding duplicated type definitions.
- **Custom fetch layer** (`api-client-react/src/custom-fetch.ts`): A thin wrapper over `fetch` that standardizes error parsing (`ApiError`/`ResponseParseError`), optional bearer-token auth, and base-URL resolution — with runtime handling for both browsers and React Native.
- **API server build**: The Express server is bundled with esbuild into a single ESM file (`dist/index.mjs`), with native/binary packages externalized and Pino logging handled via `esbuild-plugin-pino`.
- **Dependency hardening**: `pnpm-workspace.yaml` pins a minimum package release age (supply-chain defense) and trims unused platform-specific native binaries via `overrides`.

## Product

The portfolio site (`@workspace/portfolio`) is a single-page app presenting Omar Naceur through structured sections:

- **Hero** — name, focus areas (Agentic AI & LLM Systems, Computer Vision), status badge, and CTAs
- **About** — short bio
- **Skills** — technical skillset
- **Projects** — selected work / "pipeline output"
- **Experience** — timeline of roles
- **Contact** — ways to connect

It uses a scroll-progress bar, section-reveal animations (Framer Motion), and a dark, terminal-inspired aesthetic. The API server currently exposes a `/api/healthz` health-check endpoint.

## Environment variables

| Variable | Required by | Description |
| --- | --- | --- |
| `DATABASE_URL` | api-server, db | PostgreSQL connection string |
| `PORT` | api-server, portfolio | Port for the server / Vite dev server |
| `BASE_PATH` | portfolio | Base path for the built frontend assets |

## Gotchas

- Use **pnpm**, not npm/yarn — `preinstall` blocks other package managers.
- Always run `pnpm --filter @workspace/api-spec run codegen` after editing `openapi.yaml`; otherwise generated `api-zod`/`api-client-react` code goes out of sync.
- The `api-server` runs on port **3001** by default; the Vite dev server port is set via `PORT`.
- DB schema is defined in `lib/db/src/schema/index.ts` (currently a stub with guidance comments).

## Pointers

- See the `pnpm-workspace` skill for workspace structure details.
