# Frontend — Portfolio website

Phase 3 scaffold: React + TypeScript + Vite.

## Stack

| Package | Purpose |
|---------|---------|
| `react` / `react-dom` | UI |
| `react-router-dom` | Routes |
| `vite` + `@vitejs/plugin-react` | Dev server & build |
| `typescript` | Types |

Static assets are served from repo-root `../public` (configured in `vite.config.ts`).

## Commands

```powershell
cd c:\projects\Portfolio\frontend
npm install
npm run dev
npm run build
```

Open: http://localhost:5173

## Environment

- Template: `.env.example` (copy to `.env` if you need `VITE_*` values)
- Secrets: fill `.env` yourself; it is gitignored
