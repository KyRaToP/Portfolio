# Deployment

**Language:** [English](#english) · [Русский](#русский)

## Target

**Cloudflare Pages** (static Vite SPA). Production URL: [https://portfolio-8wn.pages.dev](https://portfolio-8wn.pages.dev)

## Environment

No application environment variables are required. Never commit secret values.


| Variable | Required |
| -------- | -------- |
| *(none)* | —        |


## Process (Cloudflare Pages + Git)

Use **Pages**, not **Workers**.

1. Dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Authorize GitHub and select `KyRaToP/Portfolio`.
3. **Set up builds and deployments:**


| Field                            | Value            |
| -------------------------------- | ---------------- |
| Project name                     | e.g. `portfolio` |
| Production branch                | `main`           |
| Framework preset                 | Vite (or None)   |
| Root directory (advanced) → Path | `frontend`       |
| Build command                    | `npm run build`  |
| Build output directory           | `dist`           |


1. Do **not** use a screen with **Deploy command** `npx wrangler deploy` — that is a **Worker** flow.
2. Select **Save and Deploy**. Confirm SPA routes (`/projects/...`) work (`public/_redirects` must be on `main`).

## Docker

**No Docker.**

## Related

`[ARCHITECTURE.md](ARCHITECTURE.md)` · `[TROUBLESHOOTING.md](TROUBLESHOOTING.md)`

---

## Цель

**Cloudflare Pages** (static Vite SPA). URL продакшена: [https://portfolio-8wn.pages.dev](https://portfolio-8wn.pages.dev).

## Окружение

Переменные приложения не нужны. Секреты не коммитить.


| Переменная | Обязательно |
| ---------- | ----------- |
| *(нет)*    | —           |


## Процесс (Cloudflare Pages + Git)

Нужен именно **Pages**, не **Workers**.

1. Dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Авторизовать GitHub и выбрать `KyRaToP/Portfolio`.
3. **Set up builds and deployments:**


| Поле                             | Значение             |
| -------------------------------- | -------------------- |
| Project name                     | например `portfolio` |
| Production branch                | `main`               |
| Framework preset                 | Vite (или None)      |
| Root directory (advanced) → Path | `frontend`           |
| Build command                    | `npm run build`      |
| Build output directory           | `dist`               |


1. **Не** использовать экран с **Deploy command** `npx wrangler deploy` — это поток **Worker**.
2. **Save and Deploy**. Проверить SPA-маршруты (`public/_redirects` должен быть в `main`).

## Docker

**Docker нет.**

## Связанные docs

`[ARCHITECTURE.md](ARCHITECTURE.md)` · `[TROUBLESHOOTING.md](TROUBLESHOOTING.md)`