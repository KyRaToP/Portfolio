# Frontend — Portfolio website

React + TypeScript + Vite SPA for Roman Smolin portfolio.

## Stack

| Package | Purpose |
|---------|---------|
| `react` / `react-dom` | UI |
| `react-router-dom` | Routes |
| `vite` + `@vitejs/plugin-react` | Dev server and build |
| `typescript` | Types |

Static assets are served from repo-root `../public` (see `vite.config.ts`).

## Commands

```powershell
cd c:\projects\Portfolio\frontend
npm install
npm run dev
npm run build
```

Open: http://localhost:5173/

## Environment

No environment variables are required for local `dev` / `build`.  
Do not commit `.env` files if you add any later.

## Docs

See repo-root [`README.md`](../README.md) and [`docs/`](../docs/).
