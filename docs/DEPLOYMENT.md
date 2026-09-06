# Deployment

**Language:** [English](#english) · [Русский](#русский)

<a id="english"></a>

## Target

Static hosting suitable for a Vite SPA (examples: GitHub Pages, Cloudflare Pages, Netlify, or any HTTPS static host). Production URL stays `[HTTPS URL]` until you set it.

## Environment

No application environment variables are required for the current static build. Never commit secret values if you add host-only deploy credentials later.

| Variable | Required |
|----------|----------|
| *(none)* | — |

## Process

1. `cd frontend` → `npm install` → `npm run build`
2. Publish the Vite output (`frontend/dist`). Repo-root `public/` is already wired as Vite `publicDir` and is copied into the build.
3. Configure the host for SPA fallback to `index.html` on client routes (`/projects`, `/projects/:slug`).
4. No scheduler jobs to confirm (**MSK** N/A for jobs).

## Docker

**No Docker.**

## Related

[`ARCHITECTURE.md`](ARCHITECTURE.md) · [`TROUBLESHOOTING.md`](TROUBLESHOOTING.md)

---

<a id="русский"></a>

## Цель

Static-хостинг для Vite SPA (примеры: GitHub Pages, Cloudflare Pages, Netlify или любой HTTPS static host). URL продакшена: `[HTTPS URL]`, пока не заполните.

## Окружение

Для текущей static-сборки переменные приложения не нужны. Значения секретов хоста не коммитить.

| Переменная | Обязательно |
|------------|-------------|
| *(нет)* | — |

## Процесс

1. `cd frontend` → `npm install` → `npm run build`
2. Опубликовать output Vite (`frontend/dist`). Корневой `public/` подключён как `publicDir` и попадает в сборку.
3. На хосте включить SPA fallback на `index.html` для client routes (`/projects`, `/projects/:slug`).
4. Jobs планировщика проверять не нужно (**MSK** для jobs не применимо).

## Docker

**Docker нет.**

## Связанные docs

[`ARCHITECTURE.md`](ARCHITECTURE.md) · [`TROUBLESHOOTING.md`](TROUBLESHOOTING.md)
