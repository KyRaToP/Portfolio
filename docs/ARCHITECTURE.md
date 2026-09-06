# Architecture

**Language:** [English](#english) · [Русский](#русский)

<a id="english"></a>

## Overview

Personal **static portfolio SPA**. The browser loads a Vite-built React app; project copy and links come from TypeScript data modules; media is served as static files from `public/`. This product is **not** a backend API, database app, or Telegram bot.

There is **no application scheduler**. User-facing clocks, when present, use **MSK (UTC+3)**.

## Runtime pieces

| Piece | Role |
|-------|------|
| UI | React 19 + TypeScript + Vite; routes via React Router |
| Static assets | `public/` (icons, images, videos, OG images, `robots.txt`) |
| Content | `frontend/src/data/site.ts`, `projects.ts` (sourced from `CONTENT_LINKS.md`) |

## Data flow

```text
Browser
 → static HTML/JS/CSS (Vite build)
 → local routes (/ , /projects , /projects/:slug)
 → static media under /icons /images /videos /og
 → external HTTPS links (GitHub, Telegram, mailto)
```

## Trust boundary

- No server-side secrets in this product today.
- Contact email / Telegram / GitHub URLs are **public** content in the frontend data layer (not tokens).
- Do not add API keys into `VITE_*` unless they are safe to expose; prefer server-side hosts for real secrets.

## Docker

**Not used.** Static host or local Vite process only.

## Related docs

[`API.md`](API.md) · [`DATABASE.md`](DATABASE.md) · [`SECURITY.md`](SECURITY.md) · [`DEPLOYMENT.md`](DEPLOYMENT.md)

---

<a id="русский"></a>

## Обзор

Личный **static portfolio SPA**. Браузер загружает React-приложение (Vite); тексты и ссылки — из TypeScript data-модулей; медиа — static файлы из `public/`. Это **не** backend API, не БД-приложение и не Telegram-бот.

**Планировщика приложения нет.** Часы для пользователя, если есть, — **MSK (UTC+3)**.

## Части runtime

| Часть | Роль |
|-------|------|
| UI | React 19 + TypeScript + Vite; маршруты React Router |
| Static assets | `public/` (icons, images, videos, OG, `robots.txt`) |
| Контент | `frontend/src/data/site.ts`, `projects.ts` (источник: `CONTENT_LINKS.md`) |

## Поток данных

```text
Browser
 → static HTML/JS/CSS (сборка Vite)
 → локальные routes (/ , /projects , /projects/:slug)
 → static media /icons /images /videos /og
 → внешние HTTPS-ссылки (GitHub, Telegram, mailto)
```

## Граница доверия

- Server-side секретов в продукте сейчас нет.
- Email / Telegram / GitHub в data-слое — **публичный** контент (не tokens).
- Не класть в `VITE_*` ключи, которые нельзя светить; секреты — только на хосте/сервере.

## Docker

**Не используется.** Только static host или локальный процесс Vite.

## Связанные docs

[`API.md`](API.md) · [`DATABASE.md`](DATABASE.md) · [`SECURITY.md`](SECURITY.md) · [`DEPLOYMENT.md`](DEPLOYMENT.md)
